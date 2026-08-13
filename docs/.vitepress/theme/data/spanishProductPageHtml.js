import { rasberProductPages } from './rasberProductPages.js'

const applyReplacements = (html, replacements) =>
  replacements.reduce((next, [from, to]) => next.split(from).join(to), html || '')

const commonReplacements = [
  ['Home', 'Inicio'],
  ['Products', 'Productos'],
  ['Overview', 'Descripcion general'],
  ['Applications', 'Aplicaciones'],
  ['Technical Specifications', 'Especificaciones tecnicas'],
  ['Full Technical Specifications', 'Especificaciones tecnicas completas'],
  ['Frequently Asked Questions', 'Preguntas frecuentes'],
  ['FAQ', 'Preguntas frecuentes'],
  ['Case Studies', 'Casos de estudio'],
  ['Track record', 'Historial de proyectos'],
  ['Engineering comparison', 'Comparacion tecnica'],
  ['Measurement principle', 'Principio de medicion'],
  ['Core features', 'Caracteristicas clave'],
  ['Selection guide', 'Guia de seleccion'],
  ['Installation', 'Instalacion'],
  ['Dimension', 'Criterio'],
  ['On-site assembly', 'Montaje en obra'],
  ['Recovery &amp; reuse', 'Recuperacion y reutilizacion'],
  ['Recovery & reuse', 'Recuperacion y reutilizacion'],
  ['Protection', 'Proteccion'],
  ['Data access', 'Acceso a datos'],
  ['Weight', 'Peso'],
  ['Commercial model', 'Modelo comercial'],
  ['Commercial Model', 'Modelo comercial'],
  ['Readout device', 'Unidad de lectura'],
  ['Reference Instrument', 'Instrumento de referencia'],
  ['Operators', 'Operadores'],
  ['Time per borehole', 'Tiempo por sondeo'],
  ['Data transfer', 'Transferencia de datos'],
  ['System weight', 'Peso del sistema'],
  ['Accuracy validation', 'Validacion de precision'],
  ['Operating temperature', 'Temperatura de operacion'],
  ['Measurement Accuracy', 'Precision de medicion'],
  ['Displacement Resolution', 'Resolucion de desplazamiento'],
  ['Communication interface', 'Interfaz de comunicacion'],
  ['Ingress Protection', 'Proteccion IP'],
  ['Battery Life', 'Duracion de bateria'],
  ['System Accuracy / 30 m', 'Precision del sistema / 30 m'],
  ['Resolution / 500 mm', 'Resolucion / 500 mm'],
  ['View cases', 'Ver casos'],
  ['View Details', 'Ver detalles']
]

const slidingReplacements = [
  ['Sliding Inclinometer', 'Inclinometro deslizante portatil'],
  ['SCIS SERIES · CLASS A / CLASS B', 'SCIS SERIES · MEDICION A0 / A180'],
  [
    'A smart, Bluetooth-enabled portable deep-displacement monitoring system. One operator surveys a 30&nbsp;m borehole in 5 minutes — international-grade accuracy in a 7.5&nbsp;kg package.',
    'Sistema portatil Bluetooth para monitoreo manual de desplazamiento profundo. Un operador puede medir un sondeo de 30&nbsp;m en pocos minutos, con datos listos para revision de campo.'
  ],
  [
    'Measure deep horizontal displacement, distributed by depth',
    'Medir desplazamiento horizontal profundo, distribuido por profundidad'
  ],
  [
    'The SCIS sliding inclinometer measures how the horizontal displacement of subsurface soil or structures is distributed with depth. A proprietary auto-measurement mode, smart Bluetooth-app interaction and real-time cloud sync completely reinvent the traditional two-person survey workflow.',
    'El inclinometro deslizante SCIS mide como se distribuye el desplazamiento horizontal del suelo o de la estructura con la profundidad. El modo de medicion automatica, la app Bluetooth y la sincronizacion con la nube reducen el flujo tradicional de dos operadores.'
  ],
  ['Single-operator surveys', 'Mediciones con un solo operador'],
  [
    'Proprietary auto-measurement mode: a 30 m borehole in 5 minutes.',
    'Modo de medicion automatica: un sondeo de 30 m puede completarse en pocos minutos.'
  ],
  ['Bluetooth app + cloud sync', 'App Bluetooth + sincronizacion en la nube'],
  [
    'Data flows from field to cloud in real time — zero manual handling.',
    'Los datos fluyen del campo a la nube en tiempo real, con menos trabajo manual.'
  ],
  ['Built for harsh sites', 'Construido para sitios exigentes'],
  [
    'IP68 stainless-steel probe rated to 3 MPa (300 m water depth).',
    'Sonda de acero inoxidable IP68, apta para ambientes humedos y trabajo geotecnico exigente.'
  ],
  ['How a Inclinometro deslizante portatil Works', 'Como funciona un inclinometro deslizante portatil'],
  ['How a Sliding Inclinometer Works', 'Como funciona un inclinometro deslizante portatil'],
  ['Curves You Can Act On', 'Curvas listas para decision tecnica'],
  ['Data output', 'Salida de datos'],
  ['Two Classes, One Standard of Quality', 'Dos clases, un mismo estandar de calidad'],
  ['Four Components — Carried in One Hand', 'Cuatro componentes, operacion portatil'],
  ['Auto-Measurement Mode: Just Pull the Probe', 'Modo automatico: solo tire de la sonda'],
  ['The Complete A0 + A180 Survey, Step by Step', 'Levantamiento A0 + A180 paso a paso'],
  ['Five Checks Before Every Survey', 'Cinco comprobaciones antes de cada medicion'],
  ['Head-to-Head with the Industry Benchmark', 'Comparacion con referencias del sector'],
  ['Proven Across Benchmark Projects', 'Validado en proyectos de referencia'],
  ['Inclinometro deslizante portatil Preguntas frecuentes', 'Preguntas frecuentes del inclinometro deslizante'],
  ['Proprietary technology', 'Tecnologia propietaria'],
  ['PROPRIETARY TECHNOLOGY', 'TECNOLOGIA PROPIETARIA'],
  ['Field workflow &amp; quality control', 'Flujo de campo y control de calidad'],
  ['FIELD WORKFLOW &amp; QUALITY CONTROL', 'FLUJO DE CAMPO Y CONTROL DE CALIDAD'],
  [
    'The traditional workflow needs two people and 15-20 minutes per borehole. SoilCreate reinvents it — start the app once, then never touch the phone again.',
    'El flujo tradicional requiere dos personas y 15-20 minutos por sondeo. SoilCreate lo simplifica: inicie la app una vez y no vuelva a tocar el telefono durante la medicion.'
  ],
  [
    'The traditional workflow needs two people and 15–20 minutes per borehole. SoilCreate reinvents it — start the app once, then never touch the phone again.',
    'El flujo tradicional requiere dos personas y 15-20 minutos por sondeo. SoilCreate lo simplifica: inicie la app una vez y no vuelva a tocar el telefono durante la medicion.'
  ],
  ['Launch auto-measurement in the app', 'Inicie la medicion automatica en la app'],
  ['One tap on an Android phone starts the session.', 'Un toque en el terminal Android inicia la sesion.'],
  ['Software auto-detects stability', 'El software detecta automaticamente la estabilidad'],
  [
    'Lower the probe to depth; stability confirmed when 3 consecutive readings differ by <0.02 mm.',
    'Baje la sonda hasta la profundidad; la estabilidad se confirma cuando 3 lecturas consecutivas difieren menos de 0.02 mm.'
  ],
  [
    'Lower the probe to depth; stability confirmed when 3 consecutive readings differ by &lt;0.02 mm.',
    'Baje la sonda hasta la profundidad; la estabilidad se confirma cuando 3 lecturas consecutivas difieren menos de 0.02 mm.'
  ],
  ['Auto-record + voice prompt', 'Registro automatico + aviso por voz'],
  [
    'Once stable, data records automatically and the voice prompt says "Pull now."',
    'Una vez estable, los datos se registran automaticamente y el aviso de voz indica "Tire ahora".'
  ],
  ['Pull detection', 'Deteccion de tiron'],
  [
    'Raise the probe 0.5 m — a >0.1 mm change is auto-recognized as a pull, and the next point begins.',
    'Eleve la sonda 0.5 m; un cambio >0.1 mm se reconoce automaticamente como tiron y comienza el siguiente punto.'
  ],
  [
    'Raise the probe 0.5 m — a &gt;0.1 mm change is auto-recognized as a pull, and the next point begins.',
    'Eleve la sonda 0.5 m; un cambio >0.1 mm se reconoce automaticamente como tiron y comienza el siguiente punto.'
  ],
  ['Repeat to the top — hands-free', 'Repita hasta la superficie, sin tocar el telefono'],
  ['The operator never touches the phone until the survey is complete.', 'El operador no vuelve a tocar el telefono hasta completar la medicion.'],
  [
    'Both passes are mandatory on the first, baseline survey — and the app walks the operator through every step, from Bluetooth pairing to the on-screen checksum.',
    'Ambas pasadas son obligatorias en la primera medicion de referencia, y la app guia al operador paso a paso, desde el emparejamiento Bluetooth hasta la verificacion en pantalla.'
  ],
  ['Power on &amp; pair', 'Encender y emparejar'],
  [
    'Switch on the reel (green power indicator), launch the app on the Android terminal and connect to the Bluetooth device whose RTI-prefixed name matches your instrument — a steady blue light means connected.',
    'Encienda el carrete (indicador verde), abra la app en el terminal Android y conecte el dispositivo Bluetooth cuyo nombre con prefijo RTI coincide con su instrumento; una luz azul fija indica conexion.'
  ],
  ['Open the project, enter the A0 groove', 'Abra el proyecto e introduzca la ranura A0'],
  [
    'Tap Measure to open or create the project. Slide the A-axis positive guide wheels into the A0 groove and lower the probe to the starting depth — the cable marking must match the depth shown in the app.',
    'Toque Measure para abrir o crear el proyecto. Coloque las ruedas guia positivas del eje A en la ranura A0 y baje la sonda hasta la profundidad inicial; la marca del cable debe coincidir con la profundidad mostrada en la app.'
  ],
  ['Survey the A0 pass, bottom-up', 'Mida la pasada A0, de abajo hacia arriba'],
  [
    'At each 0.5 m station, wait for the reading to stabilize, record, then pull to the next depth until the probe reaches the top. In auto mode the software detects stability and each pull for you.',
    'En cada estacion de 0.5 m, espere a que la lectura se estabilice, registre y luego tire hasta la siguiente profundidad hasta que la sonda llegue a la superficie. En modo automatico, el software detecta la estabilidad y cada tiron.'
  ],
  ['Rotate 180°', 'Gire 180°'],
  [
    'Withdraw the probe and rotate it 180° about its axis so the A-axis positive wheels enter the A180 groove; lower it back to the starting depth.',
    'Extraiga la sonda y girela 180° sobre su eje para que las ruedas positivas del eje A entren en la ranura A180; bajela nuevamente hasta la profundidad inicial.'
  ],
  ['Survey the A180 pass', 'Mida la pasada A180'],
  [
    'Start the 180° series. The app now shows the live checksum — the A0 + A180 sum, ideally ≈ 0 — beneath each reading as you repeat the pass to the top.',
    'Inicie la serie de 180°. La app muestra la verificacion en vivo, la suma A0 + A180, idealmente ≈ 0, debajo de cada lectura mientras repite la pasada hasta la superficie.'
  ],
  ['Review plots before leaving site', 'Revise las graficas antes de salir de obra'],
  [
    'The app jumps straight to the plots-and-data screen. Check the checksum distribution and profile curves on site; the survey syncs to the cloud automatically.',
    'La app pasa directamente a la pantalla de graficas y datos. Revise en obra la distribucion de verificacion y las curvas de perfil; la medicion se sincroniza automaticamente con la nube.'
  ],
  ['Serial-number match', 'Coincidencia de numeros de serie'],
  [
    'Probe and Bluetooth-reel serial numbers must correspond one-to-one — never mix sets.',
    'Los numeros de serie de la sonda y del carrete Bluetooth deben corresponder uno a uno; no mezcle conjuntos.'
  ],
  ['Top screw', 'Tornillo superior'],
  [
    "Don't over-tighten the probe's top screw — it damages the cable connector and shortens O-ring life.",
    'No apriete en exceso el tornillo superior de la sonda; puede danar el conector del cable y acortar la vida de la junta torica.'
  ],
  ['Guided in &amp; out', 'Guiar al entrar y salir'],
  [
    "Use a hand to guide the positioning wheels as they slide into and out of the casing grooves.",
    'Guie manualmente las ruedas de posicionamiento al entrar y salir de las ranuras de la tuberia.'
  ],
  ['Gentle to the bottom', 'Bajar suavemente hasta el fondo'],
  ['Lower with care so the probe never strikes the casing bottom.', 'Baje con cuidado para que la sonda no golpee el fondo de la tuberia.'],
  ['Temperature window', 'Rango de temperatura'],
  ['Keep the ambient temperature within −20 to 70 °C.', 'Mantenga la temperatura ambiente entre −20 y 70 °C.'],
  ['Quality gates', 'Controles de calidad'],
  [
    'Checksum |A0+A180| < 0.5 mm/m; same-depth repeatability < 0.3 mm/m; cumulative curve smooth with no jumps.',
    'Verificacion |A0+A180| < 0.5 mm/m; repetibilidad a la misma profundidad < 0.3 mm/m; curva acumulada suave, sin saltos.'
  ],
  [
    'Checksum |A0+A180| &lt; 0.5 mm/m; same-depth repeatability &lt; 0.3 mm/m; cumulative curve smooth with no jumps.',
    'Verificacion |A0+A180| < 0.5 mm/m; repetibilidad a la misma profundidad < 0.3 mm/m; curva acumulada suave, sin saltos.'
  ],
  [
    'Bluetooth control reel (built-in lithium battery) with the probe docked on top.',
    'Carrete de control Bluetooth con bateria de litio integrada y la sonda acoplada en la parte superior.'
  ],
  [
    'Bluetooth control reel with built-in lithium battery and docked probe',
    'Carrete de control Bluetooth con bateria de litio integrada y sonda acoplada'
  ],
  [
    "Stainless-steel guide-wheel carriage — the wheels ride in the casing's orthogonal grooves.",
    'Carro de ruedas guia de acero inoxidable; las ruedas se desplazan por las ranuras ortogonales de la tuberia.'
  ],
  [
    'Stainless-steel spring-loaded guide-wheel carriage of the probe',
    'Carro de ruedas guia con resorte de acero inoxidable de la sonda'
  ],
  [
    'Stainless-steel probe bodies; positioning-wheel centre spacing 500 mm.',
    'Cuerpos de sonda de acero inoxidable; separacion entre centros de ruedas de posicionamiento de 500 mm.'
  ],
  [
    'Stainless-steel probe bodies; positioning-wheel centre spacing 500&nbsp;mm.',
    'Cuerpos de sonda de acero inoxidable; separacion entre centros de ruedas de posicionamiento de 500&nbsp;mm.'
  ],
  [
    'Stainless-steel probe bodies with positioning wheels',
    'Cuerpos de sonda de acero inoxidable con ruedas de posicionamiento'
  ],
  ['Class A serves high-accuracy rail-transit and major energy projects; Class B provides a high-value configuration for routine foundation-pit and slope monitoring.',
    'La Clase A se orienta a proyectos ferroviarios y energeticos de alta precision; la Clase B ofrece una configuracion de alto valor para excavaciones y taludes de rutina.'],
  ['MEMS-sensor probe handles data acquisition in a stainless-steel body.', 'La sonda MEMS realiza la adquisicion de datos dentro de un cuerpo de acero inoxidable.'],
  ['0.5 m positioning rings provide precise, repeatable depth positioning.', 'Los anillos de posicionamiento de 0.5 m ayudan a repetir la profundidad de lectura.'],
  ['Built-in 7.4 V lithium battery enables fully wireless transmission.', 'La bateria de litio integrada permite transmision inalambrica.'],
  ['Android app for processing, on-site plotting and cloud sync.', 'La app Android permite procesamiento, graficas en campo y sincronizacion en la nube.'],
  [
    "The casing is permanently installed in a vertical borehole through the zone of expected movement, with its bottom keyed into a stable stratum as the datum. The probe's gravity-referenced MEMS accelerometer reads the inclination θ at every 0.5&nbsp;m step; summing each segment's horizontal component from the bottom up rebuilds the full displacement profile.",
    'La tuberia inclinometrica se instala permanentemente en un sondeo vertical a traves de la zona donde se espera movimiento, con la base fijada en un estrato estable como referencia. El acelerometro MEMS de la sonda, referenciado por gravedad, mide la inclinacion θ cada 0.5&nbsp;m; al sumar el componente horizontal de cada tramo desde el fondo hacia arriba se reconstruye el perfil completo de desplazamiento.'
  ],
  ['Representative cumulative displacement versus depth profile', 'Perfil acumulado representativo de desplazamiento frente a profundidad'],
  ['Ground surface', 'Superficie del terreno'],
  ['70 mm grooved casing', 'Tuberia ranurada de 70 mm'],
  ['Probe (MEMS)', 'Sonda (MEMS)'],
  ['Vertical reference (gravity)', 'Referencia vertical (gravedad)'],
  ['Bottom keyed into stable stratum (datum)', 'Base fijada en estrato estable (referencia)'],
  ['Cumulative profile D(z)', 'Perfil acumulado D(z)'],
  ['Horizontal offsets summed', 'Desplazamientos horizontales'],
  ['upward from the bottom datum.', 'sumados desde la referencia inferior.'],
  ['Later surveys minus the first', 'Mediciones posteriores menos la primera'],
  ['baseline = displacement change.', 'linea base = cambio de desplazamiento.'],
  [
    'The probe slides up the grooved casing in 0.5&nbsp;m steps; each segment contributes a horizontal offset L·sin&nbsp;θ, summed from the bottom datum into the profile D(z). Probe tilt exaggerated for clarity.',
    'La sonda asciende por la tuberia ranurada en pasos de 0.5&nbsp;m; cada tramo aporta un desplazamiento horizontal L·sin&nbsp;θ, acumulado desde la referencia inferior para formar el perfil D(z). La inclinacion de la sonda se exagera para mayor claridad.'
  ],
  ['Pass 1 — A0 direction', 'Pasada 1 - direccion A0'],
  [
    "The A-axis positive guide wheels run in the A0 groove; reading bottom-up at every 0.5&nbsp;m records R<sub>A0</sub> = sin&nbsp;θ + b, where b is the sensor's zero offset — from residual assembly stress, circuit bias and temperature drift.",
    'Las ruedas guia positivas del eje A se desplazan por la ranura A0; la lectura desde el fondo hacia arriba cada 0.5&nbsp;m registra R<sub>A0</sub> = sin&nbsp;θ + b, donde b es el desfase de cero del sensor causado por tension residual de ensamble, sesgo del circuito o deriva termica.'
  ],
  ['Pass 2 — rotate 180°', 'Pasada 2 - girar 180°'],
  [
    'The probe is withdrawn, rotated 180° about its axis so the same wheels run in the A180 groove, and the survey is repeated: R<sub>A180</sub> = −sin&nbsp;θ + b.',
    'La sonda se retira y se gira 180° sobre su eje para que las mismas ruedas recorran la ranura A180; luego se repite la medicion: R<sub>A180</sub> = -sin&nbsp;θ + b.'
  ],
  ['Subtraction cancels the zero offset', 'La resta cancela el desfase de cero'],
  [
    '(R<sub>A0</sub> − R<sub>A180</sub>) / 2 = the true sin&nbsp;θ — the zero offset b cancels exactly. That is why both passes are mandatory on the first, baseline survey: a missed reverse pass locks the drift into every later result.',
    '(R<sub>A0</sub> - R<sub>A180</sub>) / 2 = el sin&nbsp;θ real; el desfase de cero b se cancela. Por eso ambas pasadas son obligatorias en la primera medicion de linea base: si falta la pasada inversa, la deriva queda incorporada en todos los resultados posteriores.'
  ],
  ['Addition yields the checksum', 'La suma genera la verificacion'],
  [
    'R<sub>A0</sub> + R<sub>A180</sub> = 2b ≈ 0. The checksum distribution is reviewed before data is delivered: |checksum| &lt; 0.5&nbsp;mm/m passes; values persistently above the threshold flag instrument zero drift — recalibrate the probe rather than trust the curve.',
    'R<sub>A0</sub> + R<sub>A180</sub> = 2b aprox. 0. La distribucion de verificacion se revisa antes de entregar los datos: |verificacion| &lt; 0.5&nbsp;mm/m es aceptable; valores persistentes por encima del umbral indican deriva de cero del instrumento y requieren recalibrar la sonda antes de confiar en la curva.'
  ],
  [
    'After each survey the app jumps straight to plots and data: the casing profile, change versus the baseline and the previous survey, and the checksum distribution — all reviewed on site before the data ships to the cloud.',
    'Despues de cada medicion, la app muestra directamente graficas y datos: el perfil de la tuberia, el cambio frente a la linea base y la medicion anterior, y la distribucion de verificacion; todo se revisa en obra antes de enviar los datos a la nube.'
  ],
  ['Displacement (mm)', 'Desplazamiento (mm)'],
  ['Depth (m)', 'Profundidad (m)'],
  ['Max deformation', 'Deformacion maxima'],
  ['at mid-depth', 'a profundidad media'],
  ['Initial survey (baseline)', 'Medicion inicial (linea base)'],
  ['Successive surveys', 'Mediciones sucesivas'],
  [
    'Representative cumulative-displacement profile of the kind produced in the Xinghu Street CX34 same-borehole validation (37&nbsp;m borehole, half a month of surveys). Axes are unitless for illustration.',
    'Perfil representativo de desplazamiento acumulado similar al generado en la validacion de mismo sondeo de Xinghu Street CX34 (sondeo de 37&nbsp;m, medio mes de mediciones). Los ejes son ilustrativos.'
  ],
  ['Casing profile', 'Perfil de la tuberia'],
  [
    'Cumulative offset (mm) against depth (m). First check: is the overall shape smooth, with no sudden jumps? A jump usually means a depth was recorded wrongly — check the cable depth markings.',
    'Desplazamiento acumulado (mm) frente a profundidad (m). Primera comprobacion: la forma general debe ser suave, sin saltos repentinos. Un salto suele indicar que una profundidad se registro mal; revise las marcas de profundidad del cable.'
  ],
  ['Cumulative &amp; incremental change', 'Cambio acumulado e incremental'],
  [
    'Offset change relative to the first survey reveals displacement trends; change versus the previous survey shows the short-term rate. Overlaying successive surveys shows whether movement is still growing — the key call for early warning, and a way to locate the sliding surface.',
    'El cambio respecto a la primera medicion muestra la tendencia de desplazamiento; el cambio frente a la medicion anterior muestra la velocidad a corto plazo. Superponer mediciones sucesivas permite ver si el movimiento sigue creciendo, clave para alerta temprana y para localizar la superficie de deslizamiento.'
  ],
  ['Checksum distribution', 'Distribucion de verificacion'],
  [
    'Checksum (mm/m) against depth. Before any report is delivered the whole hole should sit within ±0.5&nbsp;mm/m — the checksum identifies instrument anomalies before they contaminate the displacement record.',
    'Verificacion (mm/m) frente a profundidad. Antes de entregar cualquier informe, todo el sondeo debe mantenerse dentro de ±0.5&nbsp;mm/m; esta verificacion identifica anomalias del instrumento antes de contaminar el registro de desplazamiento.'
  ],
  ['Benchmarked', 'Comparado'],
  ['Head-to-Head with the Industry Benchmark', 'Comparacion con referencias del sector'],
  [
    "In a same-borehole comparison at Xinghu Street CX34 (37 m borehole, half a month of testing), SoilCreate's cumulative-change curve closely matched the reference instrument throughout the test period.",
    'En una comparacion dentro del mismo sondeo en Xinghu Street CX34 (sondeo de 37 m, medio mes de pruebas), la curva de cambio acumulado de SoilCreate coincidio estrechamente con el instrumento de referencia durante todo el periodo de ensayo.'
  ],
  ['Dimension', 'Criterio'],
  ['Reference Instrument', 'Instrumento de referencia'],
  ['Readout device', 'Unidad de lectura'],
  ['Smartphone app', 'App de smartphone'],
  ['Dedicated readout unit', 'Unidad de lectura dedicada'],
  ['Operators', 'Operadores'],
  ['1 person', '1 persona'],
  ['2 people', '2 personas'],
  ['Time per borehole', 'Tiempo por sondeo'],
  ['15–20 min', '15-20 min'],
  ['Data transfer', 'Transferencia de datos'],
  ['Bluetooth → cloud, real-time', 'Bluetooth -> nube, en tiempo real'],
  ['Manual export', 'Exportacion manual'],
  ['System weight', 'Peso del sistema'],
  ['Accuracy validation', 'Validacion de precision'],
  ['Xinghu St. CX34 same-borehole match', 'Coincidencia en el mismo sondeo de Xinghu St. CX34'],
  ['Industry benchmark', 'Referencia del sector'],
  ['Labor Cost', 'Costo de mano de obra'],
  ['One operator replaces a two-person crew.', 'Un operador reemplaza a un equipo de dos personas.'],
  ['Survey Efficiency', 'Eficiencia de medicion'],
  ['5 minutes vs. 15–20 minutes per 30 m borehole.', '5 minutos frente a 15-20 minutos por sondeo de 30 m.'],
  ['5 minutes vs. 15-20 minutes per 30 m borehole.', '5 minutos frente a 15-20 minutos por sondeo de 30 m.'],
  ['Manual Data Handling', 'Gestion manual de datos'],
  ['Field → cloud with zero touch, eliminating transcription errors.', 'Del campo a la nube sin manipulacion manual, reduciendo errores de transcripcion.'],
  ['Field Validation', 'Validacion en campo'],
  ['Same-borehole field comparison with closely aligned curves.', 'Comparacion de campo en el mismo sondeo con curvas estrechamente alineadas.'],
  ['Sliding Inclinometer FAQ', 'Preguntas frecuentes del inclinometro deslizante'],
  [
    'Is the SCIS compatible with inclinometer casing I already have installed?',
    'El SCIS es compatible con la tuberia inclinometrica que ya tengo instalada?'
  ],
  [
    'Yes. The SCIS runs in any standard 70&nbsp;mm internal-diameter, four-groove PVC/ABS inclinometer casing. The 70&nbsp;mm casing with four orthogonal grooves and 500&nbsp;mm wheel spacing is an international common specification — not a vendor-proprietary format — so probes and casings from different manufacturers are interchangeable.',
    'Si. El SCIS funciona en cualquier tuberia inclinometrica estandar de PVC/ABS, con diametro interior de 70&nbsp;mm y cuatro ranuras. La tuberia de 70&nbsp;mm con cuatro ranuras ortogonales y separacion de ruedas de 500&nbsp;mm es una especificacion internacional comun, no un formato propietario; por eso sondas y tuberias de distintos fabricantes pueden ser compatibles.'
  ],
  [
    'How do I choose the control-cable length for deep boreholes?',
    'Como elijo la longitud del cable de control para sondeos profundos?'
  ],
  [
    'The standard configuration ships with a 50&nbsp;m cable, suited to routine foundation pits. We recommend 80&nbsp;m for deep pits and retaining walls and 100&nbsp;m for dams and slopes; longer lengths are custom-built — up to a 180&nbsp;m cable proven in a 180&nbsp;m-deep hydropower borehole. For deep holes and long-term programmes, also stock spares: a backup reel, two guide-wheel kits (wheels wear faster in deep holes), O-rings and cable connectors.',
    'La configuracion estandar incluye un cable de 50&nbsp;m, adecuado para excavaciones habituales. Recomendamos 80&nbsp;m para excavaciones profundas y muros de contencion, y 100&nbsp;m para presas y taludes; longitudes mayores se fabrican a medida, con cable de hasta 180&nbsp;m probado en un sondeo hidroenergetico de 180&nbsp;m. Para sondeos profundos y programas de largo plazo, conviene preparar repuestos: carrete de respaldo, dos juegos de ruedas guia, juntas toricas y conectores de cable.'
  ],
  ['What should I do when the checksum is abnormal?', 'Que debo hacer si la verificacion es anormal?'],
  [
    "The checksum (A0&nbsp;+&nbsp;A180) should stay within ±0.5&nbsp;mm/m. If most points in a hole exceed it, the probe's zero position has drifted — the instrument needs calibration or service, and persistent exceedance means a metrology-institute recalibration before further reporting. If repeated readings at the same depth differ by more than 0.3&nbsp;mm/m, also check the guide wheels, springs and cable contacts. A sudden jump in the cumulative curve usually points to a wrongly recorded depth — verify the cable depth markings.",
    'La verificacion (A0&nbsp;+&nbsp;A180) debe mantenerse dentro de ±0.5&nbsp;mm/m. Si la mayoria de los puntos del sondeo la superan, la posicion cero de la sonda puede haberse desplazado: el instrumento necesita calibracion o servicio, y una desviacion persistente requiere recalibracion metrologica antes de emitir nuevos informes. Si lecturas repetidas a la misma profundidad difieren mas de 0.3&nbsp;mm/m, revise tambien ruedas guia, resortes y contactos del cable. Un salto repentino en la curva acumulada suele indicar una profundidad registrada de forma incorrecta; verifique las marcas de profundidad del cable.'
  ],
  [
    'Readings take a long time to stabilize, or auto mode saves points by mistake — how do I fix it?',
    'Las lecturas tardan en estabilizarse o el modo automatico guarda puntos por error: como lo corrijo?'
  ],
  [
    "Both are threshold settings in the app's measurement-control menu. If readings won't stabilize (an over-strict threshold or probe disturbance), relax the measurement-precision parameter from the default 0.02&nbsp;mm to 0.05&nbsp;mm. If auto mode mis-saves during normal stabilization, the auto-measurement change threshold (default 0.2&nbsp;mm) is set too small — increase it to a moderate value.",
    'Ambos casos dependen de umbrales en el menu de control de medicion de la app. Si las lecturas no se estabilizan, por un umbral demasiado estricto o por movimiento de la sonda, relaje el parametro de precision de medicion de 0.02&nbsp;mm a 0.05&nbsp;mm. Si el modo automatico guarda puntos durante la estabilizacion normal, el umbral de cambio de medicion automatica (0.2&nbsp;mm por defecto) es demasiado bajo; aumentelo a un valor moderado.'
  ],
  [
    "How long does the battery last, and what if Bluetooth won't connect?",
    'Cuanto dura la bateria y que hago si Bluetooth no se conecta?'
  ],
  [
    "The Bluetooth reel's built-in lithium battery supports 80 hours of continuous operation; charge it through the charging port on the reel panel, and charge whenever the red battery indicator lights. If Bluetooth won't connect: confirm you selected the device with the RTI name prefix matching your instrument, shorten the distance, check the reel's battery, and re-pair — a steady blue indicator means connected.",
    'La bateria de litio integrada en el carrete Bluetooth permite hasta 80 horas de operacion continua. Carguela desde el puerto del panel del carrete y recargue cuando se encienda el indicador rojo de bateria. Si Bluetooth no se conecta, confirme que selecciono el dispositivo con el prefijo RTI correspondiente a su instrumento, reduzca la distancia, revise la bateria del carrete y vuelva a emparejar; un indicador azul fijo significa conexion activa.'
  ],
  [
    'How should the probe and cable be maintained — and when must the probe go back for recalibration?',
    'Como se mantienen la sonda y el cable, y cuando debe enviarse la sonda a recalibracion?'
  ],
  [
    'After the last survey of the day, wipe the probe and cable dry and keep the cable connector dry; lubricate the positioning wheels with a few drops of light machine oil (never chlorine-containing solvents), grease the connector O-rings, clean contacts with an alcohol swab rather than electrical contact cleaner, and store the system in a dry place. Send the probe for metrology-institute calibration when the checksum persistently exceeds 0.5&nbsp;mm/m. On a water-ingress alarm, stop using the probe immediately, replace the O-ring and have the unit inspected after drying — never just wipe it dry and continue.',
    'Despues de la ultima medicion del dia, seque la sonda y el cable y mantenga seco el conector; lubrique las ruedas de posicionamiento con unas gotas de aceite ligero para maquinaria, nunca solventes con cloro; engrase las juntas toricas del conector, limpie los contactos con alcohol en vez de limpiador electrico y guarde el sistema en un lugar seco. Envie la sonda a calibracion metrologica cuando la verificacion supere de forma persistente 0.5&nbsp;mm/m. Si aparece una alarma de entrada de agua, deje de usar la sonda de inmediato, sustituya la junta torica y haga revisar la unidad despues del secado; no basta con secarla y continuar.'
  ]
]

const ipiReplacements = [
  ['In-Place Inclinometer', 'Inclinometro fijo IPI'],
  ['SCIS-IPI-01 · RS485 ×128 · CARBON FIBER', 'SCIS-IPI-01 · RS485 x128 · FIBRA DE CARBONO'],
  ['Real-time data that manual surveys can never capture', 'Datos en tiempo real que las mediciones manuales no pueden capturar'],
  ['Carbon-fiber rod, 120 g/m', 'Varilla de fibra de carbono, 120 g/m'],
  ['One RS485 cable, 128 nodes, AutoID', 'Un cable RS485, 128 nodos, AutoID'],
  ['Electrolytic-solution sensor option', 'Opcion de sensor electrolitico'],
  ['Sensors on One RS485 Bus', 'Sensores en un solo bus RS485'],
  ['A Permanent Sensor String Inside the Casing', 'Una cadena permanente de sensores dentro del casing'],
  ['Permanent, not periodic', 'Permanente, no periodico'],
  ['Segment number ↔ depth, on record', 'Numero de segmento y profundidad registrados'],
  ['Cloud-managed alarms, automatically', 'Alarmas automaticas gestionadas en la nube'],
  ['What the Data Looks Like', 'Como se presentan los datos'],
  ['Built for Unattended, Long-Term Duty', 'Disenado para monitoreo continuo sin supervision'],
  ['Structure &amp; core advantages', 'Estructura y ventajas principales'],
  ['"Light yet Strong" — the Design Philosophy', '"Ligero pero resistente": filosofia de diseno'],
  ['Installation: 12 Steps, Bottom-Up', 'Instalacion en 12 pasos, desde el fondo hacia arriba'],
  ['The Three Gates', 'Tres puntos criticos de control'],
  ['Hardware Up Close', 'Detalle del hardware'],
  ['World-Leading Accuracy · High-Value Pricing', 'Alta precision con valor practico para proyectos'],
  ['Where Real-Time Data Proved Its Worth', 'Donde los datos en tiempo real demostraron su valor'],
  [
    'One-fifth the weight of a traditional metal rod — light yet high-strength (≥5.5 kN).',
    'Aproximadamente una quinta parte del peso de una varilla metalica tradicional, con alta resistencia para instalacion profunda.'
  ],
  [
    'A single bus chains 128 segments; AutoID auto-addressing means no per-unit configuration.',
    'Un solo bus conecta hasta 128 segmentos; AutoID reduce la configuracion manual de cada unidad.'
  ],
  [
    'Proprietary sensing element with 1×10⁻⁸-level long-term stability for multi-year projects.',
    'Elemento sensor propietario con estabilidad a largo plazo para proyectos multianuales.'
  ],
  [
    'Two figures stand out: 0.05 W per segment means the system runs stably on solar power alone, and 5.5 kN tensile strength keeps deep-borehole installation structurally safe.',
    'Dos datos son clave: bajo consumo por segmento para operacion con energia solar y alta resistencia a traccion para instalaciones profundas.'
  ],
  ['Centralizing wheel set', 'Conjunto de ruedas de centrado'],
  ['Rod — carbon fiber / aluminum alloy', 'Varilla de fibra de carbono / aleacion de aluminio'],
  ['High-precision tilt sensor', 'Sensor de inclinacion de alta precision'],
  ['Universal joint connection', 'Conexion con junta universal'],
  ['Positioning cable + casing-mouth fixture', 'Cable de posicionamiento y fijacion en boca de casing']
]

const flexibleReplacements = [
  ['Flexible Inclinometer (Shape Array, SAA)', 'Shape Displacement Array (SAA)'],
  ['Flexible Inclinometer', 'Inclinometro flexible'],
  ['SCIS-SAA-02 · 3-AXIS · SEGMENTED &amp; RECOVERABLE', 'SCIS-SAA-02 · 3 EJES · SEGMENTADO Y RECUPERABLE'],
  ['3D deformation, segmented &amp; recoverable, multi-mode layout', 'Deformacion 3D, estructura segmentada y recuperable, multiples modos de instalacion'],
  ['3-axis measurement, 0–360° coverage', 'Medicion de 3 ejes, cobertura 0-360 grados'],
  ['±0.002° measurement accuracy', 'Precision de medicion +/-0.002 grados'],
  ['180° maximum bending', 'Flexion maxima de 180 grados'],
  ['IP68 · 3 MPa, tested to 4 MPa', 'IP68 · 3 MPa, probado hasta 4 MPa'],
  ['A Spine of Rigid Segments and Flexible Joints', 'Una columna de segmentos rigidos y juntas flexibles'],
  ['A Continuous Profile, One Point per Segment', 'Perfil continuo, un punto por segmento'],
  ['Designed for Reuse, Integration and Field Service', 'Disenado para reutilizacion, integracion y servicio en campo'],
  ['Three Deployment Modes, One Product', 'Tres modos de despliegue, un solo producto'],
  ['Built around two core capabilities', 'Construido sobre dos capacidades clave'],
  ['Installation: Vertical &amp; Horizontal Paths', 'Instalacion vertical y horizontal'],
  ['After Burial: Remote Inspection for Horizontal Layouts', 'Despues del enterramiento: inspeccion remota en trazados horizontales'],
  ['Assembly &amp; Structure in Detail', 'Ensamble y estructura en detalle'],
  ['Every Segment Is a Reusable Asset', 'Cada segmento es un activo reutilizable'],
  ['Shaoxing Metro Line 2: validated against the sliding inclinometer', 'Metro de Shaoxing Linea 2: validado frente a inclinometro deslizante'],
  ['SAA or In-Place Inclinometer — Which to Choose?', 'SAA o IPI: cual elegir'],
  ['Four Benchmark Case Studies', 'Cuatro casos de referencia'],
  [
    'Full all-direction sensing with no blind spots — hard to exceed range even in large deformation.',
    'Medicion en todas las direcciones, sin puntos ciegos, adecuada para deformaciones grandes.'
  ],
  [
    'Equivalent to 0.02 mm per 500 mm, with 0.005 mm displacement resolution.',
    'Equivalente a 0.02 mm por 500 mm, con resolucion de desplazamiento de 0.005 mm.'
  ],
  [
    'Flexible hinges naturally adapt to curved layouts — tunnels, ring sections, uneven trenches.',
    'Las juntas flexibles se adaptan a geometria curva, tuneles, secciones anulares y zanjas irregulares.'
  ],
  [
    'Outputs: 3D shape curves, a per-segment orientation matrix and per-segment temperature records — synced automatically to the monitoring cloud.',
    'Entrega curvas de forma 3D, orientacion por segmento y temperatura por segmento, sincronizadas con la nube de monitoreo.'
  ],
  ['Recoverable &amp; Reusable', 'Recuperable y reutilizable'],
  ['All-Direction Deployment', 'Instalacion en multiples direcciones'],
  ['Vertical · Inclinometry', 'Vertical · Inclinometria'],
  ['Horizontal · Settlement', 'Horizontal · Asentamiento']
]

// Long-form product copy is translated before the shorter label mappings below.
// Keeping these in the same data file preserves the shared product template.
const ipiExtendedReplacements = [
  ['7×24 automated deep-displacement monitoring. One RS485 cable chains up to 128 sensors, and a 120 g/m carbon-fiber rod lets a single operator install by hand — even in 60–100 m boreholes.', 'Monitoreo automatizado de desplazamiento profundo 7×24. Un cable RS485 conecta hasta 128 sensores y una varilla de fibra de carbono de 120 g/m permite la instalacion manual por un solo operador, incluso en sondeos de 60–100 m.'],
  ['If the sliding inclinometer solves manual-survey efficiency, the in-place inclinometer answers the need for 7×24 automated monitoring. It samples continuously at minute-level frequency — as fast as one reading per minute — capturing the instantaneous changes a daily site visit could never detect.', 'Si el inclinometro deslizante mejora la eficiencia de las mediciones manuales, el inclinometro fijo responde a la necesidad de monitoreo automatizado 7×24. Mide continuamente con frecuencia de minutos, hasta una lectura por minuto, y captura cambios instantaneos que una visita diaria no podria detectar.'],
  ['If the sliding inclinometer is a stethoscope lowered into the borehole for each visit, the in-place inclinometer is a permanently implanted ECG: it seals the entire manual-survey process inside the grooved casing and runs it automatically, around the clock.', 'Si el inclinometro deslizante es un estetoscopio que se baja al sondeo en cada visita, el inclinometro fijo es un ECG implantado de forma permanente: integra todo el proceso de medicion manual dentro del casing ranurado y trabaja automaticamente las 24 horas.'],
  ['System composition: sensor segments, connecting rods, steel wire rope, casing-mouth protector and the data-service system (controller + power + collector box). Numbering runs bottom-up — segment #1 sits deepest.', 'Composicion del sistema: segmentos sensores, varillas de conexion, cable de acero, protector de boca de casing y sistema de servicio de datos (controlador, alimentacion y caja colectora). La numeracion se realiza desde el fondo hacia arriba; el segmento 1 queda a mayor profundidad.'],
  ['A sliding system competes on flexibility — one probe surveys many boreholes weekly or monthly during construction. The in-place type competes on permanence: installed once, it samples automatically at minute-level frequency with no site visits. Projects running three years or longer, or sites needing remote access, are IPI territory; sub-one-year construction monitoring usually favors the sliding type.', 'El sistema deslizante destaca por su flexibilidad: una sonda puede medir muchos sondeos semanal o mensualmente durante la construccion. El tipo fijo destaca por su permanencia: se instala una vez y mide automaticamente sin visitas al sitio. Los proyectos de tres anos o mas, o los que necesitan acceso remoto, suelen ser adecuados para IPI; el monitoreo de construccion menor a un ano suele favorecer al tipo deslizante.'],
  ['Segments are installed bottom-up, and each one is logged into a segment-number-to-depth table as it goes in. Any later anomaly in the remote data maps straight back to a specific segment at a specific depth — so maintenance targets one node instead of guessing.', 'Los segmentos se instalan desde el fondo y cada uno se registra en una tabla de numero de segmento y profundidad. Cualquier anomalia posterior en los datos remotos puede asociarse con un segmento y una profundidad concretos, de modo que el mantenimiento se dirige al nodo correcto.'],
  ['Devices are bound to the cloud platform at the factory; on site, the controller registers and comes online by itself. Engineers then set rate and cumulative alarm thresholds per measuring point — when a reading exceeds them, the platform pushes SMS alerts, with multi-account views for owner, contractor, supervisor and third parties.', 'Los dispositivos se vinculan a la plataforma en la nube en fabrica; en campo, el controlador se registra y se conecta automaticamente. Los ingenieros configuran umbrales de alarma de velocidad y acumulacion por punto de medicion; cuando se superan, la plataforma envia alertas SMS y ofrece vistas separadas para propietario, contratista, supervisor y terceros.'],
  ['Each segment continuously measures tilt over its gauge length; the platform converts the chain of readings into a displacement-vs-depth profile. Because sampling is automatic — as fast as one reading per minute — the profile is redrawn continuously, revealing how deflection develops over time instead of waiting for the next manual survey.', 'Cada segmento mide continuamente la inclinacion en su longitud de referencia; la plataforma convierte la cadena de lecturas en un perfil de desplazamiento frente a profundidad. Como el muestreo es automatico, hasta una lectura por minuto, el perfil se actualiza continuamente y muestra como evoluciona la deformacion sin esperar a la siguiente medicion manual.'],
  ['On network loss, each string buffers data in 16 GB of onboard storage — over a year of history — and resumes upload automatically once the connection recovers.', 'Cuando se pierde la red, cada cadena almacena los datos en 16 GB de memoria local, con mas de un ano de historico, y reanuda la carga automaticamente al recuperar la conexion.'],
  ['While holding 5.5 kN tensile strength, the carbon-fiber rod cuts weight to one-fifth of a traditional metal rod — so operators install in 60–100 m deep boreholes by hand, with no hoisting equipment.', 'Con una resistencia a traccion de 5.5 kN, la varilla de fibra de carbono reduce el peso a una quinta parte del de una varilla metalica tradicional. Por eso los operadores pueden instalarla manualmente en sondeos de 60–100 m, sin equipos de izaje.'],
  ['One RS485 cable chains 128 segments. Each sensor ships with a factory-unique long address; AutoID assigns short addresses on site — plug-and-play, no per-unit configuration.', 'Un cable RS485 conecta 128 segmentos. Cada sensor sale de fabrica con una direccion larga unica y AutoID asigna direcciones cortas en campo: conexion directa sin configurar cada unidad.'],
  ['Scheduled sampling configurable from 1 min to 24 h; ultra-low-power sleep mode; breakpoint-resume on network loss with 16 GB local storage; remote configuration and firmware upgrades.', 'Muestreo programable de 1 minuto a 24 horas; modo de suspension de ultra bajo consumo; reanudacion tras perdida de red con 16 GB de almacenamiento local; configuracion y actualizaciones de firmware remotas.'],
  ['Even the best MEMS accelerometers drift at the 1×10⁻⁵ level over the years; SoilCreate\'s proprietary electrolytic-solution sensor holds 1×10⁻⁸ — three orders of magnitude less drift, ideal for 5-year-plus monitoring.', 'Incluso los mejores acelerometros MEMS presentan deriva del orden de 1×10⁻⁵ con los anos; el sensor electrolitico propietario de SoilCreate mantiene 1×10⁻⁸, tres ordenes de magnitud menos deriva, ideal para monitoreos de mas de cinco anos.'],
  ['Before starting: identify the string\'s top (the segment with the aviation-plug cable) and bottom (no plug), and clamp the steel wire rope to the bottom segment. Three checkpoints gate the whole procedure — fixed-wheel orientation, connecting-rod engagement, and steel-wire-rope lock-off.', 'Antes de comenzar: identifique la parte superior de la cadena (segmento con cable y conector aviation) y la inferior (sin conector), y fije el cable de acero al segmento inferior. Tres puntos controlan todo el procedimiento: orientacion de ruedas fijas, acoplamiento de varillas y bloqueo del cable de acero.'],
  ['Field rule: no matter how tight the schedule, if any of the three checkpoints — fixed-wheel orientation, rod engagement, wire-rope lock-off — is wrong, stop and redo it. Continuing and patching later always costs more than redoing now.', 'Regla de campo: por ajustado que sea el calendario, si falla cualquiera de los tres puntos de control, detenga el trabajo y repitalo. Continuar y corregir despues siempre cuesta mas que rehacerlo ahora.'],
  ['In-place + sliding, better together:\nthe in-place type captures instantaneous changes in real time (such as tidal fluctuations); the sliding type cancels zero drift with forward-and-reverse runs. Combined, they form the most complete deep-displacement monitoring solution.', 'IPI y deslizante, mejor juntos:\nel tipo fijo captura cambios instantaneos en tiempo real, como fluctuaciones de marea; el tipo deslizante cancela la deriva de cero mediante pasadas de ida y vuelta. Combinados forman una solucion completa para monitoreo de desplazamiento profundo.'],
  ['Major energy project', 'Proyecto energetico de gran escala'],
  ['Coastal Energy Site — the "Ocean Breathing" of a 107 m Borehole', 'Sitio energetico costero: la "respiracion del oceano" en un sondeo de 107 m'],
  ['In reclaimed soft soil 23 m from the sea, automated monitoring recorded an approximately 12-hour periodic casing-top movement with an amplitude near 100 mm. The continuous series provided clear evidence for identifying the influence of Ocean Tide Loading.', 'En suelo blando ganado al mar, a 23 m de la costa, el monitoreo automatizado registro un movimiento periodico de unas 12 horas en la parte superior del casing, con una amplitud cercana a 100 mm. La serie continua permitio identificar claramente la influencia de la marea oceanica.'],
  ['Foundation pit', 'Excavacion profunda'],
  ['Suzhou Xiangcheng Foundation Pit', 'Excavacion profunda de Suzhou Xiangcheng'],
  ['Long-term automated monitoring captured twice-daily periodic displacement of the retaining structure, closely matching the tides — deformation that once-a-day manual surveys could never reveal.', 'El monitoreo automatizado a largo plazo registro desplazamientos periodicos dos veces al dia en la estructura de contencion, coincidentes con las mareas; una deformacion que las mediciones manuales diarias no podian revelar.'],
  ['Metro', 'Metro'],
  ['Suzhou Metro Line 5', 'Metro de Suzhou Linea 5'],
  ['A deformation-rate exceedance triggered a Level III alert — pushed by SMS and app to the responsible parties before the construction team had noticed anything abnormal. The system is faster, and more accurate, than people.', 'Un exceso de velocidad de deformacion activo una alerta de Nivel III, enviada por SMS y la aplicacion a los responsables antes de que el equipo de construccion detectara algo anormal. El sistema es mas rapido y preciso que una revision manual.'],
  ['What kind of casing does the in-place inclinometer require?', 'Que tipo de casing necesita el inclinometro fijo?'],
  ['No data is coming through after power-up — what should we check first?', 'No llegan datos despues de encender el sistema: que debemos revisar primero?'],
  ['The data keeps trending to one side — is the sensor drifting?', 'Los datos siguen tendiendo hacia un lado: el sensor esta derivando?'],
  ['Who sets the alarm thresholds, and can they be changed later?', 'Quien configura los umbrales de alarma y pueden cambiarse despues?'],
  ['MEMS or electrolytic-solution sensor — which should a multi-year project choose?', 'Sensor MEMS o electrolitico: cual conviene para un proyecto multianual?'],
  ['If remote data turns anomalous, how do you locate the problem segment?', 'Si los datos remotos son anomalos, como se localiza el segmento problematico?']
]

const flexibleExtendedReplacements = [
  ['A spine-structure 3D deformation monitoring array for large deformation and complex conditions. Segmented like building blocks, it can be assembled on site, dismantled at project end and redeployed on the next project.', 'Una matriz de monitoreo de deformacion 3D con estructura tipo columna para grandes deformaciones y condiciones complejas. Sus segmentos se ensamblan como bloques, se desmontan al terminar el proyecto y pueden reutilizarse en el siguiente.'],
  ['The SCIS-SAA-02 measures displacement in X, Y and Z simultaneously through a spine-structure array of rigid sensing segments and flexible hinges. AutoID + RS485 chain up to 128 segments on a single cable — vertical in a borehole, horizontal in a trench, or ring-laid around a tunnel section.', 'La SCIS-SAA-02 mide simultaneamente el desplazamiento en X, Y y Z mediante una matriz de segmentos sensores rigidos y juntas flexibles. AutoID y RS485 conectan hasta 128 segmentos con un solo cable: vertical en un sondeo, horizontal en una zanja o en anillo alrededor de una seccion de tunel.'],
  ['Backed by a Ministry of Water Resources 4 MPa test report; 8 MPa custom available.', 'Respaldada por un informe de prueba de 4 MPa del Ministerio de Recursos Hidricos; configuracion personalizada de 8 MPa disponible.'],
  ['Rigid sensing tubes alternate with flexible joints — the tubes measure, the joints take the deformation. Each rigid segment carries a 3-axis MEMS sensor that measures its own orientation in space across 0–360°; chaining every segment\'s vector end-to-end reconstructs the full 3D deformation shape of the borehole or structure.', 'Los tubos sensores rigidos se alternan con juntas flexibles: los tubos miden y las juntas absorben la deformacion. Cada segmento rigido incorpora un sensor MEMS de 3 ejes que mide su orientacion espacial de 0 a 360 grados; al encadenar los vectores se reconstruye la forma completa de deformacion 3D del sondeo o la estructura.'],
  ['Segment vectors are chained head-to-tail rebuild the shape', 'Los vectores de los segmentos se encadenan para reconstruir la forma'],
  ['Torsion correction better than 0.5° · Per-segment real-time temperature recording', 'Correccion de torsion mejor que 0.5 grados · Registro de temperatura en tiempo real por segmento'],
  ['Every rigid segment measures its 3-axis orientation across 0–360° and logs its own temperature in real time.', 'Cada segmento rigido mide su orientacion de 3 ejes de 0 a 360 grados y registra su temperatura en tiempo real.'],
  ['Flexible joints between segments take the bending, so measurement and deformation are cleanly separated.', 'Las juntas flexibles entre segmentos absorben la flexion, separando claramente la medicion de la deformacion.'],
  ['Segment vectors are chained into the 3D shape curve; torsion correction aligns all segments to one coordinate system, better than 0.5°.', 'Los vectores se encadenan en una curva de forma 3D; la correccion de torsion alinea todos los segmentos en un sistema de coordenadas comun, con precision mejor que 0.5 grados.'],
  ['Every rigid segment is a measurement point, so the array returns a continuous displacement profile with no blind spots — and because acquisition is automated, the deformation trajectory can be replayed in real time as it develops.', 'Cada segmento rigido es un punto de medicion, por lo que la matriz entrega un perfil continuo sin puntos ciegos. Como la adquisicion es automatica, la trayectoria de deformacion puede reproducirse en tiempo real mientras evoluciona.'],
  ['SCIS-SAA-02 uses field-assembled segments, so system length can follow each project and individual sections can be inspected, replaced or redeployed. This reduces transport, installation and lifecycle constraints common to fixed-length arrays.', 'La SCIS-SAA-02 utiliza segmentos ensamblados en campo, por lo que la longitud se adapta a cada proyecto y las secciones pueden inspeccionarse, sustituirse o reutilizarse. Esto reduce las limitaciones de transporte, instalacion y ciclo de vida de las matrices de longitud fija.'],
  ['Vertical for inclinometry, horizontal for settlement, ring for convergence — the flexible structure adapts wherever rigid probes cannot go.', 'Vertical para inclinometria, horizontal para asentamiento y en anillo para convergencia: la estructura flexible se adapta donde las sondas rigidas no pueden instalarse.'],
  ['Segmented design → flexible on-site assembly → dismantled &amp; recovered at project end → transported to the next project → lower hardware amortization cost.', 'Diseno segmentado → ensamblaje flexible en campo → desmontaje y recuperacion al finalizar → transporte al siguiente proyecto → menor coste de amortizacion del hardware.'],
  ['One cable chains up to 128 segments with automatic addressing — simple wiring, open protocol, ready for any logger or platform.', 'Un cable conecta hasta 128 segmentos con direccionamiento automatico: cableado sencillo, protocolo abierto y preparado para cualquier registrador o plataforma.'],
  ['The deployment modes above tell you where the array goes — this is how it gets there. Vertical (chained in casing) and horizontal (trench-laid) follow two entirely different procedures that are not interchangeable: confirm which one applies before work starts.', 'Los modos de despliegue indican donde se instala la matriz; esta es la forma de hacerlo. La instalacion vertical dentro del casing y la horizontal en zanja siguen procedimientos distintos y no intercambiables: confirme cual corresponde antes de comenzar.'],
  ['A horizontal run leaves nothing visible at the surface — periodic inspection happens remotely on the cloud platform.', 'Un trazado horizontal no deja elementos visibles en superficie; la inspeccion periodica se realiza de forma remota en la plataforma en la nube.'],
  ['At project end the array is dismantled and recovered segment by segment, inspected, shipped to the next site and re-assembled to the length required by the new project. Modular assembly takes 2 people about 30 minutes, and each qualified reuse reduces lifecycle hardware cost.', 'Al finalizar el proyecto, la matriz se desmonta y recupera segmento a segmento, se inspecciona, se envia al siguiente sitio y se vuelve a ensamblar con la longitud requerida. El montaje modular requiere unas dos personas durante 30 minutos y cada reutilizacion reduce el coste de hardware del ciclo de vida.'],
  ['Same-borehole validation', 'Validacion en el mismo sondeo'],
  ['At Paojiang Lianghu Station, a flexible and a sliding inclinometer were installed just 20 cm apart in the same borehole. Over six months, A-axis displacement trends matched closely — proving automated SAA monitoring can fully replace manual sliding surveys with equally reliable data.', 'En la estacion Paojiang Lianghu se instalaron un inclinometro flexible y uno deslizante a solo 20 cm de distancia en el mismo sondeo. Durante seis meses, las tendencias de desplazamiento del eje A coincidieron estrechamente, demostrando que el monitoreo SAA automatizado puede sustituir las mediciones manuales con datos igual de fiables.'],
  ['A simple rule: complex large deformation, settlement or convergence — choose the flexible SAA. Vertical deep boreholes where small displacements matter — choose the in-place inclinometer. Combining the two delivers the best results.', 'Una regla sencilla: para grandes deformaciones, asentamientos o convergencia compleja, elija SAA flexible. Para sondeos verticales profundos donde importan pequeños desplazamientos, elija el inclinometro fijo. Combinar ambos ofrece los mejores resultados.'],
  ['Horizontal settlement profiles or tunnel convergence rings — flexible array or in-place inclinometer?', 'Perfiles de asentamiento horizontal o anillos de convergencia de tunel: matriz flexible o inclinometro fijo?'],
  ['Does vertical installation need inclinometer casing with guide grooves?', 'La instalacion vertical necesita casing de inclinometro con ranuras guia?'],
  ['What is the minimum bend radius?', 'Cual es el radio minimo de curvatura?'],
  ['Can I push the array into the conduit on a horizontal run?', 'Puedo empujar la matriz dentro del conducto en un trazado horizontal?'],
  ['How does recovery and reuse work between projects?', 'Como funciona la recuperacion y reutilizacion entre proyectos?'],
  ['How is axial torsion handled?', 'Como se gestiona la torsion axial?'],
  ['How do I inspect and maintain a horizontal layout once it is buried?', 'Como inspecciono y mantengo un trazado horizontal una vez enterrado?'],
  ['The whole curve jumped — or has drifted slowly for months. What does each signature mean?', 'Toda la curva salto o se desplazo lentamente durante meses. Que significa cada patron?']
]

const ipiResidualReplacements = [
  ['Gauge length (wheelbase) 0.5–1 m', 'Longitud de medicion (distancia entre ruedas) 0.5-1 m'],
  ['Collector box (IP65)', 'Caja colectora (IP65)'],
  ['Controller · Power supply', 'Controlador · Fuente de alimentacion'],
  ['SoilCreate Monitoring', 'Monitoreo SoilCreate'],
  ['Casing-mouth protector', 'Protector de boca de casing'],
  ['Grooved inclinometer casing', 'Casing ranurado para inclinometro'],
  ['Steel-wire-rope clamp, bottom segment', 'Abrazadera de cable de acero, segmento inferior'],
  ['Sensor segment — MEMS or', 'Segmento sensor: MEMS o'],
  ['electrolytic-solution tilt sensor', 'sensor de inclinacion electrolitico'],
  ['测斜仪节段——MEMS 或电解质溶液传感器', 'Segmento de inclinometro: MEMS o sensor electrolitico'],
  ['One RS485 bus cable', 'Un cable de bus RS485'],
  ['Representative continuous-monitoring profile shape: successive automated readings reveal progressive deflection with depth. Illustrative curve shape only — not project data.', 'Forma representativa de un perfil de monitoreo continuo: las lecturas automaticas sucesivas revelan deflexion progresiva con la profundidad. Curva ilustrativa; no son datos de proyecto.'],
  ['SCIS-IPI-01 Specification', 'Especificaciones SCIS-IPI-01'],
  ['MEMS accelerometer / electrolytic-solution sensor (optional)', 'Acelerometro MEMS / sensor electrolitico opcional'],
  ['Long-term stability', 'Estabilidad a largo plazo'],
  ['Long-Term Stability', 'Estabilidad a largo plazo'],
  ['Fixed wheels plus spring-loaded wheels keep the sensor precisely aligned in the casing.', 'Ruedas fijas y ruedas con resorte mantienen el sensor alineado con precision dentro del casing.'],
  ['120 g/m, one-fifth the weight of a traditional metal rod, with deep anodized corrosion protection.', '120 g/m, una quinta parte del peso de una varilla metalica tradicional, con proteccion anticorrosiva anodizada.'],
  ['The core measuring element: MEMS, or the proprietary electrolytic-solution sensor for ultimate long-term stability.', 'El elemento principal de medicion: MEMS o sensor electrolitico propietario para maxima estabilidad a largo plazo.'],
  ['Flexibly links the segments to accommodate a degree of casing bend.', 'Une los segmentos de forma flexible para adaptarse a cierta curvatura del casing.'],
  ['Anchors and protects the entire sensor string.', 'Ancla y protege toda la cadena de sensores.'],
  ['In-place + sliding, better together:', 'IPI fijo + inclinometro deslizante, mejor juntos:'],
  ['the in-place type captures instantaneous changes in real time (such as tidal fluctuations); the sliding type cancels zero drift with forward-and-reverse runs. Combined, they form the most complete deep-displacement monitoring solution.', 'el tipo fijo captura cambios instantaneos en tiempo real, como fluctuaciones de marea; el tipo deslizante cancela la deriva de cero con recorridos de ida y vuelta. Combinados forman una solucion mas completa para monitoreo de desplazamiento profundo.'],
  ['Compress the spring-loaded wheels', 'Comprima las ruedas con resorte'],
  ['Press the moving-wheel springs on the segment firmly before it enters the casing.', 'Presione firmemente los resortes de las ruedas moviles antes de introducir el segmento en el casing.'],
  ['Slide the wheel set into the guide grooves — checkpoint', 'Deslice el conjunto de ruedas dentro de las ranuras guia: punto de control'],
  ['The fixed wheels must face the expected deformation direction of the excavation. Wrong orientation distorts all subsequent data.', 'Las ruedas fijas deben orientarse hacia la direccion esperada de deformacion de la excavacion. Una orientacion incorrecta distorsiona todos los datos posteriores.'],
  ['Mate the connecting rod — checkpoint', 'Acople la varilla de conexion: punto de control'],
  ['Carefully insert the quick-connect port of the rod above the segment onto the metal connecting rod — fully seated, no gap. Any gap is an error source.', 'Inserte cuidadosamente el puerto de conexion rapida de la varilla superior en la varilla metalica de conexion: completamente asentado, sin holgura. Cualquier separacion es una fuente de error.'],
  ['Tension and lock the steel wire rope — checkpoint', 'Tense y bloquee el cable de acero: punto de control'],
  ['Pull the wire rope through the rod fully taut, then lock the segment\'s rope clamp. An untensioned rope leaves segments unloaded and lets them drop out of position.', 'Tire del cable de acero hasta dejarlo completamente tenso y despues bloquee la abrazadera del segmento. Un cable sin tension deja los segmentos sin carga y puede hacer que pierdan posicion.'],
  ['Secure the spare cable', 'Fije el cable sobrante'],
  ['Wind excess cable around the connecting rod and fasten with cable clips, so it cannot rub against the casing wall.', 'Enrolle el cable sobrante alrededor de la varilla de conexion y fijelo con clips para evitar rozamiento contra la pared del casing.'],
  ['Lower and connect the next segment', 'Baje y conecte el siguiente segmento'],
  ['Push the rod down, then insert the next segment\'s bottom metal rod into the quick-connect port — again with no gap.', 'Empuje la varilla hacia abajo e inserte la varilla metalica inferior del siguiente segmento en el puerto de conexion rapida, nuevamente sin holgura.'],
  ['Repeat for every segment', 'Repita el proceso para cada segmento'],
  ['Repeat steps 1–5 segment by segment, bottom-up, until the string is complete.', 'Repita los pasos 1-5 segmento por segmento, de abajo hacia arriba, hasta completar la cadena.'],
  ['Lead out the top cable', 'Saque el cable superior'],
  ['Bring the top segment\'s cable and aviation plug out through the side slot of the casing-mouth protector.', 'Saque el cable y el conector aviation del segmento superior por la ranura lateral del protector de boca del casing.'],
  ['Seat the casing-mouth protector', 'Coloque el protector de boca del casing'],
  ['Place the protector into the casing with its rim pressed onto the casing mouth.', 'Coloque el protector en el casing con el borde apoyado sobre la boca.'],
  ['Tension the top wire, tighten the screws', 'Tense el cable superior y apriete los tornillos'],
  ['Pull the wire rope above the protector until fully fixed, then tighten the butterfly screws on the protector.', 'Tire del cable de acero por encima del protector hasta fijarlo completamente y apriete los tornillos mariposa.'],
  ['Stability check before power', 'Verificacion de estabilidad antes de energizar'],
  ['Visually confirm the whole system sits firmly in the casing before energizing anything.', 'Confirme visualmente que todo el sistema esta firme dentro del casing antes de energizarlo.'],
  ['Power up and go online', 'Energice y conecte a la plataforma'],
  ['Connect power and the controller, then bring the string online on the cloud platform — and verify the first remote reading before leaving site.', 'Conecte la alimentacion y el controlador, ponga la cadena en linea en la plataforma en la nube y verifique la primera lectura remota antes de salir del sitio.'],
  ['1 · Fixed-wheel orientation', '1 · Orientacion de ruedas fijas'],
  ['The fixed wheels must face the excavation\'s expected deformation direction. Installed the wrong way, readings persistently trend to one side — and the only remedy is re-installing with the correct orientation.', 'Las ruedas fijas deben orientarse hacia la direccion esperada de deformacion de la excavacion. Si se instalan al reves, las lecturas tenderan de forma persistente hacia un lado; la unica solucion es reinstalar con la orientacion correcta.'],
  ['2 · Connecting-rod engagement', '2 · Acoplamiento de varillas'],
  ['Every metal connecting rod must be fully seated in its quick-connect port with no gap. A loose segment-to-segment joint is a permanent error source.', 'Cada varilla metalica de conexion debe quedar completamente asentada en su puerto de conexion rapida, sin holgura. Una union floja entre segmentos es una fuente permanente de error.'],
  ['3 · Steel-wire-rope lock-off', '3 · Bloqueo del cable de acero'],
  ['Tension first, then lock the rope clamp. If the rope will not pull through, the previous segment\'s clamp is still locked — open it before pulling. An untensioned rope leaves segments unloaded and out of position.', 'Primero tense y despues bloquee la abrazadera del cable. Si el cable no corre, la abrazadera del segmento anterior sigue cerrada; abrala antes de tirar. Un cable sin tension deja los segmentos sin carga y fuera de posicion.'],
  ['Lightweight SCIS-IPI-01 sensor string — slim rods, top connectors and one RS485 bus for long-depth automated monitoring.', 'Cadena ligera de sensores SCIS-IPI-01: varillas delgadas, conectores superiores y un bus RS485 para monitoreo automatizado en profundidad.'],
  ['Chained segments deform with the casing; the double wheel sets keep each rod centered in the casing.', 'Los segmentos encadenados deforman con el casing; los conjuntos dobles de ruedas mantienen cada varilla centrada.'],
  ['SCIS-IPI-01 combines a 128-node RS485 bus, AutoID addressing and a 120 g/m carbon-fiber rod. The result is less field wiring, simpler deep-borehole installation and a system designed for long-term automated monitoring.', 'SCIS-IPI-01 combina un bus RS485 de 128 nodos, direccionamiento AutoID y varilla de fibra de carbono de 120 g/m. El resultado es menos cableado en campo, instalacion mas sencilla en sondeos profundos y un sistema disenado para monitoreo automatizado a largo plazo.'],
  ['SoilCreate SCIS-IPI-01', 'SoilCreate SCIS-IPI-01'],
  ['Conventional Multi-Cable Systems', 'Sistemas convencionales multicable'],
  ['One RS485 cable for 128 segments', 'Un cable RS485 para 128 segmentos'],
  ['Multi-core cable, one run per sensor', 'Cable multiconductor, una linea por sensor'],
  ['Signal & addressing', 'Senal y direccionamiento'],
  ['Digital bus + AutoID auto-addressing', 'Bus digital + direccionamiento automatico AutoID'],
  ['Analog signal, per-unit configuration', 'Senal analogica, configuracion por unidad'],
  ['Carbon fiber, 120 g/m', 'Fibra de carbono, 120 g/m'],
  ['Metal rod, ~5× the weight', 'Varilla metalica, aprox. 5 veces mas pesada'],
  ['Deep-borehole install', 'Instalacion en sondeos profundos'],
  ['Single person, by hand, 60–100 m', 'Una persona, manualmente, 60-100 m'],
  ['Heavier string, hoisting often needed', 'Cadena mas pesada, normalmente requiere izaje'],
  ['16 GB storage, breakpoint-resume, remote upgrade', '16 GB de almacenamiento, reanudacion tras interrupcion y actualizacion remota'],
  ['Depends on external logger', 'Depende de registrador externo'],
  ['High-value project pricing', 'Precio de alto valor para proyectos'],
  ['Varies by system and service scope', 'Varia segun sistema y alcance del servicio'],
  ['Carbon fiber vs. a traditional metal rod.', 'Fibra de carbono frente a una varilla metalica tradicional.'],
  ['One RS485 line replaces 128 cable runs.', 'Una linea RS485 sustituye 128 tendidos de cable.'],
  ['Electrolytic-solution option vs. ~1×10⁻⁵ for the best MEMS.', 'Opcion electrolitica frente a aprox. 1×10⁻⁵ de los mejores MEMS.'],
  ['World-leading accuracy in a project-ready system.', 'Precision de alto nivel en un sistema listo para proyecto.'],
  ['7×24 automated deep-displacement monitoring. One RS485 cable chains up to 128 sensors, and a 120 g/m carbon-fiber rod lets a single operator install by hand — even in 60–100 m boreholes.', 'Monitoreo automatizado de desplazamiento profundo 7×24. Un cable RS485 conecta hasta 128 sensores y una varilla de fibra de carbono de 120 g/m permite la instalacion manual por un solo operador, incluso en sondeos de 60-100 m.'],
  ['mouth -> collector box -->', 'boca -> caja colectora -->'],
  ['no matter how tight the schedule, if any of the three checkpoints — fixed-wheel orientation, rod engagement, wire-rope lock-off — is wrong, stop and redo it. Continuing and patching later always costs more than redoing now.', 'por ajustado que sea el calendario, si cualquiera de los tres puntos de control — orientacion de ruedas fijas, acoplamiento de varillas o bloqueo del cable de acero — esta mal, detenga el trabajo y repitalo. Continuar y corregir despues siempre cuesta mas que rehacerlo ahora.'],
  ['SoilCreate in-place inclinometers have supported long-term deep-displacement monitoring at major energy, foundation-pit and rail-transit projects. Minute-level automated sampling preserves changes that periodic manual surveys can miss.', 'Los inclinometros fijos de SoilCreate se han usado en monitoreo de desplazamiento profundo a largo plazo en proyectos energeticos, excavaciones profundas y ferrocarriles urbanos. El muestreo automatizado a nivel de minutos conserva cambios que las mediciones manuales periodicas pueden pasar por alto.'],
  ['A standard grooved inclinometer casing. Each segment\'s spring-loaded wheels engage the casing\'s guide grooves, and the fixed wheels must be oriented toward the expected deformation direction. If a segment will not slide in during installation, the usual causes are a spring wheel that is not fully compressed or misalignment with the grooves — press the spring again and rotate the segment 90° to find the groove position.', 'Un casing ranurado estandar para inclinometro. Las ruedas con resorte de cada segmento encajan en las ranuras guia del casing, y las ruedas fijas deben orientarse hacia la direccion esperada de deformacion. Si un segmento no entra durante la instalacion, las causas habituales son una rueda con resorte no comprimida por completo o desalineacion con las ranuras; presione de nuevo el resorte y gire el segmento 90 grados para encontrar la ranura.'],
  ['Check remotely before dismantling anything on site: first the 4G SIM card (including balance), then the APN configuration, then the controller\'s 12 V DC supply. Note that a network outage alone does not lose data — each string buffers over a year of history in 16 GB of onboard storage and resumes uploading automatically when the connection recovers.', 'Revise de forma remota antes de desmontar cualquier elemento en campo: primero la tarjeta SIM 4G, incluido el saldo; despues la configuracion APN; y luego la alimentacion de 12 V DC del controlador. Una interrupcion de red no implica perdida de datos: cada cadena almacena mas de un ano de historial en 16 GB de memoria local y reanuda la carga automaticamente cuando vuelve la conexion.'],
  ['Persistent one-sided readings usually point to a fixed-wheel orientation installed the wrong way, not sensor drift. The remedy is to re-install the affected string with the correct orientation — which is exactly why orientation is treated as a hard checkpoint during installation: with the wrong orientation, all alarms based on that borehole lose their meaning.', 'Las lecturas persistentes hacia un solo lado suelen indicar que las ruedas fijas se instalaron con orientacion incorrecta, no deriva del sensor. La solucion es reinstalar la cadena afectada con la orientacion correcta. Por eso la orientacion se trata como un punto de control obligatorio: con orientacion incorrecta, todas las alarmas de ese sondeo pierden significado.'],
  ['After the controller registers on the cloud platform, engineers configure per-point thresholds — both rate-of-change and cumulative values. When a reading exceeds them, the platform pushes SMS alerts. Thresholds can be revised, but every change should carry a version record; without that audit trail, a post-event review of "why did the alarm not fire" cannot be traced. The platform supports separate accounts for owner, contractor, supervisor and third-party users.', 'Despues de que el controlador se registra en la plataforma en la nube, los ingenieros configuran umbrales por punto, tanto de velocidad de cambio como acumulados. Cuando una lectura los supera, la plataforma envia alertas SMS. Los umbrales pueden revisarse, pero cada cambio debe conservar un registro de version; sin esa trazabilidad, no se puede revisar despues por que una alarma no se activo. La plataforma admite cuentas separadas para propietario, contratista, supervisor y terceros.'],
  ['MEMS accelerometers use metal measuring elements that fatigue over time (S Liu et al 2020, J. Phys.: Conf. Ser. 1520 012009); even the best hold roughly 1×10⁻⁵ long-term stability and need periodic recalibration. SoilCreate\'s proprietary electrolytic-solution sensor reaches the 1×10⁻⁸ level — its drift is more than an order of magnitude smaller than the ADC\'s own error — and needs almost no recalibration. For monitoring of five years or longer, choose the electrolytic-solution option.', 'Los acelerometros MEMS usan elementos de medicion metalicos que se fatigan con el tiempo (S Liu et al 2020, J. Phys.: Conf. Ser. 1520 012009); incluso los mejores mantienen una estabilidad a largo plazo cercana a 1×10⁻⁵ y requieren recalibracion periodica. El sensor electrolitico propietario de SoilCreate alcanza el nivel 1×10⁻⁸; su deriva es mas de un orden de magnitud menor que el propio error del ADC y casi no requiere recalibracion. Para monitoreo de cinco anos o mas, elija la opcion electrolitica.'],
  ['Through the installation archive. As each segment goes in, its number, depth, fixed-wheel orientation and wire-rope lock state are recorded, and every borehole is delivered with an installation archive, a segment-number-to-depth table, an initial-values table and a remote-online certificate. Any remote anomaly is first matched against this archive to identify the exact segment and depth before deciding whether site maintenance is needed. Also note the two end cables are factory-fitted and waterproof-tested — never loosen them on site.', 'Mediante el archivo de instalacion. A medida que se instala cada segmento se registra su numero, profundidad, orientacion de ruedas fijas y estado de bloqueo del cable de acero. Cada sondeo se entrega con archivo de instalacion, tabla numero de segmento-profundidad, tabla de valores iniciales y certificado de conexion remota. Cualquier anomalia remota se contrasta primero con este archivo para identificar el segmento y la profundidad exactos antes de decidir si hace falta mantenimiento en campo. Los dos cables extremos vienen montados y probados contra agua en fabrica: nunca los afloje en campo.']
]

const flexibleResidualReplacements = [
  ['Array in deformed casing', 'Matriz dentro de casing deformado'],
  ['Single segment (magnified)', 'Segmento individual ampliado'],
  ['3D shape reconstruction', 'Reconstruccion de forma 3D'],
  ['Rigid tubes measure · joints bend', 'Los tubos rigidos miden · las juntas se flexionan'],
  ['Rigid segment · 3-axis MEMS · 0–360°', 'Segmento rigido · MEMS de 3 ejes · 0-360 grados'],
  ['硬管测量节段 · 三轴 MEMS · 0~360°', 'Segmento rigido de medicion · MEMS de 3 ejes · 0-360 grados'],
  ['Segment length = joint center to joint center · 0.3 / 0.5 / 1 m', 'Longitud de segmento = centro a centro de junta · 0.3 / 0.5 / 1 m'],
  ['单节长度＝软管中心到软管中心 · 0.3 / 0.5 / 1 m', 'Longitud de segmento = centro a centro de junta · 0.3 / 0.5 / 1 m'],
  ['Segment vectors chained head-to-tail rebuild the shape', 'Los vectores de los segmentos reconstruyen la forma de extremo a extremo'],
  ['扭转校正优于 0.5° · 每节实时温度记录', 'Correccion de torsion mejor que 0.5 grados · temperatura en tiempo real por segmento'],
  ['Each point = one sensing segment', 'Cada punto = un segmento sensor'],
  ['Profile rebuilt segment by segment — continuous, no blind spots', 'Perfil reconstruido segmento por segmento: continuo, sin puntos ciegos'],
  ['Initial survey (baseline)', 'Medicion inicial (linea base)'],
  ['Successive automated readings', 'Lecturas automaticas sucesivas'],
  ['Representative shape-array output: the displacement profile along a horizontally buried array, rebuilt segment by segment; successive automated readings trace the deformation as it develops. Axes are unitless for illustration.', 'Salida representativa de una matriz de forma: perfil de desplazamiento a lo largo de una matriz enterrada horizontalmente, reconstruido segmento por segmento; las lecturas automaticas sucesivas trazan la deformacion mientras se desarrolla. Los ejes son ilustrativos.'],
  ['Segment lengths of 0.3 m, 0.5 m or 1 m to match your measurement-density requirements, with sampling up to 10 kHz for dynamic events.', 'Longitudes de segmento de 0.3 m, 0.5 m o 1 m para ajustar la densidad de medicion, con muestreo de hasta 10 kHz para eventos dinamicos.'],
  ['Specification (SCIS-SAA-02)', 'Especificaciones (SCIS-SAA-02)'],
  ['Measurement dimensions', 'Dimensiones de medicion'],
  ['Measurement accuracy', 'Precision de medicion'],
  ['Displacement resolution', 'Resolucion de desplazamiento'],
  ['0.3 m / 0.5 m / 1 m options', 'Opciones de 0.3 m / 0.5 m / 1 m'],
  ['Up to 128 (AutoID auto-addressing)', 'Hasta 128 (direccionamiento automatico AutoID)'],
  ['RS-485 (Modbus RTU)', 'RS-485 (Modbus RTU)'],
  ['IP68, 3 MPa water pressure (tested to 4 MPa)', 'IP68, presion de agua 3 MPa (probado hasta 4 MPa)'],
  ['SoilCreate SCIS-SAA-02', 'SoilCreate SCIS-SAA-02'],
  ['Conventional Fixed-Length SAA', 'SAA convencional de longitud fija'],
  ['MEMS / high-end electrolytic-solution sensor', 'MEMS / sensor electrolitico de alta gama'],
  ['Segment-based field assembly; length adjusted on site', 'Ensamble por segmentos en campo; longitud ajustable en sitio'],
  ['Factory-defined length; adjustment depends on supplier', 'Longitud definida en fabrica; el ajuste depende del proveedor'],
  ['Designed for segment recovery and project-to-project redeployment', 'Disenado para recuperar segmentos y reutilizarlos entre proyectos'],
  ['Depends on installation method and product configuration', 'Depende del metodo de instalacion y la configuracion del producto'],
  ['Centered installation in inclinometer casing', 'Instalacion centrada en casing de inclinometro'],
  ['4 MPa standard; 8 MPa available by configuration', '4 MPa estandar; 8 MPa disponible segun configuracion'],
  ['Direct raw-data interface for system integration', 'Interfaz directa de datos brutos para integracion de sistemas'],
  ['Depends on the vendor software ecosystem', 'Depende del ecosistema de software del proveedor'],
  ['High-value project pricing with reusable hardware', 'Precio de alto valor con hardware reutilizable'],
  ['Imported-system pricing and service model', 'Precio y modelo de servicio de sistemas importados'],
  ['Lower transport, hoisting and on-site handling effort.', 'Menor esfuerzo de transporte, izaje y manipulacion en campo.'],
  ['World-leading accuracy with pricing designed for engineering deployment.', 'Alta precision con precio pensado para despliegue de ingenieria.'],
  ['Dismantle, inspect and redeploy the array after project completion.', 'Desmonte, inspeccione y reutilice la matriz al finalizar el proyecto.'],
  ['Vertical, horizontal and ring layouts from one product.', 'Disenos verticales, horizontales y en anillo con un solo producto.'],
  ['Deep displacement of foundation pits and slopes. Drops straight into the inclinometer casing — no guide wheels needed. The most common scenario.', 'Desplazamiento profundo en excavaciones y taludes. Se introduce directamente en el casing de inclinometro, sin ruedas guia. Es el escenario mas comun.'],
  ['Settlement of subgrades and rockfill dams — buried in a trench inside a PVC conduit, pulled in by wire rope from one end.', 'Asentamiento de subrasantes y presas de escollera: enterrada en una zanja dentro de conducto PVC y traccionada con cable de acero desde un extremo.'],
  ['Tunnel cross-section convergence — laid circumferentially along the wall or lining segments; the flexible structure naturally follows the curve.', 'Convergencia de secciones de tunel: instalada circunferencialmente sobre la pared o dovelas; la estructura flexible sigue naturalmente la curva.'],
  ['Segmented & recoverable', 'Segmentada y recuperable'],
  ['Built-in algorithm detects axial torsion → auto-computes azimuth → aligns to a unified coordinate system → correction accuracy better than 0.5°.', 'El algoritmo integrado detecta torsion axial, calcula el azimut y alinea todo en un sistema de coordenadas unificado, con precision de correccion mejor que 0.5 grados.'],
  ['Vertical — chained inside the casing', 'Vertical: encadenada dentro del casing'],
  ['Seal the casing bottom and fill the casing with clean water.', 'Selle el fondo del casing y llenelo con agua limpia.'],
  ['Connect the controller', 'Conecte el controlador'],
  ['The lead-out cable at the top of the array connects to the controller.', 'El cable de salida en la parte superior de la matriz se conecta al controlador.'],
  ['Lower the array into the casing from the top; slight bending is allowed at each flexible joint.', 'Baje la matriz desde la parte superior del casing; se permite una ligera flexion en cada junta.'],
  ['Fix the array at the top and fit a protective device on the casing mouth.', 'Fije la matriz en la parte superior y coloque un protector en la boca del casing.'],
  ['Casing twist self-corrects', 'La torsion del casing se corrige automaticamente'],
  ['If the casing twists during monitoring, the rotation it imparts to the array is corrected automatically by the torsion-correction algorithm.', 'Si el casing gira durante el monitoreo, la rotacion transmitida a la matriz se corrige automaticamente mediante el algoritmo de torsion.'],
  ['Horizontal — trench + PVC conduit', 'Horizontal: zanja + conducto PVC'],
  ['Ships as a kit: PVC conduit matched to the run, end caps and mouth fittings, traction wire rope and marker posts.', 'Se entrega como kit: conducto PVC ajustado al trazado, tapas, accesorios de boca, cable de traccion y postes de marca.'],
  ['Excavate the trench', 'Excave la zanja'],
  ['Trench bottom flat and level, length matched — avoid local dips.', 'Fondo de zanja plano y nivelado, longitud correcta; evite depresiones locales.'],
  ['Every PVC conduit seam must be sealed with PVC primer + cement — otherwise water gets in later.', 'Cada union del conducto PVC debe sellarse con primer y cemento PVC; de lo contrario entrara agua despues.'],
  ['Pull in — never push', 'Tire de la matriz; nunca la empuje'],
  ['Pull the array into the conduit with the wire rope from one end. Pushing destabilizes the flexible joints and damages the hinges.', 'Introduzca la matriz tirando con cable de acero desde un extremo. Empujarla desestabiliza las juntas flexibles y dana las bisagras.'],
  ['Check every bend radius', 'Revise cada radio de curvatura'],
  ['At any curve the bend radius must stay ≥ R', 'En cualquier curva el radio de curvatura debe mantenerse ≥ R'],
  ['(about 0.3 m); any section below the limit is re-laid.', '(aprox. 0.3 m); cualquier tramo por debajo del limite debe reinstalarse.'],
  ['Waterproof the lead-out end and seal the end caps.', 'Impermeabilice el extremo de salida y selle las tapas.'],
  ['Review the overall displacement-curve shape remotely every week.', 'Revise remotamente cada semana la forma general de la curva de desplazamiento.'],
  ['Temperature Comparison', 'Comparacion de temperatura'],
  ['Compare readings against same-period per-segment temperature records.', 'Compare las lecturas con los registros de temperatura por segmento del mismo periodo.'],
  ['Verify benchmark stability to separate true displacement from foundation movement.', 'Verifique la estabilidad de referencia para separar desplazamiento real de movimiento de la cimentacion.'],
  ['Metrology Spot Test', 'Prueba puntual metrologica'],
  ['Send for a metrology-institute spot calibration every year.', 'Envie una muestra a calibracion metrologica cada ano.'],
  ['Rigid sensing tubes alternate with flexible joints — the array folds flat for transport and recovery.', 'Los tubos sensores rigidos se alternan con juntas flexibles; la matriz se pliega para transporte y recuperacion.'],
  ['Ring installation around a tunnel section — the flexible array tracks convergence along the lining curve.', 'Instalacion en anillo alrededor de una seccion de tunel; la matriz flexible sigue la convergencia sobre la curva del revestimiento.'],
  ['Assembled array folded on its deployment stand, ready to pay out on site.', 'Matriz ensamblada y plegada en su soporte de despliegue, lista para instalar en campo.'],
  ['Recovered segments can be inspected and configured for a new project, allowing the same hardware investment to serve multiple deployments and reducing lifecycle cost with each reuse.', 'Los segmentos recuperados pueden inspeccionarse y configurarse para un nuevo proyecto, permitiendo que el mismo hardware sirva en multiples despliegues y reduzca el coste de ciclo de vida con cada reutilizacion.'],
  ['Modular assembly — installed by 2 people in 30 minutes.', 'Ensamble modular: instalado por 2 personas en 30 minutos.'],
  ['Automated acquisition, zero manual effort.', 'Adquisicion automatica, sin esfuerzo manual.'],
  ['Dismantled and recovered segment by segment.', 'Desmontada y recuperada segmento por segmento.'],
  ['Multi-Project Amortization', 'Amortizacion multiproyecto'],
  ['Hardware cost falls with each reuse.', 'El coste de hardware disminuye con cada reutilizacion.'],
  ['Real monitoring output: cumulative deep-displacement profiles — depth on the vertical axis, displacement on the horizontal; successive automated readings trace the deformation history.', 'Salida real de monitoreo: perfiles acumulados de desplazamiento profundo, profundidad en el eje vertical y desplazamiento en el horizontal; las lecturas automaticas sucesivas trazan el historial de deformacion.'],
  ['Two sensor types buried 20 cm apart in the same borehole.', 'Dos tipos de sensor instalados a 20 cm de distancia en el mismo sondeo.'],
  ['6+ months of continuous monitoring.', 'Mas de 6 meses de monitoreo continuo.'],
  ['A-axis trends matched closely; the two datasets mutually verified.', 'Las tendencias del eje A coincidieron estrechamente; ambos conjuntos de datos se verificaron mutuamente.'],
  ['In-Place Inclinometer (IPI)', 'Inclinometro fijo (IPI)'],
  ['Flexible joints, bendable', 'Juntas flexibles, estructura curvable'],
  ['Rigid rod, must stay straight', 'Varilla rigida, debe permanecer recta'],
  ['Measurement density', 'Densidad de medicion'],
  ['Continuous, no blind spots', 'Continua, sin puntos ciegos'],
  ['Discrete (1–3 m spacing)', 'Discreta (espaciado de 1-3 m)'],
  ['0–360°, hard to exceed range', '0-360 grados, dificil superar el rango'],
  ['Vertical / horizontal / ring', 'Vertical / horizontal / anillo'],
  ['Carbon fiber 0.12 kg/m (lighter)', 'Fibra de carbono 0.12 kg/m (mas ligera)'],
  ['Complex large deformation / settlement / convergence', 'Grandes deformaciones complejas / asentamiento / convergencia'],
  ['Small displacements in vertical deep boreholes', 'Pequenos desplazamientos en sondeos verticales profundos'],
  ['Monitoring a vertical deep borehole with small displacements?', 'Monitoreo de un sondeo vertical profundo con pequenos desplazamientos?'],
  ['Explore the In-Place Inclinometer →', 'Ver el inclinometro fijo IPI →'],
  ['From same-borehole validation to a tidal pattern no human survey could ever catch — each case proves a different capability.', 'Desde validacion en el mismo sondeo hasta patrones de marea imposibles de detectar manualmente: cada caso demuestra una capacidad distinta.'],
  ['Same-borehole · 2022', 'Mismo sondeo · 2022'],
  ['Shaoxing Metro Line 2 · Paojiang Lianghu Station', 'Metro de Shaoxing Linea 2 · Estacion Paojiang Lianghu'],
  ['Flexible and sliding inclinometers installed 20 cm apart in the same borehole. Six months of monitoring: A-axis trends matched closely — automation reliably replaces manual surveys.', 'Inclinometros flexible y deslizante instalados a 20 cm de distancia en el mismo sondeo. Seis meses de monitoreo: las tendencias del eje A coincidieron estrechamente; la automatizacion puede sustituir mediciones manuales.'],
  ['Alert validation · 2020', 'Validacion de alarma · 2020'],
  ['Suzhou Metro Line 5 · Jinchu Street Station', 'Metro de Suzhou Linea 5 · Estacion Jinchu Street'],
  ['Automated monitoring triggered a displacement-rate alert, catching sudden displacement from delayed strut installation — proof of high-frequency response to sudden conditions.', 'El monitoreo automatico activo una alarma por velocidad de desplazamiento y detecto un cambio repentino asociado a instalacion tardia de puntales.'],
  ['Tidal finding · 2023', 'Hallazgo de marea · 2023'],
  ['Suzhou Xiangcheng Foundation Pit', 'Excavacion profunda Suzhou Xiangcheng'],
  ['High-frequency sampling revealed twice-daily periodic fluctuation of the retaining structure — a tidal deformation pattern undetectable by manual surveys, linking groundwater level to structural deformation.', 'El muestreo de alta frecuencia revelo fluctuaciones periodicas dos veces al dia en la estructura de contencion, un patron de deformacion por marea no detectable con mediciones manuales.'],
  ['300 m borehole · 2022', 'Sondeo de 300 m · 2022'],
  ['Baihetan Hydropower Station · Ultra-Deep Borehole', 'Central hidroelectrica Baihetan · Sondeo ultraprofunddo'],
  ['High-precision monitoring in a 300 m-class ultra-deep borehole, operating stably long-term in harsh conditions — product reliability proven under extreme conditions.', 'Monitoreo de alta precision en un sondeo ultraprofunddo de clase 300 m, con operacion estable a largo plazo en condiciones severas.'],
  ['More deployments: Hangzhou Metro Line 3 · Qingdao Jiaozhou Bay Tunnel (65 units) · Shanghai Metro Line 18 · Nanning CNPC pipeline geohazard monitoring', 'Mas despliegues: Metro de Hangzhou Linea 3 · Tunel Qingdao Jiaozhou Bay (65 unidades) · Metro de Shanghai Linea 18 · Monitoreo geologico de ducto CNPC en Nanning'],
  ['Varies by configuration', 'Varia segun configuracion'],
  ['Segmented & recoverable', 'Segmentada y recuperable'],
  ['Choose the flexible array. The in-place inclinometer (IPI) is a rigid-rod string deployed mainly vertically, while the flexible array installs vertically, horizontally or in curved/ring layouts. For subgrade and rockfill-dam settlement it is trench-buried horizontally; for tunnel cross-section convergence it is laid circumferentially along the wall or lining segments. The rule works both ways: in a vertical deep borehole where small displacements dominate, the IPI is the better fit — and combining the two delivers the best results.', 'Elija la matriz flexible. El inclinometro fijo (IPI) es una cadena de varillas rigidas desplegada principalmente en vertical, mientras que la matriz flexible puede instalarse vertical, horizontalmente o en trazados curvos/anulares. Para asentamiento de subrasante y presas de escollera se entierra horizontalmente en zanja; para convergencia de secciones de tunel se coloca de forma circunferencial sobre el muro o los segmentos de revestimiento. La regla tambien funciona al reves: en un sondeo vertical profundo donde dominan pequenos desplazamientos, el IPI es mas adecuado; combinar ambos ofrece mejores resultados.'],
  ['No. The array drops straight into the casing with no guide wheels, and no casing guide grooves are needed. Forced centering inside the casing keeps the array tightly fitted against the casing wall.', 'No. La matriz se introduce directamente en el casing sin ruedas guia y no necesita ranuras guia. El centrado forzado dentro del casing mantiene la matriz ajustada contra la pared.'],
  ['Flexible does not mean "bend freely": at any curve the bend radius must stay at or above R', 'Flexible no significa "doblar libremente": en cualquier curva el radio de flexion debe mantenerse igual o superior a R'],
  [', about 0.3 m. Bending below that limit sharply shortens the array\'s design life, so any non-conforming section is re-laid rather than delivered.', ', aproximadamente 0.3 m. Doblar por debajo de ese limite reduce drasticamente la vida util de la matriz, por lo que cualquier tramo no conforme debe reinstalarse.'],
  ['Never. Pushing destabilizes the flexible joints and can damage the hinges. The array is always pulled into the PVC conduit with a wire rope from the far end.', 'Nunca. Empujar desestabiliza las juntas flexibles y puede danar las bisagras. La matriz siempre se tira dentro del conducto de PVC mediante un cable de acero desde el extremo opuesto.'],
  ['A built-in algorithm detects axial torsion, computes the azimuth and aligns all segments to a unified coordinate system, with correction accuracy better than 0.5°. In vertical installs, twist imparted by the casing during monitoring is corrected automatically.', 'Un algoritmo integrado detecta la torsion axial, calcula el acimut y alinea todos los segmentos en un sistema de coordenadas unificado, con precision de correccion mejor que 0.5 grados. En instalaciones verticales, la torsion inducida por el casing durante el monitoreo se corrige automaticamente.'],
  ['Remotely, on the cloud platform: check the overall curve shape weekly, compare same-period temperature records monthly, verify benchmark stability quarterly, and send for a metrology-institute spot test yearly. A single drifting segment can be located remotely and just that segment lifted; data-uplink interruptions (controller power, 4G link, SIM) are diagnosed remotely first.', 'De forma remota, en la plataforma en la nube: revise semanalmente la forma general de la curva, compare mensualmente registros de temperatura del mismo periodo, verifique trimestralmente la estabilidad del punto de referencia y envie una muestra anual a prueba metrologica. Un segmento con deriva puede localizarse remotamente y levantar solo ese segmento; las interrupciones de enlace de datos (alimentacion del controlador, enlace 4G, SIM) se diagnostican primero de forma remota.'],
  ['A sudden jump across the entire curve indicates a broken flexible joint: the full array is lifted and re-laid. Long-term slow drift usually means the trench itself is settling and dragging the array — reconcile readings against the benchmark point to separate true displacement from foundation movement. A drift surge on one single segment points instead to sensor damage or water ingress in that segment; it is located remotely so only that segment needs lifting.', 'Un salto repentino en toda la curva indica una junta flexible rota: se levanta y reinstala toda la matriz. Una deriva lenta a largo plazo suele significar que la zanja se esta asentando y arrastra la matriz; compare las lecturas con el punto de referencia para separar desplazamiento real de movimiento de cimentacion. Un aumento de deriva en un solo segmento apunta a dano del sensor o entrada de agua; se localiza remotamente para levantar solo ese segmento.']
]

export const spanishProductPageHtml = {
  'sliding-inclinometer': applyReplacements(rasberProductPages['sliding-inclinometer'], [
    ...commonReplacements,
    ...slidingReplacements
  ]),
  'in-place-inclinometer': applyReplacements(rasberProductPages['in-place-inclinometer'], [
    ...commonReplacements,
    ...ipiExtendedReplacements,
    ...ipiResidualReplacements,
    ...ipiReplacements
  ]),
  'flexible-inclinometer': applyReplacements(rasberProductPages['flexible-inclinometer'], [
    ...commonReplacements,
    ...flexibleExtendedReplacements,
    ...flexibleResidualReplacements,
    ...flexibleReplacements
  ])
}
