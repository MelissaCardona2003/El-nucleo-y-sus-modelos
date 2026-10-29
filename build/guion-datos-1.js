// Guion · El núcleo y sus modelos — diapositivas 1 a 13
// El guion hablado está ajustado a ~150 palabras por minuto: es lo que de verdad
// cabe en 30 minutos. El detalle completo está EN LAS DIAPOSITIVAS; aquí va
// solamente lo que hay que decir en voz alta.

module.exports = [
{
  n: 1, t: "Portada — El núcleo y sus modelos", s: 30,
  pantalla: "Portada con los logos de la Universidad del Atlántico y del Programa de Física, tu nombre, el del docente y la fecha. A la derecha, la carta de núclidos: el mapa de todos los núcleos que existen, coloreados según cómo se desintegran.",
  guion: [
    "Buenos días. Soy Melissa Cardona Navarro y hoy expongo los capítulos 25 y 26 del Curso de Física Moderna de Acosta, Cowan y Graham: «El núcleo» y «Modelos del núcleo».",
    "El 25 pregunta qué es el núcleo: de qué está hecho, qué lo mantiene unido y cuánta energía cuesta desarmarlo. El 26 pregunta cómo lo imaginamos, dado que todavía no existe una teoría completa del núcleo.",
    "La imagen es la carta de núclidos: cada cuadrito es un núcleo posible y los negros son los estables. Al final van a entender por qué esa franja tiene esa forma."
  ],
  nota: "Deja la portada mientras te presentas. Si el salón tiene mucha luz, presiona T para el tema oscuro; F para pantalla completa."
},
{
  n: 2, t: "Hoja de ruta", s: 35,
  pantalla: "Agenda con las nueve secciones de los dos capítulos más un bloque para los cuatro ejercicios. Cada bloque es clicable y salta a esa diapositiva.",
  guion: [
    "Este es el recorrido. Del capítulo 25: el átomo nuclear, las fuerzas nucleares, las propiedades del núcleo y la energía de amarre.",
    "Del 26: fotodesintegración y estabilidad, momento angular de spin, la pregunta de si hay electrones en el núcleo, el modelo de la gota líquida y el modelo de capas.",
    "Y por el camino resuelvo cuatro ejercicios: el 25-9 y el 25-10, y el 26-9 y el 26-10.",
    "Hay doce diapositivas interactivas; en los ejercicios iré revelando el desarrollo paso a paso."
  ],
  nota: "Si vas corta de tiempo, esto se resume en una frase: «primero qué es el núcleo, después cómo lo modelamos, y cuatro ejercicios por el camino»."
},
{
  n: 3, t: "El átomo nuclear", s: 70,
  pantalla: "Cuatro paneles: lo que estableció Rutherford, por qué aquí no sirve la mecánica clásica, la tabla que compara las energías atómicas y nucleares, y el Ejemplo 25-1 del agua.",
  guion: [
    "Sección 25-1. Para 1911 los experimentos de dispersión de Rutherford habían mostrado que el átomo consiste en un núcleo muy pequeño, de unos diez elevado a menos catorce metros, y electrones girando a gran distancia. Como casi toda la masa está en el núcleo, el átomo es, en su mayor parte, espacio vacío. Y el modelo tenía que ser dinámico: en uno estático la atracción electrostática habría causado el colapso inmediato.",
    "Ahora, una advertencia del libro. Rutherford se basaba en la mecánica clásica y Bohr en los primeros conceptos cuánticos, pero fue la teoría cuántica de Schrödinger y Heisenberg la que describió bien el átomo. Para el núcleo el problema es más complejo y, cito, «aún no se ha formulado una teoría completa y unificada». Por eso se usan dos modelos, que son el capítulo 26.",
    "Lo que hay que retener es la tabla. La física atómica trabaja con electrones y energías de unos pocos electrón-volts: 13,6 para arrancarle el electrón al hidrógeno. La nuclear trabaja con protones y neutrones, y ahí son millones.",
    "El ejemplo 25-1 lo pone en números: formar una molécula de agua libera tres electrón-volts; la fisión del uranio-235 libera doscientos millones. Un factor de cien millones: esa es la distancia entre la química y la física nuclear."
  ],
  preguntan: "¿Entonces el modelo de Rutherford está mal? No está mal, está incompleto. Describe bien la geometría —núcleo pequeño, electrones lejos— pero no puede explicar por qué el átomo es estable. Eso lo resuelve la mecánica cuántica.",
  nota: "El contraste 3 eV frente a 200 MeV es la frase que más engancha del capítulo 25. Dila despacio."
},
{
  n: 4, t: "Núclidos: dos números lo determinan todo", s: 80, i: true,
  pantalla: "A la izquierda, la notación del libro y la tabla de las tres familias. A la derecha, un constructor interactivo de núclidos con dos deslizadores, y los cálculos de la masa atómica media del cloro y del hidrógeno.",
  guion: [
    "Seguimos en 25-1, con la nomenclatura. Esta es la ecuación 25-1.",
    "Z es el número atómico: cuántos protones. N es el número neutrónico: cuántos neutrones. Y A es el número másico, A igual a N más Z, el total de nucleones. Protones y neutrones, dentro del núcleo, se llaman nucleones.",
    "El ejemplo del libro es el cloro-35: diecisiete protones, dieciocho neutrones, treinta y cinco nucleones. El N suele omitirse por redundante.",
    "[Mueve los deslizadores] Aquí se construye cualquier núclido. Con Z igual a catorce y N igual a quince sale silicio-29.",
    "Y con esto, las tres familias. Los isótopos tienen el mismo Z y distinto A: silicio-28, 29, 30 y 32. [Clic: Z=17, N=20] Con el mismo Z y más neutrones obtengo cloro-37.",
    "Los isóbaros tienen el mismo A y distinto Z. [Clic: Z=18, N=17] Argón-35: mismo número de masa que el cloro-35, distinto elemento.",
    "Y los isótonos tienen el mismo número de neutrones: carbono-14, nitrógeno-15 y oxígeno-16, todos con ocho.",
    "De aquí sale el peso atómico. El cloro natural es 75,53 por ciento de cloro-35 y 24,47 de cloro-37; el promedio ponderado da 35,46, que es el número de la tabla periódica. El libro aclara que llamarlo «peso atómico» no es del todo apropiado."
  ],
  preguntan: "¿Por qué el peso atómico del cloro no es entero? Porque no es la masa de un núcleo, es el promedio de los dos isótopos de la naturaleza pesado por su abundancia. Ningún átomo de cloro pesa 35,46.",
  nota: "Mueve los deslizadores de verdad mientras hablas. Si vas con el tiempo justo, salta el párrafo del hidrógeno (queda en pantalla de todos modos)."
},
{
  n: 5, t: "Las fuerzas nucleares", s: 75,
  pantalla: "Retrato de Hideki Yukawa a la izquierda. A la derecha, el problema de Coulomb, la respuesta de Yukawa y las cuatro características de las fuerzas nucleares en cuatro tarjetas.",
  guion: [
    "Sección 25-2, y aquí aparece el problema de fondo del capítulo.",
    "Según Coulomb, los protones apretadamente distribuidos dentro del núcleo deberían repelerse con fuerza y dispersarse. Dicho de otro modo: el núcleo no debería existir. Es difícil explicar su estabilidad a menos que los nucleones estén bajo alguna clase de fuerzas atractivas muy intensas, que se clasifican como interacciones fuertes.",
    "Quien las estudió fue el físico japonés Hideki Yukawa, el de la foto. En 1935 anunció sus características principales y postuló una partícula llamada pión, con una masa de 270 veces la del electrón. Por esa contribución recibió el Nobel de Física en 1949.",
    "Yukawa mencionó cuatro características, que son las cuatro tarjetas.",
    "Una: son efectivas solamente en cortos intervalos. Dos: son independientes de la carga; la interacción protón-protón, neutrón-neutrón y protón-neutrón es la misma, excluyendo Coulomb. Tres: son las más intensas conocidas en la naturaleza; la gravedad y el electromagnetismo se descubrieron antes solo porque están asociados a cuerpos macroscópicos. Y cuatro: son rápidamente saturadas por los nucleones circundantes.",
    "Las dos diapositivas siguientes las desarrollan."
  ],
  preguntan: "¿El pión es lo mismo que el mesón? El mesón es la familia: partículas de masa intermedia. El pión es el mesón concreto que Yukawa predijo. La hipótesis se confirmó después y reveló que existen varios tipos de mesones.",
  nota: "Las cuatro características son la columna vertebral de 25-2. Enúncialas aunque vayas con prisa."
},
{
  n: 6, t: "El potencial nuclear", s: 65, i: true,
  pantalla: "Reconstrucción interactiva de la figura 25-1: la curva del potencial nuclear. Con el deslizador mueves la separación entre dos nucleones y el panel de la derecha cambia según la zona.",
  guion: [
    "Esta curva es la figura 25-1: la primera característica, el corto alcance, dibujada. En el eje horizontal está la separación entre dos nucleones en fermis; un fermi son diez elevado a menos quince metros.",
    "[Deslizador hacia 1 fermi] A poco menos de un fermi el potencial es intensamente atractivo: un pozo de unos cien MeV. Ahí vive el núcleo.",
    "[Deslizador hacia 3 o 4 fermis] Pero miren al separarlos: la curva sube hacia cero muy rápido y a varios fermis no queda nada. Son apreciables sólo a distancias del orden de diez a la menos quince metros o menores. Por eso un núcleo no atrae a sus vecinos: es la fuerza más intensa de la naturaleza y no se entera de lo que pasa dos átomos más allá.",
    "[Deslizador por debajo de 0,5] Y el otro extremo, el que sorprende: por debajo de medio fermi los nucleones se repelen entre sí. Esa pared impide que el núcleo se colapse sobre sí mismo.",
    "Y la cuarta característica, la saturación: son las únicas fuerzas de la naturaleza que se saturan. Cuando un nucleón está completamente rodeado, ya no puede ligar más. Guarden la idea: es la que justifica comparar el núcleo con una gota de líquido."
  ],
  preguntan: "¿Por qué se repelen a distancias tan cortas si la fuerza es atractiva? El libro solo dice que «la evidencia experimental lo sugiere». Hoy se entiende como un efecto de la estructura interna de los nucleones, pero eso está fuera de este capítulo.",
  nota: "Mueve el deslizador en los tres rangos. El panel de la derecha hace el trabajo por ti."
},
{
  n: 7, t: "La barrera de Coulomb y el efecto túnel", s: 80, i: true,
  pantalla: "Reconstrucción interactiva de la figura 25-2: la barrera de Coulomb y el pozo de Yukawa, con un protón que se acerca. El conmutador cambia entre «mecánica clásica» y «mecánica cuántica».",
  guion: [
    "Seguimos en 25-2, con la pregunta práctica: ¿cómo se entra en un núcleo?",
    "Cuando el protón está lejos, toda su energía es cinética. Al acercarse es repelido por el núcleo positivo y experimenta un potencial repulsivo de Coulomb: la ecuación 25-2, e V igual a k Z e cuadrado sobre r.",
    "En la figura, la energía total AB es la potencial AC más la cinética CB. Y como la curva da una derivada negativa del potencial, la fuerza eléctrica resulta positiva: repulsiva.",
    "[Conmutador en «clásica»] Ahora miren. La energía total del protón es menor que la altura de la barrera. En términos clásicos, al alcanzar la posición B su energía cinética iguala a la potencial, «chocará» y rebotará, incapaz de penetrar la barrera. Clásicamente, nunca entra.",
    "[Conmutador en «cuántica»] Y sin embargo entra. La mecánica cuántica explica, por el efecto túnel, cómo el protón tiene una probabilidad finita de penetrar la barrera y caer dentro del pozo de potencial de Yukawa, que es la ecuación 25-3.",
    "Y una cosa que importará enseguida: la barrera de Coulomb no ofrece resistencia a los neutrones. Al no tener carga, sienten las fuerzas nucleares desde algo más lejos que las partículas cargadas."
  ],
  preguntan: "¿El efecto túnel significa que el protón atraviesa la barrera sin energía suficiente? Significa que su función de onda no se anula al otro lado, y por tanto hay probabilidad finita de encontrarlo allí. No «pasa por encima»: la pregunta clásica «¿dónde está ahora?» deja de tener sentido.",
  nota: "Usa el conmutador: primero clásico, deja que complete un rebote, y después cuántico. El contraste visual es el argumento."
},
{
  n: 8, t: "Algunas propiedades del núcleo", s: 80,
  pantalla: "Seis paneles con las ecuaciones 25-4 a 25-9: el déficit de masa, la equivalencia masa-energía, el radio nuclear, el volumen, la densidad nuclear y la comparación de las tres densidades.",
  guion: [
    "Sección 25-3. El núcleo porta una carga neta de más Z e, y parecería que su masa debiera ser Z veces la masa del protón más N veces la del neutrón. Pero los espectrómetros de masa señalan otra cosa: la masa nuclear real es menor que esa suma. A esa diferencia se le llama déficit de masa, ecuación 25-4.",
    "Y la explicación es la conversión masa-energía: cuando los protones y neutrones se combinan para formar un núcleo estable, algo de la masa desaparece como energía liberada, usualmente rayos gamma.",
    "El tamaño: la ecuación 25-6 dice que el radio es r cero por A elevado a un tercio. Ese r cero vale 1,2 fermis medido con partículas cargadas y 1,5 con neutrones, que no ven la barrera de Coulomb. Para problemas, dice el libro, usaremos el intermedio de 1,3: apunten ese número.",
    "Si el radio va como A a un tercio, el volumen va como A: los nucleones se empaquetan siempre igual de apretados.",
    "Y de ahí sale el número más espectacular del capítulo: la densidad nuclear es unos dos por diez a la diecisiete kilogramos por metro cúbico. El libro lo llama «un número increíblemente grande»: un centímetro cúbico pesaría doscientos millones de toneladas.",
    "El radio atómico es diez mil veces el nuclear, así que la densidad atómica es doce órdenes de magnitud menor; y el agua, mil kilogramos por metro cúbico. Por ahí va el ejercicio 25-10."
  ],
  preguntan: "¿Por qué hay tres valores de r cero? Porque se mide de formas distintas: con protones se obtiene el radio de la distribución de carga, 1,2 F; con neutrones, el de la materia nuclear, 1,5 F, mayor porque no hay barrera que los frene. El 1,3 F es un compromiso para hacer problemas.",
  nota: "Si vas justa, resume el volumen en «va como A». El que no puedes saltar es el párrafo de la densidad: prepara el ejercicio 25-10."
},
{
  n: 9, t: "Energía de amarre nuclear", s: 80,
  pantalla: "A la izquierda, la definición, el paso de masas nucleares a masas atómicas y el criterio del signo. A la derecha, el Ejemplo 25-2 completo con el oxígeno-16 y la tabla de constantes.",
  guion: [
    "Sección 25-4, el concepto central de los dos capítulos.",
    "Esa masa que desaparece se convierte en energía, y esa energía se llama energía de amarre, BE. La definición del libro: para separar un núcleo estable en sus protones y neutrones constituyentes, la energía mínima requerida es la energía de amarre. Es la ecuación 25-10.",
    "Pero hay un problema práctico: las tablas están en masas atómicas, no nucleares. Al convertir ocurre algo cómodo: los términos con la masa del electrón se cancelan. Queda la ecuación 25-15, que usaremos siempre: BE igual a Z por la masa del hidrógeno, más N por la masa del neutrón, menos la masa atómica.",
    "El criterio del signo es simple: si BE es positiva el núcleo es estable y hay que darle energía desde fuera; si es negativa, se desintegra solo.",
    "El ejemplo 25-2 lo hace con el oxígeno-16: ocho masas de hidrógeno más ocho de neutrón suman 16,13192 unidades atómicas, y la masa atómica del oxígeno-16 es exactamente dieciséis, porque es el patrón de la escala. La diferencia, más 0,13192, es la energía de amarre.",
    "Y se convierte: una unidad atómica de masa son 931,48 MeV, así que son 122,8 MeV. Entre los dieciséis nucleones, 7,68 MeV por nucleón. Retengan ese número."
  ],
  preguntan: "¿Por qué la masa atómica del oxígeno-16 es exactamente 16? Porque en la escala que usa este libro el oxígeno-16 es el patrón. No es una coincidencia física.",
  nota: "Es la diapositiva más importante del capítulo 25: los ejercicios 25-9 y 26-10 se apoyan en ella. No la saltes nunca."
},
{
  n: 10, t: "Energía de separación", s: 60,
  pantalla: "A la izquierda, la diferencia entre BE y SE y el método. A la derecha, el Ejemplo 25-3 completo y la pregunta abierta que deja el libro.",
  guion: [
    "Última parte de 25-4, y es una distinción que hay que tener clarísima antes del primer ejercicio.",
    "La energía de amarre desarmaría el núcleo completo. La energía de separación es la energía mínima para remover un solo nucleón, el menos ligado. El método es la conservación de la masa-energía: se suman las masas de lo que queda después y se les resta la de lo que había antes.",
    "El ejemplo 25-3 le quita un protón al oxígeno-16 y queda nitrógeno-15: la masa del nitrógeno-15 más la del hidrógeno da 16,007933; menos dieciséis exactos, 0,007933 unidades atómicas, que por 931,48 son 7,40 MeV.",
    "Y miren la pregunta que el libro deja abierta: «¿Puede usted sugerir por qué esta energía de amarre de un solo protón, 7,40 MeV, es menor que la energía de amarre por nucleón del ejemplo anterior, 7,68?»",
    "La respuesta es que BE partido por A es un promedio: el protón que arrancamos es el menos ligado. El ejercicio 25-9 vuelve sobre esto con un caso mucho más extremo."
  ],
  preguntan: "¿Por qué se usan masas atómicas si estamos quitando un protón del núcleo? Porque los electrones se cancelan: a la izquierda, el nitrógeno con siete más el hidrógeno con uno; a la derecha, el oxígeno con ocho. Cuadran.",
  nota: "La pregunta abierta del libro es el puente perfecto hacia el ejercicio 25-9. Déjala en el aire un segundo antes de pasar."
},
{
  n: 11, t: "Ejercicio 25-9 · Energía de separación de un neutrón del helio-4", s: 100, i: true,
  pantalla: "El enunciado literal, la tabla de datos y la idea del método a la izquierda. A la derecha, siete pasos que se revelan al hacer clic.",
  guion: [
    "Primer ejercicio: «¿Cuál es la energía de separación para uno de los neutrones del helio-4?»",
    "[Clic 1] Nos piden la energía mínima para arrancar un solo nucleón, y aquí es un neutrón. No es la energía de amarre total.",
    "[Clic 2] La reacción: el helio-4 tiene dos protones y dos neutrones; si le quito un neutrón quedan dos protones y un neutrón, que es helio-3.",
    "[Clic 3] Aplico la conservación de la masa-energía, igual que en el ejemplo 25-3 pero con un neutrón: la masa del helio-3 más la del neutrón, menos la del helio-4. Uso masas atómicas porque los electrones se cancelan: los dos helios tienen dos.",
    "[Clic 4] Los valores: 3,016029 más 1,008665 dan 4,024694. Y la masa del helio-4 es 4,002604.",
    "[Clic 5] Restando: 0,022090 unidades atómicas de masa. Positivo, así que hay que entregar energía.",
    "[Clic 6 y 7] Por 931,48, el resultado es 20,58 MeV. Redondeando, 20,6.",
    "Y ahora lo interesante. La energía de amarre total del helio-4 es 28,3 MeV, o sea 7,07 por nucleón. Pero arrancarle un neutrón cuesta 20,6: casi tres veces el promedio.",
    "¿Por qué? Porque el helio-4 es doblemente mágico: Z igual a dos y N igual a dos, las dos capas s cerradas. Está excepcionalmente ligado y romper esa capa es carísimo. Lo volveremos a ver en la diapositiva 21. Y fíjense que esto responde, al revés, la pregunta que el libro dejaba abierta."
  ],
  preguntan: "¿De dónde salen esas masas si no están en el capítulo? De la tabla 6 del apéndice. En el extracto que tenemos no viene esa tabla, así que usé valores de tablas estándar, pero con el factor de conversión del propio texto, 931,48 MeV por uam.",
  nota: "Haz clic paso a paso, no los abras todos de golpe; la columna se desplaza sola. Si vas muy justa, abre directamente el 4, el 5 y el 7, pero no te saltes la interpretación final."
},
{
  n: 12, t: "Ejercicio 25-10 · Densidad nuclear frente a densidad atómica", s: 100, i: true,
  pantalla: "El enunciado literal, los datos y el atajo del cubo de los radios a la izquierda. A la derecha, siete pasos revelables.",
  guion: [
    "Segundo ejercicio: «Suponga que el radio del átomo de hidrógeno es 0,53 ángstroms y muestre que la densidad nuclear del hidrógeno-1 es cerca de diez a la catorce veces mayor que la densidad atómica».",
    "[Clic 1] Comparamos dos densidades del mismo hidrógeno: la del núcleo y la del átomo completo.",
    "[Clic 2] El atajo: la masa del átomo está prácticamente toda en el núcleo, porque el electrón pesa 1836 veces menos. Con la misma masa arriba, la razón de densidades es la razón inversa de los volúmenes, es decir, el cubo de la razón de radios.",
    "[Clic 3 y 4] El radio nuclear sale de la ecuación 25-6: como el hidrógeno-1 tiene A igual a uno, es exactamente r cero, y el libro nos dice que usemos 1,3 fermis. Y el radio atómico, 0,53 ángstroms, son 5,3 por diez a la menos once metros: el de la primera órbita de Bohr.",
    "[Clic 5 y 6] La densidad nuclear, masa entre cuatro tercios de pi erre cubo, da 1,8 por diez a la diecisiete, que coincide con el valor de la ecuación 25-9: buena señal. Y la atómica, con el radio grande, 2,7 por diez a la tres, del orden de una roca.",
    "[Clic 7] La razón: 6,8 por diez a la trece, aproximadamente diez a la catorce. Queda demostrado.",
    "Una observación: si el radio atómico fuera exactamente diez mil veces el nuclear saldría diez a la doce. Sale diez a la catorce porque el átomo de hidrógeno es especialmente grande para su único nucleón. La conclusión del libro es la misma: la materia es, casi toda, espacio vacío."
  ],
  preguntan: "¿Y si usara r cero igual a 1,2 o 1,5 fermis? El resultado cambia por un factor de alrededor de dos, pero el orden de magnitud se mantiene. Por eso el enunciado dice «cerca de».",
  nota: "El paso 2 es el que ahorra tiempo: si lo explicas bien, el 5 y el 6 son mera aritmética. Si vas apurada, abre el 2, el 3 y el 7."
},
{
  n: 13, t: "Fotodesintegración y estabilidad nuclear", s: 75,
  pantalla: "A la izquierda, de qué trata el capítulo 26 y el cálculo de la energía de amarre del deuterón. A la derecha, la figura 26-1 del libro, la fotodesintegración y el proceso inverso.",
  guion: [
    "Empieza el capítulo 26, sección 26-1.",
    "Comparadas con las químicas, las energías que atan a los nucleones son muy grandes. Aun así, cuando neutrones, protones, partículas alfa o fotones de alta energía chocan con el núcleo pueden producir cambios: la partícula entra y se expulsan otras, el núcleo se fractura, o simplemente rebota. La estabilidad total se mide en términos de la energía de la partícula incidente y de las energías de amarre de las partículas que lo forman.",
    "El libro escoge el caso más simple: después del protón del hidrógeno, la estructura más simple es el deuterón, un protón y un neutrón.",
    "Su energía de amarre sale de la ecuación 25-15 con Z y N iguales a uno: 2,016490 menos 2,014102 dan 0,002388 unidades atómicas, o sea 2,22 MeV. La figura 26-1 dibuja ese escalón.",
    "¿Y cómo se mide? Por fotodesintegración: se lanzan fotones gamma monoenergéticos, el núcleo los absorbe y se desintegra en protón más neutrón.",
    "Si hacemos las energías cinéticas iguales a cero obtenemos la energía umbral, y el resultado es elegantísimo: h nu cero es igual a la energía de amarre. Se mide una energía nuclear pesando el color del fotón más débil capaz de romper el deuterón.",
    "Y existe el proceso inverso: protón más neutrón en reposo dan un deuterón más un fotón gamma de 2,22 MeV."
  ],
  preguntan: "En el capítulo 25 decía 2,24 MeV y aquí sale 2,22. ¿Cuál es? El cálculo detallado del capítulo 26 da 2,22; el 2,24 de la página 279 es un valor redondeado de otra fuente. La diferencia es del uno por ciento, pero está bien notar la inconsistencia del texto.",
  nota: "El punto bonito es «h nu cero igual a BE»: medir una energía nuclear pesando un color de luz. Dilo con esas palabras."
}
];
