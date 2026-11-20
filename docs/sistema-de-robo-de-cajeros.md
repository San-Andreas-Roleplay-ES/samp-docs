# Sistema de robo de cajeros

## Introducción

Reventar un **cajero automático** es uno de los golpes más ruidosos que puede dar un delincuente. No se trata de engañar al aparato como en el [skimming](sistema-de-skimming.md): aquí se rompe la máquina a la fuerza para sacar los **casetes de billetes** que lleva dentro. El método depende de lo que tengas en la mano: golpes con un bate, una palanca o un mazo, corte con una motoamoladora o un soplete, embestida con una camioneta o un camión, o una **bomba TNT**.

Cada golpe deja el cajero **fuera de servicio** hasta que lo repare un **técnico de seguridad**, y avisa a la policía. Los casetes suelen traer entre $75.000 y $175.000, pero los billetes pueden salir **sanos** o **manchados de tinta**: un casete entintado no vale nada, y la tinta además te mancha a ti. Cuanto más limpio es el método, más billetes se salvan.

Es un delito de alto riesgo y poca frecuencia. Exige habilidad de delincuente alta, un mínimo de policías de servicio y deja una espera larga antes de poder dar otro golpe. Para el resto de actividades criminales consulta el [sistema de delincuente](sistema-de-delincuente.md).

### Comandos

- `/robarcajero` — empieza a robar el cajero que tienes delante, o embiste uno si conduces el vehículo adecuado. Con el robo en curso, vuelve a escribirlo para dejarlo. Si llevas una bomba TNT en la mano derecha, la coloca en el cajero.
- `/llamar [número]` — marca el número de una bomba para detonarla.
- `/extraerfajo [monto]` — saca dinero de un casete limpio que lleves en la mano derecha. Hasta $100.000 por vez.
- `/recoger` — recoge del suelo los casetes que caen al romper el cajero.
- `/mirar [id]` — muestra, entre otras cosas, si alguien tiene la mancha de tinta.
- `/revisarcajero` — inspecciona un cajero. Si está roto, indica el daño y lo que cuesta repararlo.
- `/repararcajero` — repara un cajero fuera de servicio (técnicos de seguridad en servicio).
- `/marcarcajero` — lista los cajeros que necesitan técnico y marca el elegido en el GPS (técnicos de seguridad en servicio).

## Requisitos

| Requisito | Detalle |
|---|---|
| Delincuente | Haber usado `/delincuente`. Consulta el [sistema de delincuente](sistema-de-delincuente.md) |
| Cuenta | **Certificada**. Consulta la [certificación](sistema-de-certificacion.md) |
| Habilidad de delincuente | **70** como mínimo para cualquier método. **75** para el corte y **90** para la bomba TNT |
| Policías | Al menos **4** de servicio conectados |
| Estado | Vivo, sin esposas, sin taser y sin placaje, a pie o conduciendo |
| Eventos | No se puede robar durante paintball, Hunger Games ni la Purga |
| Otros delitos | No estar cometiendo otro delito en ese momento |
| Espera | Haber cumplido las esperas descritas más abajo |
| Cajeros rotos | No puede haber **5 cajeros** rotos o en robo a la vez en la ciudad: si se llega a ese tope, los bancos refuerzan la vigilancia y nadie puede robar otro hasta que los técnicos reparen alguno |

Un cajero ya destruido, o con otra persona robándolo, o con un técnico reparándolo, o con una bomba puesta, no se puede robar.

## Métodos

El método sale de lo que lleves en la **mano derecha** y de si vas a pie o en vehículo. Debes estar a menos de **1,5 metros** del cajero para empezar, y mientras dure el robo no puedes alejarte más de **3 metros**, ni soltar la herramienta, ni quedarte **45 segundos** sin hacer nada: en cualquiera de esos casos dejas el cajero a medio romper.

| Método | Herramienta | Habilidad | Billetes sanos por carga* |
|---|---|---|---|
| Golpes | Bate, palanca o mazo | 70 | **20 %** |
| Corte | Motoamoladora o soplete | 75 | **85 %** (si no se recalienta) |
| Embestida | Camioneta, todoterreno o camión | 70 | **40 %** |
| Bomba TNT | Bomba TNT | 90 | **85 %** |

\* Cada método suelta una cantidad distinta de cargas de billetes, explicadas en la sección de botín.

### Golpes

Con un bate, una palanca o un mazo en la mano derecha, pulsa la **tecla de sprint** frente al cajero para dar cada golpe. Hay una pausa mínima de **0,9 segundos** entre golpes, y el cajero se rompe con cada uno según la herramienta:

| Herramienta | Golpes para destruir el cajero |
|---|---|
| Bate | 25 |
| Palanca | 20 |
| Mazo | 15 |

La alarma salta **al primer golpe**. Es el método más rápido y el que menos billetes salva: casi todo lo que sale queda entintado.

### Corte

Con una motoamoladora o un soplete, el robo es un minijuego con dos barras: **corte** y **calor**. Mantén la **tecla de sprint** para cortar a fondo; si la sueltas, la hoja se enfría y el corte avanza a un cuarto de velocidad.

- Cortar a fondo hasta destruir el cajero lleva unos **40 segundos** con la motoamoladora y unos **31** con el soplete, sin contar las pausas para enfriar.
- La hoja se calienta mientras cortas a fondo. Al pasar del **75 %** de calor aparece un aviso. Cuanta más habilidad de delincuente tengas, más lento se calienta.
- Si el calor llega al **100 %**, salta el sensor térmico: la tinta mancha **todos** los casetes de ese cajero y debes esperar a que el calor baje al **40 %** para seguir cortando.
- La alarma es **silenciosa** y avisa a la policía recién a los **30 segundos** de empezar, o antes si abandonas el robo habiendo hecho daño.

Un corte limpio, sin recalentar, es la forma más segura de llevarse los billetes sanos.

### Embestida

Conduciendo una camioneta, un todoterreno, una furgoneta o un camión, escribe `/robarcajero` con el vehículo cerca de un cajero **de la calle** (a menos de 25 metros). Luego choca el cajero a **30 km/h o más**, de frente o en reversa.

- No sirven los vehículos públicos, de negocio ni blindados, ni uno con la vida por debajo de **600**.
- Cada choque daña el cajero según la velocidad: más velocidad, más daño. Los camiones pesados pegan un **50 % más** que las camionetas. A 30 km/h un impacto quita unos 5 puntos de daño (8 con un camión pesado) y a 60 km/h unos 35 (hasta 50 con un camión pesado).
- Tu vehículo también sufre: pierde **30 de vida más 1 por cada km/h** en cada choque, pero nunca baja de **400**. Al llegar a ese punto no puedes seguir embistiendo.
- Entre choque y choque pasan al menos **1,5 segundos**.
- Debes seguir conduciendo ese mismo vehículo y no alejarte más de **50 metros** del cajero.

La alarma salta en el **primer choque** y la policía recibe el **modelo y la matrícula** del vehículo. La embestida suelta **2 cargas** de billetes.

### Bomba TNT

Es el método con más botín. Con la bomba en la mano derecha y a menos de 1,5 metros del cajero, usa `/robarcajero`: la bomba queda en el suelo, a los pies del cajero. Después aléjate y **llama al número de la bomba** con `/llamar`. Consulta el [sistema de bombas](sistema-de-bombas.md) para saber cómo funcionan el número y el detonador.

- Al llamar debe haber al menos **4 policías de servicio**; si no, el detonador no responde y la bomba sigue puesta.
- La bomba **vence a los 10 minutos**. Pasado ese plazo, si la detonas igual explota, pero ya no abre el cajero.
- La bomba debe quedar a menos de 3 metros del cajero. Una bomba desactivada no sirve.
- Los cajeros con una bomba puesta cuentan para el tope de 5 cajeros rotos, y un técnico de seguridad no puede repararlos hasta que se resuelva.

La alarma sale **al explotar**, con la dirección del cajero. La explosión suelta **4 cargas** de billetes. Al colocar la bomba ya cuentan tu espera y la habilidad ganada, aunque no llegues a detonarla.

## Alarma y policía

Cada método avisa a la policía por radio en un momento distinto: al primer golpe (golpes), a los 30 segundos (corte), al primer choque (embestida) o al explotar (bomba). El aviso incluye la **dirección del cajero** y, según el caso, la descripción del sospechoso o el modelo y la matrícula del vehículo.

Además, las [cámaras de seguridad](sistema-de-camaras-de-seguridad.md) que cubran el cajero pueden registrar el golpe. Para saber cómo responde la policía, consulta el [sistema policial](sistema-policial.md).

## El botín

Al destruirse el cajero, los casetes caen al suelo frente a él (a los costados del vehículo en la embestida) y los recoges con `/recoger`. Cada método suelta una cantidad distinta de **cargas** de billetes, y cada carga se reparte en casetes de **hasta $100.000**:

| Método | Cargas |
|---|---|
| Golpes | 1 |
| Corte | 1 |
| Embestida | 2 |
| Bomba TNT | 4 |

Cada carga sale **sana** o **entintada** al azar, con la probabilidad de la tabla de métodos. El modelo del cajero también cuenta: los cajeros **antiguos** guardan menos dinero, pero sus billetes salen sanos con más frecuencia (10 puntos más), mientras que los **más nuevos** guardan más dinero y se entintan más (10 puntos menos).

| Modelo del cajero | Dinero por carga (±25 %) |
|---|---|
| Antiguo | $100.000 |
| Intermedio | $120.000 |
| Más nuevo | $140.000 |

En un cajero de una **zona rural o apartada** el dinero se reduce a la **mitad**, salvo con bomba TNT. Todo el dinero sale de las arcas del Gobierno.

Si el cajero tenía un **skimmer** instalado, se destruye junto con todo lo que había acumulado.

### Sacar el dinero

Un casete **sano** muestra su valor y se vacía con `/extraerfajo [monto]`, con el casete en la mano derecha:

- Necesitas al menos **30 horas** jugadas.
- Solo funciona **dentro de un interior**: en la calle, el comando se niega.
- Puedes sacar entre **$1** y **$100.000** por vez. Cuando el casete queda vacío, desaparece.

Un casete **entintado** no se puede vaciar: no sirve para nada.

## La mancha de tinta

La tinta morada no se queda solo en los billetes:

- **Sostener un casete entintado**, en cualquier mano, te mancha.
- Si al reventar el cajero cae algún casete entintado, quienes estén **a pie y a menos de 3 metros** quedan manchados. La embestida no mancha al romper el cajero.
- Los policías de servicio no se manchan.

La mancha dura **8 horas reales** contadas desde el último contacto con la tinta. No se quita con perfume ni con nada más. Se nota de dos formas: se ve al mirar al personaje con `/mirar`, y cada minuto el personaje delata con una acción que está manchado de tinta morada, antes que cualquier otro olor.

## Esperas y habilidad

| Situación | Espera |
|---|---|
| Al empezar un robo | **15 minutos** antes de poder robar de nuevo, aunque lo dejes |
| Al destruir el cajero (o al colocar la bomba) | **72 horas** antes de dar otro golpe, o **48 horas** con habilidad de delincuente de **90** o más |
| Al abandonar un robo con daño hecho | Una parte de las 72 o 48 horas, proporcional al daño que causaste |

- La espera de 72 o 48 horas **se comparte con los atracos a negocios** (`/atracar`): un golpe a un cajero te impide atracar y al revés.
- Los usuarios premium tienen esa espera reducida: un **25 %** en Plata, un **35 %** en Oro y un **50 %** en Platino y Ruby.
- Al destruir el cajero o al colocar la bomba ganas **+2 puntos** de habilidad de delincuente.

## Cajeros dañados y reparación

El cajero se va rompiendo a la vista:

| Daño | Aspecto |
|---|---|
| Menos de 50 % | Entero, pero **fuera de servicio** |
| 50 % o más | Con la carcasa **dañada** |
| 100 % | **Destruido** |

Un cajero con cualquier daño **deja de funcionar** para todos los jugadores y no se repara solo: lo arregla un **técnico de seguridad**, empleado de una empresa de seguridad. Abandonar un cajero a medio romper lo deja fuera de servicio igualmente.

### Reparación por técnicos de seguridad

El técnico de seguridad debe estar **en servicio** (`/trabajar`) y seguir estos pasos:

1. Usa `/marcarcajero` para ver los cajeros pendientes, ordenados por cercanía. Cada fila muestra la ubicación, el estado (forzado, dañado, destruido o con skimmer) y el pago. Al elegir uno, queda marcado en el GPS.
2. Una vez en el cajero, usa `/revisarcajero` (tarda **5 segundos** y exige **5** de habilidad de electrónica). Muestra el diagnóstico, el tiempo de reparación y el pago.
3. Escribe `/repararcajero` y quédate junto al cajero hasta que termine. Con el mismo comando puedes dejar el trabajo.

| Estado | Tiempo de reparación |
|---|---|
| Forzado (menos de 50 % de daño) | **1 minuto** |
| Dañado | **2 minutos** |
| Destruido | **3 minutos** |

La ciudad paga **$250 por cada 1 % de daño** del cajero (hasta $25.000), del banco del Gobierno, y se suma **+3 Burger Points**. Con un 50 % de probabilidad ganas **+1 punto** de habilidad de electrónica. La reparación se cancela si te alejas, dejas de trabajar, quedas herido o esposado, o pasas un rato sin jugar. Si el cajero tiene un robo o una bomba puesta, no se puede reparar.

No se paga la reparación en estos casos:

- Tu **cuenta participó** en el daño del cajero con cualquiera de sus personajes.
- El cajero tuvo demasiados responsables en el daño.
- El Gobierno no tiene fondos: se paga lo que haya.

El trabajo de los skimmers de los técnicos se explica en el [sistema de skimming](sistema-de-skimming.md).

## Cifras de referencia

| Concepto | Valor |
|---|---|
| Habilidad de delincuente | **70** (corte **75**, bomba **90**) |
| Policías de servicio | **4** |
| Distancia para empezar | **1,5 metros** |
| Distancia máxima durante el robo | **3 metros** (vehículo: **50 metros**) |
| Inactividad máxima | **45 segundos** |
| Golpes para destruir (bate, palanca, mazo) | **25**, **20** y **15** |
| Alarma del corte | **30 segundos** |
| Calor para entintar el corte | **100 %** |
| Velocidad mínima de la embestida | **30 km/h** |
| Vida mínima del vehículo para embestir | **600** |
| Vencimiento de la bomba | **10 minutos** |
| Casete máximo | **$100.000** |
| Tinta morada | **8 horas** |
| Espera tras empezar | **15 minutos** |
| Espera tras el golpe | **72 horas** (**48** con habilidad 90) |
| Tope de cajeros rotos | **5** |
| Pago al técnico | **$250 por 1 % de daño** (máximo $25.000) |

## Consejos

- **Elige bien el método.** Los golpes son rápidos pero casi todo sale entintado. Si buscas billetes sanos, el corte limpio y la bomba son lo mejor, a cambio de más habilidad.
- **No te recalientes.** Corta en tandas cortas y suelta la tecla antes de llegar al 75 % de calor: si salta el sensor, pierdes todo el botín del cajero.
- **Revisa quién está cerca.** La mancha de tinta alcanza a cualquiera a pie a menos de 3 metros cuando revienta el cajero, tú incluido.
- **Planifica la huida.** La alarma avisa a la policía con la dirección del cajero y, en la embestida, con el modelo y la matrícula de tu vehículo.
- **Cuenta con la espera.** Después de un golpe pasan 72 horas antes de otro cajero o atraco, así que elige bien cuándo darlo.
- **Si eres técnico de seguridad**, repara primero los cajeros con más daño: pagan más. Y si tu cuenta participó en el daño de un cajero, ese cajero no te paga.
- **Sácale provecho al dinero con cuidado.** Solo puedes contar billetes dentro de un interior, no en plena calle.

Consulta también el [sistema de skimming](sistema-de-skimming.md), el [sistema de bombas](sistema-de-bombas.md) y el [sistema de robo al banco](sistema-de-robo-al-banco.md) para los otros golpes del mismo estilo.
