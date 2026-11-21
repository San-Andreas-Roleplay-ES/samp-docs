# Sistema de basureros

## Introducción

Los **basureros** son los contenedores metálicos repartidos por las calles de San Andreas. Hay más de **260 contenedores** colocados a mano por el equipo de mapeo, siempre en el exterior: callejones traseros de negocios, patios de bloques de apartamentos, aparcamientos, zonas industriales y esquinas de los barrios. Todos son accesibles para cualquier personaje, sin permisos ni requisitos. Los contenedores de la isla de Santa Catalina se pueden revisar igual, pero no cuentan para el trabajo de recolector (ver [Santa Catalina](santa-catalina.md)).

Un basurero cumple tres funciones a la vez. Primero, es un **punto de saqueo**: la ciudad va tirando cosas dentro y tú puedes rebuscar a ver qué encuentras, desde comida a medio comer hasta un fajo de billetes o un arma. Segundo, es un **escondite público**: puedes meter objetos de tu inventario y dejarlos ahí, con el riesgo de que otro los saque, de que un recolector los tire o de que el reinicio diario del servidor los borre. Y tercero, es el destino natural de la basura de los negocios, que los recolectores vacían para cobrar (ver [Sistema de basura](sistema-de-basura.md)).

Rebuscar en un contenedor tiene consecuencias: sales **apestando a basura** durante horas y todo el mundo a tu alrededor se entera. Es el precio de conseguir cosas gratis.

### Comandos

- /basurero — abre el contenedor que tienes al lado y muestra lo que hay dentro.
- /basurero sacar [ranura] — saca a tus manos el objeto de esa ranura.
- /basurero meter — mete en el contenedor el objeto que llevas en la mano derecha (también funciona `/basurero guardar`).
- /basurero limpiar — vacía el contenedor y genera una bolsa de basura. Solo para recolectores en servicio.

## Cómo revisar un basurero

Acércate a **menos de 2,5 metros** del contenedor, **bájate del vehículo** y escribe `/basurero`. Se abre una lista con todo lo que hay dentro, ordenado por ranuras, y el juego te dice además **cuántas unidades de basura** acumula ese contenedor.

Desde esa lista puedes seleccionar directamente un objeto para sacarlo, o usar `/basurero sacar [ranura]` con el número que aparece junto a cada línea. Para sacar algo necesitas **al menos una mano libre**; si llevas un objeto pesado en cualquiera de las dos manos, no podrás. Los objetos salen directamente a tu mano derecha o, si está ocupada, a la izquierda.

Cada vez que sacas algo, el contenedor pierde **1 unidad de basura**.

Los personajes muertos o heridos de gravedad no pueden meter ni sacar nada.

### Burger Points

La **primera vez** que alguien revisa un basurero concreto desde que se llenó, esa persona gana **1 Burger Point**. Solo lo cobra el primero: a partir de ahí el contenedor queda marcado como ya revisado y no vuelve a pagar hasta que un recolector lo vacíe o el servidor se reinicie. Más detalles en [Sistema de Burger Points](sistema-de-burger-points.md).

## Qué puedes encontrar

Cuando un basurero se repone, genera **5 objetos** sorteados por categorías. Cada objeto se sortea de forma independiente con estas probabilidades:

| Categoría | Probabilidad | Qué sale | Cantidad |
| --- | --- | --- | --- |
| Comida | **35,6 %** | Hamburguesa, sándwich, hotdog, nuggets de pollo, rebanada de pizza, taco, wrap de pollo, paquete de snacks, ramen, pan, manzana, manzana verde, banana y naranja | 1 a 3 unidades |
| Bebida | **35,6 %** | Botella de agua, café, lata de Sprunk, lata de ECola, lata de ECola Light, bebida energética, cerveza (Pissh, Pisswasser, Stronzo y Benedict) y cajas de jugo de naranja, de jugo de manzana y de leche | 1 a 3 unidades |
| Droga | **5 %** | Marihuana, paracetamol, ibuprofeno, alprazolam, codeína, LSD y hongos | 1 a 3 gramos |
| Dinero | **12 %** | Un fajo de billetes | **$100 a $5.000** |
| Arma blanca | **11,5 %** | Cuchillo, bate, pala, palo de golf y bastón | 1 unidad |
| Pistola | **0,3 %** | Una pistola barata: Hi-Point C9, Bersa Firestorm o Taurus G2C | **1 a 7 balas** dentro |

Dentro de cada categoría no todo es igual de común. Entre las comidas son más habituales la hamburguesa, el sándwich y la manzana; entre las bebidas, la botella de agua y la cerveza Pissh; y entre las drogas, la marihuana es con diferencia la más frecuente, seguida de los medicamentos de farmacia. Los hongos y el LSD casi nunca salen.

La pistola es el premio raro del sistema: solo aparece en **3 de cada 1.000** objetos generados, y llega prácticamente vacía de munición.

### Estado de lo que encuentras

Nada de lo que sale de un basurero está en perfecto estado, porque lleva tiempo tirado:

| Categoría | Estado en que sale |
| --- | --- |
| Comida y bebida | Calidad del **40 % al 90 %** |
| Droga | Fuerza del **30 % al 80 %** |
| Arma blanca | Estado del **30 % al 90 %** |
| Pistola 9mm | Estado del **20 % al 70 %** |

Los fajos de billetes no se estropean: el dinero vale lo que dice.

### Qué nunca aparece

El saqueo no sirve como atajo para conseguir equipo especializado. Solo pueden salir los objetos de la tabla anterior, así que **nunca** encontrarás:

- **Equipo de caza**: rifles, cuchillos de despiece, trampas, pieles ni carne. Eso se consigue únicamente cazando (ver [Sistema de caza](sistema-de-caza.md)).
- **Drogas fuertes**: cocaína, crack, metanfetamina, heroína ni MDMA.
- **Armas de fuego que no sean esas tres pistolas**: escopetas, subfusiles, rifles y fusiles de asalto nunca salen de un contenedor. Para eso está el mercado negro (ver [Sistema de mercado negro](sistema-de-mercado-negro.md)).
- **Objetos nuevos o exclusivos**: máscaras, ropa, accesorios, herramientas ni objetos de eventos.

Tampoco puedes **meter** en un contenedor un objeto de facción ni un cadáver embolsado (ver [Sistema de cadáveres](sistema-de-cadaveres.md)).

## Cuándo se rellenan

Un contenedor se repone cuando tiene **menos de 5 objetos** dentro y se da una de estas dos situaciones: el servidor acaba de arrancar o un recolector lo acaba de limpiar. Si se cumple, se generan de golpe **5 objetos nuevos**.

Esto significa, en la práctica:

- En el **reinicio diario del servidor**, todos los basureros se vacían de lo que hubiera dentro, incluido lo que dejaron los jugadores, y al arrancar se rellenan con 5 objetos nuevos.
- Cuando un recolector limpia un contenedor, este vuelve a llenarse **15 minutos después**, siempre que en ese tiempo nadie haya dejado dentro 5 objetos o más.
- Si vacías un contenedor entre varios jugadores, **no vuelve a llenarse solo** hasta el siguiente reinicio.
- Tras una limpieza, un contenedor al que otros jugadores le hayan dejado 5 objetos o más **no se repone**, porque ya supera el mínimo de 5.

La **basura acumulada** funciona aparte de los objetos. Cada **15 minutos**, los contenedores con menos de **25 unidades** reciben entre **1 y 5 unidades** más, simulando a los vecinos que van tirando bolsas. Además, al arrancar el servidor cada contenedor suma también entre **1 y 5 unidades** de partida. El tope de basura que admite un contenedor es de **100 unidades**; con 100 unidades o más se considera colapsado y no admite que metas ningún objeto ni bolsa.

### Qué pasa cuando lo limpia un recolector

Un **recolector de basura en servicio** puede escribir `/basurero limpiar` junto al contenedor, a pie, siempre que quede algo de basura dentro. El recolector saca una **bolsa de basura** que pesa tantos kilos como unidades tuviera acumuladas el contenedor, y a cambio el contenedor queda **completamente vacío**:

- La basura acumulada baja a **0**.
- **Todos los objetos que hubiera dentro se destruyen**, incluidos los que otros jugadores hubieran escondido ahí.
- La marca de "ya revisado" se borra, así que el siguiente jugador que lo abra vuelve a cobrar su Burger Point.

Quince minutos después de la limpieza, el contenedor genera 5 objetos nuevos si sigue con menos de 5 dentro.

## Usar el basurero como escondite

Con `/basurero meter` dejas dentro del contenedor el objeto que lleves en la **mano derecha**. Cada contenedor admite hasta **128 objetos distintos**, y el objeto queda ahí aunque cierres sesión, pero **solo hasta el siguiente reinicio diario del servidor**, que vacía todos los basureros.

Es la forma más rápida de deshacerte de algo comprometedor sin dejarlo tirado en la calle, pero tiene cuatro riesgos claros:

1. **Cualquiera puede abrirlo.** No hay llave ni propiedad; el primero que pase y escriba `/basurero` ve todo lo que guardaste.
2. **Un recolector puede destruirlo todo.** Si limpia el contenedor, tu objeto desaparece sin aviso.
3. **El reinicio diario del servidor lo borra.** No sirve para guardar nada a largo plazo.
4. **No puedes meter objetos de facción** ni cadáveres.

Si lo que metes es una **bolsa de basura**, no ocupa ranura: sus kilos se suman directamente a la basura acumulada del contenedor. Mientras el contenedor tenga 100 unidades o más, no admite nada.

## Oler a basura

Revisar un basurero **te deja apestando**. El olor arranca en el momento en que abres el contenedor y dura **8 horas reales**. Es exactamente el mismo efecto que sufren los recolectores al cargar bolsas en el camión.

Mientras dure:

- Cada minuto, los que estén cerca ven un mensaje de entorno indicando que **apestas a basura**.
- El estado aparece listado cuando alguien examina tu personaje, igual que los síntomas de las drogas o el olor a pescado.

Para quitártelo de encima tienes dos opciones:

- **Rociarte un perfume o desodorante**: elimina el olor en el acto y además deja tu propio aroma, que se lee en tu descripción.
- **Esperar** a que pasen las 8 horas, o al reinicio diario del servidor: cada día los perfumes y los olores a basura y a pescado se reinician para todos los personajes.

> Rebuscar en varios contenedores seguidos no acumula olor: cada revisión reinicia el contador de 8 horas desde cero.

## Consejos

- Revisa **contenedores que nadie haya tocado**: son los que aún conservan sus 5 objetos y los que pagan el Burger Point.
- Si vas a rebuscar, hazlo **antes de una sesión de rol tranquila**, no antes de una cita o una reunión formal: apestar a basura durante 8 horas se nota y otros jugadores lo van a usar en tu contra.
- Lleva siempre un **perfume encima** si haces rutas largas de basureros. Es la única forma de cortar el olor al instante.
- Ve con las **manos vacías**. Con un objeto pesado en la mano no podrás sacar nada.
- La comida y bebida que salen vienen a media calidad, pero son gratis: para un personaje sin dinero, los contenedores son una fuente de sustento perfectamente válida. Casi siete de cada diez objetos son comida o bebida, y un fajo de billetes aparece más o menos una de cada ocho veces.
- Si guardas algo en un contenedor, **recuérdalo**: un recolector puede pasar en cualquier momento y borrarlo todo de un solo comando, y el reinicio diario lo borra igualmente.
