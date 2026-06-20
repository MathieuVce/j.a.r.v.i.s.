/**
 * Sons Jarvis 100% synthétisés via Web Audio — aucun asset.
 * L'AudioContext ne peut démarrer qu'après un geste utilisateur (clic/touche).
 */
export class AudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private whooshGain: GainNode | null = null;

  get enabled(): boolean {
    return this.ctx !== null;
  }

  /** À appeler depuis un événement utilisateur (pointerdown / keydown). */
  init(): void {
    if (this.ctx) return;
    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.2;
    this.master.connect(this.ctx.destination);
    this.startAmbient();
    this.startWhoosh();
    this.startup();
  }

  /** Nappe de fond : deux oscillateurs graves détunés + LFO lent. */
  private startAmbient(): void {
    const ctx = this.ctx!;
    const gain = ctx.createGain();
    gain.gain.value = 0.03;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 220;
    filter.connect(gain).connect(this.master!);

    for (const [type, freq] of [
      ['triangle', 55],
      ['sine', 82.4],
    ] as const) {
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.value = freq;
      osc.connect(filter);
      osc.start();
    }
    // respiration lente de la nappe
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.08;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain).connect(gain.gain);
    lfo.start();
  }

  /** Souffle continu (bruit filtré) dont l'intensité suit zoom/orbite. */
  private startWhoosh(): void {
    const ctx = this.ctx!;
    const len = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;

    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 700;
    filter.Q.value = 0.8;
    this.whooshGain = ctx.createGain();
    this.whooshGain.gain.value = 0;
    src.connect(filter).connect(this.whooshGain).connect(this.master!);
    src.start();
  }

  /** Intensité 0..1, à appeler chaque frame. */
  setWhoosh(intensity: number): void {
    if (!this.ctx || !this.whooshGain) return;
    const v = Math.min(0.07, intensity * 0.07);
    this.whooshGain.gain.setTargetAtTime(v, this.ctx.currentTime, 0.06);
  }

  private tone(
    freqStart: number,
    freqEnd: number,
    duration: number,
    type: OscillatorType,
    volume: number,
    delay = 0,
  ): void {
    if (!this.ctx) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freqStart, t0);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, freqEnd), t0 + duration);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(volume, t0 + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain).connect(this.master!);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }

  /** Survol d'un objet. */
  blip(): void {
    this.tone(1180, 1480, 0.06, 'sine', 0.04);
  }

  /** Cible verrouillée (grab). */
  lock(): void {
    this.tone(880, 1320, 0.09, 'sine', 0.05);
  }

  /** Relâchement. */
  releaseSound(): void {
    this.tone(740, 320, 0.12, 'sine', 0.04);
  }

  /** Boot sequence. */
  private startup(): void {
    const notes = [440, 659];
    notes.forEach((f, i) => this.tone(f, f, 0.14, 'sine', 0.04, i * 0.1));
  }
}
