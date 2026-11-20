# Sistema de muebles 🛋️

## Introducción

El sistema de muebles te permite personalizar al máximo cualquier propiedad que poseas. Sirve tanto para decorar y darle vida a tu entorno como para crear divisiones, muros o habitaciones completamente nuevas.

Cada propiedad admite un límite de **2.048 muebles**, y el mobiliario no es solo estético: el valor total de los muebles colocados suma un **50% extra** al precio de venta del inmueble (ver [Sistema de propiedades](sistema-de-propiedades.md)). El catálogo cuenta con más de **1.700 modelos** en diferentes categorías, pero se pueden usar muchos más ingresando la ID del objeto o modelo.

> ⚠️ **Importante:** Solo los usuarios que tengan la llave de la propiedad pueden usar el sistema de muebles.

### Comandos

- `/comprarmueble` (`/cobject`, `/comprarmuebles`) — si no ingresas la ID se abrirá el catálogo; si ingresas una ID, crearás ese objeto directamente.
- `/muebles` — muestra la lista de muebles de la propiedad, la inversión total y permite seleccionar un mueble directamente desde este menú.
- `/buscarmueble [nombre/ID]` — busca un mueble específico en la propiedad por ID o nombre (si está en el catálogo siempre será por su nombre).
- `/seleccionar [ID]` (`/sel`) — selecciona un mueble por su número de orden en la lista de `/muebles`.
- `/cseleccionar` (`/csel`) — habilita el cursor para seleccionar un mueble que tienes en tu propiedad.
- `/deseleccionar` (`/desel`) — suelta el mueble que tienes seleccionado.
- `/editarmueble` (`/eo`, `/editobject`) — activa el modo de edición manual con el ratón (mouse).
- `/infomueble` (`/muebleinfo`) — muestra los detalles técnicos del objeto que tienes seleccionado.
- `/quitarmueble` (`/dobject`) — elimina permanentemente el mueble seleccionado.
- `/ayuda muebles` — lista resumida de comandos dentro del juego.

## Cómo funciona

Colocar un mueble requiere seguir unos pasos básicos para interactuar con el entorno 3D.

1. Usa `/comprarmueble` (o directamente `/comprarmueble [ID]`). El objeto aparecerá flotando frente a tu personaje. Siempre debes guardar su posición inicial para comprarlo y comenzar a editarlo (esto no aplica al usar `/clonar`, ya que se compra automáticamente).
2. Usa `/cseleccionar` y haz clic sobre el objeto para seleccionarlo (también puedes usar `/seleccionar [ID]` o seleccionarlo directamente desde el menú de `/muebles`).
3. Escribe `/editarmueble`. Esto activa el modo de edición y te permite mover y rotar el objeto libremente usando el ratón (mouse).
4. Cuando el objeto esté en la posición deseada, haz clic en el ícono de guardar en la pantalla (esto solo aplica si lo mueves con el ratón; si lo haces mediante comandos como `/moverz`, se guarda automáticamente).
5. Si deseas cancelar la edición y revertir los cambios de posición, simplemente presiona la tecla **Escape (ESC)**.

### Comandos de precisión

El uso del ratón es útil para movimientos rápidos, pero para construir de forma perfecta y precisa es mejor usar los comandos por ejes (X, Y, Z).

| Comando / Alias | Función |
| --- | --- |
| `/moverx`, `/movery`, `/moverz [valor]` | Desplaza el mueble exactamente la distancia indicada en ese eje. |
| `/rotarx`, `/rotary`, `/rotarz [valor]` (`/rx`, `/ry`, `/rz`) | Gira el mueble en el ángulo exacto indicado. |
| `/clonarmueble` (`/clonar`, `/clone`) | Duplica el mueble seleccionado con su misma rotación y texturas. |
| `/resetmueble` | Devuelve el mueble a su estado inicial, frente a ti. |

> ⚠️ **Nota sobre el Z-fighting:** Cuando colocas dos muebles muy juntos o uno dentro de otro, las texturas pueden parpadear y superponerse visualmente (un error conocido como *Z-fighting*). Usar los comandos de precisión ayuda a ajustar los objetos para evitar que esto suceda.

## Catálogo y colecciones especiales (0.3DL)

Al usar `/comprarmueble` sin parámetros se despliega un menú con categorías ordenadas. Los precios inician desde los **$10** y se descuentan directamente de tu cuenta bancaria.

Además de los objetos clásicos del juego base, el servidor cuenta con colecciones exclusivas de modelos 0.3DL repartidas en diferentes categorías. Solo los usuarios con **Premium Oro o superior** pueden comprar estos modelos.

| Colección 0.3DL | Contenido destacado |
| --- | --- |
| **Vice City** | Vinotecas, televisores antiguos, mapamundis, tablas de surf, carpas militares, carritos de feria, animales de zoológico. |
| **SOLS** | Tumbas de pandillas, bates, machetes, fajos de dinero, chalecos de prensa, bolsos de tienda. |
| **Comunitarias** | Muebles donados por jugadores: máquinas de arcade, estatuas, comida, cubetas con agua, etc. |

Si necesitas un objeto que no está en las categorías, usa `/comprarmueble [ID]`. Si el modelo no se encuentra en el catálogo oficial, costará solamente **$10**. Puedes buscar los objetos por su ID en una web externa como [dev.prineside.com/gtasa_samp_model_id](https://dev.prineside.com/gtasa_samp_model_id/).

## Texturas

Cada objeto en el juego está dividido en "caras" o partes, conocidas como índices de material, que van del **0 al 15**. Puedes aplicar una textura distinta a cada parte y así crear infinidad de objetos distintos.

1. Ingresa a una web externa de texturas (como [textures.xyin.ws](https://textures.xyin.ws/?page=textures)) y busca el material que necesitas en su amplia lista, o fíltralo por términos en inglés (ej: *blue, wood, metal, brick*).
2. Usa el comando `/texturas [palabra]` (Alias: `/buscartextura`). El servidor buscará coincidencias y te dará la ID exacta.
3. Con el mueble seleccionado, escribe `/textura [índice 0-15] [ID de la textura]`.
4. Si no sabes qué índice corresponde a qué parte, prueba cambiando el índice (0, 1, 2...) hasta encontrar la cara correcta.

Usa `/quitartextura [índice 0-15]` para restaurar el diseño original de esa cara.

## Prioridad de dibujado

El comando `/prioridad [0-5]` ajusta el orden de carga de los objetos: hace que carguen unos objetos antes que otros cuando llegas al máximo de carga de objetos permitida en el servidor.

La cantidad máxima de objetos que puedes ver simultáneamente se ajusta yendo a **/preferencias ➡️ Rendimiento ➡️ Cantidad de objetos visibles: 500 o 1000**.

## Puertas y mudanzas

Cuentas con herramientas adicionales para interactuar con tus creaciones y gestionarlas a largo plazo:

- **Convertir en puerta:** puedes usar el comando `/convertirpuerta` sobre cualquier objeto (no tiene que ser necesariamente un modelo de puerta). Esto lo vuelve interactivo y permitirá que se abra y cierre usando los comandos `/abrir` y `/cerrar`. Puedes ajustar su comportamiento con `/configurarpuerta`.
- **Mudanzas (empaquetar):** usa `/empaquetarmueble` para guardar el mueble en una caja. Esto te permite trasladarlo a otras propiedades y usarlo ahí (`/desempaquetarmueble`) sin tener que comprarlo de nuevo. Al empaquetarlo, **se reinician las texturas** si las tuviera colocadas.
- Los muebles empaquetados también se pueden vender en el **mercado negro** (`/mercadonegro`) (ver [Sistema de mercado negro](sistema-de-mercado-negro.md))  o en una **casa de empeños** (`/empeñar`).

## Consejos

- **Usa el menú de `/muebles` si un objeto se pierde:** a veces, un mueble puede quedar oculto dentro del suelo o detrás de una pared, lo que dificulta la selección con `/csel`. Simplemente usa `/muebles` y selecciona el objeto directamente desde la lista (o busca su ID y usa `/sel`), o también puedes buscar los muebles del mismo tipo (ID) con `/buscarmueble` y seleccionarlos directamente desde ese menú.
- **Apóyate en páginas web externas:** existen catálogos online de GTA San Andreas que te permiten ver los objetos en 3D y copiar su ID numérica. Es mucho más rápido buscar ahí y usar `/comprarmueble [ID]`.
- **Prioriza el rendimiento:** aunque puedes colocar hasta 2.048 muebles, concentrar esa cantidad en un espacio reducido puede disminuir considerablemente los FPS de los usuarios que visiten tu propiedad, además de generar errores visuales inesperados. Un mapeado con alrededor de 1.000 objetos se considera bien optimizado y fluido.
- **Utiliza la herramienta de prioridad estratégicamente:** para optimizar la carga visual de tus mapeados, asigna `/prioridad 5` a los elementos estructurales fundamentales (como paredes, suelos y puertas) para que carguen antes. Deja los detalles menores o decorativos con la prioridad 0 por defecto.
