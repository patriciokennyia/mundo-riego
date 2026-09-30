import type { Service, Solution, Project, FaqItem } from "@/types";

/**
 * SERVICIOS
 * Taxonomia tecnica: el cliente busca "como se riega", no "soy jardinero".
 * Las soluciones (abajo) usan taxonomia de cliente.
 */
export const services: Service[] = [
  {
    slug: "instalacion-riego-automatico",
    title: "Instalación de riego automático",
    navTitle: "Instalación de riego automático",
    short: "Del replanteo a la primera semana de riego, sin romper el jardín.",
    excerpt:
      "Relevamos, sectorizamos, instalamos cañerías y aspersores, y probamos sector por sector. Un sistema terminado y funcionando, con plano.",
    heroImage: "/images/services/instalacion.webp",
    icon: "wrench",
    featured: true,
    includes: [
      "Visita técnica y relevé del terreno",
      "Sectorización según caudal y presión disponible",
      "Cañería enterrada y aspersores instalados",
      "Electroválvulas y programador configurados",
      "Programación inicial por tipo de planta",
      "Prueba de funcionamiento sector por sector",
      "Plano del sistema entregado al cliente",
    ],
    process: [
      "Visitamos el espacio y vemos de dónde sale el agua y con qué presión.",
      "Definimos la sectorización y el tipo de aspersor para cada zona.",
      "Instalamos la cañería y los aspersores, y conectamos válvulas y programador.",
      "Probamos sector por sector, ajustamos y te dejamos el sistema funcionando.",
    ],
    faqs: [
      {
        q: "¿Cuánto tarda una instalación?",
        a: "Una instalación residencial de un jardín común toma entre 1 y 3 días de obra. Superficies grandes, countries o predios comerciales llevan más tiempo. El plazo exacto te lo damos en la visita técnica, antes de empezar.",
      },
      {
        q: "¿Hay que romper el pasto?",
        a: "La cañería se pasa con zanjas angostas. Lo ideal es que la instalación se haga antes de la siembra o del césped, para que el pasto no sufra. Si ya hay césped, se trabaja por tramos y se repone el área afectada.",
      },
      {
        q: "¿Qué pasa si no tengo presión suficiente?",
        a: "Se resuelve con una estación de bombeo o una bomba de impulsión. Lo definimos en el relevamiento: si la presión de la red alcanza, no hace falta agregar bombeo y te ahorramos ese costo.",
      },
      {
        q: "¿Los aspersores se pueden ver o quedan escondidos?",
        a: "Se instalan a nivel del césped, así que no se ven cuando están en reposo. Al activarse emergen y riegan, y vuelven a su posición. Es la diferencia entre un sistema bien hecho y uno que arruina la vista del jardín.",
      },
    ],
    relatedSolutions: ["casas-y-jardines", "countries-y-barrios-cerrados"],
  },
  {
    slug: "riego-por-aspercion",
    title: "Riego por aspersión",
    navTitle: "Riego por aspersión",
    short: "Cobertura uniforme en césped y superficies grandes, sin zonas secas.",
    excerpt:
      "Aspersores y rotores calculados para solaparse correctamente. El resultado es un césped parejo, sin áreas quemadas ni encharcadas.",
    heroImage: "/images/services/aspersor.webp",
    icon: "sprinkler",
    featured: true,
    includes: [
      "Selección de aspersores y radios según el área",
      "Cálculo de pluviometría y solapamiento",
      "Distribución para eliminar zonas secas o sobre regadas",
      "Instalación a nivel de césped",
      "Regulación de cada sector",
      "Programación por horarios y días",
    ],
    process: [
      "Medimos la superficie y analizamos el tipo de suelo y la exposición al sol.",
      "Elegimos el aspersor adecuado: superficie, caudal disponible y radio de riego.",
      "Distribuimos los aspersores para que el agua se solape y no queden áreas secas.",
      "Instalamos, regulamos y probamos cada sector con presión real de funcionamiento.",
    ],
    faqs: [
      {
        q: "¿Aspersión o goteo?",
        a: "Depende de qué necesitás regar. La aspersión cubre superficies grandes de césped de forma rápida y uniforme. El goteo es mejor para canteros, arbustos, huertas y plantas de hileras porque entrega el agua justo en la raíz. En muchos jardins se combinan los dos.",
      },
      {
        q: "¿El riego por aspersión quema el pasto?",
        a: "Solo si el sistema está mal diseñado. Quemaduras aparecen por solapamiento excesivo o por sectores con presión baja. Con la pluviometría calculada y los sectores regulados, el pasto se riega parejo.",
      },
      {
        q: "¿Puedo regar solo una parte del jardín?",
        a: "Sí, y es una de las ventajas de sectorizar. Se riega por zonas independientes, así que podés activar solo el sector que necesitás.",
      },
    ],
    relatedSolutions: ["casas-y-jardines", "canchas-y-deportes"],
  },
  {
    slug: "riego-por-goteo",
    title: "Riego por goteo",
    navTitle: "Riego por goteo",
    short: "Agua y nutrientes justo en la raíz, con mínima evaporación.",
    excerpt:
      "Goteo con goteros compensados, cinta y microaspersores para huertas, canteros y setos. Menos agua perdida, menos Malezas.",
    heroImage: "/images/services/goteo-hero.webp",
    icon: "droplet",
    featured: true,
    includes: [
      "Cálculo de caudal por planta y por hilera",
      "Goteros compensados de caudal constant",
      "Cinta de goteo y tubing para hileras",
      "Microaspersión para canteros y plantación joven",
      "Bocas de llenado y filtros",
      "Programación diferenciada por zona",
    ],
    process: [
      "Relevamos el cantero o la huerta y definimos el método según el tipo de plantación.",
      "Calculamos el caudal necesario y elegimos el emisor adecuado.",
      "Instalamos la línea, las derivaciones y los goteros.",
      "Probamos el caudal, ajustamos y programamos la frecuencia de riego.",
    ],
    faqs: [
      {
        q: "¿El goteo tapa o se obstruye?",
        a: "Puede, si no se le pone filtro. Por eso todo sistema de goteo que instalamos lleva filtro de discalla o malla, y el mantenimiento anual incluye la limpieza. Con filtro y limpieza periódica, el caudal se mantiene estable.",
      },
      {
        q: "¿Sirve para huertas y jardines?",
        a: "Sí. Es el método más eficiente para huertas, canteros, setos y plantación joven, porque el agua llega directo a la raíz y se pierde muy poca por evaporación.",
      },
      {
        q: "¿Puedo fertilizationar con el sistema de goteo?",
        a: "Sí, con un kit de fertilización. Se inyectan los nutrientes al caudal de agua de forma controlada. Es una de las grandes ventajas del goteo frente a la aspersión.",
      },
    ],
    relatedSolutions: ["huertas-y-quintas", "casas-y-jardines"],
  },
  {
    slug: "automatizacion-y-programadores",
    title: "Automatización y programadores",
    navTitle: "Automatización y programadores",
    short: "Convertí un riego manual en un sistema que funciona solo.",
    excerpt:
      "Instalamos y reparamos programadores, agregamos control por celu y sensor de lluvia. Automatizá sin rehacer la instalación.",
    heroImage: "/images/services/programador.webp",
    icon: "chip",
    featured: true,
    includes: [
      "Programadores con y sin conexión WiFi",
      "Configuración por zonas y días de riego",
      "Sensor de lluvia integrado",
      "Control desde el celular",
      "Migración de sistemas manuales a automáticos",
      "Reparación y recambio de programadores",
    ],
    process: [
      "Revisamos el programador actual o la instalación manual existente.",
      "Elegimos el programador según la cantidad de zonas y si querés control remoto.",
      "Instalamos y configuramos las zonas, los horarios y el sensor de lluvia.",
      "Probamos el arranque automático y te enseñamos a operarlo.",
    ],
    faqs: [
      {
        q: "¿Puedo automatizar un riego que ya está instalado?",
        a: "En la mayoría de los casos sí. Si la instalación tiene electroválvulas, alcanza con sumar un programador y un transformador. Si es un sistema manual con llaves, hay que agregar válvulas: es una intervención chica y se puede hacer sin romper el jardín.",
      },
      {
        q: "¿Qué pasa si se corta la luz?",
        a: "La mayoría de los programadores guardan la programación y vuelven solos. Además, un sensor de lluvia conectado corta el riego si llueve, así evitamos el desperdicio que es el mayor costo silencioso de un riego automático.",
      },
      {
        q: "¿Puedo controlar el riego desde el celular?",
        a: "Sí, con los programadores de conexión WiFi. Ves el estado de cada zona, activás o pausás el riego y ajustás horarios desde la app. También es la forma de cortar el riego si detectás una pérdida.",
      },
    ],
    relatedSolutions: ["casas-y-jardines", "espacios-verdes-empresas"],
  },
  {
    slug: "mantenimiento-y-reparacion",
    title: "Mantenimiento y reparación",
    navTitle: "Mantenimiento y reparación",
    short: "Tu sistema funcionando como el primer día, año tras año.",
    excerpt:
      "Reparamos sectores que no riegan, cambiamos aspersores tapados, revisamos válvulas y програмadores. Service antes que reemplazo.",
    heroImage: "/images/services/mantenimiento-2.webp",
    icon: "tools",
    featured: true,
    includes: [
      "Diagnóstico de sectores con falta de agua",
      "Cambio de aspersores tapados o dañados",
      "Revisión y cambio de electroválvulas",
      "Reparación de fugas y roturas de cañería",
      "Limpieza de filtros y purga de cañerías",
      "Reinstalación y reprogramación estacional",
      "Ajustes de programación por temporada",
    ],
    process: [
      "Contás el síntoma: qué sector no riega, dónde gotea, qué hace ruido.",
      "Revisamos el sector: aspersores, válvula, cañería y presión.",
      "Reparamos lo que falló y probamos el sector completo.",
      "Dejamos el sistema ajustado y te explicamos qué revisar.",
    ],
    faqs: [
      {
        q: "Mi sector no riega. ¿Qué puede ser?",
        a: "Las causas más comunes son una electroválvula que no abre, un aspersor tapado o una rotura en la cañería. Si el resto de los sectores funciona bien, el problema casi siempre está localizado y se resuelve sin reemplazar el sistema.",
      },
      {
        q: "¿Cada cuánto hay que hacer mantenimiento?",
        a: "Un chequeo anual al inicio de la temporada es lo mínimo recomendado, más una limpieza de filtros si hay árboles o pets cerca. Los aspersores se tapan por polvo, hojas y minerales del agua, y eso reduce el caudal hasta que el sector riega menos.",
      },
      {
        q: "¿Trabajan con sistemas instalados por otros?",
        a: "Sí. Es una parte habitual del trabajo: nos contratan para revisar y reparar sistemas instalados por otros, y también para tomar el mantenimiento de uno que ya estaba funcionando.",
      },
    ],
    relatedSolutions: ["countries-y-barrios-cerrados", "espacios-verdes-empresas"],
  },
  {
    slug: "bombas-y-bombeo",
    title: "Bombas y sistemas de impulsión",
    navTitle: "Bombas y sistemas de impulsión",
    short: "La presión que necesita tu sistema, calculada y dimensionada bien.",
    excerpt:
      "Bombas sumergibles, booster y estaciones de bombeo para riego. Solucionamos la presión baja y el caudal insuficiente.",
    heroImage: "/images/services/electroválvula.webp",
    icon: "pump",
    featured: true,
    includes: [
      "Diagnóstico de presión y caudal disponible",
      "Selección de bomba según caudal y altura",
      "Instalación de bombas sumergibles y booster",
      "Estaciones de bombeo con tanque",
      "Protecciones y conexiones de seguridad",
      "Puesta en marcha y regulación",
    ],
    process: [
      "Medimos la presión disponible en el punto donde se alimenta el riego.",
      "Definimos el caudal y la altura que necesita el sistema.",
      "Elegimos e instalamos la bomba o la estación de bombeo.",
      "Ponemos en marcha, regulamos y probamos con la demanda real del riego.",
    ],
    faqs: [
      {
        q: "¿Por qué mi riego no tiene presión?",
        a: "Puede ser por pérdida en la cañería, por un filtro tapado, por una válvula que no abre del todo o porque la red pública no alcanza. Un sector con baja presión riega menos y de forma irregular, y eso se ve en el pasto.",
      },
      {
        q: "¿Hace falta una bomba si tengo agua de red?",
        a: "No siempre. Si la red alcanza para la demanda del sistema, agregar una bomba es un gasto innecesario. En el relevamiento verificamos si hace falta y te lo decimos con números.",
      },
      {
        q: "¿Pueden instalar una bomba para la pileta también?",
        a: "Trabajamos con bombas de impulsión para riego y para otros usos siempre que la aplicación sea compatible. Contanos qué necesitás y te asesoramos.",
      },
    ],
    relatedSolutions: ["countries-y-barrios-cerrados", "espacios-verdes-empresas"],
  },
  {
    slug: "diseno-y-proyecto",
    title: "Diseño y proyecto de riego",
    navTitle: "Diseño y proyecto de riego",
    short: "El plano completo antes de tocar una pala.",
    excerpt:
      "Relevamiento, cálculo de caudal y presión, sectorización y plano de instalación. La obra empieza con el proyecto aprobado.",
    heroImage: "/images/services/asesoramiento.webp",
    icon: "ruler",
    featured: true,
    includes: [
      "Visita técnica con measurements",
      "Cálculo de caudal y presión por sector",
      "Selección de aspersores y cobertura",
      "Plano de instalación en escala",
      "Lista de materiales yequipment",
      "Estimación de presupuesto desglosada por partida",
    ],
    process: [
      "Relevamos el espacio: medidas, pendiente, tipo de suelo y fuente de agua.",
      "Calculamos el caudal, la presión y la sectorización.",
      "Diseñamos el recorrido de cañerías y la ubicación de cada aspersor.",
      "Te entregamos el plano con el presupuesto desglosado por partida.",
    ],
    faqs: [
      {
        q: "¿El proyecto tiene costo?",
        a: "El proyecto básico se cotiza junto con la obra. Si solo necesitás el proyecto para consultarlo o compararlo, consultanos y lo vemos.",
      },
      {
        q: "¿Puedo usar el proyecto para pedir otro presupuesto?",
        a: "Sí. Un plano bien hecho con la sectorización y los materiales especificados sirve para comparar propuestas de forma justa, y para que cualquier instalador sepa exactamente qué hacer.",
      },
    ],
    relatedSolutions: ["countries-y-barrios-cerrados", "espacios-verdes-empresas"],
  },
  {
    slug: "asesoramiento-tecnico",
    title: "Asesoramiento técnico",
    navTitle: "Asesoramiento",
    short: "Consultá antes de contratar y sabé qué necesitás.",
    excerpt:
      "Te ayudamos a elegir sistema, aspersores y programador según tu espacio, tu presión y tu presupuesto real.",
    heroImage: "/images/services/asesoramiento.webp",
    icon: "chat",
    featured: true,
    includes: [
      "Orientación sobre el sistema adecuado",
      "Comparación de opciones y costos",
      "Revisión de un presupuesto que recibiste",
      "Verificación de un proyecto existente",
      "Acompañamiento durante la obra de otro proveedor",
    ],
    process: [
      "Contás tu caso: superficie, tipo de jardín y presupuesto aproximado.",
      "Te decimos qué sistema corresponde y qué opciones descartarías.",
      "Si ya tenés cotizaciones, las revisamos y te explicamos las diferencias.",
    ],
    faqs: [
      {
        q: "¿Puedo consultar sin contratar?",
        a: "Sí. Una consulta de asesoramiento no tiene compromiso. Si después querés que lo ejecutemos, seguimos con el relevamiento y el proyecto.",
      },
    ],
    relatedSolutions: ["casas-y-jardines", "countries-y-barrios-cerrados"],
  },
];

/**
 * SOLUCIONES POR TIPO DE CLIENTE
 * Aqui el visitante se autoidentifica: "soy un country", "tengo una empresa".
 */
export const solutions: Solution[] = [
  {
    slug: "casas-y-jardines",
    title: "Casas y jardines",
    navTitle: "Casas y jardines",
    short: "Riego automático para el jardín de tu casa.",
    excerpt:
      "Para patios, jardines, quintas y casas con terreno. Un sistema que riega parejo, por la noche y sin que tengas que pensar en eso.",
    heroImage: "/images/hero/por-riego.webp",
    icon: "home",
    audience: "Casas, quintas y patios",
    painPoints: [
      "El pasto se seca en partes porque los sectores no están bien calculados.",
      "Regar a mano todos los días lleva tiempo que no siempre tenés.",
      "El jardín se ve bien los primeros meses y después la cobertura se vuelve dispareja.",
      "Los aspersores quedan a la vista o rompen el pasto al instalarlos mal.",
    ],
    solution: [
      "Sectorización por tipo de planta, sol y pendiente.",
      "Aspersión para el césped, goteo para canteros y setos.",
      "Programación nocturna para perder menos agua por evaporación.",
      "Sensor de lluvia para que el sistema no riegue cuando llueve.",
    ],
    faqs: [
      {
        q: "¿Cuánto cuesta más que regar a mano?",
        a: "La instalación es una inversión de una sola vez. El sistema se paga con el tiempo que dejás de dedicate a regar y con el agua que dejás de desperdiciar. El mantenimiento anual es una salida mucho menor que un año de riego manual.",
      },
    ],
    relatedServices: ["instalacion-riego-automatico", "riego-por-aspercion", "riego-por-goteo"],
  },
  {
    slug: "countries-y-barrios-cerrados",
    title: "Countries y barrios cerrados",
    navTitle: "Countries y barrios cerrados",
    short: "Sistema centralizado para áreas comunes y lotes.",
    excerpt:
      "Riego para countries y barrios cerrados: áreas verdes comunes, lotes y seguridad perimetral. Un solo sistema, un solo responsable.",
    heroImage: "/images/hero/fondo-2.webp",
    icon: "gate",
    audience: "Administraciones de countries y barrios cerrados",
    painPoints: [
      "Cada lote tiene un sistema distinto y nadie sabe cuál funciona.",
      "Las áreas comunes verdes se riegan a mano y quedan desprolijas.",
      "Cada proveedor dice que su problema no es de su sector.",
      "El mantenimiento cambia de mano y nadie lleva registro del sistema.",
    ],
    solution: [
      "Proyecto único para toda la zona: comunes, lotes yials perimetral.",
      "Bombeo y sectorización pensados para la demanda real del barrio.",
      "Un solo proveedor responsable de instalación y mantenimiento.",
      "Registro y documentación del sistema para cada sector.",
    ],
    faqs: [
      {
        q: "¿Trabajan con requisitos de ingreso al country?",
        a: "Sí. Nos adaptamos a los protocolos de acceso, seguridad y Presentation, y coordinamos las visitas con la administración.",
      },
      {
        q: "Pueden hacerse cargo de un sistema ya instalado?",
        a: "Sí. Relevamos el sistema existente, documentamos su estado y armamos un plan de puesta en marcha y mantenimiento.",
      },
    ],
    relatedServices: ["diseno-y-proyecto", "bombas-y-bombeo", "mantenimiento-y-reparacion"],
  },
  {
    slug: "espacios-verdes-empresas",
    title: "Empresas y espacios verdes",
    navTitle: "Empresas y espacios verdes",
    short: "Riego para oficinas, parques e instituciones.",
    excerpt:
      "Riego de predios corporativos, parques industriales, Responsive plazas e instituciones. Un proveedor único de diseño, instalación y mantenimiento.",
    heroImage: "/images/hero/por-riego-2.webp",
    icon: "building",
    audience: "Empresas,olutelypayloadi, 군 institutions",
    painPoints: [
      "El riego de las áreas verdes depende de un encargado que además hace otras cosas.",
      "Cada proveedor distinto se hace cargo de una parte del sistema.",
      "El consume agua de la red sube por una mala programación.",
      "No hay registro de los sistemas instalados con los años.",
    ],
    solution: [
      "Riego sectorizado para las distintas áreas verdes del predio.",
      "Programación centralizada, con la posibilidad de sectorizar por zonas de uso.",
      "Un solo proveedor para diseño, instalación, recambios y mantenimiento.",
      "Documentación de cada sector y de los equipos instalados.",
    ],
    faqs: [
      {
        q: "¿Pueden trabajar con nuestra empresa de mantenimiento?",
        a: "Sí. Podemos trabajar como proveedor de riego, aportar el sistema y el mantenimiento, o coordinar con el equipo de mantenimiento interno.",
      },
    ],
    relatedServices: ["instalacion-riego-automatico", "mantenimiento-y-reparacion", "bombas-y-bombeo"],
  },
  {
    slug: "huertas-y-quintas",
    title: "Huertas y quintas",
    navTitle: "Huertas y quintas",
    short: "Riego para huertas, quintas y cultivo doméstico.",
    excerpt:
      "Goteo para huertas y quintas: agua justo en la raíz, sin evaporación y sin Malezas. Fertilización integrada si la necesitás.",
    heroImage: "/images/hero/goteo-full.webp",
    icon: "leaf",
    audience: "Huertas, quintas y fincas",
    painPoints: [
      "Riegar la huerta a mano todos los días lleva demasiado tiempo.",
      "En época de calor, el agua se evapora antes de llegar a la raíz.",
      "El goteo se tapa con los sedimentos del agua de pozo.",
      "Plantas con distinta necesidad de agua reciben el mismo riego.",
    ],
    solution: [
      "Goteo con goteros compensados: caudal constant enoración de hileras.",
      "Filtros para que el sistema no se obstruya.",
      "Programación diferenciada por hilera y por etapa de crecimiento.",
      "Fertilización integrada si necesitás nutrir el cultivo desde el riego.",
    ],
    faqs: [
      {
        q: "¿Sirve para agua de pozo?",
        a: "Sí, con filtro adecuado. El agua de pozo suele traer más sedimentos, así que el filtro y el mantenimiento son especialmente importantes.",
      },
    ],
    relatedServices: ["riego-por-goteo", "asesoramiento-tecnico"],
  },
  {
    slug: "canchas-y-deportes",
    title: "Canchas y campos deportivos",
    navTitle: "Canchas y deportes",
    short: "Riego uniforme en superficies de juego.",
    excerpt:
      "Diseño orientado a uniformidad para canchas, clubes y campos. Aspersores de alto rendimiento y control centralizado.",
    heroImage: "/images/hero/manguera.webp",
    icon: "field",
    audience: "Clubes, canchas, campos de golf y Hampi",
    painPoints: [
      "Zonas secas y encharcadas que afectan la calidad del juego.",
      "Presión insuficiente para cubrir toda la superficie.",
      "Sistemas viejos con aspersores tapados o sin uniformidad.",
      "Necesidad de riego temprano para no cortar el uso del campo.",
    ],
    solution: [
      "Diseño orientado a uniformidad de aplicación.",
      "Aspersores de alto rendimiento y presión calculada.",
      "Control centralizado y programación por franja horaria.",
      "Mantenimiento preventivo y control de aspersores.",
    ],
    faqs: [
      {
        q: "¿Pueden instalar en horarios de poca actividad?",
        a: "Sí, coordinamos las visitas con la administración del club para trabajar en las franjas de menor uso.",
      },
    ],
    relatedServices: ["riego-por-aspercion", "bombas-y-bombeo", "mantenimiento-y-reparacion"],
  },
];

/**
 * PROYECTOS
 * Estado: PENDIENTE de carga de obras reales.
 *
 * Cada proyecto debe tener fotos REALES de la obra terminada.
 * Hasta que se carguen, la galeria muestra estos placeholders y la
 * seccion queda identificada como pendiente en REDESIGN-REPORT.md.
 *
 * Para activar un proyecto real:
 *  1. Guardá las fotos en public/images/projects/
 *  2. Completá el objeto con datos reales (nombre, ubicación, superficie,
 *     sistema, desafío, solución)
 *  3. Poné featured: true
 *  4. NO inventes resultados ni métricas: si no las tenés, dejalo vacío.
 */
export const projects: Project[] = [
  {
    slug: "jardin-residencial-pendiente",
    title: "[COMPLETAR: nombre del proyecto]",
    status: "pending",
    featured: false,
    location: "[COMPLETAR: barrio o localidad]",
    clientType: "Casa",
    area: "[COMPLETAR: superficie en m²]",
    system: "[COMPLETAR: sistema instalado]",
    challenge: "[COMPLETAR: qué problema tenía el espacio]",
    solution: "[COMPLETAR: qué se diseñó e instaló]",
    result: "[COMPLETAR: resultado real, si lo hay]",
    images: [],
  },
  {
    slug: "country-pendiente",
    title: "[COMPLETAR: nombre del proyecto]",
    status: "pending",
    featured: false,
    location: "[COMPLETAR: barrio o localidad]",
    clientType: "Country / Barrio cerrado",
    area: "[COMPLETAR: superficie en m²]",
    system: "[COMPLETAR: sistema instalado]",
    challenge: "[COMPLETAR: qué problema tenía el espacio]",
    solution: "[COMPLETAR: qué se diseñó e instaló]",
    result: "[COMPLETAR: resultado real, si lo hay]",
    images: [],
  },
  {
    slug: "espacio-verde-pendiente",
    title: "[COMPLETAR: nombre del proyecto]",
    status: "pending",
    featured: false,
    location: "[COMPLETAR: barrio o localidad]",
    clientType: "Espacio verde / Empresa",
    area: "[COMPLETAR: superficie en m²]",
    system: "[COMPLETAR: sistema instalado]",
    challenge: "[COMPLETAR: qué problema tenía el espacio]",
    solution: "[COMPLETAR: qué se diseñó e instaló]",
    result: "[COMPLETAR: resultado real, si lo hay]",
    images: [],
  },
];

/** FAQ general del sitio */
export const generalFaqs: FaqItem[] = [
  {
    q: "¿Hacen presupuesto sin cargo?",
    a: "Sí. La visita técnica y el presupuesto no tienen cargo. Con la superficie aproximada, el tipo de jardín y de dónde sale el agua, ya podemos darte una estimación; la visita confirma los números.",
  },
  {
    q: "¿En qué zonas trabajan?",
    a: "Trabajamos en [COMPLETAR: definir zonas de cobertura]. Si tu ubicación no está en la lista, contanos por WhatsApp y vemos cómo coordinamos.",
  },
  {
    q: "¿Cuánto demora responder un presupuesto?",
    a: "Respondemos las consultas en el día. El presupuesto detallado depende del relevamiento: normalmente se entrega en pocos días después de la visita técnica.",
  },
  {
    q: "¿Trabajan con presupuestos de otros?",
    a: "Sí, y es habitual. Podemos revisar un proyecto que ya tenés, explicar las diferencias entre propuestas o ejecutar el trabajo con el plan que ya está definido.",
  },
  {
    q: "¿Qué garantía tienen los trabajos?",
    a: "[COMPLETAR: definir plazos de garantía de instalación y de equipos. Es un dato clave de confianza y conviene publicarlo.]",
  },
  {
    q: "¿El mantenimiento es obligatorio?",
    a: "No es obligatorio, pero es recomendable al menos una vez por año. Los aspersores se tapan, los filtros se cargan y el sistema pierde uniformidad con el uso. El mantenimiento es mucho más barato que una reparación mayor.",
  },
  {
    q: "¿Puedo instalar sobre un sistema que ya existe?",
    a: "En muchos casos sí. Relevamos el sistema actual, vemos qué se puede reutilizar y qué conviene reemplazar. Si la instalación es muy antigua o está en mal estado, conviene evaluar un sistema nuevo.",
  },
  {
    q: "¿Qué información necesito para pedir un presupuesto?",
    a: "Con que nos digas la superficie aproximada, el tipo de jardín o cultivo, de dónde sale el agua (red, pozo, tanque) y si ya tenés un sistema instalado, alcanzamos para empezar.",
  },
];

  /** Marcas y fabricantes: solo los que realmente se usan */
export const brands = {
  status: "pending" as const,
  note: "Cargar logos en public/images/brands/ cuando se confirmen los fabricantes con los que se trabaja.",
  items: [] as string[],
};
