# Sistema de heridas

## Introducción

En San Andreas Roleplay recibir un disparo, una puñalada o un golpe no es perder una barra de vida: cada impacto queda **registrado en el cuerpo** de tu personaje con el arma empleada, la zona alcanzada, el daño causado y el momento en que ocurrió. Esas heridas se acumulan, sangran, condicionan quién puede salvarte y, pasado cierto umbral, hacen la muerte inevitable.

Cuando tu vida cae al mínimo no mueres al instante: **caes herido**, tirado en el suelo, con cinco minutos de margen para que alguien te socorra. Lo que pase en esos cinco minutos depende de la gravedad de las lesiones, de si alguien te venda a tiempo y de lo lejos que estés del hospital.

Esta guía cubre cómo se registran las heridas, qué significa quedar herido, noqueado o brutalmente herido, cómo funcionan las hemorragias y los vendajes, cómo socorrer a alguien sin ser médico, cómo funciona el tacleo, de qué depende tu vida máxima y qué reduce el daño que recibes. Las armas y su daño por calibre están en el [sistema de armas](sistema-de-armas.md); la atención hospitalaria, en el [sistema médico y hospital](sistema-medico-y-hospital.md).

### Comandos

- `/heridas [id]` — consulta el listado de daños de una persona cercana, o el tuyo.
- `/asesino` — muestra quién te dejó herido por última vez. Alias: `/qfa`.
- `/aceptarmuerte` — aceptas tu muerte en lugar de esperar el socorro.
- `/vendar [id]` — detienes la hemorragia de otra persona con un vendaje o un torniquete.
- `/vendarme` — te aplicas tú mismo un vendaje o un torniquete.
- `/taclear` (alias `/tacl`) — activas o desactivas el modo tacleo para derribar a alguien de un puñetazo.
- `/levantar [id]` — reanimas a alguien noqueado (agachado, 60 segundos).
- `/metercoche [id]` — subes a un herido a un vehículo cercano (agachado, 60 segundos).
- `/curarme` — pides atención de urgencias en el mostrador del hospital.
- `/reaparecer` — una vez muerto y pasados cinco minutos, eliges dónde volver a aparecer.

## Cómo se registran las heridas

Cada herida guarda el arma, la parte del cuerpo y la vida que te quitó. Cualquier persona a menos de **10 metros** puede leer ese historial con `/heridas`, y un cartel flotante sobre tu personaje avisa a los demás de tu estado.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/heridas-del-personaje.png" alt="Tabla de heridas de un personaje por zona del cuerpo" width="606" height="316">

Las zonas que el sistema distingue son **cabeza**, **torso**, **entrepierna**, **brazo izquierdo o derecho** y **pierna izquierda o derecha**. Un disparo a las piernas te las **rompe** y te cuesta correr y saltar; una herida de bala en la cabeza es mortal. Si vas en una **moto o bicicleta**, un disparo que te alcanza te tira al suelo y también te rompe las piernas.

`/heridas` muestra el historial en una tabla con una fila por zona del cuerpo: cuántas heridas tienes en ella y, en el detalle, cada arma con la vida total que te quitó. Al final de la tabla hay un resumen de **fracturas** (piernas), **cortes** (apuñaladas) y **quemaduras**.

<img width="394" height="429" alt="image" src="https://github.com/user-attachments/assets/dd443fac-d3b0-4ec7-9f06-adbad93c19d2" />

Las heridas registradas **no desaparecen solas**: siguen contando en tu historial y sumando hacia los umbrales de muerte hasta que un médico te trate.

### Mordidas y arañazos de mascotas

Cuando una [mascota](sistema-de-mascotas.md) ataca a una persona le quita **4 de vida** por mordida y deja una herida propia en su historial: **mordida de animal** si es un perro y **arañazo de animal** si es un gato, siempre en una pierna. Estas heridas aparecen en `/heridas`, pero no cuentan hacia los umbrales de gravedad de la tabla de abajo ni provocan hemorragia. Aun así, si te dejan sin vida caes herido como con cualquier otro daño, y como no tienes heridas de bala, de arma blanca ni de otro tipo, quedas **noqueado**.

## Caer herido

Cuando tu vida baja del mínimo, no mueres: **caes herido**. Sueltas el arma, quedas tirado en el suelo y arranca una cuenta atrás de **cinco minutos**. Si nadie te socorre en ese plazo, mueres. Puedes adelantar el desenlace con `/aceptarmuerte`.

Mientras estás herido, un aviso automático llega a los servicios de emergencia (no se genera si estás dentro de una propiedad). Si hay muchos policías de servicio, ese aviso tarda más en salir, dando margen al agresor para escapar; y si te recuperas antes de que se envíe, no llega a emitirse.

Tu vida también afecta a tu puntería: **con 30 puntos de vida o menos** tus habilidades de disparo caen al mínimo y disparas mucho peor.

### Gravemente o brutalmente herido

El servidor distingue entre caer **gravemente herido** y caer **brutalmente herido**. Estás brutalmente herido cuando tus lesiones alcanzan cualquiera de estos umbrales, y eso condiciona quién puede salvarte y dónde puedes recibir atención:

| Tipo de lesión | Umbral |
|---|---|
| Disparo en la cabeza | **1 impacto** |
| Disparos en el cuerpo (cualquier arma de fuego) | **5 impactos** |
| Apuñaladas | **5 heridas** |
| Golpes con arma contundente | **10 golpes** |
| Quemaduras | **3 quemaduras** |

Si estás herido (en el suelo) y tus lesiones alcanzan cualquiera de esos umbrales, mueres **al instante**, sin cuenta atrás. Cada herida nueva que recibes mientras ya estás en el suelo vuelve a comprobar los umbrales, así que rematar a un herido es perfectamente posible. Un personaje brutalmente herido solo puede ser salvado en el hospital: la clínica clandestina del mercado negro no lo atiende.

Si tu personaje acumula demasiados asesinatos, morir puede significar la **pérdida definitiva del personaje**. Los detalles están en el [sistema de asesinatos](sistema-de-asesinatos.md).

### Noqueados

Si te hirieron con **cinco disparos o menos** y no tienes apuñaladas, golpes ni quemaduras, no estás realmente agonizando: estás **noqueado**. Cualquier persona puede levantarte del suelo con `/levantar`, sin necesidad de ser médico, y te recuperas con poca vida.

## Hemorragias

Los **disparos** y las **armas cortantes** abren hemorragias. La primera empieza a sangrar **90 segundos** después de la herida y, a partir de ahí, cada minuto puede restarte vida hasta que alguien la detenga.

- A pie, cada episodio de sangrado te quita **10 de vida**.
- **Conduciendo**, te quita **15 de vida**, te nubla la visión y pierdes el control del volante.
- Cada sangrado deja una **mancha de sangre** en el suelo, rastreable por los forenses. Ver [sistema forense](sistema-forense.md).

Hay dos escudos automáticos: dentro de un radio de **25 metros** del All Saints Medical Center nunca te desangras, y la **habilidad de paramédico** reduce la probabilidad de que el sangrado se dispare (a mayor habilidad, menos episodios).

### Vendas y torniquetes

Para detener una hemorragia necesitas un **vendaje** o un **torniquete** en la mano derecha y usar `/vendar [id]` sobre otra persona (a menos de 3 metros) o `/vendarme` sobre ti. Solo funciona sobre alguien que sigue en pie y está sangrando, y no puedes usarlo conduciendo ni sobre una motocicleta.

| Objeto | Efecto | Duración del alivio | Fiabilidad |
|---|---|---|---|
| **Torniquete** | Detiene la hemorragia drásticamente | **10 minutos** | Siempre funciona |
| **Vendaje** (o rollo de gasa) | Vendaje compresivo que frena el sangrado | **5 minutos** | Puede fallar |

El vendaje compresivo **puede fallar**: sin habilidad de paramédico falla la mitad de las veces, y cuanto mayor sea la habilidad de quien lo aplica, menos probable es el fallo. Si falla, el objeto se gasta igual y tendrás que intentarlo con otro. Cada vendaje o torniquete se consume en su uso, y mientras uno esté activo no puedes reemplazarlo: hay que esperar a que caduque. Si recibes una herida nueva que sangra (un disparo o un corte), el vendaje o el torniquete que tenías deja de hacer efecto.

Vendar a otra persona también entrena: colocar un torniquete sube tu habilidad de paramédico con un **20 %** de probabilidad (entre 1 y 3 puntos), y un vendaje compresivo exitoso lo hace con un **10 %** de probabilidad (entre 2 y 4 puntos). Vendarte a ti mismo no sube la habilidad.

## Socorrer a un herido

No hace falta ser médico para salvar a alguien:

- **`/levantar [id]`** reanima a una persona **noqueada**. Debes estar **agachado**, a menos de **3 metros**, y mantenerte así durante **60 segundos** seguidos. Si te pones de pie, te alejas o subes a un vehículo, la acción se cancela.
- **`/metercoche [id]`** carga a un herido en un asiento de pasajero libre de un vehículo cercano (hasta 4 metros), también agachado, a menos de 2,5 metros del herido y junto a uno de los asientos, sin subirte tú al coche. Es la forma habitual de trasladar a alguien hasta el hospital o una ambulancia.
- **Vendar** (ver arriba) no cura: solo detiene la pérdida de vida por hemorragia de quien sigue en pie. No frena la cuenta atrás de quien ya cayó herido.

## Tacleo

Con `/taclear` (alias `/tacl`) activas el modo tacleo: tu siguiente golpe con los puños, con la mano derecha vacía, cuenta como un intento de derribar a esa persona. Puedes taclear a alguien que va a pie o en una moto o bicicleta; si va en un coche no se puede. Al hacer el intento, el modo se desactiva solo. Para usarlo necesitas:

- Tener al menos **30 horas de juego**. Los policías no tienen este requisito.
- No estar herido: ni heridas de bala, apuñaladas, golpes, quemaduras ni piernas rotas.
- No estar en una partida de paintball.
- Haber esperado la pausa entre tacleos: **10 minutos**, o **5 minutos** con premium. Cuenta desde cada intento, salga bien o mal. Los policías no tienen espera.

Si el tacleo sale bien, los dos caen al suelo y quedan derribados unos **5 segundos**; la víctima recibe un aviso de que la tacleaste. Si falla, solo cae quien taclea. Quien está **herido** (con heridas de bala, apuñaladas, golpes, quemaduras o las piernas rotas) no puede resistirse y siempre cae.

La probabilidad de fallar depende de la **diferencia de musculatura** con tu objetivo:

| Situación | Probabilidad de fallar |
|---|---|
| Misma musculatura | **20 %** |
| Tu objetivo tiene más musculatura | Sube **2 puntos porcentuales** por cada punto de diferencia, hasta un máximo de **70 %** |
| Tú tienes más musculatura | Baja **2 puntos porcentuales** por cada punto de diferencia; con **10 puntos o más** de ventaja no fallas |

Un tacleo es una acción de rol: la persona derribada debe responder a la escena. La musculatura se entrena como se explica en el [sistema de gimnasio](sistema-de-gimnasio.md).

Quien no tenga a nadie cerca puede llegar por su cuenta a la recepción de urgencias del hospital y usar `/curarme` para que lo atiendan. Los delincuentes con contactos tienen su propia clínica clandestina, que no admite heridos brutales; se explica en el [sistema de mercado negro](sistema-de-mercado-negro.md).

## Tratamiento definitivo

Vendar detiene el sangrado, pero las heridas siguen ahí. La atención completa la dan los paramédicos con `/curar` en la calle o el hospital en urgencias, y queda constancia del ingreso en tu **historial clínico**, que puede consultarse después. Los pacientes con heridas de bala o apuñaladas son reportados automáticamente por radio a la policía.

Precios de urgencias, requisitos de habilidad del personal médico, reanimación de muertos, reaparición y medicamentos: todo está en el [sistema médico y hospital](sistema-medico-y-hospital.md).

## Vida máxima

La vida máxima de tu personaje **no es fija**: depende de la musculatura que hayas desarrollado en el gimnasio y de tu nivel de felicidad.

La vida base sube de forma lineal con la musculatura (de 0 a 25): **100** sin entrenar y **4 puntos más por cada nivel de musculatura**.

| Musculatura | Vida base |
|---|---|
| Sin entrenar (0) | **100** |
| Nivel 5 | **120** |
| Nivel 10 | **140** |
| Nivel 15 | **160** |
| Nivel 20 | **180** |
| Musculatura máxima (25) | **200** |

Sobre esa base se aplica tu felicidad: con 50 puntos o menos la vida es la normal, y a partir de ahí crece de forma progresiva hasta un **15 % extra** con 100 de felicidad. Una felicidad baja nunca te penaliza. Los detalles están en el [sistema de gimnasio](sistema-de-gimnasio.md) y en el [sistema de asesinatos](sistema-de-asesinatos.md).

## Protección y reducción de daño

- El **chaleco antibalas** absorbe impactos al torso antes de que se conviertan en herida: los disparos que frena no generan herida registrada ni hemorragia. Sus parámetros, desgaste y las armas que lo atraviesan están en el [sistema de armas](sistema-de-armas.md).
- Los **escudos** antidisturbios y el equipo táctico pesado de las unidades especiales reducen el daño recibido a la mitad.
- Los **vehículos blindados** anulan por completo el daño a sus ocupantes, y disparar desde dentro de un vehículo a más de 7 metros falla la mitad de las veces.

## Consejos

- **Cuenta las heridas, no la vida.** Si ya estás herido en el suelo, cinco impactos en el cuerpo o cinco puñaladas te matan; un chaleco evita que cuenten.
- **Lleva siempre un torniquete.** Es barato, nunca falla y te compra diez minutos para llegar al hospital.
- **Si vas a socorrer, agáchate y quédate quieto.** Levantarte o moverte cancela el rescate y hay que empezar de nuevo.
- **No conduzcas sangrando.** Pierdes más vida, se te nubla la vista y sueltas el volante.
- **Entrena y come bien.** Musculatura y felicidad suben tu vida máxima hasta 200 más un 15 %; es la diferencia entre caer al tercer disparo o al quinto.
- **Ojo con el tacleo.** Si tu objetivo es más fuerte que tú, es muy probable que falles y acabes en el suelo.
