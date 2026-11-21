# Sistema de bombas

## Introducción

Las **bombas TNT** son el artefacto explosivo más destructivo del servidor. Se trata de un paquete de explosivo con un detonador telefónico incorporado: cada bomba nace ligada a un **número de teléfono de 8 dígitos** y estalla cuando alguien marca ese número desde cualquier teléfono del juego.

Es un recurso de alto impacto reservado al roleplay criminal serio (atentados, sabotajes, ajustes de cuentas, trampas contra facciones rivales) y también el método más rentable para reventar cajeros automáticos, la bóveda del Fleeca Bank y la caja fuerte o la cortina de la joyería. Al mismo tiempo, es una herramienta de trabajo para quienes se dedican a neutralizarlas: detectives privados y personal con conocimientos de electrónica pueden localizar el artefacto y desactivarlo cortando cables antes de que alguien haga la llamada.

Toda explosión avisa por radio al **LSPD** y a los **paramédicos** de forma inmediata, y deja un foco de incendio activo en el lugar para el **LSFD**. No existe la detonación silenciosa: desde el momento en que la bomba estalla, el suceso se convierte en una emergencia con los servicios de rescate en camino.

### Comandos

- `/desactivarbomba` — intenta desactivar una bomba cercana cortando uno de sus tres cables.
- `/llamar [número]` — marca un número de teléfono; si corresponde al de una bomba, la detona.
- `/robarcajero` — con la bomba en la mano derecha, la planta junto a un cajero automático.
- `/robobanco` y `/robojoyeria` — con la bomba en la mano derecha, la plantan en una cerradura del banco o de la joyería (ver [Bombas en los robos](#bombas-en-los-robos)).
- `/molotov` — fabrica un cóctel molotov con una botella de vidrio y una lata de gasolina.
- `/provocarincendio` — lanza el cóctel molotov y provoca un incendio.

## Conseguir una bomba

La Bomba TNT no se vende en ninguna tienda legal. Solo aparece por dos vías:

| Vía | Quién puede | Precio | Espera entre pedidos |
|---|---|---|---|
| Ensamblaje ilegal | Contrabandistas avanzados (por ejemplo, miembros de una facción ilegal oficial) | **$150.000** por unidad | **12 horas** por cada unidad del pedido |
| Equipo de facción militar | Miembros de la facción militar, desde su armería | Según el equipo de la facción | — |

El ensamblaje se hace en un punto de creación de armas dentro de una propiedad, igual que el resto del material ilegal. El tope por pedido es de **4 bombas** (hasta **7** si perteneces a una mafia con la mejor red de contactos), y el tiempo de espera se acumula por unidad: pedir 3 bombas bloquea el ensamblaje durante **36 horas**. Las cuentas premium reducen esa espera entre un **15 %** y un **45 %** según el nivel, y la red de contactos de una mafia rebaja un **10 %** por nivel tanto el precio como la espera. Si perteneces a una facción, cada pedido además cuesta **1.000 puntos de influencia** de tu facción, que se devuelven si el ensamblaje no se completa. Consulta el [sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md) para los requisitos de contrabandista y el funcionamiento de los puntos de creación.

La bomba **pesa 0,5 kg** y ocupa **1 espacio** de inventario, así que cabe sin problema en una mochila, un paquete, un maletero o un armario.

### Riesgos de llevarla encima

La Bomba TNT cuenta como **objeto ilegal** a todos los efectos: si la policía te registra, te la incauta y el hallazgo justifica cargos graves. Tampoco puedes deshacerte de ella vendiéndola en la casa de empeños; intentarlo hace que el local **reporte a la policía** que ofreciste explosivos.

## El número de la bomba

Cada bomba recibe al fabricarse un **número aleatorio de 8 dígitos** que queda grabado en el propio objeto: al mirarla en tu inventario verás una cifra como *48213907* sobre su icono. Ese número es la llave de la detonación.

Consecuencias prácticas:

- **Apunta el número antes de dejar la bomba.** Si la colocas y olvidas anotarlo, no podrás detonarla.
- **Quien vea el objeto, ve el número.** Si otro personaje registra tu inventario, abre el paquete donde la escondiste o encuentra la bomba en el suelo, puede leer el número y hacerla estallar cuando quiera, contigo al lado.
- No hace falta ser el fabricante ni el dueño: **cualquier persona con un teléfono** que marque ese número la detona.

## Colocar y detonar

No existe un comando especial de colocación: la bomba se deja donde quieras usando el inventario normal. Puede quedar tirada en la vía pública, escondida dentro de un paquete o una mochila, guardada en el maletero o la guantera de un vehículo, metida en el armario o el refrigerador de una propiedad, dentro de un basurero, en un buzón, e incluso encima de un cadáver.

Lo importante es que **la bomba estalla en el sitio donde esté en ese momento**, no donde la dejaste:

- Si está dentro de un vehículo, explota **en la posición actual del vehículo**, se mueva o no.
- Si alguien la lleva encima, explota **sobre esa persona**, esté donde esté.
- Si está en un paquete o una mochila, se localiza el contenedor y explota ahí.
- Si está guardada en una propiedad, explota **dentro del interior** de esa propiedad, alcanzando solo a quienes estén dentro.

Ten en cuenta que la bomba solo responde mientras su contenedor esté "activo" en el servidor: la que dejas en el armario, el refrigerador o el buzón de una propiedad deja de responder si pasan unos **5 minutos** sin que nadie use ese almacenamiento, y la que lleva encima una persona desconectada no llega a explotar.

Para detonarla basta con marcar el número con un teléfono que tenga chip asignado (o con un teléfono público, que cobra **$5** por llamada), desde cualquier punto del mapa. Solo se aceptan números de 8 dígitos: marcar cualquier otra cosa nunca activa un explosivo.

### Qué ocurre al detonar

1. Suena una señal de aviso en la zona de la bomba.
2. Tras **3 segundos** de cuenta atrás, el artefacto desaparece y se produce una cadena de **siete explosiones**: tres en vertical sobre el punto (a nivel de suelo, a 5 y a 10 metros de altura) y cuatro alrededor, cubriendo un radio amplio.
3. Queda una marca de escena en el lugar: *(Fragmentos de artefacto explosivo)*.
4. Se levantan **cuatro focos de incendio con una columna de humo**, que siguen ardiendo hasta que alguien de los servicios de emergencia los retire.
5. Se lanza un aviso automático por radio al LSPD y a los paramédicos: *"Se ha reportado una explosión en [zona]"*. Si fue dentro de una propiedad, el aviso incluye la dirección exacta del inmueble.

Cuando la explosión ocurre dentro de una propiedad, el estallido además **consume un extintor del negocio**; si no quedan extintores, desata un incendio estructural completo en el local.

### El incendio que queda

El foco de fuego no es decorativo. Cualquiera que entre en él **pierde 5 puntos de salud** al entrar y otros **5 un segundo después** si sigue dentro, con efecto de aturdimiento y quemaduras que aparecen en `/heridas`; volver a entrar repite el daño. Están a salvo únicamente:

- Los **bomberos del LSFD en servicio**, inmunes al fuego sin importar la ropa que lleven.
- Quien vista **ropa de bombero**.

El fuego solo se apaga cuando un miembro en servicio de una facción de emergencias o de gobierno lo retira estando junto a él. Consulta [facciones legales](facciones-legales.md) para saber cómo trabajan el LSFD y el LSPD en este tipo de escena.

## Bombas en los robos

La Bomba TNT es el explosivo que abre los golpes más grandes. En los tres robos se usa igual: colocas la bomba con el robo correspondiente, te alejas y **llamas a su número** desde un teléfono. Nada de esto reemplaza la explosión normal: la detonación sigue avisando a la policía y a los paramédicos y dejando el foco de incendio descrito arriba.

Condiciones comunes a los tres robos:

- Habilidad de delincuente de **90** como mínimo, la más alta de todos los métodos.
- Tener la bomba en la **mano derecha** al colocarla. Queda en el suelo, pegada al objetivo, y debe estar a menos de **3 metros** del punto que quieres abrir.
- La bomba tiene **10 minutos** de vida. Si el plazo se cumple, ya no abre nada: si llamas después, la bomba explota igual, pero sin romper ni abrir el objetivo.
- Al llamar tiene que haber **policías de servicio suficientes** (4 para cajeros, 10 para el banco y la joyería). En los cajeros, si faltan, el detonador no responde y la bomba sigue en su sitio hasta que venza. En el banco y la joyería, si faltan, la bomba explota igual pero no abre nada.
- Es una bomba común: cualquiera con el kit puede desactivarla mientras esté colocada, y quien lea su número puede detonarla antes que tú.

### Cajeros automáticos

Se hace con `/robarcajero` y la bomba en la mano derecha, junto al cajero. Al colocarla recibes puntos de habilidad y empieza la espera entre robos (**72 horas**, o **48 horas** con habilidad de delincuente de 90 o más). La explosión destruye el cajero y deja **cuatro cargas** de billetes en casetes de hasta **$100.000**, el doble que una embestida y más que cualquier otro método. La mayoría de los billetes sale sano; el resto puede venir entintado y dejar una mancha morada. Detalles del robo y de la reparación en el [sistema de robo de cajeros](sistema-de-robo-de-cajeros.md).

### Fleeca Bank

Con `/robobanco` y la bomba en la mano derecha puedes volar la **puerta de seguridad** o la **puerta de la bóveda**, siempre que la puerta siga cerrada y el robo no haya terminado. El banco la detecta a los 10 minutos. Si estalla la puerta de la bóveda, se abre y los casetes quedan disponibles: entre **$750.000 y $1.000.000**, o entre **$650.000 y $900.000** si la policía ya fue avisada. La explosión además hace sonar la alarma. Una parte de los casetes puede venir entintada, y un casete entintado no vale nada. Más en el [sistema de robo al banco](sistema-de-robo-al-banco.md).

### Joyería

Con `/robojoyeria` y la bomba en la mano derecha puedes volar la **cortina metálica** (cuando está baja) o la **caja fuerte** de la oficina. La cortina volada deja un hueco para salir. La caja fuerte rinde entre **$350.000 y $500.000** en casetes, o entre **$300.000 y $450.000** si la policía ya fue avisada. La explosión hace sonar la alarma y una parte de los casetes puede venir entintada. Más en el [sistema de robo a la joyería](sistema-de-robo-a-la-joyeria.md).

## Desactivar una bomba

Cualquier personaje que cumpla los requisitos puede intentar desactivar un artefacto: no es una capacidad exclusiva de los detectives, sino una recompensa a la formación técnica.

### Requisitos

| Requisito | Detalle |
|---|---|
| Formación | Ser **detective privado** **o** tener al menos **5 de habilidad de electrónica** |
| Herramienta | **Kit de desactivación de bombas** en la **mano derecha** |
| Distancia | Estar a **5 metros o menos** de la bomba, en el mismo lugar (interior o exterior) |

El kit cuesta **$200.000** y lo compran los detectives privados desde su menú de equipo en el Ammu-Nation de Market, pagando con el dinero del banco. Pesa **3 kg** y ocupa **3 espacios**, así que lleva la mochila preparada. Detalles del oficio en el [sistema de detectives privados](sistema-de-detectives-privados.md).

La habilidad de electrónica se gana leyendo libros técnicos en la biblioteca y practicando con el [sistema de skimming](sistema-de-skimming.md); con **5 puntos** basta para intentar la desactivación.

### El corte de cables

Al usar el comando aparecen **tres cables** —rojo, amarillo y verde— y debes elegir uno para cortar. El cable trampa se decide **al azar en el momento del corte**, así que no hay patrón ni pista que valga: no sirve observar la bomba, ni probar en otra, ni esperar.

| Resultado | Probabilidad | Qué pasa |
|---|---|---|
| Cable correcto | **2 de 3 (≈66,7 %)** | La bomba queda inerte para siempre: su número deja de responder y ya no puede detonarse. |
| Cable trampa | **1 de 3 (≈33,3 %)** | La bomba entra en la cuenta atrás de 3 segundos y estalla contigo al lado, con la misma secuencia completa de explosiones, incendio y aviso por radio. |

Un tercio de las veces el técnico muere en el intento. Si tienes tiempo, la alternativa segura es **evacuar la zona y alejar a la gente** en lugar de jugarte el corte.

## Incendios provocados

Junto al explosivo existe una vía de destrucción más barata y accesible: el fuego con **latas de gasolina**. Las latas se llenan en cualquier surtidor (ver [sistema de combustible](sistema-de-combustible.md)) y tienen capacidad para **30 litros**.

### Cóctel molotov

Con `/molotov` conviertes una botella de vidrio en un artefacto incendiario. Necesitas:

- Al menos **50 de habilidad de delincuente**.
- Una **lata de gasolina con combustible** en la mano izquierda (consume **1 litro** por cóctel).
- Una **botella de vidrio** (licor, cerveza, vino, etc.) en la mano derecha.

El cóctel resultante ocupa 1 espacio y se comporta como un objeto lanzable: soltar el disparo con él en la mano lo consume.

### Provocar un incendio

Con el cóctel en la mano derecha, `/provocarincendio` lo lanza y enciende un foco de fuego en el sitio. Requisitos y condiciones:

- Al menos **10 de habilidad de delincuente**, o pertenecer al LSFD (los bomberos lo usan para prácticas y quemas controladas).
- Al aire libre funciona siempre: se crean el foco de fuego y el humo, queda la marca *(Fragmentos de vidrio)* y se avisa por radio al LSPD y a los paramédicos de un incendio en la zona.
- **Dentro de una propiedad** hace falta una autorización previa para la trama, que se solicita con `/reportar` explicando el contexto. Aun con permiso, si el negocio tiene extintores en su inventario, el sistema antiincendios apaga el intento, suena la alarma del local y tendrás que repetirlo hasta agotarlos.

El incendio resultante quema igual que el de una bomba: **5 puntos de salud** al entrar y otros 5 un segundo después a quien se meta dentro, salvo bomberos en servicio o con ropa de bombero.

### Otros usos del combustible

Las latas de gasolina, diésel y aceite sirven además para **avivar hogueras** —a costa de volverlas inestables— y, junto con un encendedor, para **quemar un cadáver** y destruir las pruebas biológicas que contiene. Ese procedimiento, sus requisitos y sus consecuencias forenses se explican en el [sistema de cadáveres](sistema-de-cadaveres.md).

Ten presente también que el combustible es peligroso por sí solo: repostar un vehículo con el **motor encendido** provoca una explosión con la misma potencia que una bomba TNT cuando hay al menos dos bomberos de servicio conectados; si no los hay, solo se cancela la carga.

## Consejos

- **Anota el número y no lo compartas.** Es el único dato que hace falta para detonar; en manos ajenas convierte tu propia bomba en un arma contra ti.
- **Piensa el envoltorio.** Meterla en un paquete cerrado o en el maletero de un vehículo la oculta de miradas casuales y permite moverla; dejarla a la vista en plena calle es una invitación a que la desactiven o la roben.
- **Cuenta con la respuesta.** El aviso a LSPD y LSFD es automático e inmediato, y el incendio marca el lugar durante largo rato. Planifica la salida antes de marcar el número.
- **Si eres quien desactiva, mide el riesgo.** Un tercio de probabilidad de morir es mucho: acordonar y evacuar suele ser la jugada correcta, y el corte de cables el último recurso.
- **Úsalas dentro de una trama.** Son un recurso de alto impacto pensado para conflictos construidos, con antagonistas que tengan margen para reaccionar. El [sistema de delincuente](sistema-de-delincuente.md) y las [facciones ilegales](facciones-ilegales.md) explican el contexto criminal en el que estos atentados tienen sentido.
