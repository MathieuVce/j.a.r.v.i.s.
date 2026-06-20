import * as THREE from 'three';
import { SPACE_ENV } from './environment';

// ----------------------------------------------------- stations & satellites

export type StationKind = 'iss' | 'ring' | 'sat' | 'shuttle' | 'rocket' | 'telescope';

let SOLAR_TEX: THREE.CanvasTexture | null = null;
/** Texture de panneau solaire : cellules bleu nuit, grille et bus-bars argent. */
function solarPanelTexture(): THREE.CanvasTexture {
  if (SOLAR_TEX) return SOLAR_TEX;
  const S = 64;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const ctx = c.getContext('2d')!;
  ctx.fillStyle = '#0a1838';
  ctx.fillRect(0, 0, S, S);
  const cell = S / 8;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      ctx.fillStyle = (x + y) % 2 ? '#16306e' : '#1d3c84';
      ctx.fillRect(x * cell + 1, y * cell + 1, cell - 2, cell - 2);
    }
  }
  ctx.strokeStyle = 'rgba(150,170,210,0.5)'; // bus-bars
  ctx.lineWidth = 1;
  for (let i = 0; i <= 8; i++) {
    ctx.beginPath();
    ctx.moveTo(i * cell, 0);
    ctx.lineTo(i * cell, S);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * cell);
    ctx.lineTo(S, i * cell);
    ctx.stroke();
  }
  SOLAR_TEX = new THREE.CanvasTexture(c);
  SOLAR_TEX.colorSpace = THREE.SRGBColorSpace;
  SOLAR_TEX.wrapS = SOLAR_TEX.wrapT = THREE.RepeatWrapping;
  SOLAR_TEX.anisotropy = 4;
  return SOLAR_TEX;
}

/**
 * Engin spatial attrapable et détaillé : un Mesh « corps » (MeshStandard, pour
 * le survol émissif partagé avec les planètes) garni de détails enfants. La
 * géométrie est cuite « nez vers +Z » et le mesh reste à rotation identité,
 * pour que scene.ts puisse l'orienter selon sa trajectoire (faceVelocity) sans
 * conflit. Mains nues comme manettes peuvent le saisir.
 */
export function makeStation(kind: StationKind): THREE.Mesh {
  // matériaux frais à chaque engin : le survol monte l'émissif sans impacter
  // les autres appareils
  // reflets « vaisseau spatial » : metalness élevé + roughness bas + env map
  // spatiale (soleil/espace) → le métal brille et reflète, au lieu d'être terne
  const hull = (color = 0xc9d2da) =>
    new THREE.MeshStandardMaterial({
      color,
      metalness: 0.55,
      roughness: 0.4,
      envMap: SPACE_ENV,
      envMapIntensity: 0.7,
      emissive: 0x2ee6ff,
      emissiveIntensity: 0.05,
    });
  const metal = (color = 0x8c98a4) =>
    new THREE.MeshStandardMaterial({
      color,
      metalness: 0.95,
      roughness: 0.16,
      envMap: SPACE_ENV,
      envMapIntensity: 1.0,
      emissive: 0x2ee6ff,
      emissiveIntensity: 0.04,
    });
  const dark = () =>
    new THREE.MeshStandardMaterial({
      color: 0x14181f,
      metalness: 0.4,
      roughness: 0.6,
      envMap: SPACE_ENV,
      envMapIntensity: 0.5,
      emissive: 0x2ee6ff,
      emissiveIntensity: 0.04,
    });
  const gold = () =>
    new THREE.MeshStandardMaterial({
      color: 0xd8a23a,
      metalness: 0.9,
      roughness: 0.28,
      envMap: SPACE_ENV,
      envMapIntensity: 1.0,
      emissive: 0xffaa33,
      emissiveIntensity: 0.12,
    });
  const glass = () =>
    new THREE.MeshStandardMaterial({
      color: 0x0a2030,
      metalness: 0.6,
      roughness: 0.1,
      envMap: SPACE_ENV,
      envMapIntensity: 1.0,
      emissive: 0x39d0ff,
      emissiveIntensity: 0.45,
    });
  const solar = () =>
    new THREE.MeshStandardMaterial({
      map: solarPanelTexture(),
      color: 0x9fb6e8,
      metalness: 0.4,
      roughness: 0.4,
      envMap: SPACE_ENV,
      envMapIntensity: 0.5,
      emissive: 0x16357a,
      emissiveIntensity: 0.3,
      side: THREE.DoubleSide,
    });

  // aile/panneau solaire : panneau texturé + longeron + mât
  const wing = (span: number, chord: number): THREE.Group => {
    const g = new THREE.Group();
    g.add(new THREE.Mesh(new THREE.BoxGeometry(span, 0.008, chord), solar()));
    g.add(new THREE.Mesh(new THREE.BoxGeometry(span, 0.018, 0.014), metal())); // longeron
    return g;
  };
  // parabole (bol ouvert vers +Z par défaut)
  const dish = (r: number): THREE.Mesh => {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 22, 10, 0, Math.PI * 2, 0, Math.PI * 0.34),
      metal(0xe2e8ee),
    );
    (m.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
    m.rotation.x = -Math.PI / 2; // concavité vers +Z
    const feed = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, r * 0.9, 6), metal());
    feed.rotation.x = Math.PI / 2;
    feed.position.z = r * 0.4;
    m.add(feed);
    return m;
  };
  // tuyère évasée, ouverture vers -Z (arrière)
  const nozzle = (rThroat: number, rExit: number, len: number): THREE.Mesh => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(rExit, rThroat, len, 16, 1, true), dark());
    (m.material as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
    m.rotation.x = -Math.PI / 2;
    return m;
  };
  // aile delta extrudée (triangle balayé), épaisseur fine
  const deltaWing = (
    span: number,
    rootC: number,
    tipC: number,
    sweep: number,
    mat: THREE.Material,
  ): THREE.Mesh => {
    const s = new THREE.Shape();
    s.moveTo(0, rootC / 2);
    s.lineTo(0, -rootC / 2);
    s.lineTo(span, -sweep - tipC / 2);
    s.lineTo(span, -sweep + tipC / 2);
    s.closePath();
    const geo = new THREE.ExtrudeGeometry(s, { depth: 0.014, bevelEnabled: false });
    geo.translate(0, 0, -0.007);
    geo.rotateX(-Math.PI / 2); // plan de l'aile à l'horizontale (envergure = X, corde = Z)
    return new THREE.Mesh(geo, mat);
  };
  // panache de réacteur additif (fixe, non affecté par le survol émissif)
  const plume = (r: number, len: number): THREE.Mesh => {
    const m = new THREE.Mesh(
      new THREE.ConeGeometry(r, len, 16, 1, true),
      new THREE.MeshBasicMaterial({
        color: 0xffb15a,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    );
    m.rotation.x = Math.PI / 2; // pointe vers -Z
    return m;
  };

  let body: THREE.Mesh;

  if (kind === 'iss') {
    // module central + poutre transversale, 4 ailes solaires, radiateurs, capsule
    body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.42, 16).rotateX(Math.PI / 2),
      hull(),
    );
    const truss = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.05, 0.05), metal());
    body.add(truss);
    for (const sx of [-1, 1]) {
      for (const oz of [0.2, -0.2]) {
        const w = wing(0.62, 0.34);
        w.position.set(sx * 0.78, 0, oz);
        body.add(w);
      }
      const rad = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.012, 0.26), hull(0xeef2f6));
      rad.position.set(sx * 0.34, -0.12, 0);
      body.add(rad);
      const lab = new THREE.Mesh(
        new THREE.CylinderGeometry(0.07, 0.07, 0.3, 14).rotateX(Math.PI / 2),
        hull(0xe6ebf0),
      );
      lab.position.set(sx * 0.13, 0, 0.04);
      body.add(lab);
    }
    const capsule = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.16, 14), gold());
    capsule.position.z = 0.34;
    capsule.rotation.x = Math.PI / 2;
    const dock = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.1, 12).rotateX(Math.PI / 2),
      metal(),
    );
    dock.position.z = 0.24;
    body.add(capsule, dock);
  } else if (kind === 'sat') {
    // satellite de télécom : bus en feuille dorée, 2 ailes, grande parabole
    body = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.32), gold());
    for (const sx of [-1, 1]) {
      const w = wing(0.5, 0.24);
      w.position.x = sx * 0.42;
      body.add(w);
    }
    const d = dish(0.16);
    d.position.z = 0.22;
    body.add(d);
    const sub = dish(0.07);
    sub.position.set(0.08, 0.12, 0.18);
    body.add(sub);
    for (const sx of [-1, 1]) {
      const ant = new THREE.Mesh(
        new THREE.CylinderGeometry(0.004, 0.004, 0.28, 6).rotateX(Math.PI / 2),
        metal(),
      );
      ant.position.set(sx * 0.06, -0.1, 0.1);
      body.add(ant);
    }
    const thr = nozzle(0.02, 0.04, 0.08);
    thr.position.z = -0.18;
    body.add(thr);
  } else if (kind === 'telescope') {
    // télescope spatial type Hubble : tube argenté, écoutille, 2 ailes, antennes
    body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.15, 0.6, 22).rotateX(Math.PI / 2),
      hull(0xd7dde3),
    );
    const wrap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.152, 0.152, 0.18, 22).rotateX(Math.PI / 2),
      gold(),
    );
    wrap.position.z = -0.1;
    body.add(wrap);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.02, 10, 28), metal());
    rim.position.z = 0.3;
    body.add(rim);
    const aperture = new THREE.Mesh(new THREE.CircleGeometry(0.14, 22), dark());
    aperture.position.z = 0.3;
    body.add(aperture);
    const door = new THREE.Mesh(new THREE.CircleGeometry(0.15, 22), hull(0xeef2f6));
    door.position.set(0, 0.13, 0.42);
    door.rotation.x = -0.9;
    body.add(door);
    for (const sx of [-1, 1]) {
      const w = wing(0.46, 0.3);
      w.position.x = sx * 0.34;
      body.add(w);
      const hga = dish(0.06);
      hga.position.set(sx * 0.05, -0.16, -0.05);
      body.add(hga);
    }
  } else if (kind === 'ring') {
    // station-roue (gravité par rotation) : moyeu, anneau d'habitation, rayons
    body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.5, 16).rotateX(Math.PI / 2),
      hull(),
    );
    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.44, 0.08, 16, 40), hull(0xdfe6ec));
    body.add(wheel);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.03, 0.03), metal());
      spoke.position.set(Math.cos(a) * 0.22, Math.sin(a) * 0.22, 0);
      spoke.rotation.z = a;
      body.add(spoke);
      const cab = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.12), glass());
      cab.position.set(Math.cos(a) * 0.44, Math.sin(a) * 0.44, 0);
      body.add(cab);
    }
    for (const sx of [-1, 1]) {
      const w = wing(0.4, 0.22);
      w.position.set(0, 0, sx * 0.3);
      body.add(w);
    }
    const dock = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.16, 12).rotateX(Math.PI / 2),
      metal(),
    );
    dock.position.z = 0.3;
    body.add(dock);
  } else if (kind === 'rocket') {
    // lanceur lourd : étage principal + coiffe, 2 boosters, ailerons, tuyères
    body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.72, 24).rotateX(Math.PI / 2),
      hull(0xf2f4f7),
    );
    const fairing = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 24), hull(0xf2f4f7));
    fairing.position.z = 0.51;
    fairing.rotation.x = Math.PI / 2;
    body.add(fairing);
    for (const z of [0.22, -0.05, -0.28]) {
      // bandes / interétage
      const band = new THREE.Mesh(
        new THREE.CylinderGeometry(0.122, 0.122, 0.04, 24).rotateX(Math.PI / 2),
        dark(),
      );
      band.position.z = z;
      body.add(band);
    }
    const logo = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.16, 0.002), dark());
    logo.position.set(0, 0, 0.34);
    logo.rotation.y = Math.PI / 2;
    body.add(logo);
    for (const sx of [-1, 1]) {
      const booster = new THREE.Mesh(
        new THREE.CylinderGeometry(0.06, 0.06, 0.5, 16).rotateX(Math.PI / 2),
        hull(0xe7eaee),
      );
      booster.position.set(sx * 0.17, 0, -0.08);
      const bnose = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.16, 16), hull(0xe7eaee));
      bnose.position.z = 0.33;
      bnose.rotation.x = Math.PI / 2;
      booster.add(bnose);
      const bnoz = nozzle(0.03, 0.055, 0.1);
      bnoz.position.z = -0.3;
      booster.add(bnoz);
      body.add(booster);
      // ailerons de l'étage central
      const fin = deltaWing(0.16, 0.2, 0.06, 0.08, hull(0xe7eaee));
      fin.position.set(0, 0, -0.34);
      fin.rotation.z = sx > 0 ? 0 : Math.PI;
      body.add(fin);
    }
    // grappe de tuyères centrales
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      const n = nozzle(0.035, 0.06, 0.12);
      n.position.set(Math.cos(a) * 0.05, Math.sin(a) * 0.05, -0.38);
      body.add(n);
    }
    const fire = plume(0.1, 0.5);
    fire.position.z = -0.62;
    body.add(fire);
  } else {
    // navette orbitale : fuselage, nez à tuiles, hublots, ailes delta, dérive,
    // nacelles OMS et 3 moteurs principaux
    body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.11, 0.5, 18).rotateX(Math.PI / 2),
      hull(0xeef1f4),
    );
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 18), dark());
    nose.position.z = 0.35;
    nose.rotation.x = Math.PI / 2;
    body.add(nose);
    const cockpit = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.1), glass());
    cockpit.position.set(0, 0.06, 0.22);
    body.add(cockpit);
    const bay = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.04, 0.32), dark());
    bay.position.set(0, 0.07, -0.02);
    body.add(bay);
    for (const sx of [-1, 1]) {
      const w = deltaWing(0.28, 0.36, 0.08, 0.18, hull(0xeef1f4));
      w.position.set(sx * 0.02, -0.02, -0.06);
      if (sx < 0) w.scale.x = -1;
      // bord d'attaque sombre (tuiles)
      const edge = deltaWing(0.28, 0.36, 0.08, 0.18, dark());
      edge.position.set(sx * 0.02, -0.03, -0.06);
      if (sx < 0) edge.scale.x = -1;
      body.add(w, edge);
      const oms = new THREE.Mesh(
        new THREE.CylinderGeometry(0.035, 0.05, 0.14, 12).rotateX(Math.PI / 2),
        hull(0xeef1f4),
      );
      oms.position.set(sx * 0.06, 0.06, -0.24);
      body.add(oms);
    }
    const fin = deltaWing(0.16, 0.22, 0.05, 0.12, hull(0xeef1f4));
    fin.rotation.z = Math.PI / 2; // dérive verticale
    fin.position.set(0, 0.05, -0.22);
    body.add(fin);
    for (const off of [
      [0, 0.04],
      [-0.05, -0.02],
      [0.05, -0.02],
    ]) {
      const eng = nozzle(0.025, 0.045, 0.1);
      eng.position.set(off[0], off[1], -0.26);
      body.add(eng);
    }
  }

  return body;
}
