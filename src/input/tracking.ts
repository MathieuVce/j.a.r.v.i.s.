import {
  FilesetResolver,
  HandLandmarker,
  type HandLandmarkerResult,
} from '@mediapipe/tasks-vision';

const WASM_CDN = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';
const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

/** Paires d'index reliant les 21 landmarks pour dessiner le squelette. */
const HAND_CONNECTIONS: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4], // pouce
  [0, 5],
  [5, 6],
  [6, 7],
  [7, 8], // index
  [5, 9],
  [9, 10],
  [10, 11],
  [11, 12], // majeur
  [9, 13],
  [13, 14],
  [14, 15],
  [15, 16], // annulaire
  [13, 17],
  [17, 18],
  [18, 19],
  [19, 20], // auriculaire
  [0, 17], // paume
];

export class HandTracker {
  private landmarker: HandLandmarker | null = null;
  private lastVideoTime = -1;
  private result: HandLandmarkerResult | null = null;
  private ctx: CanvasRenderingContext2D;

  constructor(
    private video: HTMLVideoElement,
    private debugCanvas: HTMLCanvasElement,
  ) {
    this.ctx = debugCanvas.getContext('2d')!;
  }

  async init(): Promise<void> {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480, facingMode: 'user' },
      audio: false,
    });
    this.video.srcObject = stream;
    await new Promise<void>((res) => {
      this.video.onloadedmetadata = () => res();
    });
    await this.video.play();
    this.debugCanvas.width = this.video.videoWidth;
    this.debugCanvas.height = this.video.videoHeight;

    const fileset = await FilesetResolver.forVisionTasks(WASM_CDN);
    this.landmarker = await HandLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
      runningMode: 'VIDEO',
      numHands: 2,
      minHandDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
  }

  /** À appeler chaque frame ; ne ré-infère que si la vidéo a avancé. */
  update(): HandLandmarkerResult | null {
    if (!this.landmarker) return null;
    if (this.video.currentTime !== this.lastVideoTime) {
      this.lastVideoTime = this.video.currentTime;
      this.result = this.landmarker.detectForVideo(this.video, performance.now());
      this.drawDebug();
    }
    return this.result;
  }

  private drawDebug(): void {
    const { ctx, debugCanvas: c } = this;
    ctx.clearRect(0, 0, c.width, c.height);
    if (!this.result) return;
    ctx.strokeStyle = 'rgba(46, 230, 255, 0.9)';
    ctx.fillStyle = '#ffc857';
    ctx.lineWidth = 2;
    for (const lm of this.result.landmarks) {
      for (const [a, b] of HAND_CONNECTIONS) {
        ctx.beginPath();
        ctx.moveTo(lm[a].x * c.width, lm[a].y * c.height);
        ctx.lineTo(lm[b].x * c.width, lm[b].y * c.height);
        ctx.stroke();
      }
      for (const p of lm) {
        ctx.beginPath();
        ctx.arc(p.x * c.width, p.y * c.height, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
}
