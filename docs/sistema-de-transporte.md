# Sistema de transporte

## Introducción

San Andreas se mueve en taxi, en autobús, en metro y por el aire. Este sistema reúne los trabajos que consisten en **llevar gente de un sitio a otro** —taxista, conductor de autobús, maquinista de trenes y piloto comercial— y el tráfico ambiental que da vida a las calles, las vías y el cielo del estado.

Los trabajos de transporte son de dos tipos. El **taxista** es un empleo dentro de una empresa de taxis, con clientes reales que te piden un viaje y con clientes anónimos que asigna la aplicación. El **conductor de autobús**, el **maquinista** y el **piloto comercial** son trabajos secundarios: no necesitan contrato ni jefe y se hacen por tu cuenta (puedes ver todos los trabajos secundarios con `/trabajos`, que además te marca un vehículo libre para empezar). Los tres cobran **al completar el recorrido entero**, no parada por parada.

En el cielo, tres aviones de línea, un Nevada y varias avionetas y helicópteros vuelan por su cuenta. Los pilotos humanos tienen un **radar aéreo** que los muestra en el minimapa y una **alerta de colisión** que avisa cuando otra aeronave se acerca demasiado.

Si lo tuyo es mover mercancía en vez de pasajeros, mira el [Sistema de camionero](sistema-de-camionero.md).

### Comandos

- `/pedirtaxi` — solicita un taxi a los taxistas en servicio.
- `/taxistas` — indica cuántos taxistas hay en servicio.
- `/atendertaxi` — el taxista atiende la solicitud más antigua de la aplicación.
- `/cancelartaxi` — el taxista libera la solicitud que tiene asignada. Alias: `/cancelartaxis`, `/taxicancelar`.
- `/anunciarservicio` — el taxista anuncia que está trabajando y activa los clientes anónimos de la aplicación. Alias: `/taximetro`, `/taxista`.
- `/autobusero` — te conviertes en conductor de autobús (en la estación de Unity Boulevard).
- `/bus` — empiezas, o recuerdas, tu recorrido de autobús.
- `/buscancelar` — abandonas tu recorrido de autobús.
- `/maquinista` — te conviertes en maquinista (en la estación de trenes de Unity Boulevard).
- `/metro` — tomas la cabina del tren.
- `/metrocancelar` — abandonas tu turno de maquinista.
- `/radaraereo` — el piloto apaga o enciende el radar de su aeronave. Alias: `/transponder`.
- `/togtraficoaereo` — activa o desactiva tus alertas por el tráfico aéreo ambiental.

## Taxista

El taxista trabaja para una **empresa de taxis**: un negocio del tipo taxi donde tienes un contrato. Para trabajar entras en servicio con `/trabajar`, subes a un vehículo de la flota de la empresa (se gestiona con `/negvehiculos`) y esperas clientes. Los contratos, la entrada en servicio y la flota de un negocio se explican en el [Sistema de propiedades](sistema-de-propiedades.md).

Tu vehículo de trabajo debe ser un modelo compatible con la aplicación de taxis: el Taxi, el Cabbie y varios sedanes y camionetas de pasajeros. Con otro modelo, `/atendertaxi` no te deja atender solicitudes.

Con `/anunciarservicio` avisas a todo el servidor de que estás trabajando y de la tarifa del taxímetro, y además **activas los clientes anónimos** de la aplicación. Puedes anunciarte una vez cada **30 minutos**.

### Viajes con clientes reales

1. El cliente escribe `/pedirtaxi`. Debe estar **en el exterior**, con un **teléfono con número asignado en la mano derecha**, y debe haber al menos un taxista en servicio. En los puntos informativos de taxi, como el de Pershing Square, no necesita teléfono.
2. La solicitud entra en una cola de la aplicación y llega por mensaje a todos los taxistas en servicio. El cliente solo puede tener **una solicitud pendiente**, tiene que esperar **3 minutos** entre solicitudes, y la cola admite un máximo de **32** a la vez.
3. Un taxista escribe `/atendertaxi` y se queda con la solicitud más antigua. Debe estar en servicio y **al volante de su vehículo de trabajo**. Se le marca un punto en el mapa donde recoger al cliente y se le informa del teléfono del cliente; al cliente se le informa del nombre del conductor, el modelo del vehículo y su matrícula. Tras atender una solicitud, el taxista debe esperar **1 minuto** para atender otra.
4. El cliente espera donde pidió el taxi. Si no sube en **10 minutos**, la solicitud caduca sola y el taxista queda libre.
5. Cuando el cliente se sube como pasajero a un taxi de la empresa, el **taxímetro** empieza a correr. Subirse a un taxi sin conductor, o cuyo conductor no está en servicio, te saca del vehículo.
6. El viaje termina cuando el cliente se baja.

Si un taxista llega al punto de recogida y el cliente no está, puede escribir `/cancelartaxi`: la solicitud se libera **sin ninguna penalización**, el cliente queda libre para pedir otro taxi de inmediato y el taxista puede atender otra. No se puede cancelar un viaje en el que el cliente ya está a bordo.

### Taxímetro y pago

| Parámetro | Valor |
|-----------|-------|
| Tarifa | **$1,5** por metro recorrido |
| Tope por viaje | **$5.000** |
| Quién paga | El cliente, desde su **cuenta bancaria**, al bajarse |
| Reparto | **La mitad** del precio va al bolsillo del taxista y **la otra mitad** a la caja de la empresa |
| Burger Points | **+3** para el taxista por viaje cobrado |

Durante el viaje el cliente ve en pantalla el importe acumulado. Completar viajes sube tu habilidad de taxista (el doble si eres premium); mira el [Sistema de habilidades](sistema-de-habilidades.md).

### Clientes anónimos de la aplicación

Mientras estés en servicio y dentro de un vehículo, la aplicación te asigna cada cierto tiempo (alrededor de **90 segundos**) una solicitud de un cliente anónimo (NPC), siempre que no tengas un cliente real asignado. Al aceptar un cliente real, el viaje anónimo en curso se cancela.

- Se te marca el punto de recogida con un checkpoint (también con `/micp`). Hay **28 puntos de recogida** nombrados por calle y barrio, y el destino es uno de los lugares conocidos de la ciudad.
- El punto de recogida suele quedar a **150 metros o más** de ti.
- Tienes **5 minutos** para llegar a cada punto (recogida y destino). Si te pasas del tiempo, o te bajas del vehículo, el viaje se cancela sin penalización.
- Al llegar a los **3 metros** del punto de recogida se recoge al pasajero y se te marca el destino.
- Tras completar un viaje, el siguiente llega a los **60 segundos**.

La paga depende de la distancia en línea recta entre el origen y el destino y de tu habilidad de taxista:

| Habilidad de taxista | Paga por metro | Distancia mínima del viaje |
|----------------------|----------------|----------------------------|
| 0 | **$0,70** | 150 metros |
| 50 | **$1,00** | 325 metros |
| 100 | **$1,30** | 500 metros |

Con más habilidad los viajes son más largos y mejor pagados. El dinero va a tu bolsillo, la empresa recibe en su caja la misma cantidad que cobras tú y ganas **+3 Burger Points** por viaje.

## Conductor de autobús

El autobús es un trabajo secundario: una ruta fija de paradas que repites sin parar.

**Cómo conseguirlo.** Ve a la estación de Unity Boulevard (hay un icono que lo indica), a menos de **3 metros**, y escribe `/autobusero`. Necesitas:

- Tener la **licencia de transportista** (ver [Sistema de vehículos](sistema-de-vehiculos.md)).
- No tener **antecedentes penales**.
- Pagar **$5.000** en efectivo.

**Cómo se trabaja.**

1. Sube a uno de los autobuses de la estación (con `/trabajos` se te marca uno libre). No hace falta ser dueño ni tener llaves: los autobuses públicos son tuyos mientras seas conductor.
2. Escribe `/bus`. Quedas en servicio y se te marca la parada más cercana en el mapa.
3. Llega a cada parada **conduciendo el autobús** y espera **20 segundos** a que los pasajeros suban. Después se te marca la siguiente.
4. La ruta tiene **22 paradas**. Al terminar la última se te paga el recorrido entero y empieza uno nuevo de forma automática.
5. Con `/buscancelar` abandonas el turno: el autobús vuelve a su sitio y **el recorrido sin terminar no se paga**.

Una parada solo cuenta para la paga si cuando termina la espera estás a **15 metros o menos** de ella. Si te vas antes, el juego te avisa de que esa parada no suma.

| Concepto | Valor |
|----------|-------|
| Paga por parada atendida | **$524** (hasta **$11.528** por una ruta completa) |
| Burger Points | **+3** por parada atendida |
| Dónde se cobra | En tu cuenta bancaria, al completar el recorrido |
| Si dañas el autobús | Cobras solo el **70 %** de la ruta |

Se considera que el autobús sufrió daños si, durante una parada, su vida baja en más de **50 puntos** respecto al inicio del recorrido, o si sigues la ruta en otro vehículo que no es el tuyo del inicio. El aviso aparece en pantalla y, al cobrar, se te informa de cuánto se descontó.

## Metro y maquinista

El metro recorre el estado todo el día con un **maquinista automático**, así que **cualquiera puede subir como pasajero** y viajar entre ciudades sin pagar pasaje. El tren pasa por **siete estaciones**: Market, Cranberry, Prickle, Sobell Rail, Linden, Jefferson y Unity.

### Hacerse maquinista

Ve a la estación de trenes de Unity Boulevard, a menos de **3 metros** del icono, y escribe `/maquinista`. Necesitas:

- No tener **antecedentes penales**.
- Al menos **50 de habilidad de camionero**.
- La **licencia de transportista** y la **licencia de transporte de cargas pesadas** (ver [Sistema de camionero](sistema-de-camionero.md) y [Sistema de vehículos](sistema-de-vehiculos.md)).
- Pagar **$5.000** en efectivo.

### Tomar el tren

Un maquinista puede escribir `/metro` **desde cualquier lugar de la calle** para tomar la cabina: el tren frena, quedas al mando y el recorrido sigue desde la próxima estación. Si estás a más de 150 metros del tren, el comando te lleva hasta él. Hay algunas condiciones:

- Estar vivo, sin esposas ni inmovilizado, en el exterior y a pie (o ya dentro del tren).
- No estar preso, ni jugando una partida de paintball, ni en un evento especial como la Purga o los Juegos del Hambre.
- No haber **disparado a un jugador** en los últimos 3 minutos.
- Esperar **5 minutos** entre una toma y la siguiente. Además, la cabina solo la ocupa un maquinista a la vez.

Si ya eres el maquinista, `/metro` te recuerda cuál es la siguiente estación y te vuelve a marcar su punto en el mapa.

### El recorrido y la paga

1. Conduce hasta la estación marcada.
2. Al llegar, el tren se detiene **20 segundos** para que suban los pasajeros. Después se te marca la estación siguiente.
3. Una estación solo suma a la paga si cuando termina la espera estás a **15 metros o menos** de ella.
4. El recorrido tiene **siete estaciones**. Al completarlo se te paga el total y se reinicia la cuenta.

| Concepto | Valor |
|----------|-------|
| Paga por estación atendida | **$3.500** (hasta **$24.500** por un recorrido completo) |
| Burger Points | **+3** por estación atendida |
| Dónde se cobra | En tu cuenta bancaria, al completar el recorrido |

Tu turno termina, y **el recorrido sin terminar no se paga**, si escribes `/metrocancelar`, si bajas de la cabina, si te hieren o si pasas **1 minuto sin actividad** en pausa. En cualquiera de esos casos el maquinista automático retoma el tren desde donde lo dejaste.

## Piloto comercial

El piloto comercial es un trabajo secundario de vuelo por una ruta fija de puntos de control que sale y vuelve al aeropuerto de Los Santos.

**Requisitos.** Tener **dos puntos de rol positivos** y **no tener antecedentes penales**. No hace falta licencia ni pago de entrada.

**Cómo se trabaja.**

1. Pide un avión libre en `/trabajos` (opción Piloto comercial): se te marca en el minimapa.
2. Súbete como piloto y pulsa la tecla que aparece en pantalla. El avión se repara, se llena de combustible y de aceite, y el motor se enciende solo.
3. Sigue la ruta volando de punto de control en punto de control. La ruta tiene **58 puntos** y recorre Las Venturas y San Fierro antes de volver a Los Santos.
4. Al cruzar el último punto cobras, el avión vuelve a su sitio y apareces en el aeropuerto de Los Santos.

Si te bajas del avión, el trabajo se cancela.

### Paga

El pago **depende del tiempo de vuelo** y va a tu bolsillo (lo abona el gobierno de la ciudad): **$10.000** si completas la ruta en 5 minutos o menos, **$3.000** si tardas 15 minutos o más, y entre ambos extremos baja de forma proporcional.

| Tiempo de vuelo | Paga |
|-----------------|------|
| 5 minutos o menos | **$10.000** |
| 7 minutos 30 segundos | **$8.250** |
| 10 minutos | **$6.500** |
| 12 minutos 30 segundos | **$4.750** |
| 15 minutos o más | **$3.000** |

Además ganas **+5 Burger Points** por vuelo completado y el logro de piloto. Por eso conviene volar con soltura: cada minuto que ahorras vale unos $700.

## Tráfico aéreo ambiental

El cielo de San Andreas tiene vida propia, controlada por pilotos automáticos:

- **Aviones de línea.** Tres **AT-400** vuelan sin parar entre Los Santos, Las Venturas y San Fierro, despegando y aterrizando en sus aeropuertos, y un **Nevada** hace la ruta entre Los Santos y San Fierro.
- **Pilotos charter.** Tres pilotos automáticos hacen vuelos sueltos sobre Los Santos, Red County, Flint y el desierto con avionetas y helicópteros: Shamal, Cropduster, Rustler, Stuntplane, Beagle, Dodo, Maverick, Sparrow, Leviathan y más. Cada vuelo es distinto: el aparato aparece al despegar y desaparece al aterrizar, y los helicópteros pueden aparecer y desaparecer en el aire.
- **Espectáculo aéreo.** Un Stuntplane hace acrobacias (loops, toneles, vuelo invertido y barrena) sobre Idlewood, Ganton y East Los Santos.

Todos vuelan siempre **50 metros o más por encima del suelo, los árboles y los edificios**, salvo en el despegue y el aterrizaje, a la velocidad real de cada modelo y sin frenazos ni tirones. Los pilotos y aeronaves ambientales no sufren daños, y todos aparecen en el radar aéreo.

Los helicópteros Sparrow, Sea Sparrow y Maverick (incluidos el de noticias y el policial) no pueden subir más de **175 metros** sobre el suelo; los de las unidades policiales en servicio llegan hasta **300 metros**.

## Radar aéreo y alerta de colisión

Los pilotos y copilotos de aviones y helicópteros ven en el **minimapa** a las demás aeronaves que estén a **menos de 3.000 metros**, incluido el tráfico aéreo ambiental. El color indica la distancia:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/radar-aereo.png" alt="Radar aéreo mostrando otra aeronave cerca del aeropuerto de Los Santos" width="478" height="426">

| Distancia | Color |
|-----------|-------|
| Hasta 750 m | Rojo |
| Hasta 1.500 m | Rojo claro |
| Hasta 2.250 m | Rosa |
| Hasta 3.000 m | Verde |

El radar se actualiza cada **2 segundos**. Solo aparecen las aeronaves cuyo piloto va en el puesto de piloto, y si tu aeronave tiene el radar apagado, **no ves a nadie y nadie te ve**.

### Alerta de colisión

Si hay otra aeronave cerca, la alerta salta **solo en el aire** (a 30 metros o más sobre el suelo, tanto tú como la otra aeronave) y con el radar encendido. Funciona por niveles:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/alerta-de-colision-aerea.jpg" alt="Alerta de colisión DESCEND NOW con un avión y un helicóptero sobre Los Santos" width="1384" height="1255">

| Aviso | Cuándo salta |
|-------|--------------|
| **TRAFFIC** | Otra aeronave a menos de **400 m** y acercándose. |
| **CLIMB** o **DESCEND** | A menos de **200 m** y acercándose: indica si te conviene subir o bajar para alejarte. |
| **CLIMB NOW** o **DESCEND NOW** | A menos de **100 m**, aunque no se acerquen. |
| **CLEAR OF CONFLICT** | El peligro pasó. |

Suena un pitido solo cuando la situación empeora (como mucho cada 3 segundos), en vez de sonar sin parar. Con `/togtraficoaereo` puedes **desactivar las alertas provocadas por el tráfico ambiental**; las provocadas por otros jugadores siguen funcionando. Los helicópteros de las unidades policiales en servicio no reciben alertas del tráfico ambiental.

### Apagar el radar

Con `/radaraereo` el piloto apaga o enciende el radar de la aeronave. Necesitas:

- Ir **al volante** de un avión o un helicóptero.
- Tener **2 puntos de rol positivos**.
- Esperar **60 segundos** entre usos.

Con el radar apagado no ves a nadie y nadie te ve, pero **Los Santos Airport avisa por radio a la policía** con el modelo, la matrícula y la zona de la aeronave, tanto al apagarlo como al encenderlo. No se puede manipular el radar de las aeronaves del tráfico ambiental.

## Consejos

- **Si eres taxista, anúnciate.** Sin `/anunciarservicio` la aplicación no te asigna clientes anónimos y los clientes reales se enteran menos de que estás en servicio.
- **Sube tu habilidad de taxista.** A mayor habilidad, mejor pagan los viajes anónimos y más largos son: pasas de $0,70 a $1,30 por metro.
- **Usa `/cancelartaxi` sin miedo.** Si el cliente no aparece, liberas la solicitud al instante y no pierdes nada.
- **No te vayas antes de que acabe la espera.** En autobús y metro, la parada cuenta solo si sigues a menos de 15 metros cuando se acaban los 20 segundos.
- **Cuida el autobús.** Un choque serio te quita el 30 % de toda la ruta.
- **Termina lo que empiezas.** Tanto el autobús como el metro pagan al final del recorrido: abandonar a medias no cobra nada.
- **El piloto cobra velocidad, no riesgo.** Conoce bien la ruta y vuela directo a cada punto: cada minuto menos suma unos $700.
- **Viaja en metro para ir entre ciudades.** No se cobra pasaje y el tren recorre el estado todo el día.
- **Mantén el radar encendido.** Apagarlo te deja sin ver a nadie y sin alertas de colisión, y además avisa a la policía: hazlo solo si tu rol lo justifica.
