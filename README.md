# El núcleo y sus modelos

Presentación interactiva y material de clase para una exposición de 30 minutos sobre los
**capítulos 25 y 26** de *Curso de Física Moderna* de **Acosta, Cowan y Graham**
(Cuarta parte: El núcleo).

**Tema:** qué es el núcleo —de qué está hecho, qué lo mantiene unido y cuánta energía cuesta
desarmarlo— y cómo se lo modela, con los dos modelos incompatibles que usa la física nuclear:
el de la gota líquida y el de capas.

| | |
|---|---|
| **Estudiante** | Melissa Cardona Navarro |
| **Docente** | Jorge Navarro |
| **Fecha de exposición** | 29 de noviembre de 2026 |
| **Curso** | Historia y Epistemología de la Física (21818) · 4 créditos |
| **Programa** | Física · Facultad de Ciencias Básicas · Universidad del Atlántico |
| **Duración** | 25 diapositivas · 30:00 min (versión corta: 24 min) |

## Ver la presentación

La presentación es una página web autocontenida: se abre en el navegador, sin instalar nada.

- **En local:** abre `index.html` en cualquier navegador.
- **En línea:** una vez publicado en GitHub Pages, en la dirección del repositorio.

### Atajos durante la exposición

| Tecla | Acción |
|---|---|
| `←` `→` / `espacio` | Navegar entre diapositivas |
| `1`–`9` | Saltar a una diapositiva |
| `F` | Pantalla completa |
| `T` | Cambiar entre tema claro y oscuro |
| `?` | Ver la ayuda |

También se puede abrir directamente en oscuro añadiendo `?theme=dark` a la URL.

## Contenido de las diapositivas

| # | Diapositiva | Sección del libro |
|---|---|---|
| 1–2 | Portada y hoja de ruta | — |
| 3–4 | El átomo nuclear · núclidos, isótopos, isóbaros, isótonos | 25-1 |
| 5–7 | Las fuerzas nucleares · Yukawa, el potencial nuclear, la barrera de Coulomb | 25-2 |
| 8 | Déficit de masa, radio y densidad nuclear | 25-3 |
| 9–10 | Energía de amarre y energía de separación | 25-4 |
| 11–12 | **Ejercicios 25-9 y 25-10** | problemas, p. 285 |
| 13–14 | Fotodesintegración y estabilidad nuclear | 26-1 |
| 15–16 | Momento angular de spin y magnetón nuclear | 26-2 |
| 17 | ¿Electrones en el núcleo? Las tres pruebas | 26-3 |
| 18–20 | El modelo de la gota líquida y la fórmula de Weizsäcker | 26-4 |
| 21–22 | El modelo de capas, los números mágicos y el spin nuclear | 26-5 |
| 23–24 | **Ejercicios 26-9 y 26-10** | problemas, pp. 296-297 |
| 25 | Síntesis y bibliografía | — |

## Ejercicios resueltos

Los ocho primeros problemas de cada capítulo estaban asignados a otros compañeros, así que se
resuelven los disponibles del noveno en adelante. Del capítulo 26 solo quedaban dos, 26-9 y 26-10.

| Problema | Enunciado | Resultado |
|---|---|---|
| **25-9** | Energía de separación de un neutrón del ⁴₂He | **20,6 MeV** · casi tres veces BE/A, porque el ⁴He es doblemente mágico |
| **25-10** | Densidad nuclear frente a atómica del ¹₁H | **ρ_N/ρ_A ≈ 6,8 × 10¹³ ≈ 10¹⁴** |
| **26-9** | Electrón confinado en un átomo (Δx = 10⁻¹⁰ m) | **K ≈ 3,8 eV** · no relativista, frente a los 20 MeV del núcleo |
| **26-10** | Términos de Weizsäcker para ¹⁶O y ²³⁹Pu | En el ligero domina el **efecto superficial** (44,7 %); en el pesado, **Coulomb** (26,5 %) |

## Diapositivas interactivas

Doce de las veinticinco: **4** (constructor de núclidos), **6** (potencial nuclear con deslizador),
**7** (barrera de Coulomb: clásico frente a efecto túnel), **11**, **12**, **23** y **24**
(los cuatro ejercicios, paso a paso), **14** (curva de estabilidad N-Z), **17** (las tres pruebas),
**19** (los cinco términos de Weizsäcker), **20** (curva BE/A con fusión y fisión) y
**21** (números mágicos).

## Contenido del repositorio

| Archivo | Descripción |
|---|---|
| `index.html` | La presentación completa (25 diapositivas, HTML/CSS/JS sin dependencias) |
| `img/` | Logos institucionales, retratos y diagramas de Wikimedia Commons |
| `img/libro/` | Figuras y tablas recortadas del propio libro, para uso docente |
| `img/CREDITOS.json` | Autoría y licencia de cada imagen de Wikimedia |
| `Guion - El nucleo y sus modelos.docx` | Guion palabra por palabra, con plan de tiempos, preguntas probables y glosario |
| `build/` | Generador del guion (Node + el paquete `docx`). No se publica |

Los PDF escaneados del libro (`radiacion/`) no se versionan: son material con derechos de autor
y pesan 80 MB.

### Regenerar el guion

```bash
cd build && npm install && node guion-nucleo.js
```

El reparto de tiempos no está escrito a mano: el generador lo calcula en proporción a las
palabras habladas de cada diapositiva, de modo que el plan de tiempos y el guion no se
puedan desincronizar.

## Fuente

ACOSTA, Virgilio; COWAN, Clyde L. y GRAHAM, B. J. *Curso de Física Moderna*. Harla, México.
Capítulo 25, «El núcleo», pp. 277-285, y capítulo 26, «Modelos del núcleo», pp. 286-297.

Lectura recomendada por el propio libro al final de esos capítulos: Bethe (*Sci. Am.*, 1953),
Mayer (*Phys. Rev.* 75, 1949 y *Sci. Am.*, 1951), Bartlett (*Nature* 130, 1932),
Flowers (*Progresos en la física nuclear*, 1952), Peierls (*Sci. Am.*, 1959),
Weisskopf y Rosenbaum (*Sci. Am.*, 1955) y Marshak (*Sci. Am.*, 1960).

## Créditos de las imágenes

De **Wikimedia Commons**: retratos de Hideki Yukawa (dominio público, Asahi Shinbun), María
Goeppert-Mayer (dominio público, Nobel Foundation), James Chadwick (Los Alamos National
Laboratory) y Carl Friedrich von Weizsäcker (CC BY-SA 3.0, Ian Howard); carta de núclidos
(CC BY-SA 3.0); esquema del modelo de capas (CC BY-SA 3.0, Bakken); curva de energía de amarre
y esquema de fisión (dominio público, Fastfission); deformación de la gota líquida
(CC BY-SA 3.0, Hullernuc). El detalle completo está en `img/CREDITOS.json`.

Las figuras y tablas de `img/libro/` proceden del libro de Acosta, Cowan y Graham y se
reproducen únicamente con fines docentes, citando capítulo, figura y página en cada diapositiva.

Los logos institucionales pertenecen a la Universidad del Atlántico y a su Programa de Física.
