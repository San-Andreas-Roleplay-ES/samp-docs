# Sistema de bowling

## Introducción

**Vinewood Star Lanes** es la bolera de la ciudad: **8 pistas** donde puedes jugar una partida de diez frames **solo** o **en pareja**, con las reglas clásicas del bowling, marcador en pantalla, récord de la bolera y seis logros. Es un entretenimiento puro: no se gana dinero jugando, pero sí monedas y Burger Points por los logros.

Cada partida se paga **por adelantado** y el dinero va a la caja del negocio. Los socios de la membresía del Golf Club pagan menos (ver más abajo). La bola, los pinos y las canaletas funcionan con física propia: los pinos caen en cadena y un tiro mal apuntado puede acabar en la canaleta.

Para jugar solo tienes que ponerte en la zona de lanzamiento de una pista libre y escribir `/bolos`. Ten la **mano derecha libre**: ahí aparece la bola.

### Comandos

- `/bolos` — en la zona de lanzamiento de una pista libre, abre el menú para jugar solo o en pareja.
- `/bolos invitar [id o parte del nombre]` — invita a otro jugador a una partida en pareja en tu pista.
- `/bolos salir` — abandona la partida en curso.
- `/bolos record` — muestra tus estadísticas y el récord de la bolera (alias: `/bolos estadisticas`).
- `/bolos ayuda` — recuerda los controles y el precio de la partida.
- `/aceptar` y `/rechazar` — respondes a una invitación a jugar en pareja.

## Precio y requisitos

| Concepto | Valor |
|----------|-------|
| **Precio por jugador** | **$1.000** por partida |
| **Precio para socios del Golf Club** | **$250** por partida |
| **Pistas** | 8 |
| **Jugadores por pista** | 1 o 2 |

Para empezar o unirte a una partida debes:

- Estar **vivo**, **a pie** y sin esposas.
- Tener el dinero de la partida **en mano**.
- Tener la **mano derecha libre**.
- No estar en medio de otra actividad: casino, pesca, gimnasio, baloncesto, paintball o golf.
- Estar en la **zona de lanzamiento** de una pista libre (la franja detrás de la línea de falta, del ancho de la pista).

El cobro se hace al empezar y **no se devuelve** aunque abandones o tu compañero se vaya. En una partida en pareja cada jugador paga su propia entrada.

### Membresía del Golf Club

Los socios de la membresía del Golf Club, que cuesta **$100.000 por semana**, pagan **$250** por partida en vez de $1.000. Los detalles de la membresía están en la [guía de golf](sistema-de-golf.md).

## Jugar solo o en pareja

Frente a una pista libre, `/bolos` abre un menú con dos opciones: **jugar solo** o **jugar en pareja**. Una pista ocupada, o con un tiro todavía en marcha, no se puede usar hasta que termine.

### Invitar a otro jugador

1. Colócate en la zona de lanzamiento de la pista y escribe `/bolos invitar` con el ID o el nombre del otro jugador (también puedes elegir "Jugar en pareja" en el menú y escribirlo ahí).
2. La otra persona debe estar **dentro de la bolera y a menos de 12 metros** de tu pista, y cumplir los mismos requisitos que tú.
3. Tiene **30 segundos** para responder con `/aceptar` o `/rechazar`. Si ya tiene otra oferta pendiente, no podrás invitarla.
4. Al aceptar, **ambos pagan** su entrada y empieza la partida. Si el invitador ya no está en la zona de lanzamiento, o la pista se ocupó mientras tanto, la invitación se cancela.

En pareja los frames se **alternan**: tira uno y después el otro, hasta que los dos completan los diez frames.

## Cómo se lanza

Cuando es tu turno aparece la bola en tu mano derecha y puedes **caminar libremente** por la zona de lanzamiento. Después:

1. **Colócate** en la posición lateral que prefieras sobre la pista y pulsa la **tecla de sprint** para tomar postura. Tu personaje se coloca en la línea y la cámara pasa a un plano bajo con una **flecha de puntería** que solo ves tú.
2. **Apunta** con las teclas de **izquierda y derecha**: tu personaje se inclina hasta **6 grados** a cada lado. Al tomar postura, la inclinación empieza con un pequeño desvío aleatorio, así que llegar caminando recto no te deja el tiro hecho.
3. **Mantén pulsada** la tecla de sprint para cargar la fuerza. Aparece la **barra de potencia** arriba a la derecha, que sube y baja sin parar en ciclos de un par de segundos.
4. **Suelta** la tecla cuando la barra esté dentro de la **franja verde** (entre el **70 % y el 85 %**): es el *tiro perfecto*.
5. La bola sale de tu mano y la cámara la sigue hasta los pinos.

Si cambias de idea antes de cargar, pulsa la **tecla de entrar y salir de vehículo** para dejar la postura. Si mantienes la tecla demasiado tiempo (unos **8 segundos**), el tiro sale solo con la fuerza que tenga la barra en ese momento.

### Fuerza y desvío

- Cuanto mayor es la fuerza, más rápido viaja la bola.
- **Dentro de la franja verde** la bola sale exactamente hacia donde apuntas.
- **Fuera de la franja** la bola se desvía a un lado u otro, y el desvío crece cuanto más lejos de la franja sueltes. Un desvío grande manda la bola a la **canaleta**.

### Tiempo y abandono

- Tienes **40 segundos** para tirar desde que empieza tu turno. Si se acaba el tiempo, el tiro cuenta como **cero pinos**.
- Si agotas el tiempo **dos turnos seguidos** sin tirar, te echan de la partida por inactividad.
- Si durante tu turno **tomas un objeto con la mano derecha**, pierdes el tiro (cero pinos).
- Quedas fuera de la partida si te alejas de la pista (más de **22 metros**), subes a un vehículo, te esposan, te hieren o te teletransportan, o si escribes `/bolos salir`.

## Puntuación

Se juegan **10 frames** con las reglas oficiales del bowling:

- **Strike (X)**: derribas los 10 pinos con la primera bola. Suma 10 más las **dos bolas siguientes**.
- **Spare (/)**: derribas los 10 pinos entre las dos bolas del frame. Suma 10 más la **bola siguiente**.
- **Frame abierto**: se suman los pinos derribados.
- **Décimo frame**: si haces strike o spare tienes derecho a **bolas extra** (hasta tres tiros), que se tiran contra un nuevo rack de pinos.
- La puntuación máxima es **300** (doce strikes seguidos).

El avisador en pantalla marca cada tiro: **¡Strike!**, **¡Doble!** (dos strikes seguidos), **¡Turkey!** (tres o más seguidos), **¡Spare!**, **¡Split!** (después de la primera bola quedan pinos separados), **Canal** o **Ningún pino**.

Abajo en el centro de la pantalla ves el **marcador** con los diez frames, las marcas de cada tiro y el total. Sobre cada pista, además, un cartel muestra quién juega, su puntuación, el frame actual y el **récord** de la bolera. Al terminar, el resultado queda visible unos segundos en el cartel de esa pista.

## Partidas en pareja

- Gana quien tenga **más puntos** al terminar los diez frames. Si empatan, no gana ninguno.
- Si tu compañero **abandona**, sigues jugando solo hasta terminar tus frames, y **ganas por abandono** si completas la partida.
- Abandonar una partida en pareja cuenta como una derrota para quien se va.

## Récord y estadísticas

Cada partida terminada se guarda. Con `/bolos record` consultas:

- Tus **partidas jugadas**.
- Tu **mejor puntuación**.
- Tu **promedio**.
- Tus **victorias en pareja**.
- El **récord de Star Lanes**, con el nombre de quien lo tiene.

El récord de la bolera es la mejor puntuación de todas las partidas terminadas. Cuando alguien lo supera, los jugadores de esa pista reciben un aviso y el nuevo récord aparece en los carteles de todas las pistas. Solo cuentan las partidas que terminas; si abandonas, no se registra puntuación.

## Logros

La bolera tiene **6 logros**. Cada logro paga monedas de cuenta y además suma **50 Burger Points**:

| Logro | Cómo se consigue | Monedas |
|-------|------------------|---------|
| **Diez de diez, a la primera.** | Tu primer strike | 1 |
| **Tres strikes y ni un solo perdón.** | Tres strikes seguidos (turkey) | 3 |
| **Doscientos no se tiran solos.** | Terminar una partida con **200 puntos o más** | 3 |
| **La partida perfecta.** | Hacer **300 puntos** en una partida | 15 |
| **Que ruede la revancha.** | Ganar una partida en pareja | 2 |
| **Cliente habitual de Star Lanes.** | Terminar **25 partidas** | 5 |

Consulta tu progreso con `/logros`. Más información sobre las monedas en la [tienda premium](tienda-premium.md) y sobre los puntos en el [sistema de Burger Points](sistema-de-burger-points.md).

## Consejos

- **Vacía la mano derecha antes de jugar.** Ahí va la bola: si llevas un objeto, no podrás empezar, y si lo tomas en pleno turno pierdes el tiro.
- **Apunta con calma, suelta en la franja verde.** Un tiro perfecto sale limpio: fuera de la franja el desvío te manda a la canaleta.
- **No agotes el tiempo.** Son 40 segundos por turno y dos turnos seguidos sin tirar te echan de la partida sin devolver el dinero.
- **En pareja, avisa antes de invitar.** La otra persona debe estar cerca de la pista, con dinero y la mano derecha libre.
- **Si juegas a menudo, hazte socio del Golf Club.** La partida baja de $1.000 a $250.
- **Termina las partidas.** Solo las partidas completas cuentan para el récord, las estadísticas y los logros de puntuación.
