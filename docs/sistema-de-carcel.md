# Sistema de cárcel

## Introducción

La cárcel es el destino de todo personaje arrestado por la policía. En el servidor representa fielmente una **cárcel del condado**, sin confundirla con prisiones federales o estatales: para efectos prácticos, **prisión y cárcel son lo mismo** y ambos términos se refieren a la Twin Towers Correctional Facility.

Dentro de Twin Towers conviven dos tipos de reclusos: los **condenados**, ya sentenciados y cumpliendo su tiempo, y los **internos a la espera de juicio**, en prisión preventiva mientras se resuelve su caso.

La cárcel está administrada por el **Los Santos County Sheriff's Department (LSSD)**. Los arrestos que hagan Los Santos Police Department, Los Santos County Sheriff's Department o agencias del Department of Justice trasladan a los reclusos automáticamente a la Twin Towers Correctional Facility. Las secciones del complejo son únicamente para hombres: **las mujeres cumplen condena en la cárcel de la estación del sheriff**, no en Twin Towers.

Las condenas se cuentan en **minutos**, no en horas. La sentencia mínima que puede aplicarse es de **5 minutos** y la máxima de **180 minutos (3 horas)**, salvo la cadena perpetua. Para el proceso judicial que rodea al arresto (juicios, abogados, órdenes, apelaciones) consulta el [sistema de justicia](sistema-de-justicia.md).

### Comandos

- /tiempocarcel — muestra cuántos minutos te quedan de condena.
- /salircarcel — sales de la cárcel cuando se ha cumplido tu condena. Alias: `/salirprision`.
- /uniformecarcel — cambia tu uniforme de interno (solo hombres).
- /encarcelarme — entra voluntariamente a la cárcel con condena de 3 meses (junto a la entrada principal).
- /quioscocarcel — abre el menú del quiosco de la cárcel. Alias: `/quiosco`, `/quioscoc`.
- /cafeteria [id] — entrega una bandeja de comida a otro interno (dentro del puesto de cafetería).
- /biblioteca — lee un libro para subir habilidades (sentado, dentro de la biblioteca). Alias: `/libros`, `/leerlibro`, `/leer`.
- /eventocarcel — envía una alerta de evento carcelario a los deputies de LSSD.
- /solicitardeputies [razón] — solicita la presencia de deputies en la cárcel.
- /presos — muestra cuántos presos hay conectados.
- /guardias — muestra cuántos guardias hay conectados.

## Cómo llegas a la cárcel

Un oficial de policía, un ayudante del sheriff o un agente federal en servicio puede arrestarte si estás a menos de **5 metros** de él y ambos se encuentran dentro de la propia cárcel, de un vehículo policial o de una propiedad policial. No se puede arrestar a otro policía.

El oficial arma entonces un **reporte de arresto**: escribe una descripción del hecho (mínimo 8 caracteres) y añade uno o más cargos del código penal. Sin descripción y sin al menos un cargo, el arresto no puede cerrarse.

Existen límites para evitar sobrecargar un arresto:

- Un oficial común no puede procesar un arresto con **6 o más cargos**; esos casos deben pasar por la fiscalía o el FBI.
- Tampoco puede procesar **3 o más cargos de la misma categoría** del código penal.

### Cómo se calcula tu condena

Cuando el oficial cierra el reporte, el sistema no suma los tiempos de todos los cargos. Funciona así:

| Concepto | Cómo se calcula |
|---|---|
| **Tiempo de cárcel** | El **mayor** tiempo entre todos los cargos añadidos |
| **Libertad condicional** | El **mayor** plazo de condicional entre todos los cargos |
| **Multa** | La **suma** de las multas de todos los cargos |
| **Puntos criminales** | La **suma** según el tipo de cada cargo |

Sobre el tiempo resultante se aplican dos topes: si queda por debajo de **5 minutos** se eleva a 5, y si supera los **180 minutos** se recorta a 180. La única excepción es la cadena perpetua, que no se recorta.

Añadir muchos cargos menores no alarga tu encierro, pero **sí multiplica la multa y los puntos criminales**.

## El código penal

Los cargos se agrupan en ocho categorías: delitos contra el estado, contra la justicia, contra la persona, contra el orden y la salud pública, contra la regulación de armas de fuego, contra la propiedad, contra la privacidad y contra la seguridad vial. Cada cargo tiene un tipo que determina su gravedad:

| Tipo | Tiempo de cárcel | Multa habitual | Puntos criminales |
|---|---|---|---|
| **Infracción** | Sin cárcel | $240 – $6,000 | **1** |
| **Menor** | 15 a 45 minutos | $570 – $25,000 | **3** |
| **Grave** | 15 a 60 minutos | $1,000 – $150,000 | **5** |

Los tiempos de cárcel del código penal son escalones fijos de **15, 30, 45 y 60 minutos**. Solo un cargo excepcional (homicidio intencional de un agente federal) llega a **360 minutos**, y dos cargos implican directamente cadena perpetua: homicidio en primer grado con perpetua y la agravante de reincidencia grave.

Los cargos más pesados combinan 60 minutos de cárcel con multas muy altas: lavado de dinero **$150,000**, posesión de rifles de asalto o .50 BMG **$120,000**, homicidio intencional de un oficial de la paz **$50,000** más 15 días de condicional.

La multa se descuenta **automáticamente de tu cuenta bancaria** al momento del arresto y queda registrada como pagada; no necesitas pasar por `/pagarmulta`. Si el saldo no alcanza, quedas con deuda.

### Reincidencia y cadena perpetua

El sistema lleva la cuenta de tus **arrestos con cargos graves de los últimos 30 días**, y te avisa al conectarte. Al llegar a **3 arrestos graves**, un juez o supervisor puede añadir a tu reporte la agravante de reincidencia grave, que implica **cadena perpetua**.

### Puntos criminales

Cada arresto suma puntos criminales según los cargos. El límite es de **30 puntos**: alcanzarlos significa una condena automática de **1 semana** de cárcel, independientemente del cálculo normal de minutos, y te descuenta 15 puntos de golpe.

Los puntos bajan de dos maneras: **permaneciendo conectado dentro de la cárcel** (cada payday se reduce al menos 1 punto mientras estés activo y encarcelado) y **leyendo el libro sobre reinserción social** en la biblioteca de la prisión.

## Qué pierdes al entrar

El ingreso a la cárcel no es gratuito para tu personaje. Al ser arrestado:

- **Todo tu inventario es confiscado y destruido**: cigarros, encendedores, drogas, armas, munición, herramientas, mochilas, teléfonos, radios, chalecos, cascos, máscaras, gafas, guantes, cadenas, relojes y todo lo que lleves en las manos o encima.
- **Tu dinero en efectivo pasa íntegro a tu cuenta bancaria** y quedas con $0 en mano. El bloqueo bancario, si lo tenías, se levanta.
- **Se te revocan las licencias**: portación de armas, permiso de compra de armas (formulario 4473), licencia de caza y licencia RESP de seguridad privada. Consulta el [sistema de armas](sistema-de-armas.md) para saber cómo volver a obtenerlas.
- **Pierdes habilidad de delincuente y de drogas** (ver más abajo).
- **Dejas de cobrar el payday** mientras estés encarcelado.
- Nadie de fuera puede **cederte objetos** mientras estés preso.
- Tu estado de persona más buscada se limpia.

### Pérdida de habilidad criminal

Ser arrestado te cuesta puntos de **habilidad de delincuente** y de **habilidad de drogas**, y el castigo crece con la duración de la condena:

| Condena | Habilidad perdida |
|---|---|
| 5 a 8 minutos | **20 puntos** |
| 9 a 12 minutos | **30 puntos** |
| 13 a 24 minutos | **40 puntos** |
| 25 a 48 minutos | **50 puntos** |
| 49 minutos o más | **60 puntos** |

Como la condena mínima es de 5 minutos, cualquier arresto cuesta al menos 20 puntos de cada habilidad, y una condena típica de 30 minutos cuesta 50. La pérdida se aplica a las dos habilidades por separado si tienes ambas. Más detalles sobre cómo se gana y se pierde esa experiencia en el [sistema de delincuente](sistema-de-delincuente.md).

## Twin Towers Correctional Facility

La **Twin Towers Correctional Facility** (o _Twin Towers Jail_) es el complejo carcelario del condado de Los Santos, ubicado en **934 Artesina Avenue**. Consta de dos torres, un edificio de servicios médicos y la cárcel del Los Santos County Medical Center.

Inaugurado en **1997**, su diseño de seguridad es **panóptico**: los agentes en una sala de control central pueden observar todas las áreas del recinto. En 2013, junto con la Men's Central Jail adyacente, fue clasificada como una de las diez peores cárceles de condado de Estados Unidos.

### Secciones y celdas

El edificio alberga dos secciones de reclusos: **187-A-POD** (lado izquierdo) y **187-B-POD** (lado derecho). Cada sección tiene exactamente **12 celdas**, numeradas del 1 al 12.

Cada celda está equipada con un camarote de dos camas, un estante para objetos personales, un retrete y un escritorio empotrado.

Las celdas y los pasillos **se abren automáticamente cada vez que el servidor se reinicia**. A partir de ahí, solo los ayudantes del sheriff pueden abrirlas y cerrarlas desde el panel de control, que está en la sala de control dentro de las secciones. Desde ahí se manejan los pasillos, el patio, cada servicio y cada celda individual usando como referencia la **sección** (A o B) y el **número de celda** (1-12).

### Uniforme de interno

Al ingresar, los hombres eligen su uniforme de preso desde un catálogo visual, y pueden cambiarlo las veces que quieran con `/uniformecarcel`. Las mujeres no tienen uniforme de preso.

## Pasillo de servicios

El pasillo del sector 1 da acceso a los servicios básicos de la cárcel: **cafetería, gimnasio, biblioteca, iglesia y lavandería**. Su apertura depende del personal del LSSD y del panel de control.

### Cafetería

Los internos pueden entregar **bandejas de comida** a otros reclusos desde el puesto de la cafetería. Quien entrega la bandeja cobra **$5** por cada una aceptada, así que es la forma más directa de generar algo de efectivo estando preso.

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

### Gimnasio, iglesia y lavandería

Espacios del recinto destinados a roleplay, controlados desde el panel de accesos del LSSD.

## Quiosco de la cárcel

Dentro del recinto hay un **quiosco (commissary)** donde los internos compran artículos básicos **pagando en efectivo**. Como el arresto te deja sin dinero en mano, hay que ganarlo dentro (por ejemplo repartiendo bandejas en la cafetería).

| Artículo | Precio |
|---|---|
| Naranja, manzana, banana | **$2** |
| Lata de ECola Light | **$3** |
| Botella de agua, café | **$6** |
| Sándwich, lata de ECola | **$7** |
| Paquete de snacks | **$8** |
| Ramen para preparar | **$9** |
| Caja de leche, dónuts, dispensador de crema | **$12** |
| Jabón, papel higiénico, Biblia, Corán, baraja de cartas, ajedrez, abanico | **$15** |
| Calculadora, rollo de gasa | **$44** |
| Radio barata | **$72** |
| Auriculares | **$86** |

Necesitas tener la mano derecha libre para comprar.

## Confinamiento y aislamiento

En la sección de **confinamiento** se encuentran los reclusos aislados por mal comportamiento o agresividad. Solo los agentes del Los Santos County Sheriff's Department pueden mandar internos a esta sección, indicando un tiempo de **entre 1 y 120 minutos** y una razón.

Mientras estés aislado apareces en una de las celdas de confinamiento y **no puedes salir de la cárcel aunque tu condena haya terminado**: primero debe agotarse el aislamiento.

Los reclusos que **abatan a otro interno** reciben automáticamente **+3 horas** de condena, ya que la cárcel es un nicho de roleplay y no una zona off-rol.

## Patio

Aunque la Twin Towers no tiene patio en la vida real, en el servidor se implementó para romper la monotonía y generar roles interesantes. **Depende por completo de la actividad del Los Santos County Sheriff's Department**: son ellos quienes lo abren. Está equipado con una **cancha de baloncesto**, un **quiosco**, estructuras para **gimnasia** y **tres secciones de mesas**.

## Centro médico

La cárcel cuenta con una sección médica de **seis camas de cuidados intensivos** y un **módulo de enfermería**. Para heridas y atención médica en general, revisa el [sistema médico y hospital](sistema-medico-y-hospital.md).

## Avisar a los deputies

Cuando pasa algo dentro de la cárcel y no hay deputies presentes, los internos pueden avisar al LSSD de dos formas:

- **Evento de cárcel** (`/eventocarcel`): envías una descripción detallada del entorno y los personajes involucrados (celda, módulo, vestimenta, etnia…) a todos los deputies, incluso desconectados. Entre **5 y 128 caracteres**. Cooldown de **30 minutos** para todo el servidor. No abuses o puedes ser sancionado.
- **Solicitud de deputies** (`/solicitardeputies`): avisas por radio a los deputies de servicio de que hay un incidente en Twin Towers, indicando el motivo. Cooldown de **10 minutos** para todo el servidor.

Ambos avisos están disponibles solo para **internos hombres**, porque las mujeres no están asignadas a Twin Towers.

## Cumplir y salir

El tiempo de cárcel **transcurre igual estando desconectado**: la condena sigue corriendo aunque no estés en el servidor. Tampoco corre al doble de velocidad por estar conectado; la ventaja de estar dentro es poder rolear, leer, comer y bajar puntos criminales.

Cuando tu tiempo llega a cero, usa `/salircarcel` para quedar libre. Al salir se te destruye lo que hayas acumulado en el inventario de la prisión, recuperas tu apariencia normal y apareces en la puerta del recinto como exconvicto.

No puedes usar `/salircarcel` si estás en **prisión preventiva**, si estás **aislado** o si llevas un **personaje carcelario permanente**.

Alejarte del recinto por medios que no sean la liberación normal te devuelve automáticamente a la cárcel, igual que subirte a un vehículo estando preso.

### Traslados a juicio

Los guardias de la cárcel y el personal judicial pueden iniciar un **traslado a juicio**, que te permite salir del recinto escoltado sin que el sistema te devuelva a la celda. Al terminar el traslado vuelves a la cárcel. Si te desconectas durante el traslado, reapareces dentro de la prisión.

### Prisión preventiva

Un juez puede decretar **prisión preventiva** por hasta **7 días** mientras se investiga tu caso. Estando en preventiva no tienes un contador de condena que consultar ni puedes liberarte por tu cuenta: cuando el plazo expira, el sistema te libera automáticamente. Si después llega una condena firme, esta reemplaza la preventiva. El detalle del proceso está en el [sistema de justicia](sistema-de-justicia.md).

## Libertad condicional

Muchos cargos graves traen aparejada **libertad condicional** (parole) al salir. El plazo habitual es de **5, 10 o 15 días** según el cargo más severo del arresto, y un juez puede además asignarla o retirarla a mano por hasta **30 días**. El reloj de la condicional empieza a correr cuando termina tu condena de cárcel.

Durante ese periodo llevas una **tobillera** y debes cumplir 15 reglas estrictas: informar dónde vives y trabajas, presentarte cuando se te indique, obedecer toda instrucción verbal o escrita, pedir permiso para viajar más de 50 millas o salir del condado, no acercarte a armas ni municiones, y obedecer todas las leyes. Romper cualquiera de ellas puede devolverte a la cárcel **sin necesidad de un nuevo caso penal**.

Los policías en servicio pueden **rastrear tu tobillera**: al hacerlo apareces marcado en su radar durante **5 minutos**, y no pueden repetir el rastreo del mismo parolee hasta pasados **15 minutos**.

Puedes pedir la presencia de un oficial de libertad condicional cada **15 minutos** para cuestiones relacionadas con tu situación. Cuando vence el plazo, debes terminar voluntariamente la condicional con `/terminarparole` para quitarte la tobillera: no se cae sola.

### Comandos

- /reglasparole — muestra las 15 reglas oficiales de la libertad condicional. Alias: `/reglasp`.
- /tiempoparole — muestra cuánto tiempo te queda de condicional. Alias: `/tiempop`.
- /solicitaroficialparole — solicita la presencia de un oficial de libertad condicional (cooldown 15 min).
- /terminarparole — da por finalizada tu condicional al expirar el plazo. Alias: `/terminarp`.

## Personajes en perpetua

Los personajes que deseen ingresar **permanentemente** a la cárcel (para roles de Mafia Mexicana, PEN1 u otras facciones carcelarias) pueden hacerlo acercándose al acceso principal del recinto y usando `/encarcelarme`.

La perpetua implica una condena de **3 meses** y **no es reversible**. Las únicas formas de salir son cumplir los tres meses completos o solicitar un **Character Kill** del personaje. No habrá arrepentimientos ni devoluciones por el tiempo cumplido, y al entrar se te confisca todo el inventario igual que en un arresto normal.

No puedes encarcelarte voluntariamente si figuras como persona más buscada.

## Consejos

- **Mantén la condena corta**: como la habilidad criminal que pierdes escala con los minutos de sentencia, negociar cargos menores en lugar de graves vale más que ahorrarse la multa.
- **Aprovecha la biblioteca**: 30 minutos de espera entre capítulos es poco comparado con lo que ganas; el libro de reinserción social es la única forma activa de bajar puntos criminales aparte de quedarte conectado.
- **Reparte bandejas** en la cafetería si necesitas efectivo para el quiosco: entras a la cárcel sin un peso en la mano.
- **Quédate conectado** dentro de la prisión: bajas puntos criminales en cada payday y evitas llegar al límite de 30, que significa una semana entera de encierro.
- **No agredas a otros internos**: cada interno que abatas te suma 3 horas de condena.
- Si sales con condicional, revisa las reglas antes de moverte: llevar un arma encima durante la condicional basta para volver adentro. Las facciones que hacen cumplir todo esto están descritas en [facciones legales](facciones-legales.md).
