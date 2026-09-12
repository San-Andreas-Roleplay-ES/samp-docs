# Bleeter

## Introducción

Bleeter es la **red social in-character** de San Andreas Roleplay: el equivalente a Twitter dentro del universo del servidor. Quien tiene cuenta no eres tú, sino **tu personaje**, y todo lo que se publica ahí cuenta como rol válido. Una facción anuncia un evento, un político hace campaña, un periodista filtra una noticia, alguien sube una foto de la fiesta de anoche: todo eso pasa en Bleeter y queda a la vista de toda la ciudad.

Bleeter vive en dos lugares a la vez. La versión completa —con fotos, vídeos, historias, comentarios, perfiles y notificaciones— está en el [panel de control](panel-de-control.md), en la sección **Bleeter**, y ahí es donde pasa la mayor parte de la actividad. Dentro del juego tienes una versión reducida: con el **teléfono en la mano derecha** puedes lanzar publicaciones de texto que salen por el chat para todo el servidor y consultar las tendencias del momento.

Cada personaje tiene su propio nombre de usuario (el `@` que te identifica), su foto de perfil, su portada, su biografía y su lista de seguidores. Es, literalmente, la cara pública de tu personaje: quien quiera saber quién eres antes de hacer negocios contigo, mirará tu perfil de Bleeter.

Bleeter es exclusivamente in-character. Lo que publicas es lo que publica tu personaje, no tú.

### Comandos

- `/bleeter` (también `/bleet` y `/bl`) — publica un bleet de texto que ven todos los jugadores conectados.
- `/tendencias` — muestra las cinco etiquetas más usadas en Bleeter durante las últimas 72 horas.
- `/usuariobleeter` — cambia tu nombre de usuario (`@`) de Bleeter.
- `/verificarbleeter` — verifica tu cuenta de forma permanente.
- `/ayuda bleeter` — resumen de los comandos del sistema.

## Publicar desde el juego

El comando `/bleeter` es la vía rápida: escribes un texto y aparece en el chat de todos los jugadores conectados que no tengan los bleets desactivados, con tu `@`, tu recuento de seguidores y el texto. También queda guardado en tu perfil de la web, como una publicación más.

**Requisitos para usar `/bleeter`:**

| Requisito | Detalle |
|---|---|
| Horas jugadas | **30 horas** como mínimo con ese personaje |
| Teléfono | Debes tenerlo **en la mano derecha** |
| Estado | Tu personaje debe estar vivo |
| Longitud | Entre **8 y 124 caracteres** |

**Tiempo de espera entre bleets:**

| Tipo de cuenta | Espera |
|---|---|
| Jugador normal | **10 minutos** |
| Premium, periodista o miembro del gobierno | **5 minutos** |
| Cuenta verificada | **Sin espera** |

Antes de publicarse, el texto pasa por un filtro automático que detecta **publicidad**. Si tu bleet promociona un negocio, ofrece o busca servicios, vende o compra propiedades y vehículos, o recluta personal, será rechazado: para eso existe `/anuncio`. Invitar a un evento social puntual (una fiesta, un concierto, una quedada) sí está permitido, siempre que no nombres un negocio ni ofrezcas nada a cambio.

Además, si tu cuenta **no está verificada**, se aplica un filtro de censura que reemplaza automáticamente palabras ofensivas y determinado vocabulario sensible por símbolos.

Si no te interesa leer los bleets de los demás en el chat, puedes desactivarlos desde el menú de preferencias, en la sección de chat.

## Publicar desde la web

La versión web es la completa. Desde el panel de control entras a Bleeter y encuentras un feed con dos pestañas: **Para ti** (todo el mundo) y **Siguiendo** (solo quienes sigues). El menú lateral te da acceso a Inicio, Notificaciones, Explorar, Sugerencias, Guardados y tu Perfil.

**Requisitos para publicar en la web** (publicaciones, respuestas e historias). Se comprueban en este orden y te avisa del primero que falle:

1. **Verificación en dos pasos (2FA)** activada en tu cuenta.
2. **Cuenta de Discord vinculada** y verificada.
3. Al menos **30 horas jugadas** en alguno de tus personajes.

**Límites de una publicación:**

| Elemento | Límite |
|---|---|
| Texto | **255 caracteres** |
| Archivos adjuntos | **4 por publicación** |
| Imágenes | PNG, JPEG, WebP, GIF y AVIF, hasta **20 MB** cada una |
| Vídeos | MP4, WebM y MOV, hasta **10 MB** cada uno |

Las imágenes se recomprimen automáticamente al subirlas, así que no hace falta que las optimices antes.

## Interacciones

Sobre cualquier publicación puedes:

- **Me gusta** — el clásico corazón. Quien lo recibe se entera por sus notificaciones.
- **Comentar** — las respuestas cuelgan de la publicación original y forman un hilo.
- **Compartir** — reenvías la publicación a tus seguidores; aparece también en la pestaña de compartidos de tu perfil.
- **Guardar** — la archiva en tu sección **Guardados**, privada: nadie más ve qué has guardado.
- **Mencionar** — escribiendo `@` seguido de un nombre de usuario. La persona mencionada recibe una notificación y el nombre queda como enlace a su perfil.
- **Etiquetas** — escribiendo `#` seguido de una palabra. Es lo que alimenta las tendencias.
- **Reportar** — si una publicación infringe las normas.

Cada publicación lleva además un contador de **visualizaciones**: cuánta gente la ha visto, aunque no haya interactuado.

## Seguir, seguidores y silenciar

Seguir a alguien hace que sus publicaciones aparezcan en tu pestaña **Siguiendo** y le llega un aviso de que lo sigues. Tu número de seguidores es público y se muestra también en el chat cada vez que publicas con `/bleeter`.

Desde tu perfil puedes consultar tus listas completas de **seguidores** y **seguidos**, y también **eliminar a un seguidor** concreto si no quieres que siga viendo tus cosas.

**Silenciar** es la alternativa discreta: dejas de ver a esa persona en tu feed y en tus sugerencias, pero no se entera de nada y sigue pudiendo verte. Se puede quitar en cualquier momento.

La sección **Sugerencias** te propone cuentas que aún no sigues, ordenadas por afinidad. Pesan sobre todo las **cuentas seguidas por gente que tú ya sigues**, y después el número de seguidores, la insignia de verificado, lo completo que esté el perfil y si han publicado en los últimos **7 días**. Solo aparecen personajes con nombre de usuario configurado y con alguna publicación.

## Historias

Las historias son publicaciones de imagen o vídeo que aparecen en una fila en la parte superior del feed, separadas del resto. Permanecen activas **7 días** desde que se suben y luego dejan de mostrarse.

A diferencia de una publicación normal, una historia **no admite comentarios**: solo reacciones. Quien la ve puede dejar una de estas seis:

❤️ 😂 😮 😢 🔥 👏

Como autor tienes dos datos que los demás no ven: la **lista completa de quién ha visto** cada historia y las reacciones que ha recibido. Los límites de tamaño de archivo son los mismos que en las publicaciones (20 MB para imagen, 10 MB para vídeo).

En la pestaña **Para ti** verás las historias de todo el mundo; en **Siguiendo**, solo las de quienes sigues. Las tuyas siempre aparecen primero, y después se ordenan priorizando las que aún no has visto.

## Tu perfil

Tu perfil reúne todo lo tuyo: publicaciones, respuestas, contenido con foto o vídeo y publicaciones compartidas, cada cosa en su pestaña. Lo que puedes personalizar:

| Campo | Límite |
|---|---|
| Nombre visible | **50 caracteres** |
| Biografía | **160 caracteres** |
| Ubicación | **30 caracteres** |
| Sitio web | **100 caracteres** |
| Foto de perfil | PNG, JPEG o WebP |
| Portada | PNG, JPEG o WebP |

La foto de perfil y la portada no admiten GIF ni AVIF: son imágenes fijas.

### Nombre de usuario (@)

Al crear el personaje se te asigna un nombre de usuario automático a partir de tu nombre y apellido. Cambiarlo se hace **dentro del juego** con `/usuariobleeter`:

| Requisito | Detalle |
|---|---|
| Horas jugadas | **48 horas** |
| Costo | **3 monedas** |
| Teléfono | En la mano derecha |
| Longitud | Entre **5 y 24 caracteres** |

El nombre no puede contener espacios, puntos, el símbolo `@`, acentos graves ni extensiones de archivo, y no puede estar ya en uso por otro personaje.

Ten en cuenta que si cambias el **nombre de tu personaje**, tu nombre de usuario de Bleeter se reinicia al valor automático.

### Cuenta verificada

`/verificarbleeter` marca tu cuenta con una insignia permanente.

| Requisito | Detalle |
|---|---|
| Horas jugadas | **50 horas** |
| Costo | **30 monedas** (pago único, permanente) |
| Teléfono | En la mano derecha |

Escribe `/verificarbleeter confirmar` para completar la compra. Beneficios:

1. Tu nombre de usuario aparece **destacado con una insignia** en el juego, en la web y en Discord.
2. **El filtro de censura deja de aplicarse** a tus publicaciones de texto.
3. Desaparece el **tiempo de espera** entre bleets.

Los miembros del gobierno con un rango suficiente llevan una insignia propia, distinta de la de verificado.

## Tendencias

Las tendencias se construyen con las **etiquetas** (`#palabra`) que la gente usa en sus publicaciones.

En la web, la sección **Explorar** analiza las publicaciones de los últimos **7 días**. No cuenta simplemente cuántas veces aparece cada etiqueta: lo que más pesa es **cuánta gente distinta la ha usado**, para que una sola persona repitiendo una palabra no pueda inventarse una tendencia. Las menciones de las últimas **6 horas** cuentan doble, de modo que lo que está pasando ahora sube antes que lo de hace unos días.

Dentro del juego, `/tendencias` te muestra las **cinco** etiquetas más repetidas en las últimas **72 horas**. Necesitas el teléfono en la mano derecha para consultarlas.

## Notificaciones

La sección de notificaciones reúne todo lo que otros hacen sobre lo tuyo: me gusta, comentarios, publicaciones compartidas, nuevos seguidores, menciones y reacciones a tus historias. Se marcan como leídas al abrirlas, y el panel de control te avisa también en su campana general.

## Bleeter en Discord

Las publicaciones y las historias que se suben a Bleeter se replican automáticamente en el canal de Bleeter del Discord de la comunidad, con el nombre de usuario, el texto y el contenido adjunto. Las cuentas verificadas aparecen ahí igualmente destacadas. Es la forma de seguir lo que pasa en la ciudad aunque no estés conectado al servidor ni al panel.

## Consejos

- **Tu `@` es tu marca.** Antes de gastar monedas en cambiarlo, piensa un nombre que vaya con el personaje y que puedas sostener a largo plazo: cambiarlo otra vez vuelve a costar.
- **Usa etiquetas si quieres que algo llegue lejos.** Una campaña política, una convocatoria o un tema que quieras instalar funcionan mucho mejor si varias personas usan la misma etiqueta: las tendencias premian la variedad de autores, no la repetición.
- **Publicar desde el juego llega a todos los conectados; la web llega a todos los que entren.** Para un anuncio urgente, `/bleeter`; para algo que quieras que perdure y se pueda comentar, la web.
- **Si buscas promocionar un negocio, usa `/anuncio`.** El filtro de publicidad de Bleeter está para eso y rechazará el intento.
- **Silenciar es más útil de lo que parece.** Si alguien te satura el feed pero no quieres el conflicto de dejar de seguirle, silenciarlo resuelve el problema sin que se note.
