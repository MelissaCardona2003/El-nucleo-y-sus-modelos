// Guion · El núcleo y sus modelos — diapositivas 14 a 25

module.exports = [
{
  n: 14, t: "La estabilidad, en números", s: 70, i: true,
  pantalla: "A la izquierda, la tabla 26-1 con los 272 núclidos estables y la explicación de por qué se dobla la curva. A la derecha, la reconstrucción interactiva de la figura 26-2, con tres ejemplos que se pueden resaltar.",
  guion: [
    "Seguimos en 26-1, con un dato muy revelador.",
    "La tabla 26-1 clasifica los 272 núclidos estables de la naturaleza según si tienen número par o non de protones y de neutrones. Miren el reparto: par-par, ciento sesenta. Par-non, cincuenta y seis. Non-par, cincuenta y dos. Y non-non, cuatro. Solamente cuatro.",
    "La combinación par-par es evidentemente la preferida por la naturaleza; la non-non sólo aparece en los elementos ligeros. Guarden el dato: en la diapositiva 18 verán que la fórmula de Weizsäcker tiene un término entero dedicado a recogerlo.",
    "[Clic en oxígeno-16] Ahora la curva de estabilidad, la figura 26-2: el número neutrónico frente al protónico. Para Z menor que veinte la línea es recta, con N igual a Z.",
    "[Clic en calcio-48] Para Z mayor que veinte la curva se dobla hacia N mayor que Z: el calcio-48 ya tiene veinte protones y veintiocho neutrones.",
    "[Clic en protactinio-232] Y para Z grandes la tendencia es más pronunciada: el protactinio-232 tiene noventa y un protones y ciento cuarenta y un neutrones. Cincuenta de más.",
    "¿Por qué? El libro lo dice en una frase: para grandes valores de Z la repulsión de Coulomb se vuelve importante, y el número de neutrones debe ser mayor para compensarla. Los neutrones aportan fuerza atractiva sin aportar repulsión eléctrica."
  ],
  preguntan: "¿Y los núcleos que están fuera de esa franja? Son inestables: se desintegran hasta caer dentro de ella. Esa franja es el valle de estabilidad, la banda negra de la carta de núclidos de la portada.",
  nota: "Haz clic en los tres ejemplos; las líneas punteadas hacen el argumento visible. Si vas justa, abre solo el calcio-48."
},
{
  n: 15, t: "Momento angular de spin", s: 70,
  pantalla: "A la izquierda, el spin de un nucleón suelto, la cuantización espacial y el spin nuclear. A la derecha, la figura 26-3 del libro, las orientaciones permitidas y el ejemplo del calcio-43.",
  guion: [
    "Sección 26-2. El protón y el neutrón, igual que el electrón, tienen un spin intrínseco. El momento angular de spin es la ecuación 26-6: raíz de I por I más uno, por h barra, con I igual a un medio. Sustituyendo, vale raíz de tres sobre dos, por h barra.",
    "En presencia de un campo magnético externo está cuantizado espacialmente: tomando el eje z en la dirección del campo, sólo tiene las componentes más y menos un medio de h barra. Dos orientaciones, ni una más. Eso dibuja la figura 26-3.",
    "Además del spin, los nucleones tienen momento angular orbital porque se mueven. El momento resultante del núcleo se obtiene sumando los orbitales y los de spin de todos ellos: es la ecuación 26-8, con un número cuántico nuevo, I sub N, el spin nuclear.",
    "Puede valer cero, uno, dos… o semienteros. Y la regla de las orientaciones permitidas es que hay dos I sub N más uno.",
    "El ejemplo del libro es el calcio-43, con spin siete medios: hay ocho orientaciones posibles en un campo magnético aplicado, desde más siete medios hasta menos siete medios de h barra."
  ],
  preguntan: "¿El spin nuclear es la suma simple de los spines de los nucleones? No: es la suma vectorial de los momentos orbitales y de spin de todos ellos, y por eso puede dar cero aunque haya muchos nucleones girando. Lo vemos en la diapositiva 22.",
  nota: "No te pierdas en las fórmulas. Lo que tiene que quedar es: el núcleo gira, y solo puede apuntar a un número finito de direcciones, que es 2·I_N + 1."
},
{
  n: 16, t: "El magnetón nuclear y el misterio del neutrón", s: 60,
  pantalla: "A la izquierda, del magnetón de Bohr al magnetón nuclear, las dos componentes observables y las dos cosas que el libro reconoce no entender. A la derecha, la tabla 26-2 completa del libro.",
  guion: [
    "Seguimos en 26-2. El electrón tiene asociado un momento dipolar magnético igual al magnetón de Bohr. De forma similar, un nucleón tiene un magnetón nuclear, ecuación 26-10: e h barra sobre dos veces la masa del protón.",
    "Y como el protón es 1836 veces más pesado, el magnetón nuclear es 1836 veces menor que el de Bohr. Retengan ese factor: es la primera prueba de la diapositiva siguiente.",
    "Experimentalmente, las componentes observables son más 2,79 magnetones nucleares para el protón y menos 1,91 para el neutrón.",
    "Y aquí el libro reconoce dos cosas que no entiende: que estos valores no están bien comprendidos teóricamente y, cito, que «es especialmente difícil entender cómo el neutrón, que es una partícula neutra, puede tener momento magnético». Una partícula sin carga que se comporta como un imán.",
    "Miren la tabla 26-2 y fíjense en el patrón: el helio-4, el carbono-12, el oxígeno-16, el calcio-40, el plomo-208 —todos con Z y N pares— tienen spin cero y momento cero. En la diapositiva 22 veremos por qué."
  ],
  preguntan: "¿Y hoy se sabe por qué el neutrón tiene momento magnético? Sí: porque no es elemental, está formado por quarks con cargas fraccionarias cuya suma es cero pero cuya distribución produce un momento neto. Eso es muy posterior a este libro.",
  nota: "La honestidad del libro al reconocer lo que no entiende es un buen comentario epistemológico. Si vas con prisa, esta diapositiva es la primera que se puede recortar."
},
{
  n: 17, t: "¿Electrones en el núcleo?", s: 85, i: true,
  pantalla: "Arriba, lo que se creía hasta 1931 y lo que cambió en 1932. En el centro, tres tarjetas con las tres pruebas, que se despliegan al hacer clic. Abajo, la figura 26-4 del libro y el puente con el ejercicio 26-9.",
  guion: [
    "Sección 26-3, y es mi diapositiva favorita, porque es historia de la ciencia en vivo.",
    "Lo sorprendente es que hasta 1931 se creyó generalmente que los electrones sí existían en el núcleo, y que la carga neta positiva se debía a un exceso de protones sobre electrones. Se suponía, por ejemplo, que el núcleo de deuterio constaba de dos protones y un electrón nuclear.",
    "Pero al descubrir Chadwick el neutrón en 1932 se propuso una teoría nueva que negaba esos electrones nucleares. Desde entonces se han hecho varios experimentos para verificarlo; el libro da tres.",
    "[Clic prueba 1] Si hubiera electrones, el momento magnético del núcleo sería del orden del magnetón de Bohr. Pero la evidencia indica que es menor por un factor de alrededor de mil. Ahí está el 1836 de hace un momento.",
    "[Clic prueba 2] El núcleo de deuterio tiene spin más uno, un valor entero. La figura 26-4 muestra que cualquier combinación permitida de los spines de los electrones daría un valor semientero, en contradicción con la evidencia. Sin electrones salen cero y uno, que es lo que se mide.",
    "[Clic prueba 3] Y la tercera, la más elegante. El núcleo mide unos diez a la menos catorce metros, y del principio de incertidumbre sale una energía cinética de veinte millones de electrón-volts para un electrón confinado ahí. Pero los electrones de los átomos inestables tienen energías de solamente varios electrón-volts. Contradicción frontal.",
    "Tres caminos independientes, la misma conclusión. Y el ejercicio 26-9 consiste en hacer esta tercera cuenta al revés."
  ],
  preguntan: "Si no hay electrones en el núcleo, ¿de dónde sale el electrón de la desintegración beta? Se crea en el momento de la desintegración, cuando un neutrón se convierte en protón. No estaba guardado ahí dentro. Ese es justamente el punto.",
  nota: "Abre las tres tarjetas con un clic cada una. La tercera enlaza con el ejercicio 26-9: señálalo explícitamente antes de pasar."
},
{
  n: 18, t: "El modelo de la gota líquida", s: 65,
  pantalla: "A la izquierda, por qué hacen falta modelos, la analogía con el líquido y la figura de la gota deformándose hasta partirse. A la derecha, la fórmula completa de Weizsäcker y la tabla de la constante delta.",
  guion: [
    "Sección 26-4, y empieza con una frase que es puro contenido epistemológico: «Puesto que ninguna teoría completa da cuenta de todas las propiedades nucleares, se han desarrollado varios modelos del núcleo para describir diferentes propiedades nucleares».",
    "El primero es el de la gota líquida. ¿Por qué una gota? Porque en un líquido las energías de ligadura de dos átomos en una molécula son independientes de los demás átomos, y eso es similar al efecto de saturación de la diapositiva 6: cada partícula sólo interactúa con sus vecinas inmediatas.",
    "Por eso el núcleo se comporta como un fluido: se deforma, se estira y, si se estira demasiado, se parte. Eso que ven abajo es la fisión vista por este modelo.",
    "En 1935 Carl Friedrich von Weizsäcker propuso esta fórmula semiempírica para la energía de amarre, la ecuación 26-12: cinco términos y cuatro constantes, a igual a 15,8; b, 17,8; c, 0,71; y d, 23,7.",
    "Y una quinta, delta, que vale 34 si Z y N son ambos pares o ambos nones, y cero en los casos mixtos. Comparen esa tabla con la 26-1: es la misma preferencia por los núcleos par-par, metida dentro de la fórmula."
  ],
  preguntan: "¿Qué quiere decir «semiempírica»? Que no se deduce enteramente de una teoría. La forma de cada término tiene justificación física, pero los cuatro coeficientes se determinan ajustando la fórmula a las masas medidas en el laboratorio.",
  nota: "La frase de apertura justifica todo el capítulo 26. No la saltes."
},
{
  n: 19, t: "La fórmula, término a término", s: 75, i: true,
  pantalla: "A la izquierda, los cinco términos de la fórmula en cinco tarjetas: el que suma en verde, los que restan en rojo. A la derecha, la figura 26-5 del libro y una calculadora interactiva con cuatro núclidos.",
  guion: [
    "Vamos término por término. De los cinco, uno suma y cuatro restan.",
    "El volumétrico, a por A: cuantos más nucleones, más difícil es removerlos individualmente. La energía de amarre es proporcional al número total de nucleones, igual que el calor de vaporización lo es a la masa del líquido. Es el único positivo.",
    "El superficial, b por A a dos tercios: los nucleones de la superficie no están completamente rodeados, así que están menos ligados. Es similar a la tensión superficial, y como reduce la energía de amarre aparece como negativo.",
    "La repulsión de Coulomb: cada carga repele a todas las demás, así que la energía va con el número de parejas, Z por Z menos uno partido por dos. Eso dibuja la figura 26-5: tres protones dan tres parejas, cuatro dan seis. Y como va con el inverso de la distancia, se sustituye el radio por r cero A a un tercio. Destructivo, luego negativo.",
    "El de asimetría: la máxima estabilidad ocurre cuando N es igual a Z, y cualquier desviación la decrementa. También negativo.",
    "Y el de apareamiento, puramente correctivo: se añade si A es par; si es non, no hay que corregir.",
    "[Clic en los núclidos] Aquí están los cinco términos para cuatro núcleos. [Clic en oxígeno-16, luego plutonio-239] Fíjense cómo cambian los pesos relativos: eso es lo que pide el ejercicio 26-10."
  ],
  preguntan: "¿Por qué el término de Coulomb lleva Z por Z menos uno y no Z al cuadrado? Porque un protón no se repele a sí mismo. El número de parejas distintas de Z protones es Z(Z−1)/2, que es justo lo que muestra la figura 26-5.",
  nota: "Si vas justa, explica bien el volumétrico, el superficial y el de Coulomb —los tres del ejercicio 26-10— y resume los otros dos en una frase cada uno."
},
{
  n: 20, t: "Energía de amarre por nucleón", s: 70, i: true,
  pantalla: "Reconstrucción interactiva de la figura 26-6: la curva BE/A frente al número másico, con los núclidos que el libro etiqueta. El conmutador superpone la flecha de fusión o la de fisión.",
  guion: [
    "Si dividimos la ecuación 26-12 entre A obtenemos la energía de amarre por nucleón: la curva más importante de la física nuclear, la figura 26-6.",
    "[Conmutador «la curva»] Dice el libro: con excepción de unas pocas irregularidades —el helio-4, el carbono-12 y el oxígeno-16— la curva es relativamente suave; se eleva agudamente para pequeños valores de A, y para A mayor o igual que treinta está cerca de ocho MeV por nucleón.",
    "Y tiene un máximo alrededor del hierro-56, con unos 8,8: el núcleo más ligado que existe. Todo núcleo quiere acercarse a ese máximo, y tiene dos maneras.",
    "[Conmutador «fusión»] Si es ligero, se fusiona: el producto está más ligado que los reactivos y la diferencia se libera como energía. Es lo que ocurre en las estrellas.",
    "[Conmutador «fisión»] Y si es pesado, se parte, y también sube en la curva. Aquí el libro resume el éxito del modelo: «El modelo de la gota líquida tiene éxito al explicar la división del núcleo en dos o más partes, cuando ocurre la fisión nuclear».",
    "Pero cierra la sección así: «el modelo no resulta adecuado para describir los estados excitados de la energía que sabemos existen en el núcleo. Por esta razón, debe desarrollarse otro modelo nuclear». Eso es lo que viene ahora."
  ],
  preguntan: "¿Por qué hay un máximo en el hierro? Porque los dos términos destructivos crecen de forma distinta: el superficial pesa mucho en los núcleos pequeños y va perdiendo importancia, mientras que el de Coulomb crece como Z² y acaba dominando. Donde se cruzan está el máximo. Es justo lo que calculo en el ejercicio 26-10.",
  nota: "Usa los tres estados del conmutador. La frase final es el puente al modelo de capas: dila mirando al público, no a la pantalla."
},
{
  n: 21, t: "El modelo de capas", s: 80, i: true,
  pantalla: "A la izquierda, el hecho experimental de los números mágicos, dónde se observan y el llenado de capas de Bartlett. A la derecha, el esquema de niveles del modelo de capas y el retrato de María Goeppert-Mayer.",
  guion: [
    "Sección 26-5, el segundo modelo.",
    "Está bien establecido que muchas propiedades nucleares varían periódicamente, igual que las atómicas en la tabla periódica. Los núcleos más estables ocurren cuando Z o N valen dos, ocho, veinte, cincuenta, ochenta y dos o ciento veintiséis: los números mágicos. El modelo de capas los explica proponiendo que protones y neutrones forman capas cerradas semejantes a las electrónicas.",
    "¿Dónde se ven? Primero, como picos en la curva de energía de amarre: el helio-4 y el oxígeno-16, y también el estroncio-88, el estaño-120, el cerio-140 y el plomo-208. Fíjense: el helio-4 es el del ejercicio 25-9, al que costaba 20,6 MeV arrancarle un neutrón. Ya tenemos la explicación.",
    "Segundo, en las figuras 26-8 y 26-9: ambas muestran más núclidos estables en veinte, cincuenta y ochenta y dos; y para los isótonos, N igual a veintiocho da un pico, el número semimágico.",
    "Tercero, el origen. En 1932 Bartlett observó que la composición de los isótopos naturales cambia en el oxígeno-16 y otra vez en el argón-36. La cuenta es bonita: la capa s admite dos protones y dos neutrones y cierra el helio-4; la p admite seis y seis y da el oxígeno-16; la d admite diez y diez y da el argón-36. En general son dos por dos ele más uno.",
    "Y quien desarrolló esto es la señora de la foto: María Goeppert-Mayer. Con Wigner y Jensen teorizó que protones y neutrones están arreglados en capas, como los electrones en el átomo. Recibieron el Nobel en 1963."
  ],
  preguntan: "¿Cómo puede haber órbitas dentro de un núcleo tan compacto? Es la pregunta buena, y es la tensión entre los dos modelos. La respuesta es el principio de exclusión: como casi todos los estados de baja energía están ocupados, un nucleón apenas tiene a dónde dispersarse y se mueve como si los demás no estuvieran. El libro no entra en esto.",
  nota: "La conexión con el ejercicio 25-9 —el helio-4 doblemente mágico— amarra los dos capítulos. Asegúrate de decirla. Si vas muy justa, salta el párrafo de Bartlett."
},
{
  n: 22, t: "El modelo de capas predice el spin de cada núcleo", s: 65,
  pantalla: "A la izquierda, la suma de los tres momentos angulares, el papel de Pauli y qué pasa cuando sobra un nucleón. A la derecha, la tabla 26-3 con ejemplos y la comparación final de los dos modelos.",
  guion: [
    "Y ahora la consecuencia comprobable del modelo, que es lo que lo convierte en ciencia y no en una analogía bonita.",
    "El spin nuclear suma tres cosas: el momento angular intrínseco de los protones, el de los neutrones, y el orbital de los nucleones, que da m por h barra con m entero.",
    "Apliquemos Pauli: protones y neutrones llenan los niveles en pares de spines antiparalelos, y al completar capas cerradas el spin nuclear total es cero. El níquel-60 tiene spin cero: ahí está el patrón de la tabla 26-2.",
    "Si sobra un nucleón sin pareja, su spin de un medio se combina con el orbital de m h barra, y como m es entero el resultado es siempre semientero. Y los núclidos non-non, con un protón y un neutrón sin aparear, dan spin entero: el deuterio uno —la prueba dos de la diapositiva 17— y el boro-10 tres.",
    "Fíjense en lo que significa la tabla 26-3: con solo mirar si Z y N son pares o nones se predice el spin. Es una predicción contrastable, y se cumple.",
    "Para cerrar: la gota líquida acierta con la fisión pero falla con los estados excitados; el de capas acierta con los números mágicos y los spines. Son incompatibles entre sí y los dos son correctos en su dominio. Ese es el punto epistemológico de estos capítulos."
  ],
  preguntan: "¿Cómo pueden ser válidos dos modelos incompatibles? Porque un modelo no es una teoría verdadera: es una herramienta con un dominio de validez declarado. Mientras no exista la teoría completa que el propio libro reconoce que falta, se usa el modelo que funciona para el problema que se tiene delante.",
  nota: "El cierre —dos modelos incompatibles y los dos correctos— es tu conclusión epistemológica. Si el curso es de epistemología, esta es la frase por la que te van a evaluar."
},
{
  n: 23, t: "Ejercicio 26-9 · El electrón confinado en un átomo", s: 95, i: true,
  pantalla: "El enunciado literal, los datos y la clave del problema a la izquierda. A la derecha, seis pasos revelables, el último con una tabla comparativa.",
  guion: [
    "Tercer ejercicio: «El diámetro de un átomo es del orden de diez a la menos diez metros. Suponga que un electrón está restringido dentro de las dimensiones de un átomo —en sentido opuesto a las del núcleo— y muestre que la energía del electrón será de varios electrón-volts».",
    "Fíjense en ese paréntesis: nos piden rehacer el cálculo de la tercera prueba, pero al revés.",
    "[Clic 2] Principio de incertidumbre: con delta equis igual a diez a la menos diez metros, el momento es h barra partido por delta equis.",
    "[Clic 3] Y aquí viene el paso que distingue este problema del cálculo del libro: ¿qué fórmula uso para la energía cinética? Comparo p por c con la energía en reposo del electrón. P por c da unos dos kiloelectrón-volts; la energía en reposo son quinientos once. Es decir, p c es unas doscientas sesenta veces menor. Conclusión: el electrón no es relativista, y debo usar la expresión clásica K igual a p cuadrado sobre dos eme, no la aproximación K igual a p c del libro.",
    "[Clic 4, 5 y 6] El momento al cuadrado entre dos veces la masa del electrón da 3,8 electrón-volts. «Varios electrón-volts», que es lo que pedía demostrar.",
    "Y ahora la interpretación. Miren la tabla: en el núcleo el electrón sale ultrarrelativista con veinte millones de electrón-volts; en el átomo no es relativista y le bastan cuatro.",
    "Encerrarlo diez mil veces más pequeño le cuesta cinco millones de veces más energía. Y esos cuatro electrón-volts son exactamente el orden de las energías de enlace químicas que medimos todos los días; los veinte millones no se observan por ninguna parte. Por eso el electrón puede vivir en un átomo y no en un núcleo."
  ],
  preguntan: "¿Por qué el libro usa K igual a pc y aquí no? Porque son regímenes distintos. En el núcleo el momento es tan grande que pc es cuarenta veces la energía en reposo y el electrón es ultrarrelativista. En el átomo pc es mucho menor que la energía en reposo, y ahí vale la mecánica clásica.",
  nota: "El paso 3 es el corazón del ejercicio: demuestra que entendiste el problema, no solo que supiste sustituir. Dedícale tiempo y lee en voz alta la tabla comparativa del final."
},
{
  n: 24, t: "Ejercicio 26-10 · Oxígeno-16 frente a plutonio-239", s: 105, i: true,
  pantalla: "El enunciado literal, las fórmulas de los tres términos y los datos de cada núclido a la izquierda. A la derecha, siete pasos revelables, con la tabla de resultados y la conclusión.",
  guion: [
    "Último ejercicio: «Para los núclidos de oxígeno-16 y plutonio-239, compare las energías del efecto volumétrico, del efecto superficial y de la repulsión de Coulomb».",
    "[Clic 2] Los datos: el oxígeno-16 tiene A igual a dieciséis y Z igual a ocho; el plutonio-239, A igual a doscientos treinta y nueve y Z igual a noventa y cuatro.",
    "[Clic 3, 4 y 5] Sustituyo en los tres términos. El volumétrico, a por A, da 252,8 MeV para el oxígeno y 3776,2 para el plutonio: es el único que suma. El superficial, b por A a dos tercios, da 113,0 y 685,5. Y la repulsión de Coulomb, c por Z por Z menos uno entre A a un tercio, da 15,8 para el oxígeno y mil para el plutonio.",
    "[Clic 6] Aquí está la tabla. Pero si nos quedamos con los valores absolutos no hemos entendido nada: el plutonio es quince veces más grande y le sale todo mayor. Hay que comparar el peso de cada término frente al volumétrico.",
    "En el oxígeno-16 el superficial es el 44,7 por ciento del volumétrico y Coulomb sólo el 6,2. En el plutonio-239 el superficial baja al 18,2 y Coulomb sube al 26,5.",
    "[Clic 7] Los papeles se invierten. En el oxígeno el enemigo es la superficie: es tan pequeño que casi todos sus nucleones están en el borde. En el plutonio el enemigo es Coulomb, porque crece como Z al cuadrado mientras el superficial sólo crece como A a dos tercios.",
    "Y esto explica dos cosas de golpe. La forma de la curva de la figura 26-6: sube deprisa porque el efecto superficial pierde peso, y baja porque Coulomb lo gana; entre medias, el máximo del hierro. Y por qué los núcleos pesados fisionan: al partirse en dos, Coulomb cae mucho más de lo que sube el coste superficial, y el resultado neto libera energía. Es justamente «la división del núcleo en dos o más partes» que el modelo de la gota líquida acierta a explicar."
  ],
  preguntan: "¿Por qué el libro escoge precisamente el plutonio-239? Porque es un núcleo fisible real, el del reactor y el de la bomba. El ejercicio no es académico: está calculando por qué ese núcleo concreto se parte.",
  nota: "Es el mejor cierre posible porque amarra los dos capítulos. No lo recortes; si vas mal de tiempo, recorta antes la diapositiva 16."
},
{
  n: 25, t: "Síntesis y bibliografía", s: 45,
  pantalla: "Cinco conclusiones numeradas a la izquierda; la fuente principal, la lectura recomendada por el propio libro y los logos institucionales a la derecha.",
  guion: [
    "Cierro con cinco ideas.",
    "Una: el núcleo es diminuto, densísimo y pesa menos que sus piezas; ese déficit de masa es la energía que lo mantiene unido.",
    "Dos: lo sostiene una fuerza nueva —intensa, de corto alcance, independiente de la carga y saturable— que Yukawa explicó en 1935 con el pión.",
    "Tres: la energía de amarre por nucleón vale unos ocho MeV y su curva lo gobierna todo: por un lado se fusiona, por el otro se fisiona.",
    "Cuatro: en el núcleo no hay electrones, y lo demuestran tres caminos independientes.",
    "Y cinco, la idea epistemológica: como ninguna teoría completa da cuenta del núcleo, la física usa dos modelos incompatibles a la vez. Un modelo no es una teoría verdadera: es una herramienta con un dominio de validez declarado.",
    "Muchas gracias."
  ],
  nota: "Si te sobran treinta segundos, pregunta tú: «¿alguien se atreve a decirme por qué el hierro está en el máximo de la curva?». Tienes la respuesta en el anexo 1."
}
];

module.exports.anexos = {
  preguntas: [
    ["¿Por qué el neutrón, siendo neutro, tiene momento magnético?",
     "El libro lo reconoce como algo que no se comprende bien teóricamente. Hoy se explica porque el neutrón no es elemental: está formado por quarks con cargas fraccionarias cuya suma es cero, pero cuya distribución produce un momento magnético neto. Ese conocimiento es muy posterior al texto."],
    ["¿Por qué hacen falta dos modelos del núcleo si se contradicen?",
     "Porque, como dice el propio libro, «ninguna teoría completa da cuenta de todas las propiedades nucleares». La gota líquida acierta con la energía de amarre media y la fisión; el modelo de capas acierta con los números mágicos y los spines. Cada uno tiene su dominio de validez, y no existe todavía la teoría unificada que los reemplace."],
    ["¿Qué es exactamente un fermi?",
     "Una unidad de longitud igual a 10⁻¹⁵ metros, usada porque las dimensiones nucleares son pequeñísimas. El radio de un núcleo va de 1 a 7 fermis aproximadamente."],
    ["¿Por qué la curva de energía de amarre tiene un máximo en el hierro?",
     "Porque los dos términos destructivos de la fórmula de Weizsäcker crecen de forma distinta. El efecto superficial pesa mucho en los núcleos pequeños y va perdiendo importancia al crecer A; la repulsión de Coulomb crece como Z² y acaba dominando. Donde se cruzan las dos tendencias está el máximo. Es exactamente lo que calcula el ejercicio 26-10."],
    ["¿Qué diferencia hay entre el déficit de masa y la energía de amarre?",
     "Son la misma cantidad expresada en unidades distintas. El déficit de masa es la diferencia de masas, en uam; la energía de amarre es esa diferencia convertida en energía por ΔE = (Δm)c². Con el factor 1 uam = 931,48 MeV se pasa de una a otra."],
    ["¿Por qué se usan masas atómicas y no nucleares en los cálculos?",
     "Porque las tablas vienen en masas atómicas. Al sustituir la masa nuclear por la atómica menos Zmₑ, y la del protón por m_H menos mₑ, los términos de los electrones se cancelan y queda la ecuación (25-15), que solo usa masas atómicas. La energía de enlace de los electrones se desprecia por ser del orden de eV frente a MeV."],
    ["¿Cómo puede haber «órbitas» dentro de un núcleo tan compacto?",
     "Es la objeción natural al modelo de capas. La respuesta moderna es el principio de exclusión de Pauli: como casi todos los estados de baja energía están ocupados, un nucleón no tiene a dónde dispersarse y se mueve casi libremente. El libro no entra en esta justificación; se limita a constatar que el modelo predice bien."],
    ["¿Por qué los núcleos pesados necesitan más neutrones que protones?",
     "Porque para valores grandes de Z la repulsión electrostática de Coulomb se vuelve importante. Los neutrones aportan fuerza nuclear atractiva sin aportar repulsión eléctrica, así que hacen de cemento. Eso es lo que dobla la curva de estabilidad de la figura 26-2 hacia N > Z."],
    ["¿La energía de separación es siempre menor que la energía de amarre por nucleón?",
     "No. El ejemplo 25-3 da un caso en que es menor (7,40 frente a 7,68 MeV en el oxígeno-16), pero el ejercicio 25-9 da el caso contrario: en el helio-4 la energía de separación de un neutrón es 20,6 MeV frente a 7,07 MeV de BE/A. Depende de si el nucleón que se arranca rompe o no una capa cerrada."],
    ["¿Qué son los números semimágicos?",
     "Números que muestran un pico de estabilidad pero menos marcado que los mágicos. El libro cita N = 28, que aparece como pico en la figura 26-9 de los isótonos estables."],
    ["¿Qué significa que la fórmula de Weizsäcker sea «semiempírica»?",
     "Que la forma funcional de cada término tiene una justificación física —volumen, superficie, Coulomb, asimetría, apareamiento— pero los coeficientes a, b, c, d y δ no se deducen de una teoría: se ajustan a las masas medidas en el laboratorio."],
    ["Si no hay electrones en el núcleo, ¿de dónde sale el electrón de la desintegración beta?",
     "Se crea en el instante de la desintegración, cuando un neutrón se transforma en protón. No estaba almacenado en el núcleo. Precisamente las tres pruebas de la sección 26-3 descartan que estuviera allí antes."]
  ],
  glosario: [
    ["Nucleón", "Nombre común del protón y del neutrón cuando forman parte del núcleo."],
    ["Núclido", "Una especie concreta de núcleo, determinada por su Z y su N. Se escribe ᴬ_Z B_N."],
    ["Isótopos", "Núcleos con el mismo número atómico Z pero distinto número de masa A."],
    ["Isóbaros", "Núcleos con el mismo número de masa A pero distinto número atómico Z."],
    ["Isótonos", "Núcleos con el mismo número de neutrones N."],
    ["Fermi (F)", "Unidad de longitud nuclear: 1 F = 10⁻¹⁵ m."],
    ["Unidad atómica de masa (uam)", "Unidad de masa de la escala nuclear. Equivale a 931,48 MeV y a 1,66 × 10⁻²⁷ kg."],
    ["Déficit de masa", "Diferencia entre la suma de las masas de los nucleones libres y la masa real del núcleo."],
    ["Energía de amarre (BE)", "Energía mínima necesaria para separar un núcleo estable en todos sus protones y neutrones."],
    ["Energía de separación (SE)", "Energía mínima para remover un solo nucleón, el menos ligado, del núcleo."],
    ["Pión", "Partícula de masa intermedia (270 mₑ) postulada por Yukawa en 1935 como portadora de la fuerza nuclear."],
    ["Interacción fuerte", "La fuerza más intensa de la naturaleza; atractiva, de corto alcance, independiente de la carga y saturable."],
    ["Saturación", "Propiedad por la cual un nucleón completamente rodeado de otros ya no puede ligar más partículas. Es la base de la analogía con la gota líquida."],
    ["Barrera de Coulomb", "Potencial repulsivo que una partícula cargada debe superar —o atravesar por efecto túnel— para entrar en el núcleo."],
    ["Pozo de Yukawa", "Potencial atractivo de corto alcance de las fuerzas nucleares, V = −g²e⁻ᵃʳ/r."],
    ["Fotodesintegración", "Ruptura de un núcleo por absorción de un fotón γ. La energía umbral es igual a la energía de amarre."],
    ["Magnetón nuclear (μ_N)", "Unidad de momento dipolar magnético nuclear, eħ/2m_p = 5,050 × 10⁻²⁷ J/T; 1836 veces menor que el magnetón de Bohr."],
    ["Spin nuclear (I_N)", "Número cuántico del momento angular total del núcleo; admite 2I_N + 1 orientaciones en un campo magnético."],
    ["Número mágico", "Valor de Z o de N (2, 8, 20, 50, 82, 126) para el que el núcleo es especialmente estable, por corresponder a una capa cerrada."],
    ["Término de apareamiento", "Corrección ±δ/A³ᐟ⁴ de la fórmula de Weizsäcker que recoge la preferencia de la naturaleza por los núcleos par-par."]
  ]
};
