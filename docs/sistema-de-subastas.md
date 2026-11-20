# Sistema de subastas

## Introducción

Cuando una casa o un negocio queda abandonado y se libera por inactividad de su dueño, no vuelve directo al mercado: sale a **subasta pública** y se la lleva el jugador que más ofrezca. El dinero que se paga termina en las arcas del Gobierno.

La subasta funciona **por rondas**: nadie puede saltar a una cifra enorme de golpe. Para ir primero hay que ofrecer exactamente el monto que fija la ronda, y cada ronda sube un escalón del **5 %** del valor de la propiedad. Así, un jugador con menos dinero tiene tiempo de reunir su oferta y competir.

Mientras participas, tu oferta queda **retenida en tu cuenta bancaria**. Si no ganas, el dinero vuelve completo a tu cuenta.

### Comandos

- `/subastas` — lista todas las subastas activas, desde cualquier lugar.
- `/subasta [llave]` — abre la ficha de una subasta. Si estás en la puerta de la propiedad subastada, puedes escribir solo `/subasta`.

## Qué sale a subasta

Salen a subasta las propiedades que se liberan por inactividad de su dueño:

| Tipo de propiedad | Se libera tras |
|-------------------|----------------|
| Casa | 30 días de inactividad |
| Negocio | 14 días de inactividad (7 días si acumula mucha basura) |

Condiciones para que una propiedad liberada salga a subasta:

- Su **valor** debe superar los **$100.000**. Las propiedades de ese valor o menos quedan libres para comprarlas con `/comprar`, como siempre.
- Solo se subastan casas y negocios. No se subastan almacenes, habitaciones de complejos u hoteles ni propiedades de facciones.

El **valor** de la propiedad suma su valor base, el 60 % del valor de la flota de vehículos del negocio, el 50 % del valor de los muebles, el valor del stock y $250.000 por cada surtidor de combustible. Ese total es el **monto mínimo** de la subasta.

Si la propiedad se liberó justo al reiniciar el servidor, el mínimo se recalcula con los muebles, el stock y la flota cuando terminan de cargar, siempre que todavía no haya ofertas.

Mientras una propiedad está en subasta:

- No se puede comprar con `/comprar` ni aparece en el catálogo de **Dynasty8**.
- En su puerta principal hay un cartel verde, visible a unos 12 metros, con el número de subasta, la mejor oferta y la fecha de cierre.
- `/info` la marca como **EN SUBASTA**.

## Cómo participar

1. Usa `/subastas` para ver el listado. Cada fila muestra la propiedad y su zona, el tipo, la mejor oferta (o el mínimo si nadie ha ofertado) y el tiempo que falta para el cierre. Las subastas con más participantes y más ofertas aparecen primero, en páginas de 10.
2. Elige una subasta para abrir su ficha. Ahí puedes marcar la dirección en el mapa, ver la mejor oferta, cuántos participantes hay y en qué puesto vas.
3. Elige la opción de ofertar y confirma. El monto se descuenta de tu banco al instante.

Las ofertas son **anónimas**: los demás participantes aparecen como "otro participante".

### Requisitos para ofertar

| Requisito | Detalle |
|-----------|---------|
| Doble autenticación | Debes tener activada la verificación en dos pasos (2FA) en tu cuenta |
| Cuenta bancaria | No debe estar bloqueada |
| Multas | No puedes tener más de $10.000 en multas pendientes |
| Dinero | Debes tener en el banco el monto que se retiene |
| Propiedad premium | Si la propiedad es premium, debes ser jugador premium |
| Un personaje por cuenta | Solo un personaje de tu cuenta puede participar en cada subasta |
| Límites de propiedades | Las subastas que vas ganando cuentan para tu límite de propiedades, de negocios y de negocios por tipo de empresa. No puedes pasar al frente si con eso superarías el límite |
| Inactividad sin justificar | Ver la sección sobre inactividad sin justificar |

Cada subasta admite un máximo de **16 participantes**. Con la subasta llena solo puede entrar un nuevo participante que pase al frente con una oferta válida: en ese caso, el participante que va **último** sale de la subasta y se le devuelve su dinero.

## Ofertas por rondas

| Situación | Qué puedes hacer |
|-----------|------------------|
| Nadie ha ofertado | Ofertar exactamente el monto mínimo |
| Hay una mejor oferta | Para pasar al frente, ofertar exactamente la mejor oferta más un escalón (5 % del valor de la propiedad) |
| Vas segundo o más atrás | Subir hasta el monto de la ronda, **bajar** tu oferta de a un escalón (sin quedar por debajo del mínimo) o **retirarte** |
| Vas primero | Nada: tu oferta es firme hasta que otro participante te supere |

- No puedes ofertar montos libres: solo se acepta el monto de la ronda o, al bajar, un escalón menos que tu oferta actual.
- Cuando subes, solo se retiene **la diferencia** con tu oferta anterior. Cuando bajas, esa diferencia vuelve a tu banco.
- Si dos ofertas llegan al mismo monto, queda adelante la **más antigua**.
- Si otro participante te supera, tu dinero sigue retenido: puedes volver a subir, bajar tu oferta o retirarte y recuperarlo al instante.
- Cada retención y cada devolución aparecen en tu historial del banco como "Subasta", y recibes un SMS del banco.

### Ejemplo

Una casa vale $400.000, así que el mínimo es $400.000 y el escalón es de $20.000.

- Ana ofrece $400.000 y va primera.
- Beto pasa al frente con $420.000.
- Ana, que ahora va segunda, solo puede subir a $440.000 para volver al frente o retirarse. No puede bajar su oferta, porque quedaría bajo el mínimo de $400.000.
- Si Ana vuelve al frente con $440.000 y Beto sube a $460.000, Ana puede bajar su oferta a $420.000, que está sobre el mínimo, y recuperar $20.000.

## Plazos

- **Sin ofertas**, la subasta queda abierta sin plazo.
- La **primera oferta** pone en marcha el reloj: la subasta cierra el **tercer día a las 21:00** (hora UTC-3). Por ejemplo, si la primera oferta llega un lunes, cierra el jueves a las 21:00.
- **Sin ofertas de último segundo:** si una oferta pasa al frente cuando faltan menos de 10 minutos para el cierre, el cierre se alarga hasta 10 minutos después de esa oferta. Puede repetirse tantas veces como haga falta.

## Al cierre

- La mejor oferta se paga al **Gobierno** y la propiedad pasa al ganador, aunque esté desconectado. La propiedad llega con sus muebles y, si es un negocio, también con su stock y su flota.
- Si ganaste un negocio, debes unirte a él con `/negunirse` para usar sus comandos.
- A todos los demás participantes se les devuelve todo el dinero retenido.
- Recibes un SMS de "Subastas" si estás conectado, o una notificación al conectarte si no lo estabas. Los avisos cubren si ganaste, si perdiste, si te superaron y si perdiste tu lugar por una subasta llena.

## Inactividad sin justificar

Los negocios inactivos pasan por un control de actividad. Si una cuenta no justificó la inactividad de un negocio cuando se le pidió, esa cuenta **no puede volver a ser dueña de esa propiedad durante los siguientes 3 meses**. La restricción se aplica también a la cuenta del **cónyuge** del comprador, porque ambos comparten la propiedad.

Este bloqueo impide ofertar por ella en la subasta y también comprarla al Estado o recibirla de otro jugador con `/venderprop`. Si tu oferta se bloquea, el juego te avisa con un mensaje en el chat.

## Consejos

- Revisa `/subastas` con frecuencia: el mínimo suele ser alto en negocios con muebles, stock y flota.
- Ten tu dinero en el banco **antes** de ofertar: solo se retiene de la cuenta bancaria, no del efectivo.
- Si vas primero, no puedes retirarte. Ofrece solo lo que de verdad estés dispuesto a pagar.
- Intenta pasar al frente con tiempo: una oferta en los últimos 10 minutos alarga el cierre y les da a los demás otra oportunidad de responder.
- Cuenta tus límites de propiedades y negocios antes de ofertar: las subastas que vas ganando cuentan igual que las que ya tienes.
- Si una propiedad ya no te interesa y no vas primero, puedes retirarte en cualquier momento y recuperar todo lo retenido.

Para más información sobre propiedades, consulta [Sistema de propiedades](sistema-de-propiedades.md).
