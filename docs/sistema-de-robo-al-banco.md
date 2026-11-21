# Sistema de robo al banco

## Introducción

El **Fleeca Bank** de Pershing Square se puede asaltar de principio a fin. No hay un comando que lo inicie: el robo empieza con el primer acto delictivo dentro del banco, ya sea forzar una puerta, encañonar a una cajera, romper una cámara o reducir al guardia. El banco está vivo: un **guardia armado** hace su ronda, las **cajeras** reaccionan cuando las encañonan, hay **cámaras de seguridad**, un **panel de alarma**, **persianas** en las ventanillas, **puertas con teclado** y una **bóveda con cerradura temporizada**.

Cada obstáculo se puede resolver de varias maneras: una lenta y silenciosa, que exige información, habilidad o sigilo, y otra rápida y ruidosa, que deja más rastro y menos botín limpio. Ninguna pieza te obliga a pasar por otra, y los roles (vigilar al guardia, desarmar la alarma, cortar, cargar los casetes, conducir) salen solos entre los participantes. Es un robo pensado para grupos de hasta **16 personas**.

El botín tiene dos partes: los **cajones** de las ventanillas y la **bóveda**, que entrega el dinero en **casetes**. Todo el botín sale de las arcas del gobierno. Para entender el estado de delincuente y las habilidades, revisa el [sistema de delincuente](sistema-de-delincuente.md); para la respuesta policial, el [sistema policial](sistema-policial.md).

### Comandos

- `/robobanco [acción]` — realiza una acción del robo según el punto del banco donde estés y la herramienta que lleves en la mano derecha. Sin acción, muestra la lista.
- `/abrir` y `/cerrar` (o la tecla de puertas) — abre y cierra las puertas del banco. Desde adentro cualquier puerta se abre así.
- `/forzarcerradura` — fuerza una puerta cerrada con ganzúas, palanca, patada o mazo, según lo que lleves en la mano.
- `/cachear` — junto al guardia, sin indicar jugador, lo registra.
- `/recoger` — levanta los casetes de la bóveda.
- `/extraerfajo [monto]` — saca dinero de un casete dentro de un interior. Necesitas al menos 30 horas de juego.

Acciones de `/robobanco`:

| Acción | Qué hace | Herramienta o requisito |
|--------|----------|-------------------------|
| `pasartarjeta` | Abre una puerta con lector | Tarjeta de seguridad en la mano |
| `usarteclado` | Escribe un código en un teclado | Estar frente al teclado de la puerta de seguridad o de la bóveda |
| `cortarpuerta` | Corta la cerradura de la puerta de seguridad | Motoamoladora o soplete |
| `taladrarboveda` | Perfora la cerradura de la bóveda | Taladro demoledor |
| `ponerbomba` | Pega una bomba a una de esas dos puertas | Bomba TNT |
| `desactivaralarma` | Escribe el código en el panel de la alarma | Estar frente al panel, en la zona de cajas |
| `romperalarma` | Destroza el panel | Palanca o mazo |
| `forzarcajon` | Fuerza un cajón cerrado | Palanca |
| `sacarfajo` | Toma un fajo de un cajón abierto | Mano derecha libre |
| `interrogar` | Exige los códigos a una cajera | Arma de fuego apuntándole de cerca a una cajera que ya coopera |
| `reducir` | Deja inconsciente al guardia | Manos vacías o arma blanca, por la espalda y con el guardia sin alertar |
| `atar` | Ata al guardia | Rollo de cuerda o esposas (se gastan), con el guardia rendido o reducido |
| `revisarcarpetas` | Busca información en el archivo | Estar frente al mueble de carpetas |
| `taparcamara` | Tapa una cámara con pintura | Spray |

Si una acción no se puede hacer, el juego te dice qué falta: dónde debes estar, el estado de la puerta, el cajón o el guardia, y qué herramientas sirven.

## Requisitos

Todo acto dentro del banco, y también usar `/robobanco`, exige cumplir estas condiciones:

| Requisito | Detalle |
|-----------|---------|
| Ser delincuente | Con el estado de [delincuente](sistema-de-delincuente.md) activo |
| Cuenta certificada | Ver [certificación](sistema-de-certificacion.md) |
| Habilidad de delincuente | **70** como mínimo para todo |
| Habilidad para cortar o taladrar | **75** |
| Habilidad para usar TNT | **90** |
| Policías de servicio | Al menos **10** conectados |
| Personaje | Vivo, sin esposas, sin taser ni placaje, en el exterior |
| Sin otro delito en curso | No puedes estar robando, atracando u otro delito a la vez |
| Fuera de eventos | No vale durante la Purga, paintball ni Hunger Games |
| Espera delictiva | Sin enfriamiento activo (ver más abajo) |
| Cupo | Máximo **16** participantes por robo |

Los policías de servicio no pueden participar. Si el banco ya fue robado y sigue cerrado, el comando te indica cuántos minutos faltan para que reabra.

## Cómo se desarrolla

### Las puertas

El banco tiene cuatro puertas interiores:

| Puerta | Qué hay detrás | Cómo abrirla |
|--------|----------------|--------------|
| Zona de cajas (madera) | Cajeras, cajones y panel de la alarma | Ganzúas, tarjeta, palanca, patadas o mazo |
| Archivo (madera) | Mueble de carpetas | Ganzúas, tarjeta, palanca, patadas o mazo |
| Puerta de seguridad (acero) | Antesala de la bóveda | Código de su teclado, tarjeta, corte o TNT |
| Bóveda (acero) | El dinero | Código de la bóveda, taladro o TNT |

- **Ganzúas**: abren la cerradura con el minijuego de ganzúas. Cada intento gasta usos de la herramienta.
- **Palanca**: revienta la cerradura en unos **4 segundos**.
- **Patadas**: hacen falta entre **3 y 6** patadas, una cada poco más de un segundo. El mazo cuenta doble.
- **Tarjeta de seguridad**: abre la zona de cajas, el archivo y la puerta de seguridad sin ruido. No sirve en la bóveda y deja de servir cuando el banco se repone.
- **Corte** (motoamoladora o soplete) y **taladro** (bóveda): se hacen con un minijuego con barra de avance y barra de calor. Mantén pulsado el sprint para cortar más rápido. La herramienta se calienta, y si se recalienta debes esperar a que se enfríe. Dejar la puerta más de unos 45 segundos sin trabajar cancela el corte. Solo una persona a la vez puede trabajar en una puerta. Sin pausas, el soplete tarda alrededor de **30 segundos**, la motoamoladora cerca de **40** y el taladro más de **un minuto**.
- **Bomba TNT**: se pega a la cerradura con `/robobanco ponerbomba` y se detona llamando a su número. Tienes **10 minutos** para detonarla antes de que el banco la detecte. Al explotar hacen falta de nuevo los 10 policías de servicio. La puerta salta por los aires y la explosión hiere a quienes estén cerca. Detalles de estas bombas en el [sistema de bombas](sistema-de-bombas.md).

Una puerta forzada queda abierta hasta que el banco se repone. Un código mal escrito tres veces bloquea el teclado un instante y activa el aviso al sistema de seguridad.

### Códigos

- El **código de seguridad** (4 dígitos) abre la puerta de seguridad y desarma el panel de la alarma.
- El **código de la bóveda** (6 dígitos) pone en marcha la cerradura temporizada de la bóveda, que tarda **90 segundos** en abrirla. Si suena la sirena mientras corre, la cerradura se bloquea y solo queda la fuerza.
- Ambos cambian cada vez que el banco se repone. Hay más de una forma de conseguirlos dentro del banco: averiguarlas es parte del golpe. Una vez que los tienes, puedes compartirlos con tu equipo por radio, teléfono o en persona.

### El personal y la seguridad

- **Las cajeras** reaccionan cuando las encañonan: pueden cooperar o tocar el botón de pánico, según desde dónde y cómo las amenaces. Herir a una activa la alarma silenciosa.
- **El guardia** patrulla las zonas públicas, con paradas en su puesto. Le alertan un rostro tapado, un arma a la vista o alguien en una zona restringida: si te descubre o lo atacas, desenfunda y llama por radio. Está armado y lleva chaleco. Se lo puede hacer rendirse, reducir, atar y registrar.
- **Las cámaras** vigilan el vestíbulo y las zonas restringidas, y reaccionan a lo mismo que el guardia. Si una cámara ve un rostro sin máscara, el aviso a la policía incluye ese nombre. Se pueden inutilizar a tiros o tapándolas con spray.
- Un golpe a una cajera, al guardia, a una cámara o al panel sin cumplir los requisitos del robo no hace daño y te avisa el motivo.

### La alarma

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/fleeca-bank-persianas.jpg" alt="Ventanillas del Fleeca Bank con las persianas abiertas y bajadas" width="1600" height="549">

| Estado | Qué ocurre |
|--------|-----------|
| Armada | Estado normal: sensores, cámaras y botones de pánico funcionan |
| En verificación | Un sensor saltó y la central espera unos segundos antes de avisar. Con el código de seguridad en el panel, el aviso no sale |
| Silenciosa | La policía ya fue avisada, sin sirena. Bajan las persianas de las ventanillas |
| Sonora | Suena la sirena, bajan las persianas, la puerta de la zona de cajas se traba y la cerradura temporizada se bloquea |

Las cámaras, la sospecha del guardia, el botón de pánico, abrir por la fuerza las puertas de acero o fallar tres veces un código ponen en marcha la alarma. Cualquier disparo sin silenciador o explosión dentro del banco enciende la alarma sonora mientras el sistema siga armado, aunque quien dispare no cumpla los requisitos del robo.

El **panel de la alarma** está en la zona de cajas. Con el código correcto, `/robobanco desactivaralarma` desarma todo el sistema y apaga la sirena si sonaba. Romperlo también avisa a la policía, pero deja el sistema muerto hasta que el banco se repone.

El ruido cuenta: las ganzúas, los teclados, las tarjetas y el spray son silenciosos; las patadas, la palanca, el mazo, el corte y el taladro se oyen en las salas cercanas, y un disparo sin silenciador se oye en todo el banco. El guardia va a revisar lo que oye.

## Botín

### Cajones

| Ventanilla | Dinero | Fajos |
|------------|--------|-------|
| Con cajera (dos ventanillas) | **$50.000** cada una | 2 o 3 |
| Sin cajera (dos ventanillas) | **$25.000** cada una | 1 |

Las ventanillas sin cajera se fuerzan con la palanca (unos 3 segundos y ruido medio). En las que tienen cajera, el cajón se abre cuando coopera. En total hay **$150.000** en los cajones. Los fajos se toman con `/robobanco sacarfajo` con la mano derecha libre.

### Bóveda

Al abrirse la puerta de la bóveda aparecen los casetes sobre el mesón central. El total depende de cómo la abriste y de si la policía ya había sido avisada:

| Apertura | Sin aviso a la policía | Con aviso a la policía |
|----------|------------------------|------------------------|
| Código y cerradura temporizada | $1.500.000 a $2.000.000 | $1.000.000 a $1.500.000 |
| Taladro | $750.000 a $1.000.000 | $650.000 a $900.000 |
| TNT | $750.000 a $1.000.000 | $650.000 a $900.000 |

El total se reparte en casetes de hasta **$100.000** cada uno. Cada casete pesa **3,5 kg** y ocupa **2 espacios**: no entra en los bolsillos, así que hacen falta manos, bolsos o más viajes mientras llega la policía. Para sacar el dinero de un casete usa `/extraerfajo [monto]` dentro de un interior.

### Casetes entintados

Parte de los casetes puede venir **entintada**. Un casete entintado no vale nada, y además tenerlo en la mano te deja una **mancha de tinta morada durante 8 horas reales**: se ve con `/mirar` y no se quita con perfume.

Cuanto más limpio es el método, menos tinta: con el código y sin aviso a la policía no sale ningún casete entintado, mientras que el taladro y sobre todo la TNT entintan una parte importante, más todavía si la policía ya fue avisada.

Un policía de servicio que haga `/recoger` sobre un casete del mesón lo **asegura como evidencia**: el casete se destruye y no vuelve a circular.

## Tiempos y enfriamientos

| Concepto | Duración |
|----------|----------|
| Duración máxima del robo | **30 minutos**, aunque haya cortes o la cerradura temporizada en marcha |
| Robo sin participantes en la zona | Se da por terminado a los **2 minutos** |
| Banco cerrado tras el robo | **1 hora**. Si no se tocó la bóveda ni se sacó ningún fajo, **10 minutos** |
| Cajones | Se reponen **2 horas** después del primer fajo tomado |
| Bóveda | Queda sellada **24 horas** desde el primer acto sobre la puerta de seguridad o la bóveda. Un código equivocado no cuenta |
| Falsa alarma | Si la policía fue avisada y nadie roba, el banco se repone a los 10 minutos |

Mientras el banco está en robo, cerrado o con las persianas bajadas no se puede depositar ni retirar en el mostrador. Los cajeros automáticos de la calle siguen funcionando.

Al reponerse, las puertas vuelven a cerrarse con llave, las persianas suben, las cámaras se reparan, el guardia vuelve a su puesto y los códigos cambian. Si alguien queda en una sala restringida, se le avisa y a los **5 minutos** lo llevan al vestíbulo. Quien aparezca dentro de una sala restringida sin ser parte del robo, por ejemplo al conectarse, también es llevado al vestíbulo.

### Enfriamiento personal

Cada participante recibe un enfriamiento delictivo desde su primer acto. Es el mismo que usan los demás delitos, así que no podrás robar el banco y cometer otro delito hasta que termine.

| Premium | Enfriamiento |
|---------|--------------|
| Sin premium o Bronce | 12 horas |
| Plata | 9 horas |
| Oro | unas 7 horas y 48 minutos |
| Platino y Ruby | 6 horas |

Si no se cumplen los requisitos al intentar un acto, no ocurre y el juego avisa el motivo.

### Habilidad de delincuente

Cada participante que se llevó botín (un fajo de un cajón o un casete) recibe al terminar el robo **2 puntos** de habilidad de delincuente, más la bonificación de probabilidad extra que corresponda. Quien solo intentó el robo sin llevarse nada no recibe puntos.

## Consejos

- Coordina roles antes de entrar: uno vigila al guardia, otro desarma la alarma, otro corta o taladra y otros cargan los casetes.
- Desarmar la alarma con el código antes de que salga el aviso a la policía deja una bóveda mucho más rentable.
- Un robo discreto con el código de la bóveda rinde más y deja menos tinta que uno a base de explosivos, pero te lleva más tiempo y más información.
- Con la alarma sonora, la cerradura temporizada se bloquea: si sonó, tendrás que forzar la bóveda.
- Los casetes pesan mucho. Lleva bolsos o varias personas, y cuenta con que la policía llegará mientras cargas.
- Evita desconectarte dentro del banco con el robo en curso: al volver aparecerás donde estabas y el banco podría haberse repuesto.
- Si eres policía, un casete que asegures como evidencia con `/recoger` deja a los ladrones sin ese dinero.
