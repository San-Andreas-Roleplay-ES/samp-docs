# Sistema de caza 🦌

## Introducción

El sistema de caza está pensado para los personajes a los que les gusta el aire libre, la paciencia y el disparo bien medido. La caza deportiva está permitida en dos zonas: el **bosque de Whetstone** y **Flint County**, un territorio enorme de bosque, cerros y caminos rurales al suroeste del estado donde los animales aparecen repartidos de forma aleatoria.

Con cualquier **escopeta**, **rifle de caza** o **fusil de francotirador** puedes salir a cazar, incluso si no tienes licencia de caza ni licencia de porte de armas. Solo tienes que ir al bosque, tener paciencia y dar con el animal bien escondido que está esperando a tu preciosa arma.

Todo lo demás —vender las piezas, comprar cuchillos, rifles o trofeos— pasa por el **punto de caza de Angel Pine**, marcado en el mapa y señalizado en el lugar. Allí se centraliza la compra y venta de todo lo relacionado con la actividad.

> ⚠️ Cazar sin licencia ni permiso municipal se considera un **delito ambiental** y puede acarrear multas y penas de prisión. La **licencia de caza** no se compra en una oficina: la entrega en persona un **guardabosques** o el **sheriff** en servicio, y solo a quien ya tenga licencia de conducir y no tenga antecedentes penales. Si acumulas antecedentes, la licencia se revoca junto con las demás.

### Comandos

- /cazar — muestra la información general del sistema de caza.
- /menucaza — abre el menú de caza (solo en el punto de Angel Pine).

## Cómo funciona

1. Recorre las zonas permitidas buscando animales. No hay un lugar fijo: aparecen de forma aleatoria por todo el bosque, lejos de donde ya haya otro animal o algún jugador.
2. Escucha. Cada animal hace ruido cada cierto tiempo y ese sonido es tu mejor pista para ubicarlo.
3. Mantén la distancia y no te acerques de golpe: el animal se espanta con facilidad.
4. Cuando esté quieto, apunta y dispara con un arma adecuada.
5. Si solo lo hieres, remátalo para que no sufra.
6. Acércate al cuerpo con un cuchillo en la mano derecha y presiona **N** para despellejarlo y quedarte con sus recursos.

Para aprovechar la jornada necesitas **espacio en el inventario** y, de preferencia, un **vehículo con un maletero grande**: las pieles y la carne pesan, y llevarlas hasta Angel Pine a pie es una odisea.

## Actividad silvestre según la hora

La cantidad de animales que pueden estar activos a la vez en el mapa depende de la hora del día y de si hay un evento de experiencia en curso:

| Situación | Animales activos a la vez |
|-----------|---------------------------|
| **Día** (08:00 – 20:00) | hasta **3** |
| **Noche** (20:00 – 08:00) | hasta **5** |
| **Doble experiencia** (cualquier hora) | hasta **10** |
| **Triple experiencia** (cualquier hora) | hasta **20** |

El servidor revisa cada **15 minutos** si faltan animales y repuebla el bosque hasta ese tope. Un animal nuevo nunca aparece a menos de **250 metros** de otro animal ni de un jugador, así que conviene moverse y cubrir terreno en vez de quedarse plantado en un mismo claro.

De cada animal que aparece, aproximadamente **50%** son conejos, **48%** venados y **2%** osos negros.

## Animales

### 🐇 Conejo

Pequeño y ágil, pelaje café o gris. Se mueve rápido, se oculta entre la vegetación y se asusta con facilidad.

- Es el animal **más común** del bosque.
- Se le oye en un radio de **50 metros**.
- Al despellejarlo obtienes el **cuerpo del conejo** (⭐). Puedes quedártelo como trofeo o venderlo.

### 🦌 Venado

Cuerpo esbelto, astas en los machos y pelaje café que cambia según la estación. Atento a los ruidos: se aleja si algo lo inquieta.

- Aparición **habitual** en el bosque.
- Se le oye —y te hará brincar la primera vez que lo escuches— en un radio de **100 metros**.
- Al despellejarlo obtienes **4 piezas de carne** y **1 piel** de venado (⭐⭐).

### 🐻 Oso negro

Robusto y fuerte, pelaje oscuro a marrón variable. Generalmente tranquilo, aunque puede volverse agresivo si se siente amenazado o si busca comida.

- Aparición **muy rara** y **condicionada**: un oso solo llega a aparecer si hay una **trampa para osos** dejada en el suelo a menos de **300 metros** del punto donde le tocaba salir. La trampa se compra en el menú de caza; si no hay ninguna en el sector, ese animal se convierte en un venado.
- Se le oye —y definitivamente jamás querrías escucharlo de cerca— en un radio de **200 metros**.
- Al despellejarlo obtienes **2 piezas de carne** y **1 piel** de oso (⭐⭐⭐).

> ⚠️ Debido a limitaciones del motor de GTA San Andreas, la zona sensible de los animales suele estar en las partes traseras (patas traseras, espalda y estómago). Te recomendamos probar y ver dónde te renta más apuntar y disparar.

## Reglas de disparo

Para que el disparo cuente como caza válida debe cumplir con todo esto:

- **Arma correcta**: solo **escopeta**, **rifle de caza** o **fusil de francotirador**. Cualquier otra arma **espanta al animal** y lo hace huir para siempre.
- **Distancia mínima**: si disparas a **menos de 10 metros** del animal, lo espantas.
- **Manos vacías**: si apuntas al animal sin nada en la mano derecha, también lo espantas y tu personaje queda aturdido.
- **Animales heridos**: solo se rematan con ese mismo grupo de armas.

Si fallas el disparo, el animal se asusta, huye y tu personaje queda aturdido: esa pieza se pierde y tendrás que buscar otra.

## Habilidad de cazador

La caza no es solo "apuntar y disparar". Tiene progresión, curva de aprendizaje y premia a quienes realmente se dedican. Puedes tener la mejor puntería de todo San Andreas, pero si tu personaje no entrena el arte de la caza, los resultados no serán los mismos.

Consulta también la [guía de habilidades](sistema-de-habilidades.md) para ver cómo encaja la habilidad de caza con el resto de oficios.

| Mecánica | Valor base | Efecto de la habilidad | Límite |
|----------|-----------|------------------------|--------|
| **Probabilidad de fallar el disparo** | **30%** | baja **0.25%** por punto de habilidad | nunca baja de **5%** |
| **Probabilidad de matar de un solo tiro** | **25%** | sube **0.5%** por punto de habilidad | — |

- Solo ganas **+1 punto de habilidad** cuando consigues la **muerte limpia de un solo tiro**.
- Si solo hieres al animal y lo rematas después, no ganas habilidad: la pieza sí cuenta para tus estadísticas y tus Burger Points, pero la práctica se paga con precisión.

Con la habilidad bien entrenada pasas de fallar 3 de cada 10 disparos a fallar solo 1 de cada 20, y de matar 1 de cada 4 animales de un tiro a hacerlo con la mayoría.

### Estadísticas del cazador

El menú de caza te muestra tu habilidad total y el conteo acumulado de **conejos**, **venados** y **osos** cazados con éxito. Ese conteo es lo que desbloquea las compras exclusivas del menú, así que cada pieza suma aunque no la vendas.

Los primeros de cada especie desbloquean un logro que paga **5 monedas** cada uno: primer conejo, primer venado y primer oso.

## Burger Points por pieza

Cada animal cazado con éxito paga [Burger Points](sistema-de-burger-points.md), tanto si lo mataste de un tiro como si lo remataste:

| Animal | Burger Points |
|--------|---------------|
| Conejo | **+10 BP** |
| Venado | **+25 BP** |
| Oso negro | **+50 BP** |

## Despellejado

Acércate al cuerpo del animal muerto con un **cuchillo** equipado en la mano derecha y presiona **N** para empezar la faena. Verás el progreso hasta el 100%: con un cuchillo común tarda unos **100 segundos**, y los cuchillos de caza la acortan bastante.

El despellejado se cancela si te alejas del cuerpo, si subes a un vehículo, si guardas el cuchillo o si tu personaje deja de estar en pie. Al terminar, los recursos caen al suelo junto al animal y el cuerpo desaparece.

### Cuchillos de caza para donadores

Además del cuchillo común, hay tres cuchillos de caza que aceleran la faena y **multiplican los recursos** que sacas de cada animal. Se compran en el **menú de caza** con **monedas**:

| Cuchillo | Precio | Requisito | Tiempo de faena | Recursos por pieza | Daño cuerpo a cuerpo |
|----------|--------|-----------|-----------------|--------------------|----------------------|
| Cuchillo común | — | — | ~100 s | 1 unidad | — |
| **Hoja curva corta** | 30 monedas | 5 conejos | ~84 s | **3 unidades** | 10 HP |
| **Hoja fija** | 40 monedas | 10 conejos | ~67 s | **4 unidades** | 20 HP |
| **Destripador de gancho** | 50 monedas | 15 conejos | ~50 s | **5 unidades** | 30 HP |

El multiplicador se aplica a **cada** pieza que suelta el animal. Un venado despellejado con el destripador de gancho, por ejemplo, deja **20 piezas de carne** y **5 pieles** en lugar de 4 y 1.

## Rifles con mira telescópica para donadores

Los cazadores más constantes tienen acceso a la compra de **fusiles de francotirador** en el menú de caza. Lo más importante: estos rifles **no te los pueden robar** otros jugadores con un hurto.

| Rifle | Calibre | Precio | Requisito | Daño base | Cargador | Atraviesa chalecos |
|-------|---------|--------|-----------|-----------|----------|--------------------|
| **Ruger American** | .308 Winchester | 50 monedas | 50 venados | **25 HP** | 4 balas | Sí |
| **Remington 700P** | .30-06 Springfield | 75 monedas | 100 venados | **40 HP** | 4 balas | Sí |
| **Tikka T3x** | 6.5 Creedmoor | 100 monedas | 150 venados | **50 HP** | 3 balas | No |
| **Sako 85** | .300 Winchester Magnum | 125 monedas | 250 venados | **70 HP** | 3 balas | No |

Comprar un rifle aquí consume el **tiempo de espera de compra de armas**, que es común al menú de caza, a las armerías y al [mercado negro](sistema-de-mercado-negro.md): **1 semana**, o **3.5 días** si tienes Premium Gold o superior. Consulta el [sistema de armas](sistema-de-armas.md) para ver cómo funcionan el daño, los chalecos y la munición.

> ¿Los utilizarás para cazar al oso negro más grande de San Andreas o para defender tu barrio de los peores criminales?

## Precios de venta

En el menú de caza puedes vender las piezas que lleves en la **mano derecha**, de una en una:

| Pieza | Pago |
|-------|------|
| Conejo | **$1,000** |
| Piel de venado | **$5,000** |
| Piel de oso | **$50,000** |
| Carne de venado | **$500** |
| Carne de oso | **$1,000** |

Un venado despellejado con cuchillo común deja **$7,000** (4 carnes + 1 piel) y un oso **$52,000**. Con el destripador de gancho esas cifras se multiplican por cinco.

## Compras del menú de caza

| Artículo | Precio | Requisito |
|----------|--------|-----------|
| Trampa para osos | 1 moneda | 15 conejos cazados |
| Cuchillo de hoja curva corta | 30 monedas | 5 conejos |
| Cuchillo de hoja fija | 40 monedas | 10 conejos |
| Cuchillo destripador de gancho | 50 monedas | 15 conejos |
| Ruger American | 50 monedas | 50 venados |
| Remington 700P | 75 monedas | 100 venados |
| Tikka T3x | 100 monedas | 150 venados |
| Sako 85 | 125 monedas | 250 venados |
| Trofeo de cría de venado disecada | $25,000 del banco | 50 venados |
| Trofeo de cabeza de venado de pared | $50,000 del banco | 80 venados |

Los dos trofeos son piezas decorativas para tu propiedad y se pagan con **dinero del banco**, no en efectivo. Necesitas al menos una mano libre para recibirlos, y para comprar cualquier artículo debes tener la mano derecha vacía.

> ⭐ ¿Por qué las armas y cuchillos cuestan monedas? Porque son de **acceso privilegiado a los donadores del servidor**. No cualquiera podrá tener el mejor cuchillo ni un francotirador. Si eres ahorrador y has guardado monedas de las entregas regaladas, podrás comprar el equipo que quieras de igual forma.

## Consejos

- **Caza de noche**: hay hasta 5 animales activos a la vez frente a 3 de día, y los eventos de doble y triple experiencia son el mejor momento para salir al bosque.
- **Guíate por el oído**: un rugido a 200 metros significa que hay un oso en el sector, y eso son $52,000 esperándote.
- **Invierte en un cuchillo**: el destripador de gancho se paga solo con un par de venados y reduce a la mitad el tiempo que pasas expuesto en mitad del bosque.
- **No te precipites**: disparar de cerca o con el arma equivocada no hiere al animal, lo pierde. Es mejor rodear y tomar el ángulo con calma.
- **Lleva vehículo**: la carne y las pieles ocupan espacio, y el punto de venta está en Angel Pine, lejos de buena parte del coto.
- **Deja trampas para osos** en los sectores que sueles recorrer: es la única forma de que aparezcan osos, y a 1 moneda cada una son la inversión más rentable del menú.
