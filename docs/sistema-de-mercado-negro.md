# Sistema de mercado negro

## Introducción

El **mercado negro** es la red clandestina que compra el botín de los delincuentes y les vende lo que ninguna tienda legal les daría: armas de fuego sin licencia, cargadores, cajas de munición, equipo para falsificar billetes, equipo de minería, soportes para granjas de teléfonos e incluso atención médica sin preguntas. Es el destino natural de todo lo que consigues robando y la vía más rápida para armarte cuando no perteneces a una facción con contrabandistas propios.

Desde la reforma de Idlewood, el mercado negro dejó de estar repartido en once puntos por toda la ciudad y se concentra en el **Idlestack**, la base criminal del sur de Los Santos, levantada sobre el terreno del antiguo carwash y las colinas de Idlewood, y en un segundo enclave equivalente en El Corona. Al usar `/mercadonegro` lejos de tu punto de venta, el contacto te asigna uno de los dos y te lo marca en el mapa. Allí encontrarás tanto al comprador de mercancía robada como la **clínica clandestina**. La pizzería de la zona también es uno de los puntos de `/reaparecer`, así que es un buen sitio para establecer tu base de operaciones.

Las armas son la excepción: no se venden en Idlewood, sino a través de **armerías de Las Venturas y del desierto cercano** (y, con menos frecuencia, el propio punto de Idlewood) que blanquean la operación. Cuando pides un arma, el contacto te asigna un punto concreto y te lo marca en el mapa; hasta que no llegues ahí, no se abre la venta.

Todo el mercado negro es **exclusivo para delincuentes**. Si eres policía o miembro de una facción legal, tu contacto no te responderá. Para convertirte en delincuente revisa el [sistema de delincuente](sistema-de-delincuente.md).

### Comandos

- /mercadonegro — abre el mercado negro para comprar munición y equipo, y para vender botín. También funciona con `/venderrobo`, `/vendernegro` y `/traficarnegro`.
- /conseguirarma — pide un arma de fuego sin licencia; te marca la armería asignada.
- /curarme — cura tus heridas en la clínica clandestina, si estás sobre el punto.
- /traficar — vende droga a un drogadicto, a un camello o a un contacto de misión. Con `/traficar aceptar` confirmas la oferta.

## Requisitos generales

Antes de que el mercado negro te abra la puerta necesitas cumplir varias condiciones:

| Requisito | Vender botín | Comprar munición | Comprar equipo de imprenta | Comprar armas |
| --------- | ------------ | ---------------- | -------------------------- | ------------- |
| Ser delincuente | Sí | Sí | Sí | Sí |
| Horas jugadas | **50** | **50** | **50** | **50** |
| Habilidad de delincuente | — | **50+** | **50+** | **50+** |
| Puntos de rol positivos | — | — | — | **2** |
| Mano derecha libre | — | Sí | Sí | O espacio en un bolso o mochila |

Si todavía no llegas a las 50 horas, tu alternativa para deshacerte del botín es la **Pawn Shop** con `/empeñar`.

El equipo de minería y los soportes de la granja de teléfonos piden las 50 horas, ser delincuente y la mano derecha libre, pero no habilidad de delincuente: lo que exigen es habilidad de electrónica (consulta la sección de equipo).

## Venta de botín

Con `/mercadonegro` sobre el punto de Idlewood se abre un menú con todo lo que el comprador acepta. Debes llevar el objeto **en la mano derecha**: se vende esa pieza y desaparece de tu inventario al instante.

| Categoría | Qué acepta | Requisito extra |
| --------- | ---------- | --------------- |
| Teléfonos y computadores | Móviles y equipos informáticos robados | — |
| Joyas | Cualquier pieza de joyería y la bolsa de joyas robadas del [robo a la joyería](sistema-de-robo-a-la-joyeria.md) | — |
| Autopartes | Piezas desmontadas de vehículos | — |
| Muebles | Muebles robados de propiedades | El mueble debe ser de los robables y no puede ser un equipo empaquetado |
| Mercancía de camiones | Cargamentos interceptados | Habilidad de delincuente **50+** |
| Órganos | Corazón, pulmones, hígado, intestinos, páncreas y riñones | Habilidad de paramédico **25+** |

La opción de vender órganos solo aparece en el menú si tienes la habilidad de paramédico necesaria.

### Cuánto pagan

Teléfonos, computadores, joyas, muebles y mercancía de camiones se pagan al **80% de su valor base**. En los muebles ese porcentaje se aplica sobre el valor de la pieza concreta; en la mercancía de camiones se calcula sobre la cantidad transportada, con un **tope de $10.000 por cargamento**. No puedes vender la mercancía de un pedido de camionero que estés realizando tú mismo. Las autopartes se pagan peor: el **30% de su valor**.

La **bolsa de joyas robadas** se paga completa, por el valor que acumula (puede llegar a $250.000), sin descuento. Es la única forma de convertirla en dinero: ninguna otra tienda la compra.

Los órganos tienen precio fijo y son, con diferencia, lo más rentable:

| Órgano | Precio |
| ------ | ------ |
| Corazón | **$100.000** |
| Riñones | **$89.998** |
| Pulmones | **$56.600** |
| Hígado | **$34.000** |
| Intestinos | **$28.200** |
| Páncreas | **$23.200** |

Durante los eventos de experiencia del servidor, las cuentas verificadas cobran un **10% extra** (evento doble) o un **20% extra** (evento triple) por teléfonos, joyas, autopartes, muebles, mercancía y órganos.

## Compra de equipo

El menú de `/mercadonegro` también vende, siempre a delincuentes que no sean policías, estas máquinas, que llegan empaquetadas en una caja que cargas en las manos hasta una propiedad, donde las instalas como cualquier mueble:

- **Equipo de imprenta.** Las nueve máquinas del [sistema de falsificación de billetes](sistema-de-falsificacion-de-billetes.md), repartidas en tres niveles (casero, taller e industrial), con precios desde $500 hasta $20.000. Además de la habilidad de delincuente 50, cada máquina exige su propio nivel de habilidad de falsificación; las que no alcanzas aparecen en gris con el nivel que te falta. También se vende papel: la resma y la caja de resmas.
- **Equipo de minería.** Rig casero ($2.500, 6 tarjetas gráficas), estantería de ASIC ($10.000, 16 ASIC) y gabinete 42U ($40.000, 10 unidades 4U), más la refrigeración líquida ($25.000). Exigen habilidad de electrónica de 15, 35 y 60 respectivamente (60 también para la refrigeración). Llegan vacíos: las piezas se compran aparte. El funcionamiento se explica en el [sistema de CluckinCoins](sistema-de-cluckin-coins.md).
- **Granja de teléfonos.** Soporte de mesa ($3.000, 10 teléfonos), tablero de pared ($15.000, 40) y gabinete de bots ($60.000, 100), con habilidad de electrónica de 15, 35 y 60 respectivamente. Se usa para la granja de bots de [Bleeter](bleeter.md).

## Compra de armas

`/conseguirarma` es la vía para hacerte con un arma de fuego sin pasar por Ammu-Nation. El contacto te asigna una **armería de Las Venturas o del desierto cercano** y te marca el destino; solo al llegar se abre el catálogo. El arma que compras se entrega **con su serial registrado a tu nombre**, lo que la hace rastreable: revisa el [sistema de armas](sistema-de-armas.md) para entender qué implica eso frente a la policía.

Cada arma exige una habilidad de delincuente mínima. Las que no alcanzas aparecen bloqueadas en la lista, con el nivel que te falta. El precio que ves en la lista es el que se cobra.

| Arma | Habilidad de delincuente | Precio |
| ---- | ------------------------ | ------ |
| Hi-Point C9 | 50 | **$4.960** |
| Bersa Firestorm | 50 | **$5.440** |
| Taurus G2C | 50 | **$5.760** |
| SCCY CPX-2 | 50 | **$5.760** |
| Sig Sauer P320 | 50 | **$8.400** |
| Walther PDP | 50 | **$8.400** |
| Stoeger STR-9 | 50 | **$8.400** |
| Ruger American Pistol | 50 | **$8.400** |
| Beretta APX A1 | 70 | **$9.440** |
| Glock 19 Gen5 | 70 | **$9.440** |
| Citadel CDP12 (escopeta) | 80 | **$6.480** |
| MAC-10 (subfusil) | 80 | **$7.360** |
| Savage Axis XP (rifle) | 90 | **$7.776** |
| SLR-107 (fusil) | 90 | **$13.800** |
| Colt AR15 (fusil) | 100 | **$23.000** |

Solo puedes comprar **un arma por operación** y necesitas la mano derecha libre (o espacio en un bolso o mochila) para recibirla.

### Tiempo de espera entre armas

Tras comprar, tu contacto desaparece durante un buen rato. El plazo es de **una semana (168 horas) para todos los jugadores**, sin importar el arma. Es la misma espera que se activa al comprar un arma en una tienda: mientras dure, no puedes conseguir otra por ninguna de las dos vías.

La única excepción son los usuarios **Platino** y **Ruby**, que esperan **la mitad** —3 días y medio, 84 horas— cuando el arma comprada es una pistola: las de calibre 9mm, las silenciadas y las Desert Eagle. Para escopetas, subfusiles, rifles y fusiles el plazo vuelve a ser de una semana completa incluso para ellos. Puedes consultar los niveles en la [tienda premium](tienda-premium.md).

| Tipo de arma | Sin premium, Bronce, Plata u Oro | Platino y Ruby |
| ------------ | -------------------------------- | -------------- |
| Pistolas (9mm, 9mm silenciada, Desert Eagle) | **1 semana** | **3 días y medio** |
| Escopetas, subfusiles, rifles y fusiles | **1 semana** | **1 semana** |

Si intentas comprar antes de tiempo, el juego te indica cuántos minutos faltan.

## Compra de munición

Los delincuentes con habilidad **50+** pueden comprar **cargadores y cajas de munición** directamente desde el menú de `/mercadonegro`, sin desplazarse a Las Venturas y sin tiempo de espera entre compras. La contrapartida es el precio: el mercado negro cobra **3,5 veces el valor base**, mientras que los contrabandistas de facción venden a **1,5 veces**. Si tienes acceso a un contrabandista, seguirá siendo siempre la opción más barata.

| Munición | Precio en el mercado negro | Precio con contrabandista |
| -------- | -------------------------- | ------------------------- |
| Cargador 9x19, .40, .45, .357 o .22 LR | **$567** | $243 |
| Cargador 7.62x39, 5.56x45, 7.62x51 o .380 | **$1.134** | $486 |
| Perdigones 12ga | **$1.134** | $486 |
| Cargador .308 Winchester | **$1.410** | $604 |
| Cargador .30-06 Springfield | **$1.610** | $690 |
| Cargador 6.5 Creedmoor | **$1.813** | $777 |
| Cargador .300 Winchester Magnum | **$2.012** | $862 |
| Caja de munición .22 LR | **$2.264** | $970 |
| Cargador .44 | **$2.835** | $1.215 |
| Caja de munición 9x19, .40, .45, .357 o .380 | **$3.402** | $1.458 |
| Caja de munición 12ga, 7.62x39, 5.56x45 o 7.62x51 | **$4.529** | $1.941 |
| Caja de munición .308 Winchester | **$5.435** | $2.329 |
| Caja de munición .30-06 Springfield | **$5.635** | $2.415 |
| Caja de munición 6.5 Creedmoor | **$5.838** | $2.502 |
| Caja de munición .300 Winchester Magnum | **$6.037** | $2.587 |

Como con las armas, necesitas la mano derecha libre.

## Clínica clandestina

En el Idlestack y en El Corona hay **puntos de curación clandestinos** marcados en el suelo. Usando `/curarme` sobre uno de ellos recuperas toda tu salud y se te **borran todas las heridas** sin tener que pasar por el hospital ni por el papeleo del [sistema médico y hospital](sistema-medico-y-hospital.md).

- Coste: **$15.000**.
- Requiere habilidad de delincuente **superior a 25**.
- **No funciona si estás brutalmente herido**: en ese estado solo el hospital puede salvarte.
- No se puede usar desde un vehículo.
- Descanso de **4 horas** entre curaciones.

Es obligatorio **rolear la atención médica clandestina**: el médico que te atiende, la sala, el procedimiento.

## Drogadictos, camellos y vagabundos agresivos

Los **drogadictos** son adictos controlados por el servidor que aparecen repartidos por toda la ciudad, sobre todo en las zonas degradadas del sur de Los Santos y alrededor del Idlestack. Son la clientela habitual del narcomenudeo: con droga en la mano derecha y `/traficar` cerca de uno de ellos, el drogadicto te hace una oferta y, si la aceptas con `/traficar aceptar`, le vendes la dosis al instante.

- Cada drogadicto aparece con **entre $10.000 y $19.999** encima.
- Permanece en la calle **entre 1 y 3 horas** y luego se marcha por su cuenta.
- También se retira cuando **se queda por debajo de $1.000**, pero nunca desaparece si hay jugadores cerca ni en mitad de una venta.
- Puede haber hasta **32** a la vez y el servidor repone los que faltan cada hora, así que siempre hay clientela.
- Para poder venderles debe haber al menos **2 policías en servicio**.

Solo compran **droga**: cualquier otra cosa que les ofrezcas será rechazada con un desplante, y puede acabar en pelea (ver más abajo). El precio depende de los gramos, del tipo de sustancia y de la **calidad**, que multiplica la paga entre **0,5 veces** con calidad pésima y **2 veces** con calidad excelente. Las sustancias que también se venden legalmente en negocios se pagan a precio base, sin bonificación por calidad.

### Campamentos

Los callejones de la ciudad tienen **campamentos de indigentes** con carpas y basura. No son fijos: como mucho hay **6 abiertos a la vez**, cada uno con **3 o 4 drogadictos**, y rotan por la ciudad. Un campamento solo existe mientras hay gente en él; cuando se queda sin nadie se cierra, y no se abre uno donde haya jugadores o vehículos cerca. Además hay unos pocos drogadictos sueltos por la calle.

### Camellos

En **esquinas fijas** de Los Santos pueden aparecer hasta **2 camellos** a la vez. Funcionan como los drogadictos, con estas diferencias:

- Te pagan **un 20% más** por la droga.
- Van armados con una pistola de 9mm. Si les haces daño y siguen vivos, te disparan siempre; si les ofreces algo que no es droga, hay un **50% de probabilidad** de que lo hagan. En ambos casos disparan mientras estés a la vista y a menos de 30 metros.
- Al morir sueltan un fajo de entre **$1.000 y $5.000** en el suelo, que puedes recoger durante unos 5 minutos.

### Vagabundos agresivos

Una parte de los vagabundos (cerca del 40%, con un máximo de **8** a la vez) es agresiva. Pueden atacarte si:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/vagabundo-agresivo.jpg" alt="Vagabundo agresivo atacando con un cuchillo en un campamento" width="886" height="1072">

- Aceptas venderles droga: **15%** de probabilidad de que intenten robarte.
- Les ofreces algo que no es droga: **25%** de probabilidad de que se enfurezcan.
- Los atacas o los hieres.

El vagabundo se lanza a por ti corriendo, con un cuchillo oculto o, en cuatro de cada diez casos, a puñetazos. Si te deja **herido**, te roba el **10% del efectivo** que lleves, con un máximo de **$2.500**. Dejan de perseguirte si te alejas, te subes a un vehículo o te pierden de vista, y en cualquier caso abandonan al minuto. Después de un ataque, ningún vagabundo ni camello vuelve a provocarte por una venta u oferta durante 3 minutos. No atacan en el paintball ni durante eventos como la Purga.

### Comprador de alta mar

Existe además un **comprador especial** que opera en alta mar, lejos de la costa: solo acepta **drogas**, paga **un 25% más** que un drogadicto normal (salvo las sustancias que también se venden en negocios, que paga a precio base) y maneja hasta **$1.000.000**, pero únicamente hace negocios con miembros de [facciones ilegales](facciones-ilegales.md) oficiales. Va armado con un subfusil y, como el camello, puede dispararte si le ofreces algo que no es droga.

### Avisos a la policía

Cada venta puede acabar en un aviso a la policía. La probabilidad parte del **30%** y baja según tu habilidad de drogas, hasta un mínimo del **5%** con habilidad máxima; además, solo puede generarse un aviso cada **2 minutos**. Todo lo relativo a producción, calidad y efectos está en el [sistema de drogas](sistema-de-drogas.md).

## Diferencia con Ammu-Nation y las armas ensambladas

Las armas de Ammu-Nation son legales, quedan a tu nombre y exigen licencia; las del mercado negro también llevan serial a tu nombre, pero no piden licencia, solo habilidad, dinero y paciencia; y las **armas ensambladas** por los contrabandistas de facción se fabrican desde cero dentro de la organización, pero requieren pedido, tiempo de fabricación y pertenecer a la facción correcta, tal como explica el [sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md).

## Consejos

- Sube tu habilidad de delincuente antes de acercarte: por debajo de **50** solo podrás vender botín (y, aun así, no la mercancía de camiones), y las armas largas empiezan en **80**.
- Si vas a vender órganos, junta primero la habilidad de paramédico: sin ella la opción ni aparece en el menú.
- Aprovecha el tiempo de espera del arma para acumular munición, que no tiene descanso entre compras.
- Si perteneces a una facción ilegal con contrabandistas, compra allí la munición: te ahorras más de la mitad del precio.
- Para comprar, lleva la mano derecha libre antes de abrir el menú; para vender, lleva en ella el objeto que quieres vender.
- Guarda la clínica clandestina para emergencias reales: el descanso de 4 horas es largo y no cubre heridas brutales.
- Planifica el viaje a Idlewood con la mochila llena: cada objeto se vende de uno en uno.
- Cuidado con lo que llevas encima al pasar por los callejones: un vagabundo ofendido puede dejarte sin una parte del efectivo.
