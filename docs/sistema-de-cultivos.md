# Sistema de cultivos

## Introducción

Además de las plantaciones de droga, en San Andreas puedes dedicarte a la agricultura legal. Hay **25 hortalizas y frutas** que se siembran al aire libre, se cuidan hasta que maduran y se venden en los puntos agrícolas. No exige facción, licencia ni habilidad mínima: basta con semillas, un saco de abono y paciencia.

Cada cultivo tiene su propio ritmo y sus propias exigencias. Los rápidos se cosechan en poco más de un día y pagan poco; los lentos tardan hasta seis días, pero una cosecha completa puede valer más de $6.000. Todo lo que cultivas crece por tiempo real, aunque no estés conectado, así que lo importante es dejar la planta bien cuidada antes de irte.

El oficio se apoya en una habilidad propia, **Granjero**, que sube mientras cultivas y vendes. Para plantar marihuana y otras plantas ilegales, consulta el [sistema de plantaciones de marihuana](sistema-de-plantaciones-de-marihuana.md): usa los mismos comandos, pero tiene reglas distintas.

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/cultivos-granja.jpg" alt="Granja con hileras de cultivos legales: calabazas, lechugas y tomates" width="1600" height="900">

### Comandos

- /plantacion crear — siembra el sobre de semillas que llevas en la mano derecha. Alias: `/planta`, `/plantación`.
- /plantacion cuidar — riega la planta más cercana (con botella de agua o regadera) o le echa abono (con un saco de abono).
- /plantacion mejorar — aplica fertilizante a la planta más cercana.
- /plantacion examinar — muestra el estado de la planta más cercana.
- /plantacion cosechar — recoge la cosecha de la planta más cercana.
- /plantacion eliminar — descarta la planta más cercana.
- /llenaragua — rellena la botella de agua o la regadera que llevas en la mano derecha. Solo funciona dentro de una propiedad.
- /comprarsemillas — abre la tienda de semillas del punto agrícola.
- /vendercosecha — vende tus cosechas en el punto agrícola. Alias: `/vendercosechas`.
- /invitargranja [id o nombre] — permite que otro personaje coseche tus plantas durante 7 días.
- /granja — muestra tus cosechas por tipo, tus granjeros invitados y las granjas ajenas a las que estás invitado.

Los comandos de `/plantacion`, salvo `crear`, actúan sobre la planta más cercana dentro de **2 metros**.

## Puntos agrícolas

Hay tres puntos agrícolas, marcados con un pickup en el suelo:

- **Blueberry Acres**
- **Ocean Docks**
- **Angel Pine**

En cualquiera de ellos puedes comprar semillas y vender cosechas. Debes estar a **3 metros o menos** del pickup, en el mundo exterior. Si usas `/comprarsemillas` o `/vendercosecha` desde lejos, el juego marca en el mapa el punto agrícola más cercano.

### Comprar semillas

`/comprarsemillas` abre un catálogo con un sobre por cada cultivo. Cada sobre trae **50 semillas** y se paga en efectivo, de la mano. El sobre llega a tu mano o a tus bolsillos, según el espacio que tengas. Los precios están en la tabla de cada cultivo más abajo.

### Vender cosechas

`/vendercosecha` compra todas las cosechas que lleves **en las manos o dentro de un bolso que tengas en la mano**. Paga un precio fijo por unidad, igual para todos los puntos y sin importar la calidad con que se cosechó. Lo que lleves en el suelo, en la espalda o en los bolsillos no se vende.

Cada venta tiene **1 posibilidad entre 3** de sumar un punto a tu habilidad de Granjero.

Los negocios no pueden agregar las cosechas a su catálogo: el punto agrícola es el lugar para venderlas.

## Qué necesitas

| Objeto | Para qué sirve | Dónde se consigue |
|--------|----------------|-------------------|
| Sobre de semillas | Sembrar un cultivo | Puntos agrícolas |
| Saco de abono | Debe estar en el suelo, a 5 m o menos, para sembrar. También sube la salud de una planta | Negocios de tipo growshop |
| Botella de agua o regadera | Regar | Tiendas, o la regadera que tengas |
| Fertilizante | Mejora la salud y la calidad de la cosecha. Algunos cultivos lo exigen para crecer | Negocios de tipo growshop |

- La **botella de agua** guarda hasta **10 unidades** y la **regadera**, hasta **100**. Se rellenan con `/llenaragua` dentro de una propiedad, y el agua que sacas se suma a la factura de agua de esa propiedad: una unidad de factura por cada 10 de agua.
- El saco de abono pesa 20 kg y ocupa dos manos.
- La botella de agua no se destruye al regar: cuando se vacía, la rellenas.

## Sembrar

Para sembrar con `/plantacion crear` necesitas:

- Un **sobre de semillas** en la mano derecha.
- Un **saco de abono** apoyado en el suelo, a 5 metros o menos.
- Estar **al aire libre**: las plantas legales no crecen dentro de propiedades ni en otros mundos.
- Respetar la **separación mínima** del cultivo con cualquier otra planta (entre 0,75 y 1,80 metros según el cultivo, ver tablas).
- No tener ya el máximo de plantas permitidas.
- No haber ya **10 plantas del mismo cultivo** en un radio de 10 metros. Busca otro lugar si la zona está saturada.

Cada siembra gasta entre **1 y 5 semillas** del sobre y entre **1 y 5 unidades** del saco de abono. Cuando se acaban, el envase desaparece.

La planta nace en etapa Semilla, con **5 de 10 de salud** y sin agua ni fertilizante. Al sembrarla se abre un editor para que la acomodes: puedes moverla hasta **3 metros** de donde la plantaste, siempre respetando la separación mínima. Si te alejas más o chocas con otra planta, se queda donde estaba.

### Límites

- Cada personaje puede tener **32 plantas** sembradas a la vez, entre legales e ilegales.
- No pueden estar **más de 10 plantas del mismo cultivo** en un radio de 10 metros.
- Si ya tienes el máximo, cosecha o descarta alguna antes de sembrar.

## Cuidar la planta

Una planta tiene tres medidores: **salud** (de 0 a 10), **agua** (de 0 a 5) y **fertilizante** (de 0 a 5). Cualquier personaje puede regar, abonar o fertilizar una planta ajena, pero la cosecha solo la recoge su dueño o un invitado a su granja.

| Acción | Comando | Qué llevas en la mano derecha | Efecto |
|--------|---------|-------------------------------|--------|
| Riego | `/plantacion cuidar` | Botella de agua o regadera con agua | +1 agua y +1 salud |
| Fertilización | `/plantacion mejorar` | Fertilizante | +1 fertilizante y +1 salud |
| Abono | `/plantacion cuidar` | Saco de abono | +2 salud (no sube agua ni fertilizante) |

Cada uso gasta entre **1 y 3 unidades** del envase. Si un medidor ya está al máximo, el comando te avisa y no gasta nada.

Todas estas tareas pueden sumar puntos de Granjero:

| Tarea | Posibilidad de sumar 1 punto |
|-------|------------------------------|
| Fertilizar | 1 de cada 2 |
| Cosechar | 1 de cada 2 |
| Regar o echar abono | 1 de cada 4 |
| Vender cosecha | 1 de cada 3 |

## Crecimiento

Cada planta recorre **seis etapas**: Semilla, Brote, Plántula, Crecida, Floración y Cosecha. El aspecto de la planta cambia en cada una.

El crecimiento se evalúa **una vez por ciclo**, y la duración de un ciclo depende del cultivo (entre 6 y 30 horas, ver tablas). Cuando se cumple el ciclo, la planta sube una etapa **solo si en ese momento cumple los mínimos de su cultivo**. Pasen o no los mínimos, el ciclo siempre le resta puntos a los medidores:

- La **salud** baja entre 1 y 2 puntos.
- El **agua** baja entre 1 y 3 puntos (entre 1 y 2 en los cultivos sencillos).
- El **fertilizante** baja entre 1 y 3 puntos en los cultivos exigentes y entre 1 y 2 en los demás.

Si la planta no cumple los mínimos, **pierde el ciclo** y no sube de etapa: tardará un ciclo más en madurar. Por eso conviene dejarla regada y abonada antes de cada ciclo.

Los mínimos para crecer dependen del grupo al que pertenece el cultivo:

| Grupo | Salud mínima | Agua mínima | Fertilizante mínimo |
|-------|--------------|-------------|---------------------|
| **Exigentes** | 5 | 3 | 1 |
| **Intermedios** | 5 | 3 | no lo exigen |
| **Sencillos** | 5 | 2 | no lo exigen |

Una planta sin cuidados pierde salud hasta llegar a **cero**. Con salud cero queda marchita: todavía puedes recuperarla regándola, abonándola o fertilizándola, pero **desaparece en el siguiente reinicio del servidor** si no lo haces antes.

## Calidad y cantidad de la cosecha

En los cultivos legales, la **calidad** de la planta determina cuánta cosecha obtienes. La calidad va de 0 a 100 y se calcula con el estado de los tres medidores **en el momento de cosechar**, con un peso distinto según el grupo:

| Grupo | Agua | Fertilizante | Salud |
|-------|------|--------------|-------|
| Exigentes | 20 | **50** | 30 |
| Intermedios | **50** | 20 | 30 |
| Sencillos | **50** | 20 | 30 |

Los porotos son la excepción entre los sencillos: pesan 50 el agua, 10 el fertilizante y 40 la salud.

Con calidad 0 obtienes la cantidad mínima del rango del cultivo y con calidad 100, la máxima. Por eso conviene regar, abonar y fertilizar **justo antes de cosechar**: las tres cosas suben la calidad al instante.

## Cosechar

Con `/plantacion cosechar` recoges la planta más cercana. Necesitas la **mano derecha vacía**, porque la cosecha aparece directamente en ella. La sandía y la calabaza se llevan con las dos manos.

La planta se puede cosechar desde la etapa **Floración** (cuarta etapa) y rinde su máximo en la etapa **Cosecha** (quinta etapa):

| Etapa al cosechar | Cantidad |
|-------------------|----------|
| Floración | Rango temprano del cultivo, menor |
| Cosecha | Rango completo del cultivo, mayor |

Una planta que se cosecha **no desaparece**: vuelve a la etapa Semilla, conserva su salud, agua y fertilizante, y empieza un nuevo ciclo. Una planta bien mantenida produce una y otra vez.

Solo pueden cosechar el **dueño** de la planta y los personajes invitados a su granja (ver más abajo).

## Los 25 cultivos

### Tiempos y espacio

Los tiempos son los **mínimos**, suponiendo que la planta cumple los requisitos en cada ciclo. Cada ciclo fallido suma otro ciclo completo.

| Cultivo | Grupo | Horas por ciclo | Listo para cosechar (Floración) | Cosecha completa | Separación mínima |
|---------|-------|-----------------|--------------------------------|------------------|-------------------|
| Tomate | Exigente | 16 | 64 h | 80 h | 1,00 m |
| Lechuga | Intermedio | 8 | 32 h | 40 h | 0,75 m |
| Papa | Sencillo | 18 | 72 h | 90 h | 0,90 m |
| Cebolla | Sencillo | 18 | 72 h | 90 h | 0,80 m |
| Zanahoria | Sencillo | 12 | 48 h | 60 h | 0,75 m |
| Jalapeño | Intermedio | 14 | 56 h | 70 h | 0,75 m |
| Pimentón | Exigente | 18 | 72 h | 90 h | 0,80 m |
| Maíz | Exigente | 20 | 80 h | 100 h | 1,50 m |
| Zapallo | Intermedio | 12 | 48 h | 60 h | 1,20 m |
| Calabaza | Exigente | 24 | 96 h | 120 h | 1,80 m |
| Pepino | Intermedio | 12 | 48 h | 60 h | 1,40 m |
| Ajo | Sencillo | 30 | 120 h | 150 h | 0,80 m |
| Berenjena | Exigente | 18 | 72 h | 90 h | 0,90 m |
| Repollo | Exigente | 18 | 72 h | 90 h | 0,75 m |
| Porotos | Sencillo | 12 | 48 h | 60 h | 0,80 m |
| Espinaca | Intermedio | 8 | 32 h | 40 h | 0,75 m |
| Albahaca | Intermedio | 10 | 40 h | 50 h | 0,75 m |
| Tomatillo | Intermedio | 16 | 64 h | 80 h | 1,30 m |
| Frutilla | Intermedio | 12 | 48 h | 60 h | 0,75 m |
| Sandía | Exigente | 24 | 96 h | 120 h | 1,80 m |
| Melón | Exigente | 20 | 80 h | 100 h | 1,50 m |
| Brócoli | Exigente | 16 | 64 h | 80 h | 0,80 m |
| Coliflor | Exigente | 18 | 72 h | 90 h | 0,90 m |
| Rábano | Sencillo | 6 | 24 h | 30 h | 0,75 m |
| Nabo | Sencillo | 10 | 40 h | 50 h | 0,80 m |

### Precios y rendimiento

El precio por unidad es el que paga `/vendercosecha`. La última columna es lo que vale una cosecha completa con calidad máxima.

| Cultivo | Sobre de 50 semillas | Precio por unidad | Cantidad en Floración | Cantidad en Cosecha | Valor máximo |
|---------|----------------------|-------------------|-----------------------|---------------------|--------------|
| Tomate | $300 | $100 | 6 a 10 | 10 a 18 | $1.800 |
| Lechuga | $150 | $165 | 2 a 3 | 4 a 6 | $990 |
| Papa | $550 | $245 | 4 a 8 | 8 a 14 | $3.430 |
| Cebolla | $550 | $425 | 2 a 4 | 4 a 8 | $3.400 |
| Zanahoria | $300 | $180 | 3 a 6 | 6 a 10 | $1.800 |
| Jalapeño | $300 | $75 | 8 a 14 | 14 a 24 | $1.800 |
| Pimentón | $550 | $340 | 3 a 6 | 6 a 10 | $3.400 |
| Maíz | $550 | $565 | 2 a 3 | 4 a 6 | $3.390 |
| Zapallo | $300 | $180 | 3 a 6 | 6 a 10 | $1.800 |
| Calabaza | $900 | $460 | 4 a 6 | 8 a 12 | $5.520 |
| Pepino | $300 | $130 | 4 a 8 | 8 a 14 | $1.820 |
| Ajo | $1.050 | $775 | 2 a 4 | 4 a 8 | $6.200 |
| Berenjena | $550 | $425 | 2 a 4 | 4 a 8 | $3.400 |
| Repollo | $550 | $565 | 2 a 3 | 4 a 6 | $3.390 |
| Porotos | $300 | $50 | 10 a 20 | 20 a 35 | $1.750 |
| Espinaca | $150 | $70 | 4 a 8 | 8 a 14 | $980 |
| Albahaca | $150 | $70 | 4 a 8 | 8 a 14 | $980 |
| Tomatillo | $300 | $75 | 8 a 14 | 14 a 24 | $1.800 |
| Frutilla | $300 | $90 | 6 a 12 | 12 a 20 | $1.800 |
| Sandía | $900 | $460 | 4 a 6 | 8 a 12 | $5.520 |
| Melón | $550 | $340 | 3 a 5 | 6 a 10 | $3.400 |
| Brócoli | $300 | $300 | 2 a 3 | 4 a 6 | $1.800 |
| Coliflor | $550 | $565 | 2 a 3 | 4 a 6 | $3.390 |
| Rábano | $150 | $60 | 6 a 10 | 10 a 16 | $960 |
| Nabo | $150 | $100 | 3 a 6 | 6 a 10 | $1.000 |

Los cultivos de ciclo largo pagan más por cosecha, para compensar las horas de espera. Cada sobre alcanza para muchas siembras, así que el costo de las semillas es una parte mínima de lo que ganas.

## Examinar

`/plantacion examinar` te muestra el estado de la planta más cercana, y **cuánto ves depende de tu habilidad de Granjero**:

| Habilidad de Granjero | Información visible |
|-----------------------|---------------------|
| Cualquiera | Etapa de la planta |
| **5 o más** | Estado del agua y del fertilizante, descritos con palabras (por ejemplo "bien regada" o "falta fertilizante") |
| **10 o más** | Estado de la salud, también con palabras |
| **50 o más** | Valores exactos de cada medidor, tiempo que falta para el próximo ciclo y si la planta crecerá o no en él por falta de cuidado. También avisa cuando ya se puede cosechar pero rinde menos que madura |

Un granjero novato ve poco más que el aspecto de la planta: subir la habilidad te permite afinar el riego y la fertilización antes de cada ciclo.

## Habilidad de Granjero

La habilidad de Granjero va de 0 a 100. Sube de forma natural al cuidar plantas legales, al cosecharlas y al venderlas, con las posibilidades que muestra la tabla de la sección de cuidados. Cuidar plantas ilegales no la entrena: esas suben la habilidad de drogas. Puedes revisar tu nivel en el menú de habilidades; más detalles en el [sistema de habilidades](sistema-de-habilidades.md).

## Granjas e invitados

Solo tú puedes cosechar tus plantas, salvo que invites a otros personajes a tu granja.

- `/invitargranja [id o nombre]` invita a otro jugador que esté a **5 metros o menos**. La invitación dura **7 días** y se renueva repitiendo el comando. El invitado puede **cosechar todas tus plantas**.
- Puedes tener hasta **8 granjeros** invitados a la vez, y un mismo personaje puede estar invitado en un máximo de **8 granjas**.
- `/granja` abre un panel con tres secciones: tus plantas por cultivo (con cuántas están listas para cosechar), tus granjeros con su última actividad, y las granjas ajenas a las que estás invitado, con la fecha de vencimiento.
- Para quitar una invitación, abre `/granja`, elige al granjero y confirma.

Regar, abonar y fertilizar no requieren invitación. Las invitaciones se aplican al dueño completo, no a plantas sueltas.

## Eliminar una planta

`/plantacion eliminar` descarta la planta más cercana y deja una bolsa de basura en su lugar. Solo puede hacerlo su **dueño** o un **policía de servicio**. La acción es irreversible: pierdes la planta y todo lo invertido en ella.

## Qué hacer con la cosecha

Además de venderlas en los puntos agrícolas, las cosechas sirven como **ingredientes** de las recetas de cocina. Mira el [sistema de cocina y bar](sistema-de-cocina-y-bar.md).

## Consejos

- **Siembra con un plan.** Cada ciclo resta agua y fertilizante, así que conviene regar y abonar justo antes del ciclo en que la planta debe crecer.
- **Empieza por los cultivos sencillos.** La papa, la zanahoria, el rábano o el nabo piden menos agua y no exigen fertilizante para crecer.
- **Los cultivos exigentes premian el fertilizante.** En ellos pesa la mitad de la calidad de la cosecha.
- **Cosecha madura si puedes esperar.** La cosecha completa rinde bastante más que la de Floración con apenas un ciclo más de espera.
- **Lleva envases de sobra.** Cada riego, abono o fertilización gasta hasta 3 unidades y la botella solo guarda 10. Una regadera ahorra muchos viajes.
- **Invita solo a gente de confianza.** Un granjero invitado puede cosechar todas tus plantas durante 7 días.
- **Vende en bloque.** Lleva tus cosechas en un bolso en la mano y véndelas todas con un solo `/vendercosecha`.
