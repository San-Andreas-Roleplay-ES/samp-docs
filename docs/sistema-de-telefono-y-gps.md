# Sistema de teléfono y GPS

## Introducción

El teléfono es la herramienta de comunicación y orientación de tu personaje. Con él llamas y escribes mensajes, guardas contactos, compartes tu ubicación, conversas por el chat de [Bleeter](bleeter.md) y consultas el mapa del servidor para marcar rutas hacia calles, propiedades, negocios y trabajos. Si no tienes teléfono a mano, puedes llamar desde una cabina pública, y para viajar con música tienes la radio del vehículo, la de tu propiedad y las radios portátiles.

Hay dos clases de teléfono. El **smartphone** funciona con una tarjeta SIM que eliges tú y se puede cambiar cuando quieras; solo con un smartphone puedes usar el chat de Bleeter, compartir tu ubicación y ofrecer tu número desde el menú de jugadores. El **teléfono prepago** trae un número fijo ligado al aparato: sirve para llamar y mandar SMS, pero no admite cambiar de tarjeta SIM ni tiene las funciones de smartphone, y cualquiera que lo tenga en la mano puede desbloquearlo. En un smartphone, solo el dueño del número desbloquea la pantalla.

El GPS (`/gps`) es el mapa de San Andreas: busca por calle, propiedad, categoría de negocio o producto y marca el destino en tu minimapa. Es gratuito y no necesita teléfono.

### Comandos

- `/telefono` (también `/tel`) — saca el teléfono de tu inventario a la mano derecha y abre su pantalla. Usa `/tc` para recuperar el cursor si lo cerraste con ESC.
- `/llamar [número o contacto]` — marca un número o un contacto. `/llamar 911` conecta con emergencias.
- `/contestar` — contesta una llamada entrante.
- `/colgar` — termina la llamada.
- `/altavoz` — enciende o apaga el altavoz durante una llamada.
- `/sms [número o contacto] [mensaje]` (también `/mensaje`) — envía un SMS.
- `/contacto` — añade un contacto a tu agenda.
- `/sim` — muestra tus números, cambia la tarjeta SIM del teléfono y contrata planes nuevos.
- `/w [ID] [mensaje]`, `/w @usuario [mensaje]` y `/w [mensaje]` (también `/whatsapp`) — chat de Bleeter.
- `/ubicacion [jugador]` (también `/ubi`) — comparte tu ubicación aproximada con un contacto.
- `/gps` (también `/mapa` y `/samaps`) — abre el mapa del servidor.
- `/prop [llave]` — marca una propiedad por su número de llave.
- `/negocios`, `/trabajos` (también `/misiones` y `/empleos`) y `/minijuegos` (también `/entretenimiento`) — abren directamente esas secciones del GPS.
- `/micp` y `/borrarcp` — vuelven a mostrar o quitan el punto marcado en el minimapa.
- `/emisora [on | off]` — enciende o apaga la radio del vehículo o de la propiedad.
- `/radioportatil [on | off]` (también `/radiop` y `/boombox`) — enciende o apaga una radio portátil.

## El teléfono

Para usar la pantalla del teléfono debes tenerlo en el inventario; `/telefono` lo pasa a tu mano derecha y abre la interfaz con la pantalla de bloqueo. Desde ahí accedes a **Mensajes**, **Llamadas**, **Contactos**, la aplicación **Trading** (CluckinCoin, explicada en [Cluckin' Coins](sistema-de-cluckin-coins.md)), la aplicación **Prófugos** (explicada en [prófugos](sistema-de-profugos.md)) y los **Ajustes**. Los comandos de llamadas, SMS, contactos y SIM exigen el teléfono en la **mano derecha** y que tenga un número asignado; con el teléfono guardado en el inventario no funcionan.

En **Ajustes** puedes cambiar la tarjeta SIM, el fondo de pantalla, el tono de llamada, el tono de mensajes y borrar el historial. La pantalla de bloqueo te avisa de las llamadas perdidas y los mensajes sin leer.

### Tarjetas SIM y planes

Cada número es una tarjeta SIM independiente del aparato. Con `/sim` ves los números que tienes y puedes ponerle uno a tu teléfono; los planes nuevos se contratan en el mismo menú.

| Plan | Costo | Detalle |
|------|-------|---------|
| Personal | **$50**, descontados de tu banco | Número nuevo al azar. Tu límite de números depende de tu nivel premium |
| Comercial | **$50**, descontados de tu banco | Solo para dueños de negocio, para el negocio que elijas. Su número empieza con 555 y quien lo recibe ve que es una llamada comercial |

Si no se puede asignar un número, el sistema te devuelve los $50. No puedes contratar planes mientras tu banco esté bloqueado.

| Nivel | Números personales |
|-------|--------------------|
| Sin premium | **1** |
| Bronce | **2** |
| Plata | **3** |
| Oro | **4** |
| Platino y Rubí | **10** |

Los planes comerciales ocupan también un lugar dentro de ese límite. Más detalles de los niveles en [tienda premium](tienda-premium.md).

Si dos personas tienen el mismo número a la vez, todas reciben la llamada y la primera en contestar toma la línea; al resto le aparece la línea ocupada.

## Llamadas

Para llamar escribe `/llamar` con el número o el nombre de un contacto. Las llamadas no cuestan dinero. Mientras marcas, tu personaje saca el teléfono y la llamada tarda unos segundos en conectar.

| Situación | Resultado |
|-----------|-----------|
| El número no existe | El teléfono no da señal |
| El receptor ya está en otra llamada | Marca ocupado |
| Nadie contesta | La llamada termina como no contestada |
| Cuelgas, o guardas el teléfono durante la llamada | Se corta para ambos |
| Uno de los dos queda herido o se desconecta | Señal perdida |

Una vez contestada, lo que escribes en el chat normal se escucha en la llamada: la otra persona lo recibe con tu nombre de contacto, y quienes están cerca de ti oyen tu parte a **12 metros** en exteriores y **8 metros** en interiores (a **5 metros** si susurras). Con el **altavoz** encendido, quienes están a **5 metros** de ti oyen también lo que dice el otro lado.

Las llamadas, igual que los SMS, quedan en el registro de tu teléfono con su duración y si fueron contestadas. Para emergencias, `/llamar 911` conecta con la central; el 911 es gratuito en cualquier teléfono, incluidas las cabinas públicas.

## SMS

`/sms [número o contacto] [mensaje]` envía un mensaje de hasta **128 caracteres**. Debes esperar **3 segundos** entre un SMS y el siguiente. Si el número no existe, el teléfono avisa de que no da señal. El destinatario lo recibe en el chat con el nombre del contacto, con un sonido de notificación, y lo conserva en la bandeja de **Mensajes** de su teléfono. Los SMS se envían a números de teléfono, no a personas: llegan a quien tenga ese número en ese momento.

Desde un mensaje de la bandeja puedes llamar al remitente, responderle, y borrar el mensaje o la conversación completa.

### Borrar mensajes y llamadas

Puedes eliminar:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/telefono-borrar-historial.png" alt="Opción Borrar historial en el teléfono" width="679" height="349">

- un SMS o una llamada concretos, desde sus opciones;
- toda la conversación o todas las llamadas con un contacto, desde las opciones de cualquiera de ellos;
- la bandeja completa de SMS o el registro completo de llamadas, desde **Ajustes > Borrar historial**.

Antes de borrar se pide una confirmación, y la acción no se puede deshacer. Solo se elimina de **tu** teléfono: la otra persona conserva su copia. Para borrar debes tener en la mano el teléfono al que pertenecen los registros. Las llamadas en curso no se pueden borrar.

## Contactos

Los contactos se guardan por personaje, no por teléfono: los conservas aunque cambies de aparato o de tarjeta SIM. Caben hasta **64**. Con `/contacto` (o desde la aplicación **Contactos**) añades uno indicando su nombre y su número; en la libreta puedes llamar, escribir, cambiar el nombre o el número y eliminar.

También puedes intercambiar números sin teclearlos: al hacer clic en un jugador de la lista TAB aparece un menú con **Compartir número de teléfono** (una opción por cada smartphone que lleves). El otro jugador recibe la oferta y la acepta con `/aceptar` o la rechaza con `/rechazar`; si acepta, el número queda guardado en su agenda con el nombre de tu personaje. No se puede aceptar un número que ya tiene ni cuando su agenda está llena. En ese mismo menú puedes **seguir a la persona en Bleeter** o **compartirle tu ubicación**.

## Teléfonos públicos

Las cabinas telefónicas repartidas por la ciudad permiten llamar sin teléfono propio. Cada cabina tiene su **propio número**, que empieza con **213**, y que ves en el cartel que flota sobre ella cuando te acercas.

| Parámetro | Valor |
|-----------|-------|
| Costo de cada llamada | **$5** en efectivo (el 911 es gratis) |
| Distancia para usarla | **2 metros** de la cabina |
| Distancia máxima durante la llamada | **3 metros** (si te alejas, se corta) |
| Marcación | Solo números: las cabinas no tienen agenda |
| Vehículo | No se puede usar desde un vehículo |

Para llamar desde una cabina no debes tener un teléfono en la mano (con uno en la mano, `/llamar` usa tu teléfono). Una cabina ocupada por otra persona marca ocupado.

Las cabinas también reciben llamadas: si alguien marca su número, la cabina suena en el lugar y su cartel pasa a mostrar el timbre durante **90 segundos**. Quien esté a su lado y escriba `/contestar` toma la llamada.

## Chat de Bleeter con /w

El comando `/w` es el chat privado de [Bleeter](bleeter.md): los mismos mensajes se leen en el juego y en el panel de usuario de la web, así que puedes conversar con alguien aunque esté desconectado. Necesitas un **smartphone** (basta con llevarlo en el inventario, no hace falta tenerlo en la mano) y estar vivo.

| Forma | Qué hace |
|-------|----------|
| `/w [ID] [mensaje]` | Escribe a un jugador conectado. Debe estar en tus contactos y llevar un smartphone |
| `/w @usuario [mensaje]` | Escribe por nombre de usuario de Bleeter. No hace falta tenerlo de contacto, y funciona aunque esté desconectado: lo leerá en la web |
| `/w [mensaje]` | Responde al último chat que enviaste o recibiste |

Los mensajes tienen un máximo de **128 caracteres** y debes esperar **2 segundos** entre uno y otro con las formas `@usuario` y de respuesta. Si el destinatario te tiene silenciado en Bleeter, no recibe tu mensaje en el juego. Si hay más de un usuario con el mismo nombre, el comando te pide que uses el ID o el panel.

Los mensajes que te escriben desde la web llegan al juego en pocos segundos si llevas un smartphone, y aparecen como "Chat de [nombre]" con un recordatorio para responder con `/w`. Si el mensaje es largo, se corta con un aviso de que continúa en Bleeter; las imágenes y los vídeos se indican como adjuntos. Al entrar al servidor se te avisa cuántos mensajes de chat tienes sin leer.

### Compartir tu ubicación

`/ubicacion [jugador]` envía un punto del mapa a otro jugador. El receptor lo ve como un punto en su minimapa y como un mensaje de chat, también guardado en el chat de Bleeter.

- Debes tener un **smartphone en la mano derecha**, y el destinatario debe estar en tus contactos y llevar un smartphone.
- La ubicación es **aproximada**: se desvía hasta **100 metros** de tu posición real. Si estás dentro de una propiedad, se comparte la de su entrada.
- Debes esperar **5 minutos** entre una ubicación compartida y la siguiente.

## GPS

`/gps` abre el menú del mapa de San Andreas. Cada opción termina marcando un punto en tu minimapa; si viajas como conductor o copiloto, el punto se marca también a la persona que va en el otro asiento delantero.

| Opción | Qué hace |
|--------|----------|
| Buscar calle | Escribe al menos **5 letras** del nombre de la calle |
| Buscar propiedad | Escribe el número de llave de la propiedad (igual que `/prop`) |
| Buscar gasolinera cercana | Marca la gasolinera más próxima |
| Buscar negocio cercano | Marca la tienda más próxima |
| Buscar bar/club cercano | Marca el bar o club más próximo |
| Buscar comida rápida cercana | Marca el negocio de comida rápida más próximo |
| Buscar hotel cercano | Marca el hotel más próximo |
| Buscar por categoría | Muestra negocios abiertos con existencias de la categoría elegida |
| Buscar por producto | Muestra negocios abiertos que vendan el producto que escribas |
| Negocios activos | Lista de negocios con actividad, con su llave |
| Puntos de interés | Lista de edificios públicos y lugares de referencia, con su zona |
| Trabajos | Marca un vehículo de trabajo disponible |
| Entretenimiento | Marca el casino, el paintball, las carreras de caballos, la pista de motocross, el 8-Ball Pool, los bolos o el golf |

### Buscar por categoría y por producto

Estas dos búsquedas te muestran los **15 negocios abiertos más cercanos** que tengan existencias, con su distancia, ordenados del más cercano al más lejano. No incluyen negocios cerrados.

- **Por categoría**: eliges una categoría de la lista (comidas, bebidas, ropa, ferretería, etc.) y ves el nombre del negocio, su llave, la distancia y la zona.
- **Por producto**: escribes al menos **3 letras** (hasta 32) del producto, por ejemplo `agua`. La lista muestra el negocio, el producto, **su precio** y la distancia; si un negocio tiene varios productos que coinciden, se muestra el más barato.

Elige un resultado y pulsa **Marcar ruta** para que aparezca en el minimapa. Los negocios se miden desde tu posición, o desde la entrada si estás dentro de una propiedad. El punto se queda en el minimapa hasta que lo alcanzas; `/borrarcp` lo quita antes y `/micp` lo vuelve a mostrar.

El menú de trabajos del GPS marca el vehículo del trabajo secundario elegido (barrendero, autobús, vehículos pesados, cortacésped, guardacostas, tren, forklift, piloto comercial, heladero y vendedor de hotdogs) y, como el resto de puntos, lo comparte con el acompañante delantero.

## Música y radios

### Radio del vehículo y de la propiedad

`/emisora on` abre el menú de música; `/emisora off` la apaga.

- **En un vehículo** debes ir de conductor o copiloto, y el vehículo debe conservar su radio (si se la robaron, no funciona). La música suena para todos los ocupantes; al bajarte del vehículo dejas de escucharla.
- **En una propiedad** necesitas sus llaves (o permiso de empleado si es un negocio). La música suena para todos los que están dentro y también en su terraza o área exterior. La emisora queda guardada en la propiedad.

El menú ofrece dos fuentes:

| Fuente | Costo | Detalle |
|--------|-------|---------|
| YouTube | **1 moneda** por canción | Cualquier canción que encuentres |
| Emisoras de la comunidad | Gratis | Lista de emisoras con su nivel de popularidad (Reciente, En crecimiento, Mainstream, Trending o Dominante) |

### Música de YouTube

Elige **YouTube**, escribe el nombre de la canción o del artista (hasta **100 caracteres**) y selecciona uno de los hasta **10 resultados** que se muestran. Después viene la descarga del archivo, que puede tardar unos minutos mientras ves el mensaje en pantalla.

- Necesitas al menos **1 moneda** en tu cuenta. Se descuenta cuando la canción empieza a sonar; las monedas se explican en la [tienda premium](tienda-premium.md).
- Debes esperar **5 segundos** entre una búsqueda y la siguiente.
- Debes estar en un vehículo, una propiedad o junto a una radio portátil. Si te alejas del lugar o cambias de vehículo o propiedad mientras se descarga, la canción no suena y no se te cobra.
- Si el servicio no responde, no se reproduce nada y no se cobra.

### Radios portátiles

Una radio portátil es un objeto que se deja en el suelo para que suene al aire libre. `/radioportatil on` abre el mismo menú de música (con las mismas dos fuentes y el mismo costo de YouTube) y `/radioportatil off` la apaga.

- Debes estar **agachado y junto a la radio**.
- Solo funciona en **exteriores**; dentro de una propiedad usa `/emisora`.
- La música se oye en un radio alrededor de la radio que depende del modelo; los jugadores que entran en ese radio empiezan a escucharla y dejan de hacerlo al alejarse.
- Si hay otra radio con música cerca, debes alejarte antes de encender la tuya.
- Si recoges la radio, la música se detiene.

## Consejos

- Contrata un plan personal antes de necesitar un segundo número: es útil para separar contactos de trabajo y personales, sobre todo con premium.
- Guarda los números de tus contactos de confianza: `/w [ID]` y `/ubicacion` solo funcionan con personas que están en tu agenda.
- Si no tienes teléfono a mano, busca una cabina pública y lleva siempre algo de efectivo para pagar los $5.
- Usa la búsqueda por producto del GPS antes de recorrer la ciudad: te muestra el precio de cada negocio y el más cercano.
- Antes de pagar por una canción de YouTube, comprueba que seguirás en el mismo vehículo o propiedad hasta que empiece a sonar.
- Si compartes tu ubicación, recuerda que el receptor ve un punto aproximado: llega a unos 100 metros de ti, no a tu puerta.
