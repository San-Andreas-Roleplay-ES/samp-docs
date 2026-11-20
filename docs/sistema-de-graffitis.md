# Sistema de graffitis

## Introducción

Los graffitis son carteles de texto que pintas con una lata de spray sobre cualquier pared de la ciudad y que quedan guardados de forma permanente. Sirven para firmar un barrio, dejar un recado o marcar el territorio de una pandilla, y cualquier jugador puede taparlos pintando encima.

Hay dos familias de estilos. Las **fuentes clásicas** (Arial, Arial Black, Comic Sans MS y Diploma) están disponibles para todos y puedes elegir su tamaño. Las **fuentes de letras** son doce estilos callejeros exclusivos de usuarios premium de cualquier nivel: cada letra se pinta como una pieza independiente, con su propio color, y cada fuente trae un tamaño fijo pensado para leerse bien desde lejos.

Pintar un graffiti da Burger Points y, dentro del territorio de tu propia pandilla, puede dar habilidad de delincuente. El sistema de territorios se explica en [Sistema de zonas de pandilla](sistema-de-zonas-de-pandilla.md) y los puntos en [Sistema de Burger Points](sistema-de-burger-points.md).

### Comandos

- /graffiti crear — inicia la creación de un graffiti en la pared que tengas delante.
- /graffiti editar — reposiciona un graffiti tuyo pintado hace menos de 5 minutos.
- /graffiti borrar — elimina un graffiti tuyo pintado hace menos de 5 minutos.

## Requisitos

| Requisito | Detalle |
|---|---|
| Tiempo de juego | Al menos **8 horas** de juego con el personaje |
| Cuenta | Cuenta **certificada** (ver [Sistema de certificación](sistema-de-certificacion.md)) |
| Material | Una **lata de spray** con carga en la **mano derecha** |
| Cantidad | Hasta **2 graffitis** activos a la vez. Para tener más necesitas **puntos de rol positivos** |
| Interiores | Pintar dentro de una propiedad o en cualquier mundo privado requiere **premium platino** o superior |
| Fuentes de letras | Cualquier nivel de **premium** |
| Espacio en el mapa | El servidor admite como máximo **1.024** graffitis. Si se llena, no se pueden crear más hasta que se libere algún hueco |

### La lata de spray

La lata tiene una carga de **10.000** unidades y cada graffiti terminado gasta **250**, así que una lata llena da para **40 graffitis**. La carga se descuenta al guardar el graffiti, no mientras pintas. Si cancelas o te alejas antes de terminar, no gastas nada.

## Cómo se pinta

1. Colócate frente a la pared con la lata en la mano derecha y escribe `/graffiti crear`.
2. Escribe el **texto**, de hasta **24 caracteres** sin contar las etiquetas de color. Debe estar en inglés, salvo jergas hispanas.
3. Elige la **fuente** en el selector, que muestra una vista previa de cada estilo. Las cuatro clásicas aparecen primero y las doce de letras a continuación.
4. Con una fuente clásica, elige el **tamaño**: pequeño, mediano, grande o gigante. El gigante solo admite textos de hasta **14 caracteres**. Las fuentes de letras no piden tamaño.
5. Revisa el resumen, confirma con **Ir a pintar** y **mantén presionado el botón de disparo** con la lata en la mano para empezar.
6. Cuando la barra de progreso termina, acomoda el graffiti sobre la pared con el editor de objetos y guárdalo.

### Etiquetas de color

Dentro del texto puedes escribir etiquetas que cambian el color. En las fuentes clásicas colorean el texto que va después de la etiqueta. En las fuentes de letras colorean **cada letra** que se escribe a partir de ese punto, de modo que una misma palabra puede llevar varios colores.

| Etiqueta | Efecto | Etiqueta | Efecto |
|---|---|---|---|
| `(n)` | Salto de línea | `(r)` | Rojo |
| `(b)` | Negro | `(or)` | Naranja |
| `(w)` | Blanco | `(lb)` | Celeste |
| `(y)` | Amarillo | `(gr)` | Gris |
| `(g)` | Verde | `(br)` | Marrón |
| `(bl)` | Azul | `(p)` | Rosado |
| `(pu)` | Morado | `(dgr)` | Verde oscuro |
| `(nbl)` | Azul marino | | |

### Tiempo de pintado

El pintado es progresivo: la barra avanza **un punto por segundo** y cada letra cuenta **2 segundos**. No se cuentan los espacios ni las etiquetas de color.

| Fuente | Tiempo de pintado |
|---|---|
| **De letras** | **2 segundos por letra**, hasta **32 segundos** con las 16 letras |
| **Clásicas** | **2 segundos por letra**, con un tope según el tamaño: pequeño **15 s**, mediano **20 s**, grande **25 s** y gigante **30 s** |

### Mientras pintas

- Para empezar a pintar debes estar a menos de unos **4 metros** del lugar donde confirmaste. Si te alejas más de unos **6 metros** antes de empezar, el graffiti se cancela.
- Mientras pintas debes quedarte quieto junto al muro. Si te alejas más de un par de pasos, el graffiti se cancela y pierdes el trabajo.
- Si sueltas el botón de disparo, tienes **10 segundos** para retomarlo. Pasado ese tiempo se cancela todo y hay que empezar de cero.
- Desconectarte, cerrar sesión o salir del editor sin guardar también cancelan el graffiti.

## Fuentes de letras (premium)

Son doce fuentes de estilo callejero. Cada una tiene su propio tamaño de letra y su propia forma, y se eligen en el selector con vista previa:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/graffiti-selector-de-fuentes.jpg" alt="Selector de fuentes del graffiti con las 16 opciones" width="1600" height="1133">

| Fuente | Fuente |
|---|---|
| Alivegraff | Block Buster |
| Bored Schoolboy | Fat Wandals |
| Street Soul | Graffiti Keny |
| Streetlife | Los Santos |
| Throwupz | Street Bring |
| Barrio Rifa | Vandal Wupz |

Reglas del texto con estas fuentes:

- Hasta **16 letras** en total, sin contar espacios ni etiquetas de color.
- Hasta **3 líneas**, separadas con `(n)`.
- Cada letra puede llevar su propio color con las etiquetas de color.
- No todas las fuentes tienen todos los caracteres. **Alivegraff**, **Bored Schoolboy**, **Block Buster** y **Fat Wandals** no traen números. Si el texto incluye un carácter que la fuente no tiene, el juego te avisa cuál es y puedes cambiar el texto o elegir otra fuente.
- Al guardar, el graffiti se coloca con el editor de objetos y debe quedar a menos de **15 metros** de donde estás. Si cancelas la edición, el graffiti no se crea.

### Límite por zona

Para no saturar la ciudad, solo puede haber **4 graffitis hechos con fuentes de letras** en un radio de **100 metros**, contando los de cualquier jugador y dentro del mismo mundo. Se revisa al elegir la fuente, al empezar a pintar y al guardar. El límite no cuenta los graffitis ajenos que estás tapando con el tuyo (los que están a menos de 2 metros de donde lo colocas), así que con la zona llena aún puedes pintar encima de uno. Las fuentes clásicas no tienen este límite.

## Repintar sobre otros

Al terminar un graffiti, cualquier graffiti **ajeno** que estuviera a menos de **2 metros** del tuyo, en el mismo mundo, se borra automáticamente: has repintado encima. El juego te avisa con "Has repintado un graffiti" en lugar de "Has pintado". Es la forma normal de tapar la firma de una pandilla rival sin pedirle permiso a nadie.

## Editar y borrar

Durante los **primeros 5 minutos** después de pintarlo puedes acercarte a un graffiti tuyo (a menos de cinco pasos) y usar `/graffiti editar` para recolocarlo con el editor de objetos, o `/graffiti borrar` para eliminarlo. Pasado ese margen el graffiti es definitivo. Solo puedes editar o borrar los tuyos, y solo uno a la vez.

## Lo que gana pintar

- **+10 Burger Points** por cada graffiti terminado.
- **−5 Burger Points** si borras un graffiti tuyo con `/graffiti borrar`.
- El logro del primer graffiti.
- Si eres miembro de una **pandilla** y pintas dentro de un territorio controlado por tu propia facción, entra el sorteo de bonificación de zona: **40 %** de probabilidad de **+2 o +3** puntos de habilidad de delincuente y **+5 Burger Points** extra. Tiene los mismos requisitos y el mismo tiempo de espera de 30 minutos que el resto de bonificaciones de territorio, que se explican en [Sistema de zonas de pandilla](sistema-de-zonas-de-pandilla.md).

## Consejos

- **Piensa el texto antes de confirmar.** Los 5 minutos de margen sirven para recolocar o borrar, pero borrar te cuesta 5 Burger Points.
- **Las letras cuestan tiempo.** Cada letra son 2 segundos de pintura sin moverte; un texto corto se pinta más rápido y se lee mejor desde lejos.
- **Aprovecha el color por letra** con las fuentes premium para que tu firma se distinga de la de otras pandillas.
- **Revisa que las fuentes tengan tus caracteres.** Si necesitas números, evita Alivegraff, Bored Schoolboy, Block Buster y Fat Wandals.
- **Si la zona está llena de graffitis con letras, pinta encima de uno.** Es la única forma de dejar tu marca ahí con una fuente de letras.
- **Una lata rinde 40 graffitis.** Aun así, mira su carga antes de salir de noche a marcar el barrio: con la lata vacía no puedes empezar.
- **Marca tu propio barrio.** Dentro del territorio de tu pandilla, además de los Burger Points, tienes opción a habilidad extra.
