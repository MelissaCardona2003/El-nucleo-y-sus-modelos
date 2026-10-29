// Genera «Guion - El nucleo y sus modelos.docx»
// Uso:  node build/guion-nucleo.js
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
} = require("docx");

const D1 = require("./guion-datos-1");
const D2 = require("./guion-datos-2");
const SLIDES = [...D1, ...D2];
const ANEXOS = D2.anexos;

// El tiempo de cada diapositiva NO se fija a mano: se reparte en proporción a las
// palabras que hay que decir en voz alta, de modo que el plan de tiempos sea
// coherente con el guion real y el total sean exactamente 30 minutos.
const OBJETIVO = 1800; // segundos
const nPalabras = (s) => s.guion.join(" ").split(/\s+/).filter(Boolean).length;
const W_TOTAL = SLIDES.reduce((a, s) => a + nPalabras(s), 0);
SLIDES.forEach((s) => { s.s = Math.max(25, Math.round((OBJETIVO * nPalabras(s)) / W_TOTAL / 5) * 5); });
// la diferencia por redondeo la absorbe la diapositiva más larga
const deriva = OBJETIVO - SLIDES.reduce((a, s) => a + s.s, 0);
SLIDES.slice().sort((a, b) => nPalabras(b) - nPalabras(a))[0].s += deriva;
const RITMO = Math.round(W_TOTAL / (OBJETIVO / 60));

const TITULO = "Guion – El núcleo y sus modelos";
const SUBTITULO = "Capítulos 25 y 26 de Acosta, Cowan y Graham, Curso de Física Moderna";
const ESTUDIANTE = "Melissa Cardona Navarro";
const DOCENTE = "Jorge Navarro";
const FECHA = "29 de noviembre de 2026";
const CURSO = "Historia y Epistemología de la Física (21818) · 4 créditos";
const PROGRAMA = "Física · Facultad de Ciencias Básicas · Universidad del Atlántico";

const GRIS = "F2F4F8";
const NARANJA = "C05A22";
const AZUL = "26386F";

// ---------- helpers ----------
const p = (text, o = {}) =>
  new Paragraph({
    spacing: { after: o.after ?? 120, line: o.line ?? 300, before: o.before ?? 0 },
    alignment: o.align ?? AlignmentType.LEFT,
    indent: o.indent,
    children: [new TextRun({ text, bold: o.bold, italics: o.italics, size: o.size ?? 21, color: o.color, font: o.font })],
  });

// párrafo con una etiqueta en negrita y el resto normal
const pLabel = (label, text, o = {}) =>
  new Paragraph({
    spacing: { after: o.after ?? 120, line: 300, before: o.before ?? 0 },
    alignment: AlignmentType.LEFT,
    children: [
      new TextRun({ text: label, bold: true, size: o.size ?? 21, color: o.color }),
      new TextRun({ text: text, size: o.size ?? 21 }),
    ],
  });

const h1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 160 },
    children: [new TextRun({ text, bold: true, size: 28, color: AZUL })],
  });

const h2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, bold: true, size: 24, color: AZUL })],
  });

const cell = (text, o = {}) =>
  new TableCell({
    width: { size: o.w ?? 25, type: WidthType.PERCENTAGE },
    shading: o.head ? { type: ShadingType.CLEAR, fill: GRIS } : undefined,
    margins: { top: 60, bottom: 60, left: 110, right: 110 },
    children: [
      new Paragraph({
        spacing: { after: 0, line: 260 },
        alignment: o.align ?? AlignmentType.LEFT,
        children: [new TextRun({ text: String(text), bold: o.head || o.bold, size: 19 })],
      }),
    ],
  });

const BORDES = {
  top:    { style: BorderStyle.SINGLE, size: 2, color: "C9D0DD" },
  bottom: { style: BorderStyle.SINGLE, size: 2, color: "C9D0DD" },
  left:   { style: BorderStyle.SINGLE, size: 2, color: "C9D0DD" },
  right:  { style: BorderStyle.SINGLE, size: 2, color: "C9D0DD" },
  insideHorizontal: { style: BorderStyle.SINGLE, size: 2, color: "E3E8F0" },
  insideVertical:   { style: BorderStyle.SINGLE, size: 2, color: "E3E8F0" },
};

const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

// ---------- cuerpo ----------
const kids = [];

// portada
kids.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 80 },
  children: [new TextRun({ text: TITULO, bold: true, size: 36, color: AZUL })],
}));
kids.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 260 },
  children: [new TextRun({ text: SUBTITULO, italics: true, size: 22, color: NARANJA })],
}));

const total = SLIDES.reduce((a, s) => a + s.s, 0);
const inter = SLIDES.filter((s) => s.i).map((s) => s.n);
[
  ["Estudiante: ", ESTUDIANTE],
  ["Docente: ", DOCENTE],
  ["Fecha de exposición: ", FECHA],
  ["Curso: ", CURSO],
  ["Programa: ", PROGRAMA],
  ["Fuente: ", "ACOSTA, Virgilio; COWAN, Clyde L. y GRAHAM, B. J. Curso de Física Moderna. Cuarta parte: El núcleo. Capítulo 25 (pp. 277-285) y capítulo 26 (pp. 286-297)."],
  ["Duración: ", `${SLIDES.length} diapositivas · ${mmss(total)} minutos a un ritmo de lectura de ${RITMO} palabras por minuto (versión corta: unos 24 minutos)`],
  ["Ejercicios resueltos: ", "25-9 y 25-10 del capítulo 25 · 26-9 y 26-10 del capítulo 26"],
  ["Diapositivas interactivas: ", inter.join(", ")],
].forEach(([k, v]) => kids.push(pLabel(k, v, { after: 60 })));

kids.push(h2("Cómo usar este guion"));
[
  "En pantalla — qué se está viendo en esa diapositiva.",
  "Guion — lo que dices, redactado para leerse en voz alta. Los corchetes marcan acciones, no se leen.",
  "Si preguntan — respuesta breve preparada para la pregunta más probable de esa diapositiva.",
  "Nota — instrucción para ti: qué clic hacer, qué recortar si vas con el tiempo justo.",
].forEach((t) => kids.push(p("· " + t, { after: 60, indent: { left: 220 } })));
kids.push(p(
  "Atajos durante la exposición: flechas ← → o la barra espaciadora para avanzar, tecla T para cambiar al tema oscuro si el salón tiene mucha luz, tecla F para pantalla completa, tecla ? para ver la ayuda. También puedes abrir la presentación directamente en oscuro añadiendo ?theme=dark a la dirección.",
  { before: 120 }
));

// plan de tiempos
kids.push(h1("Plan de tiempos"));
let acc = 0;
const filas = [
  new TableRow({ children: [
    cell("#", { head: true, w: 7, align: AlignmentType.CENTER }),
    cell("Diapositiva", { head: true, w: 63 }),
    cell("Tiempo", { head: true, w: 15, align: AlignmentType.RIGHT }),
    cell("Acumulado", { head: true, w: 15, align: AlignmentType.RIGHT }),
  ]}),
];
SLIDES.forEach((s) => {
  acc += s.s;
  filas.push(new TableRow({ children: [
    cell(s.n, { w: 7, align: AlignmentType.CENTER }),
    cell(s.t + (s.i ? "  (interactiva)" : ""), { w: 63 }),
    cell(s.s + " s", { w: 15, align: AlignmentType.RIGHT }),
    cell(mmss(acc), { w: 15, align: AlignmentType.RIGHT }),
  ]}));
});
kids.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, borders: BORDES, rows: filas }));
kids.push(p("Sobre el ritmo — léelo antes de ensayar", { bold: true, before: 220, after: 80, color: NARANJA }));
kids.push(p(
  `Este guion tiene ${W_TOTAL.toLocaleString("es")} palabras habladas. El reparto de tiempos de la tabla de arriba supone un ritmo de ${RITMO} palabras por minuto, que es un ritmo ágil: el de alguien que lleva el tema ensayado y no se detiene. Si lees con pausas largas te irás a 36 o 37 minutos, así que ensaya con cronómetro.`,
  { after: 100 }
));
kids.push(p(
  "Cronométrate en el primer ensayo completo. Si te pasas de 32 minutos, recorta en este orden, que es de menos a más importante:",
  { after: 90 }
));
[
  "1. Diapositiva 29 (magnetón nuclear): quédate con los dos primeros párrafos. Ahorras ~25 s.",
  "2. Diapositiva 2 (hoja de ruta): resúmela en una frase. Ahorras ~20 s.",
  "3. Diapositiva 28 (spin nuclear): salta el ejemplo del calcio-43. Ahorras ~20 s.",
  "4. Diapositiva 25 (curva de estabilidad): abre un solo ejemplo en vez de tres. Ahorras ~20 s.",
  "5. Diapositiva 40 (Bartlett y el llenado de capas): resúmela en una frase. Ahorras ~35 s.",
  "6. Diapositivas 21, 22 y 43 (ejercicios): abre solo los pasos que indica la Nota de cada uno, no los siete. Ahorras ~60 s en total.",
  "7. Diapositivas 13 y 36 (la figura 25-2 y la figura 26-7): se pueden resumir en una frase cada una. Ahorras ~45 s.",
].forEach((t) => kids.push(p(t, { after: 50, indent: { left: 220 } })));
kids.push(p(
  "Con esos recortes la exposición baja a unos 24 minutos. Lo que NO se recorta nunca: las diapositivas 17 y 18 (energía de amarre, de las que dependen los ejercicios), la 32 (las tres pruebas), la 42 (los dos modelos, que es la conclusión epistemológica) y la 44 (el ejercicio 26-10, que es el cierre que amarra los dos capítulos). Y recuerda que todo lo que recortes del guion sigue estando escrito en la diapositiva: nadie va a notar que no lo dijiste.",
  { before: 110, italics: true }
));

// una sección por diapositiva
SLIDES.forEach((s) => {
  kids.push(h1(`Diapositiva ${s.n} · ${s.t}`));
  kids.push(p(`Tiempo sugerido: ${s.s} s${s.i ? "   ·   Diapositiva interactiva" : ""}`,
    { italics: true, color: NARANJA, after: 140 }));
  kids.push(pLabel("En pantalla. ", s.pantalla, { after: 160 }));
  kids.push(p("Guion", { bold: true, color: AZUL, after: 100 }));
  s.guion.forEach((g) => kids.push(p(g, { after: 130 })));
  if (s.preguntan) kids.push(pLabel("Si preguntan: ", s.preguntan, { before: 80, after: 100, color: NARANJA }));
  if (s.nota) kids.push(pLabel("Nota: ", s.nota, { before: 60, color: NARANJA }));
});

// anexos
kids.push(h1("Anexo 1 · Preguntas probables y respuestas de apoyo"));
ANEXOS.preguntas.forEach(([q, a]) => {
  kids.push(p(q, { bold: true, after: 60, before: 140 }));
  kids.push(p(a, { after: 60 }));
});

kids.push(h1("Anexo 2 · Glosario mínimo"));
ANEXOS.glosario.forEach(([k, v]) => kids.push(pLabel(k + ". ", v, { after: 90 })));

kids.push(h1("Anexo 3 · Fuentes"));
kids.push(p("Fuente principal", { bold: true, after: 80 }));
kids.push(p("— ACOSTA, Virgilio; COWAN, Clyde L. y GRAHAM, B. J. Curso de Física Moderna. Harla, México. Capítulo 25, «El núcleo», pp. 277-285, y capítulo 26, «Modelos del núcleo», pp. 286-297.", { after: 140 }));
kids.push(p("Lectura recomendada por el propio libro al final de los capítulos 25 y 26", { bold: true, before: 120, after: 80 }));
[
  "— BETHE, Hans A. «¿Qué mantiene unido al núcleo?» Scientific American, septiembre de 1953.",
  "— MAYER, Maria G. «Sobre las capas cerradas de los núcleos». Physical Review 75, 1894 (1949).",
  "— MAYER, Maria G. «La estructura del núcleo». Scientific American, marzo de 1951.",
  "— BARTLETT, J. H. «Estructura nuclear». Nature 130, 165 (1932).",
  "— FLOWERS, B. H. «El modelo nuclear de capas». Progresos en la física nuclear, vol. II. Academic, Nueva York, 1952.",
  "— PEIERLS, R. E. «Modelos del núcleo». Scientific American, enero de 1959.",
  "— WEISSKOPF, Victor F. y ROSENBAUM, E. P. «Un modelo del núcleo». Scientific American, diciembre de 1955.",
  "— MARSHAK, R. E. «La fuerza nuclear». Scientific American, marzo de 1960.",
  "— CHEW, G. F.; GELL-MANN, M. y ROSENFELD, A. R. «Partículas que interaccionan fuertemente». Scientific American, febrero de 1964.",
  "— ALONSO, M. y FINN, E. J. Física fundamental para la Universidad, vol. III. Addison-Wesley, Reading, Mass., 1968.",
  "— ENGE, H. Introducción a la física nuclear. Addison-Wesley, Reading, Mass., 1966.",
].forEach((t) => kids.push(p(t, { after: 60 })));

kids.push(p("Imágenes", { bold: true, before: 160, after: 80 }));
kids.push(p("Las figuras 25-1, 25-2, 26-1, 26-3, 26-4, 26-5 y las tablas 26-2 y 26-3 están recortadas del propio libro y se usan con fines docentes. Las figuras 25-1, 25-2, 26-2, 26-3, 26-6 y 26-7 se han redibujado además dentro de la presentación para que sean legibles en proyección e interactivas. Los retratos de Hideki Yukawa, María Goeppert-Mayer, James Chadwick y Carl Friedrich von Weizsäcker, la carta de núclidos, la curva de energía de amarre, el esquema de capas y las figuras de la gota líquida y de la fisión provienen de Wikimedia Commons; la autoría y la licencia de cada una están recogidas en nucleo/img/CREDITOS.json y en el README del repositorio.", { after: 60 }));

// ---------- salida ----------
const doc = new Document({
  creator: "Programa de Física · Universidad del Atlántico",
  title: TITULO,
  description: "Guion palabra por palabra de la exposición sobre los capítulos 25 y 26 de Acosta, Cowan y Graham",
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1100, bottom: 1100, left: 1200, right: 1200 } } },
    children: kids,
  }],
});

const out = path.join(__dirname, "..", "Guion - El nucleo y sus modelos.docx");
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(out, buf);
  const palabras = SLIDES.reduce((a, s) => a + s.guion.join(" ").split(/\s+/).length, 0);
  console.log("escrito:", out);
  console.log(`${SLIDES.length} diapositivas · ${mmss(total)} · ${palabras} palabras de guion hablado`);
  console.log(`ritmo medio: ${Math.round(palabras / (total / 60))} palabras por minuto`);
});
