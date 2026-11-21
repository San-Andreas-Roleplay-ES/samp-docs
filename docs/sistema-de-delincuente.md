# Sistema de delincuente

## Introducción

El sistema de **delincuente** es la vía de entrada a la vida criminal de San Andreas. Te permite hurtar en tiendas, atracar la caja de un negocio, robar a otros jugadores, forzar y saquear casas, y forzar, puentear, pinchar y desarmar vehículos. Con la habilidad suficiente también puedes dar los golpes más grandes: cajeros automáticos, el Fleeca Bank y la joyería. Es un sistema pensado para el rol: casi toda actividad exige herramientas concretas, un mínimo de policías conectados y largas esperas entre golpes, de modo que un delincuente no pueda encadenar delitos sin descanso.

Para convertirte en delincuente debes acercarte a uno de los **siete puntos escondidos** repartidos por Los Santos y escribir `/delincuente`. Los requisitos son tener la **doble autenticación (2FA) activada** en tu cuenta, la **cuenta certificada** (ver [certificación](sistema-de-certificacion.md)), al menos **16 horas jugadas** y no pertenecer a una facción legal. No cuesta dinero y no hay que renovar nada. Quien cumple condena en prisión pasa a ser delincuente automáticamente si tiene la cuenta certificada, no lo era y no pertenece a una facción legal.

Todo lo que consigues delinquiendo (dinero, muebles, autopartes, joyas, teléfonos) se convierte en efectivo en el [mercado negro](sistema-de-mercado-negro.md), al que se accede con `/venderrobo` a partir de **50 horas jugadas**. Si te atrapan, la condena y la pérdida de habilidad se explican en el [sistema de cárcel](sistema-de-carcel.md); y si perteneces a una banda, las [zonas de pandilla](sistema-de-zonas-de-pandilla.md) y las [facciones ilegales](facciones-ilegales.md) multiplican lo que sacas de cada golpe.

Las [cámaras de seguridad](sistema-de-camaras-de-seguridad.md) instaladas en negocios y propiedades guardan durante 14 días un registro de lo que ocurre frente a ellas: hurtos, atracos, robos a propiedades y de muebles, cerraduras forzadas, ventanillas rotas, puentes, desarmes de vehículos y patentes cambiadas. Cada entrada incluye quién aparece, lo que lleva en las manos y su descripción física; quien lleva máscara figura como enmascarado.

### Comandos

- /delincuente — conviértete en delincuente si estás en uno de los puntos.
- /victima [id] — comprueba si una persona puede ser robada.
- /robar [id] — inicia un robo a una persona y abre su inventario.
- /hurtar — hurta un producto pequeño de la tienda donde estás.
- /atracar — atraca la caja del negocio donde estás.
- /forzarcerradura — fuerza la entrada de una propiedad o una puerta interior (también `/forzarentrada`).
- /robarpropiedad — inicia el robo de muebles dentro de una casa (también `/robarprop`).
- /robarmueble — roba un electrodoméstico cercano; si hay varios, eliges de una lista.
- /romperventanilla — rompe la ventanilla del conductor y desbloquea el vehículo.
- /forzarpuerta — abre la puerta de un vehículo con unas ganzúas.
- /cortarcableado — interviene el cableado de la ignición.
- /unircableado — une los cables cortados para encender el motor.
- /pincharrueda — pincha una rueda del vehículo junto al que estás (también `/pincharllanta`).
- /autopartes — mira qué piezas y sistemas tiene un vehículo cercano.
- /desarmarveh — desmonta piezas o sistemas del vehículo cercano (también `/desarme`).
- /removerpatente — quita la patente de un vehículo (también `/robarpatente`).
- /colocarpatente — atornilla en un vehículo una patente que llevas en la mano.
- /desguazar — entrega un vehículo robado en un desguazadero.
- /robarcajero — revienta un cajero automático.
- /robobanco — asalta el Fleeca Bank.
- /robojoyeria — asalta la joyería.
- /miraralarma — mira el tipo de alarma instalada.
- /mirargps — busca un rastreador dentro del vehículo.
- /mirarpanel — mira el tipo de ignición y si está adulterada.
- /venderrobo — abre el mercado negro para vender el botín.
- /habilidades — consulta tus puntos de habilidad.

## Las tres habilidades criminales

El progreso se reparte en tres habilidades, todas de **0 a 100**, visibles en `/habilidades`:

| Habilidad | Para qué sirve |
| --- | --- |
| **Delincuente** | Botín y velocidad de atracos y hurtos, tiempo de robo a personas, acceso a los sistemas electrónicos del vehículo, a los golpes de gran escala y al mercado negro |
| **Robo a propiedades** | Probabilidad y facilidad al forzar cerraduras, y duración del saqueo de muebles |
| **Robo a vehículos** | Facilidad al forzar puertas y puentear, y qué piezas puedes desmontar |

Ninguna de las tres se puede subir con puntos de experiencia: solo se ganan delinquiendo. Los miembros de facciones ilegales **oficiales** pueden usar `/mejorardelincuente` para llevar las tres habilidades (y la de drogas) al **50** y la de electrónica al **10**, por **$25.000** cada vez que lo usan. Solo sube las habilidades que estén por debajo de esos valores; nunca baja ninguna.

### Cooperativo de facción

Cada vez que ganas puntos de cualquiera de las tres habilidades por un hurto, un atraco, un robo de muebles, forzar una cerradura con ganzúas, forzar una puerta de vehículo, unir el cableado o completar tu cupo diario de desarme, **todos tus compañeros de facción vivos a menos de 25 metros reciben exactamente los mismos puntos**. Tanto tú como ellos reciben un aviso del cooperativo. Organizar los golpes en grupo es la forma más rápida de subir a toda la banda.

### Pérdida de habilidad por inactividad

La habilidad de delincuente no es permanente. En cada payday, si **no cometiste ningún delito en las últimas 24 horas**, pierdes **5 puntos**. Cuentan como delito todas las actividades criminales con espera: robos a personas, hurtos, atracos, forzar cerraduras, romper ventanillas, forzar puertas de vehículos, puentear, desarmar piezas, robos a propiedades y las bonificaciones de zona de pandilla.

**Están exentos de esta pérdida:**

- Los miembros de facciones ilegales **oficiales** o **destacadas**.
- Los usuarios **Premium Ruby**.

### Pérdida de habilidad al ser arrestado

Al ser arrestado pierdes puntos de habilidad de delincuente **y** de drogas (la de drogas solo si estás conectado cuando te arrestan), según la condena que fija el oficial en el arresto, sin contar el tiempo extra que se suma después:

| Condena | Puntos perdidos |
| --- | --- |
| 5 a 8 minutos | 20 |
| 9 a 12 minutos | 30 |
| 13 a 24 minutos | 40 |
| 25 a 48 minutos | 50 |
| Más de 48 minutos (o perpetua) | 60 |

Los miembros de facciones ilegales **oficiales** pierden la mitad de esos puntos y los de facciones **destacadas**, tres cuartos.

## Espera general entre delitos

Además de la espera propia de cada delito existe una **espera general**. Mientras corre no puedes hurtar, atracar, robar a personas, forzar cerraduras o puertas, romper ventanillas, puentear, robar propiedades ni dar un golpe de gran escala. Se activa al robar a una persona (**24 horas**, o **6 horas** dentro de la zona de pandilla de tu facción), al pinchar una rueda (**15 minutos**), al empezar a robar un cajero (**15 minutos**) y al participar en un robo al banco o a la joyería. El desarme de piezas es independiente: no la respeta ni la activa.

## Robo a personas

Robar a otro jugador es la actividad más regulada del sistema y **toda interacción de robo debe pasar por él**: no puedes forzar por rol a nadie a entregarte dinero o inventario.

**Requisitos para robar:**

- Ser delincuente y tener más de **30 horas** jugadas.
- Tener al menos **2 puntos de rol positivos**.
- Tener un **arma de fuego o un cuchillo en la mano derecha**.
- Que haya al menos **2 policías de servicio** (también 2 si la víctima ya fue asesinada).
- No estar herido de bala, arma blanca, quemadura, pierna rota ni con 3 o más golpes cuerpo a cuerpo.
- No estar en un evento (Purga, Juegos del Hambre) ni en una partida de paintball.

**Requisitos de la víctima:** debe tener más de **30 horas** jugadas, no pertenecer a tu misma facción y no haber sido robada en la última semana.

### Cómo se desarrolla

1. Comprueba con `/victima [id]` (hasta 30 metros) si la persona es robable.
2. Usa `/robar [id]` a menos de 5 metros. La víctima recibe el aviso y tiene **60 segundos** para escribir `/aceptar`.
3. Al aceptar, se abre un menú con **todo el inventario de la víctima**: bolsillos, manos, pecho, espalda, arma colgada, accesorios (guantes, casco, gafas, máscara, cadena, reloj) y el dinero.
4. Los objetos pequeños pasan a tus bolsillos; los voluminosos o pesados van a tus manos. El dinero se convierte en un **fajo de billetes** en tu inventario.

**Lo que no puedes llevarte:** objetos de facción, rifles de francotirador de caza, y objetos que no te quepan por peso o volumen si ya tienes las dos manos ocupadas. El dinero solo se roba una vez por víctima, con un **tope de $100.000**.

Iniciar un robo te cuesta **15 puntos de respeto**. Si la víctima muere después de aceptar el robo, puedes seguir saqueando su inventario mientras dure tu tiempo; nunca puedes robar a un cadáver sin confirmación previa.

### Tiempo y esperas

El tiempo del que dispones para vaciar el inventario depende de tu habilidad de delincuente:

| Habilidad de delincuente | Tiempo para saquear |
| --- | --- |
| Menos de 30 | 60 segundos |
| 30 – 49 | 90 segundos |
| 50 – 69 | 120 segundos |
| 70 o más | 150 segundos |

- **Tu espera tras robar a alguien**: **24 horas**, o solo **6 horas** si el robo ocurre dentro de la zona de pandilla de tu facción. Es la espera general descrita arriba: hasta que pase no puedes cometer otros delitos.
- **Protección de la víctima**: **1 semana** (168 horas) sin poder volver a ser robada por nadie.

Robar el dinero de una víctima otorga **+25 [Burger Points](sistema-de-burger-points.md)**.

## Hurtar en tiendas

`/hurtar` te permite llevarte un producto pequeño del expositor de una tienda sin pagarlo. No necesitas habilidad mínima, arma ni herramientas, pero sí tener la **mano derecha vacía** y no ser traficante de drogas ni de armas (a ellos el rol de delito menor les está vedado por exposición).

**Qué puedes hurtar:** productos que valgan **menos de $1.000** y ocupen un solo espacio del inventario. No puedes hurtar armas, cargadores, munición ni productos de categoría restringida. Tampoco puedes hurtar en tu propia tienda ni en la de tu cónyuge. La lista se muestra por páginas de 40 productos y, si el stock de la tienda cambia mientras la tienes abierta, debes volver a elegir.

El hurto se interrumpe si te alejas más de **2 metros** del punto donde empezaste; en ese caso pierdes el producto y quedas con **30 minutos** de espera.

| Habilidad de delincuente | Tiempo del hurto |
| --- | --- |
| 15 o menos | 45 segundos |
| 16 – 49 | 30 segundos |
| 50 o más | 15 segundos |

- **Ganancia**: **+1 punto** de habilidad de delincuente, pero **solo mientras tu habilidad sea inferior a 15**. A partir de ahí el hurto ya no da experiencia.
- **Espera personal**: **1 hora**.
- **Espera del negocio**: **1 hora** sin poder volver a ser hurtado ni atracado.
- **Recompensa**: el producto pasa a tus manos, más **+1 [Burger Point](sistema-de-burger-points.md)**.

## Atracar negocios

El atraco vacía parte de la caja de un negocio y es la actividad criminal más lucrativa del día a día.

**Requisitos:**

- Ser delincuente y no ser traficante de drogas ni de armas.
- Tener un **arma de fuego o un cuchillo en la mano derecha** (mantenerlo hasta el final).
- Que haya al menos **5 policías de servicio**.
- Estar **junto a una caja registradora** si es una tienda, o lejos de la entrada principal si es otro tipo de negocio.
- Que la caja tenga **más de $1.000** y que el negocio no haya sido robado en las últimas **24 horas**.
- Que nadie más esté atracando ese negocio en ese momento.

No hay habilidad mínima: cualquier delincuente puede atracar desde el primer día.

### Botín

El tope del botín depende de tu habilidad de delincuente:

| Habilidad de delincuente | Tope base | Espera | Duración del atraco |
| --- | --- | --- | --- |
| Menos de 30 | $10.000 | 24 h | 120 s |
| 30 – 49 | $20.000 | 20 h | 100 s |
| 50 – 69 | $30.000 | 16 h | 80 s |
| 70 o más | $40.000 | 12 h | 60 s |

Sobre ese tope se aplican estos ajustes:

- **Negocio con empleados en servicio** (y cuenta verificada): el tope se **multiplica por 4**. En eventos de experiencia triple o doble se multiplica por 3 o por 2 respectivamente.
- **Cuchillo en lugar de arma de fuego**: el tope se **reduce a la mitad**.
- **Negocio en zona rural**: el tope se **reduce a la mitad** y la espera se **duplica**.

El botín final no es fijo: es una cantidad **aleatoria entre un mínimo y el tope**. Ese mínimo sube con tu habilidad: un **10%** del tope con habilidad 0 y hasta un **60%** con habilidad 100. Si la caja tiene menos dinero del que sale, te llevas solo lo que hay.

### Alarmas y avisos

- Al empezar el atraco la alarma del negocio puede sonar: **15%**, **25%** o **50%** según el nivel de alarma instalada.
- Al terminarlo la probabilidad sube a **30%**, **50%** o **100%**.
- El aviso de robo en curso llega a la policía por radio, junto a la descripción de los sospechosos. Además de ti, solo se describe a quienes parecen cómplices y están dentro del negocio o en su entrada (a menos de 25 metros de la puerta): personas con máscara, con un arma en la mano derecha, delincuentes, miembros de pandillas o mafias y miembros de tu misma facción. Quien no cumple nada de eso no figura en la descripción. Si el negocio **no** tiene empleados en servicio el aviso sale al empezar; si los tiene, sale al terminar, lo que te da margen para huir antes de que llegue la patrulla.
- Si te alejas más de **10 metros** del lugar donde empezaste, el atraco se cancela, se avisa a la policía y recibes una espera de **18 horas** (habilidad menor de 30), **16 horas** (30 – 49), **14 horas** (50 – 69) o **12 horas** (70 o más).
- Si al terminar ya no tienes el cuchillo o el arma en la mano derecha, no cobras nada, se avisa a la policía y recibes la espera completa de la tabla de botín.

### Recompensa

- El dinero robado se te entrega como **fajo de billetes**.
- **+1 punto** de habilidad de delincuente, **+5 más** si hay **5 o más policías de servicio** y **+5 más** si el negocio tenía **empleados en servicio**: hasta **+11 puntos** en un solo golpe.
- **+50 [Burger Points](sistema-de-burger-points.md)**.
- El dueño del negocio recibe una notificación con lo que perdió.
- El robo de cajeros automáticos comparte esta espera: tras atracar un negocio no puedes reventar un cajero hasta que termine, y al revés.

## Robo de propiedades

Asaltar una casa tiene dos fases: **entrar** y **saquear**. Solo se pueden robar **casas** (nunca empresas ni propiedades de facción) que no sean tuyas ni de tu cónyuge, y hacen falta al menos **2 policías de servicio**, tanto para forzar la cerradura como para saquear.

### Soplos por SMS

Cada **30 minutos**, si eres delincuente, no tienes ninguna espera de robo en curso y hay al menos 2 policías de servicio, puedes recibir el **SMS de un desconocido** que te da el número de una casa con **3 o más electrodomésticos** que no ha sido robada en la última semana. Es solo una pista: la casa se roba igual que cualquier otra.

### Forzar la cerradura

`/forzarcerradura` abre la entrada de una propiedad. Necesitas una de estas tres herramientas en la mano derecha. La **palanca** y el **destornillador** funcionan por probabilidad; las **ganzúas** se manejan con un minijuego.

| Herramienta | Habilidad < 6 | Habilidad 6 – 15 | Habilidad 16+ |
| --- | --- | --- | --- |
| **Palanca** | 80% | 90% | 100% |
| **Destornillador** | 20% | 30% | 50% |

Con palanca o destornillador el tiempo base es de **40 segundos** con menos de 6 de habilidad de robo a propiedades, **30 segundos** entre 6 y 15, y **20 segundos** con 16 o más. Si la puerta tiene una cerradura reforzada instalada, ese tiempo se multiplica por **1,5**, **2** o **2,5** según el nivel, y la probabilidad de éxito baja **10**, **15** o **20 puntos**.

Al fallar puede sonar la alarma de la propiedad, con distinta probabilidad según el nivel de alarma y la herramienta usada (la palanca es la más ruidosa). El éxito con palanca produce además un estruendo audible a gran distancia. La palanca **destroza la cerradura** por completo y el destornillador le quita 25 puntos de vida.

Si dos delincuentes fuerzan la misma puerta a la vez, gana quien la abre primero y al otro se le cancela el intento.

- **Espera al conseguirlo**: **6 horas**.
- Moverte del sitio o soltar la herramienta cancela el intento.

`/forzarcerradura` también abre **puertas interiores** de una propiedad, pero solo mientras estés robándola.

### El minijuego de ganzúas

Forzar con ganzúas es un minijuego de pines: debes fijar cada pin en el momento justo, cuando sube hasta la línea marcada.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/minijuego-de-ganzuas.jpg" alt="Minijuego de ganzúas con los pines de la cerradura y las barras de ganzúa y tiempo" width="973" height="784">

- **A** y **D** (o las flechas) cambian de pin, **Espacio** intenta fijar el pin elegido y la tecla de entrar o salir de vehículos desiste.
- Si fijas el pin fuera de la línea, fallas: el pin cae, la ganzúa pierde vida y puede gastarse un uso.
- Debes quedarte quieto junto a la puerta con las ganzúas en la mano derecha; si te mueves, las sueltas o te metes en un vehículo, el intento se cancela.
- Con más habilidad los pines se mueven más despacio y la zona de acierto es más amplia. En propiedades cuenta tu habilidad de robo a propiedades (tramos 0 – 5, 6 – 15 y 16 o más); en vehículos, la de robo a vehículos (0 – 9, 10 – 19 y 20 o más).
- Cuanto mejor es la cerradura, más difícil es:

| Cerradura | Pines | Tiempo máximo | Vida de la ganzúa que cuesta cada fallo | Al fallar un pin |
| --- | --- | --- | --- | --- |
| Sin reforzar | 3 | 15 s | 20% | Solo cae ese pin |
| Nivel 1 | 4 | 20 s | 25% | Solo cae ese pin |
| Nivel 2 | 5 | 25 s | 30% | Además cae un pin ya fijado, al azar |
| Nivel 3 | 6 | 30 s | 35% | Además caen todos los pines ya fijados |

- Si la vida de la ganzúa llega a 0, se rompe dentro de la cerradura y el intento fracasa; lo mismo ocurre si se acaba el tiempo o desistes.
- **Desgaste**: cada pin fallado tiene un 33% de gastar un uso de la ganzúa, y cada intento que termina (con éxito, por tiempo agotado, con la ganzúa rota o al desistir) gasta otro uso. Cuando se acaban los usos, la ganzúa desaparece.
- **Alarma de la propiedad**: cada pin fallado puede hacerla sonar con un **1%**, **2%** o **4%** según el nivel de alarma. Si el intento termina en fracaso, suena además con un **10%** (alarma de nivel 2) o un **25%** (nivel 3).
- **Cerradura de la puerta**: cada éxito con ganzúas le quita 10 puntos de vida.
- **Habilidad**: forzar con éxito con ganzúas da **+1 punto** de habilidad de robo a propiedades.

### Saquear los muebles

Una vez dentro, `/robarpropiedad` inicia el saqueo. Te lo pide dos veces: la primera te avisa del tiempo del que dispondrás y la segunda (`/robarpropiedad confirmar`) lo pone en marcha. Todos los electrodomésticos robables de la casa quedan **resaltados con su nombre y precio**. Puedes terminar antes con `/robarpropiedad finalizar`. La casa debe tener al menos un electrodoméstico y, una vez que robas el primer mueble, **no puede volver a ser robada durante una semana**.

A los **30 segundos** de empezar, la alarma de la casa puede sonar (**10%** o **30%** según su nivel).

| Habilidad de robo a propiedades | Duración del saqueo |
| --- | --- |
| Menos de 6 | 180 segundos |
| 6 – 15 | 240 segundos |
| 16 o más | 300 segundos |

`/robarmueble` roba un electrodoméstico robable a menos de 2 metros y te lo pone en las manos; necesitas **ambas manos libres**. Si hay más de uno al alcance, se abre una lista ordenada por cercanía con el nombre, la distancia y el precio de cada uno. Cada mueble robado puede hacer sonar la alarma (**10%**, **25%** o **35%** según el nivel).

**Ganancias:**

- Cada mueble tiene un **33% de probabilidad** de dar **+1 punto** de habilidad de robo a propiedades, siempre que valga más de $100.
- Al acabar el tiempo, tienes una probabilidad de recibir **+1 punto** de habilidad de delincuente: **50%** con menos de 6 de habilidad, **60%** entre 6 y 15, **70%** con 16 o más.
- Los muebles se venden en el mercado negro por el **80%** de su precio de catálogo.

**Espera para volver a robar una propiedad**, según tu habilidad de delincuente:

| Habilidad de delincuente | Espera |
| --- | --- |
| 50 o menos | 96 horas |
| 51 – 79 | 72 horas |
| 80 o más | 48 horas |

## Robo de vehículos

Cada vehículo puede llevar instalados sistemas de **alarma**, **cerradura**, **ignición**, **GPS**, **tanque** y **blindaje**, en niveles que van de **básico** a **super**. Cuanto mejor el sistema, más difícil es robarlo. `/autopartes` te muestra de un vistazo qué piezas y sistemas tiene un coche cercano y en qué nivel.

No puedes forzar la puerta, romper la ventanilla, puentear ni desarmar vehículos tuyos ni de tu cónyuge. Los vehículos de facciones legales y de empresa están protegidos de la ventanilla rota, el puenteo, el desarme y el cambio de patente, y los del servidor, de renta incluidos, del puenteo y el desarme. A los de renta tampoco se les puede cambiar la patente, aunque sí forzar la puerta. Para forzar una puerta o desmontar la batería, la radio, las llantas o el convertidor catalítico hacen falta al menos **2 policías de servicio** si estás fuera de un interior; para romper una ventanilla o puentear hacen falta siempre (salvo que la ignición ya esté adulterada).

### Inspección

- `/miraralarma` — mira el tipo de alarma. Con menos de **50** de habilidad de robo a vehículos necesitas estar frente al **capó abierto**; por encima de esa habilidad lo reconoces de un vistazo.
- `/mirargps` — busca un rastreador desde el asiento del conductor. Necesitas las llaves del vehículo o **25** de habilidad de robo a vehículos, y aun así hay un **60%** de probabilidad de no encontrar nada en cada intento.
- `/mirarpanel` — mira el tipo de ignición desde el asiento del conductor y si el cableado ya está adulterado.

### Romper la ventanilla

`/romperventanilla` rompe el cristal del conductor, **desbloquea el vehículo** y **hace sonar la alarma** siempre. Necesitas una **porra, un bate de béisbol o una pistola** en la mano derecha, estar junto a la ventanilla del conductor y que el vehículo esté cerrado. No sirve en bicicletas ni motos. No otorga habilidad y deja **6 horas** de espera.

### Forzar la puerta

`/forzarpuerta` abre la puerta con **unas ganzúas** en la mano derecha, sin romper nada. Debes estar junto a la ventanilla del conductor y el intento es el [minijuego de ganzúas](#el-minijuego-de-ganzúas): la dificultad depende del nivel de la cerradura del vehículo, que va de sin reforzar (3 pines) a nivel 3 (6 pines), y tu habilidad de robo a vehículos hace los pines más lentos y la zona de acierto más amplia.

Mientras dura el intento te quedas inmóvil en la animación; se cancela si te alejas, sueltas las ganzúas o subes a un vehículo.

- **Alarma**: cada pin fallado tiene un **3%** de hacer sonar la alarma del vehículo. Si el intento termina sin abrir la puerta (se acaba el tiempo, se rompe la ganzúa, desistes o te mueves), suena con un **60%** (menos de 10 de habilidad de robo a vehículos), un **40%** (10 – 19) o un **20%** (20 o más).
- **Éxito**: **+1 punto** de habilidad de robo a vehículos y **12 horas** de espera.

### Puentear el cableado

Con el vehículo abierto y el motor apagado, `/cortarcableado` desde el asiento del conductor abre el panel del cableado de la ignición. Requiere **20 de habilidad de delincuente** y la herramienta adecuada en la mano derecha:

- Igniciones de nivel **1 a 3**: unas **ganzúas**.
- Ignición **electrónica** (nivel 4): un **notebook**. Aquí no se trata de acertar un par de cables: debes cortar exactamente **3 líneas** cuya combinación reproduzca el código que muestra el panel.

Cuantas más mejoras tenga la ignición, más cables hay en el panel (6, 7 u 8). Cuando creas tener la combinación, `/unircableado` intenta arrancar. Si has cortado menos cables de los necesarios, solo recibes un aviso y puedes seguir cortando; si has cortado de más, el panel se reinicia. Si la cantidad es la correcta pero la combinación no, el panel se reinicia y el intento cuenta como fallido. Si aciertas, el motor se enciende y la ignición queda **adulterada** para siempre (desde entonces se arranca con `/motor`).

Cada combinación equivocada acumula un aviso en el vehículo, y al superar cierto número salta la alarma: más de **2** avisos con menos de 10 de habilidad de robo a vehículos, más de **3** entre 10 y 19, y más de **4** con 20 o más.

- **Éxito**: **+2 puntos** de habilidad de robo a vehículos. Si ocurre dentro de tu zona de pandilla, además cuenta para la bonificación de la zona.
- **Espera**: **36 horas** con menos de 10 de habilidad de robo a vehículos, **24 horas** entre 10 y 19, y **12 horas** con 20 o más.

### Pinchar ruedas

`/pincharrueda` pincha una rueda del vehículo y lo deja inutilizable hasta que lo reparen. Requisitos:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/pinchar-ruedas.png" alt="Personaje pinchando la rueda de un vehículo con un cuchillo" width="732" height="816">

- Ser delincuente con **25 de habilidad de delincuente**.
- Tener un **cuchillo en la mano derecha** y estar **a pie**, vivo y sin esposas, taser ni placaje.
- Estar junto a una rueda (a menos de 1,5 metros): se pincha la más cercana de los vehículos que tengas alrededor.

La rueda queda pinchada aunque el vehículo reaparezca o el servidor se reinicie. Al pincharla **suena la alarma del vehículo** y la policía recibe el aviso al instante. No otorga habilidad y deja una espera de **15 minutos** que comparte con el resto de delitos (ver la espera general). No funciona en bicicletas, aeronaves, botes, trenes, tranvías, vehículos a control remoto ni vehículos blindados.

## Desarme de vehículos

`/desarmarveh` abre el menú de desmontaje del vehículo más cercano. Requiere ser delincuente y tener al menos **20 horas** jugadas. Alejarte del vehículo, o salir del taller cuando la pieza lo exige, cancela el trabajo y te deja **20 minutos** de espera. El desarme es independiente de la espera general: puedes desarmar aunque tengas otro delito en espera.

### Piezas mecánicas

| Pieza | Herramienta | Habilidad de robo a vehículos | Dónde | Tiempo |
| --- | --- | --- | --- | --- |
| Batería | Destornillador | — | Capó abierto | 75 s |
| Faro delantero (cada uno) | Destornillador | — | Junto al capó | 60 s |
| Radio | Destornillador | — | Dentro del vehículo | 75 s |
| Convertidor catalítico | Palanca | — | En cualquier parte | 90 s |
| Llantas | Llave de cruz | — | Dentro de una propiedad | 60 s |
| Parachoques delantero o trasero | Palanca o destornillador | 15 | Dentro de una propiedad | 300 s |
| Faldones | Palanca o destornillador | 25 | Dentro de una propiedad | 300 s |
| Alerón | Palanca o destornillador | 25 | Dentro de una propiedad | 300 s |
| Tomas de aire | Palanca o destornillador | 25 | Dentro de una propiedad | 300 s |
| Capó | Palanca o destornillador | 50 | Dentro de una propiedad | 300 s |
| Maletero | Palanca o destornillador | 50 | Dentro de una propiedad | 300 s |
| Puertas | Palanca o destornillador | 50 | Dentro de una propiedad | 300 s |
| Alforjas | Palanca o destornillador | 11 | Dentro de una propiedad | 180 s |
| Portamaletas | Palanca o destornillador | 21 | Dentro de una propiedad | 360 s |
| Motor | Palanca o destornillador | 35 | Dentro de un taller, capó abierto | 600 s |
| Supercharger | Palanca o destornillador | 35 | Dentro de un taller, capó abierto | 600 s |
| Vehículo entero | — | 95 | Dentro de un taller | 900 s |

Las llantas de un mismo vehículo no se pueden volver a robar hasta **48 horas** después. El **motor**, el **supercharger** y el **vehículo entero** son piezas pesadas: van directamente al stock del taller en lugar de a tus manos. El vehículo entero exige además **90 de habilidad de delincuente** y **80 de electrónica**.

### Sistemas electrónicos

Los sistemas instalados también se pueden desmontar, pero exigen mucha más habilidad de delincuente y de **electrónica**, estar dentro de una propiedad (o de un taller para los más pesados) y una herramienta específica:

| Sistema | Delincuente | Electrónica | Herramienta | Tiempo |
| --- | --- | --- | --- | --- |
| Cerradura | 60 | 30 | Palanca | 240 s |
| Alarma | 60 | 40 | Inhibidor de señales de radio | 240 s |
| Tanque de combustible | 70 | 20 | Llave de cruz | 480 s |
| Ignición mejorada | 75 | 60 | Destornillador | 300 s |
| GPS | 80 | 80 | Inhibidor de señales de radio | 300 s |
| Blindaje | 90 | 70 | Palanca o destornillador | 600 s |

### Cuántas piezas por día

Puedes desmontar varias piezas seguidas, pero al alcanzar tu cupo llega el descanso obligatorio:

| Habilidad de robo a vehículos | Piezas por día |
| --- | --- |
| Menos de 15 | 3 |
| 15 – 34 | 5 |
| 35 – 64 | 10 |
| 65 – 94 | 15 |
| 95 o más | 20 |

Al alcanzar el cupo recibes **+3 puntos** de habilidad de robo a vehículos y **+1 punto** de habilidad de delincuente, y quedas con **24 horas** de espera para volver a desarmar.

Al desmontar la radio, las llantas o el convertidor catalítico fuera de un interior, puede sonar la alarma del vehículo si la batería sigue conectada, con probabilidades que crecen según el nivel de alarma y lo aparatosa que sea la pieza (de un **40%** por la radio con alarma básica hasta un **90%** por el convertidor catalítico con alarma super). **Desmontar primero la batería silencia el coche por completo.**

### Patentes

La patente se roba y se coloca con comandos propios. Para ambos necesitas **50 horas** jugadas, **45** de habilidad de robo a vehículos y un **destornillador** en la mano derecha, además de estar junto al capó o detrás del maletero. No funcionan con vehículos de facciones legales, de empresa, de renta ni con bicicletas.

- `/removerpatente`: desatornilla la patente en unos **3 minutos**. Debes tener la **mano izquierda libre**, porque la patente pasa a ella con la matrícula original del vehículo. El coche queda sin matrícula visible y recibes **12 horas** de espera para desarmar.
- `/colocarpatente`: con una patente robada en la mano izquierda, la atornilla en el vehículo cercano en unos **3 minutos**. El vehículo se queda donde estaba y la patente se consume.

Un vehículo sin patente visible no recibe multas de las cámaras de velocidad, porque no pueden identificarlo, pero el exceso de velocidad se sigue reportando por radio a la policía como un vehículo con placa oculta.

### Entregar el vehículo en un desguazadero

Un vehículo robado también puede convertirse en efectivo si lo llevas conduciendo a un desguazadero y usas `/desguazar`. Necesitas ser delincuente, tener **20 horas** jugadas y que haya al menos **2 policías** de servicio, y hay una espera personal de **30 minutos** entre entregas. Los precios, la pizarra de modelos buscados y el resto de reglas están en el [sistema de desguazadero](sistema-de-desguazadero.md).

## Golpes de gran escala

Con la cuenta certificada y habilidad alta puedes dar golpes mucho mayores que un atraco. Cada uno tiene su propia guía con herramientas, botín y esperas:

| Golpe | Comando | Requisitos básicos | Guía |
| --- | --- | --- | --- |
| Cajeros automáticos | `/robarcajero` | Habilidad de delincuente 70 (más según el método) y 4 policías de servicio | [Robo de cajeros](sistema-de-robo-de-cajeros.md) |
| Fleeca Bank | `/robobanco` | Habilidad de delincuente 70 (más según el método) y 10 policías de servicio; hasta 16 participantes | [Robo al banco](sistema-de-robo-al-banco.md) |
| Joyería | `/robojoyeria` | Habilidad de delincuente 70 (más según el método) y 10 policías de servicio; hasta 16 participantes | [Robo a la joyería](sistema-de-robo-a-la-joyeria.md) |

En los tres casos el método depende de la herramienta que lleves en la mano derecha, el dinero sale de las arcas del gobierno y no puedes tener otro delito en curso. Un golpe de gran escala deja también una espera larga: tras reventar un cajero comparte la del atraco, y tras participar en el banco o la joyería quedas en espera general durante varias horas.

## Vender el botín

Todo lo robado se vende en el [mercado negro](sistema-de-mercado-negro.md) con `/venderrobo`, que además admite `/mercadonegro`, `/vendernegro` y `/traficarnegro`. Necesitas ser delincuente y tener **50 horas** jugadas; antes de eso, la casa de empeños (`/empeñar`) es tu única salida. La ubicación exacta llega por mensaje al usar el comando.

Allí puedes vender **autopartes**, **muebles robados**, **teléfonos y computadores**, **joyas** (incluida la bolsa de joyas robadas de la joyería) y **mercancía de camiones**; con 25 de habilidad de paramédico también órganos. Los muebles se pagan al **80%** de su precio de catálogo y las autopartes al **30%** de su valor, con un pequeño extra en ambos casos durante los eventos de experiencia doble o triple. Con **50 de habilidad de delincuente** el mercado negro te habilita además la compra de **munición y cargadores**.

## Otras ventajas de ser delincuente

- **Barreras**: algunas barreras del mapa están configuradas para abrirse a cualquier delincuente, sin necesidad de llaves ni de pertenecer a una facción.
- **Clínica clandestina**: con **más de 25 de habilidad de delincuente** puedes curar tus heridas, a cambio de dinero, en una de las dos clínicas clandestinas sin pasar por el hospital (con `/curarme`).
- **Zonas de pandilla**: robar dentro de la zona controlada por tu facción reduce la espera del robo a personas de 24 a **6 horas** y puede darte puntos extra de habilidad. Ver [zonas de pandilla](sistema-de-zonas-de-pandilla.md).
- **Facciones ilegales**: las oficiales y destacadas tienen acceso a la [fabricación y ensamblaje de armas](sistema-de-ensamblaje-de-armas.md) y a mejoras que no existen para el delincuente independiente. Ver [facciones ilegales](facciones-ilegales.md).

Los usuarios premium tienen reducidas las esperas de la mayoría de los delitos (hurtar, atracar, forzar cerraduras y puertas, romper ventanillas, puentear y desarmar): un **25%** menos en el nivel Plata, un **35%** en Oro y hasta un **50%** en Platino y Ruby (un **45%** en el desarme). No se reducen la espera de robar a personas, la de saquear propiedades ni la de pinchar ruedas.

## Consejos

- **Sube habilidad por lo barato.** El hurto da puntos hasta que llegas a 15 de habilidad y solo cuesta 1 hora de espera: es la forma más limpia de arrancar.
- **Atraca acompañado.** Con empleados en servicio en el negocio el tope se cuadruplica y ganas 5 puntos extra de habilidad; con 5 o más policías de servicio, otros 5.
- **Mueve la banda en grupo.** El cooperativo reparte los mismos puntos a todos los compañeros de facción a 25 metros: cinco personas en la misma casa suben cinco veces más rápido.
- **Primero la batería.** Si vas a desmontar un coche con alarma, quítale la batería antes que nada y el resto del desarme será silencioso.
- **No dejes de delinquir.** Si no eres de una facción oficial o destacada ni tienes Ruby, cada 24 horas sin cometer un delito te cuestan 5 puntos de habilidad.
- **Elige bien la herramienta.** La palanca abre casi cualquier cerradura pero hace un estruendo; las ganzúas son más discretas, exigen pulso y se gastan.
- **Cuidado con las cámaras.** Si hay una cámara de seguridad frente a la puerta, quedará registrado quién eras, qué llevabas y qué hiciste.
