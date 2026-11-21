# Sistema de paintball

## Introducción

El paintball es una arena de combate donde puedes disparar a otros jugadores sin consecuencias de rol: nadie queda herido de verdad, nadie va a la cárcel y las muertes no cuentan como asesinatos. Tu personaje entra con un arma de paintball con munición ilimitada, pelea contra el resto de la sala y, al caer, reaparece en segundos.

Hay dos tipos de salas. Las **salas públicas** están siempre abiertas, no tienen límite de tiempo ni de puntos y son las únicas que cuentan para el **top** y reparten [Burger Points](sistema-de-burger-points.md). Las **salas privadas** las crea cualquier jugador con las reglas que quiera: modo, arma, tiempo, puntos, contraseña, C-Bug y anti-AFK.

Hay dos modos de juego. En **Deathmatch (DM)** cada jugador va por su cuenta y gana quien más eliminaciones junta. En **Team-Deathmatch (TDM)** se enfrentan el equipo **rojo** y el **azul**, sin fuego amigo, y gana el equipo con más eliminaciones.

### Comandos

- `/paintball` — abre el menú del paintball. Debes estar junto a la entrada.
- `/salirpaintball` — abandonas la partida y vuelves a la entrada.
- **Tecla N** — reaparece dentro de la sala cuando te eliminan.

## Cómo entrar

La entrada del paintball está en Los Santos y aparece en el mapa con un icono. Para abrir el menú debes estar en ese punto y escribir `/paintball`. Si estás lejos, el comando te marca un checkpoint hacia la entrada.

El menú tiene cuatro opciones: **Salas públicas**, **Salas privadas**, **Crear sala privada** y **Estadísticas**.

### Requisitos

Para unirte a una sala, o para crear una, debes cumplir todo lo siguiente:

| Requisito | Detalle |
|-----------|---------|
| Ubicación | Estar en la entrada del paintball |
| Dinero | **$150** en la mano para pagar la entrada |
| Estado | Estar vivo y **sin heridas** (de bala, arma blanca, golpes, quemaduras ni piernas rotas) |
| Manos libres | No llevar nada en las manos, el pecho ni la espalda, ni un arma colgada |
| Chaleco | No llevar chaleco antibalas |
| Armas | Cumplir los requisitos para usar armas: **24 horas de juego**, 2FA activado y cuenta certificada (ver [sistema de armas](sistema-de-armas.md) y [sistema de certificación](sistema-de-certificacion.md)) |
| Cárcel | No estar preso |
| Marcadores | No tener activos `/ref` ni `/marcar` |
| Partida | No estar ya en una partida de paintball |

La entrada se paga **cada vez que te unes** a una sala, también cuando creas una privada. No se vuelve a cobrar al empezar una nueva ronda. Los socios del Golf Club con la membresía activa entran **gratis** (ver [sistema de golf](sistema-de-golf.md)).

## Salas públicas

Hay **11 salas públicas**, siempre abiertas. Se elige una desde el listado, que muestra el tipo, el modo, el arma y cuántos jugadores hay en cada una.

| Modo | Armas disponibles | Capacidad |
|------|-------------------|-----------|
| **Deathmatch** | Desert Eagle, escopeta, Uzi, MP5, M4 (una sala por arma) | 10 jugadores |
| **Team-Deathmatch** | Desert Eagle, escopeta, Uzi, MP5, M4 (una sala por arma) | 10 jugadores |
| **Deathmatch (C-Bug)** | Desert Eagle | 20 jugadores |

- Las salas públicas **no terminan nunca**: no tienen límite de tiempo ni de puntos. Entras y sales cuando quieras.
- Todas tienen **anti-AFK** activado.
- La sala **C-Bug** es la única pública que permite usar C-Bug.
- En una sala TDM eliges tu equipo, rojo o azul, al unirte. Si todos se van, el marcador de la sala vuelve a cero.
- Las salas llenas no admiten más jugadores.

### Top y recompensas

Cada eliminación en una sala pública queda registrada para el **top de paintball**, que muestra a los **10 jugadores con más eliminaciones** de la historia. Lo ves en **Estadísticas**, dentro del menú.

- Cuentan las eliminaciones en las salas **Deathmatch** y **TDM** públicas.
- **No** cuentan las de la sala C-Bug ni las de ninguna sala privada.
- En TDM solo cuenta eliminar a un rival del otro equipo.

Además, cada eliminación en una sala pública, **incluida la sala C-Bug**, otorga **+5 Burger Points**, con una espera de **2 minutos** entre una recompensa y la siguiente. Las salas privadas no dan puntos.

## Salas privadas

Cualquier jugador puede abrir su propia sala desde **Crear sala privada**. Cada jugador puede tener **una sola sala privada abierta** a la vez, y debe cumplir los mismos requisitos y pagar la misma entrada que para una sala pública. Al crearla entras de inmediato. Si es TDM, eliges tu equipo antes de entrar.

### Opciones de la sala

| Opción | Valores | Por defecto |
|--------|---------|-------------|
| **Modo** | Deathmatch o Team-Deathmatch | Deathmatch |
| **Arma** | Colt 45, pistola silenciada, Desert Eagle, escopeta, recortada, escopeta de combate, Uzi, MP5, AK-47, M4, Tec-9, rifle o francotirador | Desert Eagle |
| **Tiempo** | Sin límite, 5, 10, 15, 20 o 30 minutos | Sin límite |
| **Puntos** | Sin límite, 10, 25, 50 o 100 | Sin límite |
| **Contraseña** | Hasta **15 caracteres**; vacía para dejar la sala abierta | Sin contraseña |
| **C-Bug** | Permitido o no permitido | No permitido |
| **Anti-AFK** | Activado o desactivado | Activado |

La sala admite hasta **16 jugadores**. Los demás la encuentran en **Salas privadas**, donde el listado muestra el número de la sala, el modo, si tiene clave o permite C-Bug, el nombre del dueño, el límite y los jugadores. Si tiene contraseña, se pide al entrar.

### Rondas

- Si fijaste un límite de **tiempo**, un **marcador de puntos** o ambos, la ronda termina en cuanto se cumpla el primero de ellos.
- Al terminar se anuncia al ganador (el jugador con más eliminaciones en DM, el equipo con más en TDM) o el empate.
- **3 segundos después** empieza una nueva ronda automáticamente: los marcadores vuelven a cero y todos reaparecen.
- Sin límites, la ronda dura hasta que la sala se vacía.
- La sala se cierra sola cuando se va el último jugador. Que se vaya el dueño no la cierra.

## Dentro de la partida

- Apareces en un punto de la arena y quedas inmovilizado **1 segundo**. Tienes **100 de vida** y **sin chaleco**.
- Recibes el arma de la sala en la mano derecha, con munición ilimitada. En TDM apareces en la zona de tu equipo.
- Al ser eliminado, pulsa la **tecla N** para reaparecer. No hace falta que te curen: la herida se borra al reaparecer.
- Un marcador en pantalla muestra el estado de la partida. En TDM, el puntaje rojo contra el azul. En una sala privada DM, el líder y sus eliminaciones. En las salas públicas DM no aparece marcador. En las salas con tiempo, también la cuenta atrás.
- En TDM no hay **fuego amigo**. Los colores de equipo, rojo y azul, solo los ven los jugadores **dentro de la sala**, tanto tus compañeros como los rivales.
- El daño del paintball no sale de la sala, y tampoco entra: nadie de fuera puede dispararte.
- Lo que escribes en el chat normal va a un chat propio de la sala, con el prefijo `[Paintball]`, que solo ven los jugadores de la partida. Avisos como los ingresos, las salidas y cada eliminación también llegan a toda la sala.
- Dentro de la sala no puedes usar el inventario con normalidad, ni taclear. Tampoco te desangras ni dejas rastros forenses.
- Las muertes en paintball **no cuentan como asesinatos** ni tienen consecuencias de rol (ver [sistema de asesinatos](sistema-de-asesinatos.md)).

### Salir de la partida

`/salirpaintball` te devuelve a la entrada con la **vida completa**, sin heridas y sin chaleco. El arma de paintball desaparece de tu mano, y la entrada pagada no se devuelve.

También sales de la partida de estas formas:

- **Anti-AFK**: si la sala lo tiene activado y tu juego queda en pausa (por ejemplo, al minimizarlo), te sacan de la partida.
- **Desconectarte**: si te desconectas o cierras el juego dentro de una sala, al volver apareces en la entrada del paintball, sin arma y sin volver a la partida. Para jugar otra vez debes pagar de nuevo.

Los disparos que alcanzan a llegar con retraso cuando ya saliste de la sala no cuentan ni te traen problemas.

## Consejos

- **Empieza por una sala pública DM**: no necesitas coordinarte con nadie, y la sala C-Bug es la mejor para practicar esa técnica con la Desert Eagle.
- **Organiza torneos con salas privadas**: un TDM con 25 o 50 puntos y contraseña es ideal para equipos de amigos. Pon un tiempo si quieres que las rondas sean cortas.
- **Revisa tus manos antes de pagar**: si llevas un arma, un bolso o cualquier objeto, la entrada se bloquea. Guarda todo antes de acercarte.
- **Si quieres Burger Points, juega en salas públicas**: cada eliminación suma +5, con una pausa de 2 minutos entre recompensas.
- **Activa el anti-AFK en tu sala** si juegas con desconocidos: así no se llena de jugadores que dejaron la partida abierta.
- **Si eres socio del Golf Club**, el paintball te sale gratis: aprovecha para entrar todas las veces que quieras.
