# Sistema de propiedades

## Introducción

El sistema de propiedades agrupa todos los inmuebles del servidor: **casas**, **almacenes**, **negocios**, **complejos de apartamentos y hoteles** e **industrias**. Puedes comprarlos, venderlos, alquilarlos, amueblarlos, prestar llaves y —en el caso de los negocios— convertirlos en empresas con empleados, stock, caja, exterior y eventos.

<img width="376" height="52" alt="image" src="https://github.com/user-attachments/assets/81baa9c4-2129-48af-a974-8dfe59c7b4c7" />

Una casa te da un techo, un ropero, una caja fuerte, un refrigerador y un buzón. Un almacén te da espacio de sobra para guardar objetos. Un negocio es una máquina de generar dinero, pero solo si lo atiendes: los clientes automáticos exigen ventas reales, empleados contratados y un local limpio, y descuidarlo acaba en incendios y en la pérdida del inmueble por inactividad.

Todas las propiedades pagan **facturas de agua y luz** mientras haya gente dentro, y las casas pagan además impuesto a la propiedad (ver [Sistema de impuestos](sistema-de-impuestos.md)).

### Comandos generales

- /entrar — entra por el marcador de entrada en el que estás parado.
- /salir — sale por el marcador de salida.
- /abrir, /cerrar — abre o cierra la propiedad (dueño o quien tenga llaves).
- /puerta — abre o cierra una puerta interior cercana.
- /info — información general de la propiedad en la que estás.
- /timbre — toca el timbre para avisar a los ocupantes.
- /visitar — solicita visitar una propiedad cerrada.
- /metermoto — mete una motocicleta a la propiedad (si la entrada lo permite).
- /phora [0-23] — fija una hora personalizada en el interior (dueño).
- /pclima [0-20] — fija un clima personalizado en el interior (dueño).
- /ayuda casa, /ayuda negocio, /ayuda almacen, /ayuda complejo, /ayuda muebles — listados de comandos dentro del juego.

## Compra y venta de inmuebles

Las propiedades en venta muestran un cartel en la entrada. Párate en el marcador y usa `/comprar`.

### Cómo se calcula el valor

El precio de una propiedad no es solo su valor base. El sistema suma:

**Precio = (Valor base × multiplicador) + (60% del valor de la flota) + (50% del valor de los muebles) + Valor del stock + $250,000 por cada surtidor de combustible**

- **Valor base**: el precio original del inmueble.
- **Flota**: la suma del valor de los vehículos de la empresa, al 60%.
- **Muebles**: la suma del precio de los muebles colocados, al 50%.
- **Stock**: el valor de reposición del inventario del negocio.
- **Surtidores**: cada surtidor de combustible instalado suma $250,000 (ver [Sistema de combustible](sistema-de-combustible.md)).

### Descuento premium al comprar

Al comprarle al Estado, tu nivel premium reduce el multiplicador del valor base:

| Nivel premium | Multiplicador del valor base |
| --- | --- |
| Sin premium | 100% |
| Premium 1 | 90% |
| Premium 2 | 80% |
| Premium 3 | 70% |
| Premium 4 y 5 | 60% |

Los componentes de flota, muebles, stock y surtidores se pagan completos en todos los casos.

### Vender

Puedes vender a **otro jugador** dentro de la propiedad con `/venderprop`, pactando un precio entre el **50% (x0.5)** y el **1000% (x10.0)** del precio calculado. Fuera de ese rango la diferencia tiene que ir por transferencia bancaria aparte.

Al vender **al Estado** la oferta es un porcentaje del valor base:

| Nivel premium | Oferta del Estado |
| --- | --- |
| Sin premium | 30% |
| Premium 1 | 35% |
| Premium 2 | 40% |
| Premium 3 | 45% |
| Premium 4 y 5 | 50% |

No puedes vender una propiedad con **caja negativa**, con **pedidos en ruta**, con **paquetes u objetos ilegales adentro** ni con un **laboratorio de drogas** activo. Tampoco puedes venderle una propiedad premium a alguien que no tenga premium.

### Cuántas propiedades puedes tener

| Nivel premium | Propiedades totales | Negocios | Negocios del mismo tipo |
| --- | --- | --- | --- |
| Sin premium | 2 | 1 | 1 |
| Premium 1 | 2 | 2 | 1 |
| Premium 2 | 2 | 3 | 1 |
| Premium 3 | 4 | 4 | 2 |
| Premium 4 | 6 | 5 | 3 |
| Premium 5 | 8 | 8 | 4 |

### Comandos

- /comprar — compra la propiedad en la que estás (si está en venta).
- /venderprop [id] [$precio] — vende tu propiedad a un jugador cercano.
- /vender — vende la propiedad al Estado.
- /aceptar, /rechazar — acepta o rechaza una oferta.

## Entradas, salidas y puertas

Una propiedad puede tener **hasta 6 entradas**, cada una con su posición, su puerta y su interior. Algunas permiten meter vehículos. Al acercarte a una entrada aparece un marcador: úsalo con `/entrar`; desde dentro, `/salir` te devuelve a la calle.

Las puertas pueden estar **abiertas**, **cerradas** o **rotas**. Si está cerrada, solo el dueño o quien tenga llaves pueden pasar. `/puerta` abre y cierra las puertas interiores que hayas creado con muebles.

Los negocios y propiedades destacadas aparecen con su **ícono propio en el mapa**; el dueño puede cambiarlo con `/negmapicon` por **$5,000**.

## Casas

Las casas son viviendas personales. Sirven para vivir, guardar dinero y objetos, almacenar ropa, conservar drogas en el refrigerador y decorar el interior con muebles.

Toda casa tiene un **buzón** en su entrada principal (ver más abajo) y admite **2 llaves compartidas**.

### Alquilar tu casa a otro jugador

El dueño puede convertir a otro personaje en **inquilino** con `/alquilar [id] [$precio]`. La renta debe estar entre **$150 y $1,000** y el inquilino la paga en cada payday; el dinero va al dueño. El inquilino recibe las llaves y puede entrar y salir libremente. Un personaje solo puede ser inquilino de una propiedad a la vez.

### Comandos

- /ropa — abre el ropero para cambiar tu vestuario.
- /almacen — abre la caja de la casa.
- /refrigerador — abre el refrigerador (conserva la pureza de las drogas, ver [Sistema de drogas](sistema-de-drogas.md)).
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

Los almacenes están pensados para **guardar grandes cantidades de objetos**. Tienen un área de almacenamiento ampliada donde puedes depositar items del inventario, y admiten **2 llaves compartidas**.

No tienen empleados, ni stock de venta, ni clientes. El dueño puede mover el punto de almacenamiento con `/almacen situar`.

## Complejos y hoteles

Los complejos agrupan muchas **habitaciones** bajo un mismo dueño. El propietario del complejo fija un precio único por día con `/fijaralquiler` (entre **$100 y $50,000 por día**) y consulta el estado de las habitaciones con `/habitaciones`.

Cualquier jugador puede reservar una habitación libre parándose junto a su puerta y usando `/rentar`: elige de **1 a 15 días** y paga todo por adelantado, en efectivo o desde el banco. Solo se puede tener **una habitación reservada a la vez**, y el hotel guarda el registro de la reserva, que la policía puede consultar presencialmente.

## Llaves y permisos

Puedes **compartir tu propiedad** prestando llaves. Los límites por persona son:

| Tipo | Llaves que puede recibir un jugador |
| --- | --- |
| Casas | 2 |
| Almacenes | 2 |
| Negocios | 1 |

Las llaves se prestan cara a cara, a menos de 5 metros. Solo el propietario, su cónyuge, los miembros de la facción dueña (si aplica) y quienes tengan llave con permiso de muebles pueden mover o editar el mobiliario; el resto solo entra y sale.

No se pueden prestar llaves de industrias, complejos ni propiedades de facción.

### Comandos

- /prestarllave [id] — entrega una copia de la llave a un jugador cercano.
- /quitarllave [nombre_apellido] — revoca el acceso.
- /tirarllave — deja caer la llave al suelo para que otro la recoja.

## Muebles

Los muebles son objetos que compras y colocas libremente dentro de tu propiedad, para decorarla o darle funciones (camas, sofás, luces, puertas adicionales, mostradores…). El límite es de **2,048 muebles por propiedad**.

El flujo típico: compras un mueble con `/comprarmueble`, lo seleccionas con `/seleccionar`, entras en modo edición con `/editarmueble`, lo mueves o rotas con los comandos de ejes y lo dejas fijo al deseleccionarlo.

<img width="663" height="636" alt="image" src="https://github.com/user-attachments/assets/f6367168-f714-453b-be9f-e7e3af42bbfe" />

El catálogo tiene más de **1,700 modelos** repartidos en categorías, desde **$10** los más simples, y se paga **desde tu cuenta bancaria**. Además del catálogo clásico hay tandas de modelos personalizados: la **colección Vice City** (vinoteca, televisor antiguo, mapamundi, tablas de surf, carpas militares, fuente de agua, carritos de feria, lavandería, zoológico completo…), la **colección SOLS** (tumbas de pandilla, puertas de servicio, bates, machetes, fajos de dinero, bolsos de tienda, chaleco de prensa…) y los **muebles donados por la comunidad**, aportados por los propios jugadores (balde con agua, cuadros, estatuas, Furby, lasaña, máquina de básquet arcade, máquina de garra, plancha…).

Los muebles **personalizados** —los que defines tú mismo indicando el modelo— requieren **premium oro (nivel 3) o superior**.

Puedes **empaquetar** un mueble para llevártelo a otra propiedad, aplicarle **texturas**, **clonarlo** y **convertirlo en puerta** funcional.

### Comandos

- /comprarmueble [modelo] — compra un mueble (sin parámetros muestra las categorías). Alias: `/cobject`, `/comprarmuebles`.
- /muebles — lista los muebles de la propiedad actual.
- /buscarmueble [nombre] — busca muebles por nombre.
- /seleccionar — selecciona el mueble más cercano.
- /cseleccionar — selecciona un mueble personalizado.
- /deseleccionar — deselecciona el mueble actual.
- /editarmueble — activa el modo edición.
- /clonarmueble — duplica el mueble seleccionado.
- /moverx, /movery, /moverz [valor] — mueve el mueble en cada eje.
- /rotarx, /rotary, /rotarz [valor] — rota el mueble en cada eje.
- /prioridad [valor] — ajusta el orden de dibujado.
- /resetmueble — devuelve el mueble a su posición original.
- /quitarmueble — elimina el mueble seleccionado.
- /infomueble — muestra los detalles del mueble.
- /textura [índice], /quitartextura, /buscartextura [nombre] — gestiona texturas.
- /convertirpuerta, /configurarpuerta — convierte el mueble en puerta y la ajusta.
- /empaquetarmueble, /desempaquetarmueble — traslada un mueble a otra propiedad.

## Facturas de agua y luz

Toda propiedad acumula consumo mientras haya alguien dentro. El contador sube **por cada minuto y por cada persona** que permanezca en el interior.

| Servicio | Costo | Frecuencia con que sube el contador |
| --- | --- | --- |
| Electricidad | **$9** por unidad | cada minuto dentro |
| Agua | **$7** por unidad | cada 5 minutos dentro |

El total acumulado de todas tus propiedades se descuenta en tu **payday** y aparece en el resumen junto al sueldo, la renta y los intereses. Los impuestos diarios van en su propio bloque separado (ver [Sistema de impuestos](sistema-de-impuestos.md)).

Cuantos más ocupantes y más horas pasen dentro, mayor será la factura. Un negocio muy concurrido paga bastante luz, así que conviene tenerlo en cuenta al calcular las ganancias.

## Empresas y negocios

Los negocios son propiedades comerciales que se operan con **empleados**, **stock** y **caja**. Hay varios subtipos con mecánicas propias:

- **Tienda** — vende productos físicos, requiere stock y reposición.
- **Club, bar y discoteca** — cobra entrada, vende bebidas y es donde mejor rinden los eventos.
- **Concesionario** — venta de vehículos.
- **Casa de apuestas** y **casino** — juegos de azar (ver [Sistema de casino](sistema-de-casino.md)).
- **Depósito de vehículos** — compraventa de vehículos incautados.
- **Empresa de transporte, taxi, pesca, limpieza, mecánica y seguridad** — basadas en el trabajo activo de sus empleados.
- **Despacho legal, banco, hospital y periódico** — negocios institucionales con funciones específicas.

**Diferencia clave**: los negocios con producto (tienda, club, concesionario, apuestas, casino) gestionan **stock, pedidos y ventas**; los de servicios (taxi, mecánica, banco, legal, periodismo…) viven del trabajo activo del empleado. Los talleres mecánicos y las empresas de seguridad también manejan stock de repuestos y material.

### Comandos de gestión

- /caja [retirar | depositar] [$dinero] — mueve dinero de la caja del negocio.
- /transferircaja [llave destino] [$dinero] — transfiere dinero a otro negocio tuyo.
- /mirarnegocio — muestra el estado de los requisitos para las ventas automáticas.
- /mirarbasura — muestra la suciedad acumulada y su efecto.
- /negnombre [nombre] — cambia el nombre del negocio (dueño, $5,000).
- /negmapicon [ícono] — cambia el ícono del mapa (dueño, $5,000).
- /negmotd [texto] — mensaje que ven los clientes al entrar.
- /negvehiculos — gestiona la flota de la empresa.
- /activaralarma — dispara la alarma manualmente desde el mostrador.
- /entrada [$precio] — establece el precio de entrada (clubes).
- /mostrador, /mostrador2 — fija la posición de los mostradores de venta.
- /derechodeadmision [id] — expulsa a un cliente del local (temporal, puede volver).
- /vetar [id] [razón], /vetos, /desvetar [nombre_apellido] — veto permanente de un cliente.

## Caja del negocio

La caja es el dinero de la empresa. De ella salen los pedidos, los sueldos, los impuestos laborales, las mejoras del exterior y la limpieza; a ella entran las ventas, los premios de eventos y los subsidios.

Para usarla hay que estar dentro del negocio y tener el permiso de caja en tu cargo. `/caja` sin parámetros muestra el saldo y los impuestos vigentes.

- **Depositar** saca el dinero de tu cuenta bancaria y no paga impuestos.
- **Retirar** deposita el dinero en tu cuenta bancaria y paga un **impuesto corporativo del 28%** (21% federal más 7% estatal). El límite por operación es de **$1,000,000**.
- **Transferir** entre dos negocios tuyos no paga impuestos, con un límite de **$10,000,000** por operación.

Si el dueño **no está conectado**, el negocio paga además **$81 por hora** de impuesto comercial al gobierno.

## Stock: configurar qué vendes y a cuánto

Un negocio con producto puede tener hasta **63 artículos** distintos en su catálogo. `/stock` abre la lista con la categoría, el producto, el precio unitario y las unidades disponibles, y permite añadir, quitar y cambiar precios.

### Precio de venta

Cada producto tiene un **coste base** fijado por el servidor. A partir de él:

| Concepto | Cálculo |
| --- | --- |
| Coste de reposición | **80% del coste base** (lo que pagas al pedirlo) |
| Precio mínimo de venta | **100% del coste base** |
| Precio máximo de venta | **1,000% del coste base** (x10) |
| Precio máximo en clubes | **100,000% del coste base** (x1000) |

El diálogo de precio te muestra el coste, el mínimo, el máximo y tu **beneficio por unidad** (precio de venta menos coste de reposición). Los cambios de precio tardan **60 segundos** en aplicarse. Si un precio queda fuera de rango, el sistema lo devuelve automáticamente al coste base.

### Limitación de categorías

Sin premium, un negocio solo puede vender productos de **una única categoría**. Con premium puedes mezclar categorías distintas en el mismo catálogo.

### Cómo compran los clientes

El cliente se acerca al **mostrador** y usa `/comprar`. Se abre un **catálogo con la vista previa en 3D** de cada producto, su nombre y su precio, con páginas para navegar. Quien prefiera la lista de texto clásica puede cambiarlo desde `/preferencias`.

El dinero sale primero del efectivo del cliente y, si no le alcanza, de su cuenta bancaria. Entra íntegro a la **caja del negocio**.

Un empleado en servicio puede además ofrecer el catálogo en persona con `/venderstock [id] [propina 10-60]`: el cliente paga el precio más la propina pactada, y **la propina va al bolsillo del empleado** (más 3 Burger Points por venta con propina, ver [Sistema de Burger Points](sistema-de-burger-points.md)).

Las armas, cargadores y munición tienen requisitos extra para el comprador: **50 horas de juego**, tener una casa, no tener antecedentes y la licencia correspondiente. Tras comprar un arma queda un tiempo de espera de **2 semanas**, o **1 semana** con premium oro o superior.

### Autoservicio (drive-thru)

Algunos locales tienen un punto de **autoservicio** en el exterior, marcado en el suelo. Estando dentro de un vehículo se usa `/autoservicio` para abrir el mismo catálogo. El precio en el autoservicio tiene un **recargo del 20%**, que se queda el negocio.

### Comandos

- /stock — abre el inventario del negocio y permite ajustar precios.
- /meterstock — añade al inventario el producto que tengas en la mano (debe estar sin usar).
- /venderstock [id] [propina] — ofrece el catálogo a un cliente con propina.
- /comprar — compra en el mostrador (cliente).
- /autoservicio — compra desde el vehículo en el drive-thru.

## Pedidos a las empresas de reparto

Cuando el stock se agota hay que reponerlo. `/pedidos` abre la lista de productos con su costo unitario, las unidades en almacén y el estado del pedido.

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

Las entregas las hacen **camioneros** de las empresas de reparto: un jugador toma tu pedido desde la lista de cargas disponibles, recoge la mercancía en la industria correspondiente y la lleva hasta la puerta de tu negocio (ver [Sistema de camionero](sistema-de-camionero.md)). El pedido pasa por los estados *disponible → esperando → en ruta → entregado*.

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
| Empleados contratados | **1** |
| Basura acumulada | por debajo de **56 kg** |

- Las **ventas a clientes reales** no cuentan si las hace el dueño, ni si las hace alguien que tenga un contrato vigente con el negocio, sin importar con qué personaje de su cuenta compre.
- Los **empleados** se cuentan por cuentas distintas, no por personajes.
- Si la basura alcanza o supera los **56 kg**, las ventas dejan de ingresar dinero a la caja: el producto se entrega igual, pero el negocio no cobra.

`/mirarnegocio`, dentro del local, muestra los tres requisitos con su valor actual y su mínimo, en verde si están cumplidos y en rojo si no.

### Qué compran y cuánto pagan

- Los clientes NPC solo compran productos con un **coste base de hasta $1,000**. Todo lo que cueste más no entra en las ventas automáticas.
- Cada unidad vendida paga **el 150% de su coste base** (x1.5), sin importar el precio que tengas puesto en el mostrador. El precio del mostrador afecta solo a las compras de jugadores reales.
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
- **Vende barato y variado.** Los artículos de más de $1,000 de coste no entran en las ventas NPC.
- **Ten siempre stock.** Sin unidades no hay venta; la reposición automática cubre este punto.
- **Deja saldo en la caja.** De ella salen los pedidos automáticos, los sueldos y los impuestos.
- **Contrata y conserva empleados.** Basta con uno, pero sin él no hay ventas automáticas.
- **Consigue 5 ventas reales al día.** Un cliente habitual, un evento o un empleado vendiendo con `/venderstock` bastan para desbloquear el ciclo.

## Basura y limpieza

Cada venta —de cliente real o de cliente NPC— ensucia el local: genera **0 o 1 kg de basura**, con un tope de **100 kg**. Las **bolsas de basura tiradas en el interior** también cuentan para la suciedad total.

Al entrar a un local sucio aparecen mensajes de ambiente ("el local está desordenado", "zona crítica, cero higiene"…) que desincentivan a los clientes. A partir de **70 kg** el negocio tiene **plagas de ratas** y ya no puede limpiarlo cualquiera: hace falta un recolector de basura profesional.

`/mirarbasura` muestra los kilos acumulados, cuántos productos por hora estás perdiendo y si hay plagas.

### Limpiar

`/limpiarnegocio` limpia una tanda de basura. Hace falta una **escoba** o **jabón** en la mano derecha, estar en servicio si eres empleado, y quedarse quieto entre **30 y 60 segundos** según la habilidad de quien limpia: la escoba recoge un 33% más de basura y el jabón tarda un 33% menos. Al terminar aparece una bolsa de basura en el suelo que hay que retirar.

**Cuánto cuesta:** si limpia un **empleado del negocio o alguien con llaves**, es gratis. Si limpia un **recolector externo**, el negocio paga **$20 por cada kilo retirado**, descontados de la caja en el momento. Si no hay saldo suficiente, se cobra lo que haya (ver [Sistema de basura](sistema-de-basura.md)).

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

### Sueldos y su tope

El sueldo de cada cargo lo fija el dueño, con topes que dependen del mercado: el sistema calcula el **promedio de sueldos del mismo tipo de negocio en todo el servidor** y permite pagar hasta **1.5 veces** ese promedio, con un mínimo garantizado de **$1,000** y un máximo absoluto de **$20,000**. El diálogo de sueldos te muestra el promedio del mercado y calcula los impuestos que pagarás.

### Jornada laboral

Se entra y se sale de servicio con `/negservicio` (alias `/trabajar`). El sueldo se cobra al completar una **jornada**:

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
| Empleados de tiendas y clubes | **$1,000** por jornada |
| Empleados del resto de empresas | **$100** por jornada |
| Miembros de facción | **$1,000** por payday |

En los negocios de rol el gobierno además inyecta **$100 por jornada** directamente a la caja del negocio, como ayuda al empleador.

Durante los eventos de experiencia el total cobrado se multiplica: **+25%** en doble experiencia y **+33%** en triple. Los usuarios premium 4 y 5 tienen un **+25%** permanente cuando no hay evento activo.

La empresa paga además, desde su caja, los **impuestos laborales** sobre el sueldo de rango: **6.2%** de seguro social, **1.45%** de seguro médico y **2%** de otros costos laborales, un **9.65%** en total. El subsidio estatal no tributa (ver [Sistema de impuestos](sistema-de-impuestos.md)).

### Mantenerse en el puesto

Mientras estés en servicio debes permanecer en tu zona de trabajo: dentro del negocio, a menos de **150 metros** del local, dentro de un vehículo de la empresa o junto a tu vehículo de servicio.

Si te alejas recibes un aviso y tienes un margen de **5 minutos** para volver (**15 minutos** para los basureros; los periodistas y los técnicos de seguridad no tienen límite, porque trabajan en la calle). Pasado el plazo te cobran una **multa de $2,500** que va a parar a la caja del negocio, y te sacan de servicio perdiendo la jornada acumulada.

### Trabajar en varios sitios

Puedes tener varios contratos a la vez y cambiar entre ellos sin renunciar:

| Nivel premium | Contratos simultáneos |
| --- | --- |
| Sin premium | 2 |
| Premium 1 | 3 |
| Premium 2 | 4 |
| Premium 3 | 5 |
| Premium 4 y 5 | 6 |

`/miscontratos` lista los tuyos y permite activar uno; no se puede cambiar estando en servicio, y hay que esperar **60 segundos** entre cambios. Para renunciar necesitas haber trabajado al menos **8 horas** en esa empresa y confirmarlo con `/renunciar confirmar`.

### Unirse automáticamente con /negunirse

`/negunirse` te contrata sin que el dueño tenga que hacerlo a mano, siempre que:

- Estés dentro del negocio o en su zona exterior.
- El dueño lo tenga habilitado con `/tognegunirse`, que requiere **premium**.
- El negocio tenga al menos el primer cargo configurado.
- No hayas sido despedido de ese negocio en las **últimas 72 horas**.
- El tipo de negocio lo permita: **no funciona** en banco, depósito de vehículos, periodismo, seguridad ni casino, que exigen contratación manual.

<img width="587" height="61" alt="image" src="https://github.com/user-attachments/assets/78dc4cb0-d9d1-412e-86a7-1173c8d90077" />

Entras con el cargo más básico; después el dueño o un gerente puede ascenderte con `/darcargo`.

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

- /negunirse — te unes automáticamente como empleado.
- /tognegunirse — habilita o deshabilita `/negunirse` en tu negocio (dueño, premium).
- /negservicio — entra o sale de servicio. Alias: `/trabajar`.
- /anunciarservicio — anuncia que estás trabajando.
- /miscontratos — lista y cambia entre tus contratos. Alias: `/contratos`, `/misempleos`, `/cambiarempleo`.
- /mostrarcontrato [id] — enseña tu contrato a otro jugador.
- /renunciar confirmar — renuncia al contrato actual.
- /contratar [id] — ofrece contrato a un jugador cercano.
- /despedir [nombre_apellido] — despide a un empleado.
- /cargos — crea y edita cargos, sueldos y permisos (dueño).
- /darcargo [id] [cargo] — asigna un cargo a un empleado.
- /empleados — consulta la plantilla desde el panel de control (ver [Panel de control](panel-de-control.md)).

## Exteriores de negocios

Un negocio puede reclamar un **área en la calle frente a su puerta**: una terraza, un patio, una zona de mesas. El exterior amplía el local hacia afuera y cuenta como parte del negocio.

### Situar el exterior

`/exterior situar`, estando de pie donde quieras el centro del área. Requisitos:

- Tener permiso de **stock** en el negocio, o ser el dueño.
- Estar a menos de **100 metros** de la entrada principal, y que esa entrada dé a la calle.
- Que el área no se **solape** con el exterior de otro negocio.
- Que la caja tenga más de **$100,000**: situar o mover el exterior cuesta **$100,000**.

Donde lo sitúes queda un **mostrador exterior**: los clientes pueden usar `/comprar` ahí mismo, sin entrar al local.

### Niveles de expansión

`/exterior expandir` abre la tabla de mejoras. Cada nivel amplía el radio del área y el número de muebles que caben:

| Nivel | Radio | Muebles máximos | Precio |
| --- | --- | --- | --- |
| 1 | 10 metros | 16 | gratis (nivel inicial) |
| 2 | 10 metros | 32 | **$25,000** |
| 3 | 20 metros | 64 | **$100,000** |
| 4 | 20 metros | 128 | **$250,000** |
| 5 | 30 metros | 256 | **$500,000** |
| 6 | 30 metros | 512 | **$750,000** |

Las mejoras se pagan de la caja del negocio. **Bajar de nivel es gratis**, pero antes hay que quitar los muebles que sobren. Subir de nivel también comprueba que el área ampliada no se solape con la de otro negocio.

### Muebles de exterior

`/exterior crearmueble` abre el mismo catálogo de muebles del interior y coloca la pieza delante de ti. Se pagan de la **caja del negocio** y **no se reembolsan** al eliminarlos. Para editar o borrar un mueble tienes que estar a menos de **10 metros** de él.

Con ellos se montan terrazas, mesas, sombrillas, barras al aire libre, vallas, jardineras y escenarios. Los muebles personalizados requieren **premium oro**.

### Qué aporta el exterior

- **Mostrador de venta en la calle**: los clientes compran sin entrar.
- **Cuenta para los eventos**: los jugadores a pie dentro del área exterior suman como participantes del evento del negocio, igual que los que están dentro del local. Una terraza llena es la forma más rápida de subir de nivel.
- **Ambientación**: da presencia al negocio en la vía pública y facilita el rol de bar, cafetería o puesto callejero.

### Comandos

- /exterior situar — coloca o mueve el área exterior ($100,000).
- /exterior expandir — mejora el nivel del exterior.
- /exterior eliminar — elimina el exterior y todos sus muebles.
- /exterior muebles — lista los muebles del exterior.
- /exterior crearmueble — compra y coloca un mueble exterior.
- /exterior editarmueble [id] — mueve y rota un mueble.
- /exterior eliminarmueble [id] — elimina un mueble (sin reembolso).
- /exterior texturamueble [id] [textura] — aplica o quita una textura.

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

Al subir de nivel entra dinero **directo a la caja del negocio**:

| Tipo de local | Premio por nivel | Nivel 1 | Nivel 2 | Nivel 3 |
| --- | --- | --- | --- | --- |
| Propiedad reservada | $3,000 por participante | $30,000 | $60,000 | $90,000 |
| Club | $2,000 por participante | $20,000 | $40,000 | $60,000 |
| Resto de negocios | $1,000 por participante | $10,000 | $20,000 | $30,000 |

Además, **todos los presentes** en el local o en su exterior reciben **10 Burger Points** al subir de nivel (**20** en doble experiencia, **30** en triple). El dueño y los empleados reciben el aviso del ascenso.

`/evento` abre una ventana con el nivel actual, el premio del siguiente nivel, el progreso de ambos requisitos y la explicación completa del sistema.

El evento **se reinicia tras 4 horas sin participantes**, volviendo al nivel 0.

## Alarmas

Los negocios pueden tener **alarma**, con tres niveles de potencia:

| Nivel | Duración del sonido | Alcance |
| --- | --- | --- |
| 1 | 2 minutos | 20 metros |
| 2 | 4 minutos | 40 metros |
| 3 | 5 minutos | 60 metros |

La alarma salta sola ante un incendio o un robo, y se puede disparar a mano con `/activaralarma` desde el mostrador, teniendo llaves o permiso de llaves. Una alarma mal mantenida puede fallar y no sonar. Sobre robos y atracos a negocios, consulta el [Sistema de delincuente](sistema-de-delincuente.md).

## Inactividad y liberación automática

Si un propietario deja de entrar a su propiedad, el sistema la **libera** y vuelve a ponerla en venta. Los plazos son:

| Tipo de propiedad | Días de inactividad |
| --- | --- |
| Casas compradas | **60 días** |
| Casas alquiladas | **30 días** |
| Negocios | **30 días** |
| Negocios con 85 kg o más de basura | **14 días** |
| Almacenes | **90 días** |

Cuando una propiedad se libera, el dueño recibe una notificación con el motivo. En un negocio se **despide a los empleados**, se **vacía la caja**, se **expulsa a los que estén dentro**, se **resetean las llaves** y se limpian los inventarios.

Basta con entrar un momento a cada propiedad cada cierto tiempo —o hacer cualquier gestión en ella— para reiniciar el contador. En los negocios conviene además no dejar que la basura se acumule: un local sucio y abandonado se pierde en la mitad de tiempo.
