// Guion · El núcleo y sus modelos — diapositivas 1 a 24
// El guion hablado está ajustado a un ritmo de lectura ágil: es lo que de verdad
// cabe en 30 minutos. El detalle completo está EN LAS DIAPOSITIVAS; aquí va
// solamente lo que hay que decir en voz alta.

module.exports = [
{
  n: 1, t: "Portada — El núcleo y sus modelos",
  pantalla: "Portada con los logos de la Universidad del Atlántico y del Programa de Física, tu nombre, el del docente y la fecha. A la derecha, la carta de núclidos: el mapa de todos los núcleos que existen, coloreados según cómo se desintegran.",
  guion: [
    "Buenos días. Soy Melissa Cardona Navarro y hoy expongo los capítulos 25 y 26 del Curso de Física Moderna de Acosta, Cowan y Graham: «El núcleo» y «Modelos del núcleo».",
    "El 25 pregunta qué es el núcleo: de qué está hecho, qué lo mantiene unido y cuánta energía cuesta desarmarlo. El 26 pregunta cómo lo imaginamos, dado que todavía no existe una teoría completa del núcleo.",
    "La imagen es la carta de núclidos: cada cuadrito es un núcleo posible y los negros son los estables. Al final van a entender por qué esa franja tiene esa forma."
  ],
  nota: "Deja la portada mientras te presentas. Si el salón tiene mucha luz, presiona T para el tema oscuro; F para pantalla completa."
},
{
  n: 2, t: "Hoja de ruta",
  pantalla: "Agenda con las nueve secciones de los dos capítulos más un bloque para los cuatro ejercicios. Cada bloque es clicable y salta a esa diapositiva.",
  guion: [
    "Este es el recorrido. Del capítulo 25: el átomo nuclear, las fuerzas nucleares, las propiedades del núcleo y la energía de amarre.",
    "Del 26: fotodesintegración y estabilidad, momento angular de spin, la pregunta de si hay electrones en el núcleo, el modelo de la gota líquida y el modelo de capas.",
    "Y por el camino resuelvo cuatro ejercicios: el 25-9 y el 25-10, y el 26-9 y el 26-10.",
    "Hay once diapositivas interactivas; en los ejercicios iré revelando el desarrollo paso a paso."
  ],
  nota: "Si vas corta de tiempo, esto se resume en una frase: «primero qué es el núcleo, después cómo lo modelamos, y cuatro ejercicios por el camino»."
},
{
  n: 3, t: "El átomo nuclear",
  pantalla: "A la izquierda, lo que estableció Rutherford y una tabla con la escala del átomo frente a la del núcleo. A la derecha, un diagrama con las órbitas y el núcleo marcado, que recuerda que el punto naranja está dibujado mil veces más grande de lo que debería.",
  guion: [
    "Sección 25-1. Para 1911 los experimentos de dispersión de Rutherford habían mostrado que el átomo consiste en un núcleo muy pequeño, de unos diez elevado a menos catorce metros, y electrones girando a gran distancia.",
    "Como casi toda la masa está en el núcleo, el átomo es, en su mayor parte, espacio vacío.",
    "Miren la proporción: el átomo mide diez a la menos diez metros y el núcleo diez a la menos catorce. Diez mil a uno. Si el núcleo fuera una canica de un centímetro en el centro del estadio, el primer electrón estaría a cien metros. Todo lo demás es vacío."
  ],
  preguntan: "¿Entonces el modelo de Rutherford está mal? No está mal, está incompleto. Describe bien la geometría —núcleo pequeño, electrones lejos— pero no puede explicar por qué el átomo es estable. Eso es lo que viene ahora.",
  nota: "La comparación de la canica y el estadio es la que se les queda grabada. Dila despacio."
},
{
  n: 4, t: "Por qué aquí no sirve la mecánica clásica",
  pantalla: "Tres tarjetas: intento uno, un átomo estático; intento dos, un átomo en órbita; y la salida, la teoría cuántica.",
  guion: [
    "Y aquí está el problema de fondo, porque la física clásica, aplicada al propio átomo de Rutherford, predice que el átomo no puede existir. Hay dos formas de intentarlo y las dos fallan.",
    "Si los electrones estuvieran quietos, nada contrarrestaría la atracción electrostática: caerían al centro. El átomo estático colapsa de inmediato, así que el modelo tenía que ser dinámico.",
    "Pero si giran, tampoco. Un electrón en órbita es una carga acelerada, y el electromagnetismo clásico dice que toda carga acelerada radia energía. Al perderla, la órbita se cierra en espiral.",
    "La salida es cuántica: hay estados estacionarios, y el electrón no puede perder energía de forma continua. Bohr lo postula; Schrödinger y Heisenberg lo explican."
  ],
  preguntan: "¿Cuánto tardaría en colapsar el átomo clásico? El cálculo clásico da del orden de diez a la menos once segundos. O sea: la materia no existiría. Esa es la magnitud del fracaso.",
  nota: "Esta es la diapositiva que explica por qué hace falta la cuántica. Si te preguntan «¿y por qué no sirve?», la respuesta corta es: «porque una carga acelerada radia»."
},
{
  n: 5, t: "Con el núcleo es peor: no hay teoría, hay modelos",
  pantalla: "A la izquierda, tres razones por las que el núcleo es más difícil que el átomo, y la conclusión. A la derecha, los dos modelos del capítulo 26 y el punto epistemológico.",
  guion: [
    "Y si el átomo ya costó, con el núcleo es peor, por tres razones.",
    "No se conoce la ley de fuerza: en el átomo es la de Coulomb, exacta y conocida; entre nucleones no hay nada equivalente. La interacción es demasiado intensa para tratarla como una perturbación pequeña. Y son más de doscientos cuerpos interactuando todos con todos.",
    "Resultado, y cito al libro: aún no se ha formulado una teoría completa y unificada del núcleo. Por eso la física nuclear trabaja con modelos, y son los dos del capítulo 26: la gota líquida, que acierta con la fisión, y el de capas, que acierta con los números mágicos. Se contradicen y los dos son correctos. Sobre eso vuelvo al final."
  ],
  preguntan: "¿Un modelo es lo mismo que una teoría? No. Una teoría aspira a decir cómo es la cosa; un modelo es una herramienta con un dominio de validez declarado. Por eso pueden convivir dos modelos incompatibles y ninguno estar «equivocado».",
  nota: "Si el curso es de epistemología, aquí es donde plantas la tesis que vas a cerrar en la diapositiva 42."
},
{
  n: 6, t: "Del electrón-volt al millón de electrón-volts",
  pantalla: "A la izquierda, la tabla que compara la química atómica con la física nuclear y el Ejemplo 25-1 del agua. A la derecha, las dos barras de energía a escala y el esquema de la fisión del uranio.",
  guion: [
    "Antes de entrar en materia, el orden de magnitud, que es lo que hay que retener de toda la sección.",
    "La física atómica trabaja con electrones y energías de unos pocos electrón-volts: 13,6 para arrancarle el electrón al hidrógeno. La nuclear trabaja con protones y neutrones, y ahí son millones.",
    "El ejemplo 25-1 lo pone en números: el calor de formación del agua, repartido entre las moléculas de un mol, da 2,97 electrón-volts por molécula.",
    "Y la fisión del uranio-235 libera doscientos millones por átomo. Un factor de cien millones: esa es toda la distancia entre la química y la física nuclear. Miren las dos barras: la de arriba, a escala, tendría el grosor de un pelo."
  ],
  preguntan: "¿Por qué el libro compara con el agua y no con otra reacción? Porque es la reacción química que todo el mundo conoce y porque su calor de formación está tabulado. Cualquier otra daría el mismo orden: unos pocos eV por molécula.",
  nota: "El contraste 3 eV frente a 200 MeV es la frase que más engancha del capítulo 25. Dila despacio y señala las dos barras."
},
{
  n: 7, t: "Núclidos: dos números lo determinan todo", i: true,
  pantalla: "A la izquierda, la notación del libro en grande —A, Z y N marcados con su color— y un ejemplo leído en voz alta. A la derecha, un constructor interactivo de núclidos con dos deslizadores.",
  guion: [
    "Seguimos en 25-1, con la nomenclatura. Esta es la ecuación 25-1, y la tienen en grande con cada número de su color.",
    "En naranja, arriba, A: el número másico, el total de nucleones. En azul, abajo, Z: cuántos protones. Y en turquesa, a la derecha, N: cuántos neutrones. A es igual a N más Z. Protones y neutrones, dentro del núcleo, se llaman nucleones.",
    "El ejemplo del libro es el cloro-35: diecisiete protones, dieciocho neutrones, treinta y cinco nucleones. Z es el que define el elemento: cambio N y sigue siendo cloro; cambio Z y ya es otra cosa.",
    "[Mueve los deslizadores] Aquí se construye cualquier núclido. Con Z igual a catorce y N igual a quince sale silicio-29."
  ],
  preguntan: "¿Por qué se escribe N si se puede calcular? Por comodidad en las tablas de isótonos, donde lo que se busca es precisamente el número de neutrones. El libro lo escribe y luego avisa de que suele omitirse.",
  nota: "Mueve los deslizadores de verdad mientras hablas, y señala los tres colores al nombrarlos. Es la diapositiva que fija la notación de toda la exposición."
},
{
  n: 8, t: "Isótopos, isóbaros e isótonos",
  pantalla: "A la izquierda, la tabla de las tres familias con los ejemplos del libro y los tres isótopos del hidrógeno. A la derecha, el cálculo de la masa atómica media del cloro y del hidrógeno.",
  guion: [
    "Con esa notación ya se entienden las tres familias. Los isótopos tienen el mismo Z: silicio-28, 29, 30 y 32. Los isóbaros, el mismo A: el oxígeno-16 y el nitrógeno-16 pesan lo mismo pero son elementos distintos. Y los isótonos, el mismo número de neutrones: carbono-14, nitrógeno-15 y oxígeno-16, todos con ocho.",
    "De aquí sale el peso atómico. El cloro natural es 75,53 por ciento de cloro-35 y 24,47 de cloro-37; el promedio ponderado da 35,46, que es el número de la tabla periódica. El libro aclara que llamarlo «peso atómico» no es del todo apropiado."
  ],
  preguntan: "¿Por qué el peso atómico del cloro no es entero? Porque no es la masa de un núcleo, es el promedio de los dos isótopos de la naturaleza pesado por su abundancia. Ningún átomo de cloro pesa 35,46.",
  nota: "El truco mnemotécnico está escrito en la diapositiva: isó-topo, mismo sitio en la tabla; isó-baro, mismo peso; isó-tono, mismos neutrones. Léelo en voz alta."
},
{
  n: 9, t: "Las fuerzas nucleares",
  pantalla: "Retrato de Hideki Yukawa a la izquierda. A la derecha, el problema planteado por Coulomb y la respuesta de Yukawa.",
  guion: [
    "Sección 25-2, y aquí aparece el problema de fondo del capítulo.",
    "Según Coulomb, los protones apretadamente distribuidos dentro del núcleo deberían repelerse con fuerza y dispersarse. Dicho de otro modo: el núcleo no debería existir. Es difícil explicar su estabilidad a menos que los nucleones estén bajo alguna clase de fuerzas atractivas muy intensas, que se clasifican como interacciones fuertes.",
    "Quien las estudió fue el físico japonés Hideki Yukawa, el de la foto. En 1935 anunció sus características principales y postuló una partícula llamada pión, con una masa en reposo de 270 veces la del electrón. Por esa contribución recibió el Nobel de Física en 1949."
  ],
  preguntan: "¿El pión es lo mismo que el mesón? El mesón es la familia: partículas de masa intermedia. El pión es el mesón concreto que Yukawa predijo. La hipótesis se confirmó después y reveló que existen varios tipos de mesones.",
  nota: "Plantéalo como un problema antes de dar la solución: «según Coulomb, esto no debería existir». Engancha más."
},
{
  n: 10, t: "Cuatro características, y la cuarta es única",
  pantalla: "Las cuatro características de las fuerzas nucleares en cuatro tarjetas, y abajo un panel que explica por qué la saturación importa tanto.",
  guion: [
    "Yukawa mencionó cuatro características, que son las cuatro tarjetas.",
    "Una: solo son efectivas a distancias del orden de diez a la menos quince metros. Dos: son independientes de la carga; protón-protón, neutrón-neutrón y protón-neutrón es la misma. Tres: son las más intensas conocidas en la naturaleza. Y cuatro: se saturan.",
    "Fíjense en por qué importa la cuarta. En una fuerza que no se satura cada partícula atrae a todas las demás y la energía crece con el cuadrado del número de partículas. Al saturarse, cada nucleón solo liga a sus vecinos y la energía crece en proporción directa a A. De ahí sale el primer término de la fórmula de Weizsäcker y la curva plana de ocho MeV por nucleón."
  ],
  preguntan: "¿Qué quiere decir exactamente «saturarse»? Que la fuerza tiene un cupo. Cuando un nucleón ya tiene vecinos por todos lados, añadir más nucleones alrededor no aumenta su energía de ligadura: los de fuera «no lo sienten».",
  nota: "Las cuatro características son la columna vertebral de 25-2. Enúncialas aunque vayas con prisa; el párrafo final de la saturación es el que prepara el capítulo 26."
},
{
  n: 11, t: "El potencial nuclear", i: true,
  pantalla: "Reconstrucción interactiva de la figura 25-1: la curva del potencial nuclear. Con el deslizador mueves la separación entre dos nucleones y el panel de la derecha cambia según la zona.",
  guion: [
    "Esta curva es la figura 25-1: la primera característica, el corto alcance, dibujada. En el eje horizontal, la separación entre dos nucleones en fermis; un fermi son diez a la menos quince metros.",
    "[Deslizador hacia 1 fermi] A poco menos de un fermi el potencial es intensamente atractivo: un pozo de unos cien MeV. Ahí vive el núcleo.",
    "[Deslizador hacia 3 o 4 fermis] Pero al separarlos la curva sube hacia cero muy rápido: a varios fermis no queda nada. Por eso un núcleo no atrae a sus vecinos.",
    "[Deslizador por debajo de 0,5] Y el extremo que sorprende: por debajo de medio fermi los nucleones se repelen. Esa pared impide que el núcleo se colapse sobre sí mismo."
  ],
  preguntan: "¿Por qué se repelen a distancias tan cortas si la fuerza es atractiva? El libro solo dice que «la evidencia experimental lo sugiere». Hoy se entiende como un efecto de la estructura interna de los nucleones, pero eso está fuera de este capítulo.",
  nota: "Mueve el deslizador en los tres rangos. El panel de la derecha hace el trabajo por ti."
},
{
  n: 12, t: "La barrera de Coulomb y el efecto túnel", i: true,
  pantalla: "Reconstrucción interactiva de la figura 25-2: la barrera de Coulomb con un protón que se acerca. El conmutador cambia entre «mecánica clásica» y «mecánica cuántica».",
  guion: [
    "Seguimos en 25-2, con la pregunta práctica: ¿cómo se entra en un núcleo?",
    "Al acercarse, el protón es repelido por el núcleo positivo: es el potencial de Coulomb de la ecuación 25-2.",
    "[Conmutador en «clásica»] La energía total del protón es menor que la altura de la barrera. Clásicamente, al llegar a B su energía cinética iguala a la potencial, choca y rebota, incapaz de penetrar. Nunca entra.",
    "[Conmutador en «cuántica»] Y sin embargo entra. La mecánica cuántica explica, por el efecto túnel, cómo el protón tiene una probabilidad finita de atravesar la barrera y caer dentro del pozo de Yukawa."
  ],
  preguntan: "¿El efecto túnel significa que el protón atraviesa la barrera sin energía suficiente? Significa que su función de onda no se anula al otro lado, y por tanto hay probabilidad finita de encontrarlo allí. No «pasa por encima»: la pregunta clásica «¿dónde está ahora?» deja de tener sentido.",
  nota: "Usa el conmutador: primero clásico, deja que complete un rebote, y después cuántico. El contraste visual es el argumento."
},
{
  n: 13, t: "Un pozo profundo detrás de una colina",
  pantalla: "La figura 25-2 del libro a la izquierda. A la derecha, el balance de energía punto por punto, la ecuación del pozo de Yukawa y el atajo del neutrón.",
  guion: [
    "Esta es la figura 25-2 tal cual la imprime el libro, y tiene tres cosas.",
    "El balance de energía: AB es la total, AC la potencial y CB la cinética que le queda. Y como la curva baja al alejarse, la fuerza eléctrica resulta repulsiva.",
    "El pozo: una vez dentro, el potencial es el de Yukawa, ecuación 25-3, y el signo menos dice que ahí es atractivo.",
    "Y la tercera, que importará enseguida: los neutrones no encuentran barrera. Al no tener carga, sienten las fuerzas nucleares desde algo más lejos. Por eso bastan neutrones lentos para provocar una fisión."
  ],
  preguntan: "¿Por qué entonces se usan aceleradores si los neutrones entran gratis? Porque un neutrón libre no es fácil de producir ni de dirigir: hay que sacarlo antes de otro núcleo. Con protones se paga la barrera, pero se los acelera y enfoca con campos eléctricos.",
  nota: "Si vas justa, esta diapositiva se puede resumir en el atajo del neutrón y pasar. El balance AB-AC-CB ya está escrito en pantalla."
},
{
  n: 14, t: "Un núcleo pesa menos que sus propias piezas",
  pantalla: "A la izquierda, el déficit de masa con las ecuaciones 25-4 y 25-5. A la derecha, un esquema del helio-4 con las piezas sueltas arriba y el núcleo ya formado abajo, y la masa que falta.",
  guion: [
    "Sección 25-3. Parecería que la masa del núcleo debiera ser Z veces la del protón más N veces la del neutrón. Pero los espectrómetros señalan otra cosa: la masa real es menor. A esa diferencia se le llama déficit de masa, ecuación 25-4.",
    "Y la explicación es Einstein, delta E igual a delta eme por ce cuadrado: al combinarse los nucleones, algo de la masa desaparece como energía liberada, usualmente rayos gamma.",
    "Miren el helio-4: las cuatro piezas sueltas pesan 4,032980 unidades atómicas y el núcleo formado, 4,002604. Faltan 0,030376, que son 28,3 MeV. La masa no se destruye: es la energía que mantiene unido al núcleo."
  ],
  preguntan: "¿El déficit de masa y la energía de amarre son lo mismo? Son la misma cantidad en unidades distintas: una en uam, la otra en MeV. Se pasa de una a otra con el factor 931,48.",
  nota: "El esquema de las piezas sueltas es lo que hace entendible el déficit de masa. Señálalo mientras dices los dos números."
},
{
  n: 15, t: "El volumen es proporcional al número de nucleones",
  pantalla: "A la izquierda, el radio nuclear con la ecuación 25-6 y los tres valores de r cero; debajo, el volumen. A la derecha, qué significa que el volumen vaya con A y una tabla con el radio de cuatro núclidos.",
  guion: [
    "El tamaño. La ecuación 25-6 dice que el radio es r cero por A a un tercio. Ese r cero vale 1,2 fermis con partículas cargadas y 1,5 con neutrones; para problemas usaremos el intermedio de 1,3. Apunten ese número: lo necesitamos en el ejercicio 25-10.",
    "Si el radio va como A a un tercio, el volumen va como A. Y eso significa que los nucleones se empaquetan siempre igual de apretados: exactamente como en una gota de líquido. Es la segunda pista, junto con la saturación, que llevará al modelo de la gota.",
    "Fíjense además lo despacio que crece: del helio al uranio hay sesenta veces más nucleones y el radio solo se multiplica por cuatro."
  ],
  preguntan: "¿Por qué hay tres valores de r cero? Porque se mide de formas distintas: con protones se obtiene el radio de la distribución de carga, 1,2 F; con neutrones, el de la materia nuclear, 1,5 F, mayor porque no hay barrera que los frene. El 1,3 F es un compromiso para hacer problemas.",
  nota: "Lo que no puedes saltar es el 1,3 fermis: sin ese número no sale el ejercicio 25-10."
},
{
  n: 16, t: "Doscientos millones de toneladas por centímetro cúbico",
  pantalla: "A la izquierda, el cálculo de la densidad nuclear con las ecuaciones 25-7 y 25-9. A la derecha, la comparación de las tres densidades y lo que significa.",
  guion: [
    "De ahí sale el número más espectacular del capítulo: la densidad nuclear es unos dos por diez a la diecisiete kilogramos por metro cúbico. El libro lo llama «un número increíblemente grande».",
    "Y un detalle: en esa fórmula A se cancela entre la masa y el volumen. Por eso todos los núcleos tienen la misma densidad, del hidrógeno al uranio.",
    "La comparación: el radio atómico es diez mil veces el nuclear, así que la densidad atómica es doce órdenes de magnitud menor; y el agua, mil kilogramos por metro cúbico. Un centímetro cúbico de materia nuclear pura pesaría doscientos millones de toneladas: es de lo que están hechas las estrellas de neutrones. Por ahí va el ejercicio 25-10."
  ],
  preguntan: "¿Existe de verdad materia con esa densidad? Sí, en las estrellas de neutrones: una estrella entera comprimida hasta el punto en que toda ella es, en la práctica, un núcleo gigante.",
  nota: "Este es el número que la gente recuerda al salir. Dilo en toneladas, no en kilogramos por metro cúbico."
},
{
  n: 17, t: "Energía de amarre nuclear",
  pantalla: "A la izquierda, la definición con la ecuación 25-10 y el criterio del signo. A la derecha, el paso de masas nucleares a masas atómicas hasta la ecuación 25-15.",
  guion: [
    "Sección 25-4, el concepto central de los dos capítulos.",
    "Esa masa que desaparece se convierte en energía, y esa energía es la energía de amarre: la energía mínima requerida para separar un núcleo estable en sus protones y neutrones constituyentes. Si es positiva el núcleo es estable; si es negativa, se desintegra solo.",
    "Hay un problema práctico: las tablas están en masas atómicas, no nucleares. Al convertir, los términos con la masa del electrón se cancelan, y queda la ecuación 25-15, que usaremos siempre: BE igual a Z por la masa del hidrógeno, más N por la del neutrón, menos la masa atómica."
  ],
  preguntan: "¿Por qué se cancelan los electrones? Porque en la masa atómica del núclido hay Z electrones, y al usar Z veces la masa del átomo de hidrógeno estamos metiendo esos mismos Z electrones por el otro lado. Se restan.",
  nota: "Es la diapositiva más importante del capítulo 25: los ejercicios 25-9 y 26-10 se apoyan en ella. No la saltes nunca."
},
{
  n: 18, t: "Ejemplo 25-2 · Energía de amarre del oxígeno-16",
  pantalla: "A la izquierda, el cálculo línea por línea con la tabla de masas y la conversión a MeV. A la derecha, las cuatro constantes que hay que tener a mano y el número que hay que recordar.",
  guion: [
    "El ejemplo 25-2 lo hace con el oxígeno-16.",
    "Ocho masas de hidrógeno más ocho de neutrón suman 16,13192 unidades atómicas. Y la masa atómica del oxígeno-16 es exactamente dieciséis, porque es el patrón de la escala. La diferencia, más 0,13192, es la energía de amarre; positiva, luego estable.",
    "Una unidad atómica son 931,48 MeV, así que son 122,8 MeV. Entre dieciséis nucleones, 7,68 MeV por nucleón.",
    "Retengan ese número: casi todos los núcleos rondan los ocho MeV por nucleón. Esa constancia es el hecho central del capítulo 26."
  ],
  preguntan: "¿Por qué la masa atómica del oxígeno-16 es exactamente 16? Porque en la escala que usa este libro el oxígeno-16 es el patrón. No es una coincidencia física.",
  nota: "Las cuatro constantes de la derecha son las que necesitas en los dos ejercicios de masas. Señálalas aunque no las leas."
},
{
  n: 19, t: "Energía de separación",
  pantalla: "A la izquierda, la diferencia entre BE y SE y el método en una frase. A la derecha, un esquema que compara desarmar el núcleo entero con quitarle una sola pieza.",
  guion: [
    "Última parte de 25-4, y es una distinción que hay que tener clarísima antes del primer ejercicio.",
    "La energía de amarre desarmaría el núcleo completo. La energía de separación es la energía mínima para remover un solo nucleón, el menos ligado.",
    "Miren el esquema: arriba, el helio-4 se desarma entero en cuatro piezas y cuesta 28,3 MeV; abajo, le quitamos un solo neutrón y cuesta 20,6, que es el ejercicio 25-9.",
    "El método es siempre el mismo: se suman las masas de lo que queda después y se les resta la de lo que había antes."
  ],
  preguntan: "¿Puede la energía de separación ser mayor que la energía de amarre total? No, pero sí puede ser mucho mayor que BE partido por A, que es un promedio. Eso es justamente lo que pasa en el ejercicio 25-9.",
  nota: "Si la gente se queda solo con una cosa de esta diapositiva, que sea el esquema: BE desarma todo, SE arranca una pieza."
},
{
  n: 20, t: "Ejemplo 25-3 · Quitarle un protón al oxígeno-16",
  pantalla: "A la izquierda, la reacción y el cálculo completo hasta los 7,40 MeV. A la derecha, la pregunta que el libro deja abierta y la respuesta.",
  guion: [
    "El ejemplo 25-3 le quita un protón al oxígeno-16 y queda nitrógeno-15: la suma da 16,007933; menos dieciséis exactos, 0,007933 unidades atómicas, que por 931,48 son 7,40 MeV.",
    "Y miren la pregunta que el libro deja abierta: «¿Puede usted sugerir por qué esta energía de amarre de un solo protón, 7,40 MeV, es menor que la energía de amarre por nucleón del ejemplo anterior, 7,68?»",
    "La respuesta tiene dos partes. BE partido por A es un promedio, y el protón que arrancamos es precisamente el menos ligado. Y además dejamos un nitrógeno-15, que ya no es un núcleo tan favorecido como el oxígeno-16, con Z y N pares.",
    "El ejercicio 25-9 vuelve sobre esto con un caso mucho más extremo."
  ],
  preguntan: "¿Por qué se usan masas atómicas si estamos quitando un protón del núcleo? Porque los electrones se cancelan: a la izquierda, el nitrógeno con siete más el hidrógeno con uno; a la derecha, el oxígeno con ocho. Cuadran.",
  nota: "La pregunta abierta del libro es el puente perfecto hacia el ejercicio 25-9. Déjala en el aire un segundo antes de pasar."
},
{
  n: 21, t: "Ejercicio 25-9 · Energía de separación de un neutrón del helio-4", i: true,
  pantalla: "El enunciado literal, la tabla de datos y la idea del método a la izquierda. A la derecha, siete pasos que se revelan al hacer clic.",
  guion: [
    "Primer ejercicio: «¿Cuál es la energía de separación para uno de los neutrones del helio-4?»",
    "[Clic 1 y 2] Nos piden la energía mínima para arrancar un solo nucleón, aquí un neutrón. El helio-4 tiene dos protones y dos neutrones; si le quito uno queda helio-3.",
    "[Clic 3] Aplico la conservación de la masa-energía, igual que en el ejemplo 25-3: la masa del helio-3 más la del neutrón, menos la del helio-4. Uso masas atómicas porque los electrones se cancelan.",
    "[Clic 4 y 5] 3,016029 más 1,008665 dan 4,024694; menos 4,002604, quedan 0,022090 unidades atómicas. Positivo: hay que entregar energía.",
    "[Clic 6 y 7] Por 931,48, el resultado es 20,58 MeV. Redondeando, 20,6.",
    "Y ahora lo interesante. La energía de amarre total del helio-4 es 28,3 MeV, o sea 7,07 por nucleón. Pero arrancarle un neutrón cuesta casi tres veces el promedio.",
    "¿Por qué? Porque el helio-4 es doblemente mágico: Z igual a dos y N igual a dos, las dos capas s cerradas. Romper esa capa es carísimo. Lo volveremos a ver en la diapositiva 39, y además responde al revés la pregunta que el libro dejaba abierta."
  ],
  preguntan: "¿De dónde salen esas masas si no están en el capítulo? De la tabla 6 del apéndice. En el extracto que tenemos no viene esa tabla, así que usé valores de tablas estándar, pero con el factor de conversión del propio texto, 931,48 MeV por uam.",
  nota: "Haz clic paso a paso, no los abras todos de golpe; la columna se desplaza sola. Si vas muy justa, abre directamente el 4, el 5 y el 7, pero no te saltes la interpretación final."
},
{
  n: 22, t: "Ejercicio 25-10 · Densidad nuclear frente a densidad atómica", i: true,
  pantalla: "El enunciado literal, los datos y el atajo del cubo de los radios a la izquierda. A la derecha, siete pasos revelables.",
  guion: [
    "Segundo ejercicio: «Suponga que el radio del átomo de hidrógeno es 0,53 ángstroms y muestre que la densidad nuclear del hidrógeno-1 es cerca de diez a la catorce veces mayor que la densidad atómica».",
    "[Clic 1 y 2] El atajo: la masa del átomo está prácticamente toda en el núcleo, porque el electrón pesa 1836 veces menos. Con la misma masa arriba, la razón de densidades es la razón inversa de los volúmenes: el cubo de la razón de radios.",
    "[Clic 3 y 4] El radio nuclear sale de la ecuación 25-6: como A es uno, es exactamente r cero, 1,3 fermis. Y el radio atómico, 0,53 ángstroms, son 5,3 por diez a la menos once metros: el de la primera órbita de Bohr.",
    "[Clic 5 y 6] La densidad nuclear da 1,8 por diez a la diecisiete, que coincide con la ecuación 25-9; y la atómica, 2,7 por diez a la tres, del orden de una roca.",
    "[Clic 7] La razón: 6,8 por diez a la trece, aproximadamente diez a la catorce. Queda demostrado.",
    "Una observación: si el radio atómico fuera exactamente diez mil veces el nuclear saldría diez a la doce. Sale diez a la catorce porque el átomo de hidrógeno es especialmente grande para su único nucleón."
  ],
  preguntan: "¿Y si usara r cero igual a 1,2 o 1,5 fermis? El resultado cambia por un factor de alrededor de dos, pero el orden de magnitud se mantiene. Por eso el enunciado dice «cerca de».",
  nota: "El paso 2 es el que ahorra tiempo: si lo explicas bien, el 5 y el 6 son mera aritmética. Si vas apurada, abre el 2, el 3 y el 7."
},
{
  n: 23, t: "Romper el núcleo más simple que existe: el deuterón",
  pantalla: "A la izquierda, de qué trata el capítulo 26 y la energía de amarre del deuterón con la ecuación 26-1. A la derecha, el cálculo completo y la figura 26-1 del libro.",
  guion: [
    "Empieza el capítulo 26, sección 26-1.",
    "Cuando neutrones, protones, partículas alfa o fotones de alta energía chocan con el núcleo pueden producir cambios: la partícula entra y se expulsan otras, el núcleo se fractura, o rebota. La estabilidad se mide en términos de la energía de la partícula incidente y de las energías de amarre de las partículas que lo forman.",
    "El libro escoge el caso más simple: el deuterón, un protón y un neutrón. Su energía de amarre sale de la ecuación 25-15 con Z y N iguales a uno: 0,002388 unidades atómicas, o sea 2,22 MeV. La figura 26-1 dibuja ese escalón."
  ],
  preguntan: "En el capítulo 25 decía 2,24 MeV y aquí sale 2,22. ¿Cuál es? El cálculo detallado del capítulo 26 da 2,22; el 2,24 de la página 279 es un valor redondeado de otra fuente. La diferencia es del uno por ciento, pero está bien notar la inconsistencia del texto.",
  nota: "Señala que el deuterón es el único núcleo con solo dos piezas: por eso se puede medir su BE directamente, que es lo que viene ahora."
},
{
  n: 24, t: "Medir una energía de amarre con luz",
  pantalla: "A la izquierda, la fotodesintegración y la energía umbral, ecuaciones 26-2 a 26-4. A la derecha, el proceso inverso y por qué este número vale tanto.",
  guion: [
    "¿Y cómo se mide esa energía de amarre? Por fotodesintegración: se lanzan fotones gamma monoenergéticos, el núcleo los absorbe y se desintegra en protón más neutrón.",
    "Si bajamos la energía del fotón hasta que las piezas salen sin energía cinética obtenemos el umbral, y el resultado es elegantísimo: h nu cero es igual a la energía de amarre. Se mide una energía nuclear pesando el color del fotón más débil capaz de romper el deuterón.",
    "Y existe el proceso inverso: protón más neutrón en reposo dan un deuterón más un fotón gamma de 2,22 MeV.",
    "Es el único caso en que la energía de amarre se mide directamente, sin pasar por tablas de masas, porque el deuterón tiene solo dos piezas."
  ],
  preguntan: "¿Por qué hace falta que las energías cinéticas sean cero? Porque si el fotón trae más energía de la justa, el sobrante se va como movimiento de las piezas y ya no estamos midiendo solo la ligadura. El umbral es el caso límite en que todo el fotón se gasta en romper.",
  nota: "El punto bonito es «h nu cero igual a BE»: medir una energía nuclear pesando un color de luz. Dilo con esas palabras."
}
];
