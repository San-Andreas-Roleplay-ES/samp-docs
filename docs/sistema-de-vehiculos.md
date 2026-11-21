# Sistema de vehículos

## Introducción

Tener un vehículo en San Andreas Roleplay implica papeles, licencia y algo de trámite. Para conducir con tranquilidad necesitas una **licencia de conducir**, que se obtiene aprobando el examen de la autoescuela, y para tener un vehículo **en regla** necesitas registrarlo en el **DMV**, la oficina de vehículos del ayuntamiento de Los Santos. Un vehículo sin papeles puede ser incautado por la policía y no puede venderse, pasar por un peaje ni repintarse, y una licencia con demasiados puntos de infracción queda suspendida.

Esta guía reúne las reglas generales del vehículo: el registro y los papeles, la licencia y sus puntos, la **renta** de vehículos y bicicletas, los maleteros, el cambio de asiento, las pegatinas del taller, el ferry a la isla y lo que hace un delincuente con una rueda y un cuchillo. Las llaves, el combustible y el desguace tienen sus propias guías: [combustible](sistema-de-combustible.md) y [desguazadero](sistema-de-desguazadero.md).

### Comandos

- `/examen` — inicia el examen de conducir en la autoescuela.
- `/adquirirlicencia` — tramita otras licencias del gobierno en el ayuntamiento.
- `/registrarveh` — registra o renueva el registro de tus vehículos en el ayuntamiento.
- `/mostrarpapeles [id]` — enseña los papeles del vehículo a otra persona. Sin ID, los lees tú. Debes ir de conductor, con las llaves del vehículo.
- `/rentarveh` — renta el vehículo de renta en el que vas de conductor, o la bicicleta que tienes al lado.
- `/desrentarveh` — devuelve tu vehículo rentado.
- `/asiento` — cambia de asiento sin bajarte del vehículo.
- `/ferry` — cruza entre Los Santos y la isla de Santa Catalina.
- `/pincharrueda` (alias `/pincharllanta`) — pincha una rueda con un cuchillo. Solo delincuentes.
- `/tuning [id] [piezas | quitar]` — el mecánico ofrece el menú de tuning o retirar el tuning y los accesorios.
- `/dpl`, `/qpl` y `/levantarsuspension` — comandos de las fuerzas del orden y de la justicia para los puntos de la licencia.

## Licencia de conducir

La licencia se saca en la **autoescuela de Los Santos** con `/examen`. Debes ir al marcador, subirte como conductor al Sentinel blanco de la escuela y escribir el comando. Aprobar cuesta **$3.000**, que se cobran del efectivo al terminar con éxito, y te da 100 [Burger Points](sistema-de-burger-points.md).

| Regla del examen | Valor |
|------------------|-------|
| Duración permitida | Entre **2 y 5 minutos** de recorrido. Más rápido o más lento, repruebas. |
| Cinturón de seguridad | Obligatorio desde el sexto punto del recorrido. |
| Velocidad máxima | **70 mph** (unos 112 km/h) desde el sexto punto. |
| Daño al vehículo | Reprueba si el Sentinel pierde más de 100 puntos de vida. |
| Abandonar el vehículo | Repruebas al instante. |

Sin licencia puedes subirte a un vehículo, pero recibes un aviso: si un policía te detiene, podrías ir a la cárcel. Además, la licencia de conducir es requisito para el resto de licencias del gobierno y para registrar vehículos. Las demás licencias exigen **respeto** además de dinero. Se compran en el ayuntamiento con `/adquirirlicencia`:

| Licencia | Precio | Respeto necesario |
|----------|--------|-------------------|
| Pesca deportiva | $2.000 | 10 |
| Pesca comercial | $5.500 | 20 |
| Transportista | $1.500 | 30 |
| Transporte de cargas pesadas | $3.000 | 40 |
| RESP de seguridad privada | $6.000 | 50 |

La pesca comercial exige tener antes la deportiva. La RESP además pide un certificado médico y no tener antecedentes penales.

### Puntos de infracción

Las infracciones de tránsito suman puntos a tu licencia.

- Cada **multa de tráfico** suma **1 punto**.
- Cada **arresto con un cargo de tránsito** suma **1 punto**.
- Un agente en servicio también puede sumar de **1 a 3 puntos** por una infracción con `/dpl`, indicando el motivo, y quitar de 1 a 3 con `/qpl`, por ejemplo como premio a la buena conducta. La persona debe estar a menos de 20 metros y tener licencia de conducir, y el agente solo puede sumar puntos una vez por minuto.
- Cada punto **caduca a los 30 días**.
- Al llegar a **8 puntos vigentes**, la licencia queda **suspendida 7 días** y esos puntos se descuentan. Si un agente que no es líder intenta sumar los puntos que te llevarían a la suspensión, no se aplican: la suspensión solo la puede provocar un líder.
- Un **juez** en servicio puede levantar una suspensión con `/levantarsuspension`.

Con la licencia suspendida no puedes trabajar en los empleos que exigen conducir: el mezclador de cemento, el montacargas, el mensajero de reparto, el cortacésped, la barredora, el vendedor de helados y el vendedor de hot dogs. Al conectarte se te avisa cuánto tiempo falta para que se levante la suspensión.

## Registro de vehículos (DMV)

Todo vehículo que sea tuyo necesita estar registrado y vigente. Los vehículos de **facción** y de **empresa** no necesitan registro, y tampoco los que cuestan **menos de $10.000**, como las bicicletas: quedan registrados de forma permanente. Los vehículos que compras en el concesionario salen **sin registrar**.

Para registrar un vehículo debes ir al ayuntamiento de Los Santos, pararte en el marcador y escribir `/registrarveh`. Necesitas:

- La **licencia de conducir**.
- Una **residencia** en Los Santos: una casa propia, una casa rentada o con llaves, o una habitación rentada.
- Dinero en el **banco**: el registro cuesta **$68 más el 2% del precio del modelo**.

| Dato | Valor |
|------|-------|
| Duración del registro | **3 meses** |
| Cuándo aparece en la lista | Sin registrar, vencido, o con **15 días o menos** para vencer |
| Renovación anticipada | Se suma a la fecha de vencimiento actual: **no pierdes días** |

Al conectarte recibes un aviso si el registro de alguno de tus vehículos está por vencer o ya venció.

### Qué no puedes hacer sin papeles en regla

Un vehículo sin registro o con el registro vencido **no puede**:

- Usar el **Pay 'n' Spray**.
- Venderse al Estado con `/venderveh` ni transferirse a otro jugador con `/transferirveh`.
- Pasar por una caseta de **peaje**.
- Retirarse del depósito municipal con `/pagardeposito`.

Al conducirlo aparece un aviso de que, si un policía te detiene, el vehículo podría ser **incautado**.

`/mostrarpapeles` muestra el modelo, la matrícula y el estado del registro: vigente hasta una fecha, vencido, permanente o no requerido. Un vehículo que nunca se registró **no tiene papeles** que mostrar.

### Lo que ve la policía

El ordenador policial y el lector automático de matrículas (ALPR) muestran los vehículos con el registro **vencido**. Los que **nunca se registraron** no aparecen en el ordenador policial, pero el ALPR avisa cuando una matrícula corresponde a un vehículo sin registro. Para denunciar un robo con `/reportarroboveh` solo se listan los vehículos registrados. Consulta el [sistema policial](sistema-policial.md).

### Patentes y cámaras de velocidad

Un vehículo al que le quitaron la patente (ver el [sistema de delincuente](sistema-de-delincuente.md)) circula con la matrícula oculta. Las cámaras de velocidad **no pueden identificarlo y no le ponen multa**, pero el exceso de velocidad se reporta igual por radio a la policía como un vehículo con placa oculta: circular sin patente no te vuelve invisible.

## Renta de vehículos

Algunos vehículos del servidor están disponibles para **rentar**. Al subirte como conductor a uno libre ves el precio, y lo rentas con `/rentarveh`. Las bicicletas se rentan **a pie**, a menos de 3 metros de la bicicleta desocupada.

| Concepto | Valor |
|----------|-------|
| Pago | **$5.000** de depósito más el **0,5%** del valor del modelo |
| Cómo se paga | En **efectivo** y, si no alcanza, desde tu cuenta bancaria |
| Devolución del depósito | Si devuelves el vehículo con **más del 80% de su vida**, recuperas los $5.000 |
| Vehículos por persona | **Uno** a la vez |

El vehículo se entrega **reparado**, abierto y con batería, combustible y aceite llenos. Solo quien lo renta puede conducirlo: tiene las llaves, la cerradura, el maletero y el GPS. A cualquier otro conductor lo bajan del vehículo, aunque los **pasajeros** sí pueden subir.

La renta se mantiene aunque salgas del juego con `/logout` y termina cuando se reinicia el servidor.

### Devolver el vehículo

Usa `/desrentarveh`. Si estás lejos del punto de renta, te marca un **checkpoint** y el vehículo se devuelve solo al llegar con él. Si ya está en el punto, se devuelve en el acto. Para recuperar el depósito, el vehículo debe llegar con más del 80% de su vida.

Si el vehículo se **destruye**, la renta termina y **pierdes el depósito**; el vehículo reaparece en su punto a los pocos segundos.

### Qué no se puede hacer con un vehículo de renta

- No se puede tunear, pintar, ponerle vinilos o polarizado, ni instalarle nitro, tanque extra o neón.
- No se puede desarmar, desguazar, puentear, embargar, atar a otro vehículo, cambiarle la patente ni sumarlo a una facción.
- Sí se puede **remolcar** y **forzar la cerradura**.

## Maleteros

La capacidad del maletero depende del **tamaño real** del vehículo. Los más grandes ofrecen más espacio: SUV, pickups, furgonetas de pasajeros, limusinas, familiares y sedanes de lujo.

Qué objetos admite además depende del tipo de vehículo:

| Tipo de vehículo | Qué admite |
|------------------|------------|
| **Motos** y autos muy chicos | Solo objetos pequeños, de un espacio y que no sean pesados. |
| **Autos** en general | Objetos pequeños, medianos y grandes, pero no los pesados de gran tamaño, como los muebles o la mercancía. |
| Vehículos de **carga** | Todo, incluidos los muebles y la mercancía pesada. |

Un objeto grande o pesado tampoco puede guardarse desde dentro del vehículo.
## Cambiar de asiento

Con `/asiento` te cambias de asiento dentro del vehículo sin bajarte. Se abre un menú con los asientos del vehículo: el tuyo aparece en gris y los **ocupados en rojo**.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/cambiar-de-asiento.png" alt="Menú para cambiar de asiento dentro del vehículo" width="750" height="463">

Requisitos:

- El vehículo debe estar **casi detenido**: a una velocidad de 5 km/h o menos.
- Estar vivo y no estar esposado, aturdido con el taser ni placado.
- Esperar **5 segundos** entre un cambio y otro.
- No se puede en trenes, taxis ni autobuses del metro.

Pasar al **volante** tiene las mismas reglas que entrar como conductor: no puedes ponerte al volante de un vehículo de una facción legal que no es la tuya, y si el vehículo tiene el seguro puesto necesitas las llaves.

## Pegatinas

Los vehículos pueden llevar **pegatinas**: llamas y letras góticas en varios colores y tamaños, logos de marcas y emisoras de la ciudad, y otros símbolos y estampados. Se instalan en un **taller** desde el menú de tuning:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/pegatinas-para-vehiculos.jpg" alt="Pegatinas para vehículos con logos de marcas de la ciudad" width="1600" height="729">

1. El mecánico de servicio, dentro de su taller, escribe `/tuning [id] piezas` con el cliente al volante a menos de 5 metros.
2. El cliente acepta con `/aceptar` y elige **Pegatinas** en el menú.
3. Escoge el diseño, lo coloca sobre la carrocería con el editor y lo agrega al carrito.
4. Al confirmar, paga.

| Dato | Valor |
|------|-------|
| Precio | **$100** por pegatina, sin necesidad de stock en el taller |
| Máximo | **8** pegatinas por vehículo |
| Vehículos aptos | De **dos o cuatro puertas** y que no sean industriales |
| Quitar | Desde el menú de tuning, sin costo: la pegatina se pierde. Con `/tuning [id] quitar` el mecánico ofrece retirar todo el tuning y los accesorios |

Las piezas de tuning de capó y de techo, que son estéticas, no son lo mismo que los repuestos de capó y de maletero que usa el mecánico para reparar la chapa: el inventario las distingue.

## Ferry a Santa Catalina

El ferry une el **muelle de Santa María, en Los Santos**, con el **muelle de la isla de Santa Catalina**. Se usa con `/ferry` desde cualquiera de los dos muelles, a menos de 3 metros del punto marcado.

| Dato | Valor |
|------|-------|
| Pasaje | **$25.000**, descontados de tu **cuenta bancaria** |
| Requisitos | Ir a pie (no en vehículo), estar vivo y sin esposas, taser ni placaje |
| Al llegar | Quedas inmovilizado unos **5 segundos** |
| Espera para volver a subir | **15 segundos** después de bajar |

Las propiedades y reglas propias de la isla se explican en la guía de [Santa Catalina](santa-catalina.md).

## Pinchar ruedas

Un delincuente puede pinchar una rueda con `/pincharrueda` (o `/pincharllanta`).

| Requisito | Valor |
|-----------|-------|
| Habilidad de delincuente | **25** como mínimo |
| Herramienta | Un **cuchillo** en la mano derecha |
| Posición | A pie, junto a una rueda: se pincha la **más cercana** (a menos de 1,5 metros) |
| Enfriamiento | **15 minutos**, compartido con los demás delitos |

La rueda queda pinchada hasta que un mecánico la repare, aunque el vehículo reaparezca o se reinicie el servidor. Pincharla hace **sonar la alarma** del vehículo (si tiene batería) y la policía recibe el aviso al instante, salvo que ese mismo vehículo ya haya avisado en la última hora.

No funciona en bicicletas, aeronaves, botes, trenes, tranvías, vehículos de radiocontrol ni vehículos blindados. Las motos tienen dos ruedas y los demás vehículos, cuatro. Más delitos con vehículos en el [sistema de delincuente](sistema-de-delincuente.md).

## Consejos

- **Registra el vehículo apenas lo compres.** Sin papeles no podrás venderlo, pagar un peaje ni sacarlo del depósito.
- **Fíjate en la fecha de vencimiento.** Puedes renovar cuando falten 15 días o menos y no pierdes los días que te quedaban.
- **Cuida tus puntos.** Cada multa de tráfico cuenta y la suspensión de 7 días te deja sin los empleos que requieren conducir.
- **Devuelve la renta sin daños.** Con menos del 80% de vida pierdes los $5.000 de depósito.
- **Lleva dinero en el banco para el ferry.** El pasaje no se cobra del efectivo.
- **Usa el maletero según el vehículo.** Una moto no sirve para transportar muebles; para eso necesitas un vehículo de carga.
