# Sistema de muebles

## Introducción

El sistema de muebles te permite personalizar al máximo cualquier propiedad que poseas. Sirve tanto para decorar y darle vida a tu entorno como para crear divisiones, muros o habitaciones completamente nuevas.

Cada propiedad admite un límite de **2.048 muebles**, y el mobiliario no es solo estético: el valor total de los muebles colocados suma un **50% extra** al precio de venta del inmueble (ver [Sistema de propiedades](sistema-de-propiedades.md)). El catálogo cuenta con más de **1.700 modelos** en diferentes categorías, pero se pueden usar muchos más ingresando la ID del objeto o modelo.

> ⚠️ **Importante:** Solo los usuarios que tengan la llave de la propiedad pueden usar el sistema de muebles. El dueño también puede dar un [permiso temporal de muebles](#permisos-de-muebles) a otro jugador sin prestarle las llaves.

### Comandos

- `/comprarmueble` (`/cobject`, `/comprarmuebles`) — si no ingresas la ID se abrirá el catálogo; si ingresas una ID, crearás ese objeto directamente.
- `/muebles` — muestra la lista de muebles de la propiedad, la inversión total y permite seleccionar un mueble directamente desde este menú.
- `/buscarmueble [nombre/ID]` — busca un mueble específico en la propiedad por ID o nombre (si está en el catálogo siempre será por su nombre).
- `/seleccionar [ID]` (`/sel`) — selecciona un mueble por su número de orden en la lista de `/muebles`.
- `/cseleccionar` (`/csel`) — habilita el cursor para seleccionar un mueble que tienes en tu propiedad.
- `/deseleccionar` (`/desel`) — suelta el mueble que tienes seleccionado.
- `/editarmueble` (`/eo`, `/editobject`) — activa el modo de edición manual con el ratón (mouse).
- `/infomueble` (`/muebleinfo`) — muestra los detalles técnicos del objeto que tienes seleccionado: posición, rotación, prioridad, distancia de dibujado y texturas.
- `/quitarmueble` (`/dobject`) — elimina permanentemente el mueble seleccionado, previa confirmación. No se reembolsa su precio.
- `/permitirmuebles` y `/permisosmueble` — dan y consultan los permisos temporales de muebles.
- `/ayuda muebles` — lista resumida de comandos dentro del juego, incluidos los de grupos y prefabs.

## Cómo funciona

Colocar un mueble requiere seguir unos pasos básicos para interactuar con el entorno 3D.

1. Usa `/comprarmueble` (o directamente `/comprarmueble [ID]`). El objeto aparecerá flotando frente a tu personaje. Siempre debes guardar su posición inicial para comprarlo y comenzar a editarlo (esto no aplica al usar `/clonar`, ya que se compra automáticamente).
2. Usa `/cseleccionar` y haz clic sobre el objeto para seleccionarlo (también puedes usar `/seleccionar [ID]` o seleccionarlo directamente desde el menú de `/muebles`).
3. Escribe `/editarmueble`. Esto activa el modo de edición y te permite mover y rotar el objeto libremente usando el ratón (mouse).
4. Cuando el objeto esté en la posición deseada, haz clic en el ícono de guardar en la pantalla (esto solo aplica si lo mueves con el ratón; si lo haces mediante comandos como `/moverz`, se guarda automáticamente).
5. Si deseas cancelar la edición y revertir los cambios de posición, simplemente presiona la tecla **Escape (ESC)**.

El mueble se paga de tu **cuenta bancaria** al precio de su modelo.

### Comandos de precisión

El uso del ratón es útil para movimientos rápidos, pero para construir de forma perfecta y precisa es mejor usar los comandos por ejes (X, Y, Z).

| Comando / Alias | Función |
| --- | --- |
| `/moverx`, `/movery`, `/moverz [valor]` | Desplaza el mueble exactamente la distancia indicada en ese eje. |
| `/rotarx`, `/rotary`, `/rotarz [valor]` (`/rx`, `/ry`, `/rz`) | Gira el mueble en el ángulo exacto indicado. |
| `/clonarmueble` (`/clonar`, `/clone`) | Duplica el mueble seleccionado con su misma rotación y texturas. Se compra como un mueble nuevo. |
| `/resetmueble` | Devuelve el mueble a su estado inicial, frente a ti. |

> ⚠️ **Nota sobre el Z-fighting:** Cuando colocas dos muebles muy juntos o uno dentro de otro, las texturas pueden parpadear y superponerse visualmente (un error conocido como *Z-fighting*). Usar los comandos de precisión ayuda a ajustar los objetos para evitar que esto suceda.

### Límite de personas dentro de la propiedad

Para cuidar el rendimiento del servidor, hay topes según cuánta gente haya dentro de la propiedad:

- Con **más de 5 personas** dentro no puedes editar un mueble suelto: moverlo, rotarlo, clonarlo, restablecerlo, configurarlo como puerta ni cambiarle las texturas.
- Con **más de 3 personas** dentro no puedes mover, rotar, texturizar ni eliminar un grupo de muebles, ni importar un prefab (ver más abajo).

Comprar, eliminar y empaquetar muebles sueltos no tiene este límite.

## Catálogo y colecciones especiales (0.3DL)

Al usar `/comprarmueble` sin parámetros se despliega un menú con categorías ordenadas. Cada modelo tiene su propio precio, que se descuenta directamente de tu cuenta bancaria.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/muebles-coleccion-navidad.jpg" alt="Colección de muebles de Navidad en el catálogo: árboles, duendes y trineos" width="1600" height="927">

Además de los objetos clásicos del juego base, el servidor cuenta con colecciones exclusivas de modelos 0.3DL repartidas en diferentes categorías. Solo los usuarios con **Premium Oro o superior** pueden comprar estos modelos.

| Colección 0.3DL | Contenido destacado |
| --- | --- |
| **Vice City** | Vinotecas, televisores antiguos, mapamundis, tablas de surf, carpas militares, carritos de feria, animales de zoológico. |
| **SOLS** | Tumbas de pandillas, bates, machetes, fajos de dinero, chalecos de prensa, bolsos de tienda. |
| **Comunitarias** | Muebles donados por jugadores: máquinas de arcade, estatuas, comida, cubetas con agua, etc. |
| **Gimnasio y Halloween** | Discos, barras, bancos, bicicleta estática, prensa de piernas y cinta de correr; decoración de Halloween. |
| **Rings, Puestos, Casino, Concesionario y Talleres** | Refrigeradores, televisores, sofás, sillas de oficina, máquinas de casino, carpas, toldos, mesas de feria y carritos de comida para montar tu puesto. |
| **Escaleras y Murallas** | Piezas de construcción. Solo se pueden usar en interiores. |
| **Pinturas, Toldos, Letras y Banderas** | Cientos de cuadros, toldos, letras sueltas y banderas. |
| **Cocina** | Vasos y copas decorativos. |
| **Navidad** | Árboles y decoración de temporada. |

Las mesas de casino (ruleta, blackjack y tragamonedas) funcionan como juegos en cualquier propiedad que las tenga colocadas (ver [Sistema de casino](sistema-de-casino.md)).

Si necesitas un objeto que no está en las categorías, usa `/comprarmueble [ID]`. Si el modelo no se encuentra en el catálogo oficial, costará **$100**. Puedes buscar los objetos por su ID en una web externa como [dev.prineside.com/gtasa_samp_model_id](https://dev.prineside.com/gtasa_samp_model_id/).

Algunos equipos especiales (como las máquinas de la imprenta, ver [Sistema de falsificación de billetes](sistema-de-falsificacion-de-billetes.md)) se compran en el mercado negro y se instalan como cualquier mueble con `/desempaquetarmueble`. Las cámaras de seguridad ya no son muebles: las instala un técnico (ver [Sistema de cámaras de seguridad](sistema-de-camaras-de-seguridad.md)).

## Texturas

Cada objeto en el juego está dividido en "caras" o partes, conocidas como índices de material o *slots*, que van del **0 al 15**. Puedes aplicar una textura distinta a cada parte y así crear infinidad de objetos distintos.

### Menú 3D de texturas

La forma más cómoda de texturizar es el menú 3D:

1. Con el mueble seleccionado, escribe `/textura [slot 0-15]` para elegir qué parte vas a pintar. Si no eliges ninguno, se usa el slot 0.
2. Escribe `/texturas`. Se despliega a tu lado un tablero con **16 texturas a la vez**, cada una con su nombre y su ID. Si te alejas más de 15 metros, el tablero se cierra.
3. Muévete por el tablero con **Y** (anterior) y **H** (siguiente), y cambia de página con **NUM4** y **NUM6** (o con **C + Y** y **C + H**).
4. Presiona **ALT** para aplicar la textura marcada al slot elegido. Presiona **N** para cerrar el menú (también puedes volver a escribir `/texturas`).

Para abrir el tablero ya filtrado usa `/texturas [palabra]` (mínimo 3 letras, en inglés: *wood, metal, brick, blue…*) o `/texturas [ID]` para saltar directamente a esa textura. Para abrirlo debes estar a pie, vivo y dentro de la propiedad.

### Comandos de texturas

- `/textura [slot 0-15] [ID de la textura]` — aplica esa textura directamente a esa parte del mueble seleccionado.
- `/buscartextura [palabra]` — busca texturas por nombre y muestra una lista con sus ID (mínimo 3 letras). Al elegir una de la lista se abre el menú 3D en esa textura.
- `/quitartextura [slot 0-15]` — restaura el diseño original de esa cara.
- `/limpiartexturas` — quita todas las texturas del mueble seleccionado.

Si no sabes qué slot corresponde a qué parte, prueba cambiando el índice (0, 1, 2...) hasta encontrar la cara correcta. También puedes consultar texturas en una web externa como [textures.xyin.ws](https://textures.xyin.ws/?page=textures).

Si tienes muebles agrupados (ver [Grupos de muebles](#grupos-de-muebles)), la textura se aplica a **todos los muebles del grupo** y no solo al seleccionado.

## Prioridad y distancia de dibujado

El comando `/prioridad [-5 a 5]` ajusta el orden de carga de los objetos: los de mayor prioridad se cargan antes que los de menor cuando llegas al máximo de carga de objetos permitida en el servidor. La prioridad por defecto es 0.

El comando `/distanciadibujado [metros]` (`/dd`) define desde qué distancia se ve el mueble seleccionado, entre **50 y 500 metros**. Con `0` el mueble vuelve a su distancia automática, que depende de su tamaño. Es útil para fachadas y exteriores que quieres que se vean de lejos.

La cantidad máxima de objetos que puedes ver simultáneamente se ajusta yendo a **/preferencias ➡️ Rendimiento ➡️ Cantidad de objetos visibles: 500 o 1000**.

## Puertas y mudanzas

Cuentas con herramientas adicionales para interactuar con tus creaciones y gestionarlas a largo plazo:

- **Convertir en puerta:** puedes usar el comando `/convertirpuerta` sobre cualquier objeto (no tiene que ser necesariamente un modelo de puerta). Esto lo vuelve interactivo y permitirá que se abra y cierre usando los comandos `/abrir` y `/cerrar`. Puedes ajustar su comportamiento con `/configurarpuerta`.
- **Mudanzas (empaquetar):** usa `/empaquetarmueble` para guardar el mueble en una caja. Debes estar a menos de 1,5 metros del mueble, con **ambas manos libres**, y quedarte junto a él unos 10 segundos mientras dura la mudanza. La caja queda en tu mano derecha y te permite trasladar el mueble a otras propiedades y usarlo ahí (`/desempaquetarmueble`) sin tener que comprarlo de nuevo. Al empaquetarlo, **se reinician las texturas** si las tuviera colocadas.
- Los muebles empaquetados también se pueden vender en el **mercado negro** (`/mercadonegro`) (ver [Sistema de mercado negro](sistema-de-mercado-negro.md)) o en una **casa de empeños** (`/empeñar`).

## Permisos de muebles

El dueño de una casa, un negocio o un almacén puede dejar que otro jugador edite sus muebles **sin prestarle las llaves**.

- `/permitirmuebles [ID/nombre]` — da el permiso. Debes estar dentro de la propiedad o en su exterior, y el jugador debe estar a **menos de 5 metros**. El permiso dura **7 días**; repetir el comando lo renueva.
- `/permisosmueble` — si eres el dueño y estás en tu propiedad, muestra quién tiene permiso y hasta cuándo, y te permite quitárselo. Si tienes permisos en propiedades ajenas, muestra los tuyos.

Reglas del permiso:

- Cubre los muebles del **interior y del exterior** de la propiedad.
- Hasta **8 invitados** por propiedad, y cada jugador puede tener permiso en hasta **8 propiedades** a la vez.
- Si la propiedad cambia de dueño, los permisos se pierden.
- El invitado puede comprar, mover, rotar, texturizar y eliminar muebles, y usar los grupos, pero **no puede empaquetarlos**, ni eliminar un grupo completo, ni importar prefabs. Los muebles que compra se pagan de su propia cuenta bancaria (y los de exterior, de su dinero en mano).
- No puede situar, ampliar ni eliminar el exterior de la propiedad.

## Grupos de muebles

Los grupos te dejan seleccionar varios muebles y editarlos como si fueran uno solo, ideal para mover una habitación entera, girar una fachada o aplicar la misma textura a toda una pared. Los comandos funcionan **dentro de la propiedad** y para quien tenga llaves o permiso de muebles.

Un grupo admite hasta **64 muebles**. Cada mueble agregado muestra una etiqueta que **solo ves tú**. El grupo se vacía cuando sales de la propiedad o cierras sesión.

| Comando | Función |
| --- | --- |
| `/grupo` | Muestra cuántos muebles tiene tu grupo y la lista de comandos. |
| `/gagregar [número] [hasta el número]` | Agrega un mueble, o un rango, por su número de orden en `/muebles`. |
| `/gquitar [número] [hasta el número]` | Quita uno o un rango de muebles del grupo. |
| `/gseleccionar` | Haz clic en los muebles para agregarlos o quitarlos del grupo. Termina con **ESC**. |
| `/gmodelo [modelo]` | Agrega todos los muebles de ese modelo. |
| `/gradio [metros]` | Agrega todos los muebles a ese radio de ti (hasta 50 metros). |
| `/gtodo` | Agrega todos los muebles de la propiedad (hasta el tope de 64). |
| `/glimpiar` | Vacía el grupo. |
| `/gmoverx`, `/gmovery`, `/gmoverz [metros]` | Mueven todo el grupo en ese eje (hasta 100 metros por vez). |
| `/grotarx`, `/grotary`, `/grotarz [grados]` | Giran todo el grupo (hasta 360 grados por vez) alrededor del pivote. |
| `/geditar` | Mueve y gira el grupo completo con el editor visual, usando una bola amarilla como pivote. Guarda con el ícono de guardar o cancela con **ESC**. Debes estar a menos de 50 metros del pivote. |
| `/gpivote` | Fija el pivote en tu posición, o lo devuelve al centro del grupo si ya estaba fijado. |
| `/gtextura [slot 0-15] [ID de la textura]` | Aplica una textura a todo el grupo. Con la ID `0` la quita. |
| `/gprioridad [-5 a 5]` | Cambia la prioridad de todo el grupo. |
| `/gdistancia [metros]` (`/gdd`) | Fija la distancia de dibujado de todo el grupo (50 a 500 metros, o `0` para la automática). |
| `/geliminar` | Elimina todos los muebles del grupo, previa confirmación. Es irreversible y solo lo puede hacer quien tenga llaves de la propiedad. |

Si usas Texture Studio, los comandos de grupo tienen como alias los nombres que ya conoces de ese programa.

Restricciones:

- No puedes mover, rotar, texturizar ni eliminar el grupo con **más de 3 personas** dentro de la propiedad.
- No se puede editar un grupo si otro jugador está editando alguno de esos muebles, si un mueble se está empaquetando o si una mesa de casino está en uso.
- Cada comando de edición tiene una pequeña espera (menos de un segundo) y, si el servidor está muy ocupado, te pedirá que lo intentes de nuevo.

## Prefabs

Un prefab es un grupo de muebles guardado como plantilla para repetirlo en cualquier propiedad: una cocina, un bar, un dormitorio completo. Cada personaje puede tener hasta **8 prefabs**.

1. Arma un grupo con los muebles que quieres copiar.
2. Escribe `/gguardar [nombre]`. El nombre admite hasta 24 caracteres entre letras, números, guion y guion bajo, y no puede repetirse. El prefab guarda la posición de cada mueble respecto al centro del grupo (o del pivote que hayas fijado), junto con sus texturas, prioridad, distancia de dibujado y puertas.
3. En otra propiedad (o en la misma), escribe `/gimportar [nombre]`, o `/gimportar` sin nombre para elegirlo de una lista. Debes ser el dueño o tener llaves de la propiedad; un permiso de muebles no alcanza.
4. El juego muestra la cantidad de muebles y el precio total. Al aceptar, los muebles aparecen **alrededor de tu posición** y quedan seleccionados como grupo para que los acomodes.

Puntos a tener en cuenta:

- Importar cuesta la **suma de los precios de catálogo** de todos los muebles del prefab, y se paga de tu cuenta bancaria. Si no tienes saldo suficiente, no se importa nada.
- La importación es de todo o nada: si la propiedad no tiene espacio para todos los muebles, o algo falla, no se cobra.
- Si el prefab tiene muebles personalizados, necesitas **Premium Oro o superior** para importarlo.
- Las cámaras de seguridad, las máquinas de la imprenta y los equipos de minería o de granja de bots no se pueden guardar en un prefab.
- Con más de 3 personas dentro de la propiedad no se puede importar.
- Hay una espera de unos segundos entre una acción de prefabs y la siguiente.

| Comando | Función |
| --- | --- |
| `/gguardar [nombre]` (`/gprefab`) | Guarda el grupo como prefab. |
| `/gprefabs` (`/prefabs`) | Lista tus prefabs y permite importar uno desde la lista. |
| `/gimportar [nombre]` (`/prefab`) | Importa un prefab en la propiedad donde estás. |
| `/gborrarprefab [nombre]` | Borra un prefab. |

## Muebles de exterior y terrazas

Los negocios pueden reclamar un área en la calle frente a su puerta, y las casas pueden crear una **terraza**. Todo se gestiona con `/exterior`, y los detalles de situar el área, sus niveles y la caja del negocio están en [Sistema de propiedades](sistema-de-propiedades.md).

Resumen de lo que importa para los muebles:

- **Terraza de una casa:** solo los usuarios **Premium Ruby** pueden crearla. Cuesta **$50.000** del dinero en mano (en un negocio, el exterior cuesta $100.000 de la caja). Ampliarla y comprar sus muebles también se paga del dinero en mano. Desde el punto de la terraza el dueño o el inquilino pueden usar `/refrigerador`, y la radio de la casa se escucha en ella.
- **Niveles:** el exterior empieza en el nivel 1 (10 metros y 16 muebles) y se puede ampliar hasta el nivel 6 (30 metros y 512 muebles). Para bajar de nivel hay que quitar antes los muebles que sobren.
- **Comprar y editar:** `/exterior crearmueble` abre el mismo catálogo del interior (sin las categorías de escaleras y murallas) y coloca la pieza frente a ti; el precio se cobra al confirmar la posición. `/exterior editarmueble [id]`, `/exterior clonarmueble [id]` y `/exterior eliminarmueble [id]` funcionan como sus equivalentes de interior, y tienes que estar a menos de 10 metros del mueble. Los muebles personalizados requieren Premium Oro y eliminarlos no reembolsa su precio.
- **Texturas:** `/exterior texturamueble [id] [material 0-15] [ID de la textura]` texturiza hasta 16 partes por mueble (con la ID `0` la quita) y `/exterior borrartexturas [id]` quita todas.
- **Eliminar el exterior:** `/exterior eliminar` pide confirmación y borra también todos sus muebles, sin reembolso.
- Quien tiene un permiso de muebles puede editar los muebles exteriores, pero los paga de su bolsillo y no puede situar, ampliar ni eliminar el exterior.

## Consejos

- **Usa el menú de `/muebles` si un objeto se pierde:** a veces, un mueble puede quedar oculto dentro del suelo o detrás de una pared, lo que dificulta la selección con `/csel`. Simplemente usa `/muebles` y selecciona el objeto directamente desde la lista (o busca su ID y usa `/sel`), o también puedes buscar los muebles del mismo tipo (ID) con `/buscarmueble` y seleccionarlos directamente desde ese menú.
- **Apóyate en páginas web externas:** existen catálogos online de GTA San Andreas que te permiten ver los objetos en 3D y copiar su ID numérica. Es mucho más rápido buscar ahí y usar `/comprarmueble [ID]`.
- **Edita por grupos:** para mover o texturizar muchos muebles, un grupo ahorra mucho tiempo frente a hacerlo uno por uno. Y si vas a repetir un diseño, guárdalo como prefab.
- **Prioriza el rendimiento:** aunque puedes colocar hasta 2.048 muebles, concentrar esa cantidad en un espacio reducido puede disminuir considerablemente los FPS de los usuarios que visiten tu propiedad, además de generar errores visuales inesperados. Un mapeado con alrededor de 1.000 objetos se considera bien optimizado y fluido.
- **Utiliza la herramienta de prioridad estratégicamente:** para optimizar la carga visual de tus mapeados, asigna `/prioridad 5` a los elementos estructurales fundamentales (como paredes, suelos y puertas) para que carguen antes. Deja los detalles menores o decorativos con la prioridad 0 por defecto.
- **Ajusta la distancia de dibujado:** si una fachada o un elemento grande debe verse desde lejos, súbele la distancia con `/dd`; si un detalle pequeño no hace falta a lo lejos, déjalo en automática.
