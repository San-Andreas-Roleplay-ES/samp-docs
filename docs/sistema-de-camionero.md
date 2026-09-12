# Sistema de camionero

## Introducción

El camionero es el eslabón que mantiene abastecido al estado. Cuando un negocio se queda sin stock, su dueño encarga mercancía a una industria; ese encargo aparece como una ruta disponible para cualquier camionero que esté trabajando en una **empresa de repartos**. Tú recoges la carga en la industria, la llevas hasta el negocio y cobras por cada metro recorrido.

El trabajo tiene dos niveles. El **reparto de mercancía** es la puerta de entrada: se hace con furgonetas y camiones medianos, y lo puede realizar cualquier empleado de una empresa de repartos. El **transporte pesado** (tráileres) se desbloquea cuando acumulas experiencia suficiente en el rubro: ahí manejas camiones de gran tonelaje con remolques de combustible, químicos, contenedores o carga refrigerada, cobrando bastante más por viaje.

Las industrias del estado están repartidas por los tres condados, aunque las tres más concurridas se concentran en el sector portuario de **Ocean Docks**, en Los Santos, para agrupar el rol de carga y transporte pesado en una sola zona. Las industrias se distinguen en el mapa con su propio ícono.

Este trabajo conecta directamente con el [sistema de propiedades](sistema-de-propiedades.md): los pedidos que repartes los generan los dueños de negocio con `/pedidos`. Y tiene su contracara ilegal, porque los tráileres sin dueño se pueden robar y revender, algo reservado a las [facciones ilegales](sistema-de-delincuente.md).

### Comandos

**Reparto de mercancía**

- `/camionero` — abre el listado de rutas disponibles y te asigna una. También recarga el punto de destino si ya tienes una ruta en curso. (Alias: `/reparto`, `/tpda`.)
- `/recogercarga` — recoge la mercancía en la industria de origen. (Alias: `/recogermercancia`, `/rc`, `/rm`.)
- `/entregarcarga` — entrega la mercancía en el negocio de destino y cobra el viaje. (Alias: `/entregarmercancia`, `/ec`, `/em`.)
- `/examinarmercancia` — muestra el contenido, el origen y el destino de la carga que llevas en la mano. (Alias: `/mercancia`, `/cargamento`.)

**Transporte pesado**

- `/trailero` — elige entre ruta estándar o ruta de combustible y te asigna un viaje.
- `/recogertrailer` — aparece el tráiler detrás de tu camión y se engancha solo.
- `/entregartrailer` — entrega el tráiler en el destino y cobra el viaje.
- `/cancelartrailer` — cancela el viaje, solo antes de haber recogido el tráiler.
- `/rastreotrailer` — vuelve a marcar en el mapa la posición de tu tráiler.
- `/robartrailer` — vende un tráiler sin dueño en el desguace clandestino (solo facciones ilegales oficiales).

**Apoyo**

- `/micp` — recarga el punto marcado en el mapa si lo perdiste.
- `/bpanico` — botón de pánico para emergencias durante un viaje.
- `/frecuencia 303` — frecuencia de radio UHF compartida por los camioneros.

## Reparto de mercancía

### Requisitos

- Estar **contratado por una empresa de repartos** y estar de servicio (`/trabajar`).
- Conducir un **vehículo de trabajo de la empresa** (`/negvehiculos`). No sirve tu coche particular ni el vehículo de un compañero.
- El vehículo debe ser uno de los modelos habilitados para reparto: **Mule**, **Benson**, **Yankee**, **Boxville**, **Pony**, **Rumpo**, **Bobcat**, **Yosemite** o **Sadler**.
- No tener una misión de transporte pesado a medias.

### Cómo funciona

1. Súbete al vehículo de la empresa, ponte de servicio y escribe `/camionero`. Verás una tabla con todos los pedidos pendientes del estado: **origen** (la industria), **destino** (el negocio), **carga** y **estado**. Los pedidos marcados como "En ruta" ya los tomó otro repartidor.
2. Al elegir una ruta se te marca en el mapa la industria de origen. Conduce hasta allí.
3. Baja del vehículo, párate sobre el punto de recogida y escribe `/recogercarga`. Necesitas **las dos manos libres**: tomarás la caja de mercancía en la mano derecha. Guárdala en el maletero para el viaje.
4. Conduce hasta el negocio de destino, baja con la caja en la mano, párate sobre el punto de entrega y escribe `/entregarcarga`.

Si te desconectas a mitad de ruta, el pedido queda reservado a tu nombre: vuelve a escribir `/camionero` al reconectar y el sistema te devuelve el punto donde ibas.

### Pagos

La paga base es de **$1 por metro** de distancia entre la industria de origen y el negocio de destino, y se deposita en tu **banco** (se suma a tu próximo cheque de pago). Sobre esa base se aplican dos multiplicadores:

**Bonificación por vehículo**

| Vehículo | Bonificación |
|----------|--------------|
| Mule, Benson | **+20%** |
| Yankee, Boxville | **+30%** |
| Resto de modelos habilitados | sin bonificación |

**Multiplicador por habilidad de camionero**

| Habilidad | Multiplicador |
|-----------|---------------|
| 0 – 25 | **×0,8** |
| 26 – 50 | ×1,0 |
| 51 – 75 | **×1,2** |
| 76 o más | **×1,4** |

Además de tu paga, la **empresa de repartos** que te emplea recibe el importe base del viaje en su caja (sin las bonificaciones), así que cada ruta que completas también alimenta al negocio.

Cada entrega otorga **+5 Burger Points** (ver [sistema de Burger Points](sistema-de-burger-points.md)).

**Excepción**: si entregas en un negocio **de tu propiedad** o del de tu cónyuge, no cobras nada por la ruta.

### Descuentos y penalizaciones

- **Daños al vehículo**: si el camión termina el viaje con menos salud que al empezar, se te descuentan **$5 por cada punto de salud perdido**. Ese dinero va a la caja de la empresa como multa por daños.
- **Demora en recoger**: si tardas más de **30 minutos** en llegar a la industria, el pedido se cancela y se te descuentan **$5.000**.
- **Demora en entregar**: si tardas más de **30 minutos** con la mercancía encima, la ruta se cancela, pierdes **10 puntos de habilidad de camionero** y se te cobra el valor de la mercancía abandonada (un **80% del costo del producto por cada unidad**, con un mínimo de **$1.000**). Si el importe supera los $10.000 el sistema te avisa antes.

## Transporte pesado (tráileres)

### Requisitos

- **75 o más de habilidad de camionero**. Al llegar a ese nivel eres un camionero avanzado y se te habilitan los comandos de tráiler.
- **No tener antecedentes penales**: los personajes con arrestos registrados no pueden conducir camiones pesados.
- Ir al volante de un **Linerunner**, **Tanker** o **Roadtrain**. No sirve ningún otro vehículo.
- No tener un reparto de mercancía a medias.
- La **licencia de transporte de cargas pesadas** no es obligatoria para trabajar, pero sin ella arriesgas una multa si la policía te detiene en carretera.

Puedes hacer viajes de tráiler **por tu cuenta**, con un camión propio, sin estar empleado en ninguna empresa. La diferencia está en el pago (ver más abajo).

### Cómo funciona

1. Súbete a un camión habilitado y escribe `/trailero`. Elige **ruta estándar** o **ruta de combustible**; el sistema te asigna un viaje al azar entre más de 100 rutas repartidas por Los Santos, San Fierro, Las Venturas y el campo.
2. Se te indica qué tipo de tráiler debes recoger y el barrio donde está el punto de carga, marcado en el mapa.
3. Al llegar (debes estar a **menos de 25 metros** del punto), escribe `/recogertrailer`. El tráiler aparece detrás de tu camión y se engancha solo **al cabo de un segundo**.

   **Importante**: necesitas espacio libre detrás. El sistema comprueba que no haya paredes, techos bajos, agua ni objetos en todo el corredor que ocupará el remolque; si no lo hay, te avisa que dejes espacio suficiente. Detenerte en un descampado y de frente al punto de carga es la forma más fiable.
4. Conduce hasta el destino y, a **menos de 10 metros** del punto, escribe `/entregartrailer`. El tráiler se desengancha, se entrega y cobras.

Si pierdes de vista el remolque (por ejemplo, se desenganchó en una curva), `/rastreotrailer` vuelve a marcarlo en el mapa. Si te desconectas, `/trailero` recupera la misión donde la dejaste.

Las **rutas de combustible** tienen un extra: al entregar la cisterna de petróleo en una gasolinera, esa estación queda reabastecida (ver [sistema de combustible](sistema-de-combustible.md)).

### Pagos

La paga base del transporte pesado es de **$1,35 por metro** de distancia entre origen y destino, depositada en tu banco y sumada a tu próximo cheque.

| Situación | Lo que cobras |
|-----------|---------------|
| **Empleado de una empresa de repartos**, conduciendo un camión de esa misma empresa | **100%** de la paga |
| **Independiente** (sin empleo, o con un camión que no es de tu empresa) | **un tercio** de la paga |

Cuando trabajas como empleado, la empresa recibe además el importe completo del viaje en su caja, y el gobierno asume ese gasto como logística de suministros.

Cada entrega de tráiler otorga **+5 Burger Points**.

### Cancelar un viaje

`/cancelartrailer` solo funciona **antes** de haber recogido el tráiler, y cuesta **2 puntos de habilidad de camionero**. Una vez enganchado el remolque, la única salida es entregarlo.

## Habilidad de camionero

La habilidad de camionero es tu reputación en el rubro y determina cuánto cobras por reparto y si puedes acceder al transporte pesado. Se muestra con una barra de progreso cada vez que cambia.

| Acción | Efecto sobre la habilidad |
|--------|---------------------------|
| Entregar un reparto de mercancía | **50% de probabilidad** de subir |
| Entregar un tráiler | **33% de probabilidad** de subir |
| Cancelar una misión de tráiler | **−2** |
| Abandonar un reparto con la mercancía encima | **−10** |
| Que te roben el tráiler | **−25** |

Cuando la habilidad sube, el incremento es de **+1** para un jugador estándar y de **+2** si tienes cuenta premium (ver [tienda premium](tienda-premium.md)).

Los hitos importantes son **26** (dejas de cobrar reducido), **51** (empiezas a cobrar un 20% extra), **75** (se desbloquea el transporte pesado) y **76** (cobras un 40% extra en repartos).

## Licencia de transporte de cargas pesadas

Se tramita en el **ayuntamiento de Los Santos** con `/adquirirlicencia`, y cuesta **$3.000** en efectivo. Requiere tener antes la **licencia de conducir**, que se obtiene aprobando el examen de la autoescuela de Los Santos.

La licencia no te impide trabajar, pero sin ella un control policial puede multarte por conducir un camión pesado sin habilitación. También es requisito para conducir trenes.

El mismo trámite ofrece la **licencia de transportista** por **$1.500**, pensada para el reparto ligero.

## Tipos de tráiler

Cada ruta de transporte pesado usa uno de estos remolques. El "valor en el desguace" es lo que paga el comprador clandestino si el tráiler termina robado.

| Tipo de tráiler | Valor en el desguace |
|-----------------|----------------------|
| Cisterna de petróleo | **$100.000** |
| Frigorífico | **$90.000** |
| Cisterna de químicos | **$80.000** |
| Tráiler con materiales | **$80.000** |
| Tráiler con artículos (4 variantes) | **$70.000** |
| Tráiler con madera | **$50.000** |
| Tráiler con chatarra | **$25.000** |
| Tráiler con gravilla | **$25.000** |
| Tráiler con arena | **$25.000** |
| Tráiler con contenedor | **$25.000** |

Los remolques aparecen detrás del camión con el tamaño real del modelo, así que un contenedor largo necesita más espacio libre que una cisterna corta.

## Robo de tráiler

Un tráiler enganchado a un camión es un blanco jugoso para el crimen organizado. Cualquiera puede interceptar un camión en carretera y llevarse el remolque, pero solo un delincuente veterano sabe dónde colocarlo.

### Requisitos

- Ser miembro **oficial** de una **facción ilegal**.
- Tener al menos **95 de habilidad de delincuente**.
- No estar en tiempo de espera por un delito anterior.
- Ir al volante de un **Linerunner**, **Tanker** o **Roadtrain** con el tráiler enganchado.
- El tráiler debe ser **de misión y sin dueño**: no se pueden vender remolques de un jugador, de una facción ni de una empresa.

### Cómo funciona

Lleva el camión con el remolque hasta el **desguace clandestino de Blueberry**, en el campo al norte de Los Santos. Si escribes `/robartrailer` lejos del lugar, el sistema te lo marca en el mapa. Una vez sobre el punto (a **menos de 10 metros**), el comando cierra la venta.

### Pago y consecuencias

- Cobras el **valor completo del tráiler en efectivo**, entre **$25.000 y $100.000** según el tipo (ver tabla anterior).
- Ganas **+50 Burger Points**.
- Quedas con un tiempo de espera de **48 horas** antes de poder cometer otro delito mayor.
- El camionero al que le robaste pierde el rastro del remolque, su misión se cancela y su habilidad de camionero cae **25 puntos**.
- El tráiler desaparece del mundo.

La venta no pasa desapercibida: el bajo mundo se entera de que hay carga pesada moviéndose, así que espera atención policial en la zona.

## Consejos

- **Sube habilidad antes que dinero.** Pasar de habilidad 25 a 76 casi duplica tu paga por reparto (de ×0,8 a ×1,4), así que al principio conviene encadenar rutas cortas y frecuentes.
- **Elige el camión correcto.** Un Yankee o un Boxville pagan un 30% más que un Bobcat en la misma ruta.
- **Conduce con cuidado.** Los daños al camión se descuentan de tu paga a razón de $5 por punto de salud, y un choque fuerte puede dejarte sin ganancias.
- **Vigila el reloj.** Tienes 30 minutos por tramo; abandonar una carga cara es la penalización más dura del trabajo.
- **Como trailero, párate en campo abierto** antes de escribir `/recogertrailer`. Un muro o un techo bajo detrás del camión bloquean la aparición del remolque.
- **Trabaja para una empresa siempre que puedas.** Como independiente cobras solo un tercio del viaje pesado.
- **Si eres dueño de negocio**, recuerda que los pedidos que lanzas con `/pedidos` son las rutas que ven los camioneros: cada pedido que haces es trabajo para un transportista.
