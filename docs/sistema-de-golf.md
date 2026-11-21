# Sistema de golf

## Introducción

El **Verdant Bluffs Golf Club** es el club de golf de San Andreas. Tiene un campo de **9 hoyos par 3** (par 27 en total) y se juega en caddy: te subes a uno de los carritos del galpón, llegas al hoyo, te bajas y golpeas la pelota con tu palo. Puedes jugar **solo** o con hasta **3 acompañantes**, y cada jugador paga su propia vuelta.

La pelota se mueve con la física real del terreno: el vuelo, los piques, las pendientes, los bunkers, los árboles y los muros influyen en cada golpe. Cada vuelta suma tus golpes en un tablero, y el club guarda tus estadísticas, el récord del campo y una tabla de líderes. El club también ofrece una **membresía semanal** con precios preferenciales en el golf y beneficios en el resto de la ciudad.

Para ubicar el club puedes usar `/minijuegos`, que marca el galpón de caddies en el minimapa. Allí mismo está el **punto de información**, donde se compran los bolsos de golf y se consulta la tabla de líderes.

### Comandos

- `/golf` — en un caddy dentro del club, empieza una vuelta tú solo. Si ya armaste una sala con invitados, empieza la vuelta con todos.
- `/golf invitar [id]` — invita a otro jugador cercano a tu vuelta.
- `/aceptar` y `/rechazar` — responden a una invitación de golf.
- `/golf tabla` — vuelve a mostrar el tablero de puntajes durante 10 segundos.
- `/golf record` — muestra tus estadísticas personales y el récord del club.
- `/golf bolso` — abre la tienda de bolsos de golf (solo en el punto de información).
- `/golf salir` — abandona la sala o la vuelta en curso.
- `/golf ayuda` — recuerda los controles.
- `/membresia` — compra, renueva o cancela la membresía (solo en el punto de membresías del club).
- `/mostrarcredencial [id]` — muestra tu credencial de socio.
- `/afiliados` — lista los socios conectados.

## Requisitos para jugar

| Requisito | Detalle |
|-----------|---------|
| Lugar | Estar dentro de los terrenos del club. Si sales de ellos durante la vuelta, quedas fuera de la partida. |
| Vehículo | Estar en un **caddy** del club, como conductor o pasajero, al empezar. |
| Estado | Estar vivo y sin esposas. |
| Actividad | No estar apostando, pescando, entrenando en el gimnasio ni jugando básquetbol, bolos o paintball. |
| Dinero | Tener en la mano el precio de la vuelta. |
| Palo | Para golpear necesitas la **mano derecha libre**: el palo se coloca solo en ella. |

### Precio de la vuelta

| Jugador | Precio por vuelta de 9 hoyos |
|---------|------------------------------|
| Sin membresía | **$1.000** |
| Socio del club | **$250** |

El pago se hace **por adelantado**, al empezar la vuelta, y va a la caja del club. Si luego abandonas, no se devuelve. Cada jugador de la sala paga su propio precio.

## Armar una vuelta

1. Súbete a un caddy en el club.
2. Escribe `/golf` para jugar solo. La vuelta empieza al instante.
3. Si quieres jugar en grupo, invita a cada acompañante con `/golf invitar [id]` **antes** de empezar. Quien invita arma la sala y es el anfitrión.
4. El invitado debe estar a **30 metros o menos** de ti, dentro del club y en un caddy, con dinero suficiente. Tiene **30 segundos** para usar `/aceptar`.
5. Cuando estén todos, el anfitrión escribe `/golf` y la vuelta empieza. Quien ya no cumpla los requisitos en ese momento queda fuera de la vuelta antes de cobrarse.

Detalles de la sala:

- Cabe un máximo de **4 jugadores** por vuelta.
- La sala se cierra sola a los **3 minutos** si no empieza la vuelta; ese plazo se reinicia cada vez que alguien se suma. Si el anfitrión sale o deja el club, la sala se disuelve.
- Solo el anfitrión puede invitar y empezar.
- El campo admite hasta **4 vueltas a la vez**. Si están todas ocupadas, espera a que termine alguna.

## Cómo se juega cada hoyo

1. **Viaje al hoyo.** Un checkpoint te marca el estacionamiento del hoyo. Conduce el caddy hasta allí. Tienes **3 minutos** para llegar: quien no llega a tiempo se une más tarde, cuando alcanza el hoyo.
2. **Bájate del caddy** y espera tu turno.
3. **Orden de juego.** Como en el golf real, golpea primero el jugador cuya pelota está **más lejos del hoyo**. Quien llega tarde juega después de los que ya están en el hoyo.
4. **Tu turno.** Camina hasta tu pelota, marcada con un checkpoint, y presiona la **tecla de correr** (Espacio por defecto) estando a unos 1,5 metros de ella para tomar la postura.
5. **Golpea.** Apunta, elige la altura y carga la fuerza (ver controles).
6. **Resultado.** Tras cada golpe se muestra la distancia que queda al hoyo. Cuando todos terminan el hoyo, aparece el tablero de puntajes y todos viajan al siguiente.

Tienes **90 segundos** por turno. Si se acaba el tiempo, se te anota **1 golpe** sin mover la pelota. Si pierdes **dos turnos seguidos** sin golpear, quedas fuera de la vuelta por inactividad.

### Controles

| Acción | Tecla |
|--------|-------|
| Tomar postura junto a tu pelota | Tecla de correr (Espacio) |
| Apuntar a izquierda o derecha | Flechas izquierda / derecha |
| Subir o bajar la altura del golpe | Flechas adelante / atrás |
| Cargar la fuerza | Mantén la tecla de correr |
| Golpear | Suelta la tecla de correr |
| Salir de la postura sin golpear (antes de empezar a cargar la fuerza) | Tecla de entrar y salir de vehículos (F) |

- La **barra de fuerza** sube y baja sola mientras mantienes la tecla. Suelta en el momento justo para elegir cuánta fuerza das. Si la mantienes más de 8 segundos, el golpe sale solo.
- Cuanta más fuerza uses, **menos preciso** es el golpe: un golpe a tope es el que más se desvía.
- La **altura** va de 0 a 100 y empieza en 40.
- Dentro del **green** golpeas con el putter: no eliges altura y el golpe es más suave y más preciso.
- Mientras estás en postura, la cámara se coloca detrás de la pelota mirando hacia donde apuntas. Tras el golpe, la cámara sigue a la pelota.
- A la derecha de la pantalla aparece un contador con tu **puntaje, el hoyo y el par** durante toda la vuelta, y las barras de **fuerza y altura** mientras apuntas.

### Reglas del campo

- **Fuera de límites.** Si la pelota cae fuera del campo (la playa, el mar o bajo la meseta), se anota **1 golpe de castigo** y vuelves a golpear desde donde lo hiciste antes.
- **Tope de golpes.** Al llegar a **8 golpes** en un hoyo, levantas la pelota y el hoyo se anota con 8.
- **Pelota en el hoyo.** Si la pelota llega al hoyo con demasiada velocidad, pega en el borde y sigue de largo.
- **Obstáculos.** La pelota rebota en árboles, vallas y paredes, y las pendientes y los bunkers cambian su recorrido.
- **Quedar fuera.** Si te hieren, te esposan, entras a un interior o sales del club, quedas fuera de la vuelta. Tu pelota desaparece y siguen jugando los demás.

### Puntajes

Cada hoyo se compara con el par de 3 golpes:

| Golpes | Resultado |
|--------|-----------|
| 1 | Hoyo en uno |
| 2 | Birdie |
| 3 | Par |
| 4 | Bogey |
| 5 | Doble bogey |
| 6 | Triple bogey |
| 7 u 8 | Sobre el par |

Al terminar cada hoyo y al terminar la vuelta aparece un **tablero con los puntajes** de todos los jugadores durante **10 segundos**. Puedes volver a verlo con `/golf tabla`, siempre que no estés en medio de un golpe.

### Cómo se decide el ganador

- En una vuelta en grupo gana quien termina con **menos golpes**. Si hay empate en el primer puesto, nadie gana.
- Quien abandona pierde. Si todos los demás abandonan, el último que queda gana por abandono.
- Solo se guardan las vueltas que terminas.

## Récords, tabla de líderes y logros

Cada vuelta terminada queda registrada. `/golf record` te muestra:

- Vueltas jugadas.
- Tu mejor vuelta, en golpes.
- Tu promedio de golpes.
- Tus victorias.
- Tus hoyos en uno.
- El récord del club: el jugador y los golpes de la mejor vuelta histórica.

En el **punto de información** del club hay una **tabla de líderes** con:

- El **top 3 histórico**: la mejor vuelta de cada jugador, con su puntaje respecto al par.
- La **mejor vuelta de la semana**, que se reinicia cada lunes a las 00:00.

Si tu vuelta supera el récord del club, se avisa a todos los jugadores de tu partida.

### Logros

| Logro | Cómo se consigue | Recompensa |
|-------|------------------|------------|
| Un pajarito en el green | Hacer tu primer birdie. | 1 moneda |
| Hoyo en uno | Embocar de un solo golpe. | 15 monedas |
| Por debajo del par | Terminar una vuelta con menos de 27 golpes. | 5 monedas |
| El rey del green | Ganar una vuelta contra otros jugadores. | 2 monedas |
| Socio de Verdant Bluffs | Terminar 25 vueltas. | 5 monedas |

## Caddies

Los caddies son vehículos del club y se guardan en el galpón. Mientras estás en una sala o en una vuelta, tienes sus llaves y puedes conducirlos.

Al empezar y al terminar cada vuelta, los caddies que usaron los jugadores se **reparan y recargan de combustible y aceite**. Lo paga el club, no los jugadores.

## Bolsos de golf

En el punto de información del club puedes comprar un **bolso de golf** con `/golf bolso`:

| Dato | Valor |
|------|-------|
| Precio | **$1.000** cada uno, en efectivo |
| Variedad | 60 bolsos de distintos modelos y colores |
| Dónde | A 3 metros o menos del punto de información |
| Requisito | Estar vivo, sin esposas y sin el palo en la mano |

El bolso es **opcional**: no hace falta para jugar. Necesitas espacio libre para recibirlo, y el dinero va a la caja del club.

## Membresía del Golf Club

El club ofrece una membresía de socio. Es la primera de las **membresías de negocios**: cada negocio con membresía tiene su propio punto de membresías, con su precio y sus beneficios.

| Dato | Valor |
|------|-------|
| Precio | **$100.000** cada **7 días**, pagados desde tu cuenta bancaria |
| Dónde | En el punto de membresías del club, junto al galpón de caddies |
| Comando | `/membresia` |
| Renovación anticipada | Hasta **4 semanas** pagadas por adelantado |

### Beneficios

Mientras tu membresía esté vigente, tienes:

- **Golf:** la vuelta cuesta **$250** en vez de $1.000.
- **Bolos:** la partida cuesta **$250** en vez de $1.000 (ver [bolos](sistema-de-bowling.md)).
- **Paintball:** entrada **gratis** (ver [paintball](sistema-de-paintball.md)).
- **Tienda del club:** **15%** de descuento en los productos del club con `/comprar`, y **20%** en comidas y bebidas. Los descuentos no se suman.
- **Concesionarios:** **5% extra** de descuento en autos, sobre el precio que ya te corresponda, y **10% extra** en botes y aeronaves.
- **Venta de casa al Estado:** recibes un **5% más** de su valor.
- **Venta de vehículos al Estado:** recibes un **10% más** de su precio.
- **Peajes:** **50% más baratos**.
- **Multas del Estado:** **10% de descuento** al pagarlas.
- **Llaves:** acceso a las puertas del club.

Si tienes varias membresías con el mismo beneficio, no se acumulan: basta con una vigente.

### Cómo funciona la cuota

1. Ve al punto de membresías del club y escribe `/membresia`. Verás los beneficios y el precio; elige **Pagar**.
2. La cuota se cobra de tu **banco**. Necesitas el dinero ahí y tu cuenta bancaria no puede estar bloqueada.
3. Tu membresía queda activa por 7 días y se **renueva sola**: el cobro automático se hace junto con los impuestos diarios, cuando falta menos de un día para que venza. Solo se cobra si estás conectado cuando se calculan tus impuestos del día.
4. Si en ese momento no tienes fondos en el banco, el cobro no se hace y recibes un aviso. Si ya había vencido y sigue sin fondos, el cobro automático se cancela.
5. Para **renovar a mano**, vuelve al punto de membresías y usa `/membresia`: cada pago suma 7 días a partir del vencimiento. Puedes dejarla pagada hasta 4 semanas por adelantado.
6. Para **cancelar**, usa `/membresia` y elige Cancelar. Se deja de cobrar, pero sigues siendo socio hasta que venza.

### Credencial y afiliados

- `/mostrarcredencial` muestra tu credencial de socio con tus membresías vigentes y su fecha de vencimiento. Con `/mostrarcredencial [id]` se la muestras a un jugador que esté a menos de 5 metros.
- `/afiliados` muestra los socios conectados y cuántos socios hay en total. Pueden usarlo los socios vigentes, dentro del negocio del club (en su interior) o en su punto de membresías, y el personal del negocio con permisos de administración, dentro del negocio.
- `/ayuda membresía` resume estos comandos.

## Consejos

- Ve con acompañantes: la vuelta cuesta lo mismo por persona y puedes ganar el logro de El rey del green.
- Antes de empezar, comprueba que estás dentro del club y en el caddy: de lo contrario no podrás pagar ni empezar.
- No te alejes del campo ni entres a edificios a mitad de la vuelta: saldrás de la partida y no se devuelve el pago.
- En el green solo cuenta la fuerza: un golpe suave y bien apuntado vale más que uno a tope.
- Los golpes a máxima fuerza se desvían más. Para llegar lejos con precisión, carga algo menos de fuerza y ajusta la altura.
- Si juegas golf y bolos con frecuencia, la membresía se paga sola: ahorras $750 en cada vuelta de golf o partida de bolos, además de la entrada gratis al paintball y los descuentos en tiendas, concesionarios, peajes y multas.
