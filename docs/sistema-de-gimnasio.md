# Sistema de gimnasio

## Introducción

El gimnasio es el sistema que define la **forma física de tu personaje**: cuánta vida aguanta, cuánto daño reparte a puñetazos, qué estilo de pelea puede usar y hasta cuántos saltos seguidos es capaz de dar. Todo eso se entrena a mano, máquina por máquina, y se pierde solo si dejas de cuidarte.

Hay gimnasios cubiertos repartidos por **Los Santos**, **Las Venturas**, **Ganton** y la **playa**, además de varias zonas de ejercicio **al aire libre** en la costa de Santa Maria, Verona Beach, la playa este de Los Santos, el paseo costero de Las Venturas y Bayside. Cada uno ofrece cuatro máquinas: **trotadora**, **bicicleta**, **pressbanca** y **mancuernas**. No se paga entrada ni membresía: las máquinas son de uso libre, una persona a la vez.

Tu progreso se apoya en cinco indicadores que van de **0 a 25**: musculatura, estado físico, energía, hambre y sed. Los dos primeros son el resultado del entrenamiento; los otros tres son necesidades que debes atender para poder entrenar. Puedes consultar musculatura, estado físico y estilo de pelea en `/stats`, y cualquiera puede ver tu contextura y tu condición física al observarte con `/describir`.

Entrenar es además una de las actividades que reparte [Burger Points](sistema-de-burger-points.md), y tu vida máxima depende tanto del músculo que tengas como de tu nivel de felicidad, explicado en [asesinatos, salud mental y felicidad](sistema-de-asesinatos.md).

### Comandos

- `/estilopelea [boxing | kungfu | kneehead | default]` — cambia tu estilo de pelea. Debes estar junto a un saco de boxeo.
- `/ensenarestilo [id] [precio] [boxing | kungfu | kneehead]` — ofrece enseñar un estilo a otro jugador. Solo para personal trainers.
- `/aceptar` y `/rechazar` — el alumno responde a la oferta de un personal trainer.
- `/stats` — muestra, entre otras cosas, tu musculatura, tu estado físico y tu estilo de pelea actual.
- `/describir [id]` — muestra la contextura y la condición física visibles de un personaje.

## Cómo se entrena

El ciclo es siempre el mismo, en cualquiera de las cuatro máquinas:

1. Acércate a la máquina hasta que aparezca el aviso en pantalla.
2. Pulsa la **tecla de entrar a vehículo** para subirte. Tu personaje se coloca solo y la cámara pasa a un plano fijo.
3. Machaca la **tecla de sprint** para llenar la **barra de potencia** que aparece arriba a la derecha, junto al contador de repeticiones o de distancia.
4. Pulsa de nuevo la tecla de entrar a vehículo para bajarte.

La barra de potencia sube **5,5 puntos por cada pulsación** y **baja 4 puntos cada cuarto de segundo**, así que hay que mantener el ritmo: si dejas de pulsar, se vacía en pocos segundos. En la trotadora vaciar la barra significa **caerte de la cinta**; en el resto solo interrumpe el esfuerzo.

El progreso no se cuenta por pulsación sino por tiempo: **cada 7 segundos de esfuerzo válido** el sistema te suma experiencia en la estadística que corresponda a la máquina.

### Bonificación al aire libre

Entrenar **al aire libre rinde el triple** que hacerlo en un gimnasio cerrado: cada tanda válida suma **3 puntos de experiencia** en vez de **1**. Las zonas de ejercicio de la playa y del paseo costero son, con diferencia, la forma más rápida de progresar.

Además, cada vez que subes un nivel de musculatura o de estado físico entrenando al aire libre recibes **+5 Burger Points**. Entrenando bajo techo no se otorgan.

### Máquinas

| Máquina | Qué entrena | Cómo se mide | Detalle |
|---------|-------------|--------------|---------|
| **Trotadora** | Estado físico | Distancia | Tres ritmos según la barra: caminata (0-20%), trote (21-65%) y sprint (66-100%). Si la barra llega a cero, te caes. |
| **Bicicleta** | Estado físico | Distancia | Tres ritmos: parado (0-10%), pedaleo lento (11-50%) y rápido (51-100%). Por debajo del 11% no acumulas nada. |
| **Pressbanca** | Musculatura | Repeticiones | Cada vez que llevas la barra al **90-100%** completas una repetición y sumas experiencia. |
| **Mancuernas** | Musculatura | Repeticiones | Igual que el pressbanca: la repetición cuenta al llegar al **90-100%** de la barra. |

### Interrupciones y esperas

- Al bajarte de cualquier máquina queda una espera de **5 segundos** antes de poder subirte a otra.
- Si pasas **60 segundos sin pulsar** dentro de una máquina te expulsan de ella y se te aplica una espera adicional de **60 segundos**.
- Una máquina ocupada por otro jugador no se puede usar hasta que la libere.

## Musculatura

Representa la fuerza de tu personaje. Sube usando el **pressbanca** y las **mancuernas**, y determina tu vida máxima, el daño extra que haces cuerpo a cuerpo y tu capacidad de taclear.

- **Máximo**: 25.
- **Vida máxima**: se define por tramos (ver tabla). Ese valor se multiplica después por tu bonificación de felicidad, que puede añadir hasta un **15%** extra con la felicidad al máximo.
- **Daño cuerpo a cuerpo**: cada punto de musculatura añade **0,2 de daño** a tus golpes, con cualquier estilo de pelea, incluido el básico.
- **Tacleos**: si intentas taclear a alguien con más musculatura que tú, tu probabilidad de fallar sube un **33%**.
- **Decaimiento**: si no entrenas, **cada 8 horas** pierdes un punto de experiencia muscular. Cuando la experiencia del nivel se agota, bajas un nivel completo de musculatura.
- Subir tu primer nivel de musculatura desbloquea un logro.

| Musculatura | Vida máxima base | Contextura visible en `/describir` |
|-------------|------------------|-------------------------------------|
| 0 – 5 | 100 | Normal |
| 6 – 10 | 125 | En forma |
| 11 – 24 | 150 | Musculoso |
| 25 | **175** | ¡Parece una mole! |

### Coste de cada nivel

Cada nivel exige más experiencia que el anterior, y el coste crece **de 6 en 6**: el primer nivel pide 6 puntos, el segundo 12, el tercero 18, y así hasta los **156 puntos** del último. La misma curva se aplica al estado físico.

Puesto en horas: al aire libre, con 3 puntos por tanda cada 7 segundos, los primeros niveles caen en cuestión de minutos, mientras que los últimos exigen sesiones largas y sostenidas.

### Esteroides

Los **esteroides** aceleran el crecimiento muscular mientras siguen en tu organismo: según la cantidad acumulada en sangre, cada tanda de entrenamiento suma **2, 4 u 8 puntos de experiencia extra** por encima de lo habitual. Con la acumulación al máximo, una tanda al aire libre pasa de 3 a 11 puntos.

El precio es visible: quien consume esteroides **desarrolla acné**, algo que cualquiera puede notar al examinarte. Los detalles del consumo están en el [sistema de drogas](sistema-de-drogas.md).

## Estado físico

Representa tu resistencia y tu peso corporal. Sube con la **trotadora** y la **bicicleta**, y baja al comer y beber mal.

- **Máximo**: 25.
- **Saltos seguidos**: la condición física limita cuántos saltos encadenados puede dar tu personaje, desde **2 saltos** en el peor estado hasta **10** estando en forma óptima.
- **Alimentación**: cada vez que comes o bebes hay un **50% de probabilidad** de que el alimento afecte tu estado físico, en función de lo insalubre que sea. El agua y el café no perjudican; las bebidas azucaradas, el alcohol fuerte y las bebidas energéticas sí.
- **Protección tras entrenar**: al subir un nivel de estado físico queda una ventana de **60 minutos** durante la cual comer mal no puede hacerte retroceder. Fuera de esa ventana, la comida insalubre puede bajártelo cada **30 minutos**.

| Estado físico | Condición visible en `/describir` |
|---------------|-----------------------------------|
| Excelente | Delgado |
| Bueno | Normal |
| Regular | Sobrepeso |
| Malo | Obesidad |

## Energía

Es tu combustible para entrenar. Se gasta mientras haces ejercicio y se recupera con el tiempo.

- **Máximo**: 25.
- **Recuperación**: **+1 cada 15 minutos**, estés donde estés.
- **Gasto**: cada tanda válida de entrenamiento consume **0 o 1 punto**, al azar.
- Si baja a **1 o menos** no puedes seguir entrenando: toca descansar.
- Las **bebidas energéticas**, las latas de Sprunk y las latas de ECola tienen un **33% de probabilidad** de darte **+1 de energía** al beberlas.

**Cuidado con la cafeína**: cada bebida con cafeína acumula tensión en tu corazón. A partir de la tercera consumida existe una probabilidad de sufrir una **taquicardia**, que te deja aturdido y te quita **33 de vida**, hasta el punto de necesitar una ambulancia. Cuanto peor sea tu estado físico, mayor es el riesgo.

## Hambre y sed

Son necesidades que suben solas y que debes cubrir comiendo y bebiendo. Se gestionan desde tu inventario, sacando el alimento a la mano y usándolo.

| | Hambre | Sed |
|---|--------|-----|
| **Máximo** | 25 | 25 |
| **Aumento automático** | +1 a +3 cada 30 minutos | +1 a +3 cada 30 minutos |
| **Te impide subirte a una máquina** | 22 o más | 18 o más |
| **Te impide ganar experiencia** | Más de 20 | Más de 15 |

La diferencia entre las dos últimas filas importa: puedes empezar a entrenar con hambre 21 o sed 17, pero el esfuerzo no te contará nada hasta que comas o bebas. Conviene llegar al gimnasio con las dos necesidades bajas.

Cada alimento o bebida reduce la necesidad correspondiente según su valor nutritivo, más **1 a 3 puntos** adicionales al azar. Los productos más potentes bajan bastante de una sola vez: la bebida energética es la que más sed quita, aunque también es la más insalubre. Comer o beber también te devuelve **3 puntos de vida** si no estás herido.

Comer y beber fuera de interiores otorga **+5 Burger Points** cada uno, como máximo una vez cada 30 minutos.

## Estilos de pelea

Los estilos de pelea son mejoras permanentes del combate cuerpo a cuerpo. Se aprenden **junto a un saco de boxeo** con `/estilopelea`, y solo si tienes la musculatura y el estado físico exigidos.

| Estilo | Musculatura mínima | Estado físico mínimo | Daño extra al golpear | Daño que te descuentan al recibir |
|--------|--------------------|----------------------|-----------------------|------------------------------------|
| **Boxeo** | 15 | 15 | +1,25 | −1,0 |
| **Kung Fu** | 12 | 18 | +2,0 | −0,5 |
| **Knee-Head** | 10 | 10 | +1,0 | −1,25 |
| **Por defecto** | — | — | — | — |

A ese cuadro se suma siempre el **+0,2 de daño por punto de musculatura**, que se aplica tengas el estilo que tengas. En la práctica: el Kung Fu es el más agresivo y el peor defendido, el Knee-Head el más resistente y el boxeo el equilibrado. Ningún golpe baja de **0,5 de daño**, por mucha defensa que acumules.

Puedes volver al estilo por defecto en cualquier momento con `/estilopelea default`.

### Protección y pérdida del estilo

Al aprender o cambiar de estilo queda **protegido durante 15 paychecks**. Mientras dure esa protección recibirás cada paycheck un aviso con los que te quedan.

Cuando la protección se agota, en cada paycheck se comprueba si sigues cumpliendo los requisitos del estilo. Si has dejado caer tu musculatura o tu estado físico por debajo del mínimo, **pierdes el estilo y vuelves al básico**, con un mensaje indicando qué te faltaba. Volver a escribir `/estilopelea` con tu estilo actual junto a un saco de boxeo **renueva la protección** otros 15 paychecks, siempre que cumplas los requisitos.

### Personal trainer

Los personajes certificados como **personal trainer** pueden enseñar un estilo a otro jugador sin que este tenga que cumplir el entrenamiento por su cuenta:

- El entrenador usa `/ensenarestilo` con el alumno **a menos de 5 metros**.
- El precio lo fija el entrenador y debe estar entre **$1,000 y $10,000**.
- El alumno acepta con `/aceptar` o descarta con `/rechazar`. El dinero pasa directamente del alumno al entrenador.
- El estilo aprendido así queda protegido **8 paychecks**, la mitad que al aprenderlo por tu cuenta.

Consulta el [sistema de certificación](sistema-de-certificacion.md) para saber cómo se obtiene la certificación de personal trainer.

## Consejos

- **Come y bebe antes de salir de casa.** Llegar al gimnasio con hambre 21 solo sirve para perder el tiempo sobre la máquina.
- **Prioriza el aire libre.** Triplicar el progreso y cobrar Burger Points por cada nivel compensa de sobra el viaje hasta la playa.
- **No abuses de las energéticas.** Suben la energía, pero hunden tu estado físico y arriesgan una taquicardia que puede mandarte al hospital.
- **Entrena de forma sostenida.** Perder un punto cada 8 horas de inactividad es lento, pero recuperar los niveles altos cuesta cada vez más repeticiones.
- **Renueva la protección del estilo antes de que expire.** Un paso por el saco de boxeo evita volver al estilo básico en medio de un conflicto.
