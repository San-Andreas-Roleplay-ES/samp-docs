# Por dónde empezar

Si acabas de descubrir SARP y no sabes por dónde meter cabeza, esta es la ruta recomendada — el camino más corto desde "no tengo nada" hasta "estoy roleando dentro del servidor".

## Antes de conectarte

1. **Instala lo necesario**. Asegúrate de tener **GTA San Andreas** y descarga **SA-MP 0.3DL** desde el foro oficial: [Descargar SA-MP 0.3DL](https://forum.sarp.es/index.php?/forum/238-%F0%9F%94%97-descargar-san-andreas-multiplayer-03dl/). Recuerda: la versión 0.3.7 estándar **no funciona** con SARP, porque el servidor usa 0.3DL para cargar skins, modelos y objetos personalizados.
2. **Regístrate en el UCP** en [ucp.sarp.es](https://ucp.sarp.es) — confirma tu correo y vincula tu cuenta de Discord cuando te lo pida. Todo lo que pasa fuera del juego se gestiona desde ahí: [Panel de Control](panel-de-control.md).
3. **Lee las normativas** desde la sección de información del servidor del UCP. Es la lectura más importante de tu paso por SARP.
4. **Crea tu primer personaje** en el UCP. Sin personaje no puedes conectarte.
5. **Conéctate al servidor** apuntando a `play.sarp.es:7777` desde SA-MP 0.3DL.

**Opcional:** cuando conozcas bien las normas, puedes aprobar la [certificación](sistema-de-certificacion.md) desde el UCP. Es un examen exigente (12 preguntas, apruebas con 10) que te da la insignia de cuenta certificada y el voto en las elecciones. No la necesitas para jugar.

### Pasos obligatorios resumidos

Al entrar a la portada del UCP verás una guía interactiva con los cuatro requisitos:

1. **Descargar GTA San Andreas** — descarga del juego base desde el foro.
2. **Instalar SA-MP 0.3DL** — la versión 0.3.7 estándar **no es compatible**.
3. **Crear un personaje** — al menos uno para poder conectarte.
4. **Verificar Discord** — la vinculación de la cuenta de Discord es obligatoria.

Debajo de los pasos aparece la **certificación**, marcada como opcional.

## Iniciar sesión y elegir personaje

Al conectarte, el servidor te pide el nombre o el correo de tu cuenta y después la contraseña. Si en los últimos **30 días** ya entraste con el mismo nombre de SA-MP y desde la misma conexión, el servidor te reconoce y te salta el primer paso: pasas directo a la contraseña.

Después aparece el **selector de personajes**: cada personaje es una tarjeta con la vista previa de su skin, el logo de su facción (si pertenece a una), su nombre y su nivel. Haz clic en la tarjeta del personaje con el que quieres jugar.

- Se muestran hasta **6 personajes** a la vez, en filas de 3. Con más de 6 el servidor usa una lista de texto con el nombre, el estado y las horas jugadas de cada uno.
- Los personajes **bloqueados** o **muertos** aparecen en rojo y no se pueden elegir.
- Si solo tienes un personaje disponible, entras directamente, sin pasar por el selector.

## Tu primera conexión

La primera vez que entras, tu personaje aparece sentado en un banco de **Pershing Square**, en pleno centro de Los Santos, con un par de segundos de espera antes de poder moverte.

Recibes automáticamente un **paquete de bienvenida de $5.000** ingresado en tu **cuenta bancaria** (no en el bolsillo): para usar ese dinero tendrás que pasar por un cajero automático y usar `/retirar`. Con una membresía premium activa el paquete es mayor, desde **$10.000** en adelante según el nivel. Los personajes premium mayores de 18 años también empiezan con la **licencia de conducir** ya aprobada; el resto tiene que sacársela.

Durante tus primeras **24 horas de juego** el servidor te recuerda al conectarte que puedes usar `/soynuevo` para leer las preguntas frecuentes y `/duda` para hablar con un ayudante.

### Comandos de tus primeros minutos

- `/ayuda [tema]` — el índice completo de comandos, dividido por temas (cuenta, general, inventario, facción, trabajo, propiedad, casa, empresa, vehículo, banco y muchos más).
- `/soynuevo` (también `/faq` o `/ayudame`) — preguntas frecuentes con las dudas típicas de alguien que acaba de llegar: cómo conseguir un teléfono, cómo pedir un taxi, dónde sacar la licencia, dónde comprar un vehículo, cómo alquilar una casa, cómo cambiarte de ropa.
- `/duda [pregunta]` — envía una consulta a los ayudantes conectados. Sirve para dudas de funcionamiento, no para reportar a nadie.
- `/reportar [texto]` — para avisar de un jugador que está rompiendo las normas.
- `/preferencias` (también `/panel`) — tu menú de configuración personal.
- `/stats` — tu ficha de personaje. `/habilidades` muestra tus habilidades de oficio.
- `/necesidades` — abre un panel con el estado de tu personaje (detalle más abajo).
- `/b` y `/bb` — chat fuera de personaje (OOC) para hablar con quien tengas cerca.

## Chat y rol básico

Todo lo que escribes por el chat normal lo dice tu personaje en voz alta. Para describir acciones y detalles tienes los comandos de rol:

- `/me [acción]` — describe algo que tu personaje hace.
- `/do [descripción]` — describe un detalle del entorno o de tu personaje que los demás pueden percibir.
- `/mirar [jugador]` — observa a otro personaje que esté a menos de **40 metros**. Muestra su descripción física, sexo, edad, color de cabello y de ojos, altura, contextura, estado físico, salud y el perfume que lleva. Si tiene algún estado visible (enfermedad, olores o efectos de drogas, por ejemplo), también aparece.
- `/susurrar`, `/gritar`, `/vozalta` — ajustan el alcance de tu voz.
- `/vl` — frases de voz grabadas del propio GTA San Andreas (detalle más abajo).
- `/mp [jugador] [mensaje]` — mensaje privado fuera de personaje, con **3 segundos** de espera entre mensajes.

El chat **fuera de personaje** tiene sus propios comandos: `/b` (alcance mediano, para quien esté a tu alrededor) y `/bb` (alcance corto, solo para quien esté justo al lado). **Cualquier jugador puede usarlos**, sin necesidad de que haya un moderador cerca, con un descanso de **30 segundos** entre mensaje y mensaje. Úsalos con criterio: son para aclaraciones puntuales, no para conversar.

### Frases de voz

`/vl` (también `/frasesvoz`) reproduce **998 frases habladas** del propio GTA San Andreas, repartidas en cinco grupos: Families, Ballas, Aztecas, Vagos y Policía. Las oyen los jugadores que estén a **20 metros** de ti, en el mismo interior, y el texto de la frase aparece en el chat como lo que tu personaje dice (en inglés, igual que la voz).

- `/vl` abre un menú: eliges el grupo y navegas por páginas de 20 frases; al elegir una, se reproduce.
- `/vl [número]` dice directamente la frase con ese número (del 1 al 998), útil para asignarla a una tecla.
- Debes esperar **5 segundos** entre una frase y la siguiente.
- No puedes usarlas herido o muerto, hablando por teléfono ni dentro de una partida de paintball.
- Las frases del grupo Policía son solo para agentes de las fuerzas del orden en servicio.
- `/togfrases` silencia las frases de los demás hasta que te desconectes; vuelve a escribirlo para volver a oírlas.

## Menú de la lista de jugadores

Al hacer clic sobre un jugador en la lista de jugadores (la que se abre con **TAB**) aparece un menú con acciones rápidas:

- **Seguir en Bleeter** o **Dejar de seguir**, si ese jugador tiene cuenta de [Bleeter](bleeter.md). Si su cuenta es privada, se envía una solicitud de seguimiento que él debe aprobar.
- **Compartir ubicación**: le envías tu posición aproximada. Necesitas un smartphone en la mano derecha, que esa persona esté en tu agenda y esperar **5 minutos** entre una ubicación y la siguiente.
- **Compartir número de teléfono**: una opción por cada smartphone que lleves. El otro jugador acepta con `/aceptar` y tu número queda guardado en su agenda.

Los detalles de estas funciones están en el [Sistema de teléfono y GPS](sistema-de-telefono-y-gps.md).

## Preferencias: configura el juego a tu gusto

`/preferencias` abre un menú con todos los ajustes de tu cuenta, organizados por categorías:

| Categoría | Qué puedes ajustar |
|---|---|
| **Chat** | Autocorrector, máximo de caracteres por mensaje, mensajes privados, anuncios, anuncios de servicio, bleets, transmisiones de noticias y gobierno, avisos de radares de velocidad, estilo de voz automático y estilo del `/do` |
| **Inventario** | Colores del inventario y elección entre la **barra de acceso rápido** o el inventario clásico de SA-MP; también el menú de compra en tiendas (catálogo visual o clásico) |
| **Acceso rápido** | Activar o desactivar las teclas de atajo: **H** (inventario), **2** (abrir, cerrar y pagar peajes), **N** (recoger y tirar), **NUM8** (luces), **NUM4** (usar), **NUM6** (guardar en espalda o pecho), **NUM2** (bloqueo), además de la tecla para entrar y salir de interiores y la de encender el motor |
| **Textdraws** | Velocímetro (moderno, clásico o apagado), nombre de calles, unidad de velocidad (km/h o mp/h), notificaciones en pantalla, alerta de tráfico aéreo y aviso de progreso de estadísticas |
| **Radar** | Mostrar u ocultar las zonas de pandilla en el radar |
| **Rendimiento** | Cantidad de objetos visibles y distancia de renderizado — bájalos si te va lento |

Bloquear los mensajes privados requiere membresía premium; el resto de opciones están disponibles para todos.

## Inventario rápido con la tecla H

Al pulsar **H** se abre la barra de acceso rápido: tus **12 primeros espacios** de inventario con el icono de cada objeto y su cantidad, sin diálogos de por medio.

- **A** y **D** (o **NUM4** y **NUM6**) para moverte entre espacios.
- **Disparar** o **Enter** toma en la mano el objeto seleccionado.
- Seleccionar un **espacio vacío** guarda ahí lo que lleves en las manos.
- **Sprint** cierra la barra.

No se puede abrir mientras estás cayendo, jugando en un casino o entrenando. Si prefieres los menús clásicos, cambia la opción **Interfaz de acceso rápido** en `/preferencias`. El inventario completo sigue disponible en cualquier momento con `/inventario`.

### Dónde acaban los objetos que compras

Todo lo que compras o recibes en tiendas, máquinas expendedoras, joyerías y demás comercios va al **primer lugar libre**, en este orden:

1. El bolso o paquete que lleves en la mano.
2. La mano derecha.
3. La mano izquierda.
4. Los bolsillos (tu inventario).
5. La mochila que lleves en la espalda.

Las **armas** no van a la mano izquierda ni a los bolsillos: solo a la mano derecha, a un bolso o a la mochila. Si no hay sitio para lo que compras, la compra se cancela antes de cobrarte.

### Mochilas

La mochila es un accesorio que se cuelga en la espalda y funciona como un contenedor más.

- Con la mochila en la **mano derecha**, usa `/usar` (o la tecla **NUM4**) para colgarla. Solo puedes llevar una a la vez, y los bolsos demasiado pequeños no se pueden colgar.
- `/quitar mochila` la vuelve a poner en tu mano derecha, que debe estar libre.
- `/editar mochila` ajusta cómo se ve sobre tu espalda y `/reset mochila` la devuelve a su posición original.
- `/contenedor mochila` hace lo mismo que `/usar` y `/quitar`.
- No puedes colgarte ni quitarte la mochila durante una partida de paintball.

## Tus necesidades

`/necesidades` abre abajo a la izquierda un panel al estilo de las estadísticas del GTA San Andreas original, con una barra para cada uno de estos valores: **músculo**, **peso**, **hambre**, **sed** y **energía**, además del día de la semana. En hambre y sed, una barra más llena significa más necesidad de comer o beber; en energía, más llena significa más descansado.

El panel se cierra solo a los **10 segundos**, o antes si vuelves a escribir el comando, y debes esperar **2 segundos** para volver a abrirlo. Cada vez que comes, bebes o recuperas energía también aparece una barra de progreso; puedes apagarla desde `/preferencias`. Cómo suben y bajan estos valores está explicado en el [Sistema de gimnasio](sistema-de-gimnasio.md).

## Dinero, sueldo y nivel

Cada **60 minutos** de juego recibes un pago automático. Si no tienes empleo, el **sueldo de desempleado** que paga el gobierno es de:

| Horas de juego | Sueldo por hora |
|---|---|
| Menos de 30 horas | **$250** |
| 30 horas o más | **$150** |

Ese sueldo es un colchón mínimo para que nadie se quede sin nada, no una forma de ganarse la vida: en cuanto puedas, busca trabajo. Si entras a una facción o a una empresa, cobras el sueldo de tu rango en lugar del de desempleado.

Del mismo pago se descuentan tus gastos: renta, facturas de agua y luz, y los créditos que tengas. Los impuestos de propiedades y vehículos se cobran **una sola vez al día**, en el primer pago de la jornada — lo explica el [Sistema de impuestos](sistema-de-impuestos.md).

Cada hora jugada suma para subir de nivel: hacen falta **12 horas por nivel**. A partir del **nivel 3** se exigen dos cosas más: tener la **doble autenticación (2FA)** activada en tu cuenta del UCP y tener un **hogar** comprado o alquilado. Si te falta alguna de las dos, el servidor te avisa y el nivel queda en espera hasta que lo resuelvas.

## Buscar trabajo

- `/trabajos` (también `/misiones` y `/empleos`) — trabajos secundarios que puedes hacer por tu cuenta, sin contrato ni jefe: barrendero, conductor de autobús, conductor de vehículos pesados, cortacésped, guardacostas, maquinista de trenes, operador de forklift, piloto comercial, vendedor de helados y vendedor de hotdogs. El menú te marca el vehículo libre más cercano.
- `/anuncios` — anuncios publicados por otros jugadores, muchas veces con ofertas de empleo.

## Moverte por la ciudad

- `/pedirtaxi` — solicita un taxi a los conductores conectados. Hay un punto informativo en Pershing Square que lo recuerda.
- `/samaps` (también `/mapa` o `/gps`) — buscador de calles, propiedades y gasolineras cercanas.
- `/calle` — te dice en qué calle estás.
- `/entrar` y `/salir` — entrar y salir de interiores (o la tecla que hayas configurado).
- Tecla **2** (**NUM1** si vas a pie) — abre y cierra de un solo toque las puertas de propiedades, las demás puertas, las barreras y las celdas, y también paga el peaje, eligiendo lo que tengas delante. Equivale a `/abrir`, `/cerrar` y `/peaje`, y puedes apagarla en `/preferencias`.

El **peaje** cuesta **$25**, que se descuentan del dinero en mano y, si no alcanza, del banco. Para pasar, el vehículo debe tener sus papeles en regla. Policías y bomberos pasan sin pagar.

Para conducir legalmente necesitas la **licencia de conducir**: ve a la autoescuela, súbete a uno de los Sentinel blancos aparcados junto al marcador y usa `/examen`. Cuesta **$3.000 en efectivo** y consiste en seguir una ruta de marcadores respetando cuatro reglas: no circular en sentido contrario, no ir demasiado rápido, llevar el cinturón puesto y no chocar. Puedes consultar tus licencias con `/licencia`.

No olvides el **combustible**: los vehículos gastan gasolina o diésel y hay que repostar. Todo lo relacionado está en el [Sistema de combustible](sistema-de-combustible.md).

## Conseguir un hogar

Vivir en la calle no es plan, y además el nivel 3 lo exige. Busca una casa en venta o en alquiler, ponte en su entrada y usa `/comprar` o `/alquilar`. Tener casa te da armario para cambiarte de ropa con `/ropa`, almacén, refrigerador, buzón y la posibilidad de decorarla con muebles. Lo tienes todo detallado en el [Sistema de propiedades](sistema-de-propiedades.md).

## Únete a una facción

Las facciones son el motor del rol organizado del servidor. Si dudas por dónde empezar, nuestra recomendación es clara: **Los Santos Fire Department (LSFD)**. Acción inmediata, ambiente acogedor y la mejor curva de aprendizaje para alguien nuevo.

Tienes el catálogo completo en [Facciones legales](facciones-legales.md) y [Facciones ilegales](facciones-ilegales.md).

## Primeros pasos recomendados

Cuando ya te muevas con soltura, estos son los sistemas que más te van a servir al principio:

- [Sistema de propiedades](sistema-de-propiedades.md) — comprar o alquilar tu primera casa, y todo lo que trae consigo.
- [Sistema de combustible](sistema-de-combustible.md) — repostar sin quedarte tirado a mitad de camino.
- [Sistema de impuestos](sistema-de-impuestos.md) — qué te cobra el gobierno cada día por tus bienes.
- [Sistema de Burger Points](sistema-de-burger-points.md) — la moneda que ganas jugando y en qué puedes gastarla.
- [Sistema de gimnasio](sistema-de-gimnasio.md) — entrenar a tu personaje y mejorar su forma física.
- [Sistema de teléfono y GPS](sistema-de-telefono-y-gps.md) — llamadas, contactos, ubicación compartida y el mapa para llegar a cualquier sitio.
- [Sistema de vehículos](sistema-de-vehiculos.md) — papeles, registro en el DMV y todo lo que necesitas para tener coche propio.
- [Sistema de habilidades](sistema-de-habilidades.md) — cómo mejora tu personaje en cada oficio.
- [Bleeter](bleeter.md) — la red social del servidor.
- [Certificación](sistema-de-certificacion.md) — el examen opcional de normas explicado en detalle.

## Si te atascas

Pasa por el **Discord oficial**: la comunidad vive ahí fuera del juego, con anuncios, ayuda, eventos y gente con la que hablar — [Discord San Andreas Roleplay](https://forum.sarp.es/index.php?/forum/218-discord-san-andreas-roleplay/).

Dentro del juego tienes `/duda` para los ayudantes y `/reportar` para los administradores; desde la web, el [sistema de tickets](sistema-de-tickets.md) del UCP. Nadie espera que lo sepas todo el primer día: pregunta.
