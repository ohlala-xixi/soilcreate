import { promises as fs } from 'node:fs'
import path from 'node:path'

const outputDir = path.resolve('docs/public/specs')
await fs.mkdir(outputDir, { recursive: true })

const escapePdfText = (value) => value.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')

const buildPdf = (title, lines) => {
  const contentLines = [
    'BT',
    '/F1 24 Tf',
    '72 770 Td',
    `(${escapePdfText(title)}) Tj`,
    '/F1 11 Tf'
  ]

  let offset = 0
  for (const line of lines) {
    contentLines.push(`1 0 0 1 72 ${730 - offset} Tm`)
    contentLines.push(`(${escapePdfText(line)}) Tj`)
    offset += 18
  }
  contentLines.push('ET')

  const content = contentLines.join('\n')

  const objects = [
    '1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n',
    '2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n',
    '3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >> endobj\n',
    '4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj\n',
    `5 0 obj << /Length ${Buffer.byteLength(content, 'utf8')} >> stream\n${content}\nendstream endobj\n`
  ]

  const chunks = [Buffer.from('%PDF-1.4\n', 'utf8')]
  const offsets = [0]
  let currentOffset = Buffer.byteLength('%PDF-1.4\n', 'utf8')

  for (const object of objects) {
    chunks.push(Buffer.from(object, 'utf8'))
    offsets.push(currentOffset)
    currentOffset += Buffer.byteLength(object, 'utf8')
  }

  const xrefStart = currentOffset
  const xref = [
    'xref',
    '0 6',
    '0000000000 65535 f ',
    ...offsets.slice(1).map((offsetValue) => `${String(offsetValue).padStart(10, '0')} 00000 n `)
  ].join('\n')

  const trailer = [
    'trailer << /Size 6 /Root 1 0 R >>',
    'startxref',
    String(xrefStart),
    '%%EOF'
  ].join('\n')

  return Buffer.concat([
    ...chunks,
    Buffer.from(`${xref}\n${trailer}\n`, 'utf8')
  ])
}

const files = [
  {
    file: 'inclinometer-sensor-spec.pdf',
    title: 'Inclinometer Sensor Spec Sheet',
    lines: [
      'Use case: slope and structure movement monitoring',
      'Application: civil works and infrastructure projects',
      'Focus: field deployment and project documentation',
      'Document status: procurement ready'
    ]
  },
  {
    file: 'piezometer-sensor-spec.pdf',
    title: 'Piezometer Sensor Spec Sheet',
    lines: [
      'Use case: pressure and groundwater monitoring',
      'Application: foundations, dams, and earthworks',
      'Focus: repeat project deployment',
      'Document status: procurement ready'
    ]
  }
]

for (const entry of files) {
  const pdf = buildPdf(entry.title, entry.lines)
  await fs.writeFile(path.join(outputDir, entry.file), pdf)
}
