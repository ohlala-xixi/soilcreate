<script setup>
const technologyLayers = [
  {
    step: '01 / Sensing',
    title: 'Sensing Layer',
    points: ['MEMS high-precision sensing', 'RS485 bus / AutoID addressing', 'Segmented assembly / LoRa wireless']
  },
  {
    step: '02 / Edge',
    title: 'Acquisition Layer',
    points: ['Smart gateway / VW acquisition', 'Edge computing + filtering', 'Breakpoint-resume / event-triggered reporting']
  },
  {
    step: '03 / Network',
    title: 'Network Layer',
    points: ['4G/5G/NB-IoT all-carrier', 'MQTT / TCP / HTTP', 'LoRa ad-hoc networking']
  },
  {
    step: '04 / Cloud',
    title: 'Cloud Layer',
    points: ['Microservices architecture', 'GIS/BIM 3D visualization', 'Tiered alerts / multi-project management']
  },
  {
    step: '05 / AI',
    title: 'AI Layer',
    points: ['Neural-network safety assessment', 'Kalman / sidereal-day filtering', 'Machine-vision defect recognition']
  }
]
</script>

<template>
  <div class="sc-tech-stack">
    <div class="sc-data-kicker">Technology</div>
    <h3>Cloud-Edge-Device, Fully Self-Developed</h3>
    <p>
      Five layers, one proprietary system — from MEMS sensing to neural-network safety assessment.
    </p>

    <div class="sc-tech-layer-grid">
      <article v-for="layer in technologyLayers" :key="layer.title" class="sc-tech-layer-card">
        <span>{{ layer.step }}</span>
        <h4>{{ layer.title }}</h4>
        <ul>
          <li v-for="point in layer.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>

    <div class="sc-tech-band">
      FULL-CHAIN PROPRIETARY IP | NO BLACK-BOX DEPENDENCE | FULL DATA SOVEREIGNTY
    </div>
  </div>
</template>
