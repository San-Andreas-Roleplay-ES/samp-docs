# Sistema de Cluckin' Coins

## Introducción
El **CluckinCoin** es la criptomoneda del servidor: un activo digital cuyo precio sube y baja solo, sin que nadie pueda controlarlo. No se usa para pagar nada dentro del juego, no compra objetos ni propiedades y no tiene ninguna relación con las monedas de la [tienda premium](tienda-premium.md). Su único propósito es la **especulación**: compras barato, esperas a que el mercado se mueva y vendes más caro. O pierdes dinero, que es lo que suele pasar. También puedes conseguir monedas **minándolas** con equipo propio instalado en una propiedad (consulta la sección [Minería de CluckinCoin](#minería-de-cluckincoin)).

Todo se maneja desde la aplicación **Trading** de tu teléfono. Ahí ves el gráfico con la evolución del precio, el valor actual, tu saldo, y tienes tres botones: **Comprar**, **Vender** y **Transferir**. El dinero que entra y sale de estas operaciones siempre pasa por tu **cuenta bancaria**, nunca por el efectivo que llevas encima.

Lo más importante de entender antes de empezar: la billetera es **por cuenta, no por personaje**. Todos tus personajes comparten la misma dirección y el mismo saldo de CluckinCoins, así que puedes usarla para mover valor entre ellos. El dinero en dólares, en cambio, sigue siendo de cada personaje: si compras monedas con un personaje y las vendes con otro, el dinero acaba en el banco del segundo.

Es un sistema de riesgo real. El precio ha llegado a valer menos de la mitad de su máximo histórico en cuestión de meses, y no existe ningún mecanismo que garantice que recuperarás lo invertido.

### Comandos
- `/billetera` (o `/wallet`) — muestra tu dirección de CluckinCoin y tu saldo actual. Si aún no tienes billetera, la crea en el momento.
- `/telefono` (o `/tel`) — saca el teléfono del inventario para poder abrir la aplicación de Trading (si ya lo tienes en la mano, lo guarda).
- `/tc` (o `/pc`) — vuelve a activar el cursor del teléfono si lo desactivaste con ESC.
- `/sim` — con el teléfono en la mano derecha, abre el menú de tus planes para elegir el número que usará ese teléfono (o contratar uno nuevo). Es requisito para usar la aplicación y no sirve con teléfonos prepago, que ya traen su número.
- `/minar` (o `/mineria`) — frente a un equipo de minería, abre su pantalla de control; si ya la tienes abierta, la cierra.

## Requisitos
Para cualquier operación con CluckinCoin necesitas, sin excepción:

- Un **teléfono móvil en la mano derecha**. Si lo tienes guardado, `/telefono` lo saca del inventario.
- Que ese teléfono tenga un **número asignado**. Un móvil sin número no abre la aplicación; asígnale uno con `/sim`.
- Estar **vivo**. La interfaz del teléfono no responde si tu personaje no está en pie.
- Para **comprar**, dinero en el **banco**. El efectivo que llevas encima no sirve.

## Crear tu billetera
No hay trámite ni papeleo. La primera vez que escribes `/billetera` (o abres la aplicación de Trading), el sistema genera automáticamente tu dirección y te la muestra por chat junto a un saldo de **0.0 CluckinCoins**.

La dirección es una cadena de **15 caracteres** que siempre empieza por `0x`, mezclando números y letras minúsculas, del estilo `0x1946u517rfw2z`. Es **única e irrepetible**, y puedes compartirla sin miedo: sirve para que otros jugadores te envíen monedas, igual que un número de cuenta. Nadie puede sacarte saldo por conocer tu dirección.

Recuerda que esa dirección pertenece a tu **cuenta**: si creas un personaje nuevo y escribes `/billetera`, verás exactamente la misma dirección y el mismo saldo.

## Abrir la aplicación de Trading
1. Saca el teléfono con `/telefono`.
2. En la pantalla de bloqueo, haz clic para entrar al menú principal.
3. Pulsa el icono de **Trading** entre las aplicaciones.

Dentro verás el **gráfico de precio**, el **valor actual** en dólares y el **porcentaje de variación** de la última actualización (en verde si subió, en rojo si bajó). Debajo están los tres botones de operación.

El gráfico muestra los **últimos 70 registros de precio**, es decir, algo menos de tres días de historial. Ten en cuenta que no se redibuja continuamente: el servidor lo refresca cada **3 horas**, así que el dibujo puede ir ligeramente por detrás. El precio que aparece en los diálogos de compra y venta, en cambio, **siempre es el más reciente**, y el propio diálogo te indica cuánto hace que se actualizó ("hace 12 minutos", "hace 2 horas", etc.).

## Cómo se forma el precio
El precio del CluckinCoin se actualiza **una vez por hora**, de forma automática y al margen de lo que hagan los jugadores. Nadie —ni los jugadores ni el gobierno de San Andreas— puede empujarlo en una dirección: comprar o vender grandes cantidades **no mueve la cotización**.

Cada actualización aplica una **variación porcentual** sobre el precio anterior. Estas variaciones suelen ser pequeñas, pero se encadenan: varias horas seguidas en negativo componen caídas serias, y lo mismo al revés.

| Parámetro | Valor |
|---|---|
| Frecuencia de actualización | **cada hora** |
| Variación típica por actualización | alrededor de **±0.9%** |
| Variación máxima observada en una hora | cerca de **±3.8%** |
| Historial visible en el gráfico | **70 registros** (unos 3 días) |
| Refresco del gráfico en el teléfono | cada **3 horas** |

### Rango histórico
Para que te hagas una idea de hasta dónde se mueve, estos son los precios reales a los que se ha comerciado desde que existe el sistema:

| Referencia | Valor aproximado |
|---|---|
| Máximo histórico | **$4.900** por moneda |
| Mínimo histórico | **$1.520** por moneda |
| Rango habitual | entre **$2.000** y **$3.000** |

Dicho de otro modo: quien compró en el pico y vendió en el suelo perdió más del **65%** de su inversión. Quien hizo lo contrario, más que triplicó lo suyo. El mercado ha pasado temporadas enteras de varios meses cayendo sin recuperarse.

## Comprar CluckinCoins
Pulsa **Comprar** en la aplicación. El diálogo te muestra el precio actual, cuánto hace que se actualizó, tu **dinero disponible en el banco** y la comisión. Escribe la cantidad de monedas que quieres (se admiten hasta **dos decimales**, por ejemplo `1.5`) y confirma.

| Parámetro | Valor |
|---|---|
| Cantidad mínima por operación | **1 moneda** |
| Cantidad máxima por operación | **1.000 monedas** |
| Comisión de compra | **0.1%** sobre el importe |
| Gasto máximo por operación | **$10.000.000** |
| De dónde sale el dinero | **cuenta bancaria** |

El coste total es el precio actual multiplicado por la cantidad, **más un 0.1% de comisión**. Por ejemplo, con la moneda a $2.500, comprar 10 CluckinCoins cuesta $25.000 más $25 de comisión: **$25.025** descontados de tu banco. Si no tienes ese saldo, la operación se cancela y el juego te avisa de cuánto necesitas.

Las monedas aparecen en tu billetera de inmediato. No hay tiempo de espera ni confirmaciones pendientes.

Si el precio se actualiza mientras tienes abierto el diálogo, la operación se cancela y se te devuelve el dinero: vuelve a abrir el diálogo para ver el precio nuevo. Si te pasa al vender, la venta se cancela y conservas tus monedas.

## Vender CluckinCoins
Pulsa **Vender**. El diálogo te muestra el precio de venta, la última actualización, cuántos CluckinCoins tienes disponibles y la comisión. Escribe la cantidad a vender y confirma.

| Parámetro | Valor |
|---|---|
| Cantidad mínima por operación | **1 moneda** |
| Cantidad máxima por operación | **100 monedas** |
| Comisión de venta | **0.1%** sobre el importe |
| Diferencial frente al precio de compra | **$10 menos** por moneda |
| Ingreso máximo por operación | **$1.000.000** |
| A dónde va el dinero | **cuenta bancaria** |

Hay dos detalles que te restan dinero y conviene tener claros:

1. **El precio de venta es $10 inferior al de compra.** Es el diferencial de la casa de cambio. Si el precio mostrado en el gráfico es $2.500, tú vendes a $2.490.
2. **Se descuenta un 0.1% de comisión** sobre el importe resultante.

Continuando el ejemplo: vender 10 CluckinCoins con la moneda a $2.500 te da $24.900 menos $25 de comisión, es decir **$24.875** ingresados en tu banco. Junto con lo pagado al comprar, la ida y vuelta te ha costado unos **$150** aunque el precio no se haya movido ni un céntimo. Para una operación pequeña, el precio tiene que subir alrededor de un **0.6%** solo para que salgas empatado.

El límite de venta es **diez veces más estricto que el de compra**: puedes comprar 1.000 monedas de golpe, pero deshacerte de ellas te costará como mínimo diez operaciones. Tenlo en cuenta si acumulas una posición grande y quieres salir rápido en plena caída.

## Transferir a otro jugador
Pulsa **Transferir** para enviar monedas a cualquier otra billetera del servidor. El proceso tiene dos pasos:

1. Escribe la **dirección de destino** (15 caracteres, la que te haya pasado el otro jugador). El sistema comprueba que exista; si no la encuentra, cancela la operación. Tampoco puedes transferirte a tu propia billetera.
2. Escribe la **cantidad** a enviar y confirma.

| Parámetro | Valor |
|---|---|
| Cantidad mínima por transferencia | **1 moneda** |
| Cantidad máxima por transferencia | **100 monedas** |
| Comisión de transferencia | **0%** (gratis) |
| Saldo mínimo para poder transferir | **1 moneda** |

Las transferencias son **gratuitas e instantáneas**, y son la única forma de mover CluckinCoins entre jugadores. Como no cuestan comisión, también son la vía habitual para repartir monedas dentro de un grupo o saldar un acuerdo entre personajes sin pasar por el banco.

**Aviso importante:** una transferencia es **irreversible**. Si escribes mal la dirección y esa dirección resulta existir, las monedas se van a un desconocido y no hay manera de recuperarlas. Copia siempre la dirección con cuidado y, si es una cantidad grande, prueba primero enviando una sola moneda.

## Minería de CluckinCoin
Además de comprarlas, puedes **minar** CluckinCoins con equipo propio. Lo minado va a la misma billetera de tu cuenta y se vende desde el teléfono como cualquier otra moneda. Es una inversión a medio plazo, no dinero rápido: una pieza se paga sola tras unas **dos o tres semanas** de minado continuo, y eso si el precio de la moneda no cae.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/mineria-cluckincoin-pantalla.gif" alt="Pantalla de minería de CluckinCoin con los datos del equipo y los bloques" width="1680" height="1050">

### Equipos y piezas
Los equipos se compran en el [mercado negro](sistema-de-mercado-negro.md) (hay que ser delincuente y no policía, tener 50 horas de juego y la mano derecha libre) y se pagan con el efectivo que llevas. Llegan **vacíos** y en una caja: llévala a una propiedad y arma el equipo con `/desempaquetarmueble`, como cualquier otro mueble (consulta el [sistema de muebles](sistema-de-muebles.md)). Cada propiedad admite hasta **4 equipos de minería**.

Las piezas se compran de una en una desde el propio equipo y cada una aparece físicamente en su ranura. Para comprar el equipo y las piezas necesitas una [habilidad](sistema-de-habilidades.md) de **electrónica** mínima que depende del nivel.

| Equipo | Precio | Ranuras | Electrónica | Pieza | Precio de la pieza | Potencia por pieza | Consumo por pieza |
|---|---|---|---|---|---|---|---|
| Rig casero | **$2.500** | 6 | **15** | Tarjeta gráfica | **$3.500** | 30 MH/s | 0,25 kW |
| Estantería de ASIC | **$10.000** | 16 | **35** | ASIC | **$12.000** | 100 MH/s | 0,60 kW |
| Gabinete 42U | **$40.000** | 10 | **60** | Unidad 4U | **$45.000** | 400 MH/s | 1,60 kW |

Las piezas se pagan con efectivo o, si no alcanza, con el banco. Un equipo lleno rinde 180 MH/s (rig casero), 1.600 MH/s (estantería) o 4.000 MH/s (gabinete).

Para manejar un equipo (comprar piezas, cargar luz y cobrar) necesitas las **llaves de la propiedad** donde está instalado.

### Cómo usar el equipo
Ponte a pie y frente al equipo, a un metro o menos, y escribe `/minar`. Se abre una pantalla con lluvia de caracteres al estilo Matrix que muestra:

- El equipo, sus piezas y su potencia.
- El total de equipos encendidos en el servidor y su potencia sumada.
- Lo que has minado y su valor aproximado en dólares.
- El precio actual de la moneda.
- La luz restante y el consumo.
- La cuenta atrás hasta el próximo bloque.

Mientras la pantalla está abierta tu personaje queda quieto. Pulsa **H** para abrir el menú del equipo (comprar una pieza, cargar luz y cobrar) y **N** para cerrar la pantalla. Se cierra sola si te hieren, te alejas más de 3 metros del equipo o cambias de personaje.

### Luz prepagada
El equipo solo mina mientras tenga **luz cargada**; sin luz, se apaga. La luz cuesta **$10 por kWh** y se paga con efectivo o con el banco. Desde el menú eliges cuántas horas de consumo cargar: **6, 12, 24 o 48 horas**. Un equipo no puede acumular más de **48 horas** de consumo, así que solo ves las opciones que caben.

| Equipo lleno | Consumo | Luz de 1 hora | Luz de 48 horas |
|---|---|---|---|
| Rig casero | 1,5 kW | **$15** | **$720** |
| Estantería de ASIC | 9,6 kW | **$96** | **$4.608** |
| Gabinete 42U | 16 kW | **$160** | **$7.680** |

Con menos piezas, el consumo baja en la misma proporción. Si el equipo ya está encendido, solo quien lo encendió puede recargarlo.

Si empaquetas el equipo, **pierdes la luz que le quede**. Las piezas viajan con él.

### Refrigeración líquida
La refrigeración líquida cuesta **$25.000**, se compra en el mercado negro (electrónica **60**) y se instala como mueble a **3 metros o menos** de un Gabinete 42U. Reduce un **25%** el consumo de luz de ese gabinete. Cada refrigeración sirve a un solo gabinete: el más cercano.

### Bloques y ganancias
Cada **2 minutos** cae un bloque para toda la red (720 bloques al día). Cada equipo encendido recibe su parte según su potencia. Se reparte un **pozo diario de $500.000**, pagado en CluckinCoins al precio del momento, y cada equipo tiene un **tope de $8 por MH/s al día**: por ejemplo, un rig casero lleno gana como máximo $1.440 diarios, una estantería llena $12.800 y un gabinete lleno $32.000. Mientras la potencia total de la red no pase de 62.500 MH/s, cada equipo gana su tope. Si hay más mineros, el pozo se reparte entre todos y a cada uno le toca menos.

Como lo minado se paga en monedas, su valor en dólares sube o baja con el precio de la moneda. Si el servidor no tiene un precio vigente, los bloques se detienen hasta que vuelva.

### Cobrar lo minado
Lo que mina el equipo queda acumulado en él. Desde el menú, la opción de cobrar pasa lo acumulado (desde **0,01 CluckinCoin**) a la billetera de tu cuenta. Debes cobrar antes de empaquetar o quitar el equipo, y un equipo con piezas instaladas no se puede eliminar: solo empaquetar.

### Límites
- Hasta **4 equipos encendidos por propiedad** y hasta **4 por cuenta**.
- Un equipo sin piezas no se puede encender.
- Para armar un equipo que ya trae piezas necesitas las llaves de la propiedad.

## Riesgos
- **El precio puede desplomarse.** No es un depósito ni un ahorro garantizado: ha caído más de un 60% desde máximos en el pasado, y puede volver a hacerlo. Nunca inviertas dinero que necesites para el alquiler, el seguro médico o el combustible.
- **Los costes de entrada y salida son fijos.** Entre la comisión doble y el diferencial de $10, cada ida y vuelta te resta dinero aunque aciertes la dirección del mercado.
- **No puedes salir de golpe.** El tope de 100 monedas por venta obliga a fragmentar las posiciones grandes, y el precio puede seguir cayendo mientras vendes.
- **La minería no es dinero seguro.** El equipo cuesta, la luz cuesta y, si hay más mineros, el pozo se reparte entre más gente. Lo minado se paga en monedas, así que también te afecta una caída del precio.
- **Las transferencias no se deshacen.** Nadie revierte una transferencia enviada a la dirección equivocada.
- **Los tratos entre jugadores son cosa tuya.** Si vendes monedas a otro jugador a cambio de dinero en mano y él no paga, es un asunto entre personajes; el sistema solo registra el movimiento de monedas.

## Consejos
- Antes de comprar, mira el gráfico y fíjate en la tendencia de los últimos días, no solo en el porcentaje de la última hora.
- Un porcentaje verde muy grande en una sola actualización no significa que vaya a seguir subiendo: la variación de cada hora es independiente de la anterior.
- Como la billetera es de cuenta y las transferencias son gratis, es una forma cómoda de guardar valor si vas a jubilar un personaje o repartir fondos entre varios.
- Si vas a acumular una cantidad seria, hazlo con dinero que ya tengas parado en el banco. Las actividades laborales y los negocios dan ingresos mucho más predecibles que la especulación.
- Comparte tu dirección sin problema: sirve para recibir, nunca para que te saquen saldo.
