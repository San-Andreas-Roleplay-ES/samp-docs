# Facciones ilegales

Las facciones ilegales son el otro lado de la moneda: las organizaciones que operan al margen de la ley y dan vida al rol criminal del servidor — desde mafias y carteles hasta pandillas callejeras y motoclubs. Todas conviven y compiten en el mismo escenario, pero **no todas tienen el mismo peso ni el mismo reconocimiento**.

Este documento es una vista panorámica: qué tipos de organización existen, qué se exige para subir de estatus y qué desbloquea cada nivel. Los detalles de cada actividad viven en sus propias guías, enlazadas a lo largo del texto.

Toda la actividad pública del rol ilegal —presentaciones, reclutamientos, comunicados IC— se centraliza en el foro oficial: [Facciones ilegales](https://forum.sarp.es/index.php?/forum/20-facciones-ilegales/). Si quieres saber qué facciones oficiales están activas hoy, mira los hilos fijados al inicio de la sección.

### Comandos

- `/f [mensaje]` — chat interno de la facción (solo facciones **oficiales**).
- `/miembros` — lista de los miembros de tu facción que están conectados.
- `/baseilegal` — consulta la base de tu facción; el líder la asigna sobre una propiedad propia.
- `/influencias` — puntos de influencia de cada facción en la zona donde estás parado.
- `/misinfluencias` — resumen de la influencia de tu facción: territorios conquistados, zonas con influencia, puntos totales y dinero por payday (pandillas, mafias y penitenciarías).
- `/mejorardelincuente` — sube tus habilidades criminales a un mínimo por **$25.000** (solo oficiales).
- `/narcotraficante` — te conviertes en narcotraficante y desbloqueas el catálogo completo de drogas.
- `/compraringredientes` — compra de precursores químicos en un punto asignado.
- `/robartrailer` — vende el tráiler de un camión robado.
- `/skimmer` — fabrica un lector de tarjetas para cajeros.
- `/falsificar` — tanda de billetes falsos en una imprenta clandestina (ver [Sistema de falsificación de billetes](sistema-de-falsificacion-de-billetes.md)).
- `/falsificarreceta`, `/falsificarlicencia` — falsificación de recetas y licencias (solo oficiales).
- `/pedidoarmas`, `/pedidodrogas` — pedidos por teléfono al proveedor ilegal (solo el líder de una penitenciaría oficial).
- `/ayuda` — muestra los comandos disponibles según tu facción.

## Los tres niveles de estatus

En SARP una organización criminal puede estar en uno de tres escalones, y la diferencia entre ellos es enorme:

| Estatus | Qué es | Cómo se consigue |
|---|---|---|
| **Grupo** (no oficial) | Organización criminal pequeña, en formación o sin reconocimiento. Tiene su identidad y su historia, pero opera con herramientas limitadas. | Es el punto de partida de toda organización nueva. |
| **Destacada** | Grupo que ya demostró continuidad y calidad de rol. Recibe acceso a la producción de drogas y a una base ilegal propia. | Ascenso otorgado por el equipo administrativo tras un periodo sostenido de buen desempeño. |
| **Oficial** | Organización que **representa oficialmente al servidor**. Las más longevas y con respaldo institucional dentro de la comunidad. | Ascenso desde destacada, tras años de trabajo constante. Sus hilos aparecen **fijados** en el foro. |

Las facciones oficiales tienen en la práctica el **monopolio del tráfico de armas y drogas pesadas**: son las únicas que pueden fabricar el armamento serio y producir toda la gama de estupefacientes. Eso las convierte en el centro de gravedad de la economía criminal. Los grupos también pueden traficar, pero al no controlar la producción mayorista lo habitual es que **compren su mercancía a las facciones oficiales** para revenderla en su propio circuito.

Muchos grupos con buen desempeño aspiran, con el tiempo, a convertirse en destacados y luego en oficiales. Esa distinción marca **qué puedes hacer y qué no** según dónde te integres.

## Mafias y pandillas

Dentro del rol ilegal hay tres tipos de organización, y el tipo no depende del estatus:

- **Mafias**: estructuras jerárquicas de crimen organizado — familias, carteles, sindicatos. Su fuerte es el negocio: tráfico, contrabando, corrupción y economía sumergida. **No conquistan territorios**, pero sí acumulan influencia, que alimenta su red de contactos (ver más abajo).
- **Pandillas**: organizaciones de calle ligadas a un territorio. Además de todo lo anterior, son las únicas que **ganan influencia territorial más rápido**: cuando un miembro de una pandilla permanece a pie dentro de una zona de banda, acumula influencia para su facción a mayor ritmo que una mafia. Los detalles están en [Sistema de zonas de pandilla](sistema-de-zonas-de-pandilla.md).
- **Penitenciarías**: organizaciones de presos y de la vida carcelaria. Solo suman influencia en la zona de la prisión, incluso desde dentro de la cárcel. Las oficiales pueden hacer pedidos ilegales (ver [Pedidos ilegales de las penitenciarías](#pedidos-ilegales-de-las-penitenciarías)).

### Influencia, payday y territorio

La influencia de una facción es la suma de los puntos que tiene en todas las zonas. Dependiendo del tipo, sirve para cosas distintas:

- **Payday por influencia.** Las pandillas y las mafias cobran en cada payday **$1 por cada 20 puntos de influencia** que suman entre todas sus zonas, estén conquistadas o no. El pago tiene un tope según el estatus de la facción: **$1.000** (grupo), **$2.000** (destacada) y **$3.000** (oficial), para cada miembro. El total de puntos se actualiza una vez por hora, así que el pago puede ir algo atrasado respecto de tu influencia real. Los presos y los miembros de facciones cerradas no cobran este pago. Las penitenciarías no lo reciben.
- **Fabricar cuesta influencia.** Cada vez que ensamblas armas con `/ensamblararmas` se descuentan **1.000 puntos** de influencia de tu facción, y cada vez que fabricas droga con `/creardroga`, **250 puntos**. El costo se reparte en partes iguales entre todas las zonas donde tu facción tiene influencia; si una zona no alcanza a cubrir su parte, las demás completan el resto. Si tu facción no tiene influencia suficiente, no puedes fabricar. Si la fabricación no se completa, la influencia se devuelve.
- **Territorios.** Las mafias no conquistan zonas: las conquistan las pandillas (y las penitenciarías, en la zona de la prisión). Las zonas que una mafia ya controlaba se mantienen hasta que otra facción supere los 100 puntos de influencia en ellas.
- **Ventas en tu territorio.** Cuando un miembro de una pandilla completa una venta a un cliente de misión dentro de un territorio de su facción, la influencia de esa zona sube para su pandilla: **+5** (grupo), **+6** (destacada) o **+8** (oficial). La venta con `/traficar` no cuenta. Las demás pandillas pierden 1 punto allí.

Con `/misinfluencias` ves el resumen de tu facción: territorios conquistados, zonas con influencia (de mayor a menor), puntos totales y cuánto genera por payday.

### Red de contactos de las mafias

Como no conquistan territorios, las mafias se apoyan en su **red de contactos**, que depende de la influencia total de la familia en toda la ciudad. El nivel se recalcula cada hora:

| Nivel | Influencia total necesaria |
|---|---|
| 1 | 500 puntos |
| 2 | 1.500 puntos |
| 3 | 3.000 puntos |

Por cada nivel, los contrabandistas de la mafia obtienen en el ensamblaje de armas:

- **10% de descuento** en el precio de todas las armas.
- **10% menos de espera** entre pedidos, en todas las armas.
- **+1 arma por pedido**, excepto en los rifles.

En el nivel 3 son **30% de descuento, 30% menos de espera y +3 armas por pedido**. `/ensamblararmas` muestra el nivel actual de tu familia.

## Tabla de beneficios por estatus

| Beneficio | Grupo | Destacada | Oficial |
|---|---|---|---|
| Base ilegal propia (`/baseilegal`) | No | Sí | Sí |
| Convertirse en narcotraficante (`/narcotraficante`) | No | Sí | Sí |
| Compra de precursores químicos (`/compraringredientes`) | No | Sí | Sí |
| Chat interno de facción (`/f`) | No | No | Sí |
| Impulso de habilidades criminales (`/mejorardelincuente`) | No | No | Sí |
| Armamento pesado en el ensamblaje de armas | No | No | Sí |
| Máximo de pistolas por pedido de ensamblaje | 8 | 8 | **15** |
| Espera entre tandas de fabricación de armas (por unidad) | 24 h | 24 h | **12 h** |
| Comprador especial del puerto (paga **+25%**) | No | No | Sí |
| Falsificación de recetas y licencias | No | No | Sí |
| Lector de tarjetas para cajeros (`/skimmer`) | No | No | Sí |
| Venta de tráileres robados (`/robartrailer`) | No | No | Sí |
| Exención de la pérdida de habilidad criminal | No | Sí | Sí |
| Habilidad criminal y de drogas que pierdes al ser arrestado | 100% | **75%** | **50%** |
| Tope del payday por influencia | $1.000 | $2.000 | $3.000 |
| Pedidos ilegales por teléfono | No | No | Solo penitenciarías |

## Qué desbloquea ser destacada

### Base ilegal

El líder puede convertir una propiedad de su titularidad en la **base de la facción** con `/baseilegal [llave] confirmar`. Al hacerlo, la propiedad deja de tener dueño individual y pasa a la organización: **todos los miembros reciben las llaves** automáticamente. Una vez asignada, la facción no puede cambiar de base durante **14 días**. Cualquier miembro puede escribir `/baseilegal` sin parámetros para ver cuál es la base de su facción.

Es el lugar natural donde montar el laboratorio de drogas, el taller de armas y guardar la mercancía. Más detalle en [Sistema de bases ilegales](sistema-de-bases-ilegales.md), que además cubre la base criminal de **Idlewood**, el punto donde hoy se concentra todo el mercado negro de la ciudad.

### Producción de drogas completa

Con `/narcotraficante` te conviertes en traficante de drogas de forma permanente. Sin ese estatus, un laboratorio solo produce **óxido nitroso y crack**; como narcotraficante se abre el catálogo completo — cocaína, MDMA, heroína y el resto. A cambio pierdes acceso a los delitos menores: el personaje queda demasiado expuesto para andar hurtando por la calle.

Cocinar tiene ventajas según dónde lo hagas:

- En la **base ilegal** de tu facción (pandillas y mafias), el límite de ingredientes por cocinada sube **+25 unidades**.
- Si eres de una **pandilla** y el laboratorio está en un territorio de tu propia pandilla, el límite sube otras **+25 unidades** y la espera entre cocinadas baja un **25%**.
- Además, una pandilla suma **+2%** al límite de ingredientes por cada territorio que controla, hasta **+20%**.
- Si cocinas en territorio de otra facción, la probabilidad de explosión del laboratorio sube de **20%** a **35%**. El extintor sigue evitándola.

Todo el proceso de cultivo, cocina, pureza y venta está en [Sistema de drogas](sistema-de-drogas.md) y [Sistema de plantaciones de marihuana](sistema-de-plantaciones-de-marihuana.md).

### Compra de precursores químicos

`/compraringredientes` abre el catálogo mayorista de reactivos: hoja de coca, queroseno, ácido sulfúrico, amoniaco, acetona, éter, efedrina, fósforo rojo y otros dieciséis reactivos, siempre en lotes de **100 unidades** a **10 veces** el precio unitario del producto.

Para usarlo:

- Debe haber al menos **2 policías** en servicio.
- La venta ocurre en un **punto de encuentro asignado** que recibes por mensaje; cambia de una sesión a otra y se marca en tu mapa.
- Cada compra puede **filtrarse a la policía**. La probabilidad base es del **30%**, y baja según tu habilidad de drogas (hasta un **5%** con habilidad máxima). El aviso solo puede dispararse una vez cada **2 minutos**.

### Sin pérdida de habilidad criminal

Fuera de las facciones ilegales, la habilidad de delincuente **se oxida**: en cada payday, si no cometiste ningún ilícito en las últimas **24 horas**, pierdes **5 puntos**. Los miembros de facciones ilegales **destacadas u oficiales** están exentos de esa pérdida, igual que los usuarios Ruby. Los detalles del sistema completo están en [Sistema de delincuente](sistema-de-delincuente.md).

### Menos pérdida al ser arrestado

Cuando te arrestan pierdes puntos de habilidad de delincuente y de drogas según la duración de la condena. Las facciones ilegales protegen a sus miembros: en una facción **oficial** pierdes solo el **50%** de lo normal, y en una **destacada**, el **75%**. En un grupo no oficial o fuera de una facción la pérdida es completa.

## Qué desbloquea ser oficial

### Impulso de habilidades criminales

`/mejorardelincuente` cuesta **$25.000** y eleva de golpe hasta un mínimo todas tus habilidades criminales, si las tienes por debajo:

| Habilidad | Mínimo garantizado |
|---|---|
| Delincuente | **50** |
| Robo a propiedades | **50** |
| Robo de vehículos | **50** |
| Drogas | **50** |
| Electrónica | **10** |

Solo sube lo que esté por debajo del mínimo: si ya tienes 80 de delincuente, esa habilidad no se toca. Es la vía rápida para que un recluta nuevo de una facción oficial deje de ser un estorbo y pueda participar en operaciones serias desde el primer día.

### Armamento pesado en el ensamblaje

Todos los contrabandistas pueden fabricar **pistolas y pistolas automáticas**. El armamento serio está reservado a los contrabandistas avanzados, condición que se obtiene automáticamente por pertenecer a una facción ilegal oficial:

- Pistolas silenciadas
- Escopetas
- Subfusiles
- Rifles
- Rifles de asalto
- Material de terrorismo

Además, la espera entre tandas de fabricación baja de **24 horas** a **12 horas** por unidad (los rifles y los rifles de asalto mantienen su espera larga de **168 horas** por unidad para todos).

Cantidad máxima por pedido de ensamblaje:

| Arma | Contrabandista normal | Avanzado u oficial |
|---|---|---|
| Pistolas | 8 | **15** |
| Subfusiles y pistolas automáticas | 8 | 8 |
| Escopetas | 4 | 4 |
| Rifles y rifles de asalto | 1 | 1 |
| Otras armas | 4 | 4 |

Las mafias suman a esos máximos el bono de su red de contactos (ver [Red de contactos de las mafias](#red-de-contactos-de-las-mafias)). Cada pedido de ensamblaje cuesta además influencia de la facción. El proceso completo está en [Sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md).

### Pedidos ilegales de las penitenciarías

Las penitenciarías oficiales pueden encargar armas y drogas por teléfono a un proveedor, sin ensamblar ni cocinar nada. Solo **el líder** de la facción puede pedirlo, con el comando `/pedidoarmas` o `/pedidodrogas`.

1. Al usar el comando recibes un SMS con el número del proveedor. Tienes **1 hora** para llamarlo; el número es solo para ti.
2. Al contestar, el proveedor te ofrece un catálogo. Eliges un artículo y confirmas el pedido.
3. El proveedor te dicta las coordenadas de la entrega. La mercancía llega **entre 25 y 35 minutos** después, a uno de **11 puntos de entrega** repartidos por el norte del mapa: una caja metálica en el caso de las armas y un bolso deportivo en el caso de las drogas. **15 minutos antes** de la entrega la policía recibe un aviso por radio con la zona.

| | Armas | Drogas |
|---|---|---|
| Qué recibes | **20 unidades** de pistola, escopeta o subfusil, o **10** de fusil de asalto o rifle, cada una con un cargador lleno | **500 gramos** de una droga, de muy alta pureza |
| Espera para volver a pedir | **14 días** | **7 días** |

Requisitos y costos:

- Cada pedido cuesta **1.000 puntos de influencia** de tu facción en la zona de la prisión. Si el pedido no se completa, la influencia vuelve a tu facción.
- La facción debe ser **oficial** y no puede tener otro pedido del mismo tipo en camino. La espera de 14 o 7 días corre desde que confirmas el pedido.
- Debes estar vivo. Debe haber al menos **100 jugadores conectados** y **5 policías en servicio**.
- No se puede pedir en la hora y media previa al reinicio diario del servidor.

### El comprador del puerto

En el mar, lejos de la costa, opera un **comprador especial** conocido como "el pirata". Paga **un 25% más** que cualquier comprador de calle por la droga que le lleves y llega a manejar **hasta un millón de dólares** en efectivo, frente a los $10.000 – $20.000 de un yonqui común.

No hace negocios con cualquiera: **solo compra a miembros de facciones ilegales oficiales**. A cualquier otro le responde que no trabajará con él. Como todo trapicheo, requiere **2 policías** en servicio y se vende con `/traficar`, con el precio final ajustado por la pureza del producto (de la mitad al doble según calidad).

### Falsificaciones

Dos comandos exclusivos, ejecutables solo desde una facción oficial:

| Comando | Qué produce | Requisitos | Coste |
|---|---|---|---|
| `/falsificarreceta` | Receta médica de opioides | Habilidad de drogas **50** | **$150** |
| `/falsificarlicencia [Nombre Apellido]` | Licencia de conducir falsa | Habilidad de electrónica **10**, laptop en la mano izquierda | **$1.000** |

En los dos casos necesitas la mano derecha libre para recibir el producto.

Los billetes falsos ya no dependen de una facción: se fabrican con `/falsificar` en una imprenta clandestina montada con muebles dentro de una propiedad, y los puede usar cualquier personaje con **habilidad de delincuente 50** y el nivel de falsificación que pida cada máquina. Todo el proceso está en [Sistema de falsificación de billetes](sistema-de-falsificacion-de-billetes.md).

### Lector de tarjetas y tráileres robados

- `/skimmer` fabrica un lector de tarjetas para instalar en cajeros automáticos. Requiere habilidad de electrónica **50**, una laptop en la mano izquierda, la derecha libre y **$25.000**. La operativa completa está en [Sistema de skimming](sistema-de-skimming.md).
- `/robartrailer` vende el tráiler enganchado a un camión robado. Exige habilidad de delincuente **95**, ir al volante de un camión con el tráiler enganchado, que ese tráiler sea de una misión de transporte y que no pertenezca a ningún jugador, facción o negocio. Debes llevarlo hasta un punto concreto (se marca en tu mapa), la policía recibe un aviso de la venta y no podrás volver a cometer delitos de este tipo durante **48 horas**.

## Cooperativo de facción

Delinquir acompañado rinde el doble. Cada vez que ganas habilidad criminal —delincuente, robo a propiedades o robo de vehículos— por un hurto, un atraco, un robo de muebles, forzar puertas, unir cableado o desarmar piezas, **todos tus compañeros de facción que estén a menos de 25 metros reciben los mismos puntos**.

Condiciones para que un compañero cobre el cooperativo:

- Pertenecer a **tu misma facción**.
- Estar **vivo** y **no pausado**.
- Estar en el **mismo interior o zona** que tú.
- Estar a **25 metros o menos** del golpe.

Tanto el autor como los compañeros reciben un aviso indicando cuántos puntos se repartieron. Es la razón por la que las facciones organizadas suben de nivel mucho más rápido que un delincuente solitario: un golpe bien acompañado multiplica el progreso de todo el grupo.

## Sueldo

Todo miembro de una facción cobra en cada payday el **sueldo de su rango**, que paga la caja de la organización, más un **subsidio del gobierno de $1.000** que se suma automáticamente. Los miembros de pandillas y mafias cobran además el **pago por influencia** de su facción (hasta $1.000, $2.000 o $3.000 según el estatus; ver [Influencia, payday y territorio](#influencia-payday-y-territorio)). Estando arrestado no se cobra nada, y una facción cerrada no paga ni el sueldo de rango ni el pago por influencia.

## Consejos

- **Empieza por un grupo.** No necesitas una facción oficial para rolear crimen: la calle está llena de organizaciones pequeñas buscando gente, y los grupos activos son la cantera de las futuras facciones destacadas.
- **La base ilegal es el salto cualitativo.** En cuanto tu organización sea destacada, montar la base y concentrar allí laboratorio, taller y almacén cambia por completo la logística del grupo.
- **Delinque en grupo.** El cooperativo hace que una operación de cuatro personas valga por cuatro operaciones individuales. Coordina los golpes y mantén la distancia corta.
- **Cuida el rol, no solo los números.** El ascenso a destacada y a oficial no se compra ni se acumula con horas: lo otorga el equipo administrativo mirando la continuidad y la calidad del rol que genera la organización.
- **Diversifica.** Armas, drogas, falsificaciones, territorios y mercado negro son negocios distintos con habilidades distintas. Una facción que cubre varias es mucho más resistente que una que depende de un solo flujo. Consulta [Sistema de armas](sistema-de-armas.md) y [Sistema de mercado negro](sistema-de-mercado-negro.md).
