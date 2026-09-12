# Sistema de habilidades

## Introducción

Tu personaje en San Andreas Roleplay no es igual el primer día que después de cien horas. Cada oficio, cada delito y cada faena que repites deja huella en forma de **habilidades**: valores que van de **0 a 100** y que representan lo que tu personaje realmente sabe hacer. Un mecánico con habilidad alta instala piezas que uno novato ni siquiera puede tocar; un camionero experimentado accede a rutas con tráiler que pagan varias veces más; un ladrón veterano abre puertas que a un principiante se le resisten.

Las habilidades no se compran ni se reparten: **se ganan haciendo**. Recoges basura y sube la de basurero. Curas heridas y sube la de paramédico. Robas piezas de un coche y sube la de robo a vehículos. Algunas suben casi siempre, otras solo de vez en cuando, y varias se vuelven más lentas cuanto más alto llegas, de modo que llegar a 100 en cualquier rama es cosa de mucho tiempo jugado.

También se pueden **perder**. La habilidad de delincuente y la de drogas caen si te arrestan, y la de delincuente se desgasta si dejas de delinquir durante días. Ninguna habilidad legal se pierde: lo que aprendiste como mecánico, camionero o pescador se queda contigo para siempre.

Este documento es el mapa general: qué habilidades existen, cómo consultarlas, cómo se ganan y se pierden, y qué desbloquea cada tramo. Para el detalle de cada oficio, sigue los enlaces a los documentos específicos.

### Comandos

- `/habilidades` — abre el listado con todas tus habilidades, tu respeto y tu felicidad. También sirve para asignar puntos de experiencia. Alias: `/habilidad`.
- `/stats` — muestra tu progreso general: nivel, horas jugadas, respeto y racha.
- `/biblioteca` — lee un libro en una biblioteca para ganar habilidad. Alias: `/libros`, `/leerlibro`, `/leer`.
- `/mejorardelincuente` — sube de golpe tus habilidades criminales a un mínimo decente (solo facciones ilegales oficiales).

## Las habilidades de tu personaje

| Habilidad | Cómo se gana | Cómo se pierde | Qué desbloquea | Más detalle |
|---|---|---|---|---|
| **Armas** | Leyendo el libro de balística en la biblioteca, o gastando puntos de experiencia | No se pierde | Es una habilidad de trasfondo del personaje: hoy no condiciona el ensamblaje de armas | [Armas](sistema-de-armas.md) |
| **Drogas** | Creando drogas, y cuidando, fertilizando o cosechando plantaciones de marihuana. También con el libro de química | Baja al ser arrestado, igual que la de delincuente | Recetas y purezas superiores en el laboratorio, diagnóstico exacto de tus plantas, y a partir de **50** el trato de narcotraficante | [Drogas](sistema-de-drogas.md) |
| **Electrónica** | Colocando y vaciando skimmers en cajeros. También con el libro de electrónica | No se pierde | Rastreadores y micrófonos desde **5**, escuchas avanzadas desde **15-20**, skimmers propios desde **50**, drones desde **70**, y el robo de coches enteros exige **80** | [Skimming](sistema-de-skimming.md) |
| **Paramédico** | Vendando y tratando heridas ajenas. Solo se sube en la práctica; con puntos de experiencia únicamente hasta **10** | No se pierde | Vendajes más fiables, reanimar a heridos graves desde **80**, y desde **25** el trabajo con cadáveres y el mercado de órganos | [Médico y hospital](sistema-medico-y-hospital.md) |
| **Mecánico** | Reparando, repintando, poniendo vinilos, polarizando y tuneando vehículos | No se pierde | Trabajar sin ser empleado de un taller: desde **50** reparaciones y nitro, desde **75** el taller clandestino y la grúa propia, y **100** para recargar nitro | — |
| **Camionero** | Completando rutas de reparto de industrias | Se pierde cancelando el viaje como trailero. `/cancelartrailer` | Desde **50** la conducción de trenes, y desde **75** las rutas con tráiler, que pagan muchísimo más | [Camionero](sistema-de-camionero.md) |
| **Basurero** | Recogiendo basura en la ruta municipal | No se pierde | Mejores pagas por ruta a medida que sube | [Basurero](sistema-de-basura.md) |
| **Taxista** | Completando viajes con pasajeros | No se pierde | Viajes progresivamente más largos y mejor pagados | — |
| **Repartidor** | Completando entregas del reparto rápido | No se pierde | La paga por ruta escala con la habilidad: de un **30% menos** siendo novato a un **30% más** siendo experto | — |
| **Delincuente** | Hurtos, atracos, robos a personas, forzar cerraduras y bonificaciones de zona de banda | Baja al ser arrestado, por inactividad delictiva y si abandonas la partida justo después de disparar a alguien | Curación clandestina desde **25**, mercado negro y molotovs desde **50**, alarmas y cerraduras de coche desde **60**, recoger casquillos desde **70**, borrar números de serie y el trato de contrabandista desde **80** | [Delincuente](sistema-de-delincuente.md) |
| **Robo a propiedades** | Robando casas y forzando entradas | Igual que la de delincuente al ser arrestado | Más probabilidad de forzar la puerta, botines mayores y menos espera entre golpes | [Delincuente](sistema-de-delincuente.md) |
| **Robo a vehículos** | Forzando puertas de coche, puenteando y desarmando piezas | Igual que la de delincuente al ser arrestado | Piezas cada vez más valiosas: batería desde **5**, parachoques desde **15**, faldones y alerones desde **25**, motor desde **35**, capó y maletero desde **50**, y el vehículo entero desde **95** | [Delincuente](sistema-de-delincuente.md) |
| **Caza** | Matando animales de un disparo a la cabeza | No se pierde | Mejor puntería y trofeos sobre presas grandes | [Caza](sistema-de-caza.md) |
| **Pesca** | Recogiendo la red en la pesca comercial | No se pierde | Capturas más abundantes por red: de unos pocos pescados a casi el triple con la habilidad al máximo | [Pesca](sistema-de-pesca.md) |
| **Respeto** | Completando trabajos temporales honrados: hotdogs, cortacésped, barrendero, montacargas, guardacostas, hormigonera, piloto | Baja mucho al abusar del robo a personas | Recompensas mayores en eventos especiales del servidor | — |
| **Felicidad** | Pasando tiempo al aire libre y consumiendo comida, bebida, tabaco o alcohol | Baja si te encierras y no consumes nada | Hasta un **15% más de vida máxima** y mayor tolerancia mental | [Asesinatos, salud mental y felicidad](sistema-de-asesinatos.md) |

## Cómo consultar tu progreso

Escribe **`/habilidades`** en cualquier momento. Se abre una tabla con las dieciséis entradas de arriba y su valor actual sobre 100. Si tienes puntos de experiencia pendientes, aparecen al final de la lista y el botón te deja repartirlos.

Con **`/stats`** ves el panorama de tu personaje: el nivel al que llegaste, cuántas horas llevas jugadas, tu respeto y la racha de horas seguidas. Si eres delincuente, la línea correspondiente añade tus puntos criminales y si el gobierno te reconoce como contrabandista o narcotraficante.

Cada vez que una habilidad sube o baja verás un aviso en pantalla con el nombre de la rama y su nuevo valor, así que no hace falta abrir el menú para saber que progresaste.

## Puntos de experiencia

Cada vez que subes de nivel recibes **puntos de experiencia** que puedes gastar libremente en `/habilidades`. Es la manera de dar a tu personaje una base creíble sin tener que rolear desde cero todos los oficios.

Subir de nivel requiere **12 horas de juego** por nivel, y a partir del nivel 3 se exige además tener la doble autenticación activada en tu cuenta y una casa comprada o alquilada.

Los puntos que recibes por nivel dependen de tu suscripción:

| Cuenta | Puntos por nivel |
|---|---|
| Sin premium | **3** |
| Premium I | **5** |
| Premium II | **7** |
| Premium III | **9** |
| Premium IV y Ruby | **11** |

Al crear el personaje recibes ya una primera tanda de puntos, con la misma tabla.

No todo se puede comprar con puntos. **Paramédico** solo admite hasta **10** por esta vía: el resto hay que ganarlo curando gente. Y **delincuente**, **robo a propiedades**, **robo a vehículos**, **caza**, **pesca**, **respeto** y **felicidad** no aceptan puntos en absoluto; esas ramas exigen salir a la calle y hacerlo de verdad.

Consulta la [tienda premium](tienda-premium.md) para saber qué incluye cada nivel de suscripción.

## Ventajas premium en el progreso

Tener premium no te regala habilidad, pero acelera notablemente el camino en varios oficios:

- **Camionero, basurero, taxista y repartidor**: cada vez que la habilidad sube, sube **2 puntos en vez de 1**. En las rutas de camionero, además, el ascenso pasa de ser una probabilidad a ser seguro en cada entrega completada.
- **Mecánico**: cada trabajo otorga **entre uno y dos puntos extra** frente a un mecánico sin suscripción.
- **Pesca**: la red sube habilidad aproximadamente **una de cada tres recogidas** en lugar de una de cada ocho.
- **Drones de vigilancia**: con Premium III o superior puedes pilotarlos sin necesidad de habilidad de electrónica.
- **Ruby**: quedas exento de la pérdida de habilidad de delincuente por inactividad.

## La biblioteca

Las bibliotecas son el único sitio donde puedes ganar habilidad **sin practicar el oficio**, leyendo. Hay dos abiertas al público:

- La **David Katz Civic Library**, en Hill Street, Commerce.
- La biblioteca de la **University of San Andreas**, en Ladera Place, Downtown.

Hay una tercera dentro de la cárcel, pensada para que los presos aprovechen la condena; se explica en el [sistema de cárcel](sistema-de-carcel.md).

Para leer necesitas estar **dentro de la biblioteca** y **sentado** (usa `/sentarse` en una silla o banco). Después escribe `/biblioteca` y elige el título. Verás la temática, la bonificación que otorga y cuántos minutos dura la lectura.

| Libro | Habilidad que mejora | Puntos | Tiempo de lectura |
|---|---|---|---|
| Sobre electrónica | Electrónica | 1-2 | 15 minutos |
| Sobre primeros auxilios | Paramédico | 0-1 | 15 minutos |
| Sobre mecánica | Mecánico | 1-2 | 6 minutos |
| Sobre camiones | Camionero | 1-2 | 5 minutos |
| Sobre reciclaje y medio ambiente | Basurero | 1-2 | 3 minutos |
| Sobre dispositivos de seguridad | Robo a propiedades | 1-2 | 7 minutos |
| Sobre química | Drogas | 1-2 | 15 minutos |
| Sobre la reinserción social | Reduce tus puntos criminales | 1-3 | 10 minutos |
| Sobre balística y armas de fuego | Armas | 1-2 | 12 minutos |
| Sobre cerrajería automotriz | Robo a vehículos | 1-2 | 10 minutos |
| Sobre caza y rastreo de animales | Caza | 1-2 | 8 minutos |
| Sobre técnicas de pesca | Pesca | 1-2 | 6 minutos |
| Sobre modales y buenas costumbres | Respeto | 1-2 | 10 minutos |

Un par de advertencias. La lectura se interrumpe si **te levantas del asiento** o **te alejas** de la biblioteca, y en ese caso pierdes el capítulo. Y después de sentarte a leer tienes que esperar **30 minutos** antes de volver a intentarlo, así que no es una vía rápida: es un complemento constante y tranquilo al trabajo de campo.

El libro sobre reinserción social es el único que no da habilidad: en lugar de eso te **descuenta puntos criminales**, lo que ayuda a limpiar tu ficha ante la justicia.

## Trabajo en equipo: el cooperativo de facción

Si perteneces a una facción y das un golpe con tus compañeros cerca, **ellos ganan la misma habilidad que tú**. Cuenta para hurtos, atracos, robos de muebles, forzar puertas, unir cableado y desarmar piezas, es decir, para las tres ramas criminales.

Las condiciones son sencillas: tus compañeros deben ser de **tu misma facción**, estar **vivos** y encontrarse **a menos de 25 metros** de ti. Tanto tú como ellos recibís un aviso indicando cuántos compañeros se beneficiaron y cuántos puntos ganó cada uno.

Es el argumento más fuerte a favor de operar en grupo: un equipo de cuatro que trabaja unido progresa mucho más rápido que cuatro personas robando por su cuenta.

## Atajo para facciones ilegales oficiales

Si eres miembro de una **facción ilegal oficial**, el comando `/mejorardelincuente` te pone al día de golpe por **$25.000**. Eleva a **50** tus habilidades de delincuente, robo a propiedades, robo a vehículos y drogas, y a **10** la de electrónica. Solo sube lo que esté por debajo de esos valores: si ya superas alguno, ese no se toca ni se te devuelve dinero.

Está pensado para que un miembro recién integrado en una organización consolidada no arrastre a todo el grupo por no tener oficio. No está disponible para facciones destacadas ni para delincuentes independientes. Más información en [facciones ilegales](facciones-ilegales.md).

## Cuando la habilidad se pierde

Solo las ramas criminales retroceden, y siempre por motivos que tienen sentido en el rol.

**Al ser arrestado** pierdes habilidad de delincuente y de drogas en proporción a la condena:

| Condena | Puntos perdidos |
|---|---|
| 1 a 4 horas | **10** |
| 5 a 8 horas | **20** |
| 9 a 12 horas | **30** |
| 13 a 24 horas | **40** |
| 25 a 48 horas | **50** |
| Más de 48 horas | **60** |

**Por inactividad delictiva** pierdes **5 puntos** de delincuente si pasan **24 horas** sin que cometas ningún ilícito. Quedan exentos los miembros de facciones ilegales destacadas u oficiales y los usuarios Ruby. Los detalles están en [delincuente](sistema-de-delincuente.md).

**Por abandonar tras un tiroteo**: si desconectas en los tres minutos siguientes a disparar a otro jugador, pierdes **15 puntos** de delincuente además de tus armas.

**El respeto** también puede caer: el robo a personas resta **15 puntos** a quien lo comete.

Ninguna habilidad legal se pierde jamás. Lo que sabe tu mecánico, tu pescador o tu paramédico es permanente.

## Consejos

- **Elige dos o tres ramas y comprométete.** Repartir el esfuerzo entre las doce habilidades te deja mediocre en todas. Un personaje con mecánico a 75 vale mucho más que uno con todo a 20.
- **Guarda los puntos de experiencia para lo que no puedas rolear.** Si tu personaje es un químico, invertirlos en drogas y electrónica te ahorra semanas; en cambio, gastarlos en camionero cuando piensas hacer rutas igualmente es tirarlos.
- **Aprovecha los tramos bajos.** Casi todas las habilidades suben mucho más rápido al principio: el repartidor sube en cada entrega hasta llegar a 10, pero solo una de cada cien más allá de 90. Los primeros niveles son casi gratis, así que no dejes ninguna rama útil en cero.
- **Pasa por la biblioteca de camino.** La media hora de espera entre lecturas significa que en una sesión larga puedes sacar varios capítulos casi sin desviarte de lo que ibas a hacer.
- **Si delinques, hazlo acompañado.** El cooperativo de facción multiplica el progreso de todo el grupo y es la vía más rápida de convertir a una banda nueva en una banda temida.
- **Si eres delincuente, no dejes de serlo.** Un parón de días te va comiendo la habilidad, y una condena larga puede borrarte más de la mitad. Entrar en una facción ilegal oficial es la única forma de congelar el desgaste.
- **La felicidad es gratis.** Salir a la calle y comer algo de vez en cuando te da hasta un 15% más de vida sin coste alguno. No hay motivo para tenerla baja.

## Documentos relacionados

- [Delincuente](sistema-de-delincuente.md) — las tres ramas criminales al detalle.
- [Camionero](sistema-de-camionero.md), [Basurero](sistema-de-basura.md), [Pesca](sistema-de-pesca.md), [Caza](sistema-de-caza.md) — los oficios que más habilidad reparten.
- [Drogas](sistema-de-drogas.md) — recetas, purezas y plantaciones.
- [Armas](sistema-de-armas.md) — ensamblaje, munición y números de serie.
- [Médico y hospital](sistema-medico-y-hospital.md) — vendajes, heridas y trabajo paramédico.
- [Skimming](sistema-de-skimming.md) — el oficio de la habilidad de electrónica.
- [Cárcel](sistema-de-carcel.md) — la biblioteca del penal y la reinserción.
- [Gimnasio](sistema-de-gimnasio.md) — musculatura y estado físico, un progreso aparte del de habilidades.
- [Facciones ilegales](facciones-ilegales.md) — qué gana un delincuente al organizarse.
- [Tienda premium](tienda-premium.md) — qué acelera cada suscripción.
