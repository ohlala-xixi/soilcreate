<script setup>
import { openInquiry } from '../utils/inquiry.js'

defineProps({
  showCta: {
    type: Boolean,
    default: true
  }
})

const technologyMetrics = [
  {
    value: '±0.002°',
    label: 'Measurement Accuracy',
    copy: 'Flexible inclinometer accuracy at a world-class level, supporting stable displacement interpretation over long monitoring lines.'
  },
  {
    value: '10 kHz',
    label: 'Max Sampling Rate',
    copy: 'High-frequency acquisition captures fast transient changes for dynamic construction and structural monitoring conditions.'
  },
  {
    value: '128',
    label: 'Sensors on One RS485 Line',
    copy: 'AutoID plug-and-play addressing reduces wiring complexity and keeps large sensor chains easier to commission.'
  },
  {
    value: '120 g/m',
    label: 'Carbon-Fiber Rod Weight',
    copy: 'Lightweight structures make deep borehole installation more practical without heavy machinery on constrained sites.'
  },
  {
    value: 'IP68',
    label: 'Ingress Protection',
    copy: 'Built for wet, harsh, and long-term field environments where monitoring equipment must keep working.'
  },
  {
    value: '180°',
    label: 'Max Bending Angle',
    copy: 'Segmented flexible structures adapt to large deformation while remaining recoverable and reusable across projects.'
  }
]

const protocolChecks = [
  {
    title: 'Controller firmware is open',
    copy: 'Firmware exposes device configuration, RS485 drivers, network upload, local logging, and power management.'
  },
  {
    title: 'Sensor protocols are documented',
    copy: 'Frame format, checksum logic, AutoID scanning, reading commands, and status codes are documented for integrators.'
  },
  {
    title: 'Client systems stay independent',
    copy: 'Open interfaces help connect SoilCreate devices to SCADA, BIM, digital-twin, or safety-warning platforms.'
  }
]

const protocolMetrics = [
  { value: 'RS485', label: 'Multi-Channel Acquisition', copy: '2-4 channels with controllable power and direction pins.' },
  { value: '4G', label: 'Network Upload', copy: '4G, WiFi, Ethernet, and USB CDC data paths.' },
  { value: 'AutoID', label: 'Sensor Discovery', copy: 'Documented address scanning and fixed-address mapping.' },
  { value: 'JSON', label: 'Structured Reporting', copy: 'Segmented reporting and local storage improve traceability.' }
]
</script>

<template>
  <section class="sc-home-data sc-home-data--tech">
    <div class="sc-home-data-inner">
      <div class="sc-data-kicker">Core Technology</div>
      <h2>Leadership Defined by Data</h2>

      <div class="sc-data-grid sc-data-grid--three">
        <article v-for="item in technologyMetrics" :key="item.label" class="sc-data-card">
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
        <div class="sc-data-kicker">Open Source Engineering</div>
        <h2>Open Protocols, Transparent Data, Easier Integration</h2>
      </div>

      <div class="sc-protocol-layout">
        <div class="sc-protocol-copy">
        <p>
          SoilCreate is one of the more open vendors in the engineering monitoring industry. We openly
          provide the firmware of our data loggers and the communication protocols of our sensors,
          allowing customers and integrators to review the data links, access their own platforms,
          and avoid vendor lock-in caused by black-box devices.
        </p>
        <p>
          The controller project covers multi-channel RS485 acquisition, 4G, WiFi, Ethernet, USB
          data paths, local storage, low-power operation, and communication flows used by flexible
          and in-place inclinometers.
        </p>

        <ul class="sc-protocol-list">
          <li v-for="item in protocolChecks" :key="item.title">
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
          View Open-Source Firmware →
        </a>
        </div>

        <div class="sc-protocol-grid">
          <article v-for="item in protocolMetrics" :key="item.label" class="sc-data-card sc-protocol-card">
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
      Talk to our experts today about the right instrumentation, data systems, and cloud solutions for
      your next project.
    </div>
    <button type="button" class="sc-btn-cta" @click="openInquiry('General Inquiry')">GET IN TOUCH</button>
  </section>
</template>
