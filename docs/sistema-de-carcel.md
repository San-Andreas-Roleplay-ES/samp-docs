# Sistema de cárcel

## Introducción

La cárcel es el destino de todo personaje arrestado por la policía. En el servidor representa fielmente una **cárcel del condado**, sin confundirla con prisiones federales o estatales: para efectos prácticos, **prisión y cárcel son lo mismo** y ambos términos se refieren a la Twin Towers Correctional Facility.

Dentro de Twin Towers conviven dos tipos de reclusos: los **condenados**, ya sentenciados y cumpliendo su tiempo, y los **internos a la espera de juicio**, en prisión preventiva mientras se resuelve su caso.

La custodia de la prisión y de los internos corresponde al **SADCR**, cuyos guardias de servicio manejan las celdas, el aislamiento, los traslados y la libertad condicional (consulta [facciones legales](facciones-legales.md)). Los arrestos que hagan Los Santos Police Department, Los Santos County Sheriff's Department o agencias del Department of Justice trasladan a los reclusos automáticamente a la Twin Towers Correctional Facility. Las secciones del complejo son únicamente para hombres: **las mujeres cumplen condena en la cárcel de la estación del sheriff**, no en Twin Towers.

Las condenas se cuentan en **minutos**, no en horas. La sentencia mínima que puede aplicarse es de **5 minutos** y la máxima de **180 minutos (3 horas)**, salvo la cadena perpetua, y a toda condena se le suman **15 minutos** obligatorios. Todo ese tiempo **solo corre mientras estás conectado y sin pausar el juego**. Para el proceso judicial que rodea al arresto (juicios, abogados, órdenes, apelaciones) consulta el [sistema de justicia](sistema-de-justicia.md).

### Comandos

- /tiempocarcel — muestra cuántos minutos te quedan de condena.
- /salircarcel — sales de la cárcel cuando se ha cumplido tu condena. Alias: `/salirprision`.
- /uniformecarcel — cambia tu uniforme de interno (solo hombres).
- /encarcelarme — entra voluntariamente a la cárcel con condena de 3 meses (junto a la entrada principal).
- /quioscocarcel — abre el menú del quiosco de la cárcel. Alias: `/quiosco`, `/quioscoc`.
- /cafeteria [id] — entrega una bandeja de comida a otro interno (dentro del puesto de cafetería).
- /biblioteca — lee un libro para subir habilidades (sentado, dentro de la biblioteca). Alias: `/libros`, `/leerlibro`, `/leer`.
- /fabricar — combina los materiales que llevas en las dos manos para fabricar objetos dentro de la cárcel.
- /stash — usa tu escondite (`/stash situar`, `/stash buscar`, `/stash sacar [ranura]`, `/stash guardar`).
- /visitacarcel [id] — pide visitar a un interno (en la recepción de visitas).
- /abrir y /cerrar — abren y cierran la reja de una celda desbloqueada.
- /eventocarcel — envía una alerta de evento carcelario a los guardias del SADCR.
- /solicitardeputies [razón] — solicita la presencia de guardias en la cárcel.
- /presos — muestra cuántos presos hay conectados.
- /guardias — muestra cuántos guardias de servicio hay conectados.

## Cómo llegas a la cárcel

Un oficial de policía, un ayudante del sheriff o un agente federal en servicio puede arrestarte si estás a menos de **5 metros** de él y ambos se encuentran dentro de la propia cárcel, de un vehículo policial o de una propiedad policial. No se puede arrestar a otro policía.

El oficial arma entonces un **reporte de arresto**: escribe una descripción del hecho (mínimo 8 caracteres) y añade uno o más cargos del código penal. Sin descripción y sin al menos un cargo, el arresto no puede cerrarse.

Existen límites para evitar sobrecargar un arresto:

- Un oficial común no puede procesar un arresto con **más de 6 cargos**; esos casos deben pasar por la fiscalía, el FBI o un juez.
- Tampoco puede procesar **más de 3 cargos de la misma categoría** del código penal.

### Cómo se calcula tu condena

Cuando el oficial cierra el reporte, el sistema no suma los tiempos de todos los cargos. Funciona así:

| Concepto | Cómo se calcula |
|---|---|
| **Tiempo de cárcel** | El **mayor** tiempo entre todos los cargos añadidos |
| **Tiempo obligatorio extra** | **15 minutos** que se suman al final |
| **Libertad condicional** | El **mayor** plazo de condicional entre todos los cargos |
| **Multa** | La **suma** de las multas de todos los cargos |
| **Puntos criminales** | La **suma** según el tipo de cada cargo |

Sobre el tiempo resultante se aplican dos topes: si queda por debajo de **5 minutos** se eleva a 5, y si supera los **180 minutos** se recorta a 180. La única excepción es la cadena perpetua, que no se recorta. Después se suman los 15 minutos obligatorios: un arresto de 60 minutos pasa a ser de **75 minutos**, y `/tiempocarcel` te muestra siempre el total que te falta.

Los minutos de la condena se descuentan **de uno en uno mientras estás conectado y sin pausar el juego**. Desconectarte o pausar no los hace avanzar ni retroceder.

Añadir muchos cargos menores no alarga tu encierro, pero **sí multiplica la multa y los puntos criminales**.

## El código penal

Los cargos se agrupan en ocho categorías: delitos contra el estado, contra la justicia, contra la persona, contra el orden y la salud pública, contra la regulación de armas de fuego, contra la propiedad, contra la privacidad y contra la seguridad vial. Cada cargo tiene un tipo que determina su gravedad:

| Tipo | Tiempo de cárcel | Multa habitual | Puntos criminales |
|---|---|---|---|
| **Infracción** | Sin cárcel | $240 – $9.600 | **0** |
| **Menor** | 15 a 45 minutos | $570 – $25.000 | **1** |
| **Grave** | 15 a 60 minutos | $1.000 – $150.000 | **2** |

Los tiempos de cárcel del código penal son escalones fijos de **15, 30, 45 y 60 minutos**. Un cargo excepcional (homicidio intencional de un agente federal) figura con 360 minutos, pero el tope de **180 minutos** también lo recorta. Dos cargos implican directamente cadena perpetua: homicidio en primer grado con perpetua y la agravante de reincidencia grave.

Los cargos más pesados combinan 60 minutos de cárcel con multas muy altas: lavado de dinero **$150.000**, posesión de rifles de asalto o .50 BMG **$120.000**, homicidio intencional de un oficial de la paz **$50.000** más 15 días de condicional.

La multa se descuenta **automáticamente de tu cuenta bancaria** al momento del arresto y queda registrada como pagada; no necesitas pasar por `/pagarmulta`. Si el saldo no alcanza, quedas con deuda.

### Reincidencia y cadena perpetua

El sistema lleva la cuenta de tus **arrestos con cargos graves de los últimos 30 días**, y te avisa al conectarte. Al llegar a **3 arrestos graves**, un juez o supervisor puede añadir a tu reporte la agravante de reincidencia grave, que implica **cadena perpetua**.

### Puntos criminales

Cada arresto suma puntos criminales según los cargos. El límite es de **30 puntos**: alcanzarlos significa un castigo automático de **1 semana** de cárcel, independientemente del cálculo normal de minutos, y te descuenta 15 puntos de golpe. Esa semana corre en tiempo real, estés conectado o no, y la condena normal empieza a contar después.

Los puntos bajan de dos maneras: **permaneciendo conectado dentro de la cárcel** (en cada payday pierdes 1 punto mientras estés encarcelado y sin pausar el juego) y **leyendo el libro sobre reinserción social** en la biblioteca de la prisión.

## Qué pierdes al entrar

El ingreso a la cárcel no es gratuito para tu personaje. Al ser arrestado:

- **El contrabando se confisca y se destruye**: armas (también las blancas), cargadores y munición, granadas, drogas, ganzúas, skimmers, licencias falsas, bombas, cócteles molotov, casetes de cajero y joyas robadas. También lo que lleves dentro de mochilas, bolsos y otros contenedores.
- **Todo lo demás queda en custodia**: ropa, teléfono, radios, chalecos, cascos, máscaras, gafas, guantes, cadenas, relojes, herramientas y el resto de tus objetos se te devuelven al salir, ya sea con `/salircarcel`, porque un oficial te libere o al quedar en libertad condicional. El chaleco conserva su blindaje.
- **Lo que consigas dentro de la cárcel se pierde al salir**: lo que compras en el quiosco, lo que fabricas y lo que guardas en tu escondite no sale contigo.
- **Tu dinero en efectivo pasa íntegro a tu cuenta bancaria** y quedas con $0 en mano. El bloqueo bancario, si lo tenías, se levanta.
- **Se te revocan las licencias**: portación de armas, permiso de compra de armas (formulario 4473), licencia de caza y licencia RESP de seguridad privada. Consulta el [sistema de armas](sistema-de-armas.md) para saber cómo volver a obtenerlas.
- **Pierdes habilidad de delincuente y de drogas** (ver más abajo).
- **Dejas de cobrar el payday** mientras estés encarcelado, y tu facción tampoco te paga el dinero de las zonas de pandilla.
- Nadie de fuera puede **cederte objetos** mientras estés preso.
- Tu condición de prófugo, si la tenías, termina con el arresto.

Si tu cuenta está certificada y no perteneces a una facción legal, pasas a ser **delincuente** automáticamente al ingresar. Consulta el [sistema de delincuente](sistema-de-delincuente.md).

### Pérdida de habilidad criminal

Ser arrestado te cuesta puntos de **habilidad de delincuente** y de **habilidad de drogas**, y el castigo crece con la duración de la condena:

| Condena | Habilidad perdida |
|---|---|
| 5 a 8 minutos | **20 puntos** |
| 9 a 12 minutos | **30 puntos** |
| 13 a 24 minutos | **40 puntos** |
| 25 a 48 minutos | **50 puntos** |
| 49 minutos o más | **60 puntos** |

Como la condena mínima es de 5 minutos, cualquier arresto cuesta al menos 20 puntos de cada habilidad, y una condena típica de 30 minutos cuesta 50. La pérdida se aplica a las dos habilidades por separado si tienes ambas. Si perteneces a una facción ilegal oficial pierdes solo la mitad de esos puntos, y si es una facción destacada, tres cuartos. Más detalles sobre cómo se gana y se pierde esa experiencia en el [sistema de delincuente](sistema-de-delincuente.md).

## Twin Towers Correctional Facility

La **Twin Towers Correctional Facility** (o _Twin Towers Jail_) es el complejo carcelario del condado de Los Santos, ubicado en **934 Artesina Avenue**. Consta de dos torres, un edificio de servicios médicos y la cárcel del Los Santos County Medical Center.

Inaugurado en **1997**, su diseño de seguridad es **panóptico**: los agentes en una sala de control central pueden observar todas las áreas del recinto. En 2013, junto con la Men's Central Jail adyacente, fue clasificada como una de las diez peores cárceles de condado de Estados Unidos.

### Secciones y celdas

El edificio alberga dos secciones de reclusos: **187-A-POD** (lado izquierdo) y **187-B-POD** (lado derecho). Cada sección tiene exactamente **12 celdas**, numeradas del 1 al 12, es decir, **24 celdas** en total.

Cada celda está equipada con un camarote de dos camas, un estante para objetos personales, un retrete y un escritorio empotrado.

Las celdas y los pasillos **se abren automáticamente cada vez que el servidor se reinicia**. A partir de ahí, solo los guardias del SADCR en servicio pueden bloquearlos y desbloquearlos desde el panel de control, que está en la sala de control dentro de las secciones. Desde ahí se manejan los pasillos, el patio, la cafetería, la lavandería, los talleres, la sala de visitas y las celdas, una por una o por bloque (**A** o **B**).

Mientras una celda está desbloqueada, cualquiera puede abrir o cerrar su reja con `/abrir` y `/cerrar` estando junto a ella.

### Uniforme de interno

La primera vez que ingresan, los hombres eligen su uniforme de preso desde un catálogo visual; en los ingresos siguientes conservan el último que elegiste. Puedes cambiarlo las veces que quieras con `/uniformecarcel`. Las mujeres no tienen uniforme de preso.

## Pasillo de servicios

El pasillo del sector 1 da acceso a los servicios básicos de la cárcel: **cafetería, gimnasio, biblioteca, iglesia y lavandería**. Su apertura depende de los guardias del SADCR y del panel de control.

### Cafetería

Los internos pueden entregar **bandejas de comida** a otros reclusos desde el puesto de la cafetería. Quien entrega la bandeja cobra **$5** por cada una aceptada.

Para entregar una bandeja necesitas estar en el puesto de la cafetería y a menos de **3 metros** del otro interno. Él debe aceptarla con `/aceptar`. No puedes dar de comer a alguien que ya comió en la **última hora**, ni a quien tenga las manos ocupadas. El receptor recibe la bandeja en la mano y queda cargándola.

### Biblioteca

La biblioteca de la prisión es una de las actividades más rentables del encierro: leer sube habilidades reales de tu personaje. Debes estar **sentado** (`/sentarse`) dentro de la biblioteca y mantenerte ahí durante toda la lectura; si te levantas o te alejas, pierdes el capítulo.

| Libro | Qué mejora | Bonificación | Tiempo |
|---|---|---|---|
| Sobre electrónica | Habilidad de electrónica | 1-2 | **15 min** |
| Sobre primeros auxilios | Habilidad de paramédico | 0-1 | **15 min** |
| Sobre química | Habilidad de drogas | 1-2 | **15 min** |
| Sobre balística y armas de fuego | Habilidad de armas | 1-2 | **12 min** |
| Sobre la reinserción social | Reduce puntos criminales | 1-3 | **10 min** |
| Sobre cerrajería automotriz | Habilidad de ladrón de autos | 1-2 | **10 min** |
| Sobre modales y buenas costumbres | Respeto | 1-2 | **10 min** |
| Sobre caza y rastreo de animales | Habilidad de caza | 1-2 | **8 min** |
| Sobre dispositivos de seguridad | Habilidad de ladrón de casas | 1-2 | **7 min** |
| Sobre mecánica | Habilidad de mecánico | 1-2 | **6 min** |
| Sobre técnicas de pesca | Habilidad de pesca | 1-2 | **6 min** |
| Sobre camiones | Habilidad de camionero | 1-2 | **5 min** |
| Sobre reciclaje y medio ambiente | Habilidad de basurero | 1-2 | **3 min** |

Solo puedes leer **un capítulo cada 30 minutos**. La biblioteca también está disponible fuera de la cárcel, en las bibliotecas públicas de la ciudad.

### Gimnasio e iglesia

Espacios del recinto destinados a roleplay, controlados desde el panel de accesos del SADCR.

## Trabajos en la cárcel

Twin Towers tiene **cuatro trabajos** con los que ganas dinero y, además, **acortas tu condena**. Todos funcionan igual:

- El turno se empieza y se termina pulsando **H** en el puesto de cada trabajo.
- Si sales del área del trabajo, el turno termina.
- Solo puedes tener un turno a la vez. Durante el turno no puedes tirar objetos ni usar `/fabricar`, porque las manos son del trabajo.
- Las herramientas del trabajo (cesta, escoba, caja de repuestos) son objetos del turno: no salen del puesto y se borran al terminar.
- Los talleres y la lavandería deben estar abiertos por los guardias del SADCR.
- Cada pago cae directamente en tu mano, en efectivo.

| Trabajo | Qué haces | Pago |
|---|---|---|
| **Lavandería** | Lavar la ropa en la lavadora, colgarla, doblar cada prenda con una secuencia de teclas y entregar la carga | **$10 a $50** por carga |
| **Cocina** | Barrer los montones de basura con un minijuego de teclas | **$10 a $50** por tanda |
| **Carpintería** | Cortar madera, armar una silla por piezas martillando al ritmo de las teclas y entregarla | **$30 a $100** por silla |
| **Mantenimiento** | Retirar una orden en el almacén y arreglar lavadoras, motores, baterías, cañerías, televisores y más; cada equipo tiene su propio minijuego | **$30 a $100** por arreglo |

El pago base crece con bonos por trabajar sin errores y por rachas de trabajos perfectos; en la lavandería y la cocina también por terminar rápido. En la carpintería y el mantenimiento la terminación paga más cuantos menos fallos cometas: cada fallo descuenta del pago, y en el mantenimiento, si fallas demasiadas veces seguidas, la parte no sale y tienes que reintentarla.

### Descuento de condena

Cada vez que cobras un trabajo (una carga, una tanda, una silla o un arreglo), tu condena baja **5 minutos**. Al terminar el turno se muestra cuántos minutos acortaste.

El descuento solo se aplica al tiempo de condena que corre estando conectado: no acorta la semana de castigo por puntos criminales ni la cadena perpetua voluntaria.

## Fabricación en la cárcel

Los trabajos a veces dejan materiales, directo en tu inventario (**15 %** en la cocina, la carpintería y el mantenimiento; la lavandería deja un trapo con un **12 %**). Con un material en cada mano, usa `/fabricar`:

| Materiales | Resultado |
|---|---|
| Restos de fruta o verdura + restos de fruta o verdura | **Pruno** (4 tragos, cuenta como alcohol) |
| Plástico roto + plástico roto | **Navaja de plástico** (6 de daño, provoca sangrado) |
| Plástico roto + pedazo de madera | **Cuchillo improvisado** (8 de daño, provoca sangrado) |
| Pedazo de madera + pedazo de madera | **Estoque** (12 de daño, contundente) |

Los restos salen de la cocina, el plástico del mantenimiento y la madera de la carpintería. Nada de esto se vende en tiendas. Las armas fabricadas son contrabando: los guardias las ven al cachear y se pierden al salir. El trapo de la lavandería sirve de venda con `/vendar` y `/vendarme`.

## Escondite

Cada interno puede crear **su propio escondite**, gratis, para guardar objetos sin que los vean los demás:

- Usa `/stash situar` donde quieras tenerlo. Para moverlo, debe estar vacío.
- Tiene **16 ranuras** y solo lo ve y lo usa su dueño. Estando a menos de 2 metros se abre con `/stash`, y con `/stash sacar` y `/stash guardar` mueves objetos.
- No admite objetos pesados, de facción ni de un trabajo en curso.
- Solo existe mientras estás preso: al salir libre ya no lo puedes usar.
- Los policías y guardias de servicio pueden **destruir** un escondite con todo su contenido.

## Visitas a la cárcel

Cualquier persona puede visitar a un interno desde la recepción de **Twin Towers Visiting Room**:

1. El visitante usa `/visitacarcel [id]` estando en la recepción. El interno debe estar en la cárcel y no estar ya en una visita.
2. El interno recibe la oferta y la acepta con `/aceptar` **parado en el punto de salida de su bloque**. Si está lejos, se le marca el punto en el mapa y debe volver a usar `/aceptar` allí.
3. La visita dura **5 minutos** en la sala de visitas. Al terminar, el interno vuelve solo a su bloque. Los guardias de servicio reciben un aviso por radio.

Durante la visita el interno no puede recibir, tirar ni recoger objetos. La visita termina antes si lo aíslan o lo trasladan a juicio.

## Quiosco de la cárcel

Dentro del recinto hay un **quiosco (commissary)** donde los internos compran artículos básicos **pagando en efectivo**. Como el arresto te deja sin dinero en mano, hay que ganarlo dentro (por ejemplo con los trabajos o repartiendo bandejas en la cafetería).

| Artículo | Precio |
|---|---|
| Naranja, manzana, banana | **$20** |
| Lata de ECola Light | **$30** |
| Botella de agua, café | **$60** |
| Sándwich, lata de ECola | **$70** |
| Paquete de snacks | **$80** |
| Ramen para preparar | **$90** |
| Caja de leche, dónuts, dispensador de crema | **$120** |
| Jabón, papel higiénico, Biblia, Corán, baraja de cartas, ajedrez, abanico | **$150** |
| Calculadora, rollo de gasa | **$440** |
| Radio barata | **$720** |
| Auriculares | **$860** |

Necesitas tener la mano derecha libre para comprar.

## Confinamiento y aislamiento

En la sección de **confinamiento** se encuentran los reclusos aislados por mal comportamiento o agresividad. Solo los guardias del SADCR en servicio pueden mandar internos a esta sección, indicando un tiempo de **entre 1 y 120 minutos** y una razón.

Mientras estés aislado apareces en una de las celdas de confinamiento y **no puedes salir de la cárcel aunque tu condena haya terminado**: primero debe agotarse el aislamiento.

Los reclusos que **dejen herido a otro interno** reciben automáticamente **60 minutos más** de condena, ya que la cárcel es un nicho de roleplay y no una zona off-rol. Además, cada asesinato cometido dentro de la cárcel pesa el doble en tu estado mental (ver [sistema de asesinatos](sistema-de-asesinatos.md)).

Los guardias del SADCR pueden atender con `/curar` a cualquier persona herida dentro de la cárcel si llevan un botiquín de primeros auxilios en la mano derecha.

## Patio

Aunque la Twin Towers no tiene patio en la vida real, en el servidor se implementó para romper la monotonía y generar roles interesantes. **Depende por completo de la actividad del SADCR**: son sus guardias quienes lo abren. Está equipado con una **cancha de baloncesto**, un **quiosco**, estructuras para **gimnasia** y **tres secciones de mesas**.

## Centro médico

La cárcel cuenta con una sección médica de **seis camas de cuidados intensivos** y un **módulo de enfermería**. Para heridas y atención médica en general, revisa el [sistema médico y hospital](sistema-medico-y-hospital.md).

## Avisar a los guardias

Cuando pasa algo dentro de la cárcel y no hay guardias presentes, los internos pueden avisar al SADCR de dos formas:

- **Evento de cárcel** (`/eventocarcel`): envías una descripción detallada del entorno y los personajes involucrados (celda, módulo, vestimenta, etnia…) a todos los guardias de servicio. Entre **5 y 128 caracteres**. Cooldown de **30 minutos** para todo el servidor. No abuses de este aviso.
- **Solicitud de guardias** (`/solicitardeputies`): avisas por radio a los guardias de servicio de que hay un incidente en Twin Towers, indicando el motivo. Cooldown de **10 minutos** para todo el servidor.

Ambos avisos están disponibles solo para **internos hombres**, porque las mujeres no están asignadas a Twin Towers.

## Cumplir y salir

El tiempo de cárcel **solo corre mientras estás conectado y sin pausar el juego**: desconectarte no acorta la condena. La ventaja de estar dentro es poder rolear, trabajar para acortarla, leer, comer y bajar puntos criminales. Los 15 minutos obligatorios ya forman parte del total que te falta.

Cuando tu tiempo llega a cero, usa `/salircarcel` para quedar libre. Al salir se destruye lo que hayas acumulado dentro de la prisión, recuperas tu apariencia normal y tus pertenencias en custodia, y apareces en la puerta del recinto como exconvicto.

No puedes usar `/salircarcel` si estás en **prisión preventiva**, si estás **aislado** o si llevas un **personaje carcelario permanente**.

Un oficial de policía o un juez de servicio también puede liberarte con `/liberar` estando en la cárcel.

Alejarte del recinto por medios que no sean la liberación normal te devuelve automáticamente a la cárcel, igual que subirte a un vehículo estando preso.

Mientras estás preso, el tiempo dentro de Twin Towers cuenta como tiempo al aire libre para la doble y triple experiencia, la racha diaria, el Burger Point del payday y la felicidad.

### Traslados a juicio

Los guardias de la cárcel y el personal judicial pueden iniciar un **traslado a juicio**, que te permite salir del recinto escoltado sin que el sistema te devuelva a la celda. Al terminar el traslado vuelves a la cárcel. Si te desconectas durante el traslado, reapareces dentro de la prisión.

### Prisión preventiva

Un juez puede decretar **prisión preventiva** por hasta **7 días** a un interno mientras se investiga su caso. Estando en preventiva no tienes un contador de condena que consultar ni puedes liberarte por tu cuenta con `/salircarcel`: cuando el plazo expira, o cuando el juez te saca de la preventiva, el sistema te avisa y ya puedes usar `/salircarcel` (siempre que no te quede condena por cumplir). Si después llega una condena firme, esta reemplaza la preventiva. El detalle del proceso está en el [sistema de justicia](sistema-de-justicia.md).

## Libertad condicional

Muchos cargos graves traen aparejada **libertad condicional** (parole) al salir. El plazo habitual es de **5, 10 o 15 días** según el cargo más severo del arresto, y un juez puede además asignarla o retirarla a mano por hasta **30 días**. El reloj de la condicional empieza a correr cuando termina tu condena de cárcel.

Durante ese periodo llevas una **tobillera** y debes cumplir 15 reglas estrictas: informar dónde vives y trabajas, presentarte cuando se te indique, obedecer toda instrucción verbal o escrita, pedir permiso para viajar más de 50 millas o salir del condado, no acercarte a armas ni municiones, y obedecer todas las leyes. Romper cualquiera de ellas puede devolverte a la cárcel **sin necesidad de un nuevo caso penal**.

Los **guardias del SADCR en servicio** supervisan a los parolees: pueden **rastrear tu tobillera**, y al hacerlo apareces marcado en su radar durante **5 minutos**; no pueden repetir el rastreo del mismo parolee hasta pasados **15 minutos**. También tienen una lista de los parolees conectados, y los ordenadores policiales muestran en la ficha de cada persona si su condicional está vigente, vencida o sin fecha.

Puedes pedir la presencia de un oficial de libertad condicional cada **15 minutos** para cuestiones relacionadas con tu situación: los guardias de servicio reciben el aviso y tu posición queda marcada en su mapa durante **5 minutos**. Solo puedes hacerlo si hay al menos un guardia de servicio. Cuando vence el plazo, debes terminar voluntariamente la condicional con `/terminarparole` para quitarte la tobillera: no se cae sola.

Con un arma o una herramienta cortante puedes **cortar la tobillera** y convertirte en **prófugo**: tu condicional queda en pausa hasta que te arresten, y la ciudad entera te busca. Todo el detalle está en el [sistema de prófugos](sistema-de-profugos.md).

### Comandos

- /reglasparole — muestra las 15 reglas oficiales de la libertad condicional. Alias: `/reglasp`.
- /tiempoparole — muestra cuánto tiempo te queda de condicional. Alias: `/tiempop`.
- /solicitaroficialparole — solicita la presencia de un oficial de libertad condicional (cooldown 15 min).
- /terminarparole — da por finalizada tu condicional al expirar el plazo. Alias: `/terminarp`.
- /rompertobillera — empieza a cortar tu tobillera (ver [prófugos](sistema-de-profugos.md)).

## Pedidos ilegales de las penitenciarías

Las facciones penitenciarias oficiales pueden encargar armas y drogas por teléfono, sin ensamblar ni cocinar nada. Cada pedido cuesta influencia en la zona de la prisión y llega a un punto de entrega entre 25 y 35 minutos después. Los requisitos y los enfriamientos están en [facciones ilegales](facciones-ilegales.md).

## Personajes en perpetua

Los personajes que deseen ingresar **permanentemente** a la cárcel (para roles de Mafia Mexicana, PEN1 u otras facciones carcelarias) pueden hacerlo acercándose al acceso principal del recinto y usando `/encarcelarme`.

La perpetua implica una condena de **3 meses** en tiempo real, estés conectado o no, y **no es reversible**. Las únicas formas de salir son cumplir los tres meses completos o solicitar un **Character Kill** del personaje. No habrá arrepentimientos ni devoluciones por el tiempo cumplido, y al entrar se te confisca el contrabando y el resto de tu inventario queda en custodia igual que en un arresto normal.

No puedes encarcelarte voluntariamente si eres prófugo.

## Consejos

- **Mantén la condena corta**: como la habilidad criminal que pierdes escala con los minutos de sentencia, negociar cargos menores en lugar de graves vale más que ahorrarse la multa.
- **Trabaja en la cárcel**: cada carga, tanda, silla o arreglo cobrado te quita 5 minutos de condena, además de pagarte.
- **Aprovecha la biblioteca**: 30 minutos de espera entre capítulos es poco comparado con lo que ganas; el libro de reinserción social es la única forma activa de bajar puntos criminales aparte de quedarte conectado.
- **Reparte bandejas** en la cafetería o trabaja si necesitas efectivo para el quiosco: entras a la cárcel sin un peso en la mano.
- **Quédate conectado** dentro de la prisión: tu condena solo avanza así, bajas puntos criminales en cada payday y evitas llegar al límite de 30, que significa una semana entera de encierro.
- **No agredas a otros internos**: cada interno que dejes herido te suma 60 minutos de condena.
- Si sales con condicional, revisa las reglas antes de moverte: llevar un arma encima durante la condicional basta para volver adentro. Las facciones que hacen cumplir todo esto están descritas en [facciones legales](facciones-legales.md).
