# Sistema de prófugos

## Introducción

Quien sale de la cárcel con **libertad condicional** lleva una **tobillera electrónica** y debe cumplir unas reglas estrictas hasta que termine el plazo, como se explica en el [sistema de cárcel](sistema-de-carcel.md). Hay otro camino, más arriesgado: **cortar la tobillera** con un arma o una herramienta cortante. Si lo logras, tu libertad condicional queda en pausa y pasas a ser un **prófugo de la justicia**.

Ser prófugo no se acaba con el tiempo ni con desconectarse: dura hasta que te **arresten**. Mientras tanto la ciudad entera juega en tu contra. Los cajeros automáticos te rechazan y avisan a la policía, los empleados de bancos y tiendas pueden reconocerte, y los radares y los lectores de matrículas detectan tu vehículo. A cambio de arriesgarte tienes algo que ninguna condicional te da: la posibilidad de moverte sin tobillera, aunque con la ley pisándote los talones.

Del otro lado, el **Gobierno** y **SADCR** pueden ofrecer **recompensas** por tu captura, y cualquier civil que participe de verdad en ella puede cobrarlas. Los prófugos conectados se consultan desde el teléfono, el ordenador policial y un comando de servicio.

### Comandos

- `/rompertobillera` — empieza a cortar tu tobillera con la herramienta que llevas en la mano derecha. Si ya estás cortando, el mismo comando lo deja. Solo para parolees.
- `/recompensa [monto] [nombre_apellido]` — ofrece una recompensa por un prófugo. Solo para los líderes de Gobierno y de SADCR.
- `/fugitivos` — lista los prófugos conectados, con su recompensa y los cargos de su último arresto. Alias: `/profugos`. Solo para policías en servicio.
- `/rastrearparolee [id]` — sobre un prófugo, marca en el mapa dónde está su tobillera cortada. Solo para los guardias de SADCR en servicio.
- `/quitarfugitivo [nombre_apellido]` — retira la condición de prófugo a una persona. Solo para los jueces en servicio.

## Cómo se rompe la tobillera

### Requisitos

| Requisito | Detalle |
|-----------|---------|
| **Libertad condicional** | Debes estar cumpliendo una condicional y no ser ya un prófugo |
| **Cuenta certificada** | Igual que el resto de los delitos, mira el [sistema de certificación](sistema-de-certificacion.md) |
| **Agentes en servicio** | Al menos **2** entre policías y guardias de SADCR. No cuentan los agentes del FBI ni los de la fiscalía |
| **Herramienta** | Un arma o herramienta cortante en la **mano derecha** |
| **Estado** | Vivo, a pie, sin esposas, sin taser y sin estar placado |
| **Sin otras actividades** | No puedes estar robando, apostando ni en una partida de paintball o de los Hunger Games |
| **Espera** | Si abandonaste, fallaste o te interrumpieron un intento, debes esperar **5 minutos** para volver a intentarlo |

Al escribir `/rompertobillera` aparece un aviso de confirmación: al aceptar saltará una alerta a todos los policías y pondrás en riesgo tu libertad. Tienes 60 segundos para responder.

### Herramientas

Cada herramienta corta a una velocidad distinta. La tabla muestra el **tiempo mínimo** que tardarías con una puntería perfecta; en la práctica tardas más, porque la hoja se desvía sola y tienes que corregirla.

| Velocidad | Herramientas | Tiempo mínimo |
|-----------|--------------|---------------|
| **Rápida** | Cizalla de rescate hidráulica, tijera de corte | unos 27 s |
| **Rápida** | Motosierra | unos 30 s |
| **Rápida** | Motoamoladora | unos 33 s |
| **Media** | Soplete | unos 37 s |
| **Media** | Cizalla, corta cadenas | unos 44 s |
| **Media** | Katana | unos 56 s |
| **Lenta** | Hacha, hacha plana, pulaski | unos 61 s |
| **Lenta** | Hoz, tijeras de podar | unos 67 s |
| **Lenta** | Bisturí | unos 74 s |
| **Lenta** | Cuchillos | unos 83 s |
| **Lenta** | Tijera | unos 95 s |

La motosierra y las hachas vibran más, así que la hoja se desvía con más fuerza. El bisturí es más estable. Solo la motoamoladora, la motosierra y el soplete sacan chispas, y suenan a 15 metros a la redonda. Al empezar, el juego te avisa si tu herramienta corta rápido, a ritmo medio o lento.

### El minijuego

Tu personaje se agacha junto a su tobillo y aparecen dos barras arriba a la derecha:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/romper-tobillera-minijuego.jpg" alt="Minijuego para cortar la tobillera con los contadores de corte y hoja" width="1600" height="900">

- **Corte**: el progreso. Al llegar a lleno, la tobillera se rompe.
- **Hoja**: la posición de la hoja. La franja **verde** del centro es la zona donde sí se corta.

Mantén pulsado **ESPACIO** para cortar y usa **A** y **D** para mover la hoja y mantenerla en la franja verde. La hoja se desvía sola de un lado a otro, más aún mientras cortas.

- Si cortas con la hoja **fuera** de la franja, el corte no avanza.
- Si la hoja se queda **1 segundo** fuera de la franja mientras cortas, **resbala**: tu personaje se corta el tobillo, el progreso vuelve a **cero** y no puedes cortar durante 2 segundos.
- Pulsa la tecla de entrar a vehículo (**F**) o vuelve a escribir `/rompertobillera` para dejarlo.

El corte se interrumpe si te alejas más de **1,5 metros** de donde empezaste, si la herramienta deja de estar en tu mano derecha, si te hieren, esposan, paralizan o placan, si empiezas otra actividad, si pasas **60 segundos** sin cortar o si llevas **5 minutos** en total. Cualquier interrupción, salvo terminar el corte, te obliga a esperar 5 minutos antes de otro intento.

### La alerta a la policía

Confirmar el corte compromete la alerta, aunque después te arrepientas. Los policías y guardias de SADCR en servicio (no el FBI ni la fiscalía) reciben un aviso en rojo con el lugar del corte y un punto marcado en el mapa. El aviso llega más tarde mientras más agentes haya conectados:

| Agentes en servicio | La alerta salta a los |
|---------------------|-----------------------|
| 2 | 20 segundos |
| 3 | 30 segundos |
| 4 | 40 segundos |
| 5 | 50 segundos |
| 6 o más | 60 segundos |

Si abandonas, te interrumpen, te desconectas o terminas antes del plazo, la alerta sale en ese momento. Al romper la tobillera, la policía recibe un segundo aviso: la tobillera dejó de emitir y ahora eres un prófugo.

## Ser prófugo

Al romper la tobillera:

- Tu libertad condicional queda **en pausa**. El tiempo que te quedaba no corre.
- Tu nivel de búsqueda sube al máximo (6 estrellas) y tu nombre se ve en rojo.
- La tobillera cortada cae al suelo donde cortaste y sigue emitiendo.
- Mientras seas prófugo no puedes usar `/tiempop`, `/terminarp`, `/solicitaroficialparole` ni `/encarcelarme`, y nadie puede asignarte una nueva libertad condicional hasta que seas arrestado.

La condición de prófugo se mantiene aunque cierres sesión o cambies de personaje. Termina de dos formas:

- **Arresto**: cuando te arrestan, la condicional se reanuda **después de la nueva condena**. Tu nueva libertad condicional dura los días del arresto más el tiempo que te quedaba cuando rompiste la tobillera.
- **Orden judicial**: un juez en servicio puede retirar la condición con `/quitarfugitivo`. En ese caso la condicional vuelve a correr desde ese momento con el tiempo que te quedaba pendiente.

### Cómo te delata la ciudad

La ciudad entera puede delatarte. Cada delación tiene su propia espera por personaje, que se mantiene aunque cierres sesión.

| Dónde | Qué pasa | Espera |
|-------|----------|--------|
| **Cajero automático** | El cajero **rechaza** tu tarjeta siempre y avisa a la policía con la dirección del cajero | 120 s |
| **Mostrador de un banco** | La operación sigue, pero hay un **30 %** de probabilidades de que un empleado te reconozca y avise | 300 s |
| **Tienda atendida por un NPC** | Hay un **30 %** de probabilidades de que el dependiente te reconozca y avise | 300 s |
| **Radar de velocidad** | Si conduces **tu propio vehículo registrado**, con tu placa visible, el radar avisa a cualquier velocidad | 300 s |
| **Lector de matrículas (ALPR)** | Cuando un policía lee la matrícula de un vehículo registrado a tu nombre, el lector avisa de que pertenece a un prófugo | — |

Algunas precisiones:

- Una **máscara** evita que te reconozcan en bancos y tiendas, pero **no** en los cajeros ni en los radares, que te identifican por registro y no por la cara.
- Las compras en tiendas que te atiende un jugador no se delatan, solo las que atiende el NPC.
- El radar solo te detecta si conduces tu vehículo registrado, con tu propia placa a la vista. Un vehículo prestado, robado, de empresa o de facción, o con otra placa, no te delata. Tampoco te delata una embarcación ni una aeronave.
- El lector de matrículas marca el vehículo de un prófugo aunque él no esté conectado o lo conduzca otra persona.

## Recompensas

Los **líderes de Gobierno y de SADCR** pueden ofrecer recompensas con `/recompensa [monto] [nombre_apellido]`. Se indica el nombre del personaje, así que sirve también si el prófugo está desconectado, pero no puedes poner una recompensa a un personaje de tu propia cuenta.

| Dato | Valor |
|------|-------|
| **Monto por recompensa** | Entre **$1.000** y **$100.000** |
| **Total acumulado por prófugo** | Hasta **$500.000** |
| **Facciones por prófugo** | Una sola: si ya hay una recompensa de otra facción, no puedes sumar la tuya |
| **De dónde sale** | Del banco de la facción, al momento de ofrecerla |
| **Espera entre recompensas** | 5 segundos |

Cada recompensa se **anuncia a toda la ciudad** como un comunicado oficial, con la facción, el líder, el monto y el nombre del prófugo. Si la recompensa no se puede registrar porque el objetivo ya no es prófugo, otra facción ofrece la suya o se pasaría del máximo, el dinero se devuelve a la facción.

### Cazarrecompensas

La recompensa se paga cuando el prófugo es **arrestado**. En el reporte de arresto, el oficial elige a quien **entregó al prófugo**, o a nadie si lo capturó la propia policía. Si no hay cazarrecompensas, el dinero vuelve a los fondos de la facción que lo ofreció.

Para poder ser elegido, el civil debe cumplir todo esto:

- Estar a **10 metros** del oficial, vivo y en el mismo lugar.
- En los **10 minutos anteriores**, haber **herido**, dejado herido, **placado**, **paralizado con el taser** o **esposado** al prófugo mientras estaba libre. No cuenta golpear a alguien que ya estaba esposado o paralizado, ni lo ocurrido en una partida de paintball.
- No ser policía, guardia de SADCR, personal judicial, militar ni miembro del Gobierno.
- No ser de la misma cuenta ni de la misma facción que el prófugo.

El cazarrecompensas **cobra en su banco** cuando el oficial finaliza el arresto, siempre que siga a 15 metros del oficial. Si tu cuenta tiene un personaje en la facción que puso la recompensa, o en la facción del prófugo, no cobras y el dinero vuelve a la facción. Las pruebas de captura se borran cada vez que el prófugo rompe una tobillera nueva.

## Listas y rastreo

- **Policías en servicio**: `/fugitivos` muestra cada prófugo conectado con su desde cuándo lo es, su recompensa y los cargos de su último arresto.
- **Ordenador policial**: la sección de personas tiene la lista de prófugos conectados, y la ficha de cada persona indica si es prófugo. La lista de parolees los muestra como prófugos.
- **Teléfono**: cualquier ciudadano tiene la aplicación **Prófugos**, con los prófugos conectados de a 5 por página. Al elegir uno se ven desde cuándo es prófugo, su recompensa y los cargos de su último arresto.
- **Rastreo**: los guardias de SADCR en servicio usan `/rastrearparolee` sobre un prófugo y se marca en el mapa dónde está su tobillera cortada, ya esté en el suelo, en manos de quien la recogió, en un maletero o dentro de una propiedad. Si no emite señal, el comando lo dice. No se puede rastrear al mismo parolee otra vez hasta pasados **15 minutos**.

## Consejos

- **Cuenta a los agentes**: con menos de 2 en servicio no puedes empezar, y con muchos tienes hasta 60 segundos antes de la alerta. Elige bien el momento.
- **Elige una herramienta rápida**: cada segundo extra es un segundo que la policía tiene para llegar. La cizalla hidráulica, la motosierra y la motoamoladora son las más seguras, pero llaman la atención por el ruido y las chispas.
- **No te alejes**: moverte más de 1,5 metros o soltar la herramienta cancela el corte y te deja 5 minutos sin poder intentarlo, pero la alerta ya habrá salido.
- **Cuida tu vehículo**: conducir tu coche registrado con tu placa te delata en cualquier radar. Un vehículo prestado o sin registrar es más discreto.
- **Usa máscara en bancos y tiendas**: en los cajeros no sirve, así que evítalos.
- **Si eres cazarrecompensas**, participa de verdad: hiere, placa, paraliza o esposa al prófugo tú mismo. Si solo apareces junto al oficial, no podrás cobrar. Revisa antes de empezar que no tengas un personaje en la facción que paga.
- **Si eres líder de Gobierno o SADCR**, recuerda que el dinero sale de los fondos de tu facción y que solo puede haber una facción con recompensa por cada prófugo.
- **Si te arrestan**, cumplir la nueva condena no borra la condicional que tenías pendiente: se reanuda al salir.
