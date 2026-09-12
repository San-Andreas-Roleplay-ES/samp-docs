# Sistema de cadáveres

> ⚠️ **Advertencia de contenido sensible.** Este documento describe mecánicas de **roleplay ficticias** del servidor: manejo de cadáveres, quema de cuerpos y extracción de órganos. Son dinámicas de juego enmarcadas en un entorno de ficción y no representan ni promueven ninguna conducta de la vida real.

## Introducción

Cuando un personaje sufre una **muerte definitiva** (Character Kill), su cuerpo queda tendido en el mismo punto donde cayó y se convierte en un cadáver persistente: no desaparece con el tiempo, no se borra al reiniciar el servidor y conserva la apariencia, las heridas y el inventario que el personaje tenía en ese momento.

A partir de ahí el cuerpo se convierte en el centro de un pequeño juego del gato y el ratón. Para la policía y los paramédicos es una escena del crimen que hay que documentar y trasladar a la morgue. Para el criminal que lo dejó ahí es un problema: un cuerpo abandonado en la vía pública acaba llamando la atención, y cada persona que lo toca deja huellas que un laboratorio puede leer más tarde.

El servidor mantiene **hasta 32 cadáveres activos** en el mundo al mismo tiempo. Cuando ese cupo se llena, los cuerpos más antiguos dejan de estar presentes en la calle.

Cualquier jugador que pase cerca ve una etiqueta flotante sobre el cuerpo indicando de quién es el cadáver, o bien que se trata de una bolsa de cadáver o de un cuerpo calcinado. Alrededor del cuerpo aparecen insectos, y cada hora existe la posibilidad de que un **testigo anónimo reporte el avistamiento por la radio de policía y de emergencias**, indicando la zona de la ciudad y en qué estado se ve el cuerpo (un olor putrefacto si está embolsado, un cuerpo completamente calcinado, un cuerpo brutalmente desmembrado o un posible avistamiento). Dejar un cuerpo a la vista en plena calle es, por tanto, una mala idea.

### Comandos

- `/cadaver examinar` — muestra las heridas registradas en el cuerpo y el estado de sus órganos.
- `/cadaver inventario` — abre los bolsillos del cadáver para sacar objetos.
- `/cadaver bolsa` — mete el cuerpo en una bolsa, o lo destapa si ya estaba embolsado.
- `/cadaver recogerbolsa` — carga la bolsa con el cadáver en tus brazos.
- `/cadaver entregarbolsa` — entrega la bolsa en la morgue del hospital.
- `/cadaver muestraadn` — toma una muestra de fluidos del cuerpo con un hisopo.
- `/cadaver solicitarforense` — pide el traslado del cuerpo cuando no hay ambulancias disponibles.
- `/quemarcadaver` — rocía combustible sobre el cuerpo y le prende fuego.
- `/desmembrarcadaver [parte]` — abre el cuerpo o extrae un órgano.

## De dónde salen los cadáveres

Un cadáver aparece únicamente cuando un personaje recibe un **Character Kill**: la muerte permanente del personaje, tras la cual el jugador debe cambiar de nombre en la tienda del panel de control. El sistema lo aplica automáticamente al morir si el personaje ha superado su límite de asesinatos recientes o si arrastra una deuda bancaria demasiado grande.

El límite de asesinatos y el estado mental que lo acompaña se explican en detalle en [Sistema de asesinatos, salud mental y felicidad](sistema-de-asesinatos.md).

El cuerpo que queda en el suelo hereda del personaje:

- La **apariencia** con la que murió (si estaba de servicio en una facción, aparece con ese uniforme).
- Todo su **inventario**, tal cual lo llevaba encima.
- Las **heridas** recibidas en las **últimas 6 horas**, con el arma que las causó, la parte del cuerpo afectada y cuánto tiempo hace de cada una.

## Examinar el cuerpo

`/cadaver examinar`, junto al cuerpo, abre un informe con todas las heridas atribuibles a terceros: el daño de cada una, la zona del cuerpo golpeada, el arma utilizada y hace cuánto se produjo. Si no hay heridas registradas, el informe lo indica.

Al final del listado también aparecen, resaltadas en rojo, las mutilaciones y los órganos que falten. Si el cuerpo está calcinado, el informe ya no lleva el nombre del fallecido: solo dice que es un cadáver calcinado.

**Ten cuidado con lo que miras.** Examinar un cuerpo con heridas, o rebuscar en sus bolsillos, puede remover el estado mental de tu personaje: si eres un asesino con muertes recientes acumuladas, al hacerlo se te muestra tu propio indicador de estado mental. Los personajes sin asesinatos a sus espaldas no se ven afectados.

## Huellas: por qué conviene llevar guantes

Cada vez que alguien toca un cadáver —al revisar sus bolsillos, embolsarlo, destaparlo, recogerlo o tomarle muestras— deja su **huella** en el cuerpo. El cadáver recuerda a las **últimas 8 personas** que lo manipularon, y ese rastro es exactamente lo que se recupera después en el laboratorio.

Hay dos formas de no dejar rastro:

- **Llevar guantes puestos.** Mientras los uses, tu huella no se registra. A cambio, los guantes se **desgastan con cada contacto** y acaban rompiéndose.
- **Quemar el cuerpo.** El fuego borra por completo la lista de huellas acumuladas.

Ten en cuenta que algunas acciones son mucho más "sucias" que otras: recoger la bolsa deja **tres** contactos de golpe y tomar una muestra de ADN deja **cinco**, así que unos guantes desgastados pueden romperse en mitad de la maniobra.

Del lado contrario, `/cadaver muestraadn` graba ese listado de huellas en el hisopo, que después se analiza en el laboratorio para obtener los nombres. Tomar la muestra requiere ser **policía o paramédico de servicio** y llevar un **hisopo de laboratorio** (**$72**) en la mano derecha; el cuerpo no puede estar calcinado, porque el fuego ya habrá borrado todo. Ese proceso se explica en [Sistema forense](sistema-forense.md).

## Saquear el inventario

`/cadaver inventario` abre los bolsillos del cuerpo y permite sacar objetos de uno en uno. Reglas:

| Condición | Detalle |
|---|---|
| Quién puede | Solo **delincuentes** y **policías** |
| Espera para delincuentes | **3 horas** desde que apareció el cuerpo |
| Espera para policías | Ninguna, pueden registrarlo de inmediato |
| Manos | Necesitas al menos una mano libre, y ninguna ocupada por un objeto pesado |
| Rastro | Revisar los bolsillos **deja huella** |

Por eso, si una facción ilegal planea matar a alguien y quedarse con sus cosas, lo lógico es **robarle antes de matarlo**: después hay que esperar tres horas, con el cuerpo expuesto a que lo encuentre la policía, un testigo o cualquier otro criminal.

El equipamiento de facción que lleve el cadáver no se puede sacar.

Cuando el cuerpo se traslada a la morgue o lo recoge alguien dentro de una bolsa, todo lo que quedaba en sus bolsillos **se pierde definitivamente**.

## Embolsar y trasladar el cuerpo

### Meter el cuerpo en una bolsa

`/cadaver bolsa` tapa el cuerpo. Necesitas llevar en la **mano derecha** una **bolsa de basura** (**$29**) o una **bolsa para cadáveres** (**$144**); la bolsa se consume al usarla. El mismo comando, usado sobre un cuerpo ya embolsado, lo destapa otra vez.

Un cuerpo embolsado se ve como un bulto y su etiqueta pasa a decir simplemente que es una bolsa de cadáver: deja de mostrar el nombre del fallecido.

### Cargar la bolsa

`/cadaver recogerbolsa` levanta el bulto y te lo pone encima. Requisitos:

- El cuerpo debe estar **dentro de una bolsa**.
- El cuerpo **no puede estar ardiendo**.
- **Ambas manos libres**.
- Estar **junto al cuerpo**.
- Ser **paramédico**, **detective privado**, o un delincuente con **50 de habilidad de delincuente** o más.

La bolsa cargada es un objeto **pesado**: ocupa las dos manos, no puedes conducir con ella encima y tienes que dejarla en el suelo o guardarla para moverte con normalidad. Eso sí, al ser un objeto normal del inventario puedes meterla en el **maletero de un vehículo** y llevártela a donde quieras.

Cuando sueltas la bolsa, el cadáver vuelve a materializarse en ese mismo punto y sigue su vida normal: se puede volver a destapar, examinar, quemar o entregar. Lo que no vuelve es su inventario, que se pierde al recogerlo.

**Mover un cuerpo nunca es gratis**: cada manipulación deja huellas, y el cuerpo arrastra consigo fluidos e insectos. La parte de cubrir tus huellas queda a tu propio ingenio.

### Entregar el cuerpo en la morgue

`/cadaver entregarbolsa` cierra el ciclo legal. Requisitos:

- Ser **paramédico** y estar **de servicio**.
- Llevar la **bolsa con el cadáver** en las manos.
- Estar en la **morgue del hospital de Los Santos**.

Si estás lejos, el juego te marca la morgue en el mapa. Al entregarla recibes **$2.500 al banco** y el cuerpo pasa definitivamente a manos del forense.

Los paramédicos no actúan como oficina forense: en el rol deben simular que trasladan a una persona en estado crítico que será declarada muerta en el hospital. El análisis posterior es trabajo del laboratorio, descrito en [Sistema forense](sistema-forense.md). Todo lo relativo al hospital y al servicio de emergencias está en [Sistema médico y hospital](sistema-medico-y-hospital.md).

### Cuando no hay ambulancias

`/cadaver solicitarforense` es la salida de emergencia para la policía cuando no hay nadie de emergencias disponible para responder. El cuerpo desaparece de la escena como si se lo hubieran llevado los forenses. Requisitos:

| Requisito | Valor |
|---|---|
| Quién | **Policía** (departamento o sheriff) **de servicio** |
| Tiempo mínimo en escena | **15 minutos** desde que apareció el cuerpo |
| Estado del cuerpo | **No puede estar ardiendo** |
| Disponibilidad de emergencias | Solo si hay **menos de 2 paramédicos** de servicio |

Antes de usarlo debe hacerse un intento razonable de contactar con emergencias por la radio departamental.

### Trabajo previo de los detectives

Antes de que el cuerpo salga de la escena, los detectives de homicidios deben documentarla: fotografiar las heridas, tomar nota de la descripción del cuerpo y del entorno, registrar sus pertenencias y recoger las muestras. Todo lo que vaya a usarse como prueba debe guardarse correctamente en bolsas de evidencia; el procedimiento completo está en [Sistema forense](sistema-forense.md).

---

> ⚠️ **Contenido sensible — roleplay ficticio.** Las secciones siguientes describen mecánicas de juego dentro de la ambientación criminal del servidor. No son instrucciones ni representaciones de la vida real.

## Quemar un cadáver

`/quemarcadaver` calcina el cuerpo y, con él, todo el rastro que llevaba encima.

**Requisitos:**

| Requisito | Detalle |
|---|---|
| Habilidad | **50 de habilidad de delincuente** |
| Mano derecha | Una **lata de gasolina** (**$37**) o de **diésel** (**$44**) con combustible dentro |
| Mano izquierda | Un **encendedor** (**$3**) con gas |
| Lugar | Solo **al aire libre**; no funciona en interiores |
| Estado | El cuerpo no puede estar ya calcinado |

**Qué ocurre:**

- El cuerpo pasa al estado **calcinado** de inmediato y su etiqueta deja de mostrar el nombre del fallecido. Si estaba embolsado, la bolsa se pierde.
- Se **borra por completo la lista de huellas** acumuladas en el cuerpo, así que ya no se le pueden tomar muestras útiles.
- Arde visiblemente durante **15 minutos**.
- La **columna de humo se ve a gran distancia durante una hora** — es, con diferencia, la parte más arriesgada de la operación.
- Se gastan **entre 5 y 9 unidades de combustible** de la lata y **entre 1 y 5 unidades de gas** del encendedor.

Mientras el cuerpo está en llamas nadie puede recoger la bolsa, solicitar el traslado forense ni desmembrarlo. Un cuerpo calcinado tampoco se puede desmembrar después, así que el fuego cierra la puerta a extraerle órganos: hay que elegir entre vender sus órganos o borrar las pruebas.

## Desmembramiento y órganos

`/desmembrarcadaver [parte]` permite abrir el cuerpo o extraer órganos. Está reservado a **delincuentes** con conocimientos médicos: hacen falta al menos **25 de habilidad de paramédico** para poder usar el comando, y cada órgano exige su propio nivel.

El cuerpo no puede estar **ardiendo** ni **calcinado**.

### Herramientas

- **Bisturí** (**$360**) en la mano derecha para todas las incisiones y extracciones.
- **Cizalla** (**$647**) en la mano derecha, únicamente para abrir la caja torácica.
- Para extraer un órgano, además, la **mano izquierda debe estar libre**: es donde te queda la bolsa con la pieza.

### Partes y órganos

| Parte | Habilidad de paramédico | Herramienta | Resultado |
|---|---|---|---|
| Pecho | 25 | Bisturí | Incisión; el pecho queda destrozado |
| Costillas | 25 | Cizalla | Abre la caja torácica |
| Estómago | 25 | Bisturí | Incisión |
| Ingle | 25 | Bisturí | Incisión |
| Intestino | **25** | Bisturí | Bolsa con un intestino |
| Páncreas | **25** | Bisturí | Bolsa con un páncreas |
| Hígado | **30** | Bisturí | Bolsa con un hígado |
| Pulmones | **50** | Bisturí | Bolsa con unos pulmones |
| Riñones | **80** | Bisturí | Bolsa con unos riñones |
| Corazón | **90** | Bisturí | Bolsa con un corazón |

Cada incisión y cada extracción **queda registrada en el cuerpo para siempre** y aparece marcada en rojo cuando alguien usa `/cadaver examinar`. Un cuerpo abierto por el pecho o el estómago también cambia lo que reportan los testigos por la radio policial: pasan a avisar de un cuerpo brutalmente desmembrado.

Si un órgano ya fue extraído, o está dañado por las heridas que mataron a la persona, no se puede sacar. Conviene examinar el cuerpo antes de ponerse a trabajar.

### Efectos sobre quien lo hace

Abrir un cuerpo revuelve el estómago. Al cortar el pecho, el estómago, la ingle o al extraer cualquier órgano hay probabilidad de sufrir un **golpe de náuseas** que te deja mareado: cuanta más habilidad de paramédico tengas, menos probable es que te ocurra. Las náuseas no pueden repetirse antes de **5 minutos**.

Además, el trabajo suena y se ve: los cortes se oyen a **15 metros** a la redonda y dejan un charco de sangre momentáneo en el suelo.

### Vender los órganos

Las bolsas con órganos son objetos **pesados** que ocupan las dos manos y se venden en el mercado negro, donde hace falta un mínimo de **25 de habilidad de paramédico** para que te acepten la mercancía. Precios base:

| Órgano | Precio |
|---|---|
| Corazón | **$30.000** |
| Riñones | **$27.000** |
| Pulmones | **$17.000** |
| Hígado | **$10.000** |
| Intestino | **$8.500** |
| Páncreas | **$7.000** |

Durante los eventos de experiencia multiplicada, las cuentas verificadas cobran un **10% extra** (evento doble) o un **20% extra** (evento triple). El detalle de cómo funciona el mercado negro está en [Sistema de mercado negro](sistema-de-mercado-negro.md).

## Consejos

- **Antes de matar, roba.** El inventario del cadáver queda bloqueado tres horas para los delincuentes y se pierde entero si el cuerpo acaba en la morgue.
- **Trabaja con guantes.** Son la única forma de manipular un cuerpo sin dejar huellas, y valen mucho menos que lo que cuesta ser identificado. Recuerda que se desgastan con cada contacto.
- **No dejes cuerpos a la vista.** Cada hora hay posibilidad de que un testigo lo reporte por la radio policial indicando la zona; un cuerpo embolsado o calcinado se reporta igual.
- **Decide pronto qué quieres del cuerpo.** Quemarlo borra las huellas pero anula la extracción de órganos; desmembrarlo da dinero pero deja marcas permanentes que agravan el informe forense.
- **La hoguera se ve.** El humo se mantiene una hora entera, así que quemar un cuerpo cerca de una carretera transitada es prácticamente confesar.
- **Si eres paramédico, el traslado paga.** Cada bolsa entregada en la morgue son **$2.500** directos al banco, y la bolsa para cadáveres cuesta una fracción de eso.
- **Si eres policía, mira antes de tocar.** Examina el cuerpo y registra sus bolsillos antes de trasladarlo: una vez en la morgue, esa información ya no está en la calle.
