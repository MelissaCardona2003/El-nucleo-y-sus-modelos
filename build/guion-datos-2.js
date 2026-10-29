// Guion · El núcleo y sus modelos — diapositivas 25 a 46

module.exports = [
{
  n: 25, t: "Una curva que empieza recta y se dobla", i: true,
  pantalla: "A la izquierda, por qué hasta Z = 20 la línea es recta y por qué a partir de ahí se dobla. A la derecha, la reconstrucción interactiva de la figura 26-2, con tres ejemplos que se pueden resaltar.",
  guion: [
    "Seguimos en 26-1, con la curva de estabilidad: la figura 26-2, el número neutrónico frente al protónico.",
    "[Clic en oxígeno-16] Para Z menor que veinte la línea es recta, con N igual a Z: la fuerza nuclear es independiente de la carga y prefiere el reparto simétrico.",
    "[Clic en calcio-48, clic en protactinio-232] A partir de Z igual a veinte se dobla hacia N mayor que Z, y para Z grandes la tendencia es más pronunciada: el protactinio-232 tiene cincuenta neutrones de más.",
    "¿Por qué? Para grandes valores de Z la repulsión de Coulomb se vuelve importante, y hacen falta más neutrones para compensarla: aportan fuerza atractiva sin aportar repulsión eléctrica."
  ],
  preguntan: "¿Y los núcleos que están fuera de esa franja? Son inestables: se desintegran hasta caer dentro de ella. Esa franja es el valle de estabilidad, la banda negra de la carta de núclidos de la portada.",
  nota: "Haz clic en los tres ejemplos; las líneas punteadas hacen el argumento visible. Si vas justa, abre solo el calcio-48."
},
{
  n: 26, t: "272 núclidos estables, y 160 son par-par",
  pantalla: "A la izquierda, la tabla 26-1 con los 272 núclidos estables repartidos por paridad. A la derecha, las mismas cifras en barras y lo que el dato anticipa.",
  guion: [
    "Y ahora un dato muy revelador, la tabla 26-1: los 272 núclidos estables clasificados según si tienen número par o non de protones y de neutrones.",
    "Par-par, ciento sesenta. Par-non, cincuenta y seis. Non-par, cincuenta y dos. Y non-non, cuatro. Solamente cuatro, y todos en elementos ligeros.",
    "Esto no es una curiosidad estadística: es la huella del apareamiento de los nucleones, y va a aparecer dos veces más. Como el término delta de la fórmula de Weizsäcker, en la diapositiva 34; y como el principio de Pauli en el modelo de capas, en la 41."
  ],
  preguntan: "¿Cuáles son los cuatro núclidos non-non estables? Deuterio, litio-6, boro-10 y nitrógeno-14. Todos muy ligeros: a partir de ahí, la naturaleza ya no tolera dos nucleones sin aparear.",
  nota: "Las barras hacen el argumento solas. Lee los cuatro números y pasa al «lo que esto anticipa», que es lo que amarra con el capítulo 26."
},
{
  n: 27, t: "Momento angular de spin",
  pantalla: "A la izquierda, el spin de un nucleón suelto y la cuantización espacial, ecuaciones 26-6 y 26-7. A la derecha, la figura 26-3 del libro.",
  guion: [
    "Sección 26-2. El protón y el neutrón, igual que el electrón, tienen un spin intrínseco: la ecuación 26-6, raíz de I por I más uno por h barra, con I igual a un medio.",
    "En presencia de un campo magnético externo está cuantizado espacialmente: tomando el eje zeta en la dirección del campo, sólo caben las componentes más y menos un medio de h barra. Dos orientaciones, ni una más. Eso es lo que dibuja la figura 26-3."
  ],
  preguntan: "¿Por qué solo dos orientaciones? Porque el número cuántico de spin del nucleón es un medio, y las proyecciones permitidas van de más I a menos I de uno en uno: solo caben más un medio y menos un medio.",
  nota: "No te pierdas en las fórmulas. Lo que tiene que quedar es que el nucleón gira y solo puede apuntar en dos direcciones respecto al campo."
},
{
  n: 28, t: "El spin nuclear del núcleo entero",
  pantalla: "A la izquierda, cómo se construye el spin nuclear y las orientaciones permitidas, ecuaciones 26-8 y 26-9. A la derecha, el ejemplo del calcio-43 y por qué esto importará después.",
  guion: [
    "Además del spin, los nucleones tienen momento angular orbital. El momento resultante del núcleo se obtiene sumando los orbitales y los de spin de todos ellos: la ecuación 26-8, con un número cuántico nuevo, I sub N, el spin nuclear.",
    "Puede valer cero, uno, dos… o semienteros, y hay dos I sub N más uno orientaciones permitidas. El ejemplo del libro es el calcio-43, con spin siete medios: ocho orientaciones.",
    "Guarden esto, porque el spin nuclear es medible y va a ser la prueba experimental del modelo de capas: con solo saber si Z y N son pares o nones se podrá predecir cuánto vale."
  ],
  preguntan: "¿El spin nuclear es la suma simple de los spines de los nucleones? No: es la suma vectorial de los momentos orbitales y de spin de todos ellos, y por eso puede dar cero aunque haya muchos nucleones girando. Lo vemos en la diapositiva 41.",
  nota: "Si vas con prisa, salta el ejemplo del calcio-43: lo importante es anunciar que el spin será la prueba del modelo de capas."
},
{
  n: 29, t: "El magnetón nuclear y el misterio del neutrón",
  pantalla: "A la izquierda, del magnetón de Bohr al magnetón nuclear y las dos componentes observables. A la derecha, las dos cosas que el libro reconoce no entender.",
  guion: [
    "Seguimos en 26-2. El electrón tiene asociado un momento dipolar magnético igual al magnetón de Bohr; de forma similar, un nucleón tiene un magnetón nuclear, ecuación 26-10.",
    "Y como el protón es 1836 veces más pesado, el magnetón nuclear es 1836 veces menor. Retengan ese factor: es la primera prueba de la diapositiva 32.",
    "Las componentes observables son más 2,79 magnetones nucleares para el protón y menos 1,91 para el neutrón.",
    "Y aquí el libro reconoce que no entiende estos valores y, cito, que «es especialmente difícil entender cómo el neutrón, que es una partícula neutra, puede tener momento magnético»."
  ],
  preguntan: "¿Y hoy se sabe por qué el neutrón tiene momento magnético? Sí: porque no es elemental, está formado por quarks con cargas fraccionarias cuya suma es cero pero cuya distribución produce un momento neto. Eso es muy posterior a este libro.",
  nota: "La honestidad del libro al reconocer lo que no entiende es un buen comentario epistemológico. Si vas con prisa, esta diapositiva es la primera que se puede recortar."
},
{
  n: 30, t: "Tabla 26-2: todos los par-par tienen spin cero",
  pantalla: "A la izquierda, un extracto legible de la tabla 26-2 con los núclidos par-par resaltados. A la derecha, qué hay que buscar, por qué es un dato y la tabla completa del libro.",
  guion: [
    "Y esta es la evidencia experimental, la tabla 26-2: spin y momento dipolar magnético de una serie de núclidos.",
    "Recorran la columna del spin y fíjense en las filas resaltadas, las de Z y N pares —helio-4, carbono-12, oxígeno-16, calcio-40, plomo-208—: todas tienen spin cero y momento cero, sin una sola excepción.",
    "Y que un núcleo con decenas de nucleones dé exactamente cero, no «casi cero», solo puede significar que los nucleones se cancelan por parejas. Esa es la predicción del modelo de capas."
  ],
  preguntan: "¿Y los que no son par-par? Dan valores semienteros o enteros, nunca cero. El neutrón solo tiene menos 1,91; el protón, más 2,79. La regularidad es demasiado limpia para ser casualidad.",
  nota: "La tabla de la izquierda es un extracto para que se lea de lejos; la imagen pequeña de la derecha es la del libro, por si alguien pregunta por un núclido concreto."
},
{
  n: 31, t: "¿Electrones en el núcleo?",
  pantalla: "A la izquierda, lo que se creía hasta 1931 y lo que cambió en 1932. A la derecha, el retrato de James Chadwick.",
  guion: [
    "Sección 26-3, y es mi parte favorita, porque es historia de la ciencia en vivo.",
    "Hasta 1931 se creyó generalmente que los electrones sí existían en el núcleo, y que la carga neta positiva se debía a un exceso de protones sobre electrones. Se suponía que el núcleo de deuterio constaba de dos protones y un electrón nuclear.",
    "Pero en 1932 Chadwick descubre el neutrón y se propone una teoría nueva que niega esos electrones: el núcleo contiene solamente protones y neutrones. El deuterio pasa a ser, simplemente, un protón y un neutrón.",
    "Y la diferencia es comprobable. El libro da tres pruebas."
  ],
  preguntan: "Si no hay electrones en el núcleo, ¿de dónde sale el electrón de la desintegración beta? Se crea en el momento de la desintegración, cuando un neutrón se convierte en protón. No estaba guardado ahí dentro. Ese es justamente el punto.",
  nota: "Plantéalo como un giro: durante treinta años todo el mundo creyó una cosa, y un descubrimiento la tumbó. Es el mejor ejemplo de epistemología de toda la exposición."
},
{
  n: 32, t: "Tres pruebas independientes para decir que no", i: true,
  pantalla: "Tres tarjetas con las tres pruebas, que se despliegan al hacer clic. Abajo, la figura 26-4 del libro y el puente con el ejercicio 26-9.",
  guion: [
    "Tres pruebas, por tres caminos completamente distintos.",
    "[Clic prueba 1] Si hubiera electrones en el núcleo, su momento magnético sería del orden del magnetón de Bohr. Pero la evidencia indica que es menor por un factor de alrededor de mil.",
    "[Clic prueba 2] El deuterón tiene spin más uno, un valor entero, y cualquier combinación permitida de spines de electrones daría un valor semientero. Sin electrones salen cero y uno, que es lo que se mide.",
    "[Clic prueba 3] Y la más elegante: del principio de incertidumbre, un electrón confinado en diez a la menos catorce metros tendría veinte millones de electrón-volts. Pero los electrones de los átomos inestables tienen solo varios electrón-volts. Contradicción frontal.",
    "Tres caminos independientes, la misma conclusión. Y el ejercicio 26-9 hace esta tercera cuenta al revés."
  ],
  preguntan: "¿Por qué tres pruebas y no una? Porque cada una podría tener una escapatoria por separado. Tres argumentos independientes que apuntan al mismo sitio son mucho más difíciles de rebatir que uno solo, por bueno que sea.",
  nota: "Abre las tres tarjetas con un clic cada una. La tercera enlaza con el ejercicio 26-9: señálalo explícitamente antes de pasar."
},
{
  n: 33, t: "El modelo de la gota líquida",
  pantalla: "A la izquierda, la cita del libro sobre por qué hacen falta modelos y la analogía con el líquido. A la derecha, la figura de la gota deformándose hasta partirse.",
  guion: [
    "Sección 26-4, y empieza con una frase que es puro contenido epistemológico: «Puesto que ninguna teoría completa da cuenta de todas las propiedades nucleares, se han desarrollado varios modelos del núcleo».",
    "El primero es el de la gota líquida. ¿Por qué una gota? Porque en un líquido las energías de ligadura de dos átomos son independientes de los demás, y eso es la saturación de la diapositiva 10.",
    "La consecuencia es que la energía de amarre por nucleón se mantiene casi constante para A mayor que veinte, igual que el calor de vaporización por gramo no depende de cuánta agua haya.",
    "Por eso el núcleo se deforma, se estira y, si se estira demasiado, se parte. Eso que ven ahí es la fisión vista por este modelo, y es el gran acierto de la gota líquida."
  ],
  preguntan: "¿No es una analogía demasiado burda? Lo es, y el propio libro lo asume al llamarlo «modelo». Pero predice bien la energía de amarre media y la fisión, y eso basta para que sea útil en su dominio.",
  nota: "La frase de apertura justifica todo el capítulo 26. No la saltes."
},
{
  n: 34, t: "Weizsäcker, 1935: cinco términos para una energía",
  pantalla: "A la izquierda, el retrato de Weizsäcker y la tabla de la constante delta. A la derecha, la ecuación 26-12 completa con sus cuatro constantes y qué quiere decir «semiempírica».",
  guion: [
    "En 1935 Carl Friedrich von Weizsäcker propuso esta fórmula semiempírica para la energía de amarre, la ecuación 26-12: cinco términos y cuatro constantes.",
    "A igual a 15,8, el volumétrico, el único que suma; b, 17,8, el superficial; c, 0,71, Coulomb; y d, 23,7, la asimetría entre N y Z.",
    "Y una quinta, delta, que vale 34 si Z y N son ambos pares o ambos nones. Compárenla con la tabla 26-1: es la misma preferencia por los núcleos par-par, metida dentro de la fórmula.",
    "«Semiempírica» quiere decir que la forma de cada término sale de la física, pero los cuatro números se ajustan a los datos de laboratorio. No es una teoría: es un modelo con parámetros medidos."
  ],
  preguntan: "¿Qué quiere decir «semiempírica»? Que no se deduce enteramente de una teoría. La forma de cada término tiene justificación física, pero los coeficientes se determinan ajustando la fórmula a las masas medidas en el laboratorio.",
  nota: "La fórmula asusta escrita; dicha término a término no. Léela nombrando qué hace cada uno, no leyendo los símbolos."
},
{
  n: 35, t: "La fórmula, término a término", i: true,
  pantalla: "A la izquierda, los cinco términos en cinco tarjetas: el que suma en verde, los que restan en rojo. A la derecha, la figura 26-5 del libro y una calculadora interactiva con cuatro núclidos.",
  guion: [
    "Vamos término por término. De los cinco, uno suma y cuatro restan.",
    "El volumétrico, a por A: cuantos más nucleones, más difícil es removerlos individualmente, igual que el calor de vaporización es proporcional a la masa del líquido. Es el único positivo.",
    "El superficial, b por A a dos tercios: los nucleones del borde no están completamente rodeados. Es la tensión superficial, y entra negativo.",
    "La repulsión de Coulomb va con el número de parejas de protones, Z por Z menos uno partido por dos, que es lo que dibuja la figura 26-5; y con el inverso del radio, que se sustituye por r cero A a un tercio.",
    "El de asimetría: la máxima estabilidad ocurre cuando N es igual a Z. Y el de apareamiento, puramente correctivo: se añade si A es par.",
    "[Clic en oxígeno-16, luego plutonio-239] Fíjense cómo cambian los pesos relativos: eso es exactamente lo que pide el ejercicio 26-10."
  ],
  preguntan: "¿Por qué el término de Coulomb lleva Z por Z menos uno y no Z al cuadrado? Porque un protón no se repele a sí mismo. El número de parejas distintas de Z protones es Z(Z−1)/2, que es justo lo que muestra la figura 26-5.",
  nota: "Si vas justa, explica bien el volumétrico, el superficial y el de Coulomb —los tres del ejercicio 26-10— y resume los otros dos en una frase cada uno."
},
{
  n: 36, t: "La figura 26-7, que resume la fórmula entera",
  pantalla: "La figura 26-7 del libro a la izquierda: la contribución de cada término a la energía de amarre por nucleón. A la derecha, la lectura de las tres curvas.",
  guion: [
    "Y esta figura, la 26-7, resume la fórmula entera en un dibujo: cada curva es un término dividido entre A, y la discontinua es la suma, la curva BE/A.",
    "Arriba, plana, el volumétrico: la constante a, 15,8 MeV. Es el techo, lo que valdría cada nucleón si nada restara.",
    "Abajo a la izquierda, el efecto superficial: brutal en los núcleos ligeros y se desvanece al crecer A. Por eso la curva sube tan deprisa al principio.",
    "Y abajo a la derecha, Coulomb: empieza en casi nada y crece sin parar, porque va como Z al cuadrado. Donde se cruzan está el máximo de BE/A, en torno al hierro. Esto es, en una imagen, el ejercicio 26-10."
  ],
  preguntan: "¿Y el término de asimetría dónde está? Es la curva intermedia, la etiquetada como efecto de asimetría. Pesa menos que los otros dos, pero crece con A porque los núcleos pesados se alejan cada vez más de N = Z.",
  nota: "Esta diapositiva es opcional si vas mal de tiempo, pero si tienes 40 segundos es la que hace entender de golpe el ejercicio 26-10."
},
{
  n: 37, t: "Energía de amarre por nucleón", i: true,
  pantalla: "Reconstrucción interactiva de la figura 26-6: la curva BE/A frente al número másico, con los núclidos que el libro etiqueta. El conmutador superpone la flecha de fusión o la de fisión.",
  guion: [
    "Si dividimos la ecuación 26-12 entre A obtenemos la energía de amarre por nucleón: la curva más importante de la física nuclear, la figura 26-6.",
    "[Conmutador «la curva»] Con excepción de unas pocas irregularidades, la curva es suave; se eleva agudamente para A pequeño y, para A mayor que treinta, está cerca de ocho MeV por nucleón.",
    "Y tiene un máximo en el hierro-56, con unos 8,8: el núcleo más ligado que existe. Todo núcleo quiere acercarse a ese máximo, y tiene dos maneras.",
    "[Conmutador «fusión»] Si es ligero se fusiona, y la diferencia se libera como energía: es lo que ocurre en las estrellas. [Conmutador «fisión»] Y si es pesado se parte, y también sube en la curva."
  ],
  preguntan: "¿Por qué hay un máximo en el hierro? Porque los dos términos destructivos crecen de forma distinta: el superficial pesa mucho en los núcleos pequeños y va perdiendo importancia, mientras que el de Coulomb crece como Z² y acaba dominando. Donde se cruzan está el máximo. Es justo lo que calculo en el ejercicio 26-10.",
  nota: "Usa los tres estados del conmutador. Es la curva que resume los dos capítulos: déjala en pantalla mientras hablas."
},
{
  n: 38, t: "Lo que la gota líquida acierta y lo que no",
  pantalla: "A la izquierda, la curva de energía de amarre con más núclidos marcados. A la derecha, el éxito del modelo, su límite y la frase del libro que pide otro modelo.",
  guion: [
    "Balance del primer modelo.",
    "Su éxito, en palabras del libro: «el modelo de la gota líquida tiene éxito al explicar la división del núcleo en dos o más partes, cuando ocurre la fisión nuclear».",
    "Su límite: no describe los estados excitados de energía que sabemos que existen. Un continuo no tiene niveles, y sin niveles no hay forma de explicar los números mágicos ni los spines medidos.",
    "Y cierra así: «Por esta razón, debe desarrollarse otro modelo nuclear». Fíjense en el gesto, porque es el punto de la exposición: no se abandona la gota líquida, se le pone al lado otra cosa."
  ],
  preguntan: "¿Entonces la gota líquida está equivocada? No: está limitada. Sigue siendo el modelo con el que se calcula la fisión hoy. Lo que no puede hacer es explicar la estructura interna, y para eso se usa otro.",
  nota: "La frase final es el puente al modelo de capas: dila mirando al público, no a la pantalla."
},
{
  n: 39, t: "El modelo de capas: los números mágicos",
  pantalla: "A la izquierda, el hecho experimental de los números mágicos y dónde se observan. A la derecha, la figura 26-8 del libro, con las flechas en 20, 50 y 82.",
  guion: [
    "Sección 26-5, el segundo modelo.",
    "Muchas propiedades nucleares varían periódicamente, igual que las atómicas en la tabla periódica. Los núcleos más estables ocurren cuando Z o N valen dos, ocho, veinte, cincuenta, ochenta y dos o ciento veintiséis: los números mágicos, que el modelo explica con capas cerradas semejantes a las electrónicas.",
    "¿Dónde se ven? Como picos en la curva de energía de amarre: el helio-4, el oxígeno-16, el estroncio-88, el estaño-120 y el plomo-208. Fíjense: el helio-4 es el del ejercicio 25-9, al que costaba 20,6 MeV arrancarle un neutrón. Ya tenemos la explicación.",
    "Y en la figura 26-8, la de la derecha: las flechas marcan veinte, cincuenta y ochenta y dos, y ahí la naturaleza acumula isótopos estables."
  ],
  preguntan: "¿Por qué esos números y no otros? Porque son los que cierran capas en el esquema de niveles nucleares, igual que 2, 10, 18 cierran capas electrónicas. El modelo de capas no los postula: los reproduce.",
  nota: "La conexión con el ejercicio 25-9 —el helio-4 doblemente mágico— amarra los dos capítulos. Asegúrate de decirla."
},
{
  n: 40, t: "Bartlett, Pauli y el número 2(2ℓ+1)",
  pantalla: "A la izquierda, la observación de Bartlett, la tabla de llenado de capas y el esquema de niveles. A la derecha, el retrato de María Goeppert-Mayer.",
  guion: [
    "¿De dónde salió la idea? En 1932 Bartlett observó que la composición de los isótopos naturales cambia en el oxígeno-16 y otra vez en el argón-36.",
    "La cuenta sale sin violar el principio de Pauli: la capa s admite dos protones y dos neutrones y cierra en el helio-4; la p admite seis y seis y da el oxígeno-16; la d admite diez y diez y da el argón-36. En general, dos por dos ele más uno.",
    "Y quien lo desarrolló es la señora de la foto: María Goeppert-Mayer. Con Wigner y Jensen teorizó que protones y neutrones están arreglados en capas, como los electrones en el átomo. Nobel en 1963."
  ],
  preguntan: "¿Cómo puede haber órbitas dentro de un núcleo tan compacto? Es la pregunta buena, y es la tensión entre los dos modelos. La respuesta es el principio de exclusión: como casi todos los estados de baja energía están ocupados, un nucleón apenas tiene a dónde dispersarse y se mueve como si los demás no estuvieran. El libro no entra en esto.",
  nota: "Si vas muy justa, esta diapositiva se puede resumir en «las capas se llenan con 2(2ℓ+1) nucleones y eso da los números mágicos», y pasar."
},
{
  n: 41, t: "El modelo de capas predice el spin de cada núcleo",
  pantalla: "A la izquierda, la suma de los tres momentos angulares, el papel de Pauli y qué pasa cuando sobra un nucleón. A la derecha, la tabla 26-3 con sus ejemplos.",
  guion: [
    "Y ahora la consecuencia comprobable, que es lo que convierte al modelo en ciencia y no en una analogía bonita.",
    "El spin nuclear suma el momento intrínseco de los protones, el de los neutrones y el orbital, que da m por h barra con m entero.",
    "Apliquemos Pauli: llenan los niveles en pares de spines antiparalelos, y al completar capas cerradas el spin total es cero. El níquel-60 tiene spin cero: ahí está el patrón de la tabla 26-2.",
    "Si sobra un nucleón sin pareja, su spin de un medio se combina con el orbital y el resultado es siempre semientero. Y los non-non, con dos sin aparear, dan entero: el deuterio uno, el boro-10 tres.",
    "Fíjense en lo que significa la tabla 26-3: con solo mirar si Z y N son pares o nones se predice el spin. Es una predicción contrastable, y se cumple."
  ],
  preguntan: "¿Y si el modelo fallara en un solo núclido? Sería un problema serio, porque la predicción es categórica. Lo notable es que la regla se cumple en toda la tabla 26-2, que es una muestra amplia y heterogénea.",
  nota: "Vuelve un segundo a la tabla 26-2 si puedes: comprobar la predicción en vivo es lo que convence."
},
{
  n: 42, t: "Dos modelos incompatibles, los dos correctos",
  pantalla: "Las dos tablas comparativas, gota líquida y capas, una al lado de la otra. Abajo, la conclusión epistemológica.",
  guion: [
    "Y aquí está el punto de los dos capítulos, puestos uno al lado del otro.",
    "La gota líquida ve el núcleo como un todo continuo; acierta con la energía de amarre media y con la fisión; y falla con los estados excitados, los números mágicos y los spines.",
    "El modelo de capas ve nucleones individuales en niveles cuantizados; acierta con los números mágicos y los spines; y falla con la fisión.",
    "No pueden ser los dos verdad a la vez, y sin embargo cada uno predice bien lo que el otro no sabe explicar. Eso es exactamente lo que es un modelo: no una descripción de cómo es el núcleo, sino una herramienta con un dominio de validez declarado."
  ],
  preguntan: "¿Cómo pueden ser válidos dos modelos incompatibles? Porque un modelo no es una teoría verdadera. Mientras no exista la teoría completa, se usa el modelo que funciona para el problema que se tiene delante; y eso no es una debilidad de la física nuclear, es cómo trabaja.",
  nota: "Si el curso es de epistemología, esta es la diapositiva por la que te van a evaluar. Tómate cinco segundos de silencio antes de pasar a los ejercicios."
},
{
  n: 43, t: "Ejercicio 26-9 · El electrón confinado en un átomo", i: true,
  pantalla: "El enunciado literal, los datos y la clave del problema a la izquierda. A la derecha, seis pasos revelables, el último con una tabla comparativa.",
  guion: [
    "Tercer ejercicio: «Suponga que un electrón está restringido dentro de las dimensiones de un átomo —en sentido opuesto a las del núcleo— y muestre que la energía del electrón será de varios electrón-volts».",
    "Fíjense en ese paréntesis: nos piden rehacer el cálculo de la tercera prueba, pero al revés.",
    "[Clic 2] Principio de incertidumbre: con delta equis igual a diez a la menos diez metros, el momento es h barra partido por delta equis.",
    "[Clic 3] Y aquí viene el paso que distingue este problema: ¿qué fórmula uso para la energía cinética? P por c da unos dos kiloelectrón-volts y la energía en reposo del electrón son quinientos once. Conclusión: no es relativista, así que uso la expresión clásica K igual a p cuadrado sobre dos eme, no la aproximación K igual a p c del libro.",
    "[Clic 4, 5 y 6] El resultado son 3,8 electrón-volts: «varios electrón-volts», que es lo que pedía demostrar.",
    "Y la interpretación. En el núcleo el electrón salía con veinte millones de electrón-volts; en el átomo le bastan cuatro. Encerrarlo diez mil veces más pequeño le cuesta cinco millones de veces más energía.",
    "Y esos cuatro electrón-volts son el orden de las energías de enlace químicas que medimos todos los días; los veinte millones no se observan por ninguna parte. Por eso el electrón puede vivir en un átomo y no en un núcleo."
  ],
  preguntan: "¿Por qué el libro usa K igual a pc y aquí no? Porque son regímenes distintos. En el núcleo el momento es tan grande que pc es cuarenta veces la energía en reposo y el electrón es ultrarrelativista. En el átomo pc es mucho menor que la energía en reposo, y ahí vale la mecánica clásica.",
  nota: "El paso 3 es el corazón del ejercicio: demuestra que entendiste el problema, no solo que supiste sustituir. Dedícale tiempo y lee en voz alta la tabla comparativa del final."
},
{
  n: 44, t: "Ejercicio 26-10 · Oxígeno-16 frente a plutonio-239", i: true,
  pantalla: "El enunciado literal, las fórmulas de los tres términos y los datos de cada núclido a la izquierda. A la derecha, siete pasos revelables, con la tabla de resultados y la conclusión.",
  guion: [
    "Último ejercicio: «Para los núclidos de oxígeno-16 y plutonio-239, compare las energías del efecto volumétrico, del efecto superficial y de la repulsión de Coulomb».",
    "[Clic 2] El oxígeno-16 tiene A igual a dieciséis y Z igual a ocho; el plutonio-239, A igual a doscientos treinta y nueve y Z igual a noventa y cuatro.",
    "[Clic 3, 4 y 5] El volumétrico da 252,8 MeV para el oxígeno y 3776,2 para el plutonio. El superficial, 113,0 y 685,5. Y Coulomb, 15,8 y mil.",
    "[Clic 6] Pero quedarnos con los valores absolutos sería no entender nada: el plutonio es quince veces más grande y le sale todo mayor. Hay que comparar el peso de cada término frente al volumétrico.",
    "En el oxígeno el superficial es el 44,7 por ciento y Coulomb solo el 6,2. En el plutonio el superficial baja al 18,2 y Coulomb sube al 26,5.",
    "[Clic 7] Los papeles se invierten. En el oxígeno el enemigo es la superficie: casi todos sus nucleones están en el borde. En el plutonio es Coulomb, que crece como Z al cuadrado mientras el superficial solo crece como A a dos tercios.",
    "Y eso explica la forma de la curva de la figura 26-6 y, de paso, por qué los núcleos pesados fisionan: al partirse en dos, Coulomb cae mucho más de lo que sube el coste superficial."
  ],
  preguntan: "¿Por qué el libro escoge precisamente el plutonio-239? Porque es un núcleo fisible real, el del reactor y el de la bomba. El ejercicio no es académico: está calculando por qué ese núcleo concreto se parte.",
  nota: "Es el mejor cierre posible porque amarra los dos capítulos. No lo recortes; si vas mal de tiempo, recorta antes la diapositiva 29."
},
{
  n: 45, t: "Síntesis",
  pantalla: "Las cinco conclusiones numeradas, en dos columnas.",
  guion: [
    "Cierro con cinco ideas.",
    "Una: el núcleo es diminuto, densísimo y pesa menos que sus piezas; ese déficit de masa es la energía que lo mantiene unido.",
    "Dos: lo sostiene una fuerza nueva —intensa, de corto alcance, independiente de la carga y saturable— que Yukawa explicó con el pión.",
    "Tres: la energía de amarre por nucleón vale unos ocho MeV y su curva lo gobierna todo: por un lado se fusiona, por el otro se fisiona.",
    "Cuatro: en el núcleo no hay electrones, y lo demuestran tres caminos independientes.",
    "Y cinco: como ninguna teoría completa da cuenta del núcleo, la física usa dos modelos incompatibles a la vez. Un modelo no es una teoría verdadera: es una herramienta con un dominio de validez declarado."
  ],
  nota: "Si te sobran treinta segundos, pregunta tú: «¿alguien se atreve a decirme por qué el hierro está en el máximo de la curva?». Tienes la respuesta en el anexo 1."
},
{
  n: 46, t: "Bibliografía",
  pantalla: "La fuente principal, las ocho lecturas que el propio libro recomienda, el crédito de las imágenes y los logos institucionales.",
  guion: [
    "La fuente es el capítulo 25, «El núcleo», páginas 277 a 285, y el capítulo 26, «Modelos del núcleo», páginas 286 a 297, de Acosta, Cowan y Graham.",
    "Y ahí están las ocho lecturas que el propio libro recomienda al final de cada capítulo, por si alguien quiere seguir: Bethe sobre qué mantiene unido al núcleo, los dos artículos de Goeppert-Mayer sobre las capas cerradas, el de Bartlett de 1932, y los de Peierls, Flowers, Weisskopf y Marshak.",
    "Muchas gracias."
  ],
  nota: "Deja esta diapositiva en pantalla durante las preguntas: tiene los logos y las referencias por si alguien quiere anotarlas."
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
