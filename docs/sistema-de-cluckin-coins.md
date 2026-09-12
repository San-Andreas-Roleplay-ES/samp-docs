# Sistema de Cluckin' Coins

## Introducción
El **CluckinCoin** es la criptomoneda del servidor: un activo digital cuyo precio sube y baja solo, sin que nadie pueda controlarlo. No se usa para pagar nada dentro del juego, no compra objetos ni propiedades y no tiene ninguna relación con las monedas de la [tienda premium](tienda-premium.md). Su único propósito es la **especulación**: compras barato, esperas a que el mercado se mueva y vendes más caro. O pierdes dinero, que es lo que suele pasar.

Todo se maneja desde la aplicación **Trading** de tu teléfono. Ahí ves el gráfico con la evolución del precio, el valor actual, tu saldo, y tienes tres botones: **Comprar**, **Vender** y **Transferir**. El dinero que entra y sale de estas operaciones siempre pasa por tu **cuenta bancaria**, nunca por el efectivo que llevas encima.

Lo más importante de entender antes de empezar: la billetera es **por cuenta, no por personaje**. Todos tus personajes comparten la misma dirección y el mismo saldo de CluckinCoins, así que puedes usarla para mover valor entre ellos. El dinero en dólares, en cambio, sigue siendo de cada personaje: si compras monedas con un personaje y las vendes con otro, el dinero acaba en el banco del segundo.

Es un sistema de riesgo real. El precio ha llegado a valer menos de la mitad de su máximo histórico en cuestión de meses, y no existe ningún mecanismo que garantice que recuperarás lo invertido.

### Comandos
- `/billetera` (o `/wallet`) — muestra tu dirección de CluckinCoin y tu saldo actual. Si aún no tienes billetera, la crea en el momento.
- `/telefono` (o `/tel`) — saca el teléfono del inventario para poder abrir la aplicación de Trading.
- `/tc` (o `/pc`) — vuelve a activar el cursor del teléfono si lo desactivaste con ESC.
- `/sim` — asigna un número a tu teléfono, requisito para usar la aplicación.

## Requisitos
Para cualquier operación con CluckinCoin necesitas, sin excepción:

- Un **teléfono móvil en la mano derecha**. Si lo tienes guardado, `/telefono` lo saca del inventario.
- Que ese teléfono tenga un **número asignado**. Un móvil sin número no abre la aplicación; asígnale uno con `/sim`.
- Estar **vivo**. La interfaz del teléfono no responde si tu personaje no está en pie.
- Para **comprar**, dinero en el **banco**. El efectivo que llevas encima no sirve.

## Crear tu billetera
No hay trámite ni papeleo. La primera vez que escribes `/billetera` (o abres la aplicación de Trading), el sistema genera automáticamente tu dirección y te la muestra por chat junto a un saldo de **0.0 CluckinCoins**.

La dirección es una cadena de **16 caracteres** que siempre empieza por `0x`, mezclando números y letras minúsculas, del estilo `0x1946u517rfw2z`. Es **única e irrepetible**, y puedes compartirla sin miedo: sirve para que otros jugadores te envíen monedas, igual que un número de cuenta. Nadie puede sacarte saldo por conocer tu dirección.

Recuerda que esa dirección pertenece a tu **cuenta**: si creas un personaje nuevo y escribes `/billetera`, verás exactamente la misma dirección y el mismo saldo.

## Abrir la aplicación de Trading
1. Saca el teléfono con `/telefono`.
2. En la pantalla de bloqueo, haz clic para entrar al menú principal.
3. Pulsa el icono de **CluckinCoin** entre las aplicaciones.

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
| Máximo histórico | **$4,900** por moneda |
| Mínimo histórico | **$1,520** por moneda |
| Rango habitual | entre **$2,000** y **$3,000** |

Dicho de otro modo: quien compró en el pico y vendió en el suelo perdió más del **65%** de su inversión. Quien hizo lo contrario, casi triplicó lo suyo. El mercado ha pasado temporadas enteras de varios meses cayendo sin recuperarse.

## Comprar CluckinCoins
Pulsa **Comprar** en la aplicación. El diálogo te muestra el precio actual, cuánto hace que se actualizó, tu **dinero disponible en el banco** y la comisión. Escribe la cantidad de monedas que quieres (se admiten decimales, por ejemplo `1.5`) y confirma.

| Parámetro | Valor |
|---|---|
| Cantidad mínima por operación | **1 moneda** |
| Cantidad máxima por operación | **1,000 monedas** |
| Comisión de compra | **0.1%** sobre el importe |
| Gasto máximo por operación | **$10,000,000** |
| De dónde sale el dinero | **cuenta bancaria** |

El coste total es el precio actual multiplicado por la cantidad, **más un 0.1% de comisión**. Por ejemplo, con la moneda a $2,500, comprar 10 CluckinCoins cuesta $25,000 más $25 de comisión: **$25,025** descontados de tu banco. Si no tienes ese saldo, la operación se cancela y el juego te avisa de cuánto necesitas.

Las monedas aparecen en tu billetera de inmediato. No hay tiempo de espera ni confirmaciones pendientes.

## Vender CluckinCoins
Pulsa **Vender**. El diálogo te muestra el precio de venta, la última actualización, cuántos CluckinCoins tienes disponibles y la comisión. Escribe la cantidad a vender y confirma.

| Parámetro | Valor |
|---|---|
| Cantidad mínima por operación | **1 moneda** |
| Cantidad máxima por operación | **100 monedas** |
| Comisión de venta | **0.1%** sobre el importe |
| Diferencial frente al precio de compra | **$10 menos** por moneda |
| Ingreso máximo por operación | **$1,000,000** |
| A dónde va el dinero | **cuenta bancaria** |

Hay dos detalles que te restan dinero y conviene tener claros:

1. **El precio de venta es $10 inferior al de compra.** Es el diferencial de la casa de cambio. Si el precio mostrado en el gráfico es $2,500, tú vendes a $2,490.
2. **Se descuenta un 0.1% de comisión** sobre el importe resultante.

Continuando el ejemplo: vender 10 CluckinCoins con la moneda a $2,500 te da $24,900 menos $25 de comisión, es decir **$24,875** ingresados en tu banco. Junto con lo pagado al comprar, la ida y vuelta te ha costado unos **$150** aunque el precio no se haya movido ni un céntimo. Para una operación pequeña, el precio tiene que subir alrededor de un **0.6%** solo para que salgas empatado.

El límite de venta es **diez veces más estricto que el de compra**: puedes comprar 1,000 monedas de golpe, pero deshacerte de ellas te costará como mínimo diez operaciones. Tenlo en cuenta si acumulas una posición grande y quieres salir rápido en plena caída.

## Transferir a otro jugador
Pulsa **Transferir** para enviar monedas a cualquier otra billetera del servidor. El proceso tiene dos pasos:

1. Escribe la **dirección de destino** (entre 15 y 16 caracteres, la que te haya pasado el otro jugador). El sistema comprueba que exista; si no la encuentra, cancela la operación.
2. Escribe la **cantidad** a enviar y confirma.

| Parámetro | Valor |
|---|---|
| Cantidad mínima por transferencia | **1 moneda** |
| Cantidad máxima por transferencia | **100 monedas** |
| Comisión de transferencia | **0%** (gratis) |
| Saldo mínimo para poder transferir | **más de 1 moneda** |

Las transferencias son **gratuitas e instantáneas**, y son la única forma de mover CluckinCoins entre jugadores. Como no cuestan comisión, también son la vía habitual para repartir monedas dentro de un grupo o saldar un acuerdo entre personajes sin pasar por el banco.

**Aviso importante:** una transferencia es **irreversible**. Si escribes mal la dirección y esa dirección resulta existir, las monedas se van a un desconocido y no hay manera de recuperarlas. Copia siempre la dirección con cuidado y, si es una cantidad grande, prueba primero enviando una sola moneda.

## Riesgos
- **El precio puede desplomarse.** No es un depósito ni un ahorro garantizado: ha caído más de un 60% desde máximos en el pasado, y puede volver a hacerlo. Nunca inviertas dinero que necesites para el alquiler, el seguro médico o el combustible.
- **Los costes de entrada y salida son fijos.** Entre la comisión doble y el diferencial de $10, cada ida y vuelta te resta dinero aunque aciertes la dirección del mercado.
- **No puedes salir de golpe.** El tope de 100 monedas por venta obliga a fragmentar las posiciones grandes, y el precio puede seguir cayendo mientras vendes.
- **Las transferencias no se deshacen.** Nadie revierte una transferencia enviada a la dirección equivocada.
- **Los tratos entre jugadores son cosa tuya.** Si vendes monedas a otro jugador a cambio de dinero en mano y él no paga, es un asunto entre personajes; el sistema solo registra el movimiento de monedas.

## Consejos
- Antes de comprar, mira el gráfico y fíjate en la tendencia de los últimos días, no solo en el porcentaje de la última hora.
- Un porcentaje verde muy grande en una sola actualización no significa que vaya a seguir subiendo: la variación de cada hora es independiente de la anterior.
- Como la billetera es de cuenta y las transferencias son gratis, es una forma cómoda de guardar valor si vas a jubilar un personaje o repartir fondos entre varios.
- Si vas a acumular una cantidad seria, hazlo con dinero que ya tengas parado en el banco. Las actividades laborales y los negocios dan ingresos mucho más predecibles que la especulación.
- Comparte tu dirección sin problema: sirve para recibir, nunca para que te saquen saldo.
