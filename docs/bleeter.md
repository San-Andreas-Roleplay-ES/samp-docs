# Bleeter

## Introducción

Bleeter es la **red social in-character** de San Andreas Roleplay: el equivalente a Twitter dentro del universo del servidor. Quien tiene cuenta no eres tú, sino **tu personaje**, y todo lo que se publica ahí cuenta como rol válido. Una facción anuncia un evento, un político hace campaña, un periodista filtra una noticia, alguien sube una foto de la fiesta de anoche: todo eso pasa en Bleeter y queda a la vista de toda la ciudad.

Bleeter vive en dos lugares a la vez. La versión completa —con fotos, vídeos, historias, comentarios, perfiles y notificaciones— está en el [panel de control](panel-de-control.md), en la sección **Bleeter**, y ahí es donde pasa la mayor parte de la actividad. Dentro del juego tienes una versión reducida: con el **teléfono en la mano derecha** puedes lanzar publicaciones de texto que salen por el chat para todo el servidor y consultar las tendencias del momento. Además, el comando `/w` conecta el chat privado del juego con el chat de Bleeter del panel, de modo que puedes escribirle a alguien aunque esté desconectado.

Cada personaje tiene su propio nombre de usuario (el `@` que te identifica), su foto de perfil, su portada, su biografía y su lista de seguidores. Es, literalmente, la cara pública de tu personaje: quien quiera saber quién eres antes de hacer negocios contigo, mirará tu perfil de Bleeter.

Bleeter es exclusivamente in-character. Lo que publicas es lo que publica tu personaje, no tú.

### Comandos

- `/bleeter` (también `/bleet` y `/bl`) — publica un bleet de texto que ven todos los jugadores conectados.
- `/tendencias` — muestra las cinco etiquetas más usadas en Bleeter durante las últimas 72 horas.
- `/usuariobleeter` — cambia tu nombre de usuario (`@`) de Bleeter.
- `/verificarbleeter` — verifica tu cuenta de forma permanente.
- `/w` (también `/whatsapp`) — chat privado entre el juego y el panel: `/w [ID] [mensaje]`, `/w @usuario [mensaje]` y `/w [mensaje]` para responder al último chat.
- `/granjabots` (también `/bots`) — encarga seguidores, me gusta o vistas a una granja de bots.
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

También puedes seguir a alguien sin salir del juego: haz clic en su nombre en la lista de jugadores (TAB) y elige **Seguir en Bleeter**. Si ya lo sigues, la misma opción aparece como **Dejar de seguir**. Solo aparece si ese jugador tiene nombre de usuario de Bleeter.

### Cuentas privadas

Una cuenta puede ser **privada**. Seguir a una cuenta privada no es inmediato: se envía una **solicitud de seguimiento** y el dueño de la cuenta la **aprueba o rechaza** desde el panel de control. Mientras no la apruebe, no cuentas como seguidor ni sumas a su recuento.

Si haces clic en un jugador con cuenta privada y eliges seguirlo, el juego te avisa de que le enviaste una solicitud. Mientras está pendiente, la misma opción pasa a ser **Cancelar solicitud de seguimiento**, con la que la retiras.

Las cuentas privadas no admiten pedidos de la [granja de bots](#granja-de-bots).

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

Al crear el personaje se te asigna un nombre de usuario automático formado por la inicial de tu nombre, tu apellido y un número. Cambiarlo se hace **dentro del juego** con `/usuariobleeter`:

| Requisito | Detalle |
|---|---|
| Horas jugadas | **48 horas** |
| Costo | **3 monedas** |
| Teléfono | En la mano derecha |
| Longitud | Entre **5 y 24 caracteres** |

El nombre no puede contener espacios, puntos, el símbolo `@`, los acentos sueltos (`´` y `` ` ``) ni extensiones de archivo, y no puede estar ya en uso por otro personaje.

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

## Chat de Bleeter con `/w`

El comando `/w` y el chat de Bleeter del panel de control son **el mismo chat**: lo que escribes en el juego aparece en el panel, y lo que te escriben desde el panel te llega al juego. Hay tres formas de usarlo:

| Comando | Qué hace |
|---|---|
| `/w [ID] [mensaje]` | Escribe a un jugador conectado. Debe estar en tu lista de contactos y tener un smartphone. |
| `/w @usuario [mensaje]` | Escribe por nombre de usuario de Bleeter. **No hace falta tenerlo de contacto** y funciona aunque esté desconectado: lo leerá en el panel. |
| `/w [mensaje]` | Responde al último chat que enviaste o recibiste. |

**Requisitos y límites:**

- Debes estar vivo y tener un **smartphone en tu inventario** (no hace falta tenerlo en la mano).
- Con `/w @usuario` y con la respuesta rápida debes esperar **2 segundos** entre un mensaje y el siguiente.
- Si lo primero que escribes en una respuesta rápida es un número, el juego lo toma como un ID. Para responder algo que empieza por una cifra, usa `/w [ID] [mensaje]` o `/w @usuario [mensaje]`.
- Si dos personajes tienen el mismo nombre de usuario, `/w @usuario` no envía nada: escribe por ID o desde el panel.

**Cómo llega el mensaje a quien lo recibe:**

- Si está conectado, tiene un smartphone y **no te tiene silenciado**, lo ve en el chat del juego como *Chat de [nombre]*, con un sonido de aviso, y puede contestarte con `/w [mensaje]`.
- En cualquier otro caso (desconectado, sin smartphone o con tu cuenta silenciada), el mensaje queda **sin leer en el panel**. Quien envía no puede distinguir un caso del otro.

**De la web al juego:** los mensajes que te escriben desde el panel llegan al juego en pocos segundos si tienes un smartphone. Se muestran con el nombre de Bleeter del remitente, hasta **10 mensajes** a la vez y solo los de los últimos **2 minutos**; el resto te espera en el panel. Un mensaje muy largo se corta y termina en «sigue en Bleeter». Los emojis y los textos en otro alfabeto no se pueden mostrar en el juego: aparecen como «(Emojis)» o «(Texto en otro alfabeto)», y las imágenes y vídeos, como «(Imagen adjunta)» o «(Video adjunto)». Lo que ves en el juego queda marcado como leído en el panel.

Al entrar al juego, si tienes chats sin leer, se te avisa cuántos son y que puedes leerlos desde el panel de control.

## Granja de bots

La granja de bots es la forma de fabricarse una audiencia: una instalación de teléfonos que, desde cuentas de Bleeter de personajes inactivos, **suma seguidores, me gusta o vistas** a quien tú indiques. Es una actividad del mercado negro: el equipo se compra allí y funciona instalado en una propiedad.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/granja-de-bots-bleeter.jpg" alt="Gabinete lleno de teléfonos de una granja de bots de Bleeter" width="1600" height="1451">

### Conseguir y montar el equipo

El soporte se compra en el [mercado negro](sistema-de-mercado-negro.md), en la opción *Comprar granja de teléfonos*. Para acceder necesitas ser delincuente, tener **50 horas jugadas**, no ser policía, estar en el punto de mercado negro que te corresponde y tener la **mano derecha libre**. El equipo se paga en efectivo y exige habilidad de **electrónica** (consulta [habilidades](sistema-de-habilidades.md)):

| Equipo | Teléfonos | Precio | Electrónica |
|---|---|---|---|
| Soporte de mesa | 10 | $3.000 | 15 |
| Tablero de pared | 40 | $15.000 | 35 |
| Gabinete de bots | 100 | $60.000 | 60 |

El soporte llega vacío, dentro de una caja que cargas en las manos. Llévalo a una propiedad y ármalo con `/desempaquetarmueble`; funciona como un mueble más (consulta [muebles](sistema-de-muebles.md)). Cada propiedad admite **hasta 2 soportes de teléfonos**.

Para llenarlo, párate a menos de 1 metro con `/granjabots`, elige *Conectar el teléfono de tu mano* y confirma. El teléfono debe estar en tu **mano derecha**, no ser de una facción y no estar en una llamada. Tu nivel de electrónica debe alcanzar el del soporte. **El teléfono se consume**, con su número y sus contactos, y cada teléfono aparece en su ranura del soporte.

Para conectar teléfonos, hacer pedidos y cancelarlos necesitas las **llaves de la propiedad** donde está instalado. Quien esté frente al soporte puede consultar el estado del pedido en curso.

### Hacer un pedido

Con `/granjabots` frente al soporte eliges qué encargar:

1. **Seguidores para un usuario**: escribes su nombre de usuario de Bleeter.
2. **Me gusta** o **vistas en una publicación**: escribes el usuario y eliges una de sus **8 publicaciones más recientes** (las respuestas no cuentan).

Después indicas la cantidad. El juego te muestra el máximo posible, el **tiempo estimado** y el **costo**, y recién al confirmar se cobra, del efectivo o, si no alcanza, del banco.

| Pedido | Precio por unidad | Máximo por teléfono en un pedido | Tope en 24 horas |
|---|---|---|---|
| Seguidores | $20 | 10 | 2.000 por usuario |
| Me gusta | $8 | 3 | 500 por publicación |
| Vistas | $1 | 30 | 5.000 por publicación |

- El tope de 24 horas cuenta lo que hayan entregado todas las granjas a ese usuario o publicación, más lo que aún falta de los pedidos en curso.
- Cada soporte atiende **un pedido a la vez**, y una misma cuenta puede tener como mucho **2 pedidos en curso**.
- Cada bot actúa una sola vez sobre cada usuario o publicación. Si no quedan bots disponibles, la granja no puede sumar más y te lo dice.
- No funciona sobre cuentas privadas.

### Cómo trabaja

Pagas y puedes irte: no hace falta quedarse junto al soporte. La granja entrega **de a poco**, sin notificaciones para el destinatario, y cuando termina te avisa con el total entregado. Si algo no se pudo entregar, **te devuelve al banco** la parte correspondiente.

Cada minuto, la granja entrega medio seguidor o medio me gusta por teléfono, y dos y medio vistas por teléfono. Por ejemplo, un gabinete lleno de 100 teléfonos suma 50 seguidores por minuto, y un tablero de 40 teléfonos, 20. Con más teléfonos, el pedido termina antes.

Desde la opción *Estado del pedido* ves cuántos van entregados, cuántos faltan y cuánto tiempo queda. Quien tenga las llaves puede **cancelar el pedido**: lo no entregado se devuelve al banco. Si la cuenta o la publicación objetivo deja de ser válida (por ejemplo, pasa a privada o se borra), la granja da el pedido por terminado y devuelve lo que no entregó.

## Tendencias

Las tendencias se construyen con las **etiquetas** (`#palabra`) que la gente usa en sus publicaciones.

En la web, la sección **Explorar** analiza las publicaciones de los últimos **7 días**. No cuenta simplemente cuántas veces aparece cada etiqueta: lo que más pesa es **cuánta gente distinta la ha usado**, para que una sola persona repitiendo una palabra no pueda inventarse una tendencia. Las menciones de las últimas **6 horas** cuentan doble, de modo que lo que está pasando ahora sube antes que lo de hace unos días.

Dentro del juego, `/tendencias` te muestra las **cinco** etiquetas más repetidas en las últimas **72 horas**. Solo cuentan las publicaciones cuyo texto **empieza por una etiqueta** (si traen varias, se toma la última). Necesitas estar vivo y tener el teléfono en la mano derecha para consultarlas.

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
- **`/w @usuario` sirve para tratos con gente que no está conectada.** El mensaje queda esperándola en el panel y lo verá al abrirlo.
- **Los bots dan números, no rol.** Una cuenta con miles de seguidores y ninguna conversación se nota. Úsalos con criterio y combínalos con publicaciones reales.
