# Sistema de cámaras de seguridad

## Introducción

Las cámaras de seguridad (CCTV) son equipos que instalan los técnicos de las **empresas de seguridad** en casas, negocios y otras propiedades. Una cámara graba todo lo que ocurre frente a su lente: quién entra, qué compra, qué roba, a quién agrede. El dueño de la propiedad puede mirar las imágenes **en vivo** y revisar el **registro** de lo grabado, que se escribe como una acción de rol. La policía, por su parte, puede consultar el registro completo, pero no ver la señal en vivo.

Una cámara no es un mueble: no se compra en una tienda ni se coloca por cuenta propia. Siempre la instala un técnico de una empresa de seguridad, que cobra por el trabajo. Un ladrón, a su vez, puede **sabotearla** o **destruirla a tiros** para que deje de grabar, aunque con el riesgo de que otra cámara lo grabe en el intento.

Esta guía también cubre dos formas de mirar una puerta desde fuera de la acción: la **mirilla**, para ver quién llama a tu puerta, y la **snakecam**, con la que la policía mira hacia el interior de una propiedad antes de entrar. Para las propiedades en general, consulta [propiedades](sistema-de-propiedades.md).

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/camara-de-seguridad-instalada.jpg" alt="Cámara de seguridad instalada en el techo de un negocio" width="1571" height="604">

### Comandos

- `/camaras` — abre la lista de tus cámaras. Estando en vivo, vuelve a escribirlo para dejar de mirar.
- `/instalarcamara [id/parte del nombre]` — el técnico ofrece instalar una cámara al dueño de la propiedad.
- `/repararcamara [id/parte del nombre]` — el técnico ofrece reparar una cámara dañada.
- `/sabotearcamara` — desconecta una cámara cercana con una herramienta.
- `/aceptar` y `/rechazar` — el dueño responde a la oferta de instalación o de reparación.
- `/mirilla` — miras hacia afuera por la mirilla de la puerta, desde adentro.
- `/snakecam` (alias `/optiwand`) — la policía mira hacia el interior por debajo de la puerta, desde afuera.

## Instalación

Solo puede instalar cámaras un empleado de una **empresa de seguridad** que esté **trabajando** (`/trabajar`), a pie y sin estar herido, esposado ni reducido. El proceso es este:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/camaras-de-seguridad-catalogo.jpg" alt="Catálogo de modelos al instalar una cámara de seguridad" width="1600" height="1379">

1. El técnico se ubica en la propiedad del cliente: dentro de ella, junto a una de sus puertas por el lado de afuera o en su zona exterior. El cliente debe estar a menos de **5 metros**.
2. El técnico escribe `/instalarcamara` con el nombre o el ID del cliente. El cliente ve el precio y acepta con `/aceptar` (o rechaza con `/rechazar`).
3. El técnico elige entre seis modelos: **Techo**, **Pared**, **Exterior**, **Reflectores**, **Moderna 1** y **Moderna 2**.
4. Con el editor de objetos, el técnico ubica y orienta la cámara. El lente debe apuntar hacia donde pasa la gente, y la cámara debe quedar a **10 metros o menos** de él.
5. El técnico confirma la instalación, pide una **vista previa** de lo que verá la cámara o la **reajusta**. Para confirmar, el cliente tiene que seguir a **10 metros o menos** del técnico.

El técnico no puede instalar cámaras en sus propias propiedades ni en las de su cónyuge. Si el técnico queda herido o el cliente se desconecta, la instalación se cancela y no se cobra nada.

### Dónde puede ir una cámara

| Requisito | Valor |
|-----------|-------|
| Lugar | Dentro de la propiedad, en su zona exterior o hasta **15 m** de sus puertas |
| Altura sobre el piso | Entre **0,3 m** y **8 m** |
| Alcance de la cobertura | **12 m** frente al lente |
| Ancho de la cobertura | Unos **70°** |
| Superposición | Dos cámaras **no pueden cubrir la misma zona** |

Las paredes del mapa bloquean la visión: una cámara solo graba lo que de verdad ve. Si la ubicación no cumple alguna condición, el editor se vuelve a abrir y el técnico debe corregirla.

### Precio y pagos

| Concepto | Valor |
|----------|-------|
| Precio base de una cámara | $4.500 |
| Precio máximo que puede fijar la empresa | 10 veces el precio base ($45.000) |
| Forma de pago | Se descuenta del **banco del cliente** al terminar la instalación |
| Para el técnico | **40%** del precio y **+3 [Burger Points](sistema-de-burger-points.md)** |
| Para la empresa | El 60% restante, en su caja |
| Stock | Cada instalación consume **1 cámara** del stock de la empresa |

El precio lo fija la propia empresa de seguridad dentro de ese rango. Si el cliente no tiene saldo suficiente en el banco, o la empresa se quedó sin cámaras o cerró, no se cobra nada y el trabajo se cancela.

## Ver las cámaras con /camaras

El **dueño** de la propiedad (y su cónyuge, o el líder si es de una facción) puede usar `/camaras` en estos casos:

- En el **mostrador de su negocio**: abre la lista de las cámaras de ese negocio.
- Con un **notebook en la mano**: abre la lista de todas sus cámaras, desde cualquier lugar.

Un técnico de seguridad en servicio también puede abrir la lista, ver en vivo y leer el registro de las cámaras que instaló su empresa, pero no puede renombrarlas ni desinstalarlas.

La lista muestra el código de cada cámara, su nombre, la propiedad y su estado (activa, sin señal o destruida). Al elegir una cámara se abre un menú con estas opciones:

| Opción | Qué hace |
|--------|----------|
| **Ver en vivo** | Pasas a mirar la cámara. Requiere estar en el mostrador de tu negocio o tener un notebook en la mano. |
| **Registro** | Muestra lo que grabó la cámara. |
| **Renombrar** | Cambia el nombre de la cámara (de 1 a 23 caracteres). |
| **Desinstalar** | Retira la cámara. **No devuelve el dinero** de la instalación y se pierde su registro. |

### Vista en vivo

La pantalla imita un monitor de seguridad, con la marca REC, la fecha, la hora y el código de la cámara. Mientras miras:

- **A** y **D** cambian a la cámara anterior o siguiente de la misma propiedad.
- **W** y **S** acercan y alejan la imagen, hasta **3 veces** el tamaño normal.
- **Espacio**, **Enter**, **F** o `/camaras` te sacan de la vista.

Solo puedes mirar en vivo estando vivo y a pie, y no durante la Purga, los Hunger Games ni el paintball. Tu personaje se queda quieto en el lugar, con tu nombre sobre él, y no puedes hablar ni usar comandos. Si alguien lo golpea o queda herido, la vista se corta. Si pierdes el acceso a la cámara (por ejemplo, porque vendiste la propiedad), también se corta. Una cámara saboteada o destruida muestra el aviso **CAMERA OFFLINE**.

## La grabación

Cada cámara conserva un registro de **14 días**. Cada entrada se muestra con el formato *Fecha | Grabación* y está escrita como una acción de rol, por ejemplo: *John Doe entra en cuadro.* Al elegir una entrada ves el detalle: quién aparece, su skin, lo que lleva en la mano derecha, en la mano izquierda y a la espalda, su descripción física, sus datos de cirugía y sus atributos (sexo, edad, cabello, ojos, altura, contextura y estado físico). Quien lleve **máscara** aparece como enmascarado, con el rostro cubierto.

### Qué registra una cámara

| Tipo | Eventos |
|------|---------|
| Movimiento | Entradas a pie y compras en el negocio |
| Delitos contra la propiedad | Hurtos, atracos, cerraduras de propiedades forzadas, robos a la propiedad, robos de muebles e incendios |
| Delitos con vehículos | Ventanillas rotas, puertas de vehículos forzadas, puentes, desarmes de vehículos y patentes adulteradas |
| Delitos contra personas | Agresiones, heridas graves, asesinatos, disparos y carteristas |
| Otros | Skimmers en cajeros, sabotajes y ataques a la cámara |
| Rol | Los `/me` y `/ame` de quienes estén en cuadro |

Algunas precisiones:

- Las **entradas** se anotan una vez por visita. Si sales del cuadro y vuelves a entrar, solo se anota de nuevo tras **5 minutos** fuera.
- Una agresión se anota como máximo cada **30 segundos** por persona en una misma cámara, y los disparos igual: una vez cada **30 segundos** por cámara.
- Los roles se anotan hasta **3 cada 5 segundos** por jugador.
- Una cámara **sin señal o destruida** no graba nada.
- Durante la Purga y los Hunger Games no se registran agresiones, heridas, asesinatos ni disparos.

### Avisos al dueño

Cuando una cámara registra un **delito**, el dueño recibe un aviso en el chat con el código de la cámara, su nombre, la propiedad y el tipo de delito. Si está desconectado, recibe una notificación para cuando vuelva a entrar. Cada cámara avisa **una vez por minuto** como máximo. Los sabotajes y la destrucción de una cámara tienen su propio aviso.

### Quién puede leer el registro

- El **dueño** de la propiedad lee solo lo grabado durante **su** gestión. Si compras una propiedad, no ves lo que grabaron las cámaras con el dueño anterior.
- La **policía y la justicia de servicio** pueden ver el **registro completo** de las cámaras de una propiedad ajena usando `/camaras` desde su interior o junto a su puerta. No tienen vista en vivo.

## Sabotaje y destrucción

Una cámara que deja de funcionar no graba nada hasta que un técnico la repare.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/camara-de-seguridad-offline.jpg" alt="Pantalla de una cámara de seguridad saboteada con el aviso CAMERA OFFLINE" width="1600" height="900">

### Sabotaje con herramientas

`/sabotearcamara` desconecta una cámara a **3,5 metros** o menos. Necesitas tener en la **mano derecha** un **destornillador** o una herramienta de palanca (palanca, corta cadenas, ariete, motosierra, motoamoladora, halligan o hacha), estar a pie y no estar herido, esposado ni reducido.

- El trabajo dura **15 segundos**, con una animación a la vista de todos.
- Si te alejas de la cámara, sueltas la herramienta o quedas herido antes de terminar, la cámara no se desconecta.
- Al terminar, la cámara queda **sin señal** y el dueño recibe un aviso.
- **Cuidado**: el sabotaje queda grabado por cualquier otra cámara que te vea, incluida la misma cámara si la manipulas de frente.

### Destrucción a tiros

**3 disparos** destruyen una cámara. Se inclina, suelta chispas y suena un chispazo audible a unos 30 metros. El dueño recibe el aviso de que fue destruida, y el ataque queda registrado por la cámara que vea al tirador.

## Reparación

Un técnico de seguridad en servicio repara una cámara sin señal o destruida con `/repararcamara`:

1. El técnico se para junto a la cámara (a **4 metros** o menos) y con el dueño a menos de **5 metros**.
2. Ofrece el servicio al dueño con `/repararcamara`, y el dueño acepta con `/aceptar`.
3. El costo es el **30%** del precio de instalación de la empresa, y se descuenta del banco del dueño.
4. El técnico recibe el **40%** de ese cobro y el resto va a la caja de la empresa.

El técnico no puede reparar cámaras de sus propias propiedades. Si el dueño no tiene saldo en el banco, la reparación no se hace.

## Mirilla

`/mirilla` te deja mirar hacia afuera con un efecto de ojo de pez, sin abrir la puerta.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/mirilla-de-la-puerta.png" alt="Vista por la mirilla de la puerta de una propiedad" width="1600" height="900">

- Debes estar **dentro** de la propiedad, a menos de **2,5 metros** de su puerta de entrada, vivo y a pie.
- No está disponible en **Twin Towers** ni durante las **visitas** a la cárcel, ni durante la Purga, los Hunger Games o el paintball.
- Giras la cámara con el **mouse**, pero no puedes moverte.
- Sales con **Enter** o **F**, o repitiendo `/mirilla`.
- Tu personaje hace un `/ame` al empezar y otro al terminar.
- Donde estabas queda tu personaje, con tu nombre sobre él. Si alguien lo golpea o si quedas herido, la vista se corta.
- Mientras miras no hay chat. Solo funcionan `/mp`, `/hora`, `/reportar` y `/duda`.

## Snakecam

`/snakecam` (alias `/optiwand`) es la cámara que la policía mete por debajo de una puerta para ver el interior a ras de suelo, sin exponerse.

| Requisito | Detalle |
|-----------|---------|
| Quién | Policía y justicia (por ejemplo LSPD, LSSD, FBI o fiscalía), **de servicio** |
| Equipo | Un **Optiwand** en la mano derecha, que se obtiene con `/equipar` |
| Lugar | Junto a la puerta de la propiedad, por el lado de **afuera**, a menos de **2,5 metros** |
| Estado | Vivo, a pie, sin esposas ni reducido |

Las reglas de la vista son las mismas que las de la mirilla: giras con el mouse, sales con **Enter**, **F** o repitiendo el comando, tu personaje hace un `/ame` al empezar y al terminar, no puedes hablar y la vista se corta si te hieren o te golpean. Quienes están dentro de la propiedad ven un cartel **(( Snakecam ))** junto a la puerta, así que la policía no mira sin ser notada.

## Consejos

- Si tienes un negocio, instala cámaras que cubran la **caja** y la **entrada**, y cuida que no se pisen entre sí: cada zona solo admite una cámara.
- Revisa el registro de vez en cuando. Un aviso de delito solo llega una vez por minuto por cámara, así que puede haber más entradas de las que viste en el chat.
- Quien entra con **máscara** aparece con el rostro cubierto, pero la cámara igual registra lo que lleva en las manos y su descripción.
- Una cámara que aparece como **sin señal** o **destruida** deja un hueco en tu seguridad: llama a un técnico de seguridad lo antes posible. Ten presente que recuperarla cuesta el 30% de lo que costó instalarla.
- Si vas a hacer algo ilegal, recuerda que sabotear una cámara se graba en otra cámara que te vea, y que cada acción en cuadro queda escrita junto a tu descripción.
- Antes de abrir una puerta a un desconocido, usa `/mirilla`: no cuesta nada y te deja ver quién está afuera. Recuerda que tu personaje queda quieto junto a la puerta mientras miras.
- Si eres policía, ten presente que quienes están dentro ven el cartel de la snakecam y pueden reaccionar antes de que entres.
