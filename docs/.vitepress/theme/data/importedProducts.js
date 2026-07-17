export const importedProducts = {
  'sliding-inclinometer': {
    title: 'Sliding Inclinometer',
    seoTitle: 'Sliding Inclinometer (SCIS Series) | SoilCreate',
    description: 'Smart Bluetooth portable sliding inclinometer for manual borehole surveys. One operator surveys a 30 m borehole in about 5 minutes with 0.005 mm resolution, IP68 protection, and cloud-ready field data.',
    category: 'Deformation Monitoring',
    subcategory: 'Sliding Inclinometer',
    model: 'SCIS Series · Class A / Class B',
    image: '/images/products/sliding-inclinometer/sliding-inclinometer-system.jpg',
    imageAlt: 'Bluetooth sliding inclinometer system with probe, control cable and cable reel',
    lead: 'A smart, Bluetooth-enabled portable deep-displacement monitoring system. One operator surveys a 30 m borehole in about 5 minutes with international-grade accuracy in a compact field package.',
    overviewHeading: 'Measure deep horizontal displacement, distributed by depth',
    overview: [
      'The sliding inclinometer measures how the horizontal displacement of subsurface soil or structures is distributed with depth. A Bluetooth app workflow, automatic measurement mode, checksum review, and cloud synchronization reduce the friction of traditional two-person survey workflows.',
      'The probe slides inside standard grooved inclinometer casing in 0.5 m steps. Each reading contributes a horizontal displacement component, and the full displacement profile is reconstructed from the bottom datum upward.'
    ],
    metrics: [
      { value: '0.005 mm', label: 'Resolution / 500 mm' },
      { value: '+/-1.5 mm', label: 'System accuracy / 30 m reference' },
      { value: 'IP68 / 3 MPa', label: 'Ingress protection' },
      { value: '80 h', label: 'Battery life' }
    ],
    features: [
      'Single-operator automatic measurement workflow for faster field surveys.',
      'Bluetooth app and cloud synchronization reduce manual transcription errors.',
      'A0 / A180 reverse readings support zero-offset cancellation and checksum review.',
      'Stainless-steel IP68 probe is suitable for wet, deep, and harsh geotechnical sites.',
      'Useful for foundation pits, slopes, dams, bridges, retaining walls, and tunnel projects.'
    ],
    applications: [
      'Manual borehole inclinometer surveys',
      'Foundation pit and retaining-wall displacement monitoring',
      'Slope and landslide deformation monitoring',
      'Dam, hydropower, bridge, and tunnel inspection',
      'Cross-checking automated IPI monitoring data'
    ],
    specs: [
      ['Measurement method', 'Gravity-referenced MEMS inclinometer probe in grooved casing'],
      ['Compatible casing', 'Standard 70 mm four-groove inclinometer casing'],
      ['Guide wheel spacing', '500 mm'],
      ['Measurement range', '+/-15 degrees'],
      ['Resolution', '0.005 mm / 500 mm'],
      ['Typical survey efficiency', '30 m borehole in about 5 minutes'],
      ['Protection', 'IP68, 3 MPa pressure resistance'],
      ['Battery life', 'Up to 80 hours continuous operation']
    ]
  },
  'in-place-inclinometer': {
    title: 'In-Place Inclinometer',
    seoTitle: 'In-Place Inclinometer (IPI) | SoilCreate',
    description: 'Automated in-place inclinometer for 7x24 deep-displacement monitoring. One RS485 cable chains up to 128 sensors with lightweight carbon-fiber rods, 0.005 mm resolution, and IP68 protection.',
    category: 'Deformation Monitoring',
    subcategory: 'In-Place Inclinometer',
    model: 'SCIS-IPI-01 · RS485 x128 · Carbon Fiber',
    image: '/images/products/in-place-inclinometer/in-place-inclinometer-sensor-chain.jpg',
    imageAlt: 'In-place inclinometer sensor chain with lightweight rods and RS485 bus cabling',
    downloads: [
      {
        name: 'In-Place Inclinometer Product Information',
        meta: 'PDF | Product brochure',
        link: '/specs/sc-ipi-26.pdf'
      },
      {
        name: 'IPI / SAA RS485 Proprietary Protocol',
        meta: 'PDF | RS485 communication protocol',
        link: '/specs/ipi-saa-rs485-proprietary-protocol.pdf'
      },
      {
        name: 'IPI / SAA Modbus Protocol',
        meta: 'PDF | Modbus communication protocol',
        link: '/specs/ipi-saa-modbus-protocol.pdf'
      }
    ],
    lead: '7x24 automated deep-displacement monitoring for boreholes where manual surveys cannot provide enough time resolution.',
    overviewHeading: 'Real-time data that manual surveys can never capture',
    overview: [
      'The in-place inclinometer answers the need for continuous automated monitoring. It samples at minute-level frequency and captures instantaneous deformation changes that daily or weekly manual site visits may miss.',
      'Sensor segments are installed bottom-up in the borehole, and each segment is mapped to a depth record. Later abnormal readings can be traced directly to a specific node at a specific depth.'
    ],
    metrics: [
      { value: '0.005 mm', label: 'Resolution / 500 mm' },
      { value: '128 nodes', label: 'Sensors on one RS485 bus' },
      { value: '120 g/m', label: 'Carbon-fiber rod reference' },
      { value: 'IP68 / 2 MPa', label: 'Waterproof rating' }
    ],
    features: [
      'Continuous automated monitoring for foundation pits, slopes, tunnels, dams, and retaining structures.',
      'RS485 bus architecture supports long sensor chains and practical cloud integration.',
      'Lightweight carbon-fiber rods reduce deep-borehole installation workload.',
      'Segment number and depth records simplify diagnosis and maintenance.',
      'Rate and cumulative alarm thresholds can be configured in the monitoring platform.'
    ],
    applications: [
      'Deep foundation pit lateral displacement monitoring',
      'Slope and landslide deep movement monitoring',
      'Tunnel, subway, and rail transit deformation monitoring',
      'Dam, hydropower, embankment, and reservoir slope monitoring',
      'Long-term automated geotechnical monitoring'
    ],
    specs: [
      ['Product type', 'In-place inclinometer sensor chain'],
      ['Sensor principle', 'MEMS inclination measurement'],
      ['Communication', 'RS485 bus'],
      ['Sensor quantity', 'Up to 128 nodes per bus depending on project configuration'],
      ['Rod material', 'Carbon fiber and aluminum alloy structure'],
      ['Resolution', '0.005 mm / 500 mm reference'],
      ['Protection', 'IP68, 2 MPa waterproof rating'],
      ['Monitoring mode', 'Automated continuous acquisition with platform alarms']
    ]
  },
  'flexible-inclinometer': {
    title: 'Flexible Inclinometer (Shape Array, SAA)',
    seoTitle: 'Flexible Inclinometer / Shape Array SAA | SoilCreate',
    description: 'Flexible inclinometer shape array for 3D deformation monitoring. Segmented, recoverable, reusable hardware with +/-0.002 degree accuracy, 0.005 mm resolution, and IP68 protection.',
    category: 'Deformation Monitoring',
    subcategory: 'Flexible Inclinometer / SAA',
    model: 'SCIS-SAA-02 · 3-Axis · Segmented & Recoverable',
    image: '/images/products/flexible-inclinometer/flexible-inclinometer-shape-array.jpg',
    imageAlt: 'Flexible inclinometer shape array with rigid sensing segments and flexible joints',
    downloads: [
      {
        name: 'Flexible Inclinometer / Shape Array SAA Product Information',
        meta: 'PDF | Product brochure',
        link: '/specs/flexible-inclinometer.pdf'
      },
      {
        name: 'IPI / SAA RS485 Proprietary Protocol',
        meta: 'PDF | RS485 communication protocol',
        link: '/specs/ipi-saa-rs485-proprietary-protocol.pdf'
      },
      {
        name: 'IPI / SAA Modbus Protocol',
        meta: 'PDF | Modbus communication protocol',
        link: '/specs/ipi-saa-modbus-protocol.pdf'
      }
    ],
    lead: 'A spine-structure 3D deformation monitoring array for large deformation and complex installation conditions.',
    overviewHeading: '3D deformation, segmented and recoverable, multi-mode layout',
    overview: [
      'The flexible inclinometer measures displacement in X, Y, and Z through a spine-structure array of rigid sensing segments and flexible joints. The product can be deployed vertically in a borehole, horizontally in a trench, or in a ring layout around a tunnel section.',
      'Because the array is segmented, it can be assembled on site, dismantled at project end, inspected, and redeployed on the next project.'
    ],
    metrics: [
      { value: '+/-0.002°', label: 'Measurement accuracy' },
      { value: '0.005 mm', label: 'Displacement resolution' },
      { value: '180°', label: 'Maximum bending' },
      { value: 'IP68 / 3 MPa', label: 'Waterproof pressure rating' }
    ],
    features: [
      '3-axis measurement reconstructs a continuous 3D deformation shape.',
      'Segmented structure can be assembled, recovered, inspected, and reused.',
      'Flexible joints adapt to boreholes, horizontal settlement lines, and tunnel convergence layouts.',
      'AutoID and RS485 chain architecture simplify addressing and wiring.',
      'Per-segment temperature records and torsion correction improve long-term reliability.'
    ],
    applications: [
      'Vertical borehole deformation monitoring',
      'Horizontal settlement monitoring',
      'Tunnel convergence monitoring',
      'Embankment, retaining-wall, and slope displacement monitoring',
      'Reusable project-based monitoring programs'
    ],
    specs: [
      ['Measurement dimensions', '3D measurement, X / Y / Z axes'],
      ['Angular range', '0-360 degrees'],
      ['Measurement accuracy', '+/-0.002 degrees'],
      ['Displacement resolution', '0.005 mm'],
      ['Segment length options', '0.3 m / 0.5 m / 1 m'],
      ['Communication', 'RS485, AutoID addressing'],
      ['Protection', 'IP68, 3 MPa water pressure'],
      ['Deployment modes', 'Vertical, horizontal, and ring installation']
    ]
  },
  'gnss-monitoring-system': {
    title: 'GNSS Monitoring System',
    seoTitle: 'GNSS Monitoring System | SoilCreate',
    description: 'All-in-one GNSS monitoring receiver for millimetre-level 3D displacement monitoring with GPS, GLONASS, Galileo, BDS-3 tracking, low power draw, and filtering algorithms.',
    category: 'Deformation Monitoring',
    subcategory: 'GNSS Monitoring',
    model: 'SCIS-GNSS-100 · All-Constellation · mm-Level',
    image: '/images/products/gnss-monitoring-system/gnss-monitoring-station.jpg',
    imageAlt: 'GNSS monitoring station with dome antenna and solar panels',
    lead: 'An all-in-one GNSS monitoring receiver for long-term millimetre-level 3D displacement monitoring in outdoor engineering sites.',
    overviewHeading: 'Millimetre-level displacement monitoring for wide-area risk zones',
    overview: [
      'The GNSS monitoring system is designed for slopes, dams, open-pit mines, bridges, and other sites where surface displacement must be tracked continuously across a large area.',
      'All-constellation tracking and data filtering support reliable displacement trend interpretation under outdoor conditions.'
    ],
    metrics: [
      { value: '+/-2.5 mm', label: 'Static accuracy reference' },
      { value: '<1.2 W', label: 'Power consumption' },
      { value: '4', label: 'Constellations tracked' },
      { value: '30 km', label: 'mm-level baseline reference' }
    ],
    features: [
      'Tracks GPS, GLONASS, Galileo, and BDS-3 constellations.',
      'Supports long-term 3D displacement monitoring on slopes, dams, mines, and bridges.',
      'Low-power design supports solar-powered outdoor deployment.',
      'Filtering algorithms help reduce noise and improve trend reliability.',
      'Suitable for integration with cloud monitoring and alarm workflows.'
    ],
    applications: ['Slope monitoring', 'Open-pit mine monitoring', 'Dam safety monitoring', 'Bridge displacement monitoring', 'Wide-area surface deformation monitoring'],
    specs: [
      ['Product type', 'All-in-one GNSS monitoring receiver'],
      ['Constellations', 'GPS / GLONASS / Galileo / BDS-3'],
      ['Accuracy reference', '+/-2.5 mm static accuracy (+0.5 ppm)'],
      ['Power draw', '<1.2 W reference'],
      ['Data output', '3D displacement trend data'],
      ['Deployment', 'Outdoor fixed monitoring station']
    ]
  },
  'hydrostatic-level-gauge': {
    title: 'Hydrostatic Level Gauge',
    seoTitle: 'Hydrostatic Level Gauge | SoilCreate',
    description: 'Hydrostatic level gauge for settlement monitoring with 0.01 mm resolution, up to 2000 mm range, and RS485 bus output for structural and geotechnical projects.',
    category: 'Settlement & Tilt Monitoring',
    subcategory: 'Hydrostatic Level Gauge',
    model: 'SCST Series · RS485 Settlement Monitoring',
    image: '/images/products/hydrostatic-level-gauge/hydrostatic-level-gauge-product.jpg',
    imageAlt: 'Hydrostatic level gauge with precision-machined chamber and tubing connectors',
    lead: 'A hydrostatic settlement monitoring instrument for high-resolution elevation change measurement across connected points.',
    overviewHeading: 'High-resolution settlement monitoring for structures and earthworks',
    overview: [
      'Hydrostatic level gauges measure relative settlement by comparing liquid levels across connected sensors. They are useful for metro stations, foundation pits, dams, bridges, and building settlement monitoring.',
      'RS485 bus output allows multiple points to be integrated into a data logger and cloud monitoring platform.'
    ],
    metrics: [
      { value: '0.01 mm', label: 'Resolution / accuracy reference' },
      { value: '0-2000 mm', label: 'Maximum range' },
      { value: '3', label: 'Measurement principles' },
      { value: 'RS485', label: 'Bus output' }
    ],
    features: [
      'High-resolution settlement observation for connected measurement points.',
      'Suitable for structures where optical access is limited or continuous monitoring is required.',
      'RS485 output supports automatic data acquisition.',
      'Can be combined with tilt, displacement, and groundwater instruments.',
      'Useful for long-term construction and operation-stage monitoring.'
    ],
    applications: ['Metro and station settlement monitoring', 'Foundation pit settlement monitoring', 'Dam and embankment settlement monitoring', 'Bridge and building settlement observation'],
    specs: [
      ['Resolution reference', '0.01 mm'],
      ['Range reference', '0-2000 mm'],
      ['Output', 'RS485 bus'],
      ['Monitoring mode', 'Automatic settlement monitoring'],
      ['Installation', 'Multi-point connected liquid-level system']
    ]
  },
  'tiltmeter-series': {
    title: 'Tiltmeter Series',
    seoTitle: 'Tiltmeter Series | SoilCreate',
    description: 'MEMS and electrolytic tiltmeter series with wired RS485 and wireless LoRa / NB-IoT options for buildings, bridges, towers, tunnels, and heritage structures.',
    category: 'Settlement & Tilt Monitoring',
    subcategory: 'Tiltmeter',
    model: 'SCST-T01 · MEMS + Electrolytic',
    image: '/images/products/tiltmeter-series/tiltmeter-product.jpg',
    imageAlt: 'Wireless dual-axis tiltmeter with outdoor antenna',
    lead: 'A tiltmeter product family for high-precision structural rotation monitoring in wired and wireless configurations.',
    overviewHeading: 'Continuous tilt monitoring for structures and assets',
    overview: [
      'The tiltmeter series supports MEMS and electrolytic sensing options, with wired RS485 and wireless LoRa / NB-IoT variants. It is suitable for buildings, bridges, towers, tunnels, and heritage structures.',
      'Wireless versions reduce site wiring effort for distributed monitoring points, while wired high-resolution versions support critical structural measurements.'
    ],
    metrics: [
      { value: '0.0005°', label: 'Resolution, wired reference' },
      { value: '+/-90°', label: 'Measurement range' },
      { value: '2-5 yr', label: 'Wireless battery life reference' },
      { value: 'IP68', label: 'Outdoor protection' }
    ],
    features: [
      'MEMS and electrolytic options for different accuracy and stability requirements.',
      'Wireless LoRa / NB-IoT options for distributed outdoor monitoring.',
      'Wired RS485 versions for high-resolution structural monitoring.',
      'Suitable for long-term tilt trend and alarm workflows.',
      'Can be combined with vibration, settlement, and GNSS measurements.'
    ],
    applications: ['Building tilt monitoring', 'Bridge and tower monitoring', 'Tunnel and retaining structure rotation monitoring', 'Heritage structure monitoring'],
    specs: [
      ['Sensor options', 'MEMS and electrolytic'],
      ['Output options', 'RS485 / LoRa / NB-IoT'],
      ['Resolution reference', 'Down to 0.0005 degrees for wired options'],
      ['Measurement range', '+/-90 degrees'],
      ['Protection', 'IP68 outdoor protection']
    ]
  },
  'wireless-tilt-vibration': {
    title: 'Wireless Tilt, Temperature & Vibration Sensor',
    seoTitle: 'Wireless Tilt, Temperature and Vibration Sensor | SoilCreate',
    description: 'Wireless tilt, temperature, and vibration sensor with +/-90 degree tilt range, 0.005 degree accuracy within +/-15 degrees, 200 Hz vibration bandwidth, FFT extraction, and NB-IoT / 4G upload.',
    category: 'Settlement & Tilt Monitoring',
    subcategory: 'Wireless Tilt + Vibration',
    model: 'SCST-WV02 · Tilt + Temperature + Vibration · NB-IoT / 4G',
    image: '/images/products/wireless-tilt-vibration/wireless-tilt-vibration-sensor.jpg',
    imageAlt: 'Wireless tilt temperature and vibration sensor with sealed dome housing',
    lead: 'A compact wireless sensor integrating tilt, temperature, and vibration features for structural safety monitoring.',
    overviewHeading: 'One wireless node for tilt, temperature, and vibration features',
    overview: [
      'The wireless tilt, temperature, and vibration sensor is designed for structures where both slow rotation trends and vibration characteristics matter.',
      'FFT dominant-frequency extraction, NB-IoT / 4G upload, and an IP68 sealed housing make it practical for remote outdoor monitoring.'
    ],
    metrics: [
      { value: '+/-90°', label: 'Tilt range' },
      { value: '0.005°', label: 'Accuracy within +/-15 degrees' },
      { value: '200 Hz', label: 'Vibration bandwidth' },
      { value: 'IP68', label: 'Outdoor protection' }
    ],
    features: [
      'Measures tilt, temperature, and vibration features in one device.',
      'FFT processing supports dominant-frequency extraction.',
      'NB-IoT / 4G upload supports remote monitoring sites.',
      'IP68 sealed housing for outdoor structural monitoring.',
      'Suitable for bridges, buildings, towers, and construction-impact monitoring.'
    ],
    applications: ['Bridge vibration and tilt monitoring', 'Building structural safety monitoring', 'Tower and mast monitoring', 'Construction impact monitoring'],
    specs: [
      ['Tilt range', '+/-90 degrees'],
      ['Accuracy reference', '0.005 degrees within +/-15 degrees'],
      ['Vibration bandwidth', '200 Hz'],
      ['Data upload', 'NB-IoT / 4G'],
      ['Protection', 'IP68 sealed housing']
    ]
  },
  'vibrating-wire-sensors': {
    title: 'Vibrating-Wire Sensors & Acquisition',
    seoTitle: 'Vibrating-Wire Sensors and Acquisition | SoilCreate',
    description: 'Vibrating-wire sensor and acquisition system for stress monitoring, including rebar stressmeters, strain gauges, load cells, earth pressure cells, piezometers, and multi-channel acquisition modules.',
    category: 'Stress & Environment Monitoring',
    subcategory: 'Vibrating-Wire Sensors',
    model: 'SCSE-VW01 · 4/16-Channel',
    image: '/images/products/vibrating-wire-sensors/vibrating-wire-stressmeter.jpg',
    imageAlt: 'Vibrating-wire concrete stressmeter with stainless-steel sensing body and signal cable',
    lead: 'A one-stop stress monitoring product family covering vibrating-wire sensors and intelligent acquisition modules.',
    overviewHeading: 'Stress, strain, pressure, and water-pressure data in one monitoring chain',
    overview: [
      'The vibrating-wire product family covers rebar stressmeters, strain gauges, anchor-cable load cells, earth pressure cells, and piezometers.',
      'Multi-channel intelligent acquisition modules support frequency sweep and compatibility with common vibrating-wire sensors used in geotechnical and structural monitoring.'
    ],
    metrics: [
      { value: '16-ch', label: 'Max acquisition channels' },
      { value: '0.025% FS', label: 'Piezometer resolution reference' },
      { value: '<0.1% FS', label: 'Long-term drift / year reference' },
      { value: '50Ω-10kΩ', label: 'Sensor auto-ID range' }
    ],
    features: [
      'Covers multiple vibrating-wire sensor families for stress and pressure monitoring.',
      'Multi-channel acquisition modules reduce field cabinet complexity.',
      'Temperature compensation supports long-term interpretation.',
      'Suitable for foundation pits, dams, tunnels, retaining structures, and concrete structures.',
      'Can be integrated with cloud alarms and reporting workflows.'
    ],
    applications: ['Rebar stress monitoring', 'Concrete strain monitoring', 'Anchor load monitoring', 'Earth pressure monitoring', 'Pore water pressure monitoring'],
    specs: [
      ['Sensor family', 'Vibrating-wire stress, strain, load, pressure, and piezometer sensors'],
      ['Acquisition channels', '4 / 8 / 16 channel configurations'],
      ['Resolution reference', '0.025% FS for piezometer class'],
      ['Compatibility', 'Multi-vendor vibrating-wire sensor acquisition'],
      ['Output', 'Data logger and cloud integration']
    ]
  },
  'data-acquisition-monitoring-cloud': {
    title: 'Data Acquisition & Monitoring Cloud',
    seoTitle: 'Data Acquisition and Monitoring Cloud | SoilCreate',
    description: 'Data acquisition and monitoring cloud system with wired data logger, LoRa base station, vibrating-wire acquisition module, tiered warnings, GIS/BIM visualization, and AI analytics workflows.',
    category: 'Data Acquisition & Software Platform',
    subcategory: 'Data Logger, Gateway & Monitoring Cloud',
    model: 'SCDA-DG-01',
    image: '/images/products/data-acquisition-monitoring-cloud/data-acquisition-gateway.jpg',
    imageAlt: 'Data acquisition gateway and monitoring cloud platform hardware',
    lead: 'The nerve center of a monitoring system, connecting field sensors, data loggers, gateways, cloud dashboards, warning rules, and reporting workflows.',
    overviewHeading: 'From field acquisition to cloud alarms and engineering decisions',
    overview: [
      'The data acquisition and monitoring cloud system connects wired loggers, LoRa base stations, vibrating-wire acquisition modules, and remote dashboards.',
      'Tiered early warning, GIS/BIM visualization, data reports, and API integration help monitoring teams convert sensor readings into project decisions.'
    ],
    metrics: [
      { value: '16 GB', label: 'On-board storage' },
      { value: '1 km+', label: 'LoRa range reference' },
      { value: '16 ch', label: 'VW channels per module' },
      { value: 'IP65', label: 'Field enclosure' }
    ],
    features: [
      'Store-and-forward data protection during network loss.',
      'LoRa networking reduces wiring effort for distributed sites.',
      'Vibrating-wire acquisition supports common geotechnical sensors.',
      'Cloud dashboards support tiered alarms, GIS/BIM views, and reporting.',
      'API integration enables connection with owner or third-party platforms.'
    ],
    applications: ['Geotechnical monitoring data acquisition', 'Cloud alarm workflows', 'Wireless sensor networking', 'Vibrating-wire acquisition', 'Multi-project monitoring dashboards'],
    specs: [
      ['Storage', '16 GB on-board storage reference'],
      ['Wireless range', '1 km+ LoRa reference depending on site conditions'],
      ['VW module', 'Up to 16 channels per module'],
      ['Field enclosure', 'IP65 cabinet reference'],
      ['Platform functions', 'Alarms, visualization, reports, and API integration']
    ]
  }
}
