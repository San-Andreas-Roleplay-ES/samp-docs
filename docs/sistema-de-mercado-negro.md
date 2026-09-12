# Sistema de mercado negro

## Introducción

El **mercado negro** es la red clandestina que compra el botín de los delincuentes y les vende lo que ninguna tienda legal les daría: armas de fuego sin registro, cargadores, cajas de munición e incluso atención médica sin preguntas. Es el destino natural de todo lo que consigues robando y la vía más rápida para armarte cuando no perteneces a una facción con contrabandistas propios.

Desde la reforma de Idlewood, el mercado negro dejó de estar repartido en once puntos por toda la ciudad y se concentra en un único lugar: el **Idlestack**, la base criminal del sur de Los Santos, levantada sobre el terreno del antiguo carwash y las colinas de Idlewood. Allí encontrarás tanto al comprador de mercancía robada como la **clínica clandestina**. La pizzería de la zona también es uno de los puntos de `/reaparecer`, así que es un buen sitio para establecer tu base de operaciones.

Las armas son la excepción: no se venden en Idlewood, sino a través de **armerías de Las Venturas** que blanquean la operación. Cuando pides un arma, el contacto te asigna un punto concreto y te lo marca en el mapa; hasta que no llegues ahí, no se abre la venta.

Todo el mercado negro es **exclusivo para delincuentes**. Si eres policía o miembro de una facción legal, tu contacto no te responderá. Para convertirte en delincuente revisa el [sistema de delincuente](sistema-de-delincuente.md).

### Comandos

- /mercadonegro — abre el mercado negro para comprar munición y vender botín. También funciona con `/venderrobo`, `/vendernegro` y `/traficarnegro`.
- /conseguirarma — pide un arma de fuego sin registro; te marca la armería asignada.
- /curarme — cura tus heridas en la clínica clandestina, si estás sobre el punto.
- /traficar — vende droga a un junkie o a un contacto de misión.

## Requisitos generales

Antes de que el mercado negro te abra la puerta necesitas cumplir varias condiciones:

| Requisito | Vender botín | Comprar munición | Comprar armas |
| --------- | ------------ | ---------------- | ------------- |
| Ser delincuente | Sí | Sí | Sí |
| Horas jugadas | **50** | **50** | **50** |
| Habilidad de delincuente | — | **50+** | **50+** |
| Puntos de rol positivos | — | — | **2** |
| Mano derecha libre | — | Sí | Sí |

Si todavía no llegas a las 50 horas, tu alternativa para deshacerte del botín es la **Pawn Shop** con `/empeñar`.

## Venta de botín

Con `/mercadonegro` sobre el punto de Idlewood se abre un menú con todo lo que el comprador acepta. Debes llevar el objeto **en la mano derecha**: se vende esa pieza y desaparece de tu inventario al instante.

| Categoría | Qué acepta | Requisito extra |
| --------- | ---------- | --------------- |
| Teléfonos y computadores | Móviles y equipos informáticos robados | — |
| Joyas | Cualquier pieza de joyería | — |
| Autopartes | Piezas desmontadas de vehículos | — |
| Muebles | Muebles robados de propiedades | El mueble debe ser de los robables |
| Mercancía de camiones | Cargamentos interceptados | Habilidad de delincuente **50+** |
| Órganos | Corazón, pulmones, hígado, intestinos, páncreas y riñones | Habilidad de paramédico **25+** |

### Cuánto pagan

La mayor parte del botín se paga al **80% de su valor base**. En las autopartes y en los muebles ese porcentaje se aplica sobre el valor de la pieza concreta; en la mercancía de camiones se calcula sobre la cantidad transportada, con un **tope de $10,000 por cargamento**. No puedes vender la mercancía de un pedido de camionero que estés realizando tú mismo.

Los órganos tienen precio fijo y son, con diferencia, lo más rentable:

| Órgano | Precio |
| ------ | ------ |
| Corazón | **$30,000** |
| Riñones | **$27,000** |
| Pulmones | **$17,000** |
| Hígado | **$10,000** |
| Intestinos | **$8,500** |
| Páncreas | **$7,000** |

Durante los eventos de experiencia del servidor, las cuentas verificadas cobran un **10% extra** (evento doble) o un **20% extra** (evento triple) por teléfonos, joyas, autopartes, muebles, mercancía y órganos.

## Compra de armas

`/conseguirarma` es la vía para hacerte con un arma de fuego sin pasar por Ammu-Nation. El contacto te asigna una **armería de Las Venturas** y te marca el destino; solo al llegar se abre el catálogo. El arma que compras se entrega **registrada a nombre de esa armería**, lo que la hace rastreable: revisa el [sistema de armas](sistema-de-armas.md) para entender qué implica eso frente a la policía.

Cada arma exige una habilidad de delincuente mínima. Las que no alcanzas aparecen bloqueadas en la lista, con el nivel que te falta.

| Arma | Habilidad de delincuente | Precio |
| ---- | ------------------------ | ------ |
| Hi-Point C9 | 50 | **$4,960** |
| Bersa Firestorm | 50 | **$5,440** |
| Taurus G2C | 50 | **$5,760** |
| SCCY CPX-2 | 50 | **$5,760** |
| Sig Sauer P320 | 50 | **$8,400** |
| Walther PDP | 50 | **$8,400** |
| Stoeger STR-9 | 50 | **$8,400** |
| Ruger American Pistol | 50 | **$8,400** |
| Beretta APX A1 | 70 | **$9,440** |
| Glock 19 Gen5 | 70 | **$9,440** |
| Citadel CDP12 (escopeta) | 80 | **$6,480** |
| MAC-10 (subfusil) | 80 | **$7,360** |
| Savage Axis XP (rifle) | 90 | **$7,776** |
| SLR-107 (fusil) | 90 | **$13,800** |
| Colt AR15 (fusil) | 100 | **$23,000** |

Solo puedes comprar **un arma por operación** y necesitas la mano derecha libre para recibirla.

### Tiempo de espera entre armas

Tras comprar, tu contacto desaparece durante un buen rato. El plazo es de **una semana (168 horas) para todos los jugadores**, sin importar el arma.

La única excepción son los usuarios **Platino** y **Ruby**, que esperan **la mitad** —3 días y medio, 84 horas— cuando el arma comprada es una pistola: las de calibre 9mm, las silenciadas y las Desert Eagle. Para escopetas, subfusiles, rifles y fusiles el plazo vuelve a ser de una semana completa incluso para ellos. Puedes consultar los niveles en la [tienda premium](tienda-premium.md).

| Tipo de arma | Sin premium, Bronce, Plata u Oro | Platino y Ruby |
| ------------ | -------------------------------- | -------------- |
| Pistolas (9mm, 9mm silenciada, Desert Eagle) | **1 semana** | **3 días y medio** |
| Escopetas, subfusiles, rifles y fusiles | **1 semana** | **1 semana** |

Si intentas comprar antes de tiempo, el juego te indica cuántos minutos faltan.

## Compra de munición

Los delincuentes con habilidad **50+** pueden comprar **cargadores y cajas de munición** directamente desde el menú de `/mercadonegro`, sin desplazarse a Las Venturas y sin tiempo de espera entre compras. La contrapartida es el precio: el mercado negro cobra **3.5 veces el valor base**, mientras que los contrabandistas de facción venden a **1.5 veces**. Si tienes acceso a un contrabandista, seguirá siendo siempre la opción más barata.

| Munición | Precio en el mercado negro | Precio con contrabandista |
| -------- | -------------------------- | ------------------------- |
| Cargador 9x19, .40, .45, .357 o .22 LR | **$567** | $243 |
| Cargador 7.62x39, 5.56x45, 7.62x51 o .380 | **$1,134** | $486 |
| Perdigones 12ga | **$1,134** | $486 |
| Cargador .44 | **$2,835** | $1,215 |
| Caja de munición 9x19 | **$3,402** | $1,458 |
| Caja de munición 12ga o 7.62x39 | **$4,529** | $1,941 |
| Caja de munición .300 Winchester Magnum | **$6,037** | $2,587 |

Como con las armas, necesitas la mano derecha libre.

## Clínica clandestina

Junto al mercado negro de Idlewood hay un **punto de curación clandestino** marcado en el suelo. Usando `/curarme` sobre él recuperas toda tu salud y se te **borran todas las heridas** sin tener que pasar por el hospital ni por el papeleo del [sistema médico y hospital](sistema-medico-y-hospital.md).

- Coste: **$15,000**.
- Requiere habilidad de delincuente **superior a 25**.
- **No funciona si estás brutalmente herido**: en ese estado solo el hospital puede salvarte.
- No se puede usar desde un vehículo.
- Descanso de **4 horas** entre curaciones.

Es obligatorio **rolear la atención médica clandestina**: el médico que te atiende, la sala, el procedimiento.

## Junkies

Los **junkies** son adictos controlados por el servidor que aparecen repartidos por toda la ciudad, sobre todo en las zonas degradadas del sur de Los Santos y alrededor del Idlestack. Son la clientela habitual del narcomenudeo: con droga en la mano derecha y `/traficar` cerca de uno de ellos, le vendes la dosis al instante.

- Cada junkie aparece con **entre $10,000 y $20,000** encima.
- Permanece en la calle **entre 1 y 3 horas** y luego se marcha por su cuenta.
- También se retira cuando **se queda por debajo de $1,000**, pero nunca desaparece si hay jugadores cerca ni en mitad de una venta.
- Puede haber hasta **64 junkies** a la vez y el servidor repone los que faltan cada hora, así que siempre hay clientela.
- Para poder venderles debe haber al menos **2 policías en servicio**.

Solo compran **droga**: cualquier otra cosa que les ofrezcas será rechazada con un desplante. El precio depende de los gramos, del tipo de sustancia y de la **calidad**, que multiplica la paga entre **0.5 veces** con calidad pésima y **2 veces** con calidad excelente. Las sustancias que también se venden legalmente en negocios se pagan a precio base, sin bonificación por calidad.

Existe además un **comprador especial** que opera en alta mar, lejos de la costa: solo acepta **drogas**, paga **un 25% más** que un junkie normal y maneja hasta **$1,000,000**, pero únicamente hace negocios con miembros de [facciones ilegales](facciones-ilegales.md) oficiales.

Cada venta puede acabar en un aviso a la policía. La probabilidad parte del **30%** y baja según tu habilidad de drogas, hasta un mínimo del **5%** con habilidad máxima; además, solo puede generarse un aviso cada **2 minutos**. Todo lo relativo a producción, calidad y efectos está en el [sistema de drogas](sistema-de-drogas.md).

## Diferencia con Ammu-Nation y las armas ensambladas

Las armas de Ammu-Nation son legales, quedan a tu nombre y exigen licencia; las del mercado negro llegan registradas a una armería ajena y solo piden habilidad, dinero y paciencia; y las **armas ensambladas** por los contrabandistas de facción se fabrican desde cero dentro de la organización, pero requieren pedido, tiempo de fabricación y pertenecer a la facción correcta, tal como explica el [sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md).

## Consejos

- Sube tu habilidad de delincuente antes de acercarte: por debajo de **50** solo podrás vender botín, y las armas largas empiezan en **80**.
- Aprovecha el tiempo de espera del arma para acumular munición, que no tiene descanso entre compras.
- Si perteneces a una facción ilegal con contrabandistas, compra allí la munición: te ahorras más de la mitad del precio.
- Lleva siempre la mano derecha libre antes de abrir el menú; si estás cargando algo, la operación se cancela.
- Guarda la clínica clandestina para emergencias reales: el descanso de 4 horas es largo y no cubre heridas brutales.
- Planifica el viaje a Idlewood con la mochila llena: cada objeto se vende de uno en uno.
