# Sistema de bombas

## Introducción

Las **bombas TNT** son el artefacto explosivo más destructivo del servidor. Se trata de un paquete de explosivo con un detonador telefónico incorporado: cada bomba nace ligada a un **número de teléfono de 8 dígitos** y estalla cuando alguien marca ese número desde cualquier teléfono del juego.

Es un recurso de alto impacto reservado al roleplay criminal serio (atentados, sabotajes, ajustes de cuentas, trampas contra facciones rivales) y, al mismo tiempo, una herramienta de trabajo para quienes se dedican a neutralizarlas: detectives privados y personal con conocimientos de electrónica pueden localizar el artefacto y desactivarlo cortando cables antes de que alguien haga la llamada.

Toda explosión avisa por radio al **LSPD** y a los **paramédicos** de forma inmediata, y deja un foco de incendio activo en el lugar para el **LSFD**. No existe la detonación silenciosa: desde el momento en que la bomba estalla, el suceso se convierte en una emergencia con los servicios de rescate en camino.

### Comandos

- `/desactivarbomba` — intenta desactivar una bomba cercana cortando uno de sus tres cables.
- `/llamar [número]` — marca un número de teléfono; si corresponde al de una bomba, la detona.
- `/molotov` — fabrica un cóctel molotov con una botella de vidrio y una lata de gasolina.
- `/provocarincendio` — lanza el cóctel molotov y provoca un incendio.

## Conseguir una bomba

La Bomba TNT no se vende en ninguna tienda legal. Solo aparece por dos vías:

| Vía | Quién puede | Precio | Espera entre pedidos |
|---|---|---|---|
| Ensamblaje ilegal | Contrabandistas avanzados o miembros de una facción ilegal oficial | **$150,000** por unidad | **12 horas** por cada unidad del pedido |
| Equipo de facción militar | Miembros de la facción militar, desde su armería | Según el equipo de la facción | — |

El ensamblaje se hace en un punto de creación de armas dentro de una propiedad, igual que el resto del material ilegal. El tope por pedido es de **5 bombas**, y el tiempo de espera se acumula por unidad: pedir 3 bombas bloquea el ensamblaje durante **36 horas**. Las cuentas premium reducen esa espera entre un **15 %** y un **45 %** según el nivel. Consulta el [sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md) para los requisitos de contrabandista y el funcionamiento de los puntos de creación.

La bomba **pesa 0,5 kg** y ocupa **1 espacio** de inventario, así que cabe sin problema en una mochila, un paquete, un maletero o un armario.

### Riesgos de llevarla encima

La Bomba TNT cuenta como **objeto ilegal** a todos los efectos: si la policía te registra, te la incauta y el hallazgo justifica cargos graves. Tampoco puedes deshacerte de ella vendiéndola en la casa de empeños; intentarlo hace que el local **reporte a la policía** que ofreciste explosivos.

## El número de la bomba

Cada bomba recibe al fabricarse un **número aleatorio de 8 dígitos** que queda impreso en la propia etiqueta del objeto: al mirarla en tu inventario verás algo como *Bomba TNT (48213907)*. Ese número es la llave de la detonación.

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

Para detonarla basta con marcar el número con un teléfono que tenga chip asignado, desde cualquier punto del mapa. Solo se aceptan números de 8 dígitos: marcar cualquier otra cosa nunca activa un explosivo.

### Qué ocurre al detonar

1. Suena una señal de aviso en la zona de la bomba.
2. Tras **3 segundos** de cuenta atrás, el artefacto desaparece y se produce una cadena de **siete explosiones**: tres en vertical sobre el punto (a nivel de suelo, a 5 y a 10 metros de altura) y cuatro alrededor, cubriendo un radio amplio.
3. Queda una marca de escena en el lugar: *(Fragmentos de artefacto explosivo)*.
4. Se levanta un **foco de incendio rodeado de conos y humo del LSFD**, que sigue ardiendo hasta que los bomberos lo retiren.
5. Se lanza un aviso automático por radio al LSPD y a los paramédicos: *"Se ha reportado una explosión en [zona]"*. Si fue dentro de una propiedad, el aviso incluye la dirección exacta del inmueble.

Cuando la explosión ocurre dentro de una propiedad, el estallido además **consume un extintor del negocio**; si no quedan extintores, desata un incendio estructural completo en el local.

### El incendio que queda

El foco de fuego no es decorativo. Cualquiera que entre en él **pierde 5 puntos de salud por segundo** mientras siga dentro, con efecto de aturdimiento. Están a salvo únicamente:

- Los **bomberos del LSFD en servicio**, inmunes al fuego sin importar la ropa que lleven.
- Quien vista un **traje de bombero** completo.

El fuego solo se apaga cuando un miembro de una facción de emergencias lo retira desde el lugar. Consulta [facciones legales](facciones-legales.md) para saber cómo trabajan el LSFD y el LSPD en este tipo de escena.

## Desactivar una bomba

Cualquier personaje que cumpla los requisitos puede intentar desactivar un artefacto: no es una capacidad exclusiva de los detectives, sino una recompensa a la formación técnica.

### Requisitos

| Requisito | Detalle |
|---|---|
| Formación | Ser **detective privado** **o** tener al menos **5 de habilidad de electrónica** |
| Herramienta | **Kit de desactivación de bombas** en la **mano derecha** |
| Distancia | Estar a **5 metros o menos** de la bomba, en el mismo lugar (interior o exterior) |

El kit cuesta **$200,000** y lo compran los detectives privados desde su menú de equipo en el Ammu-Nation de Market, pagando con el dinero del banco. Pesa **3 kg** y ocupa **3 espacios**, así que lleva la mochila preparada. Detalles del oficio en el [sistema de detectives privados](sistema-de-detectives-privados.md).

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

El incendio resultante quema igual que el de una bomba: **5 puntos de salud por segundo** a quien se meta dentro, salvo bomberos en servicio o con traje ignífugo.

### Otros usos del combustible

Las latas de gasolina, diésel y aceite sirven además para **avivar hogueras** —a costa de volverlas inestables— y, junto con un encendedor, para **quemar un cadáver** y destruir las pruebas biológicas que contiene. Ese procedimiento, sus requisitos y sus consecuencias forenses se explican en el [sistema de cadáveres](sistema-de-cadaveres.md).

Ten presente también que el combustible es peligroso por sí solo: repostar un vehículo con el **motor encendido** puede provocar una explosión con la misma potencia que una bomba TNT.

## Consejos

- **Anota el número y no lo compartas.** Es el único dato que hace falta para detonar; en manos ajenas convierte tu propia bomba en un arma contra ti.
- **Piensa el envoltorio.** Meterla en un paquete cerrado o en el maletero de un vehículo la oculta de miradas casuales y permite moverla; dejarla a la vista en plena calle es una invitación a que la desactiven o la roben.
- **Cuenta con la respuesta.** El aviso a LSPD y LSFD es automático e inmediato, y el incendio marca el lugar durante largo rato. Planifica la salida antes de marcar el número.
- **Si eres quien desactiva, mide el riesgo.** Un tercio de probabilidad de morir es mucho: acordonar y evacuar suele ser la jugada correcta, y el corte de cables el último recurso.
- **Úsalas dentro de una trama.** Son un recurso de alto impacto pensado para conflictos construidos, con antagonistas que tengan margen para reaccionar. El [sistema de delincuente](sistema-de-delincuente.md) y las [facciones ilegales](facciones-ilegales.md) explican el contexto criminal en el que estos atentados tienen sentido.
