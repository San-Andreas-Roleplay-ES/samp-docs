# Sistema de drogas

El sistema de drogas permite a tu personaje consumir, fabricar y comerciar distintas sustancias: desde tabaco y alcohol hasta cocaína, heroína o metanfetamina, pasando por los medicamentos de farmacia. Cada sustancia tiene sus propios efectos, un tiempo hasta que se sienten y una duración, y casi todas generan adicción con el uso repetido.

Consumir tiene dos caras. Por un lado te da ventajas temporales: recuperas vida, aguantas mejor los golpes y los disparos, resistes mejor un arresto y ganas bonificaciones al cometer delitos. Por otro, mezclar varias sustancias a la vez provoca heridas graves y sobredosis, y el consumo continuado te deja enganchado, con un síndrome de abstinencia que te quita vida.

Para consumir necesitas tener la droga en la **mano derecha** y usar `/usardroga`. Todo lo que consumes deja **signos visibles** en tu personaje que cualquiera puede ver con `/mirar`, así que la policía puede notar que vas drogado.

<img width="192" height="17" alt="image" src="https://github.com/user-attachments/assets/b6b2dd13-ecad-4b25-a30d-d20e9c515fba" />

### Comandos

- `/usardroga [cantidad]` — consume entre **0.1 y 1 gramo** de lo que tengas en la mano derecha; debes tener más gramos de los que vas a consumir. También se usa con los medicamentos de detoxicación y con el narcán.
- `/mirar [id]` — revisa los estados físicos visibles de un personaje.
- `/crearlaboratorio [confirmar]` — instala un laboratorio de drogas en tu propiedad.
- `/destruirlaboratorio [confirmar]` — destruye el laboratorio más cercano.
- `/creardroga` — abre el menú de fabricación en el laboratorio cercano.
- `/narcotraficante` — te marca como narcotraficante si perteneces a una facción ilegal destacada u oficial.
- `/falsificarreceta` — crea una receta médica falsa de opioides.

Si consumes una droga con `/usardroga` **en exteriores** ganas **+10 Burger Points**, como máximo una vez cada hora (armar el porro de marihuana no cuenta). Ver [sistema de Burger Points](sistema-de-burger-points.md).

---

## Efectos de las drogas

Cada droga tarda un tiempo en hacer efecto (**retraso**) y dura un rato (**duración**, que se cuenta desde que la consumes, retraso incluido). Cuando pasa el retraso te da resistencia a los golpes, a los disparos y al arresto (taser, escopeta de goma, 40mm), y en algunos casos bonificaciones delictivas. La vida, en cambio, se recupera al instante de consumir.

Los porcentajes de las tablas son los **valores base** de cada sustancia. El efecto real depende de la fuerza de la droga y de la dosis con la que empezaste a consumirla: con mucha fuerza y una dosis completa puede superar con holgura el valor de la tabla (más del doble), y con poca fuerza o una dosis pequeña queda por debajo. Lo mismo vale para la vida que recuperas y para las probabilidades de bonificación delictiva. La resistencia total nunca supera el **90%**, por muchas sustancias que combines.

### Drogas recreativas e ilegales

| Droga | Retraso | Duración | Vida | Golpes | Disparos | Arresto | Bonificación delictiva |
|---|---|---|---|---|---|---|---|
| **Marihuana** | 2 min | 30 min | +10 | 5% | 5% | — | 70% → +1 de habilidad |
| **Cocaína** | 1 min | 5 min | +20 | 20% | 15% | — | 75% → +2 de habilidad; 70% → +$30 por delito |
| **Crack** | 10 s | 1 min 30 s | +30 | 20% | 25% | — | 85% → +2 de habilidad; 75% → +$45 por delito |
| **MDMA** | 5 min | 30 min | +15 | 10% | 10% | 10% | 80% → +2 de habilidad |
| **Heroína** | 10 s | 30 min | +45 | 30% | 10% | 20% | 70% → +2 de habilidad; 90% → +$70 por delito; −40% al tiempo de desarmar piezas |
| **LSD** | 5 min | 30 min | +30 | 10% | — | — | 75% → +2 de habilidad |
| **Metanfetamina** | 2 min | 10 min | +50 | 20% | 10% | — | 80% → +2 de habilidad; 80% → +$50 por delito; −30% al tiempo de forzar puertas y de desarmar piezas |
| **Fentanilo** | 1 min | 1 hora | — | 50% | 25% | 25% | 80% → +3 de habilidad de robo de vehículos |
| **Hongos** | 3 min | 30 min | +15 | 15% | — | — | — |
| **Óxido nitroso** | 1 min | 5 min | +15 | 10% | — | — | 70% → +1 de habilidad |
| **Esteroides** | 5 min | 15 min | +15 | 30% | — | 30% | Mejora el entrenamiento (ver abajo) |

> ⚠️ El **fentanilo** no te cura nada, a diferencia del resto. A cambio es la que más resistencia da y la única que aporta habilidad de robo de vehículos.

Además de la bonificación fija por delito, la **cocaína, el crack, la heroína y la metanfetamina** aumentan un porcentaje de la paga de los trabajos mientras están activas. El aumento base va del **30% al 55%** según la sustancia, y se ajusta por consumo: desde el **80%** de ese valor con una dosis mínima hasta el **150%** con dosis acumuladas altas.

Los **esteroides** suman puntos extra de musculatura cada vez que entrenas en el [gimnasio](sistema-de-gimnasio.md): **+2** con poca dosis acumulada, **+4** a partir de media dosis y **+8** con una dosis completa o más.

### Sustancias legales y cotidianas

| Sustancia | Retraso | Duración | Vida | Golpes | Disparos | Arresto | Notas |
|---|---|---|---|---|---|---|---|
| **Tabaco** | 30 s | 5 min | — | — | — | — | Solo genera tabaquismo |
| **Alcohol** | 2 min | 1 hora | — | 10% | 10% | 30% | Provoca embriaguez, náuseas y vómitos |

Con el alcohol, el efecto depende de cuánto lleves encima: a partir de media dosis empiezan las náuseas, a partir de una dosis completa puedes vomitar, y con dosis y media o más el personaje se tambalea completamente borracho.

### Medicamentos

| Medicamento | Retraso | Duración | Vida | Golpes | Notas |
|---|---|---|---|---|---|
| **Codeína** | 5 min | 30 min | +25 | 20% | Analgésico opioide; oculta los síntomas en la consulta médica |
| **Alprazolam** | 5 min | 30 min | +20 | 10% | Ansiolítico |
| **Paracetamol** | 5 min | 30 min | +15 | 5% | Analgésico / antifebril |
| **Píldoras** | 5 min | 30 min | +15 | 5% | Genérico |
| **Ibuprofeno** | 5 min | 30 min | — | 5% | Antiinflamatorio |
| **Amoxicilina** | 5 min | 30 min | — | 5% | Antibiótico |
| **Omeprazol** | 5 min | 30 min | — | 5% | Antiácido |
| **Losartán** | 5 min | 30 min | — | 5% | Hipertensión |
| **Metformina** | 5 min | 30 min | — | 5% | Diabetes |
| **Salbutamol** | 5 min | 30 min | — | 5% | Trata la tos; oculta los síntomas en la consulta médica |
| **Loratadina** | 5 min | 30 min | — | 5% | Antialérgico (anula estornudos) |
| **Diclofenaco** | 5 min | 30 min | — | 5% | Antiinflamatorio |

> La vida que recuperas nunca pasa de **100**. Solo la ganas si no tienes **heridas de bala ni puñaladas** abiertas y si no hay otra sustancia activa en tu cuerpo al consumir (el tabaco, el alcohol y los medicamentos desde el ibuprofeno hasta el diclofenaco no cuentan para esto): con heridas o mezclando, la droga no cura nada. Esos medicamentos, el tabaco y el alcohol tampoco te curan por sí solos. Ver [sistema médico y hospital](sistema-medico-y-hospital.md).

---

## Mezclas y sobredosis

Consumir sustancias sueltas es relativamente seguro; acumularlas no.

- **Más de 2 drogas activas a la vez** (sin contar el tabaco, el alcohol ni el ibuprofeno, la amoxicilina, el omeprazol, el losartán, la metformina, el salbutamol, la loratadina y el diclofenaco): pierdes **50 de vida** y recibes una herida. Si ese golpe te dejaría por debajo del umbral crítico, quedas herido de gravedad en el suelo.
- **Sobredosis**: si la dosis acumulada de las sustancias más duras supera **2.5 gramos**, pierdes **70 de vida** y recibes una herida más seria. El riesgo lo calculan solo las sustancias fuertes, no los medicamentos suaves.

En ambos casos el personaje vomita y arrastra la herida hasta que reciba atención médica.

Para revertir una sobredosis existe el **narcán**, un aerosol nasal de naloxona. Se usa con `/usardroga` teniéndolo en la mano derecha y solo funciona si tienes **más de 2 drogas activas**: recupera algo de vida y baja medio punto de adicción a todas las sustancias. Usarlo sin sobredosis es contraproducente y te quita **30 de vida**.

---

## Signos visibles

<img width="511" height="153" alt="image" src="https://github.com/user-attachments/assets/791ec5df-f405-402a-af01-a3f6fe8ed0ce" />

Mientras una sustancia siga en tu cuerpo, `/mirar` sobre tu personaje muestra los signos que deja. Se acumulan: si has consumido varias cosas, se ven todos los signos a la vez.

| Droga | Signos visibles |
|---|---|
| **Marihuana** | Apesta a marihuana, boca seca, ojos ligeramente enrojecidos |
| **Cocaína** | Pupilas dilatadas, nariz algo moquienta |
| **Crack / Metanfetamina** | Pupilas dilatadas, olor desagradable, sudando, habla rápido |
| **MDMA** | Pupilas dilatadas, sudando, aprieta la mandíbula involuntariamente |
| **Fentanilo / Heroína** | Pupilas dilatadas, boca seca, sudando, desorientado |
| **LSD** | Pupilas dilatadas, boca seca, sudando, tiembla involuntariamente |
| **Codeína / Óxido nitroso / Hongos** | Habla lento, poco responsivo, le cuesta mantener el balance |
| **Esteroides** | Tiene acné |
| **Tabaco** | Huele ligeramente a tabaco |
| **Alcohol** | Huele ligeramente a alcohol |

<img width="247" height="75" alt="image" src="https://github.com/user-attachments/assets/9315d144-2758-4514-a7bb-46b9ad905d4e" />

---

## Fuerza

La **fuerza** es la calidad o pureza de una droga, de **0 a 100**. Determina lo potentes que son sus efectos: con fuerza cercana a **100** obtienes el efecto máximo (más vida, más resistencia, más bonificaciones) y también más adicción por dosis; con fuerza cercana a **0** el efecto es prácticamente nulo. La fuerza también multiplica lo que te pagan al venderla.

Toda la droga guardada en el mundo **pierde fuerza cada día**, entre **1 y 3 puntos diarios** según la sustancia:

| Pérdida diaria | Sustancias |
|---|---|
| **−3 por día** | Cocaína, crack, metanfetamina |
| **−2 por día** | MDMA, heroína, fentanilo |
| **−1 por día** | Marihuana, LSD, óxido nitroso, hongos, esteroides, medicamentos |

Cuando la marihuana, el óxido nitroso, la cocaína, el crack, el MDMA, el fentanilo, la heroína, el LSD, la metanfetamina, la codeína, el alprazolam o el paracetamol llegan a **1 de fuerza o menos, se destruyen** y desaparecen del inventario. Los hongos, los esteroides, las píldoras y el resto de medicamentos siguen perdiendo fuerza pero no se destruyen.

**Refrigerar la mercancía la conserva.** Las drogas guardadas en el **refrigerador de una propiedad** —o dentro de un paquete que esté en el refrigerador— tienen un **70% de probabilidad cada día de no perder nada de fuerza**. Lo que dejes en bolsillos, vehículos o almacenes se degrada siempre. Ver [sistema de propiedades](sistema-de-propiedades.md).

---

## Adicción y abstinencia

Cada consumo suma puntos de adicción a esa sustancia concreta. Cuánto suma depende de la cantidad consumida, de la fuerza de la droga y sobre todo de lo dura que sea: el fentanilo engancha muchísimo más rápido que la marihuana o el paracetamol. La adicción se mide de **0 a 21 puntos**, repartidos en cinco niveles:

| Nivel | Puntos | Descripción |
|---|---|---|
| **I** | 0 – 4.2 | Consumo experimental |
| **II** | 4.2 – 8.4 | Consumo ocasional |
| **III** | 8.4 – 12.6 | Consumo habitual |
| **IV** | 12.6 – 16.8 | Uso problemático |
| **V** | 16.8 – 21 | Dependencia severa |

A partir de **7 puntos** de adicción, si pasas **48 horas sin consumir** esa sustancia empieza el **síndrome de abstinencia**, con un episodio cada hora:

- **Sustancias suaves** (marihuana, codeína, paracetamol, óxido nitroso, hongos, esteroides, píldoras y el resto de medicamentos): solo te pones nervioso, con ganas de consumir. **No provocan vómitos ni mareos.**
- **LSD y alprazolam**: te pones nervioso y no pierdes vida, pero durante la hora siguiente a cada episodio puedes vomitar (como mucho una vez cada 4 horas) y sufrir mareos (como mucho una vez cada 2 horas).
- **Sustancias duras** (cocaína, crack, MDMA, heroína, metanfetamina, fentanilo): te sientes fatal y **pierdes vida** en cada episodio: **15 de vida**, o **30** si llegas a los 14 puntos de adicción. Si tienes 45 de vida o menos no te la quita, pero te deja en 35. Además puedes vomitar (como mucho una vez cada 4 horas) y sufrir mareos (como mucho una vez cada 2 horas).
- **Tabaco y alcohol** tienen su propio aviso —tabaquismo y alcoholismo— y nunca te quitan vida.

<img width="673" height="45" alt="image" src="https://github.com/user-attachments/assets/b07ff909-75b6-48e5-b4d7-ffb8ac2e1577" />

La adicción **baja sola con el tiempo** si dejas de consumir, a razón de **1 punto cada 72 horas** de forma continua. Salir de una dependencia severa lleva semanas de abstinencia.

<img width="309" height="21" alt="image" src="https://github.com/user-attachments/assets/686df445-728d-4a26-9a94-bc0ec57c1ef4" />

### Desintoxicarse

Los **medicamentos de detoxicación** aceleran el proceso. Se usan con `/usardroga` teniéndolos en la mano derecha y reducen la adicción a **todas** las sustancias de golpe. Cuanto más enganchado estés, menos efecto hacen: quitan alrededor de **2.5 puntos** si tu adicción es baja y solo **1 punto** cuando la dependencia es severa. Si no tienes ninguna adicción, el medicamento te sienta fatal: **−10 de vida**, mareo y vómito.

---

## Fabricación en laboratorio

Los laboratorios permiten fabricar drogas sintéticas en casa.

### Requisitos para montarlo

- Ser **delincuente**.
- Tener al menos **5 de habilidad de drogas**, o ser **narcotraficante**.
- Estar dentro de una **casa o almacén de tu propiedad** (no vale un negocio ni una propiedad ajena).
- No tener ya un laboratorio: se admite **uno por personaje**.
- Respetar el descanso de **2 semanas (336 horas)** entre creaciones. El descanso también se aplica si te destruyen el laboratorio.

El laboratorio queda instalado en el sitio exacto donde lo montaste. Pueden destruirlo tú mismo o un policía en servicio.

### Qué puedes fabricar

Sin ser narcotraficante solo tienes acceso a **óxido nitroso** y **crack**. Con `/narcotraficante` —requiere pertenecer a una facción ilegal destacada u oficial— se abre el catálogo completo. Ver [facciones ilegales](facciones-ilegales.md).

| Droga | Requiere narcotraficante | Habilidad mínima | Fuerza resultante |
|---|---|---|---|
| **Óxido nitroso** | No | — | 40 – 80 |
| **Crack** | No | 10 | 35 – 60 |
| **Cocaína** | Sí | — | 30 – 80 |
| **MDMA** | Sí | 5 | 10 – 80 |
| **Heroína** | Sí | — | 30 – 75 |
| **LSD** | Sí | 15 | 30 – 70 |
| **Metanfetamina** | Sí | 25 | 40 – 80 |

### Recetas e ingredientes

Cada droga admite varias combinaciones de ingredientes. **Las recetas más exigentes dan más fuerza**, pero piden más habilidad de drogas. Cada gramo fabricado consume **1 unidad de cada ingrediente** de la receta. Los ingredientes deben estar **en el suelo, a menos de 5 metros del laboratorio**: tíralos junto a él antes de empezar y la fabricación los toma de ahí, repartiendo el consumo entre los envases que haga falta. Si no alcanzan, el juego te avisa cuántas unidades faltan.

| Droga | Receta | Habilidad | Fuerza |
|---|---|---|---|
| **Óxido nitroso** | Sifón con N₂O + Globo | — | 60 – 80 |
| | Sifón con N₂O + Dispensador de crema | — | 40 – 65 |
| **Crack** | Cocaína + Bicarbonato de sodio | 20 | 50 – 60 |
| | Cocaína + Carbonato de amonio | 15 | 35 – 55 |
| | Cocaína + Bicarbonato de amonio | — | 45 – 60 |
| **Cocaína** | Hoja de coca, queroseno, ácido sulfúrico, amoniaco, acetona | 15 | 60 – 80 |
| | …y además potasio | 15 | 50 – 65 |
| | …y además éter | 10 | 40 – 50 |
| | …y además éter y gasolina | 5 | 30 – 40 |
| | …y además potasio y gasolina | — | 30 – 50 |
| **MDMA** | Hoja de sasafrás, ácido muriático, alcohol isopropílico | 20 | 60 – 80 |
| | …y además ketamina | 15 | 30 – 50 |
| | …y además metanfetamina | — | 10 – 30 |
| **Heroína** | Opio, carbonato de sodio, ácido muriático, éter | 25 | 65 – 75 |
| | …y además cafeína | 15 | 40 – 60 |
| | …y además fentanilo | — | 30 – 40 |
| **LSD** | Ergot, amoniaco, alcohol isopropílico | 20 | 60 – 70 |
| | Cafergot, amoniaco, alcohol isopropílico | — | 30 – 50 |
| **Metanfetamina** | Efedrina, xileno, píldoras Sudafed, potasio, éter, acetona, ácido sulfúrico, fósforo rojo | 40 | 65 – 80 |
| | La misma receta con tolueno en vez de xileno | 35 | 55 – 70 |
| | La receta con xileno más fentanilo | — | 50 – 65 |
| | La receta con tolueno más fentanilo | — | 40 – 60 |

Al guardar o tirar un ingrediente, este se une con los del mismo tipo hasta llenar cada envase, en lugar de ocupar un espacio nuevo. Los envases vacíos no desaparecen: puedes volver a rellenarlos.

Los ingredientes se consiguen mediante robos, compras a otros jugadores, saqueos o importación ilegal. Ver [sistema de mercado negro](sistema-de-mercado-negro.md).

### Costo de influencia

Si perteneces a una facción, cada vez que fabricas drogas se descuentan **250 puntos de influencia** de tu facción. El costo se reparte en partes iguales entre **todas las zonas donde tu facción tenga influencia**, estén conquistadas o no; si una zona no alcanza a cubrir su parte, las demás completan el resto. Tu facción necesita tener al menos esos 250 puntos en total, o no puedes fabricar. Si la fabricación no llega a completarse, la influencia se devuelve. Si no perteneces a ninguna facción, no se cobra nada. Ver [sistema de zonas de pandilla](sistema-de-zonas-de-pandilla.md).

### Cuánto puedes cocinar de una vez

El tope de ingredientes por tanda depende del tipo de propiedad y de tu habilidad de drogas:

| Habilidad | En una casa | En un almacén |
|---|---|---|
| **0 – 9** | 25 unidades | 50 unidades |
| **10 – 20** | 75 unidades | 100 unidades |
| **21 o más** | 125 unidades | 150 unidades |

A ese tope base se le suman estos bonos:

- **Base ilegal de tu facción** (pandilla o mafia): **+25 unidades** si cocinas en la propiedad que tu facción tiene asignada como base. Ver [sistema de bases ilegales](sistema-de-bases-ilegales.md).
- **Territorio propio** (solo pandillas): **+25 unidades** si el laboratorio está en territorio controlado por tu pandilla. El territorio se determina por la entrada exterior de la propiedad.
- **Territorios controlados** (solo pandillas): **+2%** por cada territorio que controle tu pandilla, hasta **+20%**. Cuentan todos sus territorios y el porcentaje se aplica sobre el límite ya sumado con los bonos anteriores.

Ejemplo: un almacén con habilidad 21 o más (150) en la base ilegal (+25) y en territorio propio (+25) da 200 unidades; si tu pandilla controla 10 territorios o más (+20%), el tope es de **240 unidades**.

### Explosiones al cocinar metanfetamina

Cocinar **metanfetamina** tiene un **20% de probabilidad de provocar una explosión** en el laboratorio. Si el laboratorio está en **territorio controlado por otra facción**, la probabilidad sube al **35%**, y esto vale para cualquier jugador, tenga o no facción. Una explosión provoca incendio interior y exterior, humo, alarma de la propiedad, aviso a policía y bomberos, y la radio de la propiedad se apaga.

Para evitarla, alguien dentro de la propiedad debe tener un **extintor en la mano derecha** en el momento de la cocción. Con un extintor presente la explosión nunca ocurre.

### Habilidad y tiempo de espera

Cada tanda te da hasta **+3 de habilidad de drogas** (menos si fabricas menos de 3 gramos) y deja un tiempo de espera proporcional a la cantidad producida. El tiempo depende de tu habilidad de drogas:

| Habilidad | Espera por gramo | Espera por 100 gramos |
|---|---|---|
| **0 – 9** | 28 min 48 s | 48 horas |
| **10 – 20** | 14 min 24 s | 24 horas |
| **21 – 50** | 12 min 36 s | 21 horas |
| **51 – 75** | 10 min 48 s | 18 horas |
| **76 o más** | 9 min | 15 horas |

Esa espera se reduce todavía más con estos descuentos, que se aplican uno sobre otro:

- **Cuentas premium**: **−15%**, **−25%**, **−35%** o **−50%** según el rango. Ver [tienda premium](tienda-premium.md).
- **Territorio propio** (solo pandillas): **−25%** si cocinas en un laboratorio ubicado en territorio controlado por tu pandilla.

En el mejor caso (habilidad 76 o más, premium de rango máximo y territorio propio), 100 gramos dejan una espera de unas **5 horas y media**.

---

## Obtención de drogas naturales

| Droga | Cómo se obtiene |
|---|---|
| **Marihuana** | Se cultiva con semillas, abono, agua y fertilizante, y las plantas al aire libre rinden **+25% de gramos** al cosecharlas. Ver [sistema de plantaciones de marihuana](sistema-de-plantaciones-de-marihuana.md) |
| **Hongos** | Se recogen a mano en el campo del suroeste del estado, en zonas boscosas y montañosas. Cada mata da **1 a 10 gramos** con **50 a 74 de fuerza**. Los puntos reaparecen al reiniciar el servidor, cada uno con un **30% de probabilidad** |

La marihuana no se consume directamente: con `/usardroga` armas un **porro** que pasa a tu mano izquierda (que debe estar libre), y lo fumas después. Cada **0.1 gramo** que usas para armarlo rinde **3 caladas** (30 por gramo), y cada calada suma una fracción de dosis y algo de adicción.

---

## Venta de drogas

La forma más directa de vender es a los **junkies**, los compradores callejeros repartidos por la ciudad, con `/traficar` y la droga en la **mano derecha**. Para venderles debe haber al menos **2 policías en servicio**. Se documentan en detalle en [sistema de mercado negro](sistema-de-mercado-negro.md).

Lo que pagan depende de tres cosas: **cuántos gramos** le vendes, el **precio base** de esa sustancia y su **fuerza**. La fuerza multiplica el precio entre **x0.5** (mercancía casi inútil) y **x2** (pureza máxima), así que vender droga degradada cuesta la mitad. Los junkies especiales (piratas), que solo hacen negocios con miembros de una facción ilegal oficial, pagan un **25% extra**, y durante una **misión de venta** el precio se **duplica**. Se vende de una sola vez todo lo que tengas en la mano: el comprador te ofrece un precio y debes confirmarlo con `/traficar aceptar`. Si no le alcanza el dinero para pagarlo, no compra.

Los **camellos** son compradores que esperan en esquinas fijas de la ciudad y pagan un **20% más** que un junkie normal. Ese extra no se aplica durante una misión de venta, y las sustancias que también se compran en negocios se pagan siempre a su precio base, sin multiplicadores por fuerza ni extras.

Cada junkie lleva encima entre **$10.000 y $20.000** y se marcha cuando se queda sin efectivo, así que una tanda grande necesita varios compradores. Los campamentos de los callejones van cambiando de lugar por la ciudad y solo existen mientras hay gente en ellos.

El precio base por gramo, de mayor a menor:

| Sustancia | Precio base por gramo |
|---|---|
| **Heroína** | $444 |
| **Metanfetamina** | $425 |
| **Crack** | $371 |
| **Cocaína** | $361 |
| **MDMA** | $230 |
| **LSD** | $210 |
| **Fentanilo** | $173 |
| **Óxido nitroso** | $79 |
| **Hongos** | $72 |
| **Marihuana** | $52 |

> ⚠️ Cuidado con lo que llevas encima en los callejones. Si ofreces a un camello o a un vagabundo algo que no es droga, o lo atacas, puede ponerse agresivo y atacarte. Un vagabundo que te deje herido te roba el **10% de tu efectivo**, hasta un máximo de **$2.500**.

---

## Recetas médicas falsas

Con `/falsificarreceta` puedes crear una **receta médica falsa de opioides** para conseguir medicamentos controlados en farmacia. Necesitas:

- Ser miembro de una **facción ilegal oficial**.
- **50 de habilidad de drogas**.
- **$150** y la mano derecha libre.

---

## Consejos

- **Una droga a la vez.** El salto de 2 a 3 sustancias activas es la diferencia entre ir colocado y acabar en el suelo con una herida.
- **Guarda la mercancía en el refrigerador.** Tres puntos de fuerza al día en la cocaína o la metanfetamina se comen el margen de venta en menos de una semana.
- **Vende pronto y vende puro.** El precio se multiplica por la fuerza: mercancía fresca vale el doble que la que lleva semanas guardada en un bolsillo.
- **Cocina donde te conviene.** En la base ilegal y en territorio de tu pandilla fabricas más por tanda y esperas menos; en territorio rival la metanfetamina explota con más facilidad. No olvides que cada fabricación te cuesta influencia de tu facción.
- **Invierte en habilidad antes que en recetas caras.** Pasando de 20 de habilidad puedes cocinar tandas de 125 a 150 unidades y la espera por gramo baja a menos de la mitad que con habilidad 0.
- **Ten un extintor a mano si cocinas metanfetamina.** Una explosión incendia tu casa y trae a la policía y a los bomberos.
- **Ojo con la abstinencia de las duras.** Perder 30 de vida cada hora sin poder consumir convierte cualquier tiroteo en una sentencia; guarda medicamentos de detoxicación.
