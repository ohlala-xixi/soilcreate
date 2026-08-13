import catalog from './products.json'

const spanishHrefMap = {
  '/products/deformation-monitoring/in-place-inclinometer': '/es/products/deformation-monitoring/in-place-inclinometer',
  '/products/deformation-monitoring/flexible-inclinometer': '/es/products/deformation-monitoring/flexible-inclinometer',
  '/products/deformation-monitoring/sliding-inclinometer': '/es/products/deformation-monitoring/sliding-inclinometer'
}

const spanishSummaries = {
  'SCIS Series':
    'Sistema Portable Sliding Inclinometer con Bluetooth para mediciones manuales en sondeos, perfiles de desplazamiento horizontal profundo y datos listos para la nube.',
  'SCIS-IPI-01':
    'Cadena automatizada In-Place Inclinometer (IPI) para monitoreo 24/7 de desplazamiento profundo con RS485, varillas ligeras y alarmas en la nube.',
  'SCIS-SAA-02':
    'Shape Displacement Array (SAA) recuperable para monitoreo 3D de deformación en sondeos, tuneles, taludes, terraplenes y proyectos reutilizables.',
  'SCIS-GNSS-100':
    'Sistema GNSS integrado para monitoreo 3D milimetrico en taludes, presas, minas, puentes y zonas de movimiento lento.',
  'SCST Series':
    'Sensor Hydrostatic Level Gauge para monitoreo de asentamiento con alta resolucion y salida RS485 en metro, presas, puentes y excavaciones.',
  'SCST-T01':
    'Serie Tiltmeter con opciones MEMS y electroliticas, versiones RS485, LoRa y NB-IoT para inclinacion estructural.',
  'SCST-WV02':
    'Sensor inalambrico de inclinacion, temperatura y vibracion con FFT, subida NB-IoT / 4G y carcasa IP68 para exterior.',
  'SCSE-VW01':
    'Sensores de cuerda vibrante y adquisicion multicanal para esfuerzo, deformacion, carga, presion de tierra y presion de poros.',
  'SCDA-DG-01':
    'Gateway de adquisicion de datos y nube de monitoreo para redes LoRa, sensores VW, paneles, alarmas e integracion API.'
}

export const spanishCategories = [
  {
    id: 'deformation-monitoring',
    label: 'Monitoreo de deformacion',
    children: [
      { id: 'sliding-inclinometer', label: 'Portable Sliding Inclinometer' },
      { id: 'in-place-inclinometer', label: 'In-Place Inclinometer (IPI)' },
      { id: 'shape-array', label: 'Shape Displacement Array (SAA)' },
      { id: 'gnss-monitoring', label: 'GNSS Monitoring' }
    ]
  },
  {
    id: 'settlement-tilt-monitoring',
    label: 'Asentamiento e inclinacion',
    children: [
      { id: 'hydrostatic-level', label: 'Hydrostatic Level Gauge' },
      { id: 'tiltmeter', label: 'Tiltmeter' },
      { id: 'wireless-tilt-vibration', label: 'Wireless Tilt + Vibration' }
    ]
  },
  {
    id: 'stress-environment-monitoring',
    label: 'Esfuerzo y ambiente',
    children: [
      { id: 'vibrating-wire-sensors', label: 'Vibrating-Wire Sensors' },
      { id: 'piezometer-water-level', label: 'Piezometer / Water Level' }
    ]
  },
  {
    id: 'data-acquisition',
    label: 'Adquisicion de datos',
    children: [
      { id: 'data-logger-gateway', label: 'Data Logger & Gateway' },
      { id: 'wireless-transmission', label: 'Wireless Transmission' }
    ]
  },
  {
    id: 'software-platform',
    label: 'Plataforma de software',
    children: [
      { id: 'monitoring-cloud', label: 'Monitoring Cloud' },
      { id: 'api-integration', label: 'API Integration' }
    ]
  }
]

export const spanishProductCards = catalog.products.map((product) => ({
  ...product,
  href: spanishHrefMap[product.href] || product.href,
  summary: spanishSummaries[product.sku] || product.summary
}))

export const spanishFeaturedProducts = spanishProductCards.filter((product) =>
  ['SCIS Series', 'SCIS-IPI-01', 'SCIS-SAA-02'].includes(product.sku)
)

export const spanishProductPages = {
  'in-place-inclinometer': {
    title: 'In-Place Inclinometer (IPI)',
    h1: 'In-Place Inclinometer (IPI) para monitoreo automatizado de sondeos',
    model: 'SCIS-IPI-01',
    category: 'Monitoreo de deformacion',
    image: '/images/products/in-place-inclinometer/in-place-inclinometer-sensor-chain.jpg',
    imageAlt: 'Cadena In-Place Inclinometer IPI para monitoreo automatizado de desplazamiento en sondeos',
    description:
      'Cadena de sensores IPI para monitoreo continuo de desplazamiento horizontal profundo en excavaciones, taludes, tuneles, presas y muros de contencion.',
    bestFor: 'Ideal para monitoreo automatizado 24/7',
    overview:
      'El In-Place Inclinometer (IPI) de SoilCreate convierte un sondeo instrumentado en una linea permanente de monitoreo. Es adecuado cuando el proyecto necesita datos continuos, alarmas tempranas y menos dependencia de lecturas manuales.',
    features: [
      'Cadena de sensores MEMS para desplazamiento lateral profundo',
      'Comunicacion RS485 para integracion con data logger y nube',
      'Instalacion modular con espaciamiento configurable',
      'Adecuado para excavaciones profundas, taludes, presas y tuneles'
    ],
    specs: [
      ['Sensor', 'MEMS inclinometer'],
      ['Communication', 'RS485 / Modbus options'],
      ['Typical spacing', '0.5 m to 3 m configurable'],
      ['Protection', 'IP68 for long-term field deployment']
    ],
    applications: ['Excavaciones profundas', 'Muros de contencion', 'Taludes', 'Tuneles', 'Presas'],
    downloads: [
      { label: 'In-Place Inclinometer (IPI) Datasheet', href: '/specs/sc-ipi-26.pdf' },
      { label: 'RS485 Proprietary Protocol', href: '/specs/ipi-saa-rs485-proprietary-protocol.pdf' },
      { label: 'Modbus Protocol', href: '/specs/ipi-saa-modbus-protocol.pdf' }
    ],
    related: ['flexible-inclinometer', 'sliding-inclinometer']
  },
  'flexible-inclinometer': {
    title: 'Shape Displacement Array (SAA)',
    h1: 'Shape Displacement Array (SAA) para monitoreo 3D de deformacion',
    model: 'SCIS-SAA-02',
    category: 'Monitoreo de deformacion',
    image: '/images/products/flexible-inclinometer/flexible-inclinometer-shape-array.jpg',
    imageAlt: 'Shape Displacement Array SAA flexible para monitoreo 3D de deformacion',
    description:
      'Sistema SAA recuperable para perfiles 3D de deformacion en sondeos, tuneles, asentamientos, taludes y estructuras de contencion.',
    bestFor: 'Ideal para monitoreo profundo de deformacion 3D',
    overview:
      'Shape Displacement Array (SAA) combina segmentos rigidos y juntas flexibles para medir perfiles de deformacion 3D. Es una opcion fuerte cuando el sitio requiere recuperacion, reutilizacion y monitoreo continuo de geometria compleja.',
    features: [
      'Medicion 3D continua a lo largo de la linea instrumentada',
      'Estructura segmentada y recuperable para despliegues reutilizables',
      'Apto para sondeos verticales, lineas horizontales y tuneles',
      'Integracion con gateway, nube y reglas de alarma'
    ],
    specs: [
      ['Sensor', 'MEMS multi-axis segments'],
      ['Output', '3D displacement profile'],
      ['Installation', 'Vertical, horizontal or tunnel convergence layout'],
      ['Use mode', 'Recoverable and reusable']
    ],
    applications: ['Convergencia de tuneles', 'Taludes', 'Lineas de asentamiento', 'Terraplenes', 'Presas'],
    downloads: [
      { label: 'Shape Displacement Array (SAA) Datasheet', href: '/specs/flexible-inclinometer.pdf' },
      { label: 'RS485 Proprietary Protocol', href: '/specs/ipi-saa-rs485-proprietary-protocol.pdf' },
      { label: 'Modbus Protocol', href: '/specs/ipi-saa-modbus-protocol.pdf' }
    ],
    related: ['in-place-inclinometer', 'sliding-inclinometer']
  },
  'sliding-inclinometer': {
    title: 'Portable Sliding Inclinometer',
    h1: 'Portable Sliding Inclinometer para mediciones manuales en sondeos',
    model: 'SCIS Series',
    category: 'Monitoreo de deformacion',
    image: '/images/products/sliding-inclinometer/sliding-inclinometer-system.jpg',
    imageAlt: 'Portable Sliding Inclinometer Bluetooth con sonda, cable y carrete',
    description:
      'Sistema portatil Bluetooth para levantamientos manuales A0/A180 en sondeos, perfiles de desplazamiento horizontal y verificacion de campo.',
    bestFor: 'Ideal para mediciones manuales en sondeos',
    overview:
      'El Portable Sliding Inclinometer es adecuado para proyectos que necesitan inspecciones periodicas, comparacion manual y control de calidad en campo. La sonda y el carrete Bluetooth ayudan a reducir la carga operativa de una medicion tradicional.',
    features: [
      'Lecturas manuales A0/A180 para perfiles de desplazamiento',
      'Operacion portatil con sonda, cable de control y carrete Bluetooth',
      'Adecuado para contratistas, consultores y equipos de inspeccion',
      'Datos listos para revision de campo y reportes'
    ],
    specs: [
      ['Sensor', 'MEMS accelerometer'],
      ['Reading mode', 'Manual A0/A180 borehole survey'],
      ['Typical interval', '0.5 m'],
      ['Connectivity', 'Bluetooth reel and mobile app workflow']
    ],
    applications: ['Sondeos de inclinometro', 'Taludes', 'Excavaciones', 'Presas', 'Puentes'],
    downloads: [
      { label: 'Sliding Inclinometer Product Information', href: '/specs/high-precision-sliding-inclinometer.pdf' }
    ],
    related: ['in-place-inclinometer', 'flexible-inclinometer']
  }
}

export const spanishCaseCards = [
  {
    title: 'Excavaciones profundas',
    href: '/cases/deep-foundation-pit',
    image: '/images/case/deep-foundation-pit/deep-foundation-pit-hero.jpg',
    summary: 'Desplazamiento de muros, fuerza axial, nivel de agua y alarmas conectadas en una sola cadena de datos.'
  },
  {
    title: 'Transito ferroviario',
    href: '/cases/rail-transit',
    image: '/images/case/rail-transit/rail-transit-hero.jpg',
    summary: 'Monitoreo de tuneles, portales y excavaciones de metro con sensores IPI, SAA y nivel de agua.'
  },
  {
    title: 'Taludes y deslizamientos',
    href: '/cases/slope-landslide',
    image: '/images/case/slope-landslide/geohazard-pipeline-monitoring.jpg',
    summary: 'Seguimiento de movimiento profundo, desplazamiento superficial, lluvia y aguas subterraneas.'
  },
  {
    title: 'Presas y agua',
    href: '/cases/water-dam',
    image: '/images/case/water-dam/water-dam-hero.jpg',
    summary: 'Deformacion profunda, asentamiento, filtracion y datos de seguridad para presas y embalses.'
  },
  {
    title: 'Tuneles',
    href: '/cases/tunnel-convergence',
    image: '/images/case/rail-transit/rail-transit-hero.jpg',
    summary: 'Convergencia de seccion y deformacion de roca o revestimiento durante construccion y operacion.'
  },
  {
    title: 'Puentes',
    href: '/cases/bridge-structure',
    image: '/images/case/bridge-structure/bridge-structure-hero.jpg',
    summary: 'Monitoreo de pilas, cimentaciones y movimiento estructural durante todo el ciclo de vida.'
  }
]

export const spanishSolutionCards = [
  {
    title: 'Guia de seleccion de inclinometros para excavaciones, taludes, presas y tuneles',
    href: '/solutions/inclinometer-selection-guide-deep-excavation-slope-dam-tunnel',
    summary: 'Como elegir entre Portable Sliding Inclinometer, In-Place Inclinometer (IPI) y Shape Displacement Array (SAA).'
  },
  {
    title: 'Que es un In-Place Inclinometer (IPI)',
    href: '/solutions/what-is-an-in-place-inclinometer-ipi-a-practical-guide-for-geotechnical-monitoring',
    summary: 'Una guia practica para monitoreo automatizado de desplazamiento en sondeos.'
  },
  {
    title: 'Sistema automatizado de monitoreo con inclinometro',
    href: '/solutions/automated-inclinometer-monitoring-system-from-sensor-data-to-cloud-alarms',
    summary: 'Del sensor al data logger, nube, alarmas y reportes de ingenieria.'
  },
  {
    title: 'Que es un Shape Displacement Array (SAA)',
    href: '/solutions/what-is-a-3d-flexible-displacement-array-saa-a-practical-guide',
    summary: 'Uso de arrays flexibles para perfiles 3D de deformacion y convergencia.'
  },
  {
    title: 'Monitoreo de excavacion profunda',
    href: '/solutions/deep-excavation-horizontal-displacement-monitoring-strut-force-settlement-groundwater',
    summary: 'Desplazamiento horizontal, fuerza de puntales, asentamiento, agua subterranea y alarmas.'
  },
  {
    title: 'Monitoreo de taludes y minas a cielo abierto',
    href: '/solutions/open-pit-mine-slope-monitoring-how-automation-reduces-inspection-blind-spots',
    summary: 'Como la automatizacion reduce puntos ciegos en inspecciones de estabilidad de taludes.'
  }
]
