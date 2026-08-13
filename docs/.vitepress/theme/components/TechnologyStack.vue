<script setup>
import { computed } from 'vue'

const props = defineProps({
  locale: {
    type: String,
    default: 'en'
  }
})

const copy = computed(() => {
  return props.locale === 'es'
    ? {
        kicker: 'Tecnologia',
        title: 'Cloud-Edge-Device, completamente desarrollado internamente',
        subtitle: 'Cinco capas, un sistema propietario: desde sensores MEMS hasta evaluacion de seguridad con redes neuronales.',
        layers: [
          {
            step: '01 / Sensado',
            title: 'Capa de sensado',
            points: ['Sensado MEMS de alta precision', 'Bus RS485 / direccionamiento AutoID', 'Ensamble segmentado / LoRa inalambrico']
          },
          {
            step: '02 / Edge',
            title: 'Capa de adquisicion',
            points: ['Gateway inteligente / adquisicion VW', 'Computacion edge + filtrado', 'Reanudacion tras interrupcion / reporte por eventos']
          },
          {
            step: '03 / Red',
            title: 'Capa de red',
            points: ['4G/5G/NB-IoT multicarrier', 'MQTT / TCP / HTTP', 'Red ad-hoc LoRa']
          },
          {
            step: '04 / Cloud',
            title: 'Capa cloud',
            points: ['Arquitectura de microservicios', 'Visualizacion GIS/BIM 3D', 'Alertas por niveles / gestion multiproyecto']
          },
          {
            step: '05 / IA',
            title: 'Capa IA',
            points: ['Evaluacion de seguridad con redes neuronales', 'Filtrado Kalman / sidereal-day', 'Reconocimiento de defectos por vision artificial']
          }
        ],
        band: 'IP PROPIETARIA DE CADENA COMPLETA | SIN DEPENDENCIA DE CAJA NEGRA | SOBERANIA TOTAL DE DATOS'
      }
    : {
        kicker: 'Technology',
        title: 'Cloud-Edge-Device, Fully Self-Developed',
        subtitle: 'Five layers, one proprietary system — from MEMS sensing to neural-network safety assessment.',
        layers: [
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
        ],
        band: 'FULL-CHAIN PROPRIETARY IP | NO BLACK-BOX DEPENDENCE | FULL DATA SOVEREIGNTY'
      }
})
</script>

<template>
  <div class="sc-tech-stack">
    <div class="sc-data-kicker">{{ copy.kicker }}</div>
    <h3>{{ copy.title }}</h3>
    <p>{{ copy.subtitle }}</p>

    <div class="sc-tech-layer-grid">
      <article v-for="layer in copy.layers" :key="layer.title" class="sc-tech-layer-card">
        <span>{{ layer.step }}</span>
        <h4>{{ layer.title }}</h4>
        <ul>
          <li v-for="point in layer.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>

    <div class="sc-tech-band">
      {{ copy.band }}
    </div>
  </div>
</template>
