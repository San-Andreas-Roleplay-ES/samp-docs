# Sistema de desguazadero

## Introducción

Un desguazadero es el lugar donde un vehículo robado termina convertido en efectivo. Hay **dos**: uno en **Blueberry** (Red County) y otro en **Whetstone**, cerca de Angel Pine. En cada uno hay un punto de entrega señalizado con el cartel **[Desguazadero]**, y junto a él una **pizarra WANTED** con los modelos que el desguazadero está buscando ese día.

Si eres delincuente, llegas conduciendo un vehículo ajeno hasta el punto de entrega y usas `/desguazar`, el vehículo se desmonta a la vista de todos y recibes dinero en efectivo. Cuanto más intacto esté el vehículo y más pedido sea su modelo, más pagan.

El desguazadero tiene además un uso para cualquier jugador, delincuente o no: **destruir para siempre tus propios vehículos que nunca registraste**.

### Comandos

- `/desguazar` — entrega el vehículo que conduces en el punto de entrega. Si es un vehículo tuyo sin registrar, te ofrece destruirlo.

## Entregar un vehículo ajeno

### Requisitos

| Requisito | Detalle |
|-----------|---------|
| Ser delincuente | Quien no lo es no puede usar el desguazadero con vehículos ajenos. Revisa el [sistema de delincuente](sistema-de-delincuente.md) |
| Horas de juego | Al menos **20 horas** |
| Policías | Al menos **2 policías de servicio** conectados |
| Sin otro delito en curso | No puedes estar cometiendo otro delito al mismo tiempo |
| Ubicación | Conduciendo el vehículo (como conductor) dentro de **5 metros** del punto de entrega, en el exterior |
| Enfriamiento | **30 minutos** entre entregas. Sigue corriendo aunque salgas del juego o uses `/logout` |

### Qué vehículos se aceptan

Solo se aceptan **vehículos de otros jugadores**. Quedan fuera:

- Tus vehículos, los de tu cónyuge, los de **cualquier otro personaje de tu cuenta** y aquellos de los que tengas llaves.
- Motos y bicicletas.
- Vehículos de empresas y de facciones legales. Los de facciones ilegales sí se aceptan.
- Vehículos del servidor, como los de renta, los buses de la ciudad y los trenes.

Un vehículo que ya fue entregado y sigue destruido (ver más abajo) no se puede entregar de nuevo.

### Pizarra WANTED

Junto a cada desguazadero hay una pizarra con **10 modelos buscados**, en dos columnas de 5. Cada desguazadero tiene su propia lista y no repite modelos con el otro. La lista se renueva **todos los días a las 21:00**.

Los modelos son autos civiles de hasta **$1.000.000**: sedanes, deportivos, convertibles, station wagons, lowriders, todoterrenos, industriales y vehículos únicos.

### Cuánto pagan

| Vehículo entregado | Pago |
|--------------------|------|
| Modelo que está en la pizarra de ese desguazadero | Hasta el **25 %** del precio del modelo, según su estado |
| Modelo que no está en la pizarra | Solo el **1 %** del precio, y únicamente si el vehículo ya está **completamente desarmado** (sin ninguna autoparte) |

El estado de un vehículo de la pizarra pesa **mitad por mitad**: **50 %** depende de la vida del vehículo y **50 %** de las autopartes que conserve. Por ejemplo, un auto de $100.000 en perfecto estado paga $25.000; el mismo auto con la mitad de la vida y todas sus piezas paga $18.750.

Un modelo fuera de la pizarra y sin desarmar por completo no se acepta. Si necesitas ver qué piezas le quedan, usa `/autopartes`. Para desarmar un vehículo, consulta el [sistema de vehículos](sistema-de-vehiculos.md).

El pago se entrega **en efectivo** y, además:

- Sumas **+1 de habilidad de robo a vehículos**.
- Tus compañeros de facción que estén vivos a menos de **25 metros** reciben el mismo punto. Revisa el [sistema de habilidades](sistema-de-habilidades.md) y el [sistema de delincuente](sistema-de-delincuente.md).

### Qué pasa con el vehículo

Al confirmarse la entrega, el vehículo se bloquea, **a la vista de todos** se le arrancan las autopartes, se le pinchan las ruedas y a los **5 segundos** desaparece. Quien vaya dentro es sacado.

Para su dueño, el vehículo queda **destruido durante 12 horas**: aparece como **(destruido)** en `/llaves` y no se puede activar.

Pasado ese plazo, el vehículo reaparece **sin costo** en la salida del **Los Santos Auto Impound**, pero sin autopartes, con el motor dañado y las ruedas pinchadas, así que su dueño tendrá que llevarlo a un mecánico. El maletero, la guantera y la patente se conservan.

## Destruir tus propios vehículos sin registrar

Si conduces **tu propio vehículo** hasta el punto de entrega y ese vehículo **nunca fue registrado** en el DMV, `/desguazar` te permite destruirlo. No necesitas ser delincuente, tener horas de juego mínimas ni que haya policías conectados, y no se aplica el enfriamiento.

- Se te pide confirmación antes de destruirlo.
- El vehículo se **borra para siempre**, junto con todo lo que haya en el **maletero** y la **guantera**.
- **No se paga nada** y no hay forma de deshacerlo.
- Las llaves que otros jugadores tuvieran de ese vehículo dejan de existir.
- Si llevas una moto atada al vehículo, primero debes bajarla con `/desatar`.

Esto solo vale para vehículos sin registrar. No sirve para vehículos ya registrados, de facciones, de empresas ni para los modelos de bajo valor que no necesitan registro, como las bicicletas.

## Consejos

- Antes de robar, revisa la pizarra de los dos desguazaderos: un modelo de la lista paga hasta 25 veces más que uno que no está.
- Cuida la vida del vehículo y no le quites piezas si va a la pizarra: el pago depende de ellas. Si no está en la lista, desármalo por completo para cobrar el 1 %.
- Planifica la ruta: tienes que **llegar conduciendo** y con al menos 2 policías de servicio conectados.
- Cada entrega deja un enfriamiento de 30 minutos, así que no puedes encadenar entregas.
- Si tu vehículo sin registrar ya no te sirve, destruirlo en el desguazadero es la forma de deshacerte de él, pero recuerda que pierdes todo lo que haya dentro.
