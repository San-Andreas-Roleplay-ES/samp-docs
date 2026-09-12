# Sistema de basureros

## Introducción

Los **basureros** son los contenedores metálicos repartidos por las calles de San Andreas. Hay más de **260 contenedores** colocados a mano por el equipo de mapeo, siempre en el exterior: callejones traseros de negocios, patios de bloques de apartamentos, aparcamientos, zonas industriales y esquinas de los barrios. Todos son accesibles para cualquier personaje, sin permisos ni requisitos.

Un basurero cumple tres funciones a la vez. Primero, es un **punto de saqueo**: la ciudad va tirando cosas dentro y tú puedes rebuscar a ver qué encuentras, desde comida a medio comer hasta un fajo de billetes o un arma. Segundo, es un **escondite público**: puedes meter objetos de tu inventario y dejarlos ahí, con el riesgo de que otro los saque o de que un recolector los tire. Y tercero, es el destino natural de la basura de los negocios, que los recolectores vacían para cobrar (ver [Sistema de basura](sistema-de-basura.md)).

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

La **primera vez** que alguien revisa un basurero concreto desde que se llenó, esa persona gana **1 Burger Point**. Solo lo cobra el primero: a partir de ahí el contenedor queda marcado como ya revisado y no vuelve a pagar hasta que un recolector lo vacíe. Más detalles en [Sistema de Burger Points](sistema-de-burger-points.md).

## Qué puedes encontrar

Cuando un basurero se repone, genera **5 objetos** sorteados por categorías. Cada objeto se sortea de forma independiente con estas probabilidades:

| Categoría | Probabilidad | Qué sale | Cantidad |
| --- | --- | --- | --- |
| Comida | **30,5 %** | Cualquier alimento del juego: hamburguesas, tacos, pizza, donas, fruta, pan, pescado… | 1 a 3 unidades |
| Bebida | **30,5 %** | Cerveza, vino, ron, whisky, vodka, agua, café, jugos, leche, Sprunk, bebidas energéticas… | 1 a 3 unidades |
| Droga | **15 %** | Desde marihuana, cocaína, crack, MDMA o heroína hasta medicamentos de farmacia (ibuprofeno, amoxicilina, paracetamol, alprazolam…) | 1 a 3 gramos |
| Dinero | **12 %** | Un fajo de billetes | **$100 a $5.000** |
| Arma blanca | **11,5 %** | Nudillos, palo de golf, porra, cuchillo, bate, pala, bastón, spray, extintor, cámara y algún juguete adulto | 1 unidad |
| Pistola 9mm | **0,5 %** | Una pistola de 9 milímetros de cualquier modelo (Taurus, Beretta, CZ75B, Hi-Point, Ruger…) | **1 a 7 balas** dentro |

La pistola es el premio raro del sistema: solo aparece en **5 de cada 1.000** objetos generados, y llega prácticamente vacía de munición.

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

El saqueo no sirve como atajo para conseguir equipo especializado. Quedan **excluidos por completo**:

- **Todo el equipo de caza**: rifles de caza, cuchillos de despiece, trampas para osos, pieles y carne de venado o de oso, conejos, crías y cabezas de venado, carne podrida. Eso se consigue únicamente cazando (ver [Sistema de caza](sistema-de-caza.md)).
- **Todo el armamento de la purga**: las armas marcadas con la **(P)** que solo existen durante ese evento.
- **Armas de fuego que no sean pistolas 9mm**: escopetas, subfusiles, rifles y fusiles de asalto nunca salen de un contenedor. Para eso está el mercado negro (ver [Sistema de mercado negro](sistema-de-mercado-negro.md)).

Tampoco entra nada que sea **objeto de facción**. Y aunque no aparece por generación, conviene saberlo: **no puedes meter un cadáver embolsado** dentro de un contenedor (ver [Sistema de cadáveres](sistema-de-cadaveres.md)).

## Cuándo se rellenan

Un contenedor se repone cuando cumple dos condiciones a la vez: que su contenido **se haya cargado** (lo que ocurre al arrancar el servidor) y que tenga **menos de 5 objetos** dentro. Si se cumple, se generan de golpe **5 objetos nuevos**.

Esto significa, en la práctica:

- Al **reiniciar el servidor**, todos los basureros que quedaron casi vacíos se rellenan.
- Si vacías un contenedor entre varios jugadores, **no vuelve a llenarse solo** durante esa sesión.
- Un contenedor lleno de objetos que dejaron otros jugadores **no se repone**, porque ya supera el mínimo de 5.

La **basura acumulada** funciona aparte de los objetos. Cada **15 minutos**, los contenedores con menos de **25 unidades** reciben entre **1 y 5 unidades** más, simulando a los vecinos que van tirando bolsas. Además, al arrancar el servidor cada contenedor suma también entre **1 y 5 unidades** de partida. El tope de basura que admite un contenedor es de **100 unidades**; pasado ese punto se considera colapsado y no acepta más bolsas.

### Qué pasa cuando lo limpia un recolector

Un **recolector de basura en servicio** puede escribir `/basurero limpiar` junto al contenedor, a pie, siempre que quede algo de basura dentro. El recolector saca una **bolsa de basura** que pesa tantos kilos como unidades tuviera acumuladas el contenedor, y a cambio el contenedor queda **completamente vacío**:

- La basura acumulada baja a **0**.
- **Todos los objetos que hubiera dentro se destruyen**, incluidos los que otros jugadores hubieran escondido ahí.
- La marca de "ya revisado" se borra, así que el siguiente jugador que lo abra vuelve a cobrar su Burger Point.

Ese vaciado deja el contenedor por debajo del mínimo de 5 objetos, de modo que quedará listo para reponerse en el siguiente arranque del servidor.

## Usar el basurero como escondite

Con `/basurero meter` dejas dentro del contenedor el objeto que lleves en la **mano derecha**. Cada contenedor admite hasta **128 objetos distintos**, y el objeto queda ahí de forma permanente: sigue estando cuando cierres sesión e incluso tras un reinicio.

Es la forma más rápida de deshacerte de algo comprometedor sin dejarlo tirado en la calle, pero tiene tres riesgos claros:

1. **Cualquiera puede abrirlo.** No hay llave ni propiedad; el primero que pase y escriba `/basurero` ve todo lo que guardaste.
2. **Un recolector puede destruirlo todo.** Si limpia el contenedor, tu objeto desaparece sin aviso.
3. **No puedes meter objetos de facción** ni cadáveres.

Si lo que metes es una **bolsa de basura**, no ocupa ranura: sus kilos se suman directamente a la basura acumulada del contenedor, hasta el tope de 100.

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
- La comida y bebida que salen vienen a media calidad, pero son gratis: para un personaje sin dinero, los contenedores son una fuente de sustento perfectamente válida.
- Si guardas algo en un contenedor, **recuérdalo**: un recolector puede pasar en cualquier momento y borrarlo todo de un solo comando.
