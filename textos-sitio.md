# MUNDO RIEGO — Todos los textos del sitio

Documento de revisión de contenido. Sirve para dos cosas:

1. **Revisar y aprobar** los textos que ya están escritos.
2. **Completar los datos que faltan**, marcados con `⚠️ FALTA`.

Convención: `⚠️ FALTA` = hay que completarlo. `🔧 CORREGIR` = el texto está escrito pero tiene
un error (palabra en inglés, palabra(raw) cortada, typo) y hay que aprobar la versión corregida.

---

## 0. Resumen rápido

| Estado | Cantidad |
| --- | --- |
| Páginas del sitio | 7 (+ 13 subpáginas de servicio/solución) |
| Servicios | 8 |
| Soluciones por tipo de cliente | 5 |
| Preguntas frecuentes | 8 generales + 28 por servicio/solución (22 en servicios, 6 en soluciones) |
| **Datos de empresa faltantes** | **21 campos** |
| **Proyectos de galería faltantes** | **3 fichas completas (8 campos cada una)** |
| **Textos con errores a corregir** | **18** |

---

## 1. ⚠️ FALTAN DATOS DE LA EMPRESA

Estos campos aparecen hoy en el sitio con un cartel de "pendiente". Son los más urgentes,
porque el formulario de contacto y el botón de WhatsApp **no funcionan** sin el número.

### 1.1 WhatsApp (bloqueante)

| Campo | Estado | Lo que hay que poner |
| --- | --- | --- |
| Número de WhatsApp | ⚠️ FALTA | Solo números con código de país, sin `+` ni espacios. Ej: `5491112345678` |
| Teléfono visible | ⚠️ FALTA | Cómo se muestra. Ej: `011 1234-5678` |
| Teléfono para el link | ⚠️ FALTA | Solo números. Ej: `541112345678` |
| Segundo teléfono (opcional) | — | Vacío, hoy no se usa |

> Mientras el número de WhatsApp no esté cargado, **todos los botones de WhatsApp del sitio
> desaparecen** y el formulario de contacto queda deshabilitado con el mensaje
> "El formulario se activa al completar el WhatsApp".

### 1.2 Ubicación

| Campo | Estado | Lo que hay que poner |
| --- | --- | --- |
| Ciudad / localidad base | ⚠️ FALTA | Ej: Pilar |
| Provincia | Listo | Buenos Aires |
| País | Listo | Argentina |
| Dirección (calle y número) | ⚠️ FALTA | Si hay domicilio fiscal u operativo |
| Localidad para SEO | ⚠️ FALTA | Va en los datos estructurados de Google |
| Código postal | ⚠️ FALTA | |
| Link a Google Maps | ⚠️ FALTA | Link del punto o de la zona de trabajo |
| Coordenadas (lat/lng) | ⚠️ FALTA | Opcional, solo para el mapa embebido |

### 1.3 Zonas de atención (importante)

| Campo | Estado | Lo que hay que poner |
| --- | --- | --- |
| Zonas de cobertura | ⚠️ FALTA | Lista de zonas donde realmente se puede trabajar. Ej: CABA, Zona Norte GBA, Zona Oeste, Tigre, San Fernando |

Hoy hay un solo placeholder que dice textualmente:
`[COMPLETAR: definir zonas de cobertura, ej. CABA, Zona Norte GBA, Zona Oeste]`

Esto aparece en 4 lugares: barra superior del header (mobile), franja del hero, sección
"Zonas de atención" del footer, y tarjeta de contacto de la página de contacto.

Además, la respuesta de la FAQ **"¿En qué zonas trabajan?"** dice:
> Trabajamos en `[COMPLETAR: definir zonas de cobertura]`. Si tu ubicación no está en la lista,
> contanos por WhatsApp y vemos cómo coordinamos.

### 1.4 Redes sociales

| Campo | Estado | Lo que hay que poner |
| --- | --- | --- |
| Instagram | ⚠️ FALTA | Link completo |
| Facebook | ⚠️ FALTA | Link completo |
| LinkedIn | ⚠️ FALTA | Link completo |

Los íconos hoy se muestran deshabilitados (con borde punteado) hasta que se carguen.

### 1.5 Datos de empresa

| Campo | Estado | Lo que hay que poner |
| --- | --- | --- |
| Año de inicio | ⚠️ FALTA | Opcional. Ej: 2015. Se usa para "Años de experiencia" |
| Años de actividad en el rubro | ⚠️ FALTA | Aparece en la página Nosotros como dato de experiencia |
| Razón social | ⚠️ FALTA | Nombre legal. Hoy dice "Mundo Riego" |
| CUIT | ⚠️ FALTA | Va en la política de privacidad (ver punto 12.3) |
| Dominio real | ⚠️ REVISAR | Hoy está configurado `https://mundo-riego.com.ar` — confirmar que sea el definitivo |
| Email | Listo | info@mundo-riego.com.ar — confirmar que exista la casilla |

### 1.6 Garantías (clave para confianza)

| Campo | Estado | Lo que hay que poner |
| --- | --- | --- |
| Garantía de instalación | ⚠️ FALTA | En meses o años |
| Garantía de equipos | ⚠️ FALTA | En meses o años |

La FAQ **"¿Qué garantía tienen los trabajos?"** hoy dice textualmente:
> `[COMPLETAR: definir plazos de garantía de instalación y de equipos. Es un dato clave de
> confianza y conviene publicarlo.]`

Este es de los datos que más impacto tiene en la decisión de contratar.

---

## 2. ⚠️ FALTAN PROYECTOS (galería de obras)

La sección "Proyectos" del sitio está armada pero **sin una sola obra real cargada**. Hay 3
fichas de ejemplo, todas con `status: "pending"`.

Cada ficha necesita 8 datos:

| Campo | Ejemplo de lo que hay que poner |
| --- | --- |
| Nombre del proyecto | Casa en el barrio X |
| Ubicación | Barrio o localidad (puede ser aproximada) |
| Tipo de cliente | Casa / Country / Empresa / Huerta |
| Superficie | 350 m² |
| Sistema instalado | Aspersión + goteo, aspersores rotorSuch, programador WiFi… |
| Problema | Qué no funcionaba o por qué llamaron |
| Solución | Qué se diseñó e instaló |
| Resultado | Resultado real, si lo hay. **No inventar métricas.** |

Además:

| Campo | Estado |
| --- | --- |
| Fotos de cada obra | ⚠️ FALTAN — se guardan en la carpeta de imágenes de proyectos |
| Cantidad mínima recomendada | 3 a 6 obras completas antes de publicar la galería |

> Nota del sitio: en la home y en la galería hay un cartel que dice "Estamos cargando la galería"
> explicando que no se usan imágenes genéricas como reemplazo. Ese texto **desaparece solo**
> cuando se carguen los proyectos reales. Hay que decidir si se mantiene como texto visible o
> se saca.

---

## 3. ⚠️ FALTAN MARCAS Y FABRICANTES

Sección "Con qué sistemas trabajamos" de la página Nosotros. Hoy muestra un cartel de
"pendiente de completar".

| Campo | Estado | Lo que hay que poner |
| --- | --- | --- |
| Marcas con las que se trabaja | ⚠️ FALTA | Ej: Hunter, Rain Bird, Toro, K-Rain, Netafim |
| Distribuidor autorizado | ⚠️ FALTA | Si corresponde, con nombre |
| Logos | ⚠️ FALTAN | Faltan los archivos de imagen de los logos |

El texto actual de la sección ya está aprobado en borrador, pero nombra las marcas como ejemplo
(*"Hunter, Rain Bird, Toro, K-Rain, Netafim u otros, según corresponda"*). Hay que confirmar
cuáles son las reales y borrar las que no apliquen.

---

## 4. 🔧 TEXTOS QUE NECESITAN CORRECCIÓN

Encontré 19 textos con errores. Se los detallo con la versión actual y la propuesta.

### 4.1 Palabras en inglés que quedaron sin traducir

| Ubicación | Texto actual | Texto propuesto |
| --- | --- | --- |
| Goteo — qué incluye | "Goteros compensados de **caudal constant**" | "Goteros compensados de caudal **constante**" |
| Goteo — qué incluye | "Cinta de goteo y **tubing** para hileras" | "Cinta de goteo y **tubería** para hileras" |
| Goteo — FAQ | "¿Puedo **fertilizationar** con el sistema de goteo?" | "¿Puedo **fertilizar** con el sistema de goteo?" |
| Diseño de proyecto — qué incluye | "Visita técnica con **measurements**" | "Visita técnica con **mediciones**" |
| Diseño de proyecto — qué incluye | "Lista de materiales y **equipment**" | "Lista de materiales y **equipos**" |
| Diferencial "Ahorro de agua real, no teórico" | "Sectorización, **programming** por zonas y sensores de lluvia" | "Sectorización, **programación** por zonas y sensores de lluvia" |
| Diferencial "Mantenimiento disponible todo el año" | "El **service** es parte del trabajo, no un extra." | "El **mantenimiento** es parte del trabajo, no un extra." |

### 4.2 Texto cortado o corrupto (se lee sin sentido)

Estas son las más graves: son frases que quedaron rotas y que se ven públicas en el sitio.

| Ubicación | Texto actual (tal cual aparece) | Texto propuesto |
| --- | --- | --- |
| Solución "Empresas y espacios verdes" — público objetivo | "Empresas,**olutelypayloadi, 군 institutions**" (texto corrupto, con caracteres en coreano) | "Empresas, parques industriales, plazas e instituciones" |
| Solución "Countries y barrios cerrados" — solución | "Proyecto único para toda la zona: comunes, lotes **y**i**als** perimetral." | "Proyecto único para toda la zona: comunes, lotes y cerco perimetral." |
| Solución "Countries y barrios cerrados" — FAQ | "Nos adaptamos a los protocolos de acceso, seguridad y **Presentation**" | "Nos adaptamos a los protocolos de acceso, seguridad y **presentación**" |
| Solución "Canchas y campos deportivos" — público objetivo | "Clubes, canchas, campos de golf y **Hampi**" | "Clubes, canchas, campos de golf y **hoteles**" |
| Solución "Huertas y quintas" — solución | "Goteo con goteros compensados: caudal constant **enoración** de hileras." | "Goteo con goteros compensados: caudal constante y separación de hileras." |
| Solución "Empresas y espacios verdes" — problema | "El **consume** agua de la red sube por una mala programación." | "El **consumo** de agua de la red sube por una mala programación." |
| Solución "Empresas y espacios verdes" — descripción | "parques industriales, **Responsive** plazas e instituciones" | "parques industriales, plazas e instituciones" |
| Política de privacidad | "**Pendiente: completed** con los datos fiscales de la empresa (CUIT, domicilio legal)" | "**Pendiente: completar** con los datos fiscales de la empresa (CUIT, domicilio legal)" |
| Página Nosotros | "es parte de que el **inversión** se mantenga" | "es parte de que **la inversión** se mantenga" |

### 4.3 Typos y mayúsculas

| Ubicación | Texto actual | Texto propuesto |
| --- | --- | --- |
| Riego por goteo — descripción | "Menos agua perdida, menos **Malezas**." | "Menos agua perdida, menos **malezas**." |
| Solución "Huertas y quintas" — descripción | "sin evaporación y sin **Malezas**" | "sin evaporación y sin **malezas**" |
| Goteo — FAQ | "filtro de **discalla** o malla" | "filtro de **disco** o malla" |
| Mantenimiento — descripción | "revisamos válvulas y **programasadores**" | "revisamos válvulas y **programadores**" |
| Aspersión — FAQ | "En muchos **jardins** se combinan los dos." | "En muchos **jardines** se combinan los dos." |

### 4.4 Textos a revisar por tono

| Ubicación | Texto actual | Comentario |
| --- | --- | --- |
| Home — problema "No tenés tiempo" | "El riego manual son todos los días, todos los días." | Queda repetido y forzado. Propuesta: "El riego manual son todos los días. Todos los días hasta que deja de ser un problema." |
| Diseño y proyecto — FAQ | "Si solo necesitás el proyecto para consultarlo o compararlo, **consultanos y lo vemos**." | No aclara si el proyecto tiene o no cargo. Hay que definirlo y dejarlo escrito. |
| Bombas — FAQ | "¿Pueden instalar una bomba para la pileta también?" | Decidir si es un servicio real. Si no, conviene quitar la pregunta. |
| Asesoramiento técnico — FAQ | Solo tiene 1 pregunta. | El resto de los servicios tiene 3 o 4. Conviene completar. |
| Diseño de proyecto — FAQ | Solo tiene 2 preguntas. | Conviene completar hasta 3 o 4. |

---

## 5. DATOS GENERALES DE LA EMPRESA

| Campo | Valor |
| --- | --- |
| Nombre comercial | Mundo Riego |
| Razón social | Mundo Riego (⚠️ confirmar) |
| URL | https://mundo-riego.com.ar (⚠️ confirmar) |
| Idioma / región | Español (Argentina) |
| Bajada / tagline | Riego automático para casas, countries y espacios verdes |
| Email | info@mundo-riego.com.ar |

### Horarios

| Días | Horario |
| --- | --- |
| Lunes a viernes | 9 a 18 h |
| Sábado | 9 a 13 h |
| Domingo | Cerrado |
| Aclaración que acompaña a los horarios | "Visitas técnicas coordinadas con anticipación." |
| Tiempo de respuesta | "Respondemos las consultas en el día." |

---

## 6. BOTONES Y LLAMADAS A LA ACCIÓN

| Botón | Texto | Dónde aparece |
| --- | --- | --- |
| Principal | "Solicitar asesoramiento" | Header mobile, menú mobile, CTA final |
| WhatsApp | "Hablar por WhatsApp" | Hero, footer, botón flotante mobile |
| Presupuesto | "Quiero un presupuesto" | Cabecera de cada página de servicio y solución |
| Servicios | "Ver servicios" | Hero |
| Proyectos | "Ver proyectos" | (definido, sin uso visible) |
| Llamar | "Llamar ahora" | (definido, sin uso visible) |
| Enviar consulta | "Enviar consulta" | Páginas de servicio/solución, footer |
| Enviar una consulta | "Enviar una consulta" | CTA final, menú mobile |
| Contactar | "Contactanos" | Página 404 y de error |

### Microtextos repetidos en todos lados

- "Visita técnica sin cargo"
- "Presupuesto claro"
- "Instalación prolija y documentada"
- "Ver todos los servicios" / "Ver todas las soluciones" / "Ver la galería"
- "Ver todas las preguntas"
- "Conocé cómo trabajamos"
- "Conocer la solución" / "Ver solución" / "Ver servicio" / "Otros servicios: También podés necesitar" / "Otras soluciones: Mirá si tu caso es otro"
- "Respondemos las consultas en el día. Sin compromiso."
- "Si te quedó alguna duda, escribinos y la respondemos."

---

## 7. ENCABEZADO Y PIE

### Menú principal

| Item | Submenú |
| --- | --- |
| Servicios | Instalación de riego automático · Riego por aspersión · Riego por goteo · Automatización y programadores · Mantenimiento y reparación · Bombas y sistemas de impulsión · Diseño y proyecto de riego · Asesoramiento técnico |
| Soluciones | Casas y jardines · Countries y barrios cerrados · Empresas y espacios verdes · Huertas y quintas · Canchas y deportes |
| Proyectos | — |
| Nosotros | — |
| Preguntas frecuentes | — |
| Contacto | Solo en menú mobile |

### Barra superior del header

- "Respondemos las consultas en el día."
- info@mundo-riego.com.ar
- `[Ciudad], Argentina` (⚠️ la ciudad está pendiente; hasta entonces dice "Argentina")

### Pie de página

**Descripción de marca:**
> Diseñamos, instalamos y mantenemos sistemas de riego para casas, countries, empresas y
> espacios verdes. Un solo responsable de punta a punta.

**Llamada a la acción previa al pie:**
- Título: "¿Necesitás instalar o revisar tu sistema de riego?"
- Texto: "Contanos qué tenés hoy y te decimos qué conviene hacer. La visita técnica no tiene cargo."
- Botones: "Hablar por WhatsApp" / "Enviar consulta"

**Columnas:** Servicios (los 8) · Soluciones (las 5 + Proyectos) · Contacto (WhatsApp, teléfono, email, ubicación, horarios) · Zonas de atención

**Barra legal:**
- "© [año] Mundo Riego. Todos los derechos reservados."
- "Política de privacidad" (⚠️ apunta a un texto incompleto, ver 12.3)
- "Términos y condiciones" (🔧 CORREGIR: este link **no lleva a ningún lado**, apunta a la misma sección de privacidad. Hay que escribir los términos o sacarlo)
- mundo-riego.com.ar

---

## 8. PÁGINA DE INICIO

### Metadata

- **Título:** Riego automático para casas, countries y empresas | Mundo Riego
- **Descripción:** Diseñamos, instalamos y mantenemos riego automático para casas, countries, empresas y espacios verdes. Visita técnica sin cargo y presupuesto por WhatsApp.

### Bloque Hero

**Etiqueta:** Diseño · Instalación · Mantenimiento

**Título:**
> Cada gota en su lugar.
> Cada zona bien regada.

**Texto:**
> Diseñamos, instalamos y mantenemos sistemas de riego automático para casas, countries, empresas
> y espacios verdes. Relevamos tu espacio, calculamos la solución y la instalamos prolija.

**Señales de confianza:**
- Visita técnica sin cargo
- Presupuesto claro
- Instalación prolija y documentada

**Franja inferior (solo mobile):** "Respondemos las consultas en el día." + primera zona de atención (⚠️ pendiente)

### Bloque "El punto de partida"

**Antetítulo:** El punto de partida

**Título:** El riego deja de ser un problema cuando el sistema está bien diseñado

**Descripción:**
> La mayoría de las consultas que recibimos empiezan con alguna de estas situaciones. Todas tienen
> solución, y casi siempre se corrige sin rehacer la instalación.

**Los 6 problemas:**

1. **El riego quedó irregular** — Hay zonas secas y zonas encharcadas porque los sectores no están bien calculados o la presión no alcanza.
2. **Se desperdicia agua** — Regar en el calor del mediodía o sin sensor de lluvia hace que la mayor parte del agua se evapore sin llegar a la planta.
3. **No tenés tiempo** — El riego manual son todos los días, todos los días. Un sistema automático resuelve eso. *(🔧 ver 4.4)*
4. **Las plantas se deterioran** — Riego excesivo en canteros y déficit en el césped. Cada zona necesita su frecuencia y su caudal.
5. **La instalación quedó mal** — Cañerías a la vista, aspersores que rompen el pasto o aspersores que no emergen y quedan tapados.
6. **Problemas de presión** — El sistema no riega parejo porque a la red le falta presión o el caudal no alcanza para la superficie.

### Bloque Servicios (home)

- Antetítulo: "Qué hacemos"
- Título: "Servicios de riego"
- Descripción: "Desde el diseño hasta el mantenimiento. Todo resuelto por la misma empresa."
- Botón: "Ver todos los servicios"

### Bloque Soluciones (home)

- Antetítulo: "Por tipo de proyecto"
- Título: "Soluciones según el tipo de espacio"
- Descripción: "Cada contexto pide un sistema distinto. Elegí el tuyo para ver cómo lo resolvemos."
- Botón: "Ver todas las soluciones"

### Bloque Diferenciales (home)

- Antetítulo: "Por qué Mundo Riego"
- Título: "No vendemos aspersores. Resolvemos el riego."
- Descripción: "Cualquiera puede comprar aspersores. Lo que cuesta es que el sistema funcione bien, se mantenga y siga funcionando en cinco años."
- Botón: "Conocé cómo trabajamos"

### Bloque Proceso (aparece en inicio, Servicios y Nosotros)

- Antetítulo: "Cómo trabajamos"
- Título: "Un proceso claro, de principio a fin"
- Descripción: "Sabés qué pasa en cada etapa, cuándo y qué necesitás de vos. Sin sorpresas cuando llega la factura."

1. **Nos contás qué necesitás** — Por WhatsApp o por el formulario. Con superficie, tipo de jardín y de dónde sale el agua alcanza para arrancar.
2. **Relevamos el espacio** — Visitamos el lugar, medimos, revisamos presión y puntos de agua, y vemos cómo está hoy el riego si ya existe.
3. **Diseñamos la solución** — Sectorización, selección de aspersores, cálculo de caudal y un plano. Lo aprobás antes de que se toque una pala.
4. **Instalamos y probamos** — Cañerías, aspersores, válvulas, programador y sensor. Al terminar probamos sector por sector y queda funcionando.
5. **Te acompañamos** — Te explicamos cómo operarlo, cuándo regar y qué revisar. Después, mantenimiento disponible cuando lo necesites.

### Bloque Proyectos (home)

- Antetítulo: "Trabajos reales"
- Título: "Proyectos reales"
- Descripción: "Cada proyecto se documenta con fotos de la obra, el problema que había y cómo quedó resuelto."
- Botón: "Ver la galería"

**Aviso en gris:**
> **Estamos cargando la galería.** La sección de proyectos se completa con fotografías reales de
> las obras, la ubicación y el sistema instalado. No usamos imágenes genéricas como reemplazo:
> preferimos mostrar el espacio vacío antes que una foto que no sea de este trabajo.

### Bloque Consejos (home)

- Antetítulo: "Consejos"
- Título: "Cuatro cosas que podés hacer hoy mismo"
- Descripción: "Sin gastar nada y sin llamar a nadie. Si el problema no se resuelve, ahí sí conversamos."

1. **Regá de noche o muy temprano** — Entre las 10 de la noche y las 6 de la mañana se pierde mínima evaporación y el agua llega a la raíz. Es el cambio más barato que podés hacer.
2. **Rotá la posición de los aspersores** — Si dejás siempre el mismo aspersor apuntando al mismo lado, ese sector se desgasta y se forma un patrón. Rotá la cabeza cada tanto y el desgaste se reparte.
3. **Revisá los aspersores una vez por año** — Los aspersores se tapan con polvo, hojas y minerales del agua. Un aspersor tapado riega menos y deja zonas secas. La limpieza anual es barata y evita recambios.
4. **Instalá un sensor de lluvia** — Corta el riego cuando llueve. Es el desperdicio más caro y más silencioso de un sistema automático sin sensor.

### CTA final (home y páginas internas)

- Antetítulo: "Empecemos"
- Título: "¿Necesitás mejorar tu sistema de riego?"
- Texto: "Contanos qué tenés hoy en tu jardín y te ayudamos a encontrar la solución. La visita técnica no tiene cargo."
- Cierre: "Respondemos las consultas en el día. Sin compromiso."

---

## 9. SERVICIOS (8)

Cada servicio tiene: título, bajada corta, descripción larga, qué incluye, cómo se hace (pasos),
preguntas frecuentes y servicios relacionados.

---

### 9.1 Instalación de riego automático
**Bajada corta:** Del replanteo a la primera semana de riego, sin romper el jardín.

**Descripción:**
> Relevamos, sectorizamos, instalamos cañerías y aspersores, y probamos sector por sector. Un
> sistema terminado y funcionando, con plano.

**Qué incluye:**
- Visita técnica y relevé del terreno
- Sectorización según caudal y presión disponible
- Cañería enterrada y aspersores instalados
- Electroválvulas y programador configurados
- Programación inicial por tipo de planta
- Prueba de funcionamiento sector por sector
- Plano del sistema entregado al cliente

**Cómo se hace:**
1. Visitamos el espacio y vemos de dónde sale el agua y con qué presión.
2. Definimos la sectorización y el tipo de aspersor para cada zona.
3. Instalamos la cañería y los aspersores, y conectamos válvulas y programador.
4. Probamos sector por sector, ajustamos y te dejamos el sistema funcionando.

**Preguntas frecuentes:**
- **¿Cuánto tarda una instalación?** — Una instalación residencial de un jardín común toma entre 1 y 3 días de obra. Superficies grandes, countries o predios comerciales llevan más tiempo. El plazo exacto te lo damos en la visita técnica, antes de empezar.
- **¿Hay que romper el pasto?** — La cañería se pasa con zanjas angostas. Lo ideal es que la instalación se haga antes de la siembra o del césped, para que el pasto no sufra. Si ya hay césped, se trabaja por tramos y se repone el área afectada.
- **¿Qué pasa si no tengo presión suficiente?** — Se resuelve con una estación de bombeo o una bomba de impulsión. Lo definimos en el relevamiento: si la presión de la red alcanza, no hace falta agregar bombeo y te ahorramos ese costo.
- **¿Los aspersores se pueden ver o quedan escondidos?** — Se instalan a nivel del césped, así que no se ven cuando están en reposo. Al activarse emergen y riegan, y vuelven a su posición. Es la diferencia entre un sistema bien hecho y uno que arruina la vista del jardín.

---

### 9.2 Riego por aspersión
**Bajada corta:** Cobertura uniforme en césped y superficies grandes, sin zonas secas.

**Descripción:**
> Aspersores y rotores calculados para solaparse correctamente. El resultado es un césped parejo,
> sin áreas quemadas ni encharcadas.

**Qué incluye:**
- Selección de aspersores y radios según el área
- Cálculo de pluviometría y solapamiento
- Distribución para eliminar zonas secas o sobre regadas
- Instalación a nivel de césped
- Regulación de cada sector
- Programación por horarios y días

**Cómo se hace:**
1. Medimos la superficie y analizamos el tipo de suelo y la exposición al sol.
2. Elegimos el aspersor adecuado: superficie, caudal disponible y radio de riego.
3. Distribuimos los aspersores para que el agua se solape y no queden áreas secas.
4. Instalamos, regulamos y probamos cada sector con presión real de funcionamiento.

**Preguntas frecuentes:**
- **¿Aspersión o goteo?** — Depende de qué necesitás regar. La aspersión cubre superficies grandes de césped de forma rápida y uniforme. El goteo es mejor para canteros, arbustos, huertas y plantas de hileras porque entrega el agua justo en la raíz. En muchos jardins se combinan los dos. *(🔧 "jardines")*
- **¿El riego por aspersión quema el pasto?** — Solo si el sistema está mal diseñado. Quemaduras aparecen por solapamiento excesivo o por sectores con presión baja. Con la pluviometría calculada y los sectores regulados, el pasto se riega parejo.
- **¿Puedo regar solo una parte del jardín?** — Sí, y es una de las ventajas de sectorizar. Se riega por zonas independientes, así que podés activar solo el sector que necesitás.

---

### 9.3 Riego por goteo
**Bajada corta:** Agua y nutrientes justo en la raíz, con mínima evaporación.

**Descripción:**
> Goteo con goteros compensados, cinta y microaspersores para huertas, canteros y setos. Menos
> agua perdida, menos Malezas. *(🔧 "malezas")*

**Qué incluye:**
- Cálculo de caudal por planta y por hilera
- Goteros compensados de caudal constant *(🔧 "constante")*
- Cinta de goteo y tubing para hileras *(🔧 "tubería")*
- Microaspersión para canteros y plantación joven
- Bocas de llenado y filtros
- Programación diferenciada por zona

**Cómo se hace:**
1. Relevemos el cantero o la huerta y definimos el método según el tipo de plantación.
2. Calculamos el caudal necesario y elegimos el emisor adecuado.
3. Instalamos la línea, las derivaciones y los goteros.
4. Probamos el caudal, ajustamos y programamos la frecuencia de riego.

**Preguntas frecuentes:**
- **¿El goteo tapa o se obstruye?** — Puede, si no se le pone filtro. Por eso todo sistema de goteo que instalamos lleva filtro de discalla o malla, y el mantenimiento anual incluye la limpieza. Con filtro y limpieza periódica, el caudal se mantiene estable. *(🔧 "disco")*
- **¿Sirve para huertas y jardines?** — Sí. Es el método más eficiente para huertas, canteros, setos y plantación joven, porque el agua llega directo a la raíz y se pierde muy poca por evaporación.
- **¿Puedo fertilizationar con el sistema de goteo?** — Sí, con un kit de fertilización. Se inyectan los nutrientes al caudal de agua de forma controlada. Es una de las grandes ventajas del goteo frente a la aspersión. *(🔧 "fertilizar")*

---

### 9.4 Automatización y programadores
**Bajada corta:** Convertí un riego manual en un sistema que funciona solo.

**Descripción:**
> Instalamos y reparamos programadores, agregamos control por celu y sensor de lluvia. Automatizá
> sin rehacer la instalación.

**Qué incluye:**
- Programadores con y sin conexión WiFi
- Configuración por zonas y días de riego
- Sensor de lluvia integrado
- Control desde el celular
- Migración de sistemas manuales a automáticos
- Reparación y recambio de programadores

**Cómo se hace:**
1. Revisamos el programador actual o la instalación manual existente.
2. Elegimos el programador según la cantidad de zonas y si querés control remoto.
3. Instalamos y configuramos las zonas, los horarios y el sensor de lluvia.
4. Probamos el arranque automático y te enseñamos a operarlo.

**Preguntas frecuentes:**
- **¿Puedo automatizar un riego que ya está instalado?** — En la mayoría de los casos sí. Si la instalación tiene electroválvulas, alcanza con sumar un programador y un transformador. Si es un sistema manual con llaves, hay que agregar válvulas: es una intervención chica y se puede hacer sin romper el jardín.
- **¿Qué pasa si se corta la luz?** — La mayoría de los programadores guardan la programación y vuelven solos. Además, un sensor de lluvia conectado corta el riego si llueve, así evitamos el desperdicio que es el mayor costo silencioso de un riego automático.
- **¿Puedo controlar el riego desde el celular?** — Sí, con los programadores de conexión WiFi. Ves el estado de cada zona, activás o pausás el riego y ajustás horarios desde la app. También es la forma de cortar el riego si detectás una pérdida.

---

### 9.5 Mantenimiento y reparación
**Bajada corta:** Tu sistema funcionando como el primer día, año tras año.

**Descripción:**
> Reparamos sectores que no riegan, cambiamos aspersores tapados, revisamos válvulas y
> programasadores. Service antes que reemplazo. *(🔧 "programadores")*

**Qué incluye:**
- Diagnóstico de sectores con falta de agua
- Cambio de aspersores tapados o dañados
- Revisión y cambio de electroválvulas
- Reparación de fugas y roturas de cañería
- Limpieza de filtros y purga de cañerías
- Reinstalación y reprogramación estacional
- Ajustes de programación por temporada

**Cómo se hace:**
1. Contás el síntoma: qué sector no riega, dónde gotea, qué hace ruido.
2. Revisamos el sector: aspersores, válvula, cañería y presión.
3. Reparamos lo que falló y probamos el sector completo.
4. Dejamos el sistema ajustado y te explicamos qué revisar.

**Preguntas frecuentes:**
- **Mi sector no riega. ¿Qué puede ser?** — Las causas más comunes son una electroválvula que no abre, un aspersor tapado o una rotura en la cañería. Si el resto de los sectores funciona bien, el problema casi siempre está localizado y se resuelve sin reemplazar el sistema.
- **¿Cada cuánto hay que hacer mantenimiento?** — Un chequeo anual al inicio de la temporada es lo mínimo recomendado, más una limpieza de filtros si hay árboles o pets cerca. Los aspersores se tapan por polvo, hojas y minerales del agua, y eso reduce el caudal hasta que el sector riega menos.
- **¿Trabajan con sistemas instalados por otros?** — Sí. Es una parte habitual del trabajo: nos contratan para revisar y reparar sistemas instalados por otros, y también para tomar el mantenimiento de uno que ya estaba funcionando.

---

### 9.6 Bombas y sistemas de impulsión
**Bajada corta:** La presión que necesita tu sistema, calculada y dimensionada bien.

**Descripción:**
> Bombas sumergibles, booster y estaciones de bombeo para riego. Solucionamos la presión baja y
> el caudal insuficiente.

**Qué incluye:**
- Diagnóstico de presión y caudal disponible
- Selección de bomba según caudal y altura
- Instalación de bombas sumergibles y booster
- Estaciones de bombeo con tanque
- Protecciones y conexiones de seguridad
- Puesta en marcha y regulación

**Cómo se hace:**
1. Medimos la presión disponible en el punto donde se alimenta el riego.
2. Definimos el caudal y la altura que necesita el sistema.
3. Elegimos e instalamos la bomba o la estación de bombeo.
4. Ponemos en marcha, regulamos y probamos con la demanda real del riego.

**Preguntas frecuentes:**
- **¿Por qué mi riego no tiene presión?** — Puede ser por pérdida en la cañería, por un filtro tapado, por una válvula que no abre del todo o porque la red pública no alcanza. Un sector con baja presión riega menos y de forma irregular, y eso se ve en el pasto.
- **¿Hace falta una bomba si tengo agua de red?** — No siempre. Si la red alcanza para la demanda del sistema, agregar una bomba es un gasto innecesario. En el relevamiento verificamos si hace falta y te lo decimos con números.
- **¿Pueden instalar una bomba para la pileta también?** — Trabajamos con bombas de impulsión para riego y para otros usos siempre que la aplicación sea compatible. Contanos qué necesitás y te asesoramos. *(🔧 ver 4.4 — decidir si es servicio real)*

---

### 9.7 Diseño y proyecto de riego
**Bajada corta:** El plano completo antes de tocar una pala.

**Descripción:**
> Relevamiento, cálculo de caudal y presión, sectorización y plano de instalación. La obra empieza
> con el proyecto aprobado.

**Qué incluye:**
- Visita técnica con measurements *(🔧 "mediciones")*
- Cálculo de caudal y presión por sector
- Selección de aspersores y cobertura
- Plano de instalación en escala
- Lista de materiales y equipment *(🔧 "equipos")*
- Estimación de presupuesto desglosada por partida

**Cómo se hace:**
1. Relevamos el espacio: medidas, pendiente, tipo de suelo y fuente de agua.
2. Calculamos el caudal, la presión y la sectorización.
3. Diseñamos el recorrido de cañerías y la ubicación de cada aspersor.
4. Te entregamos el plano con el presupuesto desglosado por partida.

**Preguntas frecuentes:**
- **¿El proyecto tiene costo?** — El proyecto básico se cotiza junto con la obra. Si solo necesitás el proyecto para consultarlo o compararlo, consultanos y lo vemos.
- **¿Puedo usar el proyecto para pedir otro presupuesto?** — Sí. Un plano bien hecho con la sectorización y los materiales especificados sirve para comparar propuestas de forma justa, y para que cualquier instalador sepa exactamente qué hacer.

---

### 9.8 Asesoramiento técnico
**Bajada corta:** Consultá antes de contratar y sabé qué necesitás.

**Descripción:**
> Te ayudamos a elegir sistema, aspersores y programador según tu espacio, tu presión y tu
> presupuesto real.

**Qué incluye:**
- Orientación sobre el sistema adecuado
- Comparación de opciones y costos
- Revisión de un presupuesto que recibiste
- Verificación de un proyecto existente
- Acompañamiento durante la obra de otro proveedor

**Cómo se hace:**
1. Contás tu caso: superficie, tipo de jardín y presupuesto aproximado.
2. Te decimos qué sistema corresponde y qué opciones descartarías.
3. Si ya tenés cotizaciones, las revisamos y te explicamos las diferencias.

**Preguntas frecuentes:**
- **¿Puedo consultar sin contratar?** — Sí. Una consulta de asesoramiento no tiene compromiso. Si después querés que lo ejecutemos, seguimos con el relevamiento y el proyecto.

---

## 10. SOLUCIONES POR TIPO DE CLIENTE (5)

---

### 10.1 Casas y jardines
**Bajada corta:** Riego automático para el jardín de tu casa.

**Descripción:**
> Para patios, jardines, quintas y casas con terreno. Un sistema que riega parejo, por la noche y
> sin que tengas que pensar en eso.

**Lo que suele pasar:**
- El pasto se seca en partes porque los sectores no están bien calculados.
- Regar a mano todos los días lleva tiempo que no siempre tenés.
- El jardín se ve bien los primeros meses y después la cobertura se vuelve dispareja.
- Los aspersores quedan a la vista o rompen el pasto al instalarlos mal.

**Cómo lo resolvemos:**
- Sectorización por tipo de planta, sol y pendiente.
- Aspersión para el césped, goteo para canteros y setos.
- Programación nocturna para perder menos agua por evaporación.
- Sensor de lluvia para que el sistema no riegue cuando llueve.

**FAQ:**
- **¿Cuánto cuesta más que regar a mano?** — La instalación es una inversión de una sola vez. El sistema se paga con el tiempo que dejás de dedicate a regar y con el agua que dejás de desperdiciar. El mantenimiento anual es una salida mucho menor que un año de riego manual.

---

### 10.2 Countries y barrios cerrados
**Bajada corta:** Sistema centralizado para áreas comunes y lotes.

**Descripción:**
> Riego para countries y barrios cerrados: áreas verdes comunes, lotes y seguridad perimetral. Un
> solo sistema, un solo responsable.

**Público objetivo:** Administraciones de countries y barrios cerrados

**Lo que suele pasar:**
- Cada lote tiene un sistema distinto y nadie sabe cuál funciona.
- Las áreas comunes verdes se riegan a mano y quedan desprolijas.
- Cada proveedor dice que su problema no es de su sector.
- El mantenimiento cambia de mano y nadie lleva registro del sistema.

**Cómo lo resolvemos:**
- Proyecto único para toda la zona: comunes, lotes y cerco perimetral. *(🔧 texto original corrupto)*
- Bombeo y sectorización pensados para la demanda real del barrio.
- Un solo proveedor responsable de instalación y mantenimiento.
- Registro y documentación del sistema para cada sector.

**FAQ:**
- **¿Trabajan con requisitos de ingreso al country?** — Sí. Nos adaptamos a los protocolos de acceso, seguridad y presentación, y coordinamos las visitas con la administración. *(🔧 "Presentación")*
- **¿Pueden hacerse cargo de un sistema ya instalado?** — Sí. Relevamos el sistema existente, documentamos su estado y armamos un plan de puesta en marcha y mantenimiento.

---

### 10.3 Empresas y espacios verdes
**Bajada corta:** Riego para oficinas, parques e instituciones.

**Descripción:**
> Riego de predios corporativos, parques industriales, plazas e instituciones. Un proveedor único de
> diseño, instalación y mantenimiento. *(🔧 texto original: "Responsive plazas")*

**Público objetivo:** Empresas, parques industriales, plazas e instituciones *(🔧 texto original corrupto: "Empresas,olutelypayloadi, 군 institutions")*

**Lo que suele pasar:**
- El riego de las áreas verdes depende de un encargado que además hace otras cosas.
- Cada proveedor distinto se hace cargo de una parte del sistema.
- El consumo de agua de la red sube por una mala programación. *(🔧 "consume")*
- No hay registro de los sistemas instalados con los años.

**Cómo lo resolvemos:**
- Riego sectorizado para las distintas áreas verdes del predio.
- Programación centralizada, con la posibilidad de sectorizar por zonas de uso.
- Un solo proveedor para diseño, instalación, recambios y mantenimiento.
- Documentación de cada sector y de los equipos instalados.

**FAQ:**
- **¿Pueden trabajar con nuestra empresa de mantenimiento?** — Sí. Podemos trabajar como proveedor de riego, aportar el sistema y el mantenimiento, o coordinar con el equipo de mantenimiento interno.

---

### 10.4 Huertas y quintas
**Bajada corta:** Riego para huertas, quintas y cultivo doméstico.

**Descripción:**
> Goteo para huertas y quintas: agua justo en la raíz, sin evaporación y sin malezas.
> Fertilización integrada si la necesitás. *(🔧 "Malezas")*

**Público objetivo:** Huertas, quintas y fincas

**Lo que suele pasar:**
- Regar la huerta a mano todos los días lleva demasiado tiempo.
- En época de calor, el agua se evapora antes de llegar a la raíz.
- El goteo se tapa con los sedimentos del agua de pozo.
- Plantas con distinta necesidad de agua reciben el mismo riego.

**Cómo lo resolvemos:**
- Goteo con goteros compensados: caudal constante y separación de hileras. *(🔧 texto original: "caudal constant enoración de hileras")*
- Filtros para que el sistema no se obstruya.
- Programación diferenciada por hilera y por etapa de crecimiento.
- Fertilización integrada si necesitás nutrir el cultivo desde el riego.

**FAQ:**
- **¿Sirve para agua de pozo?** — Sí, con filtro adecuado. El agua de pozo suele traer más sedimentos, así que el filtro y el mantenimiento son especialmente importantes.

---

### 10.5 Canchas y campos deportivos
**Bajada corta:** Riego uniforme en superficies de juego.

**Descripción:**
> Diseño orientado a uniformidad para canchas, clubes y campos. Aspersores de alto rendimiento y
> control centralizado.

**Público objetivo:** Clubes, canchas, campos de golf y hoteles *(🔧 texto original: "y Hampi")*

**Lo que suele pasar:**
- Zonas secas y encharcadas que afectan la calidad del juego.
- Presión insuficiente para cubrir toda la superficie.
- Sistemas viejos con aspersores tapados o sin uniformidad.
- Necesidad de riego temprano para no cortar el uso del campo.

**Cómo lo resolvemos:**
- Diseño orientado a uniformidad de aplicación.
- Aspersores de alto rendimiento y presión calculada.
- Control centralizado y programación por franja horaria.
- Mantenimiento preventivo y control de aspersores.

**FAQ:**
- **¿Pueden instalar en horarios de poca actividad?** — Sí, coordinamos las visitas con la administración del club para trabajar en las franjas de menor uso.

---

## 11. PÁGINA DE SERVICIOS (listado)

- **Título:** Servicios de riego
- **Antetítulo:** Qué hacemos
- **Descripción:** Un sistema bien instalado tiene que seguir funcionando. Por eso el trabajo no termina cuando el riego corre: incluye diseño, instalación, programación y mantenimiento.

**Bloque con imagen:**
- Antetítulo: "Un solo responsable"
- Título: "Diseño, instalación y mantenimiento en la misma empresa"
- Texto: "Si algo falla, no hay que discutir de quién es el problema."

## 12. PÁGINA DE SOLUCIONES (listado)

- **Título:** Soluciones de riego según el espacio
- **Antetítulo:** Por tipo de proyecto
- **Descripción:** Un jardín de una casa, las áreas comunes de un country y el predio de una empresa tienen necesidades distintas. Elegí la que se parezca a tu caso.

**Cierre sobre imagen:**
> ¿Tu caso no está en esta lista? Contanos cómo es el espacio y te decimos cómo lo resolvemos.

---

## 13. PÁGINA "NOSOTROS"

**Título:** Somos especialistas en riego, no vendedores de aspersores

**Bajada:**
> Mundo Riego diseña, instala y mantiene sistemas de riego automático para casas, countries,
> empresas y espacios verdes. Un solo equipo responsable de todo el proceso.

### Qué hacemos

**Antetítulo:** Qué hacemos
**Título:** Un sistema de riego es un proyecto, no una compra

> El riego automático se vende en dos etapas. La primera es la instalación, y ahí muchos
> competidores parecen iguales. La diferencia aparece después: al primer verano, al primer invierno,
> cuando un aspersor se tapa, cuando la presión baja o cuando hay que cambiar un programador.
>
> Por eso hacemos las dos cosas. Tenemos el conocimiento técnico para diseñar e instalar, y también
> la capacidad de mantener y reparar lo que instalamos y lo que instalaron otros. Si algo falla
> dentro o fuera de la garantía, no hay a quién pasarle el problema.
>
> Nuestro trabajo termina cuando el sistema sigue funcionando. Por eso la instalación se prueba
> sector por sector antes de la entrega, y por eso el mantenimiento no es un extra que hay que
> contratar aparte: es parte de que la inversión se mantenga. *(🔧 "el inversión")*

**Datos en ficha:**

| Dato | Estado |
| --- | --- |
| Años de experiencia | ⚠️ FALTA |
| Base | ⚠️ FALTA (ciudad) + Buenos Aires |

### Cómo trabajamos — "Cuatro principios que no negociamos"

1. **Criterio técnico** — Cada sistema se calcula. No se vende un paquete estándar: se diseña para la superficie, la presión disponible y lo que hay que regar.
2. **Obra prolija** — La cañería va por debajo, los aspersores a nivel del césped y el trabajo se termina limpio. Terminar bien es parte del trabajo.
3. **Explicación clara** — Te explicamos qué se hizo, por qué y cómo operarlo. Un sistema que el cliente no entiende es un sistema que va a fallar.
4. **Respuesta concreta** — Contestamos con una estimación, no con un 'depende'. Si falta un dato, te decimos cuál y por qué lo necesitamos.

### Diferenciales ("Por qué Mundo Riego")

**Antetítulo:** Diferenciales
**Título:** Por qué Mundo Riego
**Descripción:** Lo que nos diferencia de un instalador que solo coloca aspersores.

1. **Diseño antes que instalación** — Relevamos el espacio, calculamos caudales y presión, y recién ahí instalamos. El sistema se proyecta en el plano, no se improvisa en el terreno.
2. **Un solo responsable, de punta a punta** — Diseño, instalación, programación y mantenimiento los resuelve la misma empresa. Si algo falla, no hay que discutir de quién es el problema.
3. **Obra prolija y reversible** — Cañerías por debajo del césped, soterradas donde corresponde, y trabajo limpio al terminar. El jardín se ve terminado, no en obra.
4. **Ahorro de agua real, no teórico** — Sectorización, programación por zonas y sensores de lluvia para que el sistema no riegue lo que ya está húmedo. *(🔧 "programming")*
5. **Sistemas que se pueden reparar** — Instalamos componentes estándar y documentamos el recorrido de las cañerías, para que cualquier trabajo futuro sea posible.
6. **Mantenimiento disponible todo el año** — Un sistema de riego sin mantenimiento se tapa, se rompe y pierde uniformidad. El mantenimiento es parte del trabajo, no un extra. *(🔧 "service")*

### Sección de marcas

**Antetítulo:** Materiales
**Título:** Con qué sistemas trabajamos
**Descripción:** Recomendamos equipos de fabricantes con repuestos disponibles en el país, para que el mantenimiento no dependa de un importador.

**Texto del bloque vacío:**
> Marcas y fabricantes — pendiente de completar
> Esta sección se completa con los logos de los fabricantes con los que trabajamos efectivamente
> (Hunter, Rain Bird, Toro, K-Rain, Netafim u otros, según corresponda) y con los datos de
> distribuidor autorizado si corresponde.

⚠️ Falta: confirmar las marcas reales y subir los logos.

---

## 14. PÁGINA DE PROYECTOS

**Título:** Trabajos reales, con fotos reales

**Bajada:**
> Cada proyecto se documenta con fotografías de la obra, el problema que había, el sistema que
> instalamos y cómo quedó. Sin imágenes genéricas.

**Sección de galería en carga:**
- Antetítulo: "En carga"
- Título: "La galería se está armando"
- Descripción: Cada obra que documentamos lleva fotos, ubicación, tipo de sistema y resultado. Preferimos mostrar menos proyectos con información completa que muchos con fotos genéricas.

**Texto de cada ficha pendiente:**
> Proyecto pendiente de carga
> {Tipo de cliente}. La ficha se completa con fotos reales de la obra, ubicación, sistema
> instalado y resultado.

⚠️ Ver punto 2 — faltan las 3 fichas completas con fotos.

**Plantilla de ficha que se muestra en la página:**

| Campo | Estado |
| --- | --- |
| Nombre del proyecto | ⚠️ FALTA |
| Ubicación | ⚠️ FALTA |
| Tipo de cliente | ⚠️ FALTA |
| Superficie | ⚠️ FALTA |
| Sistema instalado | ⚠️ FALTA |
| Problema | ⚠️ FALTA |
| Solución | ⚠️ FALTA |
| Resultado | ⚠️ FALTA |

**CTA final de la página:**
- Título: "¿Querés ver un trabajo parecido al tuyo?"
- Texto: "Contanos cómo es tu espacio y te mostramos cómo resolvimos casos similares."

---

## 15. PREGUNTAS FRECUENTES GENERALES (8)

1. **¿Hacen presupuesto sin cargo?** — Sí. La visita técnica y el presupuesto no tienen cargo. Con la superficie aproximada, el tipo de jardín y de dónde sale el agua, ya podemos darte una estimación; la visita confirma los números.
2. **¿En qué zonas trabajan?** — Trabajamos en `[COMPLETAR: zonas de cobertura]`. Si tu ubicación no está en la lista, contanos por WhatsApp y vemos cómo coordinamos. ⚠️ **FALTA**
3. **¿Cuánto demora responder un presupuesto?** — Respondemos las consultas en el día. El presupuesto detallado depende del relevamiento: normalmente se entrega en pocos días después de la visita técnica.
4. **¿Trabajan con presupuestos de otros?** — Sí, y es habitual. Podemos revisar un proyecto que ya tenés, explicar las diferencias entre propuestas o ejecutar el trabajo con el plan que ya está definido.
5. **¿Qué garantía tienen los trabajos?** — `[COMPLETAR: plazos de garantía de instalación y de equipos]` ⚠️ **FALTA**
6. **¿El mantenimiento es obligatorio?** — No es obligatorio, pero es recomendable al menos una vez por año. Los aspersores se tapan, los filtros se cargan y el sistema pierde uniformidad con el uso. El mantenimiento es mucho más barato que una reparación mayor.
7. **¿Puedo instalar sobre un sistema que ya existe?** — En muchos casos sí. Relevamos el sistema actual, vemos qué se puede reutilizar y qué conviene reemplazar. Si la instalación es muy antigua o está en mal estado, conviene evaluar un sistema nuevo.
8. **¿Qué información necesito para pedir un presupuesto?** — Con que nos digas la superficie aproximada, el tipo de jardín o cultivo, de dónde sale el agua (red, pozo, tanque) y si ya tenés un sistema instalado, alcanzamos para empezar.

**Cabecera de la página de FAQ:**
- Antetítulo: "Ayuda"
- Título: "Preguntas frecuentes"
- Descripción: Las dudas que más recibimos sobre costos, plazos, garantía y cobertura. Si la tuya no está acá, preguntanos por WhatsApp.

**CTA final de la página de FAQ:**
- Título: "¿Te quedó una duda?"
- Texto: "Escribinos y te la respondemos. Si es una consulta técnica, mejor contarnos el caso completo por WhatsApp."

---

## 16. PÁGINA DE CONTACTO

**Antetítulo:** Contacto
**Título:** Contanos qué necesitás y te respondemos
**Bajada:** La visita técnica y el presupuesto no tienen cargo. Con la superficie aproximada y el tipo de jardín ya podemos darte una estimación.

### Formulario

**Título del formulario:** Contanos qué necesitás
**Ayuda:** Completá los datos y abrí WhatsApp con la consulta ya escrita. También podés escribirnos directo al mail.

**Campos:**

| Campo | Etiqueta | Ayuda / opciones |
| --- | --- | --- |
| Tipo de consulta | "¿Qué necesitás?" | "Nos ayuda a orientarte mejor" |
| Nombre | "Nombre" | (obligatorio) |
| Teléfono | "Teléfono" | "Opcional" |
| Mensaje | "Contanos un poco más" | "Superficie, tipo de jardín, de dónde sale el agua" |

**Opciones del desplegable "¿Qué necesitás?":**

*Servicios*
- Instalar un sistema nuevo
- Revisar o reparar un sistema existente
- Mantenimiento
- Automatización y programadores
- Bombas y presión de agua
- Diseño de proyecto

*Tipo de proyecto*
- Casa o jardín
- Country o barrio cerrado
- Empresa o institución
- Huerta o quinta
- Cancha o campo deportivo
- Otro

*Otros*
- Asesoramiento técnico
- Quiero un presupuesto

**Texto de ayuda del campo mensaje (ejemplo):**
> Ej: tengo un jardín de unos 300 m², el riego actual es por aspersión pero hay sectores que no
> funcionan y la presión es baja.

**Botón:** Enviar por WhatsApp

**Nota al pie del formulario:**
> Al enviar se abre WhatsApp con tu consulta escrita. Respondemos las consultas en el día.

🔧 **Mensaje de formulario deshabilitado** (aparece hasta que se cargue el WhatsApp):
> **El formulario se activa al completar el WhatsApp**
> Está pendiente cargar el número en la configuración del sitio. Mientras tanto podés escribirnos por mail.

*(Este texto interno dice el nombre del archivo de configuración. Habría que sacarlo antes de publicar, o dejarlo solo en la versión interna.)*

### Datos de contacto de la tarjeta lateral

**Título:** También podés contactarnos por

| Dato | Estado |
| --- | --- |
| WhatsApp | ⚠️ FALTA (dice "Escribinos" con número pendiente) |
| Teléfono | ⚠️ FALTA |
| Email | info@mundo-riego.com.ar |
| Ubicación | ⚠️ FALTA (ciudad), Buenos Aires, Argentina |
| Horarios | Lunes a viernes de 9 a 18 h · Sábado de 9 a 13 h · Cerrado · Visitas técnicas coordinadas con anticipación. |
| Zonas de atención | ⚠️ FALTA |
| Link "Ver ubicación en el mapa" | ⚠️ FALTA |

**Bloque de respuesta:**
> **Respondemos las consultas en el día.**
> Si tenés una urgencia o el sistema está fallando, escribinos por WhatsApp: es el canal más rápido.

### FAQ en la página de contacto

- Antetítulo: "Antes de escribir"
- Título: "Preguntas frecuentes"
- Descripción: "Estas son las dudas que más recibimos. Si la tuya no está, preguntanos por WhatsApp."

### Política de privacidad (⚠️ INCOMPLETA)

**Texto actual:**

> Los datos que envías a través de este sitio (nombre, teléfono y el contenido de tu consulta) se usan
> únicamente para responderte y, si avanzamos con tu proyecto, para gestionar el presupuesto y la
> obra.
>
> No vendemos ni cedemos tus datos a terceros. Podés pedir la eliminación de tu información
> escribiéndonos a info@mundo-riego.com.ar.

**Lo que falta:**
- ⚠️ CUIT y domicilio legal de la empresa
- ⚠️ Mención de analítica o cookies, si se incorporan después
- 🔧 El texto tiene un error: "**Pendiente: completed** con los datos fiscales…" → debe decir "completada"
- 🔧 Y en producción **hay que borrar el cartel de "Pendiente"** que hoy es visible para cualquiera que entre

**Términos y condiciones:** ⚠️ No existen. El link del footer apunta a la misma sección de
privacidad. Hay que escribirlos o sacar el link.

---

## 17. TEXTOS DE SISTEMA

**Accesibilidad (solo para lectores de pantalla):** "Saltar al contenido"

**Página 404:**
- Antetítulo: "Error 404"
- Título: "Esta página no existe"
- Texto: "Puede que el enlace haya cambiado o que la dirección esté mal escrita. Te dejamos los caminos más usados.
- Botones: "Volver al inicio" / "Contactanos"

**Página de error:**
- Título: "Algo salió mal al cargar esta página"
- Texto: "Volvé a intentar. Si el problema sigue, escribinos y lo resolvemos."
- Botones: "Volver al inicio" / "Contactanos" / "WhatsApp"

**Menú mobile:**
- Botón: "Abrir menú" / "Cerrar menú"
- Título del panel: "Menú"
- Accesibilidad: "Ocultar Servicios" / "Ver Servicios" (igual para Soluciones)

**Botón flotante de WhatsApp (mobile):** "Consultar"

---

## 18. SEO Y METADATOS

### Título por defecto del sitio
`Riego automático para casas, countries y empresas | Mundo Riego`

### Descripción por defecto
> Diseñamos, instalamos y mantenemos sistemas de riego automático para casas, countries, empresas y
> espacios verdes. Visita técnica sin cargo y presupuesto por WhatsApp.

### Palabras clave configuradas
riego automático · sistemas de riego · instalación de riego · riego por aspersión · riego por
goteo · riego para jardines · riego para countries · mantenimiento de riego · automatización de
riego · programador de riego · bombas de riego

### Título y descripción por página

| Página | Título | Descripción |
| --- | --- | --- |
| Inicio | Riego automático para casas, countries y empresas \| Mundo Riego | Diseñamos, instalamos y mantenemos riego automático para casas, countries, empresas y espacios verdes. Visita técnica sin cargo y presupuesto por WhatsApp. |
| Servicios | Servicios de riego \| Diseño, instalación y mantenimiento | Todos los servicios de Mundo Riego: instalación de riego automático, aspersión, goteo, automatización, mantenimiento, bombas y diseño de proyecto. |
| Soluciones | Soluciones de riego por tipo de proyecto | Riego automático para casas y jardines, countries y barrios cerrados, empresas, huertas y canchas. Elegí tu tipo de proyecto. |
| Proyectos | Proyectos de riego \| Trabajos reales | Galería de proyectos de riego automático: instalación, mantenimiento y diseño en casas, countries, empresas y espacios verdes. |
| Nosotros | Quiénes somos \| Riego con criterio | Diseñamos, instalamos y mantenemos sistemas de riego automático. Conocé nuestro enfoque, nuestro proceso y en qué creemos. |
| Preguntas frecuentes | Preguntas frecuentes sobre riego automático | Respuestas sobre instalación de riego automático, presupuesto, plazos, mantenimiento y cobertura en Argentina. |
| Contacto | Contacto \| Pedí tu presupuesto de riego por WhatsApp | Contactanos para instalar, mantener o revisar tu sistema de riego. Visita técnica sin cargo y presupuesto por WhatsApp. |
| Servicios y soluciones (por ficha) | Nombre del servicio \| Mundo Riego | Descripción larga de cada servicio |

---

## 19. RESUMEN DE DATOS FALTANTES PARA EL CLIENTE

### Lo que bloquea el sitio (crítico)

1. **Número de WhatsApp** — sin esto no hay botones de WhatsApp ni formulario de contacto
2. **Teléfono** (visible y para el link)
3. **Ciudad / localidad base**
4. **Zonas de cobertura** (aparece en 4 lugares + 1 FAQ)
5. **Instagram, Facebook, LinkedIn**

### Lo que hay que completar para que el sitio esté completo

6. **Dirección, localidad, código postal, link de Google Maps y coordenadas**
7. **Años de experiencia / año de inicio**
8. **Garantía de instalación y de equipos** (FAQ + dato de confianza)
9. **CUIT y domicilio legal** (política de privacidad)
10. **Términos y condiciones** (o sacar el link del footer)
11. **Marcas y fabricantes + logos**
12. **3 a 6 proyectos reales** con fotos, ubicación, superficie, sistema, problema, solución y resultado

### Lo que hay que decidir (no es un dato, es una respuesta)

13. Si el proyecto de diseño sin obra tiene o no cargo
14. Si las bombas para pileta son un servicio real
15. Si se mantiene o se saca el aviso "Estamos cargando la galería"
16. Completar las FAQ de Asesoramiento técnico (tiene 1) y Diseño de proyecto (tiene 2)

### Lo que hay que aprobar

17. Los **18 textos con errores** del punto 4
