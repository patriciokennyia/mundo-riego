# Avances — Rediseño Mundo Riego

## Contexto general

Rediseño integral del sitio de **Mundo Riego** (mundo-riego.com.ar), empresa argentina de riego
residencial y espacios verdes. El objetivo es generar consultas por WhatsApp/contacto, no e-commerce
en esta etapa.

**Stack**: Next.js 15.5.26 (App Router, Turbopack) + React 19.1.0 + TypeScript + Tailwind v4.

**Directorio de trabajo**: `C:\Users\Patricio\Documents\sitios\mundoriego\sitio nuevo`
(el path contiene un espacio: hay que entrecomillarlo siempre en los comandos).

**Alcance de negocio**: solo residencial y espacios verdes. **No** es agrícola/pivote.

**Investigación previa**: benchmark de competidores AR y keyword research en `seo-mundo-riego.md`
(34.934 bytes: 60 keywords, 33 long-tails, 15 competidores, árbol de URLs con title/meta, plan schema).

---

## Sesión: Implementación y verificación (septiembre 2026)

### 1. Cierre de la Fase 1-2 (auditoría e investigación)

- **Objetivo**: Cerrar la investigación previa al desarrollo.
- **Cambios**: Auditoría del sitio viejo y benchmark de competidores (Cypress, Highgarden, Irrinor,
  LLIR, Rain Bird AR, etc.) volcados a `seo-mundo-riego.md`.
- **Verificado**: investigation file de 34.934 bytes en la raíz.
- **Pendiente**: ninguno.

### 2. Archivos base de SEO y error

- **Objetivo**: Cerrar los archivos que faltaban para que el sitio esté completo.
- **Cambios**:
  - `src/app/sitemap.ts` — genera las 20 URLs (7 estáticas + 8 servicios + 5 soluciones)
    con `lastModified`, `changeFrequency` y `priority`.
  - `src/app/robots.ts` — `User-Agent: *`, `Allow: /`, `Host` y `Sitemap`.
  - `src/app/not-found.tsx` — 404 con navegación a las secciones principales y CTA doble.
  - `src/app/error.tsx` — pantalla de error con `reset()`, enlace a home/contacto y WhatsApp.
  - `next.config.ts` — `images.formats: ["image/avif","image/webp"]`, `deviceSizes`/`imageSizes`,
    `minimumCacheTTL` 30 días, `poweredByHeader: false`, headers de seguridad
    (X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy) y cache
    inmutable para `/images/:path*`.
- **Verificado**: `/sitemap.xml` y `/robots.txt` responden 200; 404 real en ruta inexistente.
- **Pendiente**: ninguno.

### 3. Primer build y corrección de errores de compilación

- **Objetivo**: Conseguir un build de producción limpio.
- **Problema 1**: `FinalCta.tsx` usaba un componente local `Link` con una prop `secondary`
  que no existía en `ButtonLink` → error de tipos.
- **Fix 1**: Reemplazado por `ButtonLink` con `variant="outlineDark"` + `Icon name="chat"`.
- **Problema 2**: Imports sin usar en `nosotros`, `preguntas-frecuentes`, `proyectos`,
  `ContactForm` y `page.tsx`.
- **Fix 2**: Imports eliminados vía script PowerShell con `UTF8Encoding($false)`.
- **Problema 3**: `<a href="/">` en las migas de `nosotros` y `proyectos` viola
  `@next/next/no-html-link-for-pages`.
- **Fix 3**: Cambiados a `Link` de `next/link` (con import explícito en `proyectos`).
- **Problema 4**: `page.tsx` tenía una línea rota por un edit anterior
  (`title="Proyectos reales"` colgando dentro de un `<p>`).
- **Fix 4**: Restaurado el párrafo de la galería.
- **Problema 5**: Un comentario JSX sin cerrar
  (`{/* ... PROCESO ... */}` traga `<ProcessSection />`) → warning de import sin usar.
- **Fix 5**: Comentario cerrado correctamente.
- **Resultado**: **26 páginas estáticas** generadas, First Load JS **146 kB** compartidos.

### 4. Testing de rutas (24/24 OK)

- **Objetivo**: Confirmar que todas las rutas responden.
- **Verificado** con `next start -p 3111`:

| Grupo | Rutas | Estado |
|---|---|---|
| Home | `/` | 200 |
| Estáticas | `/servicios` `/soluciones` `/proyectos` `/nosotros` `/preguntas-frecuentes` `/contacto` | 200 |
| Servicios | 8 slugs | 200 |
| Soluciones | 5 slugs | 200 |
| SEO | `/sitemap.xml` `/robots.txt` | 200 |
| Error | `/ruta-inexistente-123` | 404 (esperado) |

- **Verificado**: 0 fallos.
- **Pendiente**: ninguno.

### 5. Corrección de corrupción de caracteres en `catalog.ts`

- **Objetivo**: El modelo **no puede ver imágenes** y la herramienta Write inyecta
  caracteres corruptos. Se hizo un escaneo de fusiones minúscula+mayúscula dentro de texto.
- **Problema**: 5 casos reales de corrupción (el resto eran falsos positivos de camelCase):
  - L108: `"Microaspersión para canteros yÉtape plantación joven"` → `"... y plantación joven"`
  - L230: `"Protecciones yConexiones de seguridad"` → `"... y conexiones de seguridad"`
  - L353: `"el agua que dejás de wasteful"` → `"... de desperdiciar"`
  - L426: `"Riego para huertas, quinta yFcultivo doméstico."` → `"... quintas y cultivo doméstico."`
  - L431: `audience: "Huertas, quintas yFincaFusion"` → `"... y fincas"`
- **Verificado**: escaneo posterior sin fusiones reales.
- **Nota**: los `�` que aparecen en la consola de PowerShell son problema de **codificación de
  salida**, no del archivo. Los archivos están en UTF-8 válido.
- **Pendiente**: ninguno.

### 6. SEO: título duplicado y meta descriptions largas

- **Problema 1**: El layout define `title.template: "%s | Mundo Riego"`, y las páginas
  `/servicios/[slug]`, `/soluciones/[slug]`, `/proyectos`, `/nosotros` y `/soluciones` agregaban
  `| Mundo Riego` por su cuenta → títulos como
  `"Instalación de riego automático | Mundo Riego | Mundo Riego"`.
- **Problema 2**: `description` de servicios llegó a 195 caracteres (Google corta en ~155-160).
- **Fix**:
  - Nuevo helper `src/lib/seo.ts` con:
    - `clampMeta(text, max = 155)` — recorta en el último espacio y agrega `...`, sin partir palabras.
    - `metaFor(base, cta)` — arma `resumen + llamada a la acción` ya recortado.
    - `pageMeta(path, title, description)` — metadata completa y consistente por página.
  - `servicios/[slug]` y `soluciones/[slug]` ahora usan `title: service.title` (sin sufijo)
    y `description: metaFor(service.excerpt)`.
  - Se quitó el ` | Mundo Riego` de los títulos de las páginas estáticas.
  - El home usa `title: { absolute: HOME_TITLE }` para que el template no lo duplique.
- **Verificado** (títulos finales):
  - `/` → `Riego automático para casas, countries y empresas | Mundo Riego` (63)
  - `/servicios` → `Servicios de riego | Diseño, instalación y mantenimiento | Mundo Riego` (70)
  - `/proyectos` → `Proyectos de riego | Trabajos reales | Mundo Riego` (50)
  - `/servicios/bombas-y-bombeo` → `Bombas y sistemas de impulsión | Mundo Riego` (44)
  - `/soluciones/huertas-y-quintas` → `Huertas y quintas | Mundo Riego` (31)
- **Verificado**: todas las meta descriptions entre 110 y 155 caracteres.

### 7. SEO: `og:url` heredado del home

- **Problema**: el `openGraph` del layout fijaba `url: site.url` y un `title` propio, así que
  **todas** las subpáginas declaraban `og:url = https://mundo-riego.com.ar` y el mismo `og:title`
  que el home.
- **Fix**:
  - Se quitaron `url`, `title` y `description` del `openGraph`/`twitter` del layout
    (`src/app/layout.tsx`), dejando solo `type`, `locale`, `siteName` e `images`.
  - Se aplicó `pageMeta()` a las 6 páginas estáticas internas
    (`contacto`, `nosotros`, `proyectos`, `servicios`, `soluciones`, `preguntas-frecuentes`).
  - `servicios/[slug]` y `soluciones/[slug]` agregan `twitter` y `og:url` propios.
- **Verificado**: cada página declara su `canonical`, `og:url`, `og:title` y `twitter:title` propios.

### 8. Accesibilidad: `<h1>` faltante y `alt` vacíos

- **Problema 1**: `/servicios`, `/soluciones` y `/preguntas-frecuentes` **no tenían ningún `<h1>`**
  (el `SectionHeader` siempre renderizaba `<h2>`).
- **Fix 1**: `SectionHeader` acepta un nuevo prop `as?: "h1" | "h2" | "h3"` (default `"h2"`)
  y renderiza `<Heading>`. Se aplicó `as="h1"` en las 3 páginas.
- **Problema 2**: **todas** las imágenes de contenido renderizaban `alt=""`, lo que las marca
  como decorativas para lectores de pantalla y para buscadores.
- **Fix 2**: alts descriptivos en:
  - `Hero.tsx` → `"Sistema de riego automático por aspersión en un jardín residencial, instalado y funcionando"`
  - `Cards.tsx` `ServiceCard` → `` alt={`${service.title}: ${service.short}`} ``
  - `Cards.tsx` `SolutionCard` → `` alt={`${solution.title} — ${solution.short}`} ``
  - `servicios/[slug]`, `soluciones/[slug]` (heroes), `soluciones/page.tsx`, `nosotros/page.tsx`,
    `proyectos/page.tsx`, `page.tsx`, `FinalCta.tsx`.
  - **Se mantienen `alt=""` a propósito** en los logos de `Header.tsx` y `Footer.tsx`: hay texto
    "MundoRiego" adyacente, así que el logo es decorativo (evita lectura duplicada).
- **Verificado**: las 9 rutas probadas devuelven **exactamente 1 `<h1>`** y solo **2 `alt=""`**
  (los dos logos).
- **Nota**: el proyecto tiene `lang="es-AR"`, `target="_blank"` siempre con
  `rel="noopener noreferrer"`, y 0 botones sin etiqueta.

### 9. Optimización de imágenes

- **Problema**: 66 archivos y 6,24 MB en `public/images`, con `manguera-vertical.webp`
  de 814 KB y `icon-512.png` de 257 KB.
- **Cambios**:
  - Nuevo `scripts/reoptimize.mjs` — recomprime iterativamente bajando calidad hasta un objetivo
    de 220 KB, con ancho máximo por tipo (1800 px horizontal, 1400 px vertical).
  - Nuevo `scripts/fix-hero.mjs` — rehace el hero: `fondo-principal.webp` pasó de
    **306 KB @2400px a 151 KB @1920px** (era 1400px, insuficiente para `sizes="100vw"`).
    `manguera.webp` 246 KB → 129 KB. `manguera-vertical.webp` 814 KB → 267 KB.
  - Nuevo `scripts/make-icons.mjs` — genera `favicon.ico` (3,1 KB), `icon-192.png` (36,6 KB),
    `icon-512.png` (179 KB) y `apple-touch-icon.png` (31,7 KB) desde el logo cuadrado
    con fondo blanco y padding.
  - `layout.tsx` ahora declara `icons.icon` (favicon + 192 + 512) y `icons.apple`.
  - Limpieza: 31 assets no referenciados eliminados y 3 backups `.orig` borrados.
- **Problema encontrado durante la limpieza**: el script comparaba paths con acentos
  (`electroválvula.webp`) y las imágenes de `contact/`, que sí se usaban, se borraron.
- **Fix**: nuevo `scripts/regen-missing.mjs` que regenera desde `sitio viejo/`:
  `services/electroválvula.webp`, `services/electroválvula-alt.webp`, `contact/contactenos.webp`,
  `contact/contactenos-ext.webp`. Se verificó con Node que las **19 referencias** del código
  resuelven y hay **0 rotas**.
- **Cambio adicional**: se agregó la imagen al sidebar de `/contacto`
  (`/images/contact/contactenos.webp`) con su `alt` descriptivo.
- **Verificado**: 50 imágenes servidas vía `/_next/image` en 10 rutas → **0 fallos**.

### 10. Verificación de sitemap, robots y JSON-LD

- **Verificado**:
  - `sitemap.xml` lista las 20 URLs con el dominio correcto.
  - `robots.txt` devuelve `User-Agent: *`, `Allow: /`, `Host` y `Sitemap`.
  - JSON-LD parsea correctamente en `/` (1 bloque), `/servicios/riego-por-goteo` (2),
    `/contacto` (2) y `/preguntas-frecuentes` (2) → **0 bloques inválidos**.

### 11. FASE 9a — Testing responsive real (80 combinaciones)

- **Objetivo**: reemplazar la suposición por evidencia medida en navegador.
- **Herramienta**: no había Playwright ni Puppeteer en el proyecto. Se instaló
  `puppeteer-core` **fuera del repo**, en `%TEMP%/opencode/qa/`, apuntando al Chrome del
  sistema (`C:\Program Files\Google\Chrome\Application\chrome.exe`). El proyecto **no**
  ganó dependencias nuevas.
- **Cobertura**: 20 rutas × 4 anchos (375 / 768 / 1024 / 1440) = **80 combinaciones**,
  con `waitUntil: networkidle0` y captura de `console.error` + `pageerror` en cada una.
- **Resultado**:
  - **0 desbordes horizontales** en las 80 combinaciones (`scrollWidth - clientWidth <= 1`).
  - **0 errores de consola** y **0 fallos de carga**.
  - **0 violaciones de WCAG 2.5.8** (tamaño mínimo de objetivo táctil).
- **Falsos positivos descartados** (importante para no "arreglar" cosas sanas):
  - *Texto cortado*: 361 avisos, **todos** de elementos `sr-only` (ancho 1px, clippeados a
    propósito para lectores de pantalla) y del enlace "Saltar al contenido". Ninguno es real.
  - *Targets táctiles*: 372 avisos, todos links de navegación del footer, migas y enlaces
    de texto en prosa, de 20-26px de alto. Todos **cumplen la excepción de espaciado** de
    WCAG 2.5.8. Medido por grupo en `/` a 375px:
    - `ul.mt-4.space-y-2.5` — 14 links, 21px alto, **gap mínimo 14px** (se necesitan 3px) → OK
    - `nav.flex.flex-wrap` (legales) — 3 links, 21px alto, **gap 8px** → OK
    - Links de tarjeta — 23px alto, gap 414px → OK
    - "Ver todos los servicios" / "Ver la galería" — 26px alto, gap 2943px → OK
  - Los grupos de un solo elemento no tienen gap medible (enlace de email, "Conocé cómo
    trabajamos"); no hay siblings con los que comparar, sin impacto real.
- **Herramienta reutilizable**: `%TEMP%/opencode/qa/responsive.mjs` (grilla completa) y
  `tap-spacing.mjs` (excepción de espaciado). No están en el repo a propósito: dependen de
  una ruta de Chrome propia de esta PC.
- **Nota de método**: el primer pase de rutas dio 5 errores 404 falsos por **slugs
  inventados** (`riego-por-subterraneo`, `electroválvulas`, `predios-industriales`...). Los
  slugs reales se extraen ahora del propio `sitemap.xml`, no de memoria.
- **Pendiente**: ninguno. Fase 9a cerrada.

### 12. FASE 9b — Menú móvil (30/30 OK)

- **Objetivo**: probar en navegador el focus trap, Escape y scroll lock, que hasta ahora
  eran afirmaciones sin verificar.
- **Método**: `src/components/MobileMenu.tsx` (246 líneas) verificado con teclado y mouse
  reales vía CDP. **30 aserciones, 30 OK, 0 errores de consola.**
- **Verificado**:
  - Semántica: `role="dialog"`, `aria-modal="true"`, `aria-label="Menú de navegación"`.
    `aria-expanded` alterna `false`/`true` y el `aria-label` del botón pasa de
    "Abrir menú" a "Cerrar menú".
  - **Focus trap**: 25 `Tab` hacia adelante + 25 `Shift+Tab` hacia atrás, **el foco nunca
    salió del panel** y el ciclo da la vuelta correctamente. El overlay de fondo lleva
    `tabindex="-1"` y por eso no falsea los extremos del ciclo (decisión correcta del
    componente).
  - **Foco inicial**: al abrir, el foco entra al botón "Cerrar menú" (dentro del dialog),
    como exige `aria-modal`.
  - **Escape**: cierra, **devuelve el foco al botón hamburguesa** y restaura el scroll.
  - **Scroll lock**: `body.style.overflow` va `""` → `"hidden"` → `""`. Probado en
    **3 ciclos consecutivos de abrir/cerrar sin estado sucio**. Con el menú abierto,
    `window.scrollTo` no desplaza la página.
  - Submenus: arrancan cerrados, expanden/contraen, su `<ul>` deja de tener `hidden`.
    2 submenus (Servicios, Soluciones).
  - Cierre por overlay, por botón X y **auto-cierre al navegar** (el `useEffect` sobre
    `usePathname`), con el scroll restaurado tras navegar.
  - La hamburguesa se oculta correctamente en ≥1024px (`lg:hidden`) y la nav de escritorio
    queda intacta. Panel con `z-50`.
- **Artefacto de test aclarado**: una primera versión del script reportaba `canScroll:false`
  en el home. Se investigó y **no era un bug del sitio**: el script llamaba `window.scrollTo`
  antes de que asintara el layout. Medido aparte, el home **sí** scrollea con holgura:
  `scrollHeight` 15.770px a 375px, 10.661px a 768px, 9.017px a 1440px, con las 9 secciones
  en `opacity:1` y altura real. Ninguna sección depende de un reveal para reservar alto.
- **Detalle pendiente del bloqueante**: `WhatsappFab` usa `z-40` contra `z-50` del panel
  (orden correcto) y aplica `pointer-events-none` cuando está oculto, así que **no
  interfiere**. Pero **hoy no se renderiza**: `if (!href) return null` y `waLink()` devuelve
  `null` por el `[COMPLETAR]`. Se verifica en la Fase 9c.
- **Pendiente**: ninguno. Fase 9b cerrada.

---

## Estado actual

- **Build**: limpio, 26 páginas estáticas, 145 kB First Load JS compartido.
  (Revalidado post-crash de la PC: sin pérdida de archivos.)
- **Rutas**: 24/24 OK.
- **Imágenes**: 19 referencias, 0 rotas, 50 optimizadas por el optimizer verificadas.
- **Servidor de prueba**: apagado (murió con el cuelgue de la PC). Los procesos `node.exe`
  que quedaban vivos eran los servidores MCP (chrome-devtools, stitch), no Next.js.

### Respaldo en git

- **Commit `542e971`** — "Redesign completo Mundo Riego": 140 archivos, 20.607 inserciones.
  Es el primer commit con trabajo real; antes solo existía el andamiaje de Create Next App
  (`b9af58d`), por lo que una caída de la PC implicaba perder el rediseño completo.
- Árbol de trabajo limpio. `sitio viejo/` (47 MB, 52 archivos) también quedó versionado:
  es material del cliente y `scripts/regen-missing.mjs` regenera imágenes desde ahí.
- **Regla de esta sesión**: commitear al cerrar cada punto de la Fase 9.

## Pendientes / notas

### Bloqueante — falta información del cliente

Ningún dato real de contacto apareció en `sitio viejo/` (se revisó `wp_posts.csv` completo,
7125 líneas). Solo existe `info@mundo-riego.com.ar`. Todo está centralizado en
`src/config/site.ts` con placeholders `[COMPLETAR]` y se renderiza marcado con la clase
`.pending`:

- `contact.whatsappNumber` — **crítico**: sin esto `waLink()` devuelve `null` y todos los
  CTA de WhatsApp quedan deshabilitados, incluido el formulario.
- `contact.phoneDisplay` / `phoneHref` / `phoneSecondaryDisplay` / `phoneSecondaryHref`
- `contact.addressLocality` / `postalCode` / `mapsUrl`
- `contact.serviceAreas` (zonas de cobertura)
- `contact.social.instagram` / `facebook` / `linkedin`
- `site.foundedYear`
- `catalog.ts` → `projects[]` (3 fichas `status: "pending"`) y `brands`
- `generalFaqs` → respuesta sobre plazos de garantía

**El usuario iba a subir fotos reales de proyectos**: la galería está armada con slots
marcados. **No inventar fotos ni datos**; se prefirió mostrar el espacio vacío.

### Pendiente de la FASE 9 (testing visual)

- [ ] Verificar responsive real (375 / 768 / 1024 / 1440) en navegador — falta prueba visual.
- [ ] Revisar overflow horizontal y desbordes de texto.
- [ ] Probar el menú móvil (focus trap, Escape, scroll lock).
- [ ] Probar el acordeón de FAQ y el envío del formulario (abre WhatsApp con el mensaje armado).
- [ ] Lighthouse / Core Web Vitals.

### Pendiente de la FASE 10-11

- [ ] `REDESIGN-REPORT.md` — documento final con auditoría, decisiones de diseño,
      arquitectura, SEO y lista de pendientes.
- [ ] Migración de contenido: confirmar textos con el cliente antes de publicar.
- [ ] Configurar despliegue y verificar el dominio real.

### Notas técnicas

- **Warning conocido de Next.js**: "inferred your workspace root" porque hay dos lockfiles
  (`mundoriego/package-lock.json` y `sitio nuevo/package-lock.json`). Se puede silenciar con
  `turbopack.root` / `outputFileTracingRoot` en `next.config.ts`, o borrando el lockfile sobrante.
- **El `package.json` sigue con nombre `"mr-scaffold"`** (el del andamiaje), no renombrado.
- **Scripts de imagen en `scripts/`**: `process-images.mjs` (pipeline original),
  `reoptimize.mjs`, `fix-hero.mjs`, `make-icons.mjs`, `regen-missing.mjs`.
- **Al escribir archivos con acentos**, la herramienta Write puede inyectar caracteres corruptos
  (chinos, `??`, tokens como "ieua"/"KING"). Después de cada escritura conviene pasar un regex
  `[\u4e00-\u9fff]` y fusiones `[a-z][A-Z][a-z]{2,}` y corregir con PowerShell
  `[System.IO.File]::WriteAllText($p, $t, (New-Object System.Text.UTF8Encoding($false)))`.
- **El modelo no puede ver imágenes**: se clasificaron por análisis técnico
  (RGB/luminancia/% blanco) y metadatos, no por inspección visual.
