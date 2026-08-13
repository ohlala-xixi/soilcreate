<script setup>
import { computed } from 'vue'
import { importedCases } from '../data/importedCases.js'
import catalog from '../data/products.json'
import InquiryForm from './InquiryForm.vue'

const props = defineProps({
  page: {
    type: String,
    required: true
  },
  locale: {
    type: String,
    default: 'en'
  }
})

const sourceHtml = computed(() => importedCases[props.page] || importedCases.index || '')
const spanishTextMap = {
  Home: 'Inicio',
  Cases: 'Casos',
  'Industry Cases': 'Casos industriales',
  'One set of standardized devices fits many scenarios — segmented assembly lets the same products reconfigure from project to project. From deep foundation pits and rail transit to dams and major energy sites, each industry receives a targeted sensor combination instead of a one-off custom build.':
    'Un conjunto de dispositivos estandarizados se adapta a muchos escenarios: el ensamblaje segmentado permite reconfigurar los mismos productos de un proyecto a otro. Desde excavaciones profundas y transporte ferroviario hasta presas y grandes proyectos energeticos, cada industria recibe una combinacion de sensores adecuada en lugar de una solucion unica hecha desde cero.',
  '6 INDUSTRIES · ONE PRODUCT PLATFORM · SENSOR → CLOUD': '6 INDUSTRIAS · UNA PLATAFORMA DE PRODUCTOS · SENSOR → NUBE',
  'Application scenarios': 'Escenarios de aplicacion',
  'Six Core Application Scenarios': 'Seis escenarios principales de aplicacion',
  'One device set fits many scenarios · segmented assembly reconfigures per project · no casing guide grooves needed.':
    'Un conjunto de dispositivos se adapta a muchos escenarios · el ensamblaje segmentado se reconfigura por proyecto · no requiere ranuras guia en la tuberia.',
  'Deep Foundation Pits': 'Excavaciones profundas',
  'Deep horizontal displacement of retaining structures, automated through the full excavation process.':
    'Desplazamiento horizontal profundo de estructuras de contencion, automatizado durante todo el proceso de excavacion.',
  'View cases →': 'Ver casos →',
  'Rail Transit': 'Transporte ferroviario',
  'Metro shield tunneling and pit construction — minute-level sampling captures transient changes.':
    'Tuneladoras de metro y excavaciones: el muestreo a nivel de minutos captura cambios transitorios.',
  'Slope / Landslide': 'Taludes / deslizamientos',
  'Slip-surface location with large-deformation tolerance; low-power + solar remote deployment.':
    'Localizacion de superficies de deslizamiento con tolerancia a grandes deformaciones; despliegue remoto de bajo consumo con energia solar.',
  'Water Conservancy &amp; Dams': 'Obras hidraulicas y presas',
  'Dam-body deep displacement and rockfill-dam settlement; 300&nbsp;m-class ultra-deep borehole monitoring.':
    'Desplazamiento profundo del cuerpo de presa y asentamiento en presas de escollera; monitoreo de sondeos ultraprofundos de clase 300&nbsp;m.',
  'Tunnel Convergence': 'Convergencia de tuneles',
  'Ring installation monitors cross-section convergence; the flexible structure conforms to bending deformation.':
    'La instalacion en anillo monitorea la convergencia de la seccion; la estructura flexible se adapta a la deformacion por flexion.',
  'Bridge Structures': 'Estructuras de puentes',
  'Pier and pile-foundation deep displacement with full-lifecycle structural health monitoring.':
    'Desplazamiento profundo de pilas y cimentaciones, con monitoreo de salud estructural durante todo el ciclo de vida.',
  'Application 01 · Major Energy Projects': 'Aplicacion 01 · Grandes proyectos energeticos',
  'Deep-Borehole Reliability for Long-Term Monitoring': 'Confiabilidad en sondeos profundos para monitoreo a largo plazo',
  'Major energy projects require stable sensing, traceable data and dependable operation over long service periods. SoilCreate systems monitor deep ground movement, structural deformation, pipeline-support displacement and foundation settlement, with data collected continuously from the field to the cloud.':
    'Los grandes proyectos energeticos requieren sensores estables, datos trazables y operacion confiable durante largos periodos de servicio. Los sistemas SoilCreate monitorean movimiento profundo del terreno, deformacion estructural, desplazamiento de soportes de tuberias y asentamiento de cimentaciones, con datos recopilados continuamente desde campo hasta la nube.',
  'Structural and foundation monitoring': 'Monitoreo estructural y de cimentaciones',
  'Deep displacement, settlement, tilt and stress measurements form a continuous record for construction and long-term operation.':
    'Las mediciones de desplazamiento profundo, asentamiento, inclinacion y esfuerzo forman un registro continuo para construccion y operacion a largo plazo.',
  'Joint engineering development': 'Desarrollo conjunto de ingenieria',
  'Products and monitoring methods have been developed and refined with industry research and engineering teams for demanding field conditions.':
    'Los productos y metodos de monitoreo se desarrollan y refinan junto con equipos de investigacion e ingenieria para condiciones exigentes de campo.',
  'Proven at 107 m depth': 'Validado a 107 m de profundidad',
  'In-place inclinometers captured a clear ocean-tide-related ground-movement cycle in a 107&nbsp;m coastal borehole.':
    'Los In-Place Inclinometers capturaron un ciclo claro de movimiento del terreno relacionado con la marea oceanica en un sondeo costero de 107&nbsp;m.',
  'Recommended combination': 'Combinacion recomendada',
  'Flexible Inclinometer': 'Flexible Inclinometer',
  'Settlement &amp; Tilt': 'Asentamiento e inclinacion',
  'DAQ &amp; Cloud': 'DAQ y nube',
  'Representative projects:': 'Proyectos representativos:',
  'Long-term deep-displacement monitoring across major coastal energy sites':
    'Monitoreo de desplazamiento profundo a largo plazo en grandes sitios energeticos costeros',
  'Application 02 · Rail Transit': 'Aplicacion 02 · Transporte ferroviario',
  'Full-Lifecycle Safety, from Shield Tunneling to Operations': 'Seguridad de ciclo completo, desde tuneladora hasta operacion',
  'Across the construction and operation phases of railways and metros, handheld portable systems and deployed fully automated equipment monitor inclination, settlement, horizontal displacement, axial force, strain, pressure and water level — delivering full-lifecycle safety assurance for rail-transit infrastructure.':
    'Durante las fases de construccion y operacion de ferrocarriles y metros, los sistemas portatiles y los equipos totalmente automatizados monitorean inclinacion, asentamiento, desplazamiento horizontal, fuerza axial, deformacion, presion y nivel de agua, aportando seguridad de ciclo completo para infraestructura ferroviaria.',
  'Manual &amp; automated monitoring, integrated': 'Monitoreo manual y automatizado, integrado',
  'One system spans both methods — construction-phase portable surveys hand over seamlessly to operations-phase automation.':
    'Un solo sistema cubre ambos metodos: las mediciones portatiles de la fase de construccion se transfieren de forma fluida a la automatizacion de la fase operativa.',
  'All-facility platform integration': 'Integracion de todas las instalaciones en una plataforma',
  'Track, bridge, tunnel and platform facilities integrate line-wide into one screen for unified, centralized management.':
    'Vias, puentes, tuneles y estaciones se integran a nivel de linea en una sola pantalla para gestion unificada y centralizada.',
  'City-level &amp; network-level scalability': 'Escalabilidad a nivel ciudad y red',
  'Built on CIM or network topology, the platform manages multiple lines together and grows with the urban network.':
    'Basada en CIM o topologia de red, la plataforma gestiona multiples lineas en conjunto y crece con la red urbana.',
  'Shanghai Rail Transit Line 2 · Ningbo Lines 3/7/8 · Suzhou Metro Lines 4/6 · Fuzhou Lines 2/6 · Guangzhou Metro Lines 10/11 (Shangyong Park Station)':
    'Shanghai Rail Transit Line 2 · Ningbo Lines 3/7/8 · Suzhou Metro Lines 4/6 · Fuzhou Lines 2/6 · Guangzhou Metro Lines 10/11 (Shangyong Park Station)',
  'Application 03 · Road &amp; Bridge': 'Aplicacion 03 · Carreteras y puentes',
  'Structural Health for Wide-Area Road Networks': 'Salud estructural para redes viales de gran escala',
  'For widely distributed road, bridge and tunnel facilities, fully automated equipment performs all-weather, real-time structural health monitoring — solving the traditional problems of difficult data collection and slow hazard response, and enabling city-level and even national-level road-network safety monitoring.':
    'Para instalaciones viales, puentes y tuneles distribuidos en grandes areas, los equipos totalmente automatizados realizan monitoreo estructural en tiempo real y bajo cualquier clima, resolviendo la dificultad tradicional de recopilar datos y responder lentamente a riesgos.',
  'Passive wireless smart sensing': 'Sensado inteligente inalambrico pasivo',
  'Self-developed low-power, high-precision MEMS sensors keep monitoring automatically for years after a single deployment.':
    'Sensores MEMS de baja potencia y alta precision, desarrollados internamente, mantienen el monitoreo automatico durante anos tras una sola instalacion.',
  'AI damage diagnosis &amp; robotic O&amp;M': 'Diagnostico de dano con IA y O&amp;M robotizada',
  'Deep-learning models locate and identify structural damage and dispatch fixed-point monitoring and automated maintenance.':
    'Los modelos de aprendizaje profundo localizan e identifican danos estructurales y activan monitoreo puntual y mantenimiento automatizado.',
  'Wide-area all-element integration': 'Integracion multielemento de gran area',
  'With BIM and GIS as the data foundation, environment, traffic and hazard data fuse into one road-network monitoring platform.':
    'Con BIM y GIS como base de datos, la informacion ambiental, de trafico y de riesgos se integra en una sola plataforma de monitoreo vial.',
  'Application 04 · Urban Infrastructure': 'Aplicacion 04 · Infraestructura urbana',
  'An IoT Foundation for the Digital-Twin City': 'Una base IoT para la ciudad gemela digital',
  'For integrated urban scenarios — construction sites, buildings, transportation, pipe networks and utility tunnels — an IoT sensing network combines with a data middle platform and urban hub to deliver real-time early warning, rapid response and intelligent optimization for infrastructure safety and emergency handling.':
    'Para escenarios urbanos integrados, como obras, edificios, transporte, redes de tuberias y galerias tecnicas, una red IoT de sensores se combina con una plataforma de datos y un hub urbano para alerta temprana, respuesta rapida y optimizacion inteligente.',
  'Open ecosystem': 'Ecosistema abierto',
  'One-stop device-connection ports, open data APIs and a model-definition platform let existing systems and devices integrate freely.':
    'Puertos de conexion de dispositivos, APIs de datos abiertas y una plataforma de definicion de modelos permiten integrar libremente sistemas y dispositivos existentes.',
  'One-stop unified management': 'Gestion unificada en una sola plataforma',
  'An integrated urban cloud platform gives every department "one-screen display, analysis and coordination", anywhere, anytime.':
    'Una plataforma urbana en la nube permite a cada departamento visualizar, analizar y coordinar en una sola pantalla, en cualquier momento y lugar.',
  'Spatial scalability on CIM/BIM': 'Escalabilidad espacial sobre CIM/BIM',
  'On a city-level CIM and building-level BIM foundation, data extends without limit in the spatial dimension — one platform.':
    'Sobre una base CIM a nivel ciudad y BIM a nivel edificio, los datos se extienden sin limite en la dimension espacial, dentro de una sola plataforma.',
  'Application 05 · Water Conservancy': 'Aplicacion 05 · Obras hidraulicas',
  '300 m-Class Deep Monitoring for Dams and Embankments': 'Monitoreo profundo clase 300 m para presas y terraplenes',
  'For dams, embankments and reservoirs, SoilCreate builds automated sensing networks that dynamically monitor deformation, stress and strain, pore pressure, environment and water flow — providing reliable baseline data for assessing the health of water-conservancy structures, validated at the world-scale Baihetan Hydropower Station.':
    'Para presas, terraplenes y embalses, SoilCreate construye redes de sensores automatizadas que monitorean deformacion, esfuerzo, presion de poros, ambiente y flujo de agua, generando datos base confiables para evaluar la seguridad de estructuras hidraulicas.',
  'High-precision deep sensor system': 'Sistema de sensores profundos de alta precision',
  'Purpose-built instruments support deformation measurement at depths of several hundred meters, including a 300&nbsp;m-class sliding high-precision inclinometer system.':
    'Instrumentos disenados para este uso permiten medir deformacion a varios cientos de metros de profundidad, incluido un sistema Sliding Inclinometer de alta precision clase 300&nbsp;m.',
  'Embedded for ultra-long service life': 'Integrado para vida util ultralarga',
  'Construction-phase embedded structural monitoring delivers decades of service at outstanding value, with a dedicated portable manual series.':
    'El monitoreo estructural embebido durante la construccion ofrece decadas de servicio con alto valor, junto con una serie portatil manual dedicada.',
  'Digital integrated early warning': 'Alerta temprana digital integrada',
  'Fixed-monitoring analytics fuse with natural-environment data into one early-warning system covering dam body, reservoir and hillsides.':
    'Los analisis de monitoreo fijo se fusionan con datos del ambiente natural en un sistema de alerta temprana que cubre cuerpo de presa, embalse y laderas.',
  'Application 06 · Oil &amp; Gas': 'Aplicacion 06 · Petroleo y gas',
  'Platform &amp; Pipeline Safety in the Harshest Environments': 'Seguridad de plataformas y tuberias en entornos extremos',
  'For onshore and offshore drilling platforms and long-distance pipelines, SoilCreate developed three targeted systems — while-drilling deep sensing, fiber-optic pipeline sensing and fixed platform-structure monitoring, each paired with an edge-computing platform. IP68 protection, edge computing and breakpoint-resume transmission deliver their greatest value exactly here.':
    'Para plataformas terrestres y offshore, y tuberias de larga distancia, SoilCreate desarrolla sistemas especificos: sensado profundo durante perforacion, sensado de tuberias con fibra optica y monitoreo estructural fijo de plataformas, cada uno conectado a computacion en el borde.',
  'While-drilling deep sensing &amp; communication': 'Sensado profundo y comunicacion durante perforacion',
  'Purpose-built sensors and communication keep monitoring stable in deep underground operating environments.':
    'Sensores y comunicaciones disenados para este uso mantienen estable el monitoreo en entornos subterraneos profundos.',
  'Long-distance pipeline monitoring': 'Monitoreo de tuberias de larga distancia',
  'A jointly developed fiber-optic pipeline/cable sensor system, combined with fixed sensors, monitors underground and subsea pipelines.':
    'Un sistema de sensores de fibra optica para tuberias y cables, combinado con sensores fijos, monitorea tuberias subterraneas y submarinas.',
  'High-durability fixed sensors': 'Sensores fijos de alta durabilidad',
  'Embedded during platform construction, the fixed monitoring system operates stably over an ultra-long service life.':
    'Embebido durante la construccion de la plataforma, el sistema de monitoreo fijo opera de forma estable durante una vida util muy prolongada.',
  'Industry fit': 'Ajuste por industria',
  'Product × Industry Fit Matrix': 'Matriz de ajuste producto x industria',
  'An at-a-glance map of which product lines are most commonly combined in each industry — helping you identify the best-fit configuration and shorten selection time.':
    'Un mapa rapido de que lineas de producto suelen combinarse en cada industria, para identificar una configuracion adecuada y acortar el tiempo de seleccion.',
  'Product line': 'Linea de producto',
  'Bridge Health': 'Salud de puentes',
  'Water &amp; Hydropower': 'Agua e hidroelectrica',
  Geohazard: 'Georiesgo',
  'High-Support Formwork': 'Cimbras de gran soporte',
  'Heritage / Dilapidated': 'Patrimonio / estructuras deterioradas',
  'Inclinometer Series': 'Serie de inclinometros',
  'Hydrostatic Level Gauge': 'Sensor de nivel hidrostatico',
  Tiltmeter: 'Tiltmeter',
  'Vibrating-Wire Sensors': 'Sensores de cuerda vibrante',
  'Water Level Gauge': 'Sensor de nivel de agua',
  'Weather Station': 'Estacion meteorologica',
  '✓ = product combination commonly used in this industry. These are not fixed bundles — every configuration is flexibly tailored to project needs.':
    '✓ = combinacion de productos usada comunmente en esta industria. No son paquetes fijos: cada configuracion se adapta al proyecto.',
  'Deep Foundation Pit Monitoring Cases': 'Casos de monitoreo de excavaciones profundas',
  'A project page for excavation safety monitoring: retaining-wall deep horizontal displacement, steel-support axial force, groundwater level, settlement and cloud-based alarms are handled as one data chain.':
    'Pagina de proyecto para monitoreo de seguridad en excavaciones: desplazamiento horizontal profundo de muros de contencion, fuerza axial de soportes metalicos, nivel freático, asentamiento y alarmas en la nube se gestionan como una sola cadena de datos.',
  'IPI · VW SENSOR · WATER LEVEL · CLOUD ALARM': 'IPI · SENSOR VW · NIVEL DE AGUA · ALARMA EN LA NUBE',
  'Warning Rate': 'Tasa de alerta',
  'Cumulative Displacement': 'Desplazamiento acumulado',
  'Axial-Force Elements': 'Elementos de fuerza axial',
  '16-Channel VW Boxes': 'Cajas VW de 16 canales',
  'Case scope': 'Alcance del caso',
  'What SoilCreate Monitors On Site': 'Que monitorea SoilCreate en obra',
  'Data chain': 'Cadena de datos',
  'Monitoring Chain Used On Site': 'Cadena de monitoreo usada en obra',
  'Delivered projects are organized from monitoring targets to data quality, alarm rules and reporting outputs.':
    'Los proyectos entregados se organizan desde los objetivos de monitoreo hasta la calidad de datos, reglas de alarma y reportes.',
  'Representative projects': 'Proyectos representativos',
  'Delivered Monitoring Cases': 'Casos de monitoreo entregados',
  'These cases focus on monitoring targets, sensor combinations and the data logic used after delivery.':
    'Estos casos se enfocan en objetivos de monitoreo, combinaciones de sensores y la logica de datos usada despues de la entrega.',
  'Implementation checklist': 'Lista de verificacion de implementacion',
  'Delivery Checks Behind Reliable Data': 'Verificaciones de entrega detras de datos confiables',
  'The following checks are standard items in field delivery and long-term operation.':
    'Las siguientes verificaciones son elementos estandar en la entrega de campo y la operacion a largo plazo.',
  'Delivery phase': 'Fase de entrega',
  'Field check': 'Verificacion de campo',
  'Recommended product stack:': 'Conjunto de productos recomendado:',
  'Rail Transit Monitoring Cases': 'Casos de monitoreo para transporte ferroviario',
  'For metro stations, shield sections, adjacent buildings and operating lines, SoilCreate combines portable survey tools with permanent automated monitoring so construction and operation teams see one continuous risk picture.':
    'Para estaciones de metro, tramos con tuneladora, edificios adyacentes y lineas en operacion, SoilCreate combina herramientas portatiles con monitoreo automatizado permanente para que construccion y operacion vean una imagen continua del riesgo.',
  'CONSTRUCTION · OPERATION · LINE-WIDE CLOUD': 'CONSTRUCCION · OPERACION · NUBE A NIVEL DE LINEA',
  'Slope and Landslide Monitoring Cases': 'Casos de monitoreo de taludes y deslizamientos',
  'Slope monitoring needs surface displacement, deep slip-surface location, groundwater and rainfall in one warning logic. The standard stack is GNSS + flexible inclinometer + water level + rainfall, with solar and low-power communication for remote sites.':
    'El monitoreo de taludes necesita desplazamiento superficial, localizacion profunda de la superficie de deslizamiento, agua subterranea y lluvia en una sola logica de alerta. La configuracion estandar combina GNSS, inclinometro flexible, nivel de agua y lluvia, con energia solar y comunicacion de bajo consumo para sitios remotos.',
  'GNSS · FLEXIBLE INCLINOMETER · WATER LEVEL · SOLAR': 'GNSS · INCLINOMETRO FLEXIBLE · NIVEL DE AGUA · SOLAR',
  'Water Conservancy and Dam Monitoring Cases': 'Casos de monitoreo de presas y obras hidraulicas',
  'For dam bodies, embankments, reservoirs and hydropower sites, the monitoring focus moves from a single point to deep profiles, seepage pressure, stress-strain and reservoir-area geohazards.':
    'Para cuerpos de presa, terraplenes, embalses y centrales hidroelectricas, el monitoreo pasa de un punto aislado a perfiles profundos, presion de filtracion, esfuerzo-deformacion y georiesgos del area del embalse.',
  'ULTRA-DEEP INCLINOMETER · PIEZOMETER · GNSS · CLOUD': 'INCLINOMETRO ULTRAPROFUNDO · PIEZOMETRO · GNSS · NUBE',
  'Tunnel Convergence Monitoring Cases': 'Casos de monitoreo de convergencia de tuneles',
  'Tunnel convergence monitoring focuses on cross-section deformation. Flexible arrays can follow curved installation paths and form convergence rings, while laser and settlement sensors provide independent checks.':
    'El monitoreo de convergencia de tuneles se centra en la deformacion de la seccion transversal. Los arreglos flexibles pueden seguir trayectorias curvas y formar anillos de convergencia, mientras que sensores laser y de asentamiento aportan verificaciones independientes.',
  'FLEXIBLE ARRAY · CONVERGENCE RING · LASER CHECK': 'ARREGLO FLEXIBLE · ANILLO DE CONVERGENCIA · VERIFICACION LASER',
  'Bridge Structural Health Monitoring Cases': 'Casos de monitoreo de salud estructural de puentes',
  'Bridge monitoring connects slow geometry change with traffic, wind, temperature and support conditions. The project stack uses GNSS, level gauges, tilt, stress sensors, vibration and weather data to support lifecycle maintenance.':
    'El monitoreo de puentes relaciona los cambios geometricos lentos con trafico, viento, temperatura y condiciones de apoyo. La configuracion usa GNSS, sensores de nivel, inclinacion, esfuerzo, vibracion y clima para apoyar el mantenimiento durante el ciclo de vida.',
  'GNSS · LEVEL GAUGE · TILT · WEATHER · CLOUD': 'GNSS · NIVEL · INCLINACION · CLIMA · NUBE',
  'Retaining wall': 'Muro de contencion',
  'IPI string': 'Cadena IPI',
  'VW support force': 'Fuerza de soporte VW',
  'Water level': 'Nivel de agua',
  'Cloud alarm': 'Alarma en la nube',
  'Station / tunnel': 'Estacion / tunel',
  Inclinometer: 'Inclinometro',
  Settlement: 'Asentamiento',
  'VW + water': 'VW + agua',
  'Line cloud': 'Nube de linea',
  'Slope block': 'Bloque de talud',
  'SAA profile': 'Perfil SAA',
  'Water + rain': 'Agua + lluvia',
  'Warning rule': 'Regla de alerta',
  'Dam body': 'Cuerpo de presa',
  'Deep borehole': 'Sondeo profundo',
  Piezometer: 'Piezometro',
  'GNSS / weather': 'GNSS / clima',
  'Safety assessment': 'Evaluacion de seguridad',
  'Tunnel section': 'Seccion de tunel',
  'Flexible ring': 'Anillo flexible',
  'Laser chord': 'Cuerda laser',
  'Edge terminal': 'Terminal edge',
  'Convergence trend': 'Tendencia de convergencia',
  'Tower / pier': 'Torre / pila',
  'GNSS + level': 'GNSS + nivel',
  'Tilt / stress': 'Inclinacion / esfuerzo',
  Weather: 'Clima',
  Maintenance: 'Mantenimiento'
}

function localizeHtml(html) {
  if (props.locale !== 'es') return html
  let localized = html
    .replaceAll('href="/cases/', 'href="/es/cases/')
    .replaceAll('href="/cases"', 'href="/es/cases"')
    .replaceAll('href="/contact"', 'href="/es/contact"')
    .replaceAll('href="/products/"', 'href="/es/products/"')
    .replaceAll('href="/"', 'href="/es/"')
  for (const [from, to] of Object.entries(spanishTextMap)) {
    localized = localized.replaceAll(from, to)
  }
  return localized
}

const ctaSection = computed(() => {
  const match = sourceHtml.value.match(/<section>\s*<div class="container">\s*<div class="cta-band[\s\S]*?<\/section>\s*<\/div>\s*$/)
  return match ? match[0].replace(/<\/div>\s*$/, '') : ''
})
const html = computed(() => {
  const baseHtml = !ctaSection.value
    ? sourceHtml.value
    : sourceHtml.value.replace(ctaSection.value, '').replace(/<\/div>\s*$/, '')
  return localizeHtml(baseHtml)
})
const productsByHref = computed(() => Object.fromEntries(catalog.products.map((product) => [product.href, product])))
const relatedProductMap = {
  'deep-foundation-pit': [
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/deformation-monitoring/sliding-inclinometer',
    '/products/settlement-tilt-monitoring/hydrostatic-level-gauge',
    '/products/stress-environment-monitoring/vibrating-wire-sensors'
  ],
  'slope-landslide': [
    '/products/deformation-monitoring/gnss-monitoring-system',
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/deformation-monitoring/flexible-inclinometer',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ],
  'tunnel-convergence': [
    '/products/deformation-monitoring/flexible-inclinometer',
    '/products/settlement-tilt-monitoring/wireless-tilt-vibration',
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ],
  'water-dam': [
    '/products/stress-environment-monitoring/vibrating-wire-sensors',
    '/products/deformation-monitoring/gnss-monitoring-system',
    '/products/deformation-monitoring/flexible-inclinometer',
    '/products/settlement-tilt-monitoring/hydrostatic-level-gauge'
  ],
  'rail-transit': [
    '/products/deformation-monitoring/in-place-inclinometer',
    '/products/deformation-monitoring/sliding-inclinometer',
    '/products/settlement-tilt-monitoring/hydrostatic-level-gauge',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ],
  'bridge-structure': [
    '/products/settlement-tilt-monitoring/tiltmeter-series',
    '/products/settlement-tilt-monitoring/wireless-tilt-vibration',
    '/products/deformation-monitoring/gnss-monitoring-system',
    '/products/data-acquisition/data-acquisition-monitoring-cloud'
  ]
}
const relatedProducts = computed(() =>
  (relatedProductMap[props.page] || [])
    .map((href) => productsByHref.value[href])
    .filter(Boolean)
    .slice(0, 4)
)

const productHrefMap = {
  '/products/deformation-monitoring/in-place-inclinometer': '/es/products/deformation-monitoring/in-place-inclinometer',
  '/products/deformation-monitoring/flexible-inclinometer': '/es/products/deformation-monitoring/flexible-inclinometer',
  '/products/deformation-monitoring/sliding-inclinometer': '/es/products/deformation-monitoring/sliding-inclinometer'
}
const localizedProductHref = (href) => props.locale === 'es' ? productHrefMap[href] || href : href
</script>

<template>
  <div>
    <div v-html="html"></div>
    <section v-if="relatedProducts.length" class="sc-container sc-case-product-links">
      <h2 class="sc-section-title">{{ props.locale === 'es' ? 'Productos relacionados' : 'Related Products' }}</h2>
      <div class="sc-related-grid">
        <a v-for="product in relatedProducts" :key="product.href" :href="localizedProductHref(product.href)" class="sc-related-card">
          <div class="sc-related-img">
            <img :src="product.image" :alt="product.imageAlt || product.name" width="480" height="300" loading="lazy" decoding="async" />
          </div>
          <div class="sc-related-title">{{ product.name }}</div>
          <div class="sc-related-sku">{{ product.sku }}</div>
        </a>
      </div>
    </section>
    <section class="sc-container sc-case-inquiry-section" id="quote-form">
      <InquiryForm :locale="props.locale" />
    </section>
  </div>
</template>
