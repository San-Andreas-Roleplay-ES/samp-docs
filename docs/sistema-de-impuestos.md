# Sistema de impuestos

## Introducción

En San Andreas todo patrimonio tributa. El Gobierno de Los Santos cobra dos impuestos a los ciudadanos: uno sobre las **casas que has comprado** y otro sobre los **vehículos motorizados** que tienes a tu nombre. Ambos se descuentan de tu **cuenta bancaria**, nunca del dinero que llevas encima.

La clave del sistema es que los impuestos **no dependen de cuántas horas juegues**: dependen únicamente de lo que posees. Se cobran **una sola vez al día**, en el primer paycheck que recibas cada jornada. Da igual que conectes veinte minutos o que juegues ocho horas seguidas: pagarás exactamente lo mismo por tus bienes.

Esto hace que acumular propiedades caras y flotas de vehículos de lujo tenga un costo real y sostenido. Tener una casa modesta y un par de vehículos de uso diario, en cambio, cuesta prácticamente nada gracias a las exenciones que se explican más abajo. Las propiedades de la isla de [Santa Catalina](santa-catalina.md) están fuera de este régimen.

La misma cobranza diaria sirve para renovar las **cuotas de membresía** de los negocios que las ofrecen, como el Golf Club (ver la sección de membresías).

No confundas los impuestos con las **facturas de agua y luz** ni con la **renta**: son cobros distintos, aparecen en otro bloque del paycheck y se calculan de otra manera. Tienes el detalle más abajo, en la sección de diferencias con facturas y renta.

### Comandos

- /impuestos [$dinero] — paga voluntariamente dinero al Gobierno de Los Santos desde un cajero automático, una sucursal bancaria o tu teléfono móvil. Alias: `/donar`.
- /payday — indica cuántos minutos faltan para tu próximo paycheck. Alias: `/minpayday`.

## Cuándo se cobra

Recibes un **paycheck cada 60 minutos** de juego efectivo. El bloque de impuestos aparece únicamente en el **primer paycheck de cada día**, justo después del resumen normal del paycheck, bajo el encabezado **IMPUESTOS DIARIOS** con la fecha.

El bloque muestra, cuando corresponde:

- Impuestos a la propiedad.
- Impuestos a los vehículos motorizados.
- Cuántos vehículos quedaron exentos de pagar.
- Tu nuevo balance bancario.

Si el total a pagar sale **$0** (por ejemplo, porque todos tus bienes están exentos), no verás ningún bloque: simplemente no se te cobra nada ese día.

En ese mismo primer paycheck del día también se renuevan, si corresponde, tus membresías con cobro automático. Esos cobros no aparecen dentro del bloque de impuestos: llegan como mensajes aparte, y se aplican aunque el total de impuestos sea $0.

El día se cuenta por la fecha real del servidor, no por horas de juego acumuladas. Una vez cobrado el impuesto del día, no se te volverá a cobrar aunque sigas recibiendo paychecks durante horas.

## Impuesto a la propiedad

Se aplica **solo a las casas compradas** que están a tu nombre (o al de tu cónyuge, si estás casado). Los negocios, almacenes, complejos e industrias no entran en este impuesto: tienen su propio régimen.

**Cómo se calcula:** cada casa comprada paga el **1% diario de su valor de tasación**. Después se resta la exención.

**Exención:** tu casa **de mayor valor dentro de $200.000** queda completamente exenta. Si tienes una sola casa y vale $200.000 o menos, no pagas nada por ella. Si tienes varias, el sistema elige la más cara que no supere ese tope y perdona íntegramente su impuesto; el resto tributa normalmente.

| Valor de la casa | Impuesto diario |
|---|---|
| Hasta $200.000 (la más cara dentro del tope) | **$0 (exenta)** |
| $250.000 | $2.500 |
| $400.000 | $4.000 |
| $1.000.000 | $10.000 |
| $2.500.000 | $25.000 |
| $5.000.000 | $50.000 |

**Ejemplo:** tienes una casa de $150.000 y otra de $400.000. La de $150.000 es la más cara dentro del tope de $200.000, así que queda exenta y no paga nada. Por la de $400.000 pagas **$4.000 al día**.

**Ejemplo con tres casas:** una de $180.000, otra de $300.000 y otra de $900.000. Se exime la de $180.000. Pagas $3.000 por la segunda y $9.000 por la tercera: **$12.000 al día** en total.

Las **casas de la isla de Santa Catalina** no pagan este impuesto: no cuentan para el total y tampoco pueden ocupar el lugar de tu exención. Consulta la guía de [Santa Catalina](santa-catalina.md).

Las **casas alquiladas al Estado** no pagan este impuesto, porque no son de tu propiedad: pagan **renta** en cada paycheck. Consulta el [sistema de propiedades](sistema-de-propiedades.md) para la diferencia entre comprar y alquilar.

## Impuesto a los vehículos motorizados

Se aplica a los **vehículos registrados a tu nombre**. No importa dónde estén guardados ni si los usas.

**Cómo se calcula:** cada vehículo que tributa paga el **0.15% diario del precio de catálogo de su modelo**. Se usa el precio de referencia del modelo, no lo que tú pagaste por él ni las mejoras que le hayas puesto.

### Quién no paga

- **Vehículos de menos de $10.000**: nunca pagan impuesto. Aquí entran bicicletas, ciclomotores y la mayoría de vehículos de entrada.
- **Tus primeros 3 vehículos de menos de $200.000**: quedan exentos, siempre que **no sean diésel**. La exención se aplica empezando por los **más baratos**, así que los vehículos caros de tu flota siempre acaban tributando.
- **Los vehículos diésel tributan siempre**, cueste lo que cueste el modelo (por encima del mínimo de $10.000).
- **Cualquier vehículo de $200.000 o más tributa siempre**, aunque no hayas agotado tus tres exenciones.

| Situación del vehículo | ¿Paga? |
|---|---|
| Precio inferior a $10.000 | No, nunca |
| Gasolina o eléctrico, menos de $200.000, dentro de tus 3 exenciones | No |
| Gasolina o eléctrico, menos de $200.000, fuera de tus 3 exenciones | Sí, 0.15% |
| Diésel de cualquier precio (desde $10.000) | Sí, 0.15% |
| Cualquier vehículo de $200.000 o más | Sí, 0.15% |

### Tabla de referencia

| Precio de catálogo | Impuesto diario si tributa |
|---|---|
| $12.838 | $19 |
| $37.571 | $56 |
| $68.880 | $103 |
| $103.320 | $155 |
| $219.162 | $329 |
| $390.547 | $586 |
| $1.174.078 | $1.761 |

**Ejemplo:** tienes cinco vehículos — una Manana ($12.838, gasolina), un Bobcat ($37.571, **diésel**), un Feltzer ($68.880, gasolina), un Freeway ($73.054, gasolina) y un Alpha ($390.547, gasolina).

- La Manana, el Feltzer y el Freeway consumen tus tres exenciones y no pagan nada.
- El Bobcat paga **$56** por ser diésel.
- El Alpha paga **$586** por superar los $200.000.
- **Total: $642 al día.**

**Consejo directo:** si vas a tener un vehículo diésel (camiones, furgonetas de trabajo, algunos todoterreno), ten en cuenta que siempre tributará. Y si tu flota es grande, la exención se asigna automáticamente a tus tres vehículos más baratos por encima de $10.000, así que sumar utilitarios económicos a la colección no te ahorra nada: cada uno nuevo empieza a pagar.

## Qué pasa si no puedes pagar

El impuesto **se cobra igualmente**, aunque no tengas saldo suficiente. Tu cuenta bancaria puede quedar en números rojos: el sistema no bloquea el cobro ni acumula una "deuda de impuestos" aparte que puedas negociar después.

Lo que sí ocurre cuando tu balance es negativo:

- En cada paycheck se te cobra un **interés de línea de crédito del 0.1%** sobre el saldo negativo. Cuanto más tiempo pases en rojo, más intereses acumulas.
- Si tu saldo llega a **-$100.000** o menos, recibes una advertencia al conectar y en cada paycheck: has excedido el límite de deuda permitido y **morir supondrá la pérdida permanente del personaje**, con todas sus propiedades, estadísticas e inventarios.

Por eso, si tu patrimonio es grande y no generas ingresos suficientes, la salida sensata es **vender bienes** antes de acumular deuda: una casa cara o un par de vehículos de lujo pueden costarte más al día de lo que ganas.

## Cómo consultar lo que pagas

El desglose completo llega en el propio chat, en el bloque **IMPUESTOS DIARIOS** del primer paycheck del día. Ahí tienes lo pagado por propiedad, lo pagado por vehículos, cuántos vehículos quedaron exentos y tu balance resultante. Conviene leerlo antes de seguir jugando: es la única fotografía clara de tu carga fiscal.

El comando `/impuestos` **no sirve para consultar**: es un pago voluntario. Con `/impuestos [$dinero]` entregas dinero de tu cuenta bancaria al Gobierno de Los Santos, por encima de lo que te toca pagar. Puedes usarlo desde un cajero automático, dentro de una sucursal bancaria o con el teléfono móvil en la mano derecha (necesita número asignado con `/sim`). El máximo por operación es de **$1.000.000** y tu cuenta no puede estar bloqueada.

Es un comando pensado para el rol: aportes ciudadanos, financiación de campañas públicas, acuerdos con el gobierno o simple regularización voluntaria. El alias `/donar` hace exactamente lo mismo.

## Diferencia con facturas y renta

En cada paycheck (es decir, cada hora) se te descuentan cobros que **no son impuestos** y que aparecen en el bloque normal del paycheck:

| Concepto | Cuándo se cobra | Cómo se calcula |
|---|---|---|
| **Factura de la luz** | Cada paycheck | **$9** por cada bloque de 5 minutos de ocupación de tu propiedad |
| **Factura del agua** | Cada paycheck | **$7** por cada bloque de 5 minutos de ocupación, más el agua que se saque para regar |
| **Renta** | Cada paycheck | **0.14%** del valor de la casa alquilada al Estado (**0.4%** si es un negocio) |
| **Interés de línea de crédito** | Cada paycheck | **0.1%** de tu saldo bancario negativo |
| **Impuesto a la propiedad** | Una vez al día | **1%** del valor de cada casa comprada |
| **Impuesto vehicular** | Una vez al día | **0.15%** del precio del modelo |

Las facturas se acumulan **solo cuando hay gente dentro**: si nadie entra a tu casa, no generas consumo y no pagas nada por agua ni luz. Los contadores se ponen a cero después de cada cobro. Esto significa que una propiedad con mucho tránsito de visitas genera facturas mucho más altas que una casa vacía, sin que el impuesto cambie ni un dólar.

**Agua para regar:** al rellenar una botella de agua o una regadera con `/llenaragua` dentro de una propiedad (consulta el [sistema de cultivos](sistema-de-cultivos.md)), se suma a la factura de agua de esa propiedad **un bloque de $7 por cada 10 unidades de agua** que cargues, redondeando hacia arriba. Por ejemplo, llenar 25 unidades suma 3 bloques, es decir, $21 a tu próxima factura de agua.

Las propiedades de la isla de [Santa Catalina](santa-catalina.md) no pagan facturas de luz ni de agua.

Los impuestos, en cambio, son fijos y ajenos a tu actividad: se calculan solo con el valor de tus bienes.

## Impuestos de empresas y negocios

Si tienes o trabajas en un negocio, existen cargas fiscales adicionales que **no se mezclan** con tus impuestos personales:

- **Impuesto corporativo sobre retiros:** cada vez que retiras dinero de la caja de un negocio con `/caja retirar`, se descuenta un **21% federal** más un **7% estatal** de lo retirado. Es decir, sacar dinero del negocio a tu cuenta personal cuesta un **28%** del monto. Depositar no tiene costo.
- **Cargas laborales por empleado:** cuando un empleado cobra su jornada, la caja del negocio paga además un **6.2% de seguridad social**, un **1.45% de seguro médico** y un **2% de otros costos laborales** sobre el sueldo de rango. Estas cargas se aplican **solo sobre el sueldo que paga el negocio**, nunca sobre el subsidio que aporta el Gobierno.
- **Impuesto comercial de inactividad:** un negocio cuyo dueño está desconectado paga **$81 por hora** de su caja al Gobierno. Mantenerte activo con tu negocio evita esta sangría. Los negocios de la isla de [Santa Catalina](santa-catalina.md) no pagan este impuesto, pero el impuesto corporativo sobre retiros sí se les cobra.

### Cuotas de membresía

Algunos negocios ofrecen membresías con cuota periódica. La del Golf Club cuesta **$100.000 cada 7 días** (consulta el [sistema de golf](sistema-de-golf.md)). Su cobro automático va ligado a la cobranza diaria:

- Se cobra del **banco**, en el primer paycheck del día, si tu membresía vence en las próximas 24 horas y tienes el cobro automático activo. Al pagar, la membresía se extiende otros 7 días y recibes un mensaje con la nueva fecha de vencimiento.
- Si no tienes el dinero en el banco y la membresía aún está vigente, no se cobra nada: recibes un aviso con la fecha de vencimiento y, si no se logra cobrar, se cancelará.
- Si la membresía ya venció (por ejemplo, porque estuviste desconectado) y sigue sin haber fondos, el cobro automático se cancela.
- Si cancelas el cobro automático sigues siendo socio hasta que venza la membresía.
- Estos cobros no son un impuesto: no aparecen en el bloque **IMPUESTOS DIARIOS** y su dinero lo recibe el negocio, no la caja del Gobierno.

### Subsidios del Gobierno

El Gobierno no solo recauda: también subsidia los salarios base de todos los trabajadores. Estos importes salen de la caja del Gobierno y se **suman** al sueldo que paga cada empresa o departamento, sin coste para el empleador:

| Beneficiario | Subsidio |
|---|---|
| Empleados de tiendas y clubes | **$1.000** por jornada |
| Empleados del resto de negocios y empresas | **$100** por jornada |
| Miembros de facciones con sueldo de rango | **$1.000** por payday |

Además, en los negocios de rol (tiendas, clubes, depósitos de vehículos, bufetes y empresas de periodismo) el Gobierno abona **$100 extra a la caja del negocio** por cada jornada completada, para compensar el gasto de tener personal en servicio. La jornada laboral es de **30 minutos** en los negocios de rol y de **60 minutos** en el resto de empresas.

Si no cobras un sueldo de facción, el propio Gobierno te paga un sueldo base en cada paycheck: **$250** mientras tengas menos de 30 horas de juego y **$150** a partir de ahí.

## A dónde va la recaudación

Casi todo lo que pagas — impuesto a la propiedad, impuesto vehicular, la parte estatal del impuesto corporativo, impuesto comercial de inactividad, rentas y pagos voluntarios con `/impuestos` — entra en la **caja del Gobierno de Los Santos**. Las cargas laborales y la parte federal del impuesto corporativo se descuentan de la caja del negocio o de tu retiro sin pasar por esa caja. De ahí salen los subsidios salariales, los sueldos de desempleados y el financiamiento de los departamentos públicos.

Es una economía cerrada: la recaudación de los ciudadanos con más patrimonio sostiene los sueldos base de todos los trabajadores del servidor. Puedes seguir la gestión administrativa de tu facción desde el [panel de control](panel-de-control.md).

## Consejos

- **Compra pensando en el costo diario.** Una casa de $5.000.000 te cuesta $50.000 al día, todos los días, juegues o no. Asegúrate de tener ingresos que lo sostengan antes de dar el salto.
- **Aprovecha la exención de vivienda.** Si solo necesitas un techo, una casa de hasta $200.000 es completamente gratuita en impuestos.
- **Cuidado con coleccionar vehículos.** Los tres primeros salen gratis, pero el cuarto y siguientes empiezan a sumar. Con veinte vehículos de precio medio la factura diaria se dispara.
- **Vende lo que no usas.** Un vehículo parado en un garaje tributa igual que uno que conduces a diario.
- **Los diésel no tienen exención.** Si compras un camión o una furgoneta de trabajo, cuenta con su impuesto desde el primer día.
- **Vigila el rojo.** Salir de números negativos cuanto antes te ahorra intereses y te aleja del límite de deuda que pone en riesgo tu personaje.
