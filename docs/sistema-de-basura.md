# Sistema de basura

## Introducción

La **basura** se acumula sola en los negocios de San Andreas: cada compra de un cliente, cada reparación de un mecánico y cada entrega de un repartidor deja residuos en el local. Un negocio sucio vende menos, ahuyenta clientes y puede terminar perdiéndose. Por eso existe un oficio dedicado a limpiarlo: el **recolector de basura**.

Los recolectores trabajan para las **empresas recolectoras de residuos** repartidas por Los Santos y el condado (Willowfield, Idlewood, East Beach, Glen Park, Ocean Docks, Verdant Bluffs, East Los Santos y Angel Pine, entre otras). Su trabajo consiste en vaciar los contenedores de la vía pública, limpiar los negocios que los contraten y cargar las bolsas en el camión de basura de la empresa, que es donde se cobra cada entrega.

Es un trabajo legal, sin requisitos de antecedentes ni licencias: basta con conseguir un contrato en una empresa recolectora y ponerte en servicio. Se cobra por kilo recolectado, la paga sube con la habilidad y el gobierno subsidia una parte del reciclaje.

> Las bolsas de basura **persisten entre reinicios** del servidor, así que la basura tirada en la calle sigue ahí hasta que alguien la recoja.

### Comandos

- /trabajar — entras o sales de servicio en tu empresa (dentro del negocio o en un vehículo de la empresa).
- /negvehiculos — saca el camión de basura de la empresa.
- /recolectar — te marca en el mapa el contenedor, la bolsa o el negocio con basura más cercano.
- /basurero — abre el contenedor de basura que tengas al lado.
- /basurero sacar [ranura] — saca un objeto del contenedor.
- /basurero meter — guarda en el contenedor el objeto de tu mano derecha.
- /basurero limpiar — vacía el contenedor entero en una bolsa de basura (solo recolectores en servicio).
- /limpiarnegocio — limpia el negocio en el que estás.
- /mirarbasura — muestra los kilos de basura del negocio, las plagas y las ventas que estás perdiendo.
- /maletero — mete la bolsa de basura en el camión y cobra la entrega.
- /recoger — levanta del suelo una bolsa de basura.

## Requisitos para trabajar como recolector

| Requisito | Detalle |
| --- | --- |
| Contrato | Ser empleado de una **empresa recolectora de residuos** |
| Servicio | Estar en servicio con `/trabajar` |
| Vehículo | El **camión de basura** de la empresa para usar `/recolectar` y para entregar |
| Herramienta | **Escoba** o **jabón** en la mano derecha para limpiar negocios |
| Antecedentes | No se exige historial limpio |

La **escoba** cuesta **$25** y no se gasta; el **jabón** cuesta **$15** y rinde **5 limpiezas**. Ambos se venden en las ferreterías.

## Limpiar un negocio

Con una herramienta de limpieza en la mano derecha y estando dentro del local, `/limpiarnegocio` inicia la limpieza. Tienes que quedarte en el negocio y conservar la herramienta durante todo el proceso: si te alejas o la pierdes, la limpieza se cancela sin recompensa.

Pueden limpiar:

- **Empleados del negocio** en servicio.
- **Quien tenga llaves** del local (dueños y personas autorizadas), sin necesidad de estar en servicio.
- **Recolectores de basura** en servicio, que además son los **únicos** que pueden limpiar locales con **70 kg o más** (a partir de ahí hay plagas de ratas y hacen falta especialistas).

Cuánta basura recoges y cuánto tardas depende de tu **habilidad de recolector** y de la herramienta:

| Herramienta | Cantidad recogida | Tiempo |
| --- | --- | --- |
| Escoba | **+33% de cantidad** | Tiempo normal |
| Jabón | Cantidad normal | **-33% de tiempo** |

- La tanda base es de **5 a 9 kg**, y se multiplica de **x1 a x3** según tu habilidad (mejora rápido al principio y se aplana cerca del máximo).
- El tiempo va de **60 segundos** con habilidad 0 a **30 segundos** con habilidad máxima, antes del descuento del jabón.
- Si el negocio tiene menos basura de la que ibas a recoger, recoges solo lo que queda.

Al terminar aparece una **bolsa de basura** a tus pies con todos los kilos apilados. Cada bolsa admite hasta **50 kg**. Esa bolsa es un objeto normal del inventario: puedes levantarla con `/recoger`, llevarla a un contenedor, dejarla donde quieras o meterla en el camión si eres recolector.

Hay un **25% de probabilidad** de subir habilidad al terminar una limpieza: **+1 punto**, o **+2 puntos** si eres premium.

## Cobro de la limpieza a los negocios

Cuando un recolector limpia un negocio **del que no es empleado ni tiene llaves**, ese negocio paga el servicio: **$20 por cada kilo** retirado, descontados de la caja del local en el mismo momento en que la basura se apila. Si la caja no alcanza, se cobra lo que haya disponible.

Los **empleados y los dueños** limpian su propio negocio **sin costo**. Esto abre la puerta a contratos de limpieza entre empresas recolectoras y negocios: el dueño decide si contrata un servicio externo o pone a sus propios empleados a barrer.

## Cómo afecta la basura a un negocio

La suciedad de un local suma la **basura acumulada** del negocio **más los kilos de todas las bolsas de basura que haya tiradas en su interior**. Dejar las bolsas dentro no soluciona nada: hay que sacarlas.

El límite de acumulación es de **100 kg**. Los efectos, por tramos:

| Basura | Efecto |
| --- | --- |
| 10 kg o más | Aparecen mensajes de ambiente: el local se ve desordenado |
| 21 kg o más | Basura por doquier, todo revuelto y huele mal |
| 41 kg o más | Zona crítica, cero higiene y olor tóxico |
| **56 kg o más** | Las ventas **dejan de ingresar dinero** a la caja y los mecánicos **no pueden trabajar** por riesgo de incendio |
| 61 kg o más | El ambiente es tan tóxico que nadie querría entrar |
| **70 kg o más** | **Plagas de ratas**: solo un recolector puede limpiar el local |
| 85 kg o más | El negocio puede ser **liberado** si el dueño lleva 14 días inactivo |

Además, la cantidad de productos que compran los clientes automáticos cada hora baja a medida que el local se ensucia:

| Basura acumulada | Productos vendidos por hora |
| --- | --- |
| 0 – 9 kg | 35 |
| 10 – 20 kg | 30 |
| 21 – 30 kg | 25 |
| 31 – 40 kg | 20 |
| 41 – 50 kg | 15 |
| 51 – 60 kg | 10 |
| 61 – 70 kg | 5 |
| Más de 70 kg | **0 (sin ventas)** |

Los **repartidores** tampoco aceptan pedidos de negocios con **50 kg o más** de basura, así que un local sucio se queda además sin reposición de stock.

El conteo diario de basura y de ventas de cada negocio **se conserva al reiniciar el servidor**: ya no se pierde el progreso del día.

### De dónde sale la basura

- Cada compra de un cliente real en el negocio genera **0 o 1 kg** al azar.
- Cada reparación, tuning o trabajo de mecánico en un taller genera **0 o 1 kg**.
- Cada entrega de un repartidor al negocio genera **0 o 1 kg**.
- Los clientes automáticos añaden **0 o 1 kg** por cada tanda horaria, hasta un máximo de **50 tandas al día**.

Consulta el estado del local con `/mirarbasura`. En [Sistema de propiedades](sistema-de-propiedades.md) encontrarás el resto de requisitos para que un negocio venda con normalidad.

## Contenedores de basura

Hay unos **266 contenedores** repartidos por el mapa. Cualquiera puede abrirlos con `/basurero` para mirar dentro, sacar lo que otros dejaron o tirar objetos que ya no quiera. Revisar uno por primera vez da **1 Burger Point** (ver [Sistema de Burger Points](sistema-de-burger-points.md)) y te deja **apestando a basura**.

Los contenedores acumulan kilos por su cuenta: al arrancar el servidor cada uno arranca con **1 a 5 kg** extra, y cada **15 minutos** los que tengan **menos de 25 kg** suman otros **1 a 5 kg**. Así siempre hay rutas de trabajo disponibles.

Un recolector en servicio y a pie puede usar `/basurero limpiar` para vaciar el contenedor entero: toda la basura acumulada se convierte en **una sola bolsa** a sus pies y el contenedor queda limpio, listo para volver a llenarse con el tiempo.

Lo que puedes encontrar dentro de un contenedor (comida, dinero, objetos, armas) se explica en detalle en [Sistema de basureros](sistema-de-basureros.md).

## Entregar la basura y cobrar

La basura se entrega **en el camión de basura** de tu empresa: acércate con la bolsa en la mano y usa `/maletero`. Las bolsas de basura **solo** pueden guardarse en camiones de basura; cualquier otro maletero las rechaza.

El pago base es de **$20 por kilo** de la bolsa, y se multiplica por tu habilidad de recolector:

| Habilidad de recolector | Multiplicador | Pago por kilo |
| --- | --- | --- |
| 0 – 25 | x0.8 | $16 |
| 26 – 50 | x1.0 | $20 |
| 51 – 75 | x1.2 | $24 |
| 76 o más | x1.4 | $28 |

Una bolsa llena de 50 kg paga entre **$800** y **$1,400** según tu habilidad.

Al entregar:

- El dinero entra a tu **cuenta bancaria**.
- La **empresa recolectora** recibe en su caja el mismo importe que cobraste tú, y la entrega queda registrada en tus ganancias como empleado.
- El **gobierno subsidia el reciclaje** pagando el doble de tu cobro.
- Ganas **3 Burger Points** por entrega.
- Hay un **25% de probabilidad** de subir habilidad: **+1 punto**, o **+2** si eres premium.
- Quedas **apestando a basura** durante **8 horas**.

Si entregas bajo los efectos de ciertas drogas, recibes una **propina extra en efectivo** proporcional a lo que cobraste.

## Habilidad de recolector

La habilidad va de **0 a 100** y sube de a 1 punto (2 si eres premium) con un **25% de probabilidad** cada vez que terminas una limpieza de negocio o entregas una bolsa en el camión. No baja con el tiempo.

Subirla te da tres ventajas acumulativas:

- Recoges **hasta el triple de kilos** por limpieza.
- Tardas **la mitad de tiempo** en limpiar.
- Cobras **hasta un 40% más** por kilo entregado.

## Olor a basura

Trabajar con residuos deja tu personaje **apestando a basura** durante **8 horas**. El olor aparece en las descripciones de ambiente cerca de otros jugadores y se nota cuando alguien te examina. Se quita **usando un perfume**, y todos los olores se reinician a diario con el reinicio del servidor.

## Consejos

- **Empieza por los contenedores**: `/recolectar` te lleva siempre al punto con basura más cercano, sea contenedor, bolsa suelta o negocio sucio, así que hace de ruta automática.
- **Lleva escoba y jabón**: la escoba rinde más kilos por tanda y no se gasta; el jabón es para cuando quieras encadenar limpiezas rápidas.
- **No dejes bolsas dentro del local**: cuentan igual que la basura acumulada. Sácalas al camión o a un contenedor.
- **Ofrece contratos a los negocios**: un local que pasa de 56 kg deja de ganar dinero con sus ventas y, si es un taller, sus mecánicos no pueden trabajar. Un dueño en esa situación paga encantado $20 por kilo.
- **Vacía el contenedor en una sola bolsa**: un contenedor con muchos kilos se convierte en una bolsa muy rentable de un solo uso del comando.
- **Perfúmate antes de rolear fuera del trabajo**, o el olor te seguirá durante 8 horas.
