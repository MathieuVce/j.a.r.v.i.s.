import * as THREE from 'three';

/**
 * Panneau de score 3D du mode jeu rythme, en texture canvas (même principe que
 * le panneau d'aide VR de vr.ts). Posé en coordonnées rig au-dessus de
 * l'autoroute, face au joueur : score, combo, multiplicateur, précision et un
 * mot de jugement qui « pop » à chaque frappe.
 */

export type Judge = 'perfect' | 'good' | 'miss';

export interface ScoreStats {
  score: number;
  combo: number;
  mult: number;
  accuracy: number; // 0..1
}

const JUDGE_TEXT: Record<Judge, string> = {
  perfect: 'PARFAIT',
  good: 'BIEN',
  miss: 'RATÉ',
};
const JUDGE_FILL: Record<Judge, string> = {
  perfect: '#7cf0ff',
  good: '#9bff9b',
  miss: '#ff5570',
};
const JUDGE_DUR = 0.6; // s d'affichage du mot de jugement

export class ScorePanel {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private texture: THREE.CanvasTexture;
  private mesh: THREE.Mesh;

  private stats: ScoreStats = { score: 0, combo: 0, mult: 1, accuracy: 1 };
  private judge: Judge | null = null;
  private judgeAge = 0;
  private dirty = true;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 1024;
    this.canvas.height = 384;
    this.ctx = this.canvas.getContext('2d')!;
    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.8, 1.05),
      new THREE.MeshBasicMaterial({ map: this.texture, transparent: true, depthWrite: false }),
    );
    this.mesh.position.set(0, 3.75, -4.3); // au-dessus de l'autoroute, face au joueur
    this.mesh.visible = false;
    this.draw();
  }

  attach(rig: THREE.Group): void {
    if (this.mesh.parent !== rig) rig.add(this.mesh);
  }
  show(): void {
    this.mesh.visible = true;
  }
  hide(): void {
    this.mesh.visible = false;
  }

  set(stats: ScoreStats): void {
    this.stats = stats;
    this.dirty = true;
  }

  popJudge(judge: Judge): void {
    this.judge = judge;
    this.judgeAge = 0;
    this.dirty = true;
  }

  update(dt: number): void {
    if (this.judge) {
      this.judgeAge += dt;
      this.dirty = true; // animation du pop en cours
      if (this.judgeAge > JUDGE_DUR) this.judge = null;
    }
    if (this.dirty) {
      this.draw();
      this.dirty = false;
    }
  }

  private draw(): void {
    const ctx = this.ctx;
    const { width: w, height: h } = this.canvas;
    ctx.clearRect(0, 0, w, h);

    // cadre
    ctx.fillStyle = 'rgba(4, 12, 22, 0.82)';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(46, 230, 255, 0.9)';
    ctx.lineWidth = 5;
    ctx.strokeRect(8, 8, w - 16, h - 16);

    ctx.textAlign = 'center';
    ctx.font = 'bold 34px monospace';
    ctx.fillStyle = '#ffc857';
    ctx.fillText('◉ DRUM HERO', w / 2, 56);

    // score / combo / précision
    const { score, combo, mult, accuracy } = this.stats;
    ctx.font = 'bold 66px monospace';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#2ee6ff';
    ctx.fillText(String(score).padStart(6, '0'), 40, 150);

    ctx.textAlign = 'center';
    ctx.fillStyle = combo > 0 ? '#9bff9b' : '#5b6b78';
    ctx.fillText(`COMBO ${combo}`, w / 2, 150);
    ctx.font = 'bold 40px monospace';
    ctx.fillStyle = mult > 1 ? '#ffc857' : '#5b6b78';
    ctx.fillText(`×${mult}`, w / 2, 200);

    ctx.textAlign = 'right';
    ctx.font = 'bold 50px monospace';
    ctx.fillStyle = '#bfe6ff';
    ctx.fillText(`${Math.round(accuracy * 100)}%`, w - 40, 150);

    // mot de jugement (fondu + montée)
    if (this.judge) {
      const k = Math.min(1, this.judgeAge / JUDGE_DUR);
      ctx.globalAlpha = 1 - k;
      ctx.textAlign = 'center';
      ctx.font = 'bold 84px monospace';
      ctx.fillStyle = JUDGE_FILL[this.judge];
      ctx.fillText(JUDGE_TEXT[this.judge], w / 2, 320 - k * 28);
      ctx.globalAlpha = 1;
    }

    this.texture.needsUpdate = true;
  }
}
