# Sistema de habilidades

## Introducción

Tu personaje en San Andreas Roleplay no es igual el primer día que después de cien horas. Cada oficio, cada delito y cada faena que repites deja huella en forma de **habilidades**: valores que van de **0 a 100** y que representan lo que tu personaje realmente sabe hacer. Un mecánico con habilidad alta instala piezas que uno novato ni siquiera puede tocar; un camionero experimentado accede a rutas con tráiler que pagan varias veces más; un ladrón veterano abre puertas que a un principiante se le resisten; un cocinero con oficio prepara platos que a un aprendiz le están vedados.

Las habilidades no se compran ni se reparten: **se ganan haciendo**. Recoges basura y sube la de basurero. Curas heridas y sube la de paramédico. Cultivas y sube la de granjero. Preparas platos y sube la de cocina. Robas piezas de un coche y sube la de robo a vehículos. Algunas suben casi siempre, otras solo de vez en cuando, y varias se vuelven más lentas cuanto más alto llegas, de modo que llegar a 100 en cualquier rama es cosa de mucho tiempo jugado.

También se pueden **perder**. La habilidad de delincuente y la de drogas caen si te arrestan, y la de delincuente se desgasta si dejas de delinquir durante días. Entre las habilidades legales, solo la de camionero puede bajar, y únicamente si cancelas o abandonas un encargo: lo que aprendiste como mecánico, pescador o cocinero se queda contigo para siempre.

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
| **Drogas** | Creando drogas (hasta **3** puntos por fabricación), y cuidando, fertilizando o cosechando plantaciones de marihuana. También con el libro de química | Baja al ser arrestado, igual que la de delincuente | Recetas y purezas superiores en el laboratorio, diagnóstico exacto de tus plantas, y desde **50** la falsificación de recetas médicas (solo para miembros de una facción ilegal oficial). Además, cuanta más habilidad, menos espera entre fabricaciones (ver más abajo) | [Drogas](sistema-de-drogas.md) |
| **Electrónica** | Colocando y retirando skimmers en cajeros, y reparando cajeros dañados como técnico de seguridad. También con el libro de electrónica | No se pierde | Rastreadores y micrófonos desde **5**, escuchas avanzadas desde **15-20**, skimmers propios desde **50**, drones desde **70**, y el robo de cerraduras y alarmas de coche exige **30** y **40**, y el de coches enteros **80**. Los equipos de minería de CluckinCoin y los soportes de la granja de bots piden **15**, **35** o **60** según su nivel | [Skimming](sistema-de-skimming.md), [CluckinCoin](sistema-de-cluckin-coins.md) |
| **Paramédico** | Vendando y tratando heridas ajenas. Solo se sube en la práctica; con puntos de experiencia únicamente hasta **10** | No se pierde | Vendajes más fiables, reanimar a heridos graves desde **80**, y desde **25** el trabajo con cadáveres y el mercado de órganos | [Médico y hospital](sistema-medico-y-hospital.md) |
| **Mecánico** | Reparando, repintando, poniendo vinilos, tuneando vehículos, instalando nitro y mejorando tanques | No se pierde | Trabajar sin ser empleado de un taller: desde **50** nitro, mejora de tanque, neón, polarizado y la grúa, desde **75** reparaciones, repintado y vinilos, y **100** para recargar nitro | — |
| **Camionero** | Completando rutas de reparto de industrias | Baja al cancelar una misión de trailero (`/cancelartrailer`) y al pasar más de 30 minutos con la mercancía de un reparto de industria sin entregarla | Desde **50** la conducción de trenes, y desde **75** las rutas con tráiler, que pagan muchísimo más | [Camionero](sistema-de-camionero.md) |
| **Basurero** | Recogiendo basura en la ruta municipal | No se pierde | Mejores pagas por ruta a medida que sube | [Basurero](sistema-de-basura.md) |
| **Taxista** | Completando viajes con pasajeros | No se pierde | Viajes progresivamente más largos y mejor pagados | — |
| **Repartidor** | Completando entregas del reparto rápido | No se pierde | La paga por ruta escala con la habilidad: de un **30% menos** siendo novato a un **30% más** siendo experto | — |
| **Granjero** | Cuidando y cosechando cultivos legales, y vendiendo la cosecha. También con puntos de experiencia | No se pierde | Desde **50** ves los datos exactos de una planta al examinarla | [Cultivos](sistema-de-cultivos.md) |
| **Delincuente** | Hurtos (solo mientras tienes menos de **15**), atracos, robo de muebles, desarmar piezas de vehículos, robos a cajeros, bancos y joyerías, y bonificaciones de zona de banda | Baja al ser arrestado, por inactividad delictiva y si abandonas la partida justo después de disparar a alguien | Pinchar ruedas desde **25**, curación clandestina con más de **25**, mercado negro, molotovs y la imprenta de billetes falsos desde **50**, alarmas y cerraduras de coche desde **60**, recoger casquillos y los robos grandes desde **70**, borrar números de serie desde **80** | [Delincuente](sistema-de-delincuente.md) |
| **Robo a propiedades** | Robando muebles en casas (de vez en cuando) y forzando cerraduras con ganzúa | No se pierde | Más probabilidad de forzar la cerradura y de que el robo salga bien, menos tiempo para forzarla y más tiempo para robar dentro de la propiedad | [Delincuente](sistema-de-delincuente.md) |
| **Robo a vehículos** | Forzando puertas de coche, puenteando, desarmando piezas y desguazando vehículos | No se pierde | Piezas cada vez más valiosas: batería desde **5**, parachoques desde **15**, faldones y alerones desde **25**, motor desde **35**, capó, maletero y puertas desde **50**, y el vehículo entero desde **95** (además de **90** de delincuente y **80** de electrónica). También sube el tope diario de piezas que puedes desarmar (ver más abajo) | [Delincuente](sistema-de-delincuente.md) |
| **Falsificación** | Terminando tandas de billetes limpias en tu imprenta, hasta **5** puntos por día | No se pierde | Cada máquina de la imprenta exige su propio nivel: las caseras, ninguno; las de taller, entre **20** y **30**; las industriales, entre **50** y **70**. Además hace falta **50** de delincuente | [Falsificación de billetes](sistema-de-falsificacion-de-billetes.md) |
| **Caza** | Matando animales de un disparo a la cabeza | No se pierde | Más probabilidad de abatir a la presa con un tiro al cuerpo | [Caza](sistema-de-caza.md) |
| **Pesca** | Pescando con caña (cuando la pesca es perfecta) y recogiendo la red en la pesca comercial | No se pierde | Más especies (ver más abajo), más tiempo para reaccionar con la caña y capturas más abundantes por red: de **3** pescados como máximo por recogida a **12** con la habilidad al máximo | [Pesca](sistema-de-pesca.md) |
| **Cocina** | Preparando platos con `/cocinar` | No se pierde | Recetas más elaboradas: cada receta pide entre **0** y **75** puntos | [Cocina y bar](sistema-de-cocina-y-bar.md) |
| **Bartender** | Preparando bebidas con `/bartender` | No se pierde | Bebidas más complejas: cada bebida pide entre **0** y **60** puntos | [Cocina y bar](sistema-de-cocina-y-bar.md) |
| **Respeto** | Completando trabajos temporales honrados: hotdogs, hamburguesas, cortacésped, barrendero, montacargas, guardacostas, hormigonera, piloto | Baja mucho al abusar del robo a personas | Licencias del gobierno (pesca deportiva **10**, pesca comercial **20**, transportista **30**, cargas pesadas **40** y seguridad privada **50**) y recompensas mayores en eventos especiales del servidor | — |
| **Felicidad** | Pasando tiempo al aire libre, estando en una propiedad con suficientes electrodomésticos, o consumiendo comida, bebida, tabaco, alcohol o drogas | Baja si te encierras y no consumes nada | Hasta un **15% más de vida máxima** y mayor tolerancia mental | [Asesinatos, salud mental y felicidad](sistema-de-asesinatos.md) |

### Cómo suben las nuevas ramas

**Granjero.** Cada vez que cuidas un cultivo legal tienes una probabilidad de ganar **1** punto: **1 de cada 2** al fertilizar o cosechar, y **1 de cada 4** al regar o echar abono. Vender la cosecha da **1** punto una de cada tres veces.

**Cocina y bartender.** Cada plato o bebida que terminas da **2** puntos si la receta es de tu nivel o está hasta **15** niveles por debajo, y **1** punto si es más fácil que eso. Para preparar una receta debes tener al menos el nivel que pide. Los vasos básicos (cerveza, vino, ron, whiskey, vodka, champagne, jugos y leche) y los shots no piden nivel; los cócteles más elaborados, como el Long Island, son los más exigentes.

**Falsificación.** Solo cuentan las tandas limpias, y como mucho ganas **5** puntos por día. Desbloquear un nivel de máquina no basta: tienes que comprarla en el mercado negro.

## Qué cambia con la habilidad

### Pesca

Cada especie de pez pide una habilidad mínima. Las más comunes no piden ninguna; el resto se abre así:

| Habilidad | Especies |
|---|---|
| **10** | San Andreas Sheephead |
| **20** | San Andreas Yellowtail |
| **30** | White Sea Bass |
| **40** | Two-Spot Octopus |
| **50** | Spiny Lobster y San Andreas Halibut |
| **65** | Barracuda |
| **80** | Lingcod |
| **90** | American Lobster |

La habilidad sube sobre todo con la pesca con caña: cada pesca **perfecta** (sin un solo fallo en la pelea) da **1** punto una de cada ocho veces. Las redes de la pesca comercial suben mucho menos: **1** punto una de cada veinte recogidas. Con la habilidad al máximo tienes un **30% más** de tiempo para memorizar y responder durante la pesca con caña, y la red tarda menos en llenarse. Más en [pesca](sistema-de-pesca.md).

### Desarme de vehículos

El número de piezas que puedes desarmar antes de que te toque descansar un día depende de tu habilidad de robo a vehículos:

| Robo a vehículos | Piezas por día |
|---|---|
| 0 a 14 | **3** |
| 15 a 34 | **5** |
| 35 a 64 | **10** |
| 65 a 94 | **15** |
| 95 o más | **20** |

Al completar el cupo ganas **3** puntos de robo a vehículos y unos puntos de delincuente, y la espera hasta el siguiente desarme es de **24 horas** (menos con premium). Este descanso es independiente de la espera general de delincuente. Más en [delincuente](sistema-de-delincuente.md).

### Delitos grandes y habilidad de delincuente

Los robos de gran escala exigen una habilidad de delincuente mínima. Cada método sube el listón:

| Delito | Mínimo | Con herramientas de corte o taladro | Con dial de caja fuerte | Con TNT o bomba | Policías de servicio |
|---|---|---|---|---|---|
| Robo a cajeros | **70** | **75** | — | **90** | **4** |
| Robo al banco | **70** | **75** | — | **90** | **10** |
| Robo a la joyería | **70** | **75** | **80** | **90** | **10** |

En los cajeros hay además una espera de **72 horas** entre robos, que baja a **48 horas** si tienes **90** o más de habilidad de delincuente. Cada robo grande da al menos **2** puntos de delincuente a quienes se llevan botín. Todos exigen cuenta certificada y no tener otro delito en curso. Los detalles de cada golpe están en [robo de cajeros](sistema-de-robo-de-cajeros.md), [robo al banco](sistema-de-robo-al-banco.md) y [robo a la joyería](sistema-de-robo-a-la-joyeria.md).

### Fabricación de drogas

La espera entre fabricaciones se calcula por gramo y se acorta con la habilidad de drogas que tienes tras sumar los puntos de esa fabricación. Para **100 gramos**, sin descuentos:

| Habilidad de drogas | Espera |
|---|---|
| 0 a 9 | **48 horas** |
| 10 a 20 | **24 horas** |
| 21 a 50 | **21 horas** |
| 51 a 75 | **18 horas** |
| 76 o más | **15 horas** |

Encima se aplican los descuentos de premium (**15%** con Premium I, **25%** con Premium II, **35%** con Premium III y **50%** con Premium IV y Ruby) y, si cocinas dentro de un territorio controlado por tu propia pandilla, la espera se reduce al **75%**. Más en [drogas](sistema-de-drogas.md).

## Cómo consultar tu progreso

Escribe **`/habilidades`** en cualquier momento. Se abre una tabla con las dieciocho habilidades de arriba y su valor actual sobre 100, seguidas de tu respeto y tu felicidad. Si tienes puntos de experiencia pendientes, aparecen al final de la lista y el botón te deja repartirlos.

Con **`/stats`** ves el panorama de tu personaje: el nivel al que llegaste, cuántas horas llevas jugadas, tu respeto y la racha de horas seguidas. Si eres delincuente, la línea correspondiente añade tus puntos criminales y si el gobierno te reconoce como contrabandista o narcotraficante.

Cada vez que una habilidad sube o baja verás un aviso en pantalla con el nombre de la rama y su nuevo valor, así que no hace falta abrir el menú para saber que progresaste.

## Puntos de experiencia

Cada vez que subes de nivel recibes **puntos de experiencia** que puedes gastar libremente en `/habilidades`. Es la manera de dar a tu personaje una base creíble sin tener que rolear desde cero todos los oficios.

Cada hora de juego suma un punto de progreso (dos con Premium IV o Ruby, siempre que tengas la doble autenticación activada), y para subir de nivel necesitas **12 puntos por cada nivel que ya tienes**: 12 para pasar del nivel 1 al 2, 24 para pasar al 3, y así sucesivamente. Desde el nivel 3 se exige además tener la doble autenticación activada en tu cuenta y una casa comprada o alquilada.

Los puntos que recibes por nivel dependen de tu suscripción:

| Cuenta | Puntos por nivel |
|---|---|
| Sin premium | **3** |
| Premium I | **5** |
| Premium II | **7** |
| Premium III | **9** |
| Premium IV y Ruby | **11** |

Al crear el personaje recibes ya una primera tanda de puntos, con la misma tabla.

No todo se puede comprar con puntos. **Paramédico** solo admite hasta **10** por esta vía: el resto hay que ganarlo curando gente. Y **delincuente**, **robo a propiedades**, **robo a vehículos**, **falsificación**, **caza**, **pesca**, **cocina**, **bartender**, **respeto** y **felicidad** no aceptan puntos en absoluto; esas ramas exigen salir a la calle y hacerlo de verdad.

Consulta la [tienda premium](tienda-premium.md) para saber qué incluye cada nivel de suscripción.

## Ventajas premium en el progreso

Tener premium no te regala habilidad, pero acelera notablemente el camino en varios oficios:

- **Camionero, basurero, taxista y repartidor**: cada vez que la habilidad sube, sube **2 puntos en vez de 1**. En el reparto a negocios de camionero, además, el ascenso pasa de ser una probabilidad a ser seguro en cada entrega completada.
- **Mecánico**: cada trabajo otorga **entre uno y dos puntos extra** frente a un mecánico sin suscripción.
- **Pesca**: con caña, cada pesca perfecta sube habilidad **una de cada tres veces** en lugar de una de cada ocho; con la red comercial, **una de cada ocho** en lugar de una de cada veinte.
- **Drogas**: la espera entre fabricaciones baja entre un **15%** y un **50%** según el nivel de suscripción.
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

Si perteneces a una facción y das un golpe con tus compañeros cerca, **ellos ganan la misma habilidad que tú**. Cuenta para hurtos, atracos, robos de muebles, forzar puertas, unir cableado, desarmar piezas y los robos a cajeros, bancos y joyerías, es decir, para las tres ramas criminales.

Las condiciones son sencillas: tus compañeros deben ser de **tu misma facción**, estar **vivos** y encontrarse **a menos de 25 metros** de ti. Tanto tú como ellos reciben un aviso indicando cuántos compañeros se beneficiaron y cuántos puntos ganó cada uno.

Es el argumento más fuerte a favor de operar en grupo: un equipo de cuatro que trabaja unido progresa mucho más rápido que cuatro personas robando por su cuenta.

## Atajo para facciones ilegales oficiales

Si eres miembro de una **facción ilegal oficial**, el comando `/mejorardelincuente` te pone al día de golpe por **$25.000**. Eleva a **50** tus habilidades de delincuente, robo a propiedades, robo a vehículos y drogas, y a **10** la de electrónica. Solo sube lo que esté por debajo de esos valores: si ya superas alguno, ese no se toca ni se te devuelve dinero.

Está pensado para que un miembro recién integrado en una organización consolidada no arrastre a todo el grupo por no tener oficio. No está disponible para facciones destacadas ni para delincuentes independientes. Más información en [facciones ilegales](facciones-ilegales.md).

## Cuando la habilidad se pierde

Las ramas criminales retroceden por motivos que tienen sentido en el rol.

**Al ser arrestado** pierdes habilidad de delincuente y de drogas en proporción a la condena (en minutos, sin contar el tiempo extra de cárcel). Las otras ramas criminales no se pierden:

| Condena | Puntos perdidos |
|---|---|
| 5 a 8 minutos | **20** |
| 9 a 12 minutos | **30** |
| 13 a 24 minutos | **40** |
| 25 a 48 minutos | **50** |
| Más de 48 minutos, incluida la cadena perpetua | **60** |

Las facciones ilegales protegen a sus miembros: en una facción **oficial** pierdes solo el **50%** de lo que indica la tabla, y en una **destacada**, el **75%**. El resto de jugadores pierde la cifra completa.

**Por inactividad delictiva** pierdes **5 puntos** de delincuente en cada payday (una vez por hora de juego) mientras pasen más de **24 horas** desde que terminó la espera de tu último ilícito. Quedan exentos los miembros de facciones ilegales destacadas u oficiales y los usuarios Ruby. Los detalles están en [delincuente](sistema-de-delincuente.md).

**Por abandonar tras un tiroteo**: si desconectas en los tres minutos siguientes a disparar a otro jugador, pierdes **15 puntos** de delincuente además de tus armas.

**El respeto** también puede caer: el robo a personas resta **15 puntos** a quien lo comete.

Entre las habilidades legales, solo la de camionero puede bajar: **2** puntos al cancelar una misión de trailero y **10** si no entregas a tiempo un reparto de industria cuya mercancía ya recogiste. Lo que sabe tu mecánico, tu pescador, tu granjero o tu cocinero es permanente.

## Consejos

- **Elige dos o tres ramas y comprométete.** Repartir el esfuerzo entre todas las habilidades te deja mediocre en cada una. Un personaje con mecánico a 75 vale mucho más que uno con todo a 20.
- **Guarda los puntos de experiencia para lo que no puedas rolear.** Si tu personaje es un químico, invertirlos en drogas y electrónica te ahorra semanas; en cambio, gastarlos en camionero cuando piensas hacer rutas igualmente es tirarlos.
- **Aprovecha los tramos bajos.** Casi todas las habilidades suben mucho más rápido al principio: el repartidor sube en cada entrega hasta llegar a 10, pero solo una de cada cien más allá de 90. Los primeros niveles son casi gratis, así que no dejes ninguna rama útil en cero.
- **Cocina y bartender premian el reto.** Repetir recetas muy fáciles solo da 1 punto; prepara platos de tu nivel para progresar al doble de ritmo.
- **Pasa por la biblioteca de camino.** La media hora de espera entre lecturas significa que en una sesión larga puedes sacar varios capítulos casi sin desviarte de lo que ibas a hacer.
- **Si delinques, hazlo acompañado.** El cooperativo de facción multiplica el progreso de todo el grupo y es la vía más rápida de convertir a una banda nueva en una banda temida.
- **Si eres delincuente, no dejes de serlo.** Un parón de días te va comiendo la habilidad, y una condena larga puede borrarte más de la mitad. Entrar en una facción ilegal oficial o destacada (o ser Ruby) congela el desgaste.
- **La felicidad es gratis.** Salir a la calle y comer algo de vez en cuando te da hasta un 15% más de vida sin coste alguno. No hay motivo para tenerla baja.

## Documentos relacionados

- [Delincuente](sistema-de-delincuente.md) — las tres ramas criminales al detalle.
- [Camionero](sistema-de-camionero.md), [Basurero](sistema-de-basura.md), [Pesca](sistema-de-pesca.md), [Caza](sistema-de-caza.md) — los oficios que más habilidad reparten.
- [Cultivos](sistema-de-cultivos.md) — la habilidad de granjero y las cosechas legales.
- [Cocina y bar](sistema-de-cocina-y-bar.md) — recetas, bebidas y sus habilidades.
- [Falsificación de billetes](sistema-de-falsificacion-de-billetes.md) — la imprenta clandestina y su habilidad.
- [Drogas](sistema-de-drogas.md) — recetas, purezas y plantaciones.
- [Armas](sistema-de-armas.md) — ensamblaje, munición y números de serie.
- [Médico y hospital](sistema-medico-y-hospital.md) — vendajes, heridas y trabajo paramédico.
- [Skimming](sistema-de-skimming.md) y [CluckinCoin](sistema-de-cluckin-coins.md) — los oficios de la habilidad de electrónica.
- [Cárcel](sistema-de-carcel.md) — la biblioteca del penal y la reinserción.
- [Gimnasio](sistema-de-gimnasio.md) — musculatura y estado físico, un progreso aparte del de habilidades.
- [Facciones ilegales](facciones-ilegales.md) — qué gana un delincuente al organizarse.
- [Tienda premium](tienda-premium.md) — qué acelera cada suscripción.
