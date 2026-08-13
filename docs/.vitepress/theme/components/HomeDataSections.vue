<script setup>
import { computed } from 'vue'
import { openInquiry } from '../utils/inquiry.js'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  },
  showCta: {
    type: Boolean,
    default: true
  }
})

const isSpanish = computed(() => props.locale === 'es')
const copy = computed(() => isSpanish.value
  ? {
      techKicker: 'Tecnologia clave',
      techTitle: 'Liderazgo definido por datos',
      protocolKicker: 'Ingenieria abierta',
      protocolTitle: 'Protocolos abiertos, datos transparentes e integracion mas sencilla',
      protocolIntro: [
        'SoilCreate es uno de los proveedores mas abiertos en la industria del monitoreo de ingenieria. Proporcionamos firmware de registradores de datos y protocolos de comunicacion de sensores para que clientes e integradores revisen los enlaces de datos, conecten sus propias plataformas y eviten dependencia de equipos de caja negra.',
        'El proyecto del controlador cubre adquisicion RS485 multicanal, 4G, WiFi, Ethernet, rutas de datos USB, almacenamiento local, bajo consumo y flujos de comunicacion usados por inclinometros flexibles y fijos.'
      ],
      firmwareLink: 'Ver firmware open-source →',
      cta: 'Hable con nuestros expertos sobre la instrumentacion, los sistemas de datos y las soluciones cloud adecuados para su proximo proyecto.',
      ctaButton: 'CONTACTAR',
      inquiry: 'Consulta general',
      technologyMetrics: [
        { value: '±0.002°', label: 'Precision de medicion', copy: 'Precision de inclinometro flexible a nivel avanzado para interpretar desplazamientos estables en lineas largas de monitoreo.' },
        { value: '10 kHz', label: 'Frecuencia maxima de muestreo', copy: 'La adquisicion de alta frecuencia captura cambios transitorios en construccion dinamica y monitoreo estructural.' },
        { value: '128', label: 'Sensores en una linea RS485', copy: 'El direccionamiento AutoID reduce la complejidad del cableado y facilita la puesta en marcha de cadenas largas.' },
        { value: '120 g/m', label: 'Peso de varilla de fibra de carbono', copy: 'Las estructuras ligeras facilitan instalaciones profundas sin maquinaria pesada en sitios con espacio limitado.' },
        { value: 'IP68', label: 'Proteccion de ingreso', copy: 'Diseñado para ambientes humedos, severos y de largo plazo donde el equipo debe seguir funcionando.' },
        { value: '180°', label: 'Angulo maximo de flexion', copy: 'Las estructuras flexibles segmentadas se adaptan a grandes deformaciones y siguen siendo recuperables y reutilizables.' }
      ],
      protocolChecks: [
        { title: 'Firmware del controlador abierto', copy: 'El firmware expone configuracion del dispositivo, drivers RS485, carga a red, registro local y gestion de energia.' },
        { title: 'Protocolos de sensores documentados', copy: 'Formato de trama, checksum, escaneo AutoID, comandos de lectura y codigos de estado estan documentados para integradores.' },
        { title: 'Los sistemas del cliente se mantienen independientes', copy: 'Las interfaces abiertas ayudan a conectar dispositivos SoilCreate con SCADA, BIM, gemelos digitales o plataformas de alerta.' }
      ],
      protocolMetrics: [
        { value: 'RS485', label: 'Adquisicion multicanal', copy: '2-4 canales con potencia controlable y pines de direccion.' },
        { value: '4G', label: 'Carga por red', copy: 'Rutas de datos 4G, WiFi, Ethernet y USB CDC.' },
        { value: 'AutoID', label: 'Descubrimiento de sensores', copy: 'Escaneo de direcciones y mapeo de direccion fija documentados.' },
        { value: 'JSON', label: 'Reportes estructurados', copy: 'Reportes segmentados y almacenamiento local mejoran la trazabilidad.' }
      ]
    }
  : {
      techKicker: 'Core Technology',
      techTitle: 'Leadership Defined by Data',
      protocolKicker: 'Open Source Engineering',
      protocolTitle: 'Open Protocols, Transparent Data, Easier Integration',
      protocolIntro: [
        'SoilCreate is one of the more open vendors in the engineering monitoring industry. We openly provide the firmware of our data loggers and the communication protocols of our sensors, allowing customers and integrators to review the data links, access their own platforms, and avoid vendor lock-in caused by black-box devices.',
        'The controller project covers multi-channel RS485 acquisition, 4G, WiFi, Ethernet, USB data paths, local storage, low-power operation, and communication flows used by flexible and in-place inclinometers.'
      ],
      firmwareLink: 'View Open-Source Firmware →',
      cta: 'Talk to our experts today about the right instrumentation, data systems, and cloud solutions for your next project.',
      ctaButton: 'GET IN TOUCH',
      inquiry: 'General Inquiry',
      technologyMetrics: [
        { value: '±0.002°', label: 'Measurement Accuracy', copy: 'Flexible inclinometer accuracy at a world-class level, supporting stable displacement interpretation over long monitoring lines.' },
        { value: '10 kHz', label: 'Max Sampling Rate', copy: 'High-frequency acquisition captures fast transient changes for dynamic construction and structural monitoring conditions.' },
        { value: '128', label: 'Sensors on One RS485 Line', copy: 'AutoID plug-and-play addressing reduces wiring complexity and keeps large sensor chains easier to commission.' },
        { value: '120 g/m', label: 'Carbon-Fiber Rod Weight', copy: 'Lightweight structures make deep borehole installation more practical without heavy machinery on constrained sites.' },
        { value: 'IP68', label: 'Ingress Protection', copy: 'Built for wet, harsh, and long-term field environments where monitoring equipment must keep working.' },
        { value: '180°', label: 'Max Bending Angle', copy: 'Segmented flexible structures adapt to large deformation while remaining recoverable and reusable across projects.' }
      ],
      protocolChecks: [
        { title: 'Controller firmware is open', copy: 'Firmware exposes device configuration, RS485 drivers, network upload, local logging, and power management.' },
        { title: 'Sensor protocols are documented', copy: 'Frame format, checksum logic, AutoID scanning, reading commands, and status codes are documented for integrators.' },
        { title: 'Client systems stay independent', copy: 'Open interfaces help connect SoilCreate devices to SCADA, BIM, digital-twin, or safety-warning platforms.' }
      ],
      protocolMetrics: [
        { value: 'RS485', label: 'Multi-Channel Acquisition', copy: '2-4 channels with controllable power and direction pins.' },
        { value: '4G', label: 'Network Upload', copy: '4G, WiFi, Ethernet, and USB CDC data paths.' },
        { value: 'AutoID', label: 'Sensor Discovery', copy: 'Documented address scanning and fixed-address mapping.' },
        { value: 'JSON', label: 'Structured Reporting', copy: 'Segmented reporting and local storage improve traceability.' }
      ]
    })
</script>

<template>
  <section class="sc-home-data sc-home-data--tech">
    <div class="sc-home-data-inner">
      <div class="sc-data-kicker">{{ copy.techKicker }}</div>
      <h2>{{ copy.techTitle }}</h2>

      <div class="sc-data-grid sc-data-grid--three">
        <article v-for="item in copy.technologyMetrics" :key="item.label" class="sc-data-card">
          <strong>{{ item.value }}</strong>
          <h3>{{ item.label }}</h3>
          <p>{{ item.copy }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="sc-home-data sc-home-data--protocol">
    <div class="sc-home-data-inner">
      <div class="sc-home-data-heading sc-protocol-heading">
        <div class="sc-data-kicker">{{ copy.protocolKicker }}</div>
        <h2>{{ copy.protocolTitle }}</h2>
      </div>

      <div class="sc-protocol-layout">
        <div class="sc-protocol-copy">
        <p v-for="paragraph in copy.protocolIntro" :key="paragraph">{{ paragraph }}</p>

        <ul class="sc-protocol-list">
          <li v-for="item in copy.protocolChecks" :key="item.title">
            <span>✓</span>
            <div>
              <strong>{{ item.title }}</strong>
              <p>{{ item.copy }}</p>
            </div>
          </li>
        </ul>

        <a
          href="https://github.com/ohlala-xixi/soilcreate-controller"
          class="sc-protocol-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ copy.firmwareLink }}
        </a>
        </div>

        <div class="sc-protocol-grid">
          <article v-for="item in copy.protocolMetrics" :key="item.label" class="sc-data-card sc-protocol-card">
            <strong>{{ item.value }}</strong>
            <h3>{{ item.label }}</h3>
            <p>{{ item.copy }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>

  <section v-if="showCta" class="sc-cta-banner">
    <div class="sc-cta-text">
      {{ copy.cta }}
    </div>
    <button type="button" class="sc-btn-cta" @click="openInquiry(copy.inquiry)">{{ copy.ctaButton }}</button>
  </section>
</template>
