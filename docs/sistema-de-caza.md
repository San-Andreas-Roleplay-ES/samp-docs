# Sistema de caza

## Introducción

El sistema de caza está pensado para los personajes a los que les gusta el aire libre, la paciencia y el disparo bien medido. La caza deportiva está permitida en dos zonas: el **bosque de Whetstone** y **Flint County**, un territorio enorme de bosque, cerros y caminos rurales al suroeste del estado donde los animales aparecen repartidos de forma aleatoria. Hay **20 especies** de animales salvajes, desde conejos hasta osos negros y uapitíes, y las más raras son más difíciles de encontrar, de abatir y mucho más valiosas.

Con cualquier **escopeta**, **rifle de caza** o **fusil de francotirador** puedes salir a cazar, incluso si no tienes licencia de caza ni licencia de porte de armas. Solo tienes que ir al bosque, tener paciencia y acercarte con sigilo: los animales oyen y ven, y no esperan quietos a que les dispares.

Todo lo demás —vender las pieles y la carne, comprar cuchillos, rifles o trofeos— pasa por el **punto de caza de Angel Pine**, marcado en el mapa y señalizado en el lugar. Allí se centraliza la compra y venta de todo lo relacionado con la actividad.

> ⚠️ Cazar sin licencia ni permiso municipal se considera un **delito ambiental** y puede acarrear multas y penas de prisión. La **licencia de caza** no se compra en una oficina: la entrega en persona un **líder** en servicio de los **guardabosques**, del **sheriff** o del **LSPD**, y solo a quien ya tenga licencia de conducir y no tenga antecedentes penales. Si acumulas antecedentes, la licencia se revoca junto con las demás.

### Comandos

- /cazar — muestra la información general del sistema de caza.
- /menucaza — abre el menú de caza (solo en el punto de Angel Pine; si estás lejos, te marca el camino).

## Cómo funciona

1. Recorre las zonas permitidas buscando animales. No hay un lugar fijo: aparecen de forma aleatoria por todo el bosque, lejos de donde ya haya otro animal o algún jugador.
2. Escucha. Cada animal hace ruido cada minuto y ese sonido es tu mejor pista para ubicarlo.
3. Acércate con sigilo y desde atrás. Si el animal te oye o te ve, huye y la pieza se pierde.
4. Cuando lo tengas a tiro, apunta a la **cabeza** con un arma adecuada: es la única forma de abatirlo siempre de un disparo.
5. Si solo lo hieres, huirá dejando un rastro de sangre: síguelo y remátalo antes de que escape.
6. Acércate al cuerpo con un cuchillo en la mano derecha, presiona **N** y alterna izquierda y derecha para despellejarlo y quedarte con la piel y la carne.

Para aprovechar la jornada necesitas **espacio en el inventario** y, de preferencia, un **vehículo con un maletero grande**: las pieles y la carne pesan, y llevarlas hasta Angel Pine a pie es una odisea.

## Cantidad de animales

La cantidad de animales que pueden estar vivos a la vez en el mapa depende de si hay un evento de experiencia en curso:

| Situación | Animales vivos a la vez |
|-----------|-------------------------|
| **Normal** | hasta **12** |
| **Doble experiencia** | hasta **16** |
| **Triple experiencia** | hasta **18** |

El servidor revisa cada **15 minutos** si faltan animales y repuebla el bosque hasta ese tope. Un animal nuevo nunca aparece a menos de **250 metros** de otro animal ni de un jugador, así que conviene moverse y cubrir terreno en vez de quedarse plantado en un mismo claro.

## Animales

### Las 20 especies

Cada especie deja su propia piel y su propia carne. Según su rareza se agrupan en tres categorías, que marcan qué tan frecuente es, qué tan bien detecta y qué tan difícil es de abatir (más adelante verás el detalle):

| Rareza | Especies |
|--------|----------|
| **Común** | zorro gris, zorro rojo, lince rojo, mapache, coatí de nariz blanca, pavo salvaje, liebre de cola negra, conejo de matorral y conejo cola de algodón |
| **Intermedia** | ciervo mulo, ciervo de cola negra, antílope americano y coyote |
| **Rara** | uapití de Roosevelt, puma, cerdo salvaje, borrego cimarrón del desierto y los tres osos negros |

- **Ciervos y afines**: ciervo mulo, ciervo de cola negra, uapití de Roosevelt, antílope americano y borrego cimarrón del desierto.
- **Osos**: oso negro americano, oso negro de San Andreas y oso negro de Tierra Robada.
- **Depredadores**: puma, lince rojo, coyote, zorro gris y zorro rojo.
- **Otros**: cerdo salvaje, pavo salvaje, mapache, coatí de nariz blanca, liebre de cola negra, conejo de matorral y conejo cola de algodón.

### Los osos y la trampa

Los osos son los animales más valiosos y tienen una aparición **condicionada**: un oso solo llega a aparecer si hay una **trampa para osos** dejada en el suelo a menos de **300 metros** del punto donde le tocaba salir. La trampa se compra en el menú de caza; si no hay ninguna en el sector, ese animal se convierte en otra especie.

### El sonido de los animales

Cada animal hace ruido una vez por minuto, y el alcance depende de su tamaño: **50 metros** los más pequeños (conejos, liebre, zorros, mapache y coatí), **100 metros** los medianos (ciervos, antílope, borrego, coyote, puma, lince y pavo) y **200 metros** los grandes (osos, uapití y cerdo salvaje). De vez en cuando, además, el animal gira en el lugar y cambia hacia dónde mira.

## Sentidos de los animales

Los animales ya no esperan quietos. Cada uno **te oye** y **te ve**, y si lo hace huye para siempre. El mensaje en pantalla te dice si hiciste demasiado ruido o si te vio venir. Se te evalúa una vez por segundo mientras estás cerca, y también en el instante en que disparas.

**Oído.** Depende de cómo te muevas:

- Agachado haces menos ruido que caminando, y caminando menos que corriendo.
- Un **vehículo con el motor encendido** alerta al animal desde **30 metros**, sea cual sea la especie. Con el motor apagado cuenta como si fueras a pie, caminando o corriendo según la velocidad.

**Vista.** El animal solo ve en un **cono frontal de 120 grados** y necesita línea de visión libre: un cerro, un árbol grueso o una roca en medio te ocultan. Acércate por detrás y con cobertura. Agacharte también baja la altura de tu cabeza y te oculta mejor. Un vehículo con el motor encendido no se ve desde lejos: solo se oye.

Cuanto más rara es la especie, más lejos te detecta:

| Rareza | Oído agachado | Oído caminando | Oído corriendo | Vista de frente |
|--------|---------------|----------------|----------------|-----------------|
| **Común** | 8 m | 12 m | 25 m | 30 m |
| **Intermedia** | 10 m | 18 m | 35 m | 45 m |
| **Rara** | 12 m | 25 m | 45 m | 60 m |

## Puntería y disparos

Para que el disparo cuente como caza válida debe cumplir con todo esto:

- **Arma correcta**: solo **escopeta**, **rifle de caza** o **fusil de francotirador**, y en la **mano derecha**. Cualquier otra arma, o apuntar con la mano derecha vacía, **espanta al animal** y lo hace huir para siempre.
- **Distancia**: los impactos solo valen hasta **150 metros**, y el alcance real depende del arma (la escopeta llega a 40 metros; los rifles, a 100).
- **Animales heridos**: solo se rematan con ese mismo grupo de armas.

Ahora importa **dónde le pegas al animal**:

- **Tiro en la cabeza**: muerte instantánea, piel entera y **+1 de habilidad**. La cabeza está en la parte delantera del animal, hacia donde mira.
- **Tiro en el cuerpo**: puede matarlo o dejarlo herido. La probabilidad de matarlo depende de tu [habilidad de caza](#habilidad-de-cazador) y de la rareza de la especie. Además **daña la piel**: pierdes un 25% de la piel que obtengas, o un 40% si disparaste con escopeta. La carne no se ve afectada.

### Animales heridos

Un tiro al cuerpo que no mata deja al animal herido: **huye** hasta otro punto del bosque, a entre 60 y 180 metros según su rareza, de preferencia alejándose de ti, y deja un **rastro de sangre** que puedes seguir. Cuanto más rara es la especie, más lejos huye y menos tiempo tienes para rematarla:

| Rareza | Distancia de huida | Tiempo para rematarlo |
|--------|--------------------|-----------------------|
| **Común** | 60 a 100 m | 2 minutos y 30 segundos |
| **Intermedia** | 80 a 140 m | 2 minutos y 15 segundos |
| **Rara** | 100 a 180 m | 2 minutos |

Si no hay lugar donde huir, el animal cae herido en el mismo sitio. Un animal que no remates a tiempo desaparece. Un cuerpo sin despellejar también desaparece, a los **10 minutos**.

### Disparos que espantan

El estruendo de un disparo dentro de la zona de caza **espanta a todos los animales vivos que estén a 150 metros de ti**. Solo se salva el animal al que le aciertas. Por eso, un tiro fallado a lo lejos puede arruinar la jornada: antes de disparar, asegúrate de que puedes acertar.

## Habilidad de cazador

La caza no es solo "apuntar y disparar". Tiene progresión y premia a quienes realmente se dedican.

Consulta también la [guía de habilidades](sistema-de-habilidades.md) para ver cómo encaja la habilidad de caza con el resto de oficios.

- Solo ganas **+1 punto de habilidad** (hasta 100) cuando abates al animal con un **tiro limpio en la cabeza**.
- Rematar a un animal herido o matarlo de un tiro al cuerpo no da habilidad, aunque la pieza sí cuenta para tus estadísticas y tus Burger Points.
- La habilidad aumenta la probabilidad de matar con un **tiro al cuerpo**: parte de **25%** y suma **0,5%** por punto de habilidad, hasta **75%** con habilidad 100. Ese porcentaje se multiplica según la rareza de la especie:

| Rareza | Con habilidad 0 | Con habilidad 100 |
|--------|-----------------|-------------------|
| **Común** | 25% | 75% |
| **Intermedia** | 18% | 56% |
| **Rara** | 12% | 37% |

### Estadísticas del cazador

El menú de caza te muestra tu habilidad total y el conteo acumulado de cada especie cazada con éxito. Ese conteo es lo que desbloquea las compras exclusivas del menú: los trofeos piden cazar **esa misma especie** y el equipamiento pide una cantidad total de cazas de **cualquier especie**. Cada pieza suma aunque no la vendas.

Los primeros de cada grupo desbloquean un logro que paga **5 monedas** cada uno: primer conejo o liebre, primer ciervo (ciervo mulo, de cola negra o uapití) y primer oso.

## Burger Points por pieza

Cada animal cazado con éxito paga [Burger Points](sistema-de-burger-points.md), tanto si lo mataste de un tiro como si lo remataste. Dependen de la frecuencia con la que aparece la especie:

| Animal | Burger Points |
|--------|---------------|
| Zorros, lince rojo, mapache, coatí, pavo, liebre y conejos | **+10 BP** |
| Ciervo mulo, ciervo de cola negra, antílope americano, coyote, puma, cerdo salvaje y borrego cimarrón | **+25 BP** |
| Uapití y los tres osos negros | **+50 BP** |

## Despellejado

Acércate al cuerpo del animal muerto con un **cuchillo** en la mano derecha y presiona **N** para empezar la faena. Despellejar es un **minijuego**: alterna **izquierda y derecha** (las teclas de moverte a los lados) para ir cortando y verás el progreso hasta el 100%.

- Cada corte válido avanza la barra según tu cuchillo.
- **Repetir el mismo lado** es un **corte torpe**: no avanza y arruina un **5%** de la piel y la carne (hasta un máximo de **30%**).
- Si pasan **8 segundos** sin cortar, dejas la faena.
- Se cancela también si te alejas del cuerpo, subes a un vehículo, guardas el cuchillo o tu personaje deja de estar en pie.

Al terminar, la piel y la carne caen al suelo junto al animal y el cuerpo desaparece. Cada objeto agrupa hasta **25 unidades** (la carne se mide en kilos), así que una buena presa puede dejar varias bolsas. Las pieles y la carne se guardan y se apilan solas en tu inventario. Si dos personas quieren despellejar la misma presa, solo puede hacerlo una a la vez.

### Cuchillos de caza

Cualquier cuchillo sirve para despellejar, pero el cuchillo común rinde poco. Hay tres cuchillos de caza que aceleran la faena y mejoran la cantidad de piel y carne que obtienes. Se compran en el **menú de caza** con **monedas**:

| Cuchillo | Precio | Requisito | Cortes necesarios | Rendimiento | Daño cuerpo a cuerpo |
|----------|--------|-----------|-------------------|-------------|----------------------|
| Cuchillo común | — | — | 50 | **−25%** de piel y carne | — |
| **Hoja curva corta** | 30 monedas | 10 cazas | 34 | normal | 10 HP |
| **Hoja fija** | 40 monedas | 20 cazas | 25 | **+15%** | 20 HP |
| **Destripador de gancho** | 50 monedas | 30 cazas | 20 | **+30%** | 30 HP |

El rendimiento se aplica tanto a la piel como a la carne. Los cortes torpes y el daño de los disparos al cuerpo se descuentan de ese rendimiento, pero siempre obtienes al menos una unidad de cada cosa.

## Rifles con mira telescópica para donadores

Los cazadores más constantes tienen acceso a la compra de **fusiles de francotirador** en el menú de caza. Lo más importante: estos rifles **no te los pueden robar** otros jugadores con un hurto.

| Rifle | Calibre | Precio | Requisito | Daño base | Cargador | Atraviesa chalecos |
|-------|---------|--------|-----------|-----------|----------|--------------------|
| **Ruger American** | .308 Winchester | 50 monedas | 100 cazas | **25 HP** | 4 balas | Sí |
| **Remington 700P** | .30-06 Springfield | 75 monedas | 200 cazas | **40 HP** | 4 balas | Sí |
| **Tikka T3x** | 6.5 Creedmoor | 100 monedas | 300 cazas | **50 HP** | 3 balas | No |
| **Sako 85** | .300 Winchester Magnum | 125 monedas | 500 cazas | **70 HP** | 3 balas | No |

Las cazas que se piden son el total de animales abatidos, de cualquier especie.

Comprar un rifle aquí consume el **tiempo de espera de compra de armas**, que es común al menú de caza, a las armerías y al [mercado negro](sistema-de-mercado-negro.md): **1 semana**, o **3,5 días** si tienes Premium Gold o superior. Los cuchillos y la trampa no activan esa espera. Consulta el [sistema de armas](sistema-de-armas.md) para ver cómo funcionan el daño, los chalecos y la munición.

> ¿Los utilizarás para cazar al oso negro más grande de San Andreas o para defender tu barrio de los peores criminales?

## Precios de venta

En el menú de caza, las opciones **Vender pieles** y **Vender carne** te muestran el total de lo que llevas en **ambas manos** y lo venden de una vez. Cada especie tiene su propio precio: la piel se paga por **unidad** y la carne por **kilo**. Estos son los valores base, antes de los bonos y penalizaciones del despellejado:

| Especie | Piel obtenida (unidades) | Carne obtenida (kg) | Precio por piel | Precio por kilo de carne |
|---------|--------------------------|---------------------|-----------------|--------------------------|
| Ciervo mulo | 2 a 3 | 20 a 40 | $6.300 | $385 |
| Ciervo de cola negra | 2 a 3 | 15 a 32 | $5.400 | $385 |
| Uapití de Roosevelt | 5 a 7 | 70 a 100 | $17.100 | $385 |
| Antílope americano | 1 a 2 | 12 a 22 | $8.550 | $385 |
| Borrego cimarrón del desierto | 2 a 4 | 18 a 40 | $8.775 | $385 |
| Oso negro americano | 4 a 6 | 30 a 70 | $17.550 | $270 |
| Oso negro de San Andreas | 4 a 5 | 25 a 60 | $16.200 | $270 |
| Oso negro de Tierra Robada | 5 a 6 | 35 a 80 | $20.250 | $270 |
| Puma | 4 a 6 | 15 a 30 | $9.225 | $180 |
| Lince rojo | 1 a 2 | 3 a 6 | $13.050 | $180 |
| Coyote | 1 a 2 | 4 a 8 | $9.225 | $180 |
| Zorro gris | 1 | 1 a 3 | $9.225 | $180 |
| Zorro rojo | 1 a 2 | 2 a 3 | $7.200 | $180 |
| Mapache | 1 | 2 a 5 | $9.675 | $180 |
| Coatí de nariz blanca | 1 | 1 a 3 | $10.125 | $180 |
| Cerdo salvaje | 2 a 3 | 20 a 55 | $11.475 | $360 |
| Pavo salvaje | 1 | 3 a 7 | $9.675 | $540 |
| Liebre de cola negra | 1 | 1 a 2 | $7.425 | $675 |
| Conejo de matorral | 1 | 1 | $7.200 | $675 |
| Conejo cola de algodón | 1 | 1 | $6.750 | $675 |

Así, un conejo cola de algodón deja unos **$7.400**, un ciervo mulo entre **$20.000 y $34.000**, un oso negro americano entre **$78.000 y $124.000** y un uapití entre **$112.000 y $158.000**, según cuánto rinda la faena.

## Compras del menú de caza

El menú de caza tiene estas secciones: vender pieles, vender carne, equipamiento, trofeos de cabezas, trofeos de animal y estadísticas. Para comprar necesitas tener espacio para recibir el artículo.

### Equipamiento

| Artículo | Precio | Requisito |
|----------|--------|-----------|
| Trampa para osos | 1 moneda | 30 cazas |
| Cuchillo de hoja curva corta | 30 monedas | 10 cazas |
| Cuchillo de hoja fija | 40 monedas | 20 cazas |
| Cuchillo destripador de gancho | 50 monedas | 30 cazas |
| Ruger American | 50 monedas | 100 cazas |
| Remington 700P | 75 monedas | 200 cazas |
| Tikka T3x | 100 monedas | 300 cazas |
| Sako 85 | 125 monedas | 500 cazas |

> ⭐ ¿Por qué las armas y cuchillos cuestan monedas? Porque son de **acceso privilegiado a los donadores del servidor**. No cualquiera podrá tener el mejor cuchillo ni un francotirador. Si eres ahorrador y has guardado monedas de las entregas regaladas, podrás comprar el equipo que quieras de igual forma.

### Trofeos de cabeza y animales disecados

Hay **40 trofeos**: una cabeza para colgar en la pared y un animal disecado de cuerpo completo por cada especie. Se muestran en un catálogo visual: bajo cada trofeo, el contador sale en **verde** con el precio si ya lo desbloqueaste y en **rojo** con tus cazas de esa especie si todavía no.

Se desbloquean cazando **esa misma especie**: desde **1 caza** en las especies más raras (uapití y osos) hasta **20** en las más comunes para las cabezas, y el doble para los disecados. Se pagan con **dinero del banco**, no en efectivo, y necesitas que tu cuenta bancaria no esté bloqueada. Son **muebles**: llévalos a tu casa o negocio y colócalos con `/desempaquetarmueble`. Consulta la [guía de muebles](sistema-de-muebles.md) para saber cómo ubicarlos.

| Especie | Cabeza | Cazas | Animal disecado | Cazas |
|---------|--------|-------|-----------------|-------|
| Ciervo mulo | $36.000 | 5 | $72.000 | 10 |
| Ciervo de cola negra | $30.000 | 6 | $60.000 | 12 |
| Uapití de Roosevelt | $180.000 | 1 | $360.000 | 2 |
| Antílope americano | $26.000 | 6 | $51.000 | 12 |
| Borrego cimarrón del desierto | $50.000 | 2 | $100.000 | 4 |
| Oso negro americano | $135.000 | 1 | $270.000 | 2 |
| Oso negro de San Andreas | $112.000 | 1 | $225.000 | 2 |
| Oso negro de Tierra Robada | $169.000 | 1 | $338.000 | 2 |
| Puma | $68.000 | 3 | $135.000 | 6 |
| Lince rojo | $27.000 | 10 | $54.000 | 20 |
| Coyote | $20.000 | 8 | $40.000 | 16 |
| Zorro gris | $13.000 | 15 | $26.000 | 30 |
| Zorro rojo | $15.000 | 12 | $30.000 | 24 |
| Mapache | $14.000 | 12 | $28.000 | 24 |
| Coatí de nariz blanca | $14.000 | 12 | $28.000 | 24 |
| Cerdo salvaje | $56.000 | 2 | $112.000 | 4 |
| Pavo salvaje | $16.000 | 10 | $33.000 | 20 |
| Liebre de cola negra | $11.000 | 18 | $22.000 | 36 |
| Conejo de matorral | $11.000 | 18 | $21.000 | 36 |
| Conejo cola de algodón | $10.000 | 20 | $20.000 | 40 |

## Mascotas cazadoras

Tus [mascotas](sistema-de-mascotas.md) pueden ayudarte a encontrar presas con su habilidad de **Caza**: la mascota apunta hacia el animal salvaje vivo más cercano. Con más nivel apunta con más precisión, y los perros suman fuerza al cazar en jauría. Las especies intermedias exigen cierto nivel de Caza de la mascota, y las raras (osos y uapití, entre otras) un nivel todavía mayor. La habilidad de la mascota solo sube si **tú** abates la presa marcada dentro de los 5 minutos siguientes. La mascota solo señala: el disparo y la faena siguen siendo tuyos.

## Consejos

- **Guíate por el oído**: un rugido a 200 metros significa que hay un animal grande en el sector, y un oso o un uapití puede valer más de $100.000.
- **Apunta a la cabeza**: conserva toda la piel y es la única forma de subir tu habilidad. Un tiro al cuerpo daña la piel (más aún con escopeta) y puede dejar al animal herido.
- **Acércate agachado y por detrás**: el cono de visión es frontal y los animales raros te detectan desde más lejos. Usa cerros y árboles para cubrirte y deja el vehículo lejos: un motor encendido los alerta desde 30 metros.
- **Piensa antes de disparar**: cada disparo en la zona de caza espanta a los demás animales en 150 metros. Si fallas, perderás la presa y probablemente las vecinas.
- **Sigue el rastro**: un animal herido deja sangre en el suelo y tienes un par de minutos para encontrarlo y rematarlo.
- **Invierte en un cuchillo**: el destripador de gancho corta en 20 movimientos en vez de 50 y rinde un 30% más en lugar de perder un 25%, así que se paga solo con un par de presas grandes.
- **No repitas el lado**: alterna izquierda y derecha al despellejar; cada corte torpe te cuesta un 5% de la piel y la carne.
- **Lleva vehículo**: la carne y las pieles ocupan espacio, y el punto de venta está en Angel Pine, lejos de buena parte del coto.
- **Deja trampas para osos** en los sectores que sueles recorrer: es la única forma de que aparezcan osos, y a 1 moneda cada una son la inversión más rentable del menú.
