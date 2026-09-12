# Sistema de drogas

El sistema de drogas permite a tu personaje consumir, fabricar y comerciar distintas sustancias: desde tabaco y alcohol hasta cocaína, heroína o metanfetamina, pasando por los medicamentos de farmacia. Cada sustancia tiene sus propios efectos, un tiempo hasta que se sienten y una duración, y casi todas generan adicción con el uso repetido.

Consumir tiene dos caras. Por un lado te da ventajas temporales: recuperas vida, aguantas mejor los golpes y los disparos, resistes mejor un arresto y ganas bonificaciones al cometer delitos. Por otro, mezclar varias sustancias a la vez provoca heridas graves y sobredosis, y el consumo continuado te deja enganchado, con un síndrome de abstinencia que te quita vida.

Para consumir necesitas tener la droga en la **mano derecha** y usar `/usardroga`. Todo lo que consumes deja **signos visibles** en tu personaje que cualquiera puede ver con `/mirar`, así que la policía puede notar que vas drogado.

<img width="192" height="17" alt="image" src="https://github.com/user-attachments/assets/b6b2dd13-ecad-4b25-a30d-d20e9c515fba" />

### Comandos

- `/usardroga [cantidad]` — consume entre **0.1 y 1 gramo** de lo que tengas en la mano derecha. También se usa con los medicamentos de detoxicación y con el narcán.
- `/mirar [id]` — revisa los estados físicos visibles de un personaje.
- `/crearlaboratorio [confirmar]` — instala un laboratorio de drogas en tu propiedad.
- `/destruirlaboratorio [confirmar]` — destruye el laboratorio más cercano.
- `/creardroga` — abre el menú de fabricación en el laboratorio cercano.
- `/narcotraficante` — te marca como narcotraficante si perteneces a una facción ilegal destacada u oficial.
- `/falsificarreceta` — crea una receta médica falsa de opioides.

Si consumes cualquier droga **en exteriores** ganas **+10 Burger Points**, como máximo una vez cada hora. Ver [sistema de Burger Points](sistema-de-burger-points.md).

---

## Efectos de las drogas

Cada droga tarda un tiempo en hacer efecto (**retraso**) y luego dura un rato (**duración**). Mientras está activa te da vida, resistencia a los golpes, a los disparos y al arresto (taser, escopeta de goma, 40mm), y en algunos casos bonificaciones delictivas.

Las resistencias de las tablas son el **máximo alcanzable** con una droga de 100 de fuerza y una dosis completa; con menos fuerza o menos dosis los porcentajes bajan proporcionalmente. La resistencia total nunca supera el **90%**, por muchas sustancias que combines.

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
| **Fentanilo** | 1 min | 1 hora | **−15** | 50% | 25% | 25% | 80% → +3 de habilidad de robo de vehículos |
| **Hongos** | 3 min | 30 min | +15 | 15% | — | — | +1 de habilidad |
| **Óxido nitroso** | 1 min | 5 min | +15 | 10% | — | — | 70% → +1 de habilidad |
| **Esteroides** | 5 min | 15 min | +15 | 30% | — | 30% | +1 de habilidad; mejora el entrenamiento (ver abajo) |

> ⚠️ El **fentanilo** es la única sustancia que **resta vida** en vez de curar. A cambio es la que más resistencia da y la única que aporta habilidad de robo de vehículos.

Además de la bonificación fija por delito, la **cocaína, el crack, la heroína y la metanfetamina** aumentan un porcentaje de la paga de los trabajos mientras están activas. El aumento base va del **30% al 55%** según la sustancia, y se ajusta por consumo: desde el **80%** de ese valor con una dosis mínima hasta el **150%** con dosis acumuladas altas.

Los **esteroides** suman puntos extra de musculatura cada vez que entrenas en el [gimnasio](sistema-de-gimnasio.md): **+2** con poca dosis acumulada, **+4** a partir de media dosis y **+8** con una dosis completa o más.

### Sustancias legales y cotidianas

| Sustancia | Retraso | Duración | Vida | Golpes | Disparos | Arresto | Notas |
|---|---|---|---|---|---|---|---|
| **Tabaco** | 30 s | 5 min | +5 | — | — | — | Solo genera tabaquismo |
| **Alcohol** | 2 min | 1 hora | +10 | 10% | 10% | 30% | Provoca embriaguez, náuseas y vómitos |

Con el alcohol, el efecto depende de cuánto lleves encima: a partir de media dosis empiezan las náuseas, a partir de una dosis completa puedes vomitar, y con dosis y media o más el personaje se tambalea completamente borracho.

### Medicamentos

| Medicamento | Retraso | Duración | Vida | Golpes | Notas |
|---|---|---|---|---|---|
| **Codeína** | 5 min | 30 min | +25 | 20% | Analgésico opioide; oculta los síntomas en la consulta médica |
| **Alprazolam** | 5 min | 30 min | +20 | 10% | Ansiolítico |
| **Paracetamol** | 5 min | 30 min | +15 | 5% | Analgésico / antifebril |
| **Píldoras** | 5 min | 30 min | +15 | 5% | Genérico |
| **Ibuprofeno** | 5 min | 30 min | +15 | 5% | Antiinflamatorio |
| **Amoxicilina** | 5 min | 30 min | +15 | 5% | Antibiótico |
| **Omeprazol** | 5 min | 30 min | +15 | 5% | Antiácido |
| **Losartán** | 5 min | 30 min | +15 | 5% | Hipertensión |
| **Metformina** | 5 min | 30 min | +15 | 5% | Diabetes |
| **Salbutamol** | 5 min | 30 min | +15 | 5% | Trata la tos; oculta los síntomas en la consulta médica |
| **Loratadina** | 5 min | 30 min | +15 | 5% | Antialérgico (anula estornudos) |
| **Diclofenaco** | 5 min | 30 min | +15 | 5% | Antiinflamatorio |

> La vida que recuperas nunca pasa de **100**, y solo la ganas si no tienes **heridas de bala ni puñaladas** abiertas: con heridas, la droga no cura nada. Ver [sistema médico y hospital](sistema-medico-y-hospital.md).

---

## Mezclas y sobredosis

Consumir sustancias sueltas es relativamente seguro; acumularlas no.

- **Más de 2 drogas activas a la vez**: pierdes **50 de vida** y recibes una herida. Si ese golpe te dejaría por debajo del umbral crítico, quedas herido de gravedad en el suelo.
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

Cuando una droga baja de **1 de fuerza se destruye** y desaparece del inventario.

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

- **Sustancias suaves** (marihuana, LSD, alprazolam, medicamentos, óxido nitroso, hongos, esteroides): solo te pones nervioso, con ganas de consumir. **No provocan vómitos ni mareos.**
- **Sustancias duras** (cocaína, crack, MDMA, heroína, metanfetamina, fentanilo): te sientes fatal y **pierdes vida** en cada episodio: **15 de vida**, o **30** si superas los 14 puntos de adicción. Nunca te deja por debajo de 35 de vida. Además puedes vomitar (como mucho una vez cada 4 horas) y sufrir mareos (como mucho una vez cada 2 horas).
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

Cada droga admite varias combinaciones de ingredientes. **Las recetas más exigentes dan más fuerza**, pero piden más habilidad de drogas. Cada gramo fabricado consume **1 unidad de cada ingrediente** de la receta, y los ingredientes deben estar guardados en el **stock de la propiedad**.

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

Los ingredientes se consiguen mediante robos, compras a otros jugadores, saqueos o importación ilegal. Ver [sistema de mercado negro](sistema-de-mercado-negro.md).

### Cuánto puedes cocinar de una vez

El tope de ingredientes por tanda depende del tipo de propiedad y de tu habilidad de drogas:

| Habilidad | En una casa | En un almacén |
|---|---|---|
| **0 – 9** | 25 unidades | 50 unidades |
| **10 – 20** | 75 unidades | 100 unidades |
| **21 o más** | 125 unidades | 150 unidades |

### Explosiones al cocinar metanfetamina

Cocinar **metanfetamina** tiene un **20% de probabilidad de provocar una explosión** en el laboratorio: incendio interior y exterior, humo, alarma de la propiedad, aviso a policía y bomberos, y la radio de la propiedad se apaga.

Para evitarla, alguien dentro de la propiedad debe tener un **extintor en la mano derecha** en el momento de la cocción. Con un extintor presente la explosión nunca ocurre.

### Habilidad y tiempo de espera

Cada tanda te da hasta **+3 de habilidad de drogas** (menos si fabricas menos de 3 gramos) y deja un tiempo de espera proporcional a la cantidad producida:

| Habilidad | Espera por gramo fabricado |
|---|---|
| **0 – 9** | 4 horas |
| **10 – 20** | 2 horas |
| **21 – 50** | 1 hora 45 min |
| **51 – 75** | 1 hora 30 min |
| **76 o más** | 1 hora 15 min |

Las cuentas premium recortan esa espera: **−15%**, **−25%**, **−35%** o **−50%** según el rango. Ver [tienda premium](tienda-premium.md).

---

## Obtención de drogas naturales

| Droga | Cómo se obtiene |
|---|---|
| **Marihuana** | Se cultiva con semillas, abono, agua y fertilizante. Ver [sistema de plantaciones de marihuana](sistema-de-plantaciones-de-marihuana.md) |
| **Hongos** | Se recogen a mano en el campo del suroeste del estado, en zonas boscosas y montañosas. Cada mata da **1 a 10 gramos** con **50 a 74 de fuerza**. Los puntos reaparecen al reiniciar el servidor, cada uno con un **30% de probabilidad** |

La marihuana no se consume directamente: con `/usardroga` armas un **porro** que pasa a tu mano izquierda, y lo fumas después. Cada calada suma una fracción de dosis y algo de adicción.

---

## Venta de drogas

La forma más directa de vender es a los **junkies**, los compradores callejeros repartidos por la ciudad. Se documentan en detalle en [sistema de mercado negro](sistema-de-mercado-negro.md).

Lo que pagan depende de tres cosas: **cuántos gramos** le vendes, el **precio base** de esa sustancia y su **fuerza**. La fuerza multiplica el precio entre **x0.5** (mercancía casi inútil) y **x2** (pureza máxima), así que vender droga degradada cuesta la mitad. Los junkies especiales pagan un **25% extra**, y durante una **misión de venta** el precio se **duplica**.

Cada junkie lleva encima entre **$10,000 y $20,000** y se marcha cuando se queda sin efectivo, así que una tanda grande necesita varios compradores. El precio base por gramo va desde los **$52** de la marihuana hasta los **$444** de la heroína, pasando por los **$371** del crack, **$361** de la cocaína, **$355** de la metanfetamina, **$314** del MDMA, **$173** del fentanilo, **$108** del LSD y **$79** del óxido nitroso.

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
- **Invierte en habilidad antes que en recetas caras.** Pasando de 20 de habilidad puedes cocinar tandas de 125 a 150 unidades y con la mitad de espera.
- **Ten un extintor a mano si cocinas metanfetamina.** Una explosión cancela la operación y trae a la policía y a los bomberos a tu casa.
- **Ojo con la abstinencia de las duras.** Perder 30 de vida cada hora sin poder consumir convierte cualquier tiroteo en una sentencia; guarda medicamentos de detoxicación.
