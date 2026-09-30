import sharp from "sharp";
import { mkdir, readdir, stat, copyFile, unlink } from "node:fs/promises";
import path from "node:path";

const SRC = "sitio viejo";
const OUT = "public/images";

/**
 * Clasificacion de assets disponibles.
 * photo: fotografia real -> se optimiza a webp + avif
 * render: render de producto sobre blanco -> se recorta y optimiza
 * logo: se conserva el original en png
 */
const MAP = {
  "originales/fondo principal2.jpg": { out: "hero/fondo-principal", w: 2400, photo: true },
  "originales/MANGUERA.jpg": { out: "hero/manguera", w: 2000, photo: true },
  "originales/MANGUERA2.jpg": { out: "hero/manguera-vertical", w: 1400, photo: true },
  "fondo2.PNG": { out: "hero/fondo-2", w: 2000, photo: true },
  "por riego.png": { out: "hero/por-riego", w: 1800, photo: true },
  "por riego2.jpg": { out: "hero/por-riego-2", w: 1800, photo: true },
  "riego por goteo_full.jpg": { out: "hero/goteo-full", w: 1600, photo: true },
  "riego por goteo.png": { out: "hero/goteo", w: 1800, photo: true },
  "automatizaci*_02.png": { out: "hero/automatizacion-02", w: 1600, photo: true },
  "Nosotros2.png": { out: "about/nosotros", w: 1800, photo: true },
  "nosotros.jpg": { out: "about/nosotros-alt", w: 1400, photo: true },
  "encabezado de nosotros.png": { out: "about/encabezado", w: 1800, photo: true },
  "contactenenos.png": { out: "contact/contactenos", w: 1200, photo: true },
  "contactenos_ext.jpg": { out: "contact/contactenos-ext", w: 1800, photo: true },
  "principal.png": { out: "hero/principal", w: 1400, photo: true },
  "fondoprincipal.png": { out: "hero/fondo-principal-strip", w: 1400, photo: true },

  // Renders de producto -> recortar a 4:3 centrado
  "instalacion.PNG": { out: "services/instalacion", w: 900, render: true },
  "Rotor-Aspersor-Rain-Bird-5000_2.PNG": { out: "services/aspersor", w: 900, render: true },
  "Rotor-Aspersor-Rain-Bird-5000.PNG": { out: "services/aspersor-alt", w: 900, render: true },
  "automatizaciones.PNG": { out: "services/automatizacion", w: 900, render: true },
  "automatizaci*_02.png": { out: "services/programador", w: 1200, photo: true },
  "Programadores Serie ESP-RZXe.PNG": { out: "services/programador-esp", w: 900, render: true },
  "electrovalvula.PNG": { out: "services/electrovalvula", w: 900, render: true },
  "mantenimiento.PNG": { out: "services/mantenimiento", w: 900, render: true },
  "mantenimiento_2.PNG": { out: "services/mantenimiento-2", w: 900, render: true },
  "asesoramiento.PNG": { out: "services/asesoramiento", w: 900, render: true },
  "cotizaci*.PNG": { out: "services/cotizacion", w: 900, render: true },
  "automatizaci*_03.png": { out: "services/automatizacion-3", w: 900, render: true },
  "automatizaci*.png": { out: "services/automatizacion-sm", w: 900, render: true },
  "por riego.jpg": { out: "services/por-riego-jpg", w: 1400, photo: true },
};

const LOGOS = [
  { from: "logo mundo riego.png", to: "logo-horizontal.png" },
  { from: "originales/logo mundoriego.png", to: "logo-cuadrado.png" },
  { from: "originales/logo original.jpg", to: "logo-original.jpg" },
];

const faviconFrom = "mundoriego.png";

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await listFiles(full)));
    else out.push(full.replace(/\\/g, "/"));
  }
  return out;
}

function segToRe(seg) {
  return new RegExp(
    "^" + seg.replace(/[.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".") + "$",
    "i",
  );
}

async function process(key, cfg) {
  const all = await listFiles(SRC);
  const rel = all.map((f) => f.replace(/^sitio viejo[\/\\]/, ""));
  const segs = key.split("/").map(segToRe);
  const idx = rel.findIndex((f) => {
    const parts = f.split("/");
    if (parts.length < segs.length) return false;
    const tail = parts.slice(parts.length - segs.length);
    return segs.every((re, i) => re.test(tail[i]));
  });

  if (idx === -1) {
    console.log(`  SKIP (no encontrado): ${key}`);
    return;
  }
  const src = all[idx];

  const base = path.join(OUT, cfg.out);
  await mkdir(path.dirname(base), { recursive: true });

  let pipe = sharp(src).rotate();

  if (cfg.render) {
    const meta = await sharp(src).metadata();
    const scale = Math.min(900 / meta.width, 675 / meta.height);
    const cw = Math.min(meta.width, Math.round(900 / scale));
    const ch = Math.min(meta.height, Math.round(675 / scale));
    const left = Math.max(0, Math.min(meta.width - cw, Math.round((meta.width - cw) / 2)));
    const top = Math.max(0, Math.min(meta.height - ch, Math.round((meta.height - ch) / 2)));
    pipe = sharp(src)
      .rotate()
      .extract({ left, top, width: cw, height: ch })
      .resize({ width: cfg.w, withoutEnlargement: true });
  } else {
    pipe = pipe.resize({ width: cfg.w, withoutEnlargement: true });
  }

  await pipe.clone().webp({ quality: 82 }).toFile(`${base}.webp`);
  await pipe
    .clone()
    .avif({ quality: 62 })
    .toFile(`${base}.avif`)
    .catch(() => {});

  const st = await stat(`${base}.webp`);
  console.log(`  OK  ${src.replace(/^sitio viejo[\/\\]/, "")} -> images/${cfg.out}.webp (${Math.round(st.size / 1024)} KB)`);
}

async function main() {
  console.log("Procesando imagenes...");
  const seen = new Set();
  for (const [key, cfg] of Object.entries(MAP)) {
    if (seen.has(cfg.out)) continue;
    seen.add(cfg.out);
    await process(key, cfg);
  }

  await mkdir(path.join(OUT, "brand"), { recursive: true });
  for (const l of LOGOS) {
    const src = path.join(SRC, l.from);
    try {
      await copyFile(src, path.join(OUT, "brand", l.to));
      console.log(`  LOGO ${l.from} -> images/brand/${l.to}`);
    } catch {
      console.log(`  SKIP logo: ${l.from}`);
    }
  }

  // Favicon: generar PNG 32/180/512 desde el logo cuadrado
  const faviconSrc = path.join(SRC, "originales", "logo mundoriego.png");
  await mkdir(path.join(OUT, "brand"), { recursive: true });
  try {
    await sharp(faviconSrc)
      .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(OUT, "brand", "icon-512.png"));
    await sharp(faviconSrc)
      .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(OUT, "brand", "apple-touch-icon.png"));
    await sharp(faviconSrc)
      .resize(32, 32, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(OUT, "favicon.ico.png"));
    console.log("  OK  iconos");
  } catch (e) {
    console.log("  SKIP iconos:", e.message);
  }

  console.log("Listo.");
}

main();
