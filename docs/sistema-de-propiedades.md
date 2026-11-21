# Sistema de propiedades

## Introducción

El sistema de propiedades agrupa todos los inmuebles del servidor: **casas**, **almacenes**, **negocios**, **complejos de apartamentos y hoteles** e **industrias**. Puedes comprarlos, venderlos, alquilarlos, amueblarlos, prestar llaves y —en el caso de los negocios— convertirlos en empresas con empleados, stock, caja, exterior y eventos.

<img width="376" height="52" alt="image" src="https://github.com/user-attachments/assets/81baa9c4-2129-48af-a974-8dfe59c7b4c7" />

Una casa te da un techo, un ropero, una caja fuerte, un refrigerador y un buzón. Un almacén te da espacio de sobra para guardar objetos. Un negocio es una máquina de generar dinero, pero solo si lo atiendes: los clientes automáticos exigen ventas reales, empleados contratados y un local limpio, y descuidarlo acaba en incendios y en la pérdida del inmueble por inactividad, que sale a [subasta](sistema-de-subastas.md).

Todas las propiedades pagan **facturas de agua y luz** mientras haya gente dentro, y las casas pagan además impuesto a la propiedad (ver [Sistema de impuestos](sistema-de-impuestos.md)).

### Comandos generales

- /entrar — entra por el marcador de entrada en el que estás parado.
- /salir — sale por el marcador de salida.
- /abrir, /cerrar — abre o cierra la puerta de la propiedad (dueño o quien tenga llaves). También abren y cierran las puertas interiores que se hayan creado con muebles.
- /info — muestra en pantalla, junto a la entrada, el estado de la propiedad (abierta o cerrada, en venta, alquilada o en subasta) y su precio.
- /timbre — toca el timbre de una casa desde la puerta de la calle para avisar a quienes están dentro.
- /visitar — te deja recorrer durante 30 segundos una propiedad en venta cuya puerta está cerrada; pasado ese tiempo te devuelve a la puerta.
- /metermoto — mete una moto o una bicicleta a la propiedad (necesitas las llaves).
- /phora [0-23] — fija una hora personalizada en el interior (dueño; con 0 se desactiva).
- /pclima [0-20] — fija un clima personalizado en el interior (dueño; con 0 se desactiva).
- /ayuda casa, /ayuda negocio, /ayuda almacen, /ayuda complejo, /ayuda muebles — listados de comandos dentro del juego.

## Compra y venta de inmuebles

Las propiedades en venta muestran un cartel en la entrada. Párate en el marcador y usa `/comprar`: el juego te muestra el precio y la compra se cierra con `/aceptar`. El dinero sale de tu cuenta bancaria. Para comprar, ya sea al Estado o a otro jugador, tu cuenta debe tener activada la doble autenticación (2FA).

Una propiedad **premium** solo la puede comprar un jugador premium, y las **habitaciones de hotel** no se compran (se rentan, ver [Complejos y hoteles](#complejos-y-hoteles)). Mientras una propiedad está en subasta no se puede comprar con `/comprar` (ver [Sistema de subastas](sistema-de-subastas.md)).

### Cómo se calcula el valor

El precio de una propiedad no es solo su valor base. El sistema suma:

**Precio = (Valor base × multiplicador) + (60% del valor de la flota) + (50% del valor de los muebles) + Valor del stock + $250.000 por cada surtidor de combustible**

- **Valor base**: el precio original del inmueble.
- **Flota**: la suma del valor de los vehículos de la empresa, al 60%.
- **Muebles**: la suma del precio de los muebles colocados, al 50%.
- **Stock**: el valor de reposición del inventario del negocio.
- **Surtidores**: cada surtidor de combustible instalado suma $250.000 (ver [Sistema de combustible](sistema-de-combustible.md)).

### Descuento premium al comprar

Al comprarle al Estado, tu nivel premium reduce el multiplicador del valor base:

| Nivel premium | Multiplicador del valor base |
| --- | --- |
| Sin premium | 100% |
| Bronce | 90% |
| Plata | 80% |
| Oro | 70% |
| Platino y Rubí | 60% |

Los componentes de flota, muebles, stock y surtidores se pagan completos en todos los casos.

### Vender

Puedes vender a **otro jugador** estando dentro de la propiedad con `/venderprop`, pactando un precio entre el **50% (x0,5)** y el **1000% (x10)** del precio calculado. Fuera de ese rango la diferencia tiene que ir por transferencia bancaria aparte. El comprador debe estar a menos de 5 metros y acepta con `/aceptar`.

Al vender **al Estado** la oferta es un porcentaje del valor base:

| Nivel premium | Oferta del Estado |
| --- | --- |
| Sin premium | 30% |
| Bronce | 35% |
| Plata | 40% |
| Oro | 45% |
| Platino y Rubí | 50% |

Los socios con la membresía adecuada reciben **5 puntos porcentuales más** al venderle una casa al Estado (ver [Membresías de negocios](#membresías-de-negocios)).

No puedes vender una propiedad con **caja negativa**. Para vender **al Estado**, además, no puede haber **pedidos en ruta**, **paquetes u objetos ilegales adentro** ni un **laboratorio de drogas** activo, y tienes que estar junto a la entrada. Tampoco puedes venderle una propiedad premium a alguien que no tenga premium.

### Cuántas propiedades puedes tener

| Nivel premium | Propiedades totales | Negocios | Negocios del mismo tipo |
| --- | --- | --- | --- |
| Sin premium | 2 | 1 | 1 |
| Bronce | 2 | 1 | 1 |
| Plata | 2 | 1 | 1 |
| Oro | 3 | 2 | 2 |
| Platino | 4 | 3 | 3 |
| Rubí | 5 | 4 | 4 |

Los espacios extra de propiedades que hayas comprado se suman a estos límites. Las subastas que vas ganando cuentan para tus límites. Si ya tienes más propiedades que tu límite, conservas las que tienes, pero no puedes comprar más ni ofertar por encima del límite.

### Comandos

- /comprar — compra la propiedad en la que estás (si está en venta).
- /venderprop [id] [$precio] — vende tu propiedad a un jugador cercano.
- /vender — vende la propiedad al Estado (junto al marcador de entrada).
- /aceptar, /rechazar — acepta o rechaza una oferta.

## Entradas, salidas y puertas

Una propiedad puede tener **hasta 6 entradas**, cada una con su posición, su puerta y su interior. Algunas permiten meter vehículos. Al acercarte a una entrada aparece un marcador: úsalo con `/entrar`; desde dentro, `/salir` te devuelve a la calle.

Las puertas pueden estar **abiertas**, **cerradas** o **rotas**. Si una puerta está cerrada no pasa nadie, ni siquiera el dueño, hasta que alguien con llaves la abra con `/abrir`; una puerta rota (con la cerradura destrozada) deja pasar a cualquiera. Las puertas interiores que hayas creado con muebles también se abren y cierran con `/abrir` y `/cerrar`.

Los negocios que tienen empleados en servicio aparecen con su **ícono propio en el mapa**; el dueño puede cambiarlo con `/negmapicon` por **$5.000**.

## Casas

Las casas son viviendas personales. Sirven para vivir, guardar dinero y objetos, almacenar ropa, conservar drogas en el refrigerador, cocinar y decorar el interior con muebles.

Toda casa tiene un **buzón** en su entrada principal (ver más abajo) y puedes prestar llaves a otros jugadores (ver [Llaves y permisos](#llaves-y-permisos)). Con premium **Rubí** también puedes crear una **terraza** (ver [Exteriores y terrazas](#exteriores-y-terrazas)).

### Alquilar tu casa a otro jugador

El dueño puede convertir a otro personaje en **inquilino** con `/alquilar [id] [$precio]`. La renta debe estar entre **$150 y $1.000** y el inquilino la paga en cada payday; el dinero va al dueño. El inquilino recibe las llaves y puede entrar y salir libremente. Un personaje solo puede ser inquilino de una propiedad a la vez.

### Comandos

- /ropa — abre el ropero para cambiar tu vestuario (junto al punto de almacenamiento de la propiedad).
- /almacen — abre el almacén de la casa, que guarda hasta 64 objetos.
- /refrigerador — abre el refrigerador (conserva la pureza de las drogas, ver [Sistema de drogas](sistema-de-drogas.md)). Los ingredientes que guardas ahí sirven para `/cocinar` si estás a 10 metros o menos del refrigerador (ver [Sistema de cocina y bar](sistema-de-cocina-y-bar.md)).
- /buzon — abre el buzón de correo.
- /alquilar [id] [$precio] — ofrece el alquiler a un jugador.
- /inquilinos — lista tus inquilinos.
- /desalojar — echa a un inquilino.

## Buzones de correo

Todas las **casas** tienen un buzón en su entrada principal. Se usa con `/buzon` tanto desde la calle como desde dentro, estando parado en el marcador de la **entrada principal**.

- **Capacidad: 16 ranuras.**
- **Cualquiera puede dejar** algo dentro: cartas, objetos pequeños, paquetes. Basta tener el objeto en la mano derecha y usar `/buzon guardar`.
- **Solo quien tenga las llaves de la casa puede sacar** lo que hay dentro (`/buzon sacar [ranura]`).
- **No entran objetos voluminosos**: solo caben los que ocupan una sola ranura del inventario y no requieren cargarse con las dos manos.
- La **policía** puede forzar el buzón, pero únicamente estando de servicio y con una **orden de allanamiento** activa (ver [Sistema de justicia](sistema-de-justicia.md)).

Es la vía ideal para citaciones, cartas anónimas, entregas discretas o dejarle algo a alguien que no está en casa.

## Almacenes

Los almacenes están pensados para **guardar grandes cantidades de objetos**. Tienen un área de almacenamiento ampliada, con espacio para hasta 128 objetos (el doble que una casa), donde puedes depositar items del inventario, y puedes compartirlos prestando llaves.

No tienen empleados, ni stock de venta, ni clientes. El dueño puede mover el punto de almacenamiento con `/almacen situar`.

## Complejos y hoteles

Los complejos agrupan muchas **habitaciones** bajo un mismo dueño. El propietario del complejo fija un precio único por día con `/fijaralquiler` (entre **$100 y $50.000 por día**; el cambio no afecta a los inquilinos actuales). Los empleados del complejo que estén en servicio consultan el estado de las habitaciones con `/habitaciones`.

Cualquier jugador puede reservar una habitación libre parándose junto a su puerta y usando `/rentar`: elige de **1 a 30 días** y paga todo por adelantado, con el efectivo que lleves o, si no te alcanza, desde el banco. El dinero va a la caja del hotel. Solo se puede tener **una habitación reservada a la vez**, y el hotel guarda el registro de la reserva, que la policía puede consultar presencialmente.

- Si ya rentas esa habitación, `/rentar` **suma los días** a tu reserva actual.
- `/cancelarrenta` te permite dejar la habitación cuando quieras. **No hay reembolso** de lo pagado.
- Al terminar los días reservados, la habitación queda libre y pierdes las llaves; eso ocurre cuando el servidor se reinicia.
- Si te desalojan mientras estás desconectado, recibes el aviso al conectarte.

Las normas del hotel prohíben tener mascotas, fumar, hacer fiestas y mover objetos o muebles de la habitación.

## Llaves y permisos

Puedes **compartir tu propiedad** prestando llaves; para prestarlas tu cuenta debe estar certificada en el UCP. Los límites por persona son:

| Tipo | Llaves que puede recibir un jugador |
| --- | --- |
| Casas | 2 |
| Almacenes | 2 |
| Negocios | 1 |

Las llaves se prestan cara a cara, a menos de 5 metros. Solo el propietario, su cónyuge, los miembros de la facción dueña (si aplica) y quienes tengan una llave prestada pueden mover o editar el mobiliario; el resto solo entra y sale. Además, el dueño puede dar un **permiso temporal de muebles** a otro jugador sin prestarle llaves (ver [Sistema de muebles](sistema-de-muebles.md#permisos-de-muebles)).

No se pueden prestar llaves de industrias, complejos ni propiedades de facción.

### Comandos

- /prestarllave [id] — entrega una copia de la llave a un jugador cercano.
- /quitarllave [nombre_apellido] — revoca el acceso.
- /tirarllave [id propiedad] — descarta una llave prestada que tú tengas de esa propiedad.

## Muebles

Los muebles son objetos que compras y colocas libremente dentro de tu propiedad, para decorarla o darle funciones (camas, sofás, luces, puertas adicionales, mostradores…). El límite es de **2.048 muebles por propiedad**, se pagan **desde tu cuenta bancaria** y el catálogo supera los **1.700 modelos**, desde **$10** los más simples. Los muebles **personalizados** requieren **premium Oro o superior**. El valor de los muebles colocados suma un 50% al precio de venta de la propiedad.

<img width="663" height="636" alt="image" src="https://github.com/user-attachments/assets/f6367168-f714-453b-be9f-e7e3af42bbfe" />

El flujo típico: compras un mueble con `/comprarmueble`, lo seleccionas, lo editas con el ratón o con los comandos de ejes y lo dejas fijo al guardar. Puedes **empaquetarlo** para llevártelo a otra propiedad, aplicarle **texturas**, **clonarlo**, **convertirlo en puerta**, y editar varios a la vez con **grupos** y **prefabs**.

La guía [Sistema de muebles](sistema-de-muebles.md) explica todo con detalle: catálogo y colecciones, menú 3D de texturas, prioridad y distancia de dibujado, permisos temporales, grupos de muebles y prefabs.

### Comandos básicos

- /comprarmueble [modelo] — compra un mueble (sin parámetros muestra las categorías).
- /muebles — lista los muebles de la propiedad actual.
- /seleccionar, /cseleccionar, /deseleccionar — selecciona o suelta un mueble.
- /editarmueble — activa el modo edición.
- /quitarmueble — elimina el mueble seleccionado.
- /empaquetarmueble, /desempaquetarmueble — traslada un mueble a otra propiedad.

## Facturas de agua y luz

Toda propiedad acumula consumo mientras haya alguien dentro. El contador sube **cada 5 minutos y por cada persona** que permanezca en el interior, y suma a la vez luz y agua.

| Servicio | Costo por unidad |
| --- | --- |
| Electricidad | **$9** |
| Agua | **$7** |

El total acumulado de todas tus propiedades se descuenta en tu **payday** y aparece en el resumen junto al sueldo, la renta y los intereses. Los impuestos diarios van en su propio bloque separado (ver [Sistema de impuestos](sistema-de-impuestos.md)).

Cuantos más ocupantes y más horas pasen dentro, mayor será la factura. Un negocio muy concurrido paga bastante luz, así que conviene tenerlo en cuenta al calcular las ganancias. Las propiedades de la [isla de Santa Catalina](santa-catalina.md) no pagan luz ni agua.

## Empresas y negocios

Los negocios son propiedades comerciales que se operan con **empleados**, **stock** y **caja**. Hay varios subtipos con mecánicas propias:

- **Tienda** — vende productos físicos, requiere stock y reposición.
- **Club, bar y discoteca** — cobra entrada, vende bebidas y es donde mejor rinden los eventos.
- **Concesionario** — venta de vehículos.
- **Casa de apuestas** y **casino** — juegos de azar (ver [Sistema de casino](sistema-de-casino.md)).
- **Depósito de vehículos** — compraventa de vehículos incautados.
- **Empresa de transporte, taxi, pesca, limpieza, mecánica y seguridad** — basadas en el trabajo activo de sus empleados.
- **Despacho legal, banco, hospital y periódico** — negocios institucionales con funciones específicas.

**Diferencia clave**: los negocios con producto (tienda, club, casa de apuestas, casino) gestionan **stock, pedidos y ventas**; los de servicios (taxi, mecánica, banco, legal, periodismo…) viven del trabajo activo del empleado. Los talleres mecánicos y las empresas de seguridad también manejan stock de repuestos y material.

### Comandos de gestión

- /caja [retirar | depositar] [$dinero] — mueve dinero de la caja del negocio.
- /transferircaja [llave destino] [$dinero] — transfiere dinero de la caja a la de otro negocio.
- /mirarnegocio — muestra el estado de los requisitos para las ventas automáticas.
- /mirarbasura — muestra la suciedad acumulada y su efecto.
- /negnombre [nombre] — cambia el nombre del negocio (dueño, $5.000).
- /negmapicon [ícono] — cambia el ícono del mapa (dueño, $5.000).
- /negmotd [texto] — mensaje que ven los clientes al entrar (dueño).
- /negvehiculos — gestiona la flota de la empresa.
- /activaralarma — dispara la alarma manualmente desde el mostrador.
- /entrada [$precio] — establece el precio de entrada, de $0 a $1.000 (dueño).
- /mostrador, /mostrador2 — fija la posición de los mostradores de venta (dueño).
- /derechodeadmision [id] — expulsa a un cliente del local (dueño; temporal, puede volver).
- /vetar [id] [razón], /vetos, /desvetar [nombre_apellido] — veto permanente de un cliente (dueño).

## Caja del negocio

La caja es el dinero de la empresa. De ella salen los pedidos, los sueldos, los impuestos laborales, las mejoras del exterior y la limpieza; a ella entran las ventas, los premios de eventos y los subsidios.

Para usarla hay que estar dentro del negocio y tener el permiso de caja en tu cargo. `/caja` sin parámetros muestra el saldo y los impuestos vigentes.

- **Depositar** saca el dinero de tu cuenta bancaria y no paga impuestos.
- **Retirar** deposita el dinero en tu cuenta bancaria y paga un **impuesto corporativo del 28%** (21% federal más 7% estatal). El límite por operación es de **$1.000.000**.
- **Transferir** de la caja de un negocio a la de otro no paga impuestos, con un límite de **$10.000.000** por operación.

Si el dueño **no está conectado**, el negocio paga además **$81 por hora** de impuesto comercial al gobierno (salvo en la isla de Santa Catalina).

## Stock: configurar qué vendes y a cuánto

Un negocio con producto puede tener hasta **127 artículos** distintos en su catálogo. `/stock` abre la lista con la categoría, el producto, el precio unitario y las unidades disponibles, y permite añadir, quitar y cambiar precios. Las listas largas se reparten en páginas: `/stock` muestra 25 artículos por página.

### Precio de venta

Cada producto tiene un **coste base** fijado por el servidor. A partir de él:

| Concepto | Cálculo |
| --- | --- |
| Coste de reposición | **80% del coste base** (lo que pagas al pedirlo) |
| Precio mínimo de venta | **100% del coste base** |
| Precio máximo de venta | **1.000% del coste base** (x10) |
| Precio máximo en clubes | **100.000% del coste base** (x1000) |

El diálogo de precio te muestra el coste, el mínimo, el máximo y tu **beneficio por unidad** (precio de venta menos coste de reposición). Los cambios de precio tardan **60 segundos** en aplicarse. Si un precio queda fuera de rango, el sistema lo devuelve automáticamente al coste base.

### Categorías de productos

Los productos se agrupan en estas categorías: **Armas, Comidas, Bebidas, Tabaco, Deportes, Farmacia, Ferretería, Muebles, Ropa, Electrónica, Cultivo, Repuestos, Seguridad, Joyas y Regalos**.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/tienda-por-categorias.png" alt="Menú de /comprar de un supermercado ordenado por categorías" width="651" height="465">

Sin premium, un negocio solo puede vender productos de **una única categoría**, con dos excepciones: Bebidas y Tabaco cuentan como Comidas, y Regalos cuenta como Cultivo. Con premium puedes mezclar categorías distintas en el mismo catálogo. Un negocio común no puede añadir productos de **Armas, Farmacia, Ferretería, Electrónica ni Joyas**; **Repuestos** solo se añade en talleres mecánicos y **Seguridad** solo en empresas de seguridad.

### Regalos, vapers y habanos

Los negocios que venden flores tienen además la categoría **Regalos**: ramos (rosas rojas, blancas y rosadas, tulipanes, girasoles, lirios, hortensias, peonías, flores silvestres y ramo de novia), peluches, cajas de bombones, estuches de anillo (cerrado y abierto) y cajas de regalo de colores. Los negocios que venden vapers tienen vapers de sabores (menta, mango, limón, chicle, blue razz, uva y sandía), y los que venden la Caja de Habanos pueden ofrecer también el habano robusto y las cajas **Vinewood** (coste base de $300) y **Royal Liberty** (coste base de $500), de 10 habanos cada una.

### Cómo compran los clientes

El cliente se acerca al **mostrador** y usa `/comprar`. Si el negocio vende más de **15 productos** de **2 o más categorías**, primero eliges la categoría (con la cantidad de productos de cada una) y después el producto; con **Atrás** o **ESC** vuelves a las categorías. En los negocios que venden boletos de lotería, la primera opción del menú es **Lotería**.

Los productos se muestran en un **catálogo con vista previa en 3D**, su nombre y su precio, con páginas para navegar. Quien prefiera la lista de texto clásica puede cambiarlo desde `/preferencias`; en ese modo la lista muestra 40 productos por página.

El dinero sale primero del efectivo del cliente y, si no le alcanza, de su cuenta bancaria. Entra íntegro a la **caja del negocio**.

Un empleado en servicio puede además ofrecer el catálogo en persona con `/venderstock [id] [propina 10-60]`: el cliente paga el precio más la propina pactada (del 10% al 60% del precio), y **la propina va al bolsillo del empleado** (más 3 Burger Points por venta con propina, ver [Sistema de Burger Points](sistema-de-burger-points.md)).

Las armas, cargadores y munición tienen requisitos extra para el comprador: **50 horas de juego**, **cuenta certificada** en el UCP, tener una casa y no tener antecedentes; para comprar un arma además hace falta la licencia de portación. Tras comprar un arma queda un tiempo de espera de **2 semanas**, o **1 semana** con premium Oro o superior.

Para encontrar el negocio que vende lo que necesitas, `/gps` permite buscar por categoría o por producto y marca la ruta a los negocios abiertos con stock más cercanos (ver [Sistema de teléfono y GPS](sistema-de-telefono-y-gps.md)).

### Autoservicio (drive-thru)

Algunos locales tienen un punto de **autoservicio** en el exterior, marcado en el suelo. Estando dentro de un vehículo se usa `/autoservicio` para abrir el catálogo, que en el autoservicio solo incluye comidas y bebidas. El precio en el autoservicio tiene un **recargo del 20%**, que se queda el negocio.

### Comandos

- /stock — abre el inventario del negocio y permite ajustar precios.
- /meterstock — añade al inventario el producto que tengas en la mano (debe estar sin usar).
- /venderstock [id] [propina] — ofrece el catálogo a un cliente con propina.
- /comprar — compra en el mostrador (cliente).
- /autoservicio — compra desde el vehículo en el drive-thru.

## Pedidos a las empresas de reparto

Cuando el stock se agota hay que reponerlo. `/pedido` (alias `/pedidos`) abre la lista de productos con su costo unitario, las unidades en almacén y el estado del pedido, con 20 productos por página.

### Costos

| Concepto | Valor |
| --- | --- |
| Costo del producto | **80% del coste base**, por unidad |
| Costo de transporte | **$3 por unidad** |
| Cantidad por pedido | de **1 a 100 unidades** |
| Espera entre pedidos del mismo producto | **3 horas** |

El diálogo te muestra antes de confirmar el **costo unitario**, el **transporte por unidad**, tu **precio de venta configurado** y el **beneficio neto por unidad** (precio de venta menos coste menos transporte), para que puedas calcular si el pedido te conviene.

Todo se paga de la **caja del negocio** en el momento de pedir; si no hay saldo, el pedido se rechaza.

### Quién entrega

Las entregas las hacen **camioneros** de las empresas de reparto: un jugador toma tu pedido desde la lista de cargas disponibles, recoge la mercancía en la industria correspondiente y la lleva hasta la puerta de tu negocio (ver [Sistema de camionero](sistema-de-camionero.md)). El pedido pasa por los estados *disponible → esperando → en ruta → entregado*. En la isla de Santa Catalina la mercancía se entrega y se recoge en el muelle del ferry de Los Santos.

Si nadie recoge el pedido, **la mercancía llega igualmente por retraso** al cabo de una hora: no pierdes el dinero, solo el tiempo.

### Reposición automática

`/autopedidos` (requiere **premium**) deja que el sistema reponga solo: cuando un producto baja de **10 unidades**, pide automáticamente **50 unidades** más y las paga de la caja. Si la caja está vacía, el pedido automático no se hace, así que conviene dejar siempre saldo.

## Ganancias con clientes NPC

Aunque el dueño no esté conectado, un negocio con producto **genera ventas automáticas a clientes NPC una vez por hora**. Es la principal fuente de ingresos pasivos de un negocio, pero hay que ganársela.

### Requisitos diarios

Para que los clientes NPC compren, el negocio debe cumplir **cada día**:

| Requisito | Mínimo |
| --- | --- |
| Ventas a clientes reales | **5 al día** |
| Empleados contratados | **2**, de cuentas distintas |

- Las **ventas a clientes reales** no cuentan si las hace el dueño, ni si las hace alguien que tenga un contrato vigente con el negocio, sin importar con qué personaje de su cuenta compre.
- Los **empleados** se cuentan por cuentas distintas, no por personajes: dos personajes de la misma cuenta cuentan como un solo empleado.
- La **basura** acumulada reduce cuántos productos se venden por hora (ver más abajo). Con **56 kg o más**, las compras de clientes reales ya no ingresan dinero a la caja: el producto se entrega igual, pero el negocio no cobra.

`/mirarnegocio`, dentro del local, muestra los requisitos con su valor actual y su mínimo (incluida la basura, con el tope de 56 kg), en verde si están cumplidos y en rojo si no.

### Qué compran y cuánto pagan

- Los clientes NPC solo compran productos con un **coste base de hasta $1.000**. Todo lo que cueste más no entra en las ventas automáticas.
- Cada unidad vendida paga **el 150% de su coste base** (x1,5), sin importar el precio que tengas puesto en el mostrador. El precio del mostrador afecta solo a las compras de jugadores reales.
- El dinero entra directo a la **caja del negocio**.
- El sistema elige productos al azar de tu catálogo, así que conviene tener **varios productos baratos con stock** en lugar de uno solo.

### Cuántas unidades por hora

La basura acumulada determina cuántos productos se venden en cada ciclo horario:

| Basura acumulada | Productos vendidos por hora |
| --- | --- |
| 0–9 kg | **35** |
| 10–20 kg | **30** |
| 21–30 kg | **25** |
| 31–40 kg | **20** |
| 41–50 kg | **15** |
| 51–60 kg | **10** |
| 61–70 kg | **5** |
| 71 kg o más | **0 (sin ventas)** |

### Cómo maximizar las ganancias pasivas

- **Mantén el local limpio.** Es el factor que más pesa: pasar de 0 kg a 40 kg te cuesta el 43% de las ventas.
- **Vende barato y variado.** Los artículos de más de $1.000 de coste no entran en las ventas NPC.
- **Ten siempre stock.** Sin unidades no hay venta; la reposición automática cubre este punto.
- **Deja saldo en la caja.** De ella salen los pedidos automáticos, los sueldos y los impuestos.
- **Contrata y conserva empleados.** Hacen falta dos de cuentas distintas; sin ellos no hay ventas automáticas.
- **Consigue 5 ventas reales al día.** Un cliente habitual, un evento o un empleado vendiendo con `/venderstock` bastan para desbloquear el ciclo.

## Basura y limpieza

Cada venta —de cliente real o de cliente NPC— ensucia el local: genera **0 o 1 kg de basura**, con un tope de **100 kg**. Las **bolsas de basura tiradas** dentro del local o en su entrada también cuentan para la suciedad total.

Al entrar a un local sucio aparecen mensajes de ambiente ("el local está desordenado", "zona crítica, cero higiene"…) que desincentivan a los clientes. A partir de **70 kg** el negocio tiene **plagas de ratas** y ya no puede limpiarlo cualquiera: hace falta un recolector de basura profesional.

`/mirarbasura` muestra los kilos acumulados, cuántos productos por hora estás perdiendo y si hay plagas.

### Limpiar

`/limpiarnegocio` limpia una tanda de basura. Pueden hacerlo los empleados del negocio (en servicio), quienes tengan llaves y los recolectores de basura. Hace falta una **escoba** o **jabón** en la mano derecha y permanecer dentro del negocio entre **30 y 60 segundos** según la habilidad de quien limpia: la escoba recoge un 33% más de basura y el jabón tarda un 33% menos (y se va gastando). Al terminar aparece una bolsa de basura en el suelo que hay que retirar.

**Cuánto cuesta:** si limpia un **empleado del negocio o alguien con llaves**, es gratis. Si limpia un **recolector externo**, el negocio paga **$25 por cada kilo retirado**, descontados de la caja en el momento. Si no hay saldo suficiente, se cobra lo que haya (ver [Sistema de basura](sistema-de-basura.md)).

## Incendios y extintores

Un negocio en actividad puede **incendiarse**. El riesgo se evalúa cada vez que ocurre algo en el local: una venta, un ciclo de ventas automáticas, una reparación de un mecánico, una entrega de un camionero o una recogida de basura.

### Cuándo se origina

- Solo se comprueba si hay **2 o más bomberos del LSFD en servicio**.
- La probabilidad de que la comprobación llegue a algo es de un **2%** por evento. Cuanto más movimiento tenga el local, más veces se tira el dado.
- Si sale, se **gasta un extintor** del almacén del negocio y no pasa nada.
- **Si no quedan extintores, se declara el incendio.**

Tras un incendio, ese negocio no puede volver a incendiarse durante **3 días**, y en todo el servidor no puede haber otro incendio estructural durante **1 hora**.

### Daños

El fuego arranca en el almacén o en uno de los mostradores y puede propagarse en dos oleadas, cada una con un **50% de probabilidad**. Cuanto más se extiende, más destruye:

| Alcance del fuego | Stock que sobrevive |
| --- | --- |
| Foco inicial | **70%** |
| Propagación media | **50%** |
| Propagación máxima | **30%** |

Si el negocio no tenía stock, la pérdida se descuenta del dinero de la caja en la misma proporción. Además, el incendio **apaga la emisora del local**, **dispara la alarma**, llena el interior de llamas y humo que **queman a quien esté dentro**, y genera humo visible en la puerta. Se avisa por radio a policías y paramédicos, y el dueño recibe una notificación con la pérdida exacta.

### Extintores

Cada negocio puede almacenar **hasta 10 extintores** cargados. Se gestionan con `/extintores`, estando junto al **almacén** o a uno de los **mostradores**. Pueden usarlo el dueño, los empleados y los bomberos del LSFD en servicio.

- `/extintores` sin parámetros — muestra cuántos hay guardados.
- `/extintores sacar` — saca un extintor a la mano (necesitas la mano derecha libre). Con él en la mano puedes apagar fuegos.
- `/extintores rellenar` — guarda en el almacén un extintor que tengas en la mano. Debe estar **completamente lleno**.

Los extintores se compran como cualquier otro objeto en las tiendas que los tengan en stock, y se recargan en los parques de bomberos. Mantener el almacén lleno es la única forma de prevenir incendios: cada extintor absorbe un aviso de riesgo.

### Bomberos

El **LSFD** responde a los incendios estructurales. Sus miembros **en servicio son inmunes al fuego**, así que pueden entrar al local a apagarlo sin quemarse. Avisar a los bomberos cuanto antes reduce la propagación y salva stock (ver [Facciones legales](facciones-legales.md)).

## Empleados

Los empleados trabajan bajo **cargos** que crea el dueño, cada uno con su nombre, su sueldo y sus permisos. Un negocio puede tener hasta **10 cargos** y **50 empleados**.

### Permisos por cargo

| Permiso | Qué habilita |
| --- | --- |
| Caja | Depositar, retirar y transferir dinero del negocio |
| Stock | Ver y modificar el catálogo y los precios, y gestionar el exterior |
| Pedidos | Hacer pedidos y activar la reposición automática |
| Ascensos | Cambiar el cargo de otros empleados |
| Contratar | Ofrecer contrato a nuevos empleados |
| Despedir | Echar a empleados |
| Llaves | Abrir y cerrar el negocio y usar el almacén |
| Vehículos | Usar la flota de la empresa |

Todo cargo nuevo empieza **sin ningún permiso**: hay que dárselos uno a uno.

### Cómo se contrata

Para trabajar en una empresa tiene que **contratarte alguien de ella**: el dueño o un empleado con el permiso **Contratar**. Se hace con `/contratar [id]`, dentro del negocio y con el jugador a menos de **5 metros**. Antes, el dueño debe haber creado los cargos con `/cargos`. El jugador acepta con `/aceptar` y entra con el cargo más básico; después el dueño o un gerente puede ascenderlo con `/darcargo`.

`/negunirse` solo lo puede usar el **dueño** de la empresa, para registrarse como empleado de su propio negocio. Quien no es dueño no puede unirse por su cuenta.

<img width="587" height="61" alt="image" src="https://github.com/user-attachments/assets/78dc4cb0-d9d1-412e-86a7-1173c8d90077" />

### Sueldos y su tope

El sueldo de cada cargo lo fija el dueño, con topes que dependen del mercado: el sistema calcula el **promedio de sueldos del mismo tipo de negocio en todo el servidor** y permite pagar hasta **1,5 veces** ese promedio, con un mínimo garantizado de **$1.000** y un máximo absoluto de **$20.000**. El diálogo de sueldos te muestra el promedio del mercado y calcula los impuestos que pagarás.

### Jornada laboral

Se entra y se sale de servicio con `/negservicio` (alias `/trabajar`). El sueldo se cobra al completar una **jornada**, que solo avanza mientras no estés en pausa:

| Tipo de negocio | Jornada |
| --- | --- |
| Tiendas, clubes, depósito de vehículos, bufetes y periódicos | **30 minutos** |
| Todas las demás empresas | **60 minutos** |

### Qué cobras y quién lo paga

Al completar una jornada recibes en tu **cuenta bancaria** dos cosas:

1. El **sueldo de tu cargo**, que sale de la caja del negocio.
2. Un **subsidio estatal**, que paga el gobierno y se suma al sueldo:

| Tipo de empresa | Subsidio |
| --- | --- |
| Empleados de tiendas y clubes | **$1.000** por jornada |
| Empleados del resto de empresas | **$100** por jornada |
| Miembros de facción | **$1.000** por payday |

En los negocios de rol (tiendas, clubes, depósitos de vehículos, bufetes y periódicos) el gobierno además inyecta **$100 por jornada** directamente a la caja del negocio, como ayuda al empleador.

Durante los eventos de experiencia el total cobrado se multiplica: **+25%** en doble experiencia y **+33%** en triple. Los usuarios premium Platino y Rubí tienen un **+25%** permanente cuando no hay evento activo.

La empresa paga además, desde su caja, los **impuestos laborales** sobre el sueldo de rango: **6,2%** de seguro social, **1,45%** de seguro médico y **2%** de otros costos laborales, un **9,65%** en total. El subsidio estatal no tributa (ver [Sistema de impuestos](sistema-de-impuestos.md)).

### Mantenerse en el puesto

Mientras estés en servicio debes permanecer en tu zona de trabajo: dentro del negocio, a menos de **150 metros** del local, dentro de un vehículo de la empresa o junto a tu vehículo de servicio.

Si te alejas recibes un aviso y tienes un margen de **5 minutos** para volver (**15 minutos** para los basureros; los periodistas y los técnicos de seguridad no tienen límite, porque trabajan en la calle). Pasado el plazo te cobran una **multa de $2.500** que va a parar a la caja del negocio, y te sacan de servicio perdiendo la jornada acumulada.

### Trabajar en varios sitios

Puedes tener varios contratos a la vez y cambiar entre ellos sin renunciar:

| Nivel premium | Contratos simultáneos |
| --- | --- |
| Sin premium | 2 |
| Bronce | 3 |
| Plata | 4 |
| Oro | 5 |
| Platino y Rubí | 6 |

`/miscontratos` lista los tuyos y, al elegir uno, permite **activarlo** o **renunciar** a él, aunque no sea el contrato activo. No se puede cambiar de contrato estando en servicio, y hay que esperar **60 segundos** entre cambios. Para renunciar necesitas haber trabajado al menos **1 hora** en esa empresa; el dueño no puede renunciar a su propia empresa. También puedes renunciar al contrato activo con `/renunciar confirmar`.

### Anunciar tus servicios

`/anunciarservicio` publica un aviso a todo el servidor diciendo que estás trabajando y cómo contactarte. Está disponible para **cualquier empleado en servicio**, sin necesidad de estar en un vehículo. El mensaje cambia según el negocio:

| Empleado de | Qué se publica |
| --- | --- |
| Taller mecánico | Cómo pedir una grúa con `/pedirgrua` |
| Empresa de taxis | Tu tarifa por metro y cómo pedir un taxi con `/pedirtaxi` |
| Hospital | Cómo llamar a emergencias |
| Cualquier otra empresa | El `/prop` del negocio para que te localicen |

Cada empleado puede anunciar una vez cada **30 minutos**, y cada negocio solo puede aparecer anunciado una vez cada **15 minutos**, aunque tenga varios empleados en servicio.

Quien no quiera recibir estos avisos puede desactivarlos en **/preferencias ➡️ Anuncios de servicio**.

<img width="476" height="24" alt="image" src="https://github.com/user-attachments/assets/3b74c4f9-acf5-458c-98a4-fce93212d7ba" />

### Comandos

- /contratar [id] — ofrece contrato a un jugador cercano (permiso Contratar).
- /negunirse — el dueño se registra como empleado de su propio negocio.
- /negservicio — entra o sale de servicio. Alias: `/trabajar`.
- /anunciarservicio — anuncia que estás trabajando.
- /miscontratos — lista, activa y renuncia a tus contratos. Alias: `/contratos`, `/misempleos`, `/cambiarempleo`.
- /mostrarcontrato [id] — enseña tu contrato a otro jugador.
- /renunciar confirmar — renuncia al contrato actual.
- /despedir [nombre_apellido] — despide a un empleado.
- /cargos — crea y edita cargos, sueldos y permisos (dueño).
- /darcargo [id] [cargo] — asigna un cargo a un empleado.
- /empleados — este comando está desactivado: la plantilla se consulta desde la sección «Mi empresa» del UCP (ver [Panel de control](panel-de-control.md)).

## Exteriores y terrazas

Un negocio puede reclamar un **área en la calle frente a su puerta**: una terraza, un patio, una zona de mesas. Las **casas** también pueden tener su **terraza**. El exterior amplía el local hacia afuera y cuenta como parte de la propiedad.

### Situar el exterior

`/exterior situar`, estando de pie donde quieras el centro del área. Requisitos comunes:

- Estar a menos de **100 metros** de la entrada principal, y que esa entrada dé a la calle.
- Que el área no se **solape** con el exterior de otra propiedad.

Además:

| | Negocio | Casa (terraza) |
| --- | --- | --- |
| Quién puede | Dueño o empleado con permiso de **stock** | Dueño o su cónyuge |
| Premium | No hace falta | Solo **Rubí** puede crearla |
| Costo de situar o mover | **$100.000**, de la caja (debe tener ese saldo) | **$50.000**, del dinero en mano |

En un negocio queda un **mostrador exterior**: los clientes pueden usar `/comprar` ahí mismo, sin entrar al local. En una casa, el dueño o el inquilino pueden usar `/refrigerador` desde el punto de la terraza, y la radio de la casa también se escucha en ella.

### Niveles de expansión

`/exterior expandir` abre la tabla de mejoras. Cada nivel amplía el radio del área y el número de muebles que caben:

| Nivel | Radio | Muebles máximos | Precio |
| --- | --- | --- | --- |
| 1 | 10 metros | 16 | gratis (nivel inicial) |
| 2 | 10 metros | 32 | **$25.000** |
| 3 | 20 metros | 64 | **$100.000** |
| 4 | 20 metros | 128 | **$250.000** |
| 5 | 30 metros | 256 | **$500.000** |
| 6 | 30 metros | 512 | **$750.000** |

Las mejoras se pagan de la caja del negocio; en una casa, del dinero en mano. **Bajar de nivel es gratis**, pero antes hay que quitar los muebles que sobren. Subir de nivel también comprueba que el área ampliada no se solape con la de otra propiedad.

### Muebles de exterior

`/exterior crearmueble` abre el mismo catálogo de muebles del interior y coloca la pieza delante de ti; el precio se cobra al confirmar la posición. Se pagan de la **caja del negocio** (en una casa, del dinero en mano) y **no se reembolsan** al eliminarlos. Para editar o borrar un mueble tienes que estar a menos de **10 metros** de él.

Con ellos se montan terrazas, mesas, sombrillas, barras al aire libre, vallas, jardineras y escenarios. Los muebles personalizados requieren **premium Oro**. Cada mueble de exterior admite texturas en hasta 16 partes. Quien tiene un [permiso temporal de muebles](sistema-de-muebles.md#permisos-de-muebles) puede editar los muebles exteriores, pero los paga de su bolsillo y no puede situar, ampliar ni eliminar el exterior.

### Qué aporta el exterior

- **Mostrador de venta en la calle** en los negocios: los clientes compran sin entrar.
- **Cuenta para los eventos**: los jugadores a pie dentro del área exterior suman como participantes del evento del negocio, igual que los que están dentro del local. Una terraza llena es la forma más rápida de subir de nivel.
- **Ambientación**: da presencia a la propiedad en la vía pública y facilita el rol de bar, cafetería o puesto callejero.

### Comandos

- /exterior situar — coloca o mueve el área exterior.
- /exterior expandir — mejora el nivel del exterior.
- /exterior eliminar — elimina el exterior y todos sus muebles, previa confirmación.
- /exterior muebles — lista los muebles del exterior.
- /exterior crearmueble — compra y coloca un mueble exterior.
- /exterior clonarmueble [id] — copia un mueble exterior.
- /exterior editarmueble [id] — mueve y rota un mueble.
- /exterior eliminarmueble [id] — elimina un mueble (sin reembolso).
- /exterior texturamueble [id] [material 0-15] [textura] — aplica una textura a una parte del mueble (con la ID 0 la quita).
- /exterior borrartexturas [id] — quita todas las texturas del mueble.

## Eventos de negocio

Los eventos premian a los negocios que consiguen juntar gente y vender. No hay que iniciarlos: el sistema mide solo y sube de nivel cuando se cumplen los requisitos.

### Requisitos por nivel

Cada nivel exige **10 participantes concurrentes más** y **5 ventas a clientes más** que el anterior:

| Nivel | Participantes a la vez | Ventas a clientes |
| --- | --- | --- |
| 1 | 10 | 5 |
| 2 | 20 | 10 |
| 3 | 30 | 15 |
| 4 | 40 | 20 |
| 5 | 50 | 25 |

No hay nivel máximo: el límite es cuánta gente consigas juntar.

### Qué cuenta

- **Participantes**: jugadores **a pie**, vivos y sin pausa, dentro del negocio o en su **zona exterior**. Se guarda el **máximo alcanzado a la vez**, no la suma de visitas.
- **Ventas**: compras de clientes reales. No cuentan las del dueño ni las de sus empleados, con ningún personaje de su cuenta.

### Premios

Al subir de nivel entra dinero **directo a la caja del negocio**. El premio crece con cada nivel: es el premio base del tipo de local multiplicado por el número de nivel.

| Tipo de local | Premio por nivel | Nivel 1 | Nivel 3 | Nivel 5 | Total hasta el nivel 5 |
| --- | --- | --- | --- | --- | --- |
| Club reservado | $75.000 por nivel | $75.000 | $225.000 | $375.000 | $1.125.000 |
| Club | $50.000 por nivel | $50.000 | $150.000 | $250.000 | $750.000 |
| Resto de negocios | $25.000 por nivel | $25.000 | $75.000 | $125.000 | $375.000 |

Además, **todos los presentes** en el local o en su exterior reciben **10 Burger Points** al subir de nivel (**20** en doble experiencia, **30** en triple). El dueño y los empleados reciben el aviso del ascenso.

`/evento` abre una ventana con el nivel actual, el premio del siguiente nivel, el progreso de ambos requisitos y la explicación completa del sistema.

El evento **se reinicia tras 4 horas sin participantes**, volviendo al nivel 0.

## Membresías de negocios

Algunos negocios ofrecen una **membresía** a sus clientes: una cuota que se paga desde el banco y da beneficios mientras esté vigente. La primera es la del **Golf Club**: **$100.000 por semana**, que se compra, renueva o cancela con `/membresia` en el punto de membresías del club. La cuota se cobra sola junto a los impuestos diarios, y puedes dejarla pagada hasta 4 semanas por adelantado.

Entre sus beneficios están el acceso a las puertas del club, descuentos en la tienda del negocio con `/comprar`, en concesionarios, peajes y multas, y un **5% más** al vender una casa al Estado. El detalle completo está en la sección de membresía de [Sistema de golf](sistema-de-golf.md#membresía-del-golf-club).

## Alarmas y cámaras de seguridad

Los negocios pueden tener **alarma**, con tres niveles de potencia:

| Nivel | Duración del sonido | Alcance |
| --- | --- | --- |
| 1 | 2 minutos | 20 metros |
| 2 | 4 minutos | 40 metros |
| 3 | 5 minutos | 60 metros |

La alarma salta sola ante un incendio o un robo, y se puede disparar a mano con `/activaralarma` desde el mostrador, teniendo llaves o permiso de llaves. Una alarma mal mantenida puede fallar y no sonar. Sobre robos y atracos a negocios, consulta el [Sistema de delincuente](sistema-de-delincuente.md).

Las casas y los negocios pueden además tener **cámaras de seguridad**. No son muebles: no se compran ni se colocan por cuenta propia, las instala un técnico de una empresa de seguridad. Graban lo que pasa frente a su lente y el dueño puede ver las imágenes en vivo y revisar el registro. Los detalles están en [Sistema de cámaras de seguridad](sistema-de-camaras-de-seguridad.md).

## Inactividad y liberación automática

Si un propietario deja de entrar a su propiedad, el sistema la **libera**. La liberación se aplica cuando el servidor se reinicia. Los plazos son:

| Tipo de propiedad | Días de inactividad |
| --- | --- |
| Casas compradas | **30 días** |
| Casas alquiladas | **30 días** |
| Negocios | **14 días** |
| Negocios con 85 kg o más de basura | **7 días** |
| Almacenes | **60 días** |

Las propiedades de la [isla de Santa Catalina](santa-catalina.md) no se liberan por inactividad.

Cuando una propiedad se libera, el dueño recibe una notificación con el motivo. En un negocio se **despide a los empleados**, se **vacía la caja**, se **expulsa a los que estén dentro**, se **resetean las llaves** y se limpian los inventarios.

Las **casas y negocios** liberados cuyo valor supera **$100.000** no vuelven directo a la venta: salen a **subasta pública** y se los lleva quien más ofrezca (ver [Sistema de subastas](sistema-de-subastas.md)). Los de $100.000 o menos quedan libres para `/comprar`, y los almacenes también vuelven a la venta normal.

Basta con entrar un momento a cada propiedad cada cierto tiempo —o hacer cualquier gestión en ella— para reiniciar el contador. En los negocios conviene además no dejar que la basura se acumule: un local sucio y abandonado se pierde en la mitad de tiempo.

### Control de negocios inactivos

Los negocios inactivos pasan además por un **control de actividad**. Mientras un negocio figura sin justificar en ese control, su dueño **solo puede venderlo al Estado**, no a otro jugador. Y si una cuenta no justificó la inactividad de un negocio, ni esa cuenta ni la de su **cónyuge** pueden volver a ser dueñas de esa propiedad durante los siguientes **3 meses**: el bloqueo alcanza a la compra al Estado, a las ofertas en la subasta y a las ventas entre jugadores (ver [Sistema de subastas](sistema-de-subastas.md#inactividad-sin-justificar)).
