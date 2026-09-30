/**
 * Reoptimiza el hero principal a una resolución acorde a sizes="100vw".
 * El script anterior lo bajo a 1400px, insuficiente para pantallas grandes.
 *
 * Uso: node scripts/fix-hero.mjs
 */
import { stat, rename, unlink } from "node:fs/promises";
import sharp from "sharp";

const HERO = "public/images/hero/fondo-principal.webp";
const TARGET_W = 1920;

const original = (await stat(`${HERO}.orig`)).size / 1024;
const src = `${HERO}.orig`;

let out = null;
let q = 0;
for (let i = 0; i < 8; i++) {
  q = 76 - i * 4;
  const buf = await sharp(src)
    .resize({ width: TARGET_W, height: TARGET_W, fit: "inside", withoutEnlargement: true })
    .webp({ quality: q, effort: 6 })
    .toBuffer();
  out = buf;
  if (buf.length / 1024 <= 240) break;
}

const m = await sharp(out).metadata();
await rename(HERO, `${HERO}.small`);
await sharp(out).toFile(HERO);
await unlink(`${HERO}.small`);

console.log(
  `fondo-principal.webp  ${original.toFixed(0)} KB @2400px -> ${(out.length / 1024).toFixed(0)} KB @${m.width}x${m.height} (q${q})`,
);
