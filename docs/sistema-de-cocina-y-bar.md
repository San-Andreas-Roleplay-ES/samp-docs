# Sistema de cocina y bar

## Introducción

Cualquier propiedad con refrigerador puede convertirse en cocina o en bar. Con lo que guardas en el refrigerador preparas platos y tragos que no se consiguen en ninguna tienda: los platos solo existen si alguien los cocina, y los tragos de coctelería solo si alguien los sirve. Todo se hace desde un menú visual con vista previa en 3D de cada plato y una ficha que te dice qué ingredientes tienes y cuáles te faltan.

Hay dos libros de recetas. **`/cocinar`** abre el recetario con **137 recetas** y **`/bartender`** abre la carta del bar con **47 bebidas**. Cada libro tiene su propia habilidad, de 0 a 100: **cocina** y **bartender**. Se ganan preparando, y las recetas difíciles se desbloquean al subirla.

La preparación no necesita utensilios, mesa ni recipientes: solo ingredientes en el refrigerador, las manos libres y estar cerca. Para conseguir los ingredientes revisa también la [caza](sistema-de-caza.md), la [pesca](sistema-de-pesca.md) y los [cultivos](sistema-de-cultivos.md), que abastecen buena parte de las recetas.

### Comandos

- `/cocinar` — abre o cierra el recetario de cocina.
- `/bartender` — abre o cierra la carta del bar. `/bar` sin más es solo la animación de barra.
- `/refrigerador` (alias `/refri`) — abre el refrigerador. Con `/refrigerador guardar` metes lo que llevas en la mano derecha y con `/refrigerador sacar [ranura]` sacas un objeto.
- `/sacarunidades [cantidad]` — separa unidades de lo que llevas en la mano derecha y las deja en la izquierda. Alias: `/sacarunidad`, `/sacaru`, `/cogerunidad`, `/extraerunidad`.
- `/meterunidades [cantidad]` — pasa unidades de la mano derecha a un objeto igual en la mano izquierda. Alias: `/meterunidad`, `/meteru`.
- `/habilidades` — muestra tus puntos de cocina y de bartender.

## Dónde y cuándo se puede preparar

Para abrir un libro y preparar algo debes cumplir todo esto:

| Requisito | Detalle |
|-----------|---------|
| Lugar | Dentro de una propiedad que tenga refrigerador, a **10 metros o menos** de él |
| Estado | Estar vivo y sin esposas |
| Actividades | No estar en una partida de paintball, ni jugando o apostando en un casino o en el hipódromo |
| Inventario | No tenerlo bloqueado por la edición de accesorios |
| Propiedades de facción | Solo el líder de la facción puede usar el refrigerador, y por tanto cocinar |
| Menús | Tener cerrados el teléfono, el ordenador policial y otros menús |
| Manos | **Una mano libre** para platos o bebidas normales y **las dos manos libres** para los platos grandes (ollas, pizzas y otros que se llevan con ambas manos) |
| Espera | **2 segundos** entre una preparación y la siguiente |

Los ingredientes se toman del refrigerador y se descuentan al preparar. Cuentan solo los que están guardados directamente en él, no los que estén dentro de una bolsa o un paquete. El plato o el trago queda en tus manos y tu personaje lo anuncia con un `/ame`.

> Si el refrigerador aún no ha cargado, el menú te pide intentarlo de nuevo en un momento.

## El refrigerador

El refrigerador de una propiedad tiene **128 espacios**. Al abrirlo, la lista se muestra en páginas y, si está vacío, te lo avisa. Los ingredientes iguales se **apilan** al guardarlos, así que un paquete de huevos o de harina ocupa un solo espacio.

Con `/sacarunidades` puedes separar unidades de un paquete de ingredientes y con `/meterunidades` volver a juntarlas. Úsalos con el paquete en la mano derecha y la izquierda libre (o, para juntar, con un objeto igual en la izquierda).

## El menú

Al abrir `/cocinar` o `/bartender` ves el recetario con estas herramientas:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/cocina-recetario.jpg" alt="Recetario de /cocinar con las recetas y sus ingredientes" width="1600" height="959">

- **Categorías** a un lado, cada una con su cantidad de recetas.
- **Puedo preparar**, un filtro que muestra solo lo que ya puedes hacer con tu habilidad y con lo que hay en el refrigerador. Si tienes algo listo, el menú abre directamente en ese filtro.
- Cada tarjeta muestra el nivel de la receta y, si te falta algo, cuántos ingredientes faltan.
- La **ficha de la receta** enseña la vista previa del plato, cuántas porciones rinde, si se lleva en una mano o con las dos, el nivel que exige y la lista de ingredientes: en verde los que tienes y en rojo los que faltan.
- Las pestañas **COCINA** y **BAR** cambian entre los dos libros.

Las recetas que exigen un nivel superior al tuyo aparecen bloqueadas hasta que subas la habilidad.

## Cocina

El recetario tiene **137 recetas en 10 categorías**:

| Categoría | Recetas | Niveles |
|-----------|---------|---------|
| Caza | 50 | 10 a 70 |
| Carnes | 15 | 15 a 60 |
| Pescados | 7 | 10 a 60 |
| Pastas | 9 | 15 a 75 |
| Pizzas | 10 | 15 a 75 |
| Hamburguesas | 12 | 15 a 75 |
| Sopas y vegano | 8 | 0 a 75 |
| Clásicos | 10 | 15 a 50 |
| Acompañamientos | 8 | 0 a 50 |
| Postres | 8 | 0 a 30 |

El nivel que pide cada receta depende de cuántos ingredientes lleva: las más simples (papas fritas, mazorca asada, copa de frutas o crema de calabaza) están disponibles desde el principio, y las más complejas (lasaña, pizza meat lovers, hamburguesa triple o minestrone) piden **nivel 75**. Las recetas de caza o de mariscos piden unos 10 niveles más que una de ingredientes parecidos, y las **ollas** (estofados y guisos grandes) otros 10 más.

### Ingredientes

Las recetas aprovechan casi todo lo que ya existe en el servidor:

- **Cosechas**: las 25 hortalizas, frutas y hierbas de los [cultivos](sistema-de-cultivos.md).
- **Carne de caza**: oso, venado, alce, borrego, conejo, coyote y demás piezas de la [caza](sistema-de-caza.md).
- **Pescado y mariscos**: la captura de la [pesca](sistema-de-pesca.md), con langosta, camarones, pulpo, cangrejo y calamar.
- **Carne de los negocios**: bistecs y cortes de carne.
- **Leche, fruta y jamón** de los negocios de comida.
- **12 ingredientes básicos** que los negocios de comida pueden sumar a su stock: huevos, huevo suelto, harina, carne de vaca, carne de cerdo, pollo crudo, arroz, pasta seca, queso, aceite, azúcar, y sal y pimienta.

Los ingredientes básicos se compran en paquetes y se apilan en el refrigerador:

| Ingrediente | Unidades por paquete |
|-------------|----------------------|
| Huevos | 12 |
| Huevo suelto | 1 |
| Harina | 10 |
| Carne de vaca | 4 |
| Carne de cerdo | 4 |
| Pollo crudo | 4 |
| Arroz | 10 |
| Pasta seca | 8 |
| Queso | 8 |
| Aceite | 10 |
| Azúcar | 10 |
| Sal y pimienta | 20 |

Muchas recetas aceptan varias alternativas para un mismo ingrediente (por ejemplo, cualquier carne de caza de la misma familia o cualquier marca de cerveza), y el menú usa lo que haya en el refrigerador. El precio de cada ingrediente lo fija el negocio que lo vende.

### Los platos

- Los platos **solo se consiguen cocinando**: ninguna tienda los vende y la casa de empeños no los compra, tampoco las bebidas preparadas.
- **Sacian más cuanto más difícil es la receta.**
- Cada plato rinde varias porciones; la ficha de la receta indica cuántas. Las **ollas rinden 24 potes de sopa**, que sacas uno a uno con `/sacarunidades`.
- Los platos grandes (ollas, pizzas y otros) se llevan con las dos manos.

## Bar

La carta tiene **47 bebidas en 5 categorías**, siempre servidas en vaso, copa, taza o jarra:

| Categoría | Bebidas | Niveles |
|-----------|---------|---------|
| Vasos y copas | 10 | 0 a 10 |
| Cócteles | 26 | 10 a 60 |
| Shots | 2 | 0 |
| Sin alcohol | 7 | 0 a 10 |
| Cafés | 2 | 10 y 25 |

Los **vasos básicos** (cerveza, vino, ron, whiskey, vodka, champagne, jugos y leche) y los **shots** son de **nivel 0**. El resto pide de **nivel 5 a 60** según sus ingredientes, y el Long Island Iced Tea es el más difícil de todos.

Entre los tragos hay jarra de cerveza negra, copa de vino blanco, cuba libre, mojito, martini, margarita, piña colada, blue lagoon, cosmopolitan, tequila sunrise, gin tonic, café irlandés, old fashioned, manhattan, moscow mule, whiskey sour, bloody mary, screwdriver, mimosa, negroni, spritz, daiquiri de frutilla, mai tai, white russian, espresso martini, mint julep, paloma, shot de tequila y de whiskey, champagne rosado o con hielo, y vasos con agua y con agua con gas.

### Botellas y medidas

- Cada **botella rinde 12 medidas**: un vaso servido gasta **1** medida y un cóctel gasta **2** medidas del licor principal. Las botellas se guardan en el refrigerador como cualquier ingrediente.
- También puedes servir a mano: con una botella en la mano derecha y la izquierda libre, `/sacarunidades` saca un vaso o una copa lista para beber y gasta una medida.
- Existe una **botella de agua con gas**: el agua normal lleva la tapa roja y la gasificada la tapa azul.
- Para decorar tu bar existen **13 vasos y copas decorativos** en la categoría Cocina del catálogo de muebles premium (consulta el [sistema de muebles](sistema-de-muebles.md)).

## Habilidades de cocina y bartender

Cada libro tiene su propia habilidad, visible en `/habilidades`. No se reparte con puntos de experiencia: **solo se gana preparando**.

| Qué ocurre | Resultado |
|------------|-----------|
| Preparas una receta de tu nivel, hasta 15 niveles por debajo del que tienes | **+2** puntos |
| Preparas una receta más fácil que eso | **+1** punto |
| Ya tienes 100 | No sube más |

Al subir se muestra el progreso en pantalla y, cuando tu habilidad desbloquea recetas nuevas, el juego te avisa cuántas.

Rangos de nivel de cada libro:

| Libro | Nivel de entrada | Nivel máximo exigido |
|-------|------------------|----------------------|
| Cocina | 0 | 75 |
| Bartender | 0 | 60 |

## Consejos

- **Empieza por lo simple.** Papas fritas, mazorca asada, copa de frutas o un vaso de cerveza no piden nivel y ya suman habilidad.
- **Prepara cerca de tu nivel.** Cada preparación de tu rango da el doble de puntos que una receta muy fácil.
- **Usa el filtro Puedo preparar** para ver qué puedes hacer con lo que hay en el refrigerador, sin ir receta por receta.
- **Guarda cosechas, carne de caza y pescado en el refrigerador.** Un solo viaje de caza o pesca alimenta varias recetas.
- **Compra ingredientes por paquetes y apílalos.** Ahorran espacio en un refrigerador de 128 ranuras.
- **En el bar, rinde las botellas.** Una botella da 12 vasos o 6 cócteles, así que conviene ir por los vasos simples mientras subes habilidad.
- **Cocina con las manos libres.** Un plato grande exige las dos manos y no puedes empezar con un objeto pesado en ellas.
- **Revisa el refrigerador de una propiedad de facción antes de contar con él.** Allí solo el líder puede sacar objetos y, por lo tanto, cocinar.

Para más detalle sobre cómo conseguir ingredientes y sobre el resto de habilidades del personaje, consulta el [sistema de habilidades](sistema-de-habilidades.md) y el [sistema de propiedades](sistema-de-propiedades.md).
