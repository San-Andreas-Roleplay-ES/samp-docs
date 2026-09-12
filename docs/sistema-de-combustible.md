# Sistema de combustible

## Introducción

Todos los vehículos motorizados de San Andreas gastan combustible mientras el motor está encendido. Si el tanque se vacía, el motor se apaga solo y te quedas tirado donde estés, así que llenar el tanque es parte de la rutina diaria de cualquier conductor.

En el mapa hay gasolineras repartidas por Los Santos, el campo y los pueblos del condado. Cada surtidor pertenece a una de las tres marcas del estado (**Ron Petroleum**, **Terr-oil Gasoline** y **Globeoil Solutions**) y cada una cobra un precio distinto por litro. Sobre cada surtidor verás un cartel flotante con la marca, el precio del diésel, el precio de la gasolina y una barra que indica cuánto combustible le queda a ese surtidor.

Los autos, camiones y motocicletas se repostan **de pie, fuera del vehículo**, junto a la tapa del tanque: tomas el surtidor con la mano, esperas la carga y pagas al final. Los aviones, helicópteros y botes se repostan **desde adentro**, sentado al mando.

Muchas gasolineras son negocios de jugadores: cada litro vendido va a la caja del local y el dueño depende de los camioneros para reponer su stock. Si te interesa ese lado del sistema, mira [Sistema de propiedades](sistema-de-propiedades.md).

### Comandos

- `/llenar [litros]` — reposta el vehículo en una gasolinera. Sin cantidad, muestra los precios del surtidor más cercano.
- `/llenarlata` — llena una lata de gasolina o de diésel que tengas en la mano derecha, estando en una gasolinera.
- `/usarlata` — vacía la lata que llevas en la mano derecha dentro del tanque de un vehículo, en cualquier lugar.
- `/cambiaraceite` — cambia el aceite de motor de un vehículo usando una lata de aceite (requiere habilidad de mecánica).
- `/motor` — enciende o apaga el motor. Recuerda apagarlo antes de repostar.
- `/togvelocimetro` — alterna entre el velocímetro gráfico, uno clásico de texto con litros exactos, o ninguno.

## Tipos de combustible y precios

Cada modelo de vehículo usa **gasolina** o **diésel**, y no son intercambiables: no puedes echar gasolina a un motor diésel ni al revés. Los vehículos de reparto, camiones, camionetas de trabajo y maquinaria pesada suelen ser diésel; los autos particulares y las motos, gasolina.

El precio depende exclusivamente de la marca del surtidor:

| Marca | Gama | Gasolina | Diésel |
|---|---|---|---|
| Ron Petroleum | Baja | **$5**/litro | **$7**/litro |
| Terr-oil Gasoline | Media | **$7**/litro | **$8**/litro |
| Globeoil Solutions | Alta | **$8**/litro | **$11**/litro |

Llenar 100 litros de gasolina cuesta **$500** en un Ron y **$800** en un Globeoil, así que vale la pena fijarse en el cartel antes de parar. Los surtidores Ron son los más baratos y también los menos comunes; los Globeoil son los más caros y los que más abundan.

Del total que pagas, una cuarta parte se va en impuestos al Gobierno de San Andreas. El resto entra en la caja del negocio dueño de ese surtidor, si tiene uno.

## Dónde repostar

- **Autos, camionetas, camiones y motocicletas**: cualquier gasolinera con surtidores. Debes estar **a pie**, junto a la tapa del tanque del vehículo, y el surtidor a menos de **6 metros**.
- **Aviones y helicópteros**: sentado a los mandos, con un surtidor a menos de **20 metros**. Los aeropuertos tienen sus propios surtidores.
- **Botes y lanchas**: sentado al mando, en el muelle de abastecimiento del puerto de Los Santos. Si intentas repostar un bote lejos del muelle, el juego te marca el punto exacto en el mapa.
- **Bicicletas**: no tienen tanque y no consumen nada. Las motocicletas sí consumen y sí se repostan, siempre desde afuera.

## Paso a paso del repostaje

1. **Detén el vehículo junto al surtidor y apaga el motor** con `/motor`. Con el motor encendido no se puede iniciar la carga.
2. **Bájate y colócate al lado de la tapa del tanque** (a menos de **1.5 metros** de la tapa). En los modelos que no tienen tapa visible basta con estar a **4 metros** del vehículo. Los aviones y botes se saltan este paso: se cargan desde el asiento del piloto.
3. **Deja libre tu mano izquierda**: es la mano con la que sostendrás la manguera. Si llevas algo ahí, el comando no se ejecuta.
4. **Escribe `/llenar [litros]`**. Si no indicas cantidad, el juego te responde con los precios de esa marca. Puedes pedir entre **1 y 100 litros**, y nunca más de lo que cabe en tu tanque.
5. **Espera 30 segundos.** Tu personaje toma el surtidor, mira hacia la tapa del tanque y se queda cargando. Un aviso en pantalla te indica que el tanque se está llenando.
6. **Al terminar se paga solo.** Verás el desglose con la marca, el precio por litro, los litros cargados y el total. El dinero sale de tu **cuenta bancaria**, no del efectivo que lleves encima.

La primera vez que llenes el tanque de un vehículo desbloqueas el logro **¡Oro negro!**.

### Quién paga

- **Vehículo particular**: pagas tú, desde tu cuenta bancaria.
- **Vehículo de una facción legal**: paga la facción desde su caja.
- **Vehículo de un negocio o de una flota de empresa**: paga el negocio desde su caja.

### Qué cancela la carga

Durante esos 30 segundos debes quedarte quieto y atento. La carga se cancela si:

- **Sueltas el surtidor** o cambias lo que llevas en la mano izquierda.
- **Te alejas del vehículo** o de la tapa del tanque.
- **Te alejas del surtidor**.
- **Alguien enciende el motor** del vehículo mientras cargas.
- **Resultas herido** o mueres.
- **El surtidor se queda sin combustible** (otros conductores están comprando del mismo depósito).

Si la carga se cancela no pagas nada, pero tampoco recibes combustible: hay que empezar de nuevo.

## Peligro: explosión al encender el motor

Cargar combustible con el motor encendido es peligroso de verdad. Si alguien arranca el vehículo mientras la manguera está puesta y hay **al menos 2 bomberos en servicio** en el estado, el vehículo **explota**: una cadena de detonaciones en la zona que puede matarte a ti, a quien esté cerca y destruir el vehículo. La explosión se reporta por radio a la policía y a los paramédicos.

Si no hay bomberos suficientes de servicio, la carga simplemente se cancela con un aviso. Aun así, la costumbre segura es siempre la misma: **apaga el motor antes de acercar el surtidor** y no dejes que nadie se suba al asiento del conductor mientras cargas.

## Consumo y capacidad del tanque

El tanque se vacía **cada 30 segundos** mientras el motor está encendido, y lo que gasta depende del **blindaje** del vehículo, no de la velocidad a la que vayas:

| Blindaje del vehículo | Consumo cada 30 segundos |
|---|---|
| Sin blindaje | **1 litro** |
| Blindaje nivel 2 | **2 litros** |
| Blindaje nivel 3 y 4 | **3 litros** |
| Blindaje nivel 5 | **4 litros** |

Con el motor apagado no se gasta nada, así que apagarlo cuando estás detenido roleando ahorra dinero real.

La capacidad de fábrica varía según el modelo y se puede consultar en la ficha del vehículo en el concesionario:

| Capacidad | Vehículos típicos |
|---|---|
| **20 litros** | Sanchez |
| **30 litros** | deportivos ligeros y motocicletas (Infernus, Cheetah, Turismo, PCJ-600, Faggio, NRG-500, Pizza Boy, Quad) |
| **50 litros** | deportivos y coupés medianos (Buffalo, Banshee, Sultan, Alpha, Jester, Euros, Comet) |
| **100 litros** | la gran mayoría de autos, camionetas, camiones y maquinaria |

Un mecánico con el taller adecuado puede instalarte un **tanque ampliado**: +25, +50 o +100 litros sobre la capacidad de fábrica, a precio acordado con él. Ese tanque mejorado es una pieza que un delincuente experimentado puede desmontar del vehículo, así que no lo dejes aparcado en cualquier calle.

### Cuando el tanque se vacía

Al llegar a cero litros el motor **se apaga automáticamente** y no vuelve a arrancar hasta que cargues combustible. No hay reserva ni aviso previo: revisa el velocímetro. Con `/togvelocimetro` puedes elegir el velocímetro clásico de texto, que muestra los **litros exactos y la capacidad total** en lugar de una aguja.

Si te quedas seco lejos de una gasolinera, tus opciones son pedir que alguien te traiga una lata, llamar a un mecánico con grúa o abandonar el vehículo y volver más tarde.

### Aceite de motor

Aparte del combustible, el motor consume **aceite**, que baja mucho más lento: un punto cada 15 minutos de motor encendido. Cuando el nivel se acerca a cero recibes avisos en pantalla: primero "nivel de aceite bajo" y luego "nivel crítico". Un mecánico con habilidad suficiente puede rellenarlo con una **lata de aceite** usando `/cambiaraceite`, con el capó abierto y de pie frente al motor. Cada lata trae hasta **40 medidas** de aceite.

## Latas portátiles de combustible

Las latas son la solución para los que se quedan tirados o para quien quiere guardar combustible de reserva.

- Existen dos: **lata de gasolina** y **lata de diésel**. Cada una guarda hasta **30 litros**.
- Se compran en **ferreterías, tiendas 24/7 y gasolineras** que las tengan en stock. El precio lo fija cada negocio y suele rondar los **$300 a $370**.
- Para llenarla: estando **a pie en una gasolinera**, con la lata en la **mano derecha**, usa `/llenarlata`. Se llena hasta el tope y pagas el precio por litro de esa marca desde tu cuenta bancaria.
- Para usarla: acércate a la **tapa del tanque** del vehículo (a menos de 1.5 metros), con la lata en la mano derecha, y usa `/usarlata`. El contenido se vuelca en el tanque de inmediato, sin espera de 30 segundos.
- **El tipo debe coincidir**: una lata de gasolina no sirve para un motor diésel ni al revés. Si el tanque se llena antes de vaciar la lata, lo que sobra queda dentro.

Ten presente que una lata llena de combustible también sirve para prender fuego a cosas, así que llevarla encima en según qué situaciones puede levantar sospechas.

## Abastecimiento de las gasolineras

Los surtidores no tienen combustible infinito. Cada uno guarda hasta **2,500 litros** y se va vaciando con cada venta; cuando se acaba, avisa que no puede servir y hay que ir a otro. La barra de colores del cartel flotante indica de un vistazo cuánto le queda: verde intenso lleno, rojo casi vacío.

La reposición depende de los **transportistas pesados**: cuando alguien entrega un tráiler de combustible, todos los surtidores de la zona reciben **625 litros** cada uno. El transportista cobra un bono de **$350 por cada surtidor** que haya conseguido abastecer, pagado por el Gobierno de San Andreas, y el negocio dueño de cada surtidor paga de su caja el combustible que recibió. Si todos los surtidores de la zona ya están llenos, no hay bono. Puedes leer más sobre esas rutas en [Sistema de camionero](sistema-de-camionero.md).

## Consejos

- **Mira el cartel antes de parar.** La diferencia entre un Ron y un Globeoil son $300 en un depósito de 100 litros.
- **Apaga el motor siempre**, no solo para cargar: es la forma más simple de que el tanque dure el doble en una jornada de rol estático.
- **Vigila la barra del surtidor.** Si está casi vacía, mejor busca otra estación antes de perder 30 segundos y que te cancele la carga a mitad de camino.
- **Lleva una lata en el maletero** si haces rutas largas o trabajas en el campo, donde las gasolineras escasean.
- **Los vehículos blindados beben muchísimo**: un blindaje nivel 5 gasta cuatro veces más que un auto normal, y eso se nota en la factura semanal.
- **Nunca dejes que alguien se suba al asiento del conductor** mientras cargas. Un arranque en el momento equivocado puede costarte el vehículo y la vida.
