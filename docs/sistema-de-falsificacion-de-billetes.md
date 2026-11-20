# Sistema de falsificación de billetes

## Introducción

La **falsificación de billetes** te permite montar una **imprenta clandestina** dentro de una propiedad y fabricar fajos de billetes falsos de $100. Se arma con muebles: una **impresora**, una **cortadora** y una **mesa de trabajo**, que se compran en el [mercado negro](sistema-de-mercado-negro.md) y se instalan como cualquier otro mueble. Hay **tres niveles** de imprenta, cada uno más rápido, más rentable y de mejor calidad que el anterior.

Cada tanda es una pequeña misión: pones el papel en la impresora, llevas las hojas a la cortadora, cortas los billetes y los armas en la mesa. En los niveles **casero** y **taller** el corte es un minijuego de precisión; el nivel **industrial** trabaja solo. Cada máquina exige una **habilidad de falsificación** propia, que se gana fabricando.

Los billetes falsos **no se pueden vender a ningún comprador**. Sirven para el rol y para **pagar comida o bebida barata** en las tiendas, con el riesgo de que la cajera se dé cuenta y llame a la policía.

### Comandos

- `/falsificar` — empieza una tanda en la imprenta que tienes cerca. Si ya estás en una, te recuerda el paso que sigue.
- `/falsificar dejar` — abandona la tanda en curso.
- `/mercadonegro` — en el punto del mercado negro, la opción **Comprar equipo de imprenta** vende las máquinas y el papel.
- `/desempaquetarmueble` — instala una máquina comprada dentro de una propiedad.
- `/habilidades` — muestra tu nivel de **habilidad de falsificación**.

## Requisitos generales

| Requisito | Detalle |
| --------- | ------- |
| Ser delincuente | Obligatorio. Los policías no pueden comprar equipo |
| Horas jugadas | **50** para acceder al mercado negro |
| Habilidad de delincuente | **50** para comprar el equipo y para usar `/falsificar` |
| Habilidad de falsificación | La que pida cada máquina (ver tabla) |
| Lugar | Dentro de una propiedad que tenga las tres máquinas |
| Estado | A pie, vivo, sin esposas y sin otra actividad abierta (teléfono, inventario, minijuegos) |

Cualquier persona puede usar la imprenta de una propiedad si tiene las habilidades necesarias, sea o no el dueño. Para **instalar** las máquinas sí necesitas permiso para colocar muebles en la propiedad. Consulta el [sistema de muebles](sistema-de-muebles.md).

## Las máquinas

Cada imprenta necesita una pieza de cada tipo. Las máquinas se compran **en efectivo** en el mercado negro, con la **mano derecha libre**, y se entregan **empaquetadas**: llévalas a una propiedad y usa `/desempaquetarmueble` para armarlas. Las máquinas que aún no puedes usar aparecen en gris en la lista, con la habilidad que te falta.

| Nivel | Tipo | Máquina | Habilidad de falsificación | Precio |
| ----- | ---- | ------- | -------------------------- | ------ |
| 1. Casero | Mesa | Mesa plegable | 0 | $500 |
| 1. Casero | Cortadora | Cizalla | 0 | $750 |
| 1. Casero | Impresora | Impresora doméstica | 0 | $1.000 |
| 2. Taller | Mesa | Mesa UV | 20 | $2.500 |
| 2. Taller | Cortadora | Guillotina manual | 25 | $4.000 |
| 2. Taller | Impresora | Impresora láser | 30 | $6.000 |
| 3. Industrial | Mesa | Mesa de acero | 50 | $8.000 |
| 3. Industrial | Cortadora | Guillotina hidráulica | 60 | $12.000 |
| 3. Industrial | Impresora | Offset | 70 | $20.000 |

Un set completo cuesta **$2.250** (casero), **$12.500** (taller) o **$40.000** (industrial).

### Cómo se arma la imprenta

- Las tres máquinas deben estar **a 8 metros o menos** entre sí, y tú dentro de ese alcance, en el interior de una propiedad. Los muebles de exterior no cuentan.
- El **nivel de la imprenta es el de su pieza más baja**: una guillotina manual con el resto de piezas caseras sigue funcionando como imprenta casera.
- Si hay varias combinaciones posibles, se usa la de mayor nivel que puedas manejar. Si una máquina está en uso por otra persona, tendrás que esperar.
- Si te falta una pieza, o no tienes la habilidad para manejar la que hay, el juego te lo dice al escribir `/falsificar`.

## El papel

El papel se compra en el mercado negro, en efectivo:

| Producto | Hojas | Precio |
| -------- | ----- | ------ |
| Resma de papel | 50 | $1.500 |
| Caja de resmas | 250 | $6.000 |

Las imprentas casera y de taller consumen hojas de la **resma**, que debes llevar **en la mano derecha**. La offset industrial consume una **caja de resmas** entera por tirada.

## Nivel 1: imprenta casera

Necesitas una resma con al menos **5 hojas** en la mano derecha. La tanda consiste en:

1. Llevar la resma a la impresora (la marca en el mapa te guía). La impresora tarda **6 segundos** en sacar las hojas.
2. Llevar las hojas a la cizalla y cortarlas. Tienes **45 segundos** para cortar **5 hojas**, y cada hoja da **3 billetes** de $100 si sale sana. Una tanda perfecta rinde **$1.500**.
3. Llevar los billetes a la mesa plegable, donde los fajas con una liga durante **3 segundos**.

### Minijuego de corte

Una cuchilla se desliza de lado a lado sobre la hoja. Pulsa la **tecla de sprint** cuando esté justo sobre la línea que separa los billetes. Cada hoja lleva **4 cortes**. Con **la tecla de entrar a vehículo** abandonas la tanda.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/falsificacion-minijuego-de-corte.gif" alt="Minijuego de corte de una hoja de billetes falsos" width="1680" height="1050">

| Resultado del corte | Efecto |
| ------------------- | ------ |
| Corte limpio | Sin consecuencias |
| Corte chueco | La calidad final de la tanda baja un escalón |
| Corte fallido | Cortas un billete por la mitad y pierdes ese billete |

Si se acaba el tiempo, solo conservas las hojas que alcanzaste a terminar. Si no te queda ningún billete sano, la tanda se pierde.

## Nivel 2: imprenta de taller

Necesitas una resma con al menos **10 hojas** en la mano derecha. El proceso es el mismo, pero más rápido y más rentable:

1. La impresora láser saca los pliegos en **3 segundos**.
2. En la guillotina manual cortas **toda la pila a la vez**: son **4 cortes** y tienes **15 segundos**. Cada pliego rinde **8 billetes**, así que una tanda perfecta da **80 billetes: $8.000**.
3. Pasas los billetes por la luz ultravioleta de la mesa UV durante **3 segundos**.

En este nivel un corte fallido **arruina una fila entera de 20 billetes ($2.000)**. Si se acaba el tiempo, los cortes que te faltaban cuentan como filas arruinadas. Un corte chueco baja la calidad un escalón, igual que en el nivel 1.

## Nivel 3: imprenta industrial

La offset trabaja sola, sin minijuego:

1. Con una **caja de resmas** en la mano derecha, usa `/falsificar` junto a la imprenta y lleva la caja a la offset.
2. La offset arranca y te cobra **$1.800 de electricidad**, que salen de tu efectivo o, si no te alcanza, de tu banco. La caja se consume.
3. La tirada dura **10 minutos**. Puedes irte: la offset sigue imprimiendo aunque salgas del juego o se reinicie el servidor.
4. Pasado ese tiempo, vuelve a usar `/falsificar` y retira de la **mesa de acero** un **ladrillo de $100.000** en billetes falsos.

Si necesitas esperar, `/falsificar` te dice cuántos minutos faltan. Si la offset se quita de la propiedad mientras imprime, **la tirada se pierde**. Para retirar el ladrillo necesitas espacio en tus manos o bolsillos; si no tienes, la tirada queda esperándote.

## Tiempos y abandono

- Cada traslado entre máquinas debe hacerse en **2 minutos**. Si tardas más, la tanda se echa a perder.
- La tanda también se interrumpe si te hieren, sales del juego, te alejas de la imprenta, abandonas la propiedad, o abres el teléfono o el inventario.
- El papel que ya pusiste en la impresora **no se recupera** si abandonas.

## Calidad de los billetes

La calidad de un fajo es una de seis categorías, y es lo que decide si la cajera lo detecta. Depende del **nivel de tu imprenta** y de tu **habilidad de falsificación**:

| Nivel | Habilidad de falsificación | Calidad base |
| ----- | -------------------------- | ------------ |
| 1 | 0 a 9 | Mala |
| 1 | 10 a 19 | Regular |
| 1 | 20 o más | Buena |
| 2 | Hasta 44 | Buena |
| 2 | 45 a 59 | Muy buena |
| 2 | 60 o más | Excelente |
| 3 | Hasta 84 | Excelente |
| 3 | 85 o más | Perfecta |

Un **corte chueco** baja la calidad un escalón, pero nunca por debajo del mínimo de ese nivel: **mala** en el casero, **buena** en el de taller y **excelente** en el industrial.

Al terminar la tanda, el mensaje en pantalla te indica la calidad del fajo. En el inventario el fajo se ve como un **fajo de billetes** común, con un tono apenas distinto al del dinero real. Un fajo de **$100.000** es el máximo por objeto; los fajos de la **misma calidad** se juntan en tu mano derecha automáticamente.

## Habilidad de falsificación

La habilidad de falsificación va de **0 a 100** y se consulta en `/habilidades`. No se puede subir con puntos de experiencia: solo se gana fabricando.

- Ganas **1 punto** por cada tanda **limpia** de los niveles casero y taller: sin billetes arruinados y sin que se acabe el tiempo.
- El máximo es de **5 puntos por día**.
- La imprenta industrial (la offset) no da puntos.
- Cuando llegas al nivel de una máquina nueva, el juego te avisa de que ya sabes usarla.
- Con más habilidad, el margen de error del corte se ensancha hasta un **50% más**, y la calidad base mejora.

## Gastar billetes falsos

Los billetes falsos solo se pueden usar así:

- Tener el fajo **en la mano derecha**.
- Comprar **comida o bebida** de **menos de $200** por unidad.
- En una tienda donde te atienda el **empleado de la tienda**, no otro jugador.
- El fajo debe alcanzar para pagar. No se aceptan para pescado ni cosechas.

Funciona como una compra normal con `/comprar` en una tienda de comida o de bebida, con el fajo en la mano.

### Riesgo de que lo noten

Al pagar, la cajera revisa el billete. La probabilidad de que lo note depende de la calidad:

| Calidad | Mala | Regular | Buena | Muy buena | Excelente | Perfecta |
| ------- | ---- | ------- | ----- | --------- | --------- | -------- |
| Probabilidad | 50% | 41% | 32% | 23% | 14% | 5% |

La cajera **desconfía más si repites en el mismo negocio**: cada pago anterior hecho en esa tienda en la **última hora** suma **15 puntos** a la probabilidad, hasta un máximo de 100%. Si pasa una hora sin pagar ahí, la desconfianza vuelve a cero.

| Pago en el mismo negocio | Probabilidad con calidad perfecta | Probabilidad con calidad mala |
| ------------------------ | ---------------------------------- | ------------------------------ |
| Primero | 5% | 50% |
| Segundo | 20% | 65% |
| Tercero | 35% | 80% |

**Si la cajera lo nota:** se queda con los billetes del pago, **no te entrega el producto** y avisa por radio a la policía diciendo qué tienda reporta que estás usando billetes falsos y quién eres.

**Si no lo nota:** recibes el producto y el fajo baja el precio pagado.

### Productos sin comprobante

La comida y la bebida que pagaste con billetes falsos queda **sin comprobante de compra**. No se puede reponer en el stock de un negocio. Lo mismo ocurre con los platos que prepares con esos ingredientes. Consulta el [sistema de cocina y bar](sistema-de-cocina-y-bar.md).

## Riesgos

Cuando una cajera detecta un billete falso, la policía recibe por radio un aviso con el nombre de la tienda y el tuyo, así que pagar repetidamente en el mismo lugar es arriesgado. Consulta el [sistema policial](sistema-policial.md).

## Consejos

- **Empieza por el set casero.** Son $2.250 en total y no necesita habilidad previa. Cada tanda limpia te acerca a la guillotina y la impresora del taller.
- **Corta con calma.** Un corte chueco no te quita el billete pero baja la calidad, y la calidad es lo que decide si pasas la caja.
- **Reparte los pagos.** Cada pago repetido en el mismo negocio sube un 15% la probabilidad de que lo detecten. Cambia de tienda.
- **Paga poco a la vez.** Solo se aceptan compras de menos de $200 por unidad, así que no sirve para productos caros.
- **Aprovecha la offset.** Pagas $1.800 de luz y $6.000 de papel por un ladrillo de $100.000; mientras imprime, puedes dedicarte a otra cosa. Deja espacio libre en tus manos antes de retirar el ladrillo.
- **No es dinero real.** No lo puedes vender a nadie: sirve para el rol y para compras pequeñas de comida y bebida.
