# Santa Catalina Island

## Introducción

Santa Catalina Island es una isla al sur de Los Santos inspirada en la Santa Catalina real de California. Está llena de lujos: mansiones, un aeropuerto exclusivo, un sector de yates, clubes nocturnos y sistemas de cuevas con secretos por descubrir. Es un lugar para el rol de alto nivel, para montar un negocio o simplemente para explorar.

La isla funciona como una extensión del estado con sus propias reglas. La forma más sencilla de llegar es el **ferry**, que sale desde un muelle de Los Santos y tiene un segundo muelle en la isla. Las propiedades de la isla no pagan impuestos ni cuentas de servicios, los surtidores nunca se quedan sin combustible y hay dos logros de exploración esperándote.

### Comandos

- `/ferry` — viaja en el ferry entre Los Santos y la isla. Solo funciona junto al muelle.
- `/reaparecer` — si mueres en la isla, reapareces en ella sin pasar por el menú de reaparición.
- `/venderpesca` — vende un pescado en el muelle de la isla. Si no estás junto al muelle, te marca el punto en el mapa.
- `/cimacatalina` — reclama el logro de la cima de la isla. Solo en la cima.
- `/cuevadeloro` — reclama el logro de la cueva del oro. Solo en la cueva.

## El ferry

El ferry une dos muelles: el de **Santa María, en Los Santos**, y el de **Santa Catalina Island**. En cada muelle hay un icono que indica el destino y el precio del pasaje. Para viajar colócate junto al icono del muelle (a 3 metros o menos) y escribe `/ferry`: el viaje es instantáneo y llegas al muelle contrario.

| Concepto | Valor |
|---|---|
| Pasaje | **$25.000** por viaje, descontados de tu **cuenta bancaria** (no de tu dinero en mano) |
| Tiempo de espera tras bajar | **15 segundos** antes de poder volver a subir |
| Inmovilización al llegar | **5 segundos** |

Para subir al ferry debes cumplir todo lo siguiente:

- Estar **a pie**: no puedes subir desde un vehículo.
- Estar **vivo**.
- No estar esposado, tazeado ni placado.
- Tener al menos **$25.000** en tu cuenta bancaria.
- Haber esperado los 15 segundos desde la última vez que bajaste del ferry.

El ferry solo transporta personas, no vehículos.

## Reaparecer en la isla

Si mueres en la isla y usas `/reaparecer` cuando termina el contador de espera, **no aparece el menú de lugares** como en el resto del estado: reapareces directamente en la isla, en su punto de reaparición. Solo cambia el lugar; el resto del proceso es el mismo que en cualquier otro lugar.

El costo es el mismo de los servicios de urgencias del hospital:

| Situación | Costo |
|---|---|
| Sin casa | $5.000 |
| Con casa | $2.500, o $5.000 si hay dos o más médicos residentes en servicio |

Si trabajas para una facción o estás en servicio en un negocio, el seguro médico lo cubre quien corresponda, igual que en el hospital. Consulta la guía del [sistema médico y hospital](sistema-medico-y-hospital.md) para más detalles.

## Propiedades de la isla

Las casas y negocios de la isla tienen ventajas pensadas para que mantenerlos sea mucho más sencillo:

- **Sin impuesto de propiedad.** Las casas de la isla no cuentan en el impuesto de propiedad del payday.
- **Sin impuesto de negocios.** Los negocios de la isla no pagan el cargo que se descuenta a los negocios cuyo dueño no está conectado.
- **Sin cuentas de luz y agua.** No acumulan cuentas de servicios y no hay nada que pagar por ellas.
- **Sin liberación por inactividad.** Si dejas de conectarte, tu propiedad de la isla no se libera ni sale a subasta por inactividad.

Hay una excepción: el **impuesto corporativo** que se cobra al retirar dinero de la caja de un negocio se sigue aplicando también en la isla.

Para el resto de las reglas de propiedades, negocios y muebles consulta las guías de [propiedades](sistema-de-propiedades.md) y [impuestos](sistema-de-impuestos.md).

## Combustible

Los surtidores de la isla **nunca se quedan sin combustible**: siempre aparecen llenos y no se vacían por mucho que cargue la gente. Los precios por litro y la forma de repostar son los de cualquier otra gasolinera; consulta la guía de [combustible](sistema-de-combustible.md).

## Camioneros

La mercancía de los negocios de la isla se maneja a través del ferry:

- Los pedidos de un negocio de la isla se **recogen y se entregan en el muelle del ferry de Los Santos**, no en la propia isla. Debes estar a **5 metros o menos** del muelle para completar el paso.
- El checkpoint del trabajo te marca el muelle del ferry y el nombre del destino aparece como "el ferry de Los Santos".
- La **paga se calcula hasta ese punto**: la distancia que cuenta es la que hay hasta el muelle de Los Santos, no hasta la isla.

El resto del trabajo es igual al de cualquier otro encargo. Consulta la guía del [camionero](sistema-de-camionero.md).

## Pesca en la isla

La costa de la isla es un buen lugar para la pesca deportiva:

- Hay **18 zonas de pesca deportiva** repartidas a lo largo de toda la costa, incluida la zona del muelle. Se usan igual que las del resto del estado: con una caña de pescar en la mano derecha y `/pescar`.
- Estas zonas **no aparecen en `/radarpesca`**: debes ubicarlas recorriendo la costa.
- La isla tiene su propio **punto de venta, el Catalina Island Pier**. Si usas `/venderpesca` estando en la isla y lejos del muelle, el comando te marca ese punto en el mapa. El pescado se paga igual que en el resto de puntos de venta.

Toda la mecánica de capturas, especies y precios está en la guía de [pesca](sistema-de-pesca.md).

## Basureros

La isla queda **fuera del trabajo de basurero**:

- Los contenedores y las bolsas de basura de la isla **no cuentan para `/recolectar`**.
- Las bolsas de basura que queden tiradas en la isla, incluso dentro de sus propiedades, **se limpian en cada reinicio del servidor**.

Consulta las guías de [basura](sistema-de-basura.md) y [basureros](sistema-de-basureros.md).

## Logros de exploración

La isla esconde dos logros de exploración. Cada uno tiene un icono en el lugar que indica el comando que debes escribir. Solo puedes reclamar cada logro **una vez por cuenta**, y debes estar a **3 metros o menos** del icono y fuera de cualquier interior.

| Logro | Dónde | Comando | Recompensa |
|---|---|---|---|
| **El techo de la isla** | En la cima de la isla | `/cimacatalina` | **2 monedas** + 50 [Burger Points](sistema-de-burger-points.md) |
| **Fiebre del oro** | En la cueva del oro, escondida en la isla | `/cuevadeloro` | **5 monedas** + 50 [Burger Points](sistema-de-burger-points.md) |

## Consejos

- Lleva dinero suficiente en el **banco** antes de ir al muelle: el pasaje de $25.000 se cobra de tu cuenta, no de tu bolsillo, y necesitas otro pasaje para volver.
- Si mueres en la isla, ten presente que reapareces en ella y que el costo es el mismo que en el hospital.
- Si eres camionero, recuerda que los encargos de la isla se recogen y se entregan en el muelle del ferry de Los Santos.
- Para encontrar las zonas de pesca de la costa, recorre la orilla: no se muestran en el radar.
- Cada logro de exploración se reclama una sola vez por cuenta: no hace falta repetirlo con otros personajes.
