# Sistema de asesinatos

> ⚠️ **Advertencia de contenido sensible.** Este documento describe mecánicas de **roleplay ficticias** del servidor relacionadas con la violencia entre personajes y el desgaste psicológico que provoca. Son dinámicas de juego enmarcadas en un entorno de ficción y no representan ni promueven ninguna conducta de la vida real.

## Introducción

Matar en San Andreas Roleplay tiene consecuencias que van más allá del momento del disparo. Cada muerte que provocas queda registrada en el historial de tu personaje y alimenta un **contador de asesinatos**. Mientras ese contador se mantenga por debajo de tu límite personal, tu personaje sigue siendo un criminal como cualquier otro; cuando lo supera, deja de tener segundas oportunidades: la siguiente vez que muera, morirá de forma **definitiva y permanente**.

Ese desgaste se refleja en pantalla como **salud mental**: una barra que aparece brevemente cuando matas a alguien, cuando revisas un cadáver o cuando tu situación cambia. Cuanto más llena está, más lejos estás del límite; cuanto más vacía, más cerca del punto de no retorno.

La **felicidad** es la otra cara de la moneda. Es un valor de 0 a 100 que sube cuando tu personaje lleva una vida sana y social: salir a la calle, comer, beber, fumar, decorar tu casa. La felicidad **solo suma**: tenerla baja no te penaliza en nada, pero tenerla alta te da **más vida máxima** y **margen extra en el límite de asesinatos**.

Este documento explica cómo se cuentan los asesinatos, cómo se recuperan, y cómo la felicidad y la salud mental se relacionan entre sí.

### Comandos

- `/habilidades` — abre el listado de habilidades de tu personaje, donde aparece tu nivel de **Felicidad** de 0 a 100.
- `/stats` — muestra, entre otros datos, tu **vida actual y máxima** y tus puntos de rol.
- `/cadaver examinar` — examina las heridas de un cadáver cercano (te muestra tu estado mental).
- `/cadaver inventario` — revisa las pertenencias de un cadáver cercano (te muestra tu estado mental).

## El contador de asesinatos

### Qué cuenta y qué no

Tu contador suma **una muerte por cada personaje que matas con un arma**, sea de fuego, blanca o contundente. La muerte queda asociada a ti, a la víctima y al arma empleada.

| Situación | ¿Suma al contador? |
|---|---|
| Matar a otro jugador con un arma en el mundo normal | **Sí** |
| Muertes dentro de una partida de **paintball** | No |
| Muertes durante la **Purga** | No |
| Muertes durante los **Hunger Games** | No |
| Muertes en las que no se puede identificar un arma en tus manos | No |

Además, hay personajes que **no acumulan índice de peligrosidad** por su rol institucional: los miembros de la **policía**, de las agencias de **investigación y justicia**, de las fuerzas **militares** y del **cuerpo de seguridad privada**. Para ellos el contador se mantiene siempre en cero mientras pertenezcan a esas facciones, porque se entiende que el uso de la fuerza forma parte de su trabajo. Puedes ver el detalle de cada organización en [Facciones legales](facciones-legales.md).

### Ventana de 7 días

El contador **no es acumulativo para siempre**: solo se tienen en cuenta los asesinatos cometidos en los **últimos 7 días**. Una muerte que provocaste hace más de una semana deja de pesar automáticamente.

Esta es la vía principal de recuperación: **dejar de matar**. Si estás rozando el límite, basta con pasar unos días sin cobrarte ninguna vida para que las muertes más antiguas vayan cayendo fuera de la ventana y tu contador baje solo.

### El límite personal

Cada personaje tiene su propio límite. Se parte de un **límite base de 10 asesinatos** y se ajusta con estos factores:

| Factor | Efecto sobre el límite |
|---|---|
| **Límite base** | 10 asesinatos |
| **Puntos de rol positivos** | +1 por cada punto |
| **Puntos de rol negativos** | −1 por cada punto |
| **Felicidad por encima de 50** | hasta **+4** (ver más abajo) |

El límite nunca puede quedar por debajo de **1**, por muchos puntos negativos que se acumulen. Interpretar bien y ganarte puntos de rol positivos, por tanto, te da margen real para llevar un personaje violento.

### Qué pasa al superarlo

Superar el límite **no te mata de inmediato**. Lo que cambia es lo que ocurre la próxima vez que tu personaje muera: en lugar de poder reaparecer, sufrirá un **CK (Character Kill)**, es decir, una **muerte permanente**. Pierdes el personaje con todas sus propiedades, estadísticas e inventarios, sin forma de recuperarlos, y su **cadáver queda en el lugar** con todo lo que llevaba encima, como se explica en [Sistema de cadáveres](sistema-de-cadaveres.md).

El servidor te avisa de esta situación de tres formas:

- **Al conectarte**, si ya estás por encima del límite, se te muestra la barra de salud mental junto con el aviso.
- **Cuando matas a alguien**, la barra aparece con un **60% de probabilidad**, mostrando cuánto margen te queda.
- **Cuando tu felicidad baja** y, al perder su bonus, cruzas el límite sin haber matado a nadie más, recibes una alerta en rojo.

Para volver a estar a salvo tienes que **bajar del límite otra vez**: dejando que pasen los 7 días de las muertes antiguas, ganando puntos de rol positivos o subiendo tu felicidad por encima de 50 para recuperar el margen extra.

> También existe una segunda causa de muerte permanente que no tiene nada que ver con la violencia: acumular una **deuda bancaria de −$100,000 o peor**. Quien esté en esa situación recibe el mismo aviso y sufre CK al morir. Regularizar el saldo con el banco elimina el riesgo.

## La salud mental

### Qué es

La salud mental es la forma en que el juego te muestra **cuánto margen te queda antes de convertirte en un personaje sin segundas oportunidades**. No es una estadística aparte que puedas subir asignando puntos de experiencia: es la representación visual de tu contador de asesinatos frente a tu límite personal.

### Cómo se ve

Se muestra únicamente como una **barra de progreso temporal** en pantalla, con el rótulo **"Estado mental"** y un signo **+** o **−** según si tu situación mejora o empeora. La barra permanece visible unos **10 segundos** y luego desaparece sola.

La barra se llena en proporción inversa a tus asesinatos: **100% significa que no tienes ninguna muerte reciente** y **0% que ya alcanzaste o superaste tu límite**. Cada asesinato hunde la barra; cada día que pasa sin matar —y cada punto de felicidad por encima de 50— la recupera.

Si tu personaje **no tiene ningún asesinato reciente, la barra nunca aparece**: la salud mental no afecta a quien no ha matado. Tampoco se muestra durante la **Purga** ni durante los **Hunger Games**, donde las muertes no cuentan.

### Qué la deteriora

| Situación | Efecto |
|---|---|
| Cometer un asesinato | Sube el contador; la barra baja y se muestra con 60% de probabilidad |
| Perder el bonus de felicidad (bajar de 50) | Baja tu límite: la barra baja aunque no hayas matado |
| Acumular puntos de rol negativos | Baja tu límite de forma duradera |
| **Examinar un cadáver con heridas** (`/cadaver examinar`) | Se te muestra el estado mental: ver un cuerpo destrozado impacta a tu personaje |
| **Revisar las pertenencias de un cadáver** (`/cadaver inventario`) | Se te muestra el estado mental |

Los dos últimos casos son de **exposición**: no suman asesinatos a tu contador, pero el juego te recuerda tu estado mental en ese momento, porque manipular cuerpos forma parte del desgaste psicológico del personaje. Si vas a trabajar habitualmente con cadáveres —forense, médico o criminal— conviene reflejarlo en tu interpretación.

### Cómo se recupera

- **Dejar pasar el tiempo**: las muertes salen de la ventana de 7 días por sí solas.
- **Subir la felicidad por encima de 50**: amplía el límite hasta en 4 asesinatos y, por tanto, rellena la barra.
- **Ganar puntos de rol positivos** por buena interpretación: cada uno suma 1 al límite.

No existe ningún medicamento, tratamiento hospitalario ni terapia que reinicie el contador. La atención médica descrita en [Sistema médico y hospital](sistema-medico-y-hospital.md) cura heridas físicas y enfermedades, pero no borra tus asesinatos.

## La felicidad

### Qué es

La felicidad es un valor de **0 a 100** que refleja el bienestar de tu personaje. **Todos los personajes empiezan en 50.** Puedes consultarla en cualquier momento con `/habilidades`, donde aparece en la lista con su valor exacto.

Su característica principal es que **la felicidad siempre es positiva**: tenerla en 0 no te penaliza en absolutamente nada. Con **50 o menos** tu personaje funciona con los valores normales del servidor; a partir de 51 empiezan a acumularse bonus que crecen hasta el máximo de 100.

### Cómo sube y cómo baja

Tu felicidad se revisa **cada 30 minutos**. En cada revisión sube **1 punto** o baja **1 punto**, según lo que hayas hecho en ese lapso:

| Condición cumplida | Resultado |
|---|---|
| Pasar al menos **15 minutos al aire libre** en la última media hora | **+1** |
| Haber **comido** algo hace menos de 30 minutos | **+1** |
| Haber **bebido** algo hace menos de 30 minutos | **+1** |
| Haber tomado **alcohol** hace menos de 30 minutos | **+1** |
| Haber **fumado** hace menos de 30 minutos | **+1** |
| Haber **consumido drogas** hace menos de 1 hora | **+1** |
| Haber **editado o decorado muebles** de una propiedad hace menos de 30 minutos | Se mantiene igual (ni sube ni baja) |
| Ninguna de las anteriores | **−1** |

Basta con **una** de las condiciones positivas para sumar el punto: no se acumulan varios puntos por hacerlo todo a la vez. El consumo de comida, bebida, tabaco, alcohol y drogas solo cuenta si se hizo **al aire libre**, en el mundo exterior; encerrarte en una casa a comer no alimenta la felicidad.

La **gracia por decoración** es la excepción amable: si estabas ocupado amueblando tu casa —una actividad que obliga a estar en interiores— la felicidad no baja durante los 30 minutos siguientes, aunque tampoco sube.

Los minutos al aire libre se cuentan mientras estés **vivo, fuera de cualquier propiedad y en el mundo exterior**. Estar herido en el suelo o encerrado en un interior no suma.

### Beneficios concretos

Todos los bonus se calculan de forma proporcional entre 50 y 100: cuanto más cerca de 100, mayor el bonus.

#### Vida máxima

Tu felicidad multiplica tu vida máxima hasta un **+15% al llegar a 100**. Se aplica sobre la vida que ya te da tu musculatura del [Sistema de gimnasio](sistema-de-gimnasio.md).

| Felicidad | Bonus de vida máxima |
|---|---|
| 0 – 50 | Sin cambios (vida normal) |
| 60 | +3% |
| 70 | +6% |
| 80 | +9% |
| 90 | +12% |
| 100 | **+15%** |

Por ejemplo, un personaje con 100 de vida máxima y 100 de felicidad pasa a tener **115**; uno musculado con 175 de vida máxima llega a **201**.

Cuidado con el efecto inverso: si tu felicidad **baja** y con ella tu vida máxima, y en ese momento tu vida actual estaba por encima del nuevo tope, el juego te la **recorta** al nuevo máximo. No pierdes vida "real", simplemente dejas de conservar el excedente que te daba el bonus.

#### Límite de asesinatos

La felicidad suma hasta **4 asesinatos extra** a tu límite personal, avanzando **1 asesinato por cada 12,5 puntos** de felicidad por encima de 50.

| Felicidad | Asesinatos extra |
|---|---|
| 0 – 50 | 0 |
| 63 | +1 |
| 75 | +2 |
| 88 | +3 |
| 100 | **+4** |

Combinado con el límite base de 10, un personaje sin puntos de rol negativos y con la felicidad al máximo puede cometer hasta **14 asesinatos** en 7 días antes de quedar en riesgo de muerte permanente.

Este bonus es el motivo del aviso en rojo que puedes recibir sin haber matado a nadie: si estabas justo en el borde gracias a la felicidad y esta baja lo suficiente como para perder un punto de margen, cruzas el límite de golpe.

### Actividades que la mantienen alta

La forma más cómoda de mantener la felicidad subiendo es hacer vida de calle. Casi cualquier actividad al aire libre cumple la condición de los 15 minutos: trabajar en un empleo, pasear, atender un negocio desde la vereda, entrenar al exterior, asistir a eventos. Ese mismo tiempo al aire libre y esos mismos consumos sociales también alimentan tus [Burger Points](sistema-de-burger-points.md), de modo que te rinden por partida doble.

Si tu rol te obliga a pasar muchas horas en interiores (oficinas, propiedades, bases), acostúmbrate a **salir a comer, beber o fumar** al exterior cada media hora: es la forma más rápida de compensar.

## Consejos

- **Mide tus muertes.** Con el límite base en 10 y la ventana de 7 días, un personaje moderadamente violento rara vez llega al borde; uno que resuelve todo a tiros lo alcanza en pocos días.
- **Cuida tu felicidad antes de un conflicto grande.** Llegar a un enfrentamiento con la felicidad alta significa hasta **+15% de vida** y **hasta 4 muertes de margen** adicionales.
- **Si te avisan de que superaste el límite, cambia el enfoque del personaje.** Guarda el arma unos días: el contador baja solo y no pierdes nada más que tiempo.
- **La interpretación paga.** Los puntos de rol positivos suben tu límite de forma duradera, a diferencia de la felicidad, que fluctúa constantemente.
- **Refleja el desgaste en tu rol.** Un personaje que ha matado varias veces en una semana, o que manipula cadáveres a diario, tiene material de sobra para interpretar insomnio, paranoia o indiferencia. El servidor te da la barra; el rol lo pones tú.
