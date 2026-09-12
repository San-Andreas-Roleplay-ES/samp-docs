# Sistema de armas

## Introducción

En San Andreas Roleplay las armas no son un simple botón: son **objetos físicos** que ocupan espacio en tu inventario, pesan, se ensucian, se rompen, llevan un número de serial grabado y necesitan munición real para funcionar. Comprar una pistola legalmente exige licencia, casa propia, antecedentes limpios y horas de juego; conseguirla por la vía ilegal exige contactos. Y una vez que disparas, cada impacto queda registrado en el cuerpo de la víctima con el arma, la zona alcanzada y el daño causado.

Lo que ocurre en el cuerpo de la víctima (caer herido, hemorragias, vendajes, vida máxima) tiene su propia guía: el [sistema de heridas](sistema-de-heridas.md).

Esta guía cubre los requisitos para comprar y portar, los precios reales, la munición y la recarga, la tabla completa de armas con su calibre y daño, el chaleco antibalas, los seriales y qué ocurre con tu arsenal cuando mueres o te arrestan.

<img width="396" height="465" alt="image" src="https://github.com/user-attachments/assets/03246ace-0513-420d-b4aa-97686519bd6f" />

### Comandos

- `/cargar [cantidad]` — pasa balas del cargador al arma que tienes en la mano derecha. Alias: `/recargar`.
- `/municion` — rellena el cargador de tu mano derecha desde una caja de munición cercana.
- `/limpiararma` — repara el arma de la mano derecha con un kit de limpieza en la izquierda. Alias: `/reparararma`.
- `/serial` — muestra el serial del arma que empuñas.
- `/borrarserial confirmar` — borra el serial del arma (delito grave).
- `/usar` — colócate el chaleco antibalas que tengas en la mano.
- `/licencia [id] armas` — enseña tu licencia de portación a una persona cercana.

## Requisitos para comprar y portar

### Usar cualquier arma

Antes de disparar nada, tu personaje necesita cumplir dos condiciones básicas:

| Requisito | Valor |
|---|---|
| Horas de juego mínimas | **24 horas** |
| Autenticación de doble factor (2FA) | **Activada en tu cuenta** |

Sin esas dos cosas no puedes cargar ni disparar un arma. La verificación de doble factor se activa desde el [panel de control](panel-de-control.md). Los policías en servicio están exentos de estos requisitos.

### Comprar un arma en Ammu-Nation

Las armerías Ammu-Nation son negocios normales, con dueño, empleados y stock, y venden armas, cargadores, cajas de munición, kits de limpieza y accesorios. Para comprarte un arma ahí necesitas **todo** lo siguiente:

| Requisito | Detalle |
|---|---|
| **Licencia de portación (CCW)** | Obligatoria para llevarte cualquier arma. |
| **50 horas de juego** | Se aplica también a cargadores y cajas de munición. |
| **Una casa a tu nombre** | Sin propiedad residencial no te venden armas ni munición. |
| **Sin antecedentes penales** | Un solo arresto en tu historial te cierra la venta. |
| **Mano derecha libre** | El arma se te entrega en la mano. |
| **Espera entre compras** | **Dos semanas** entre arma y arma (una semana con premium alto). |

Además, si tu personaje tiene asesinatos registrados, la tienda tampoco te venderá cargadores ni munición salvo que tengas licencia vigente o pertenezcas a las fuerzas del orden o a seguridad privada.

### La licencia de portación (CCW)

La licencia de armas la entrega un **líder de la policía o de la fiscalía en servicio**, en persona. No se compra en una máquina ni en la autoescuela: tienes que rolear el trámite con la facción correspondiente.

Requisitos para que te la otorguen:

- Tener **licencia de conducir** vigente (se saca en la autoescuela).
- **No tener ningún antecedente penal**.

Existe además el **permiso 4473**, un permiso puntual de compra que entregan la fiscalía o los detectives fiscales y que exige licencia de conducir más **certificado médico** tramitado con los servicios de emergencia. El permiso 4473 se consume al comprar un arma.

La licencia puede ser **revocada** por un oficial en servicio en cualquier momento, y se pierde automáticamente si tu personaje es condenado. Cambiar el nombre de tu personaje también borra tus licencias.

Con `/licencia [id] armas` puedes enseñar el documento a otra persona, igual que harías con la de conducir.

### Portar el arma

Las armas se dividen en dos categorías según su tamaño:

- **De bolsillo** — pistolas, revólveres, subfusiles compactos y escopetas recortadas. Ocupan un hueco de inventario y puedes llevarlas encima sin que se vean.
- **Pesadas** — escopetas largas, fusiles de asalto, ametralladoras y rifles de francotirador. Ocupan dos huecos y deben ir en la espalda, en el pecho, en las manos o dentro de un **estuche porta rifles** (coste base **$431**). Un bolso deportivo también sirve para transportar material pequeño.

Ir armado sin licencia tiene consecuencias: si ingresas herido al hospital, el personal médico alerta por radio a la policía de que hay un paciente armado sin permiso.

Los delincuentes consiguen armamento por otras vías; eso se explica en el [sistema de mercado negro](sistema-de-mercado-negro.md) y en el [sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md).

## Precios

Cada Ammu-Nation es un negocio privado y **su dueño fija el precio de venta**, así que los importes en mostrador varían de una tienda a otra y cambian con el tiempo. Lo que no cambia es el **coste base** de cada artículo: es el valor de referencia con el que el negocio se abastece y la base sobre la que se calculan los márgenes. Las tablas de armas de más abajo muestran ese coste base.

Consumibles y accesorios habituales de armería:

| Artículo | Coste base | Notas |
|---|---|---|
| Kit de limpieza de armas | **$518** | Trae 20 usos; cada reparación gasta 5. |
| Chaleco kevlar | **$431** | 100 puntos de protección. |
| Estuche porta rifles | **$431** | Para transportar armas pesadas. |
| Bolso deportivo | **$144** | 20 huecos de inventario. |
| Destornillador | **$15** | Herramienta para borrar seriales. |
| Vendaje | **$144** | Detiene hemorragias. |
| Torniquete | **$360** | Detiene hemorragias por más tiempo. |
| Rollo de gasa | **$44** | Alternativa barata al vendaje. |

## Munición y recarga

El sistema funciona en **tres piezas separadas**, y conviene entenderlo antes de meterse en un tiroteo:

1. **El arma** tiene una recámara con una capacidad máxima de balas. Es lo único desde lo que disparas.
2. **El cargador** es un objeto aparte, con su propio calibre y su propia capacidad (normalmente **60 balas** en calibres de pistola, **30** en fusil, **20** en escopeta y **10** en calibres de rifle de precisión). Se usa para recargar el arma.
3. **La caja de munición** guarda **1.000 balas** y sirve de reserva. No recarga el arma directamente: solo rellena cargadores.

Un arma solo admite munición de **su calibre exacto**. Una Glock 17 de 9x19 no puede usar un cargador .45 aunque lo lleves encima.

### Recargar el arma

Con el arma en la **mano derecha** y el cargador compatible en la **mano izquierda**, en tu equipo o en tu inventario, usa `/cargar` o `/recargar`. Si no indicas cantidad, se llena hasta el tope. Las armas de gran capacidad (50 balas o más) también pueden recargarse desde una caja de munición que tengas cerca.

Antes de recargar, el estado del arma puede jugarte una mala pasada:

- **Rota** — el cargador se atasca y no consigues recargar.
- **Dañada** — un tercio de las veces el cargador no entra y hay que reintentar.
- **Desgastada** — falla una de cada diez veces.

<img width="216" height="79" alt="image" src="https://github.com/user-attachments/assets/57e3c92d-71bb-4f49-b586-ecddf3309c20" />

### Rellenar el cargador

Sostén el cargador en la **mano derecha**, acércate a una **caja de munición** del mismo calibre y usa `/municion`. Se transfieren tantas balas como quepan en el cargador o queden en la caja.

<img src="../assets/sistema-de-armas/municion1.png">

### Costes base de la munición

| Calibre | Cargador | Caja de 1.000 balas |
|---|---|---|
| .22 LR | $162 | $647 |
| 9x19 | $162 | $972 |
| .40 | $162 | $972 |
| .45 | $162 | $972 |
| .357 | $162 | $972 |
| .380 | $324 | $972 |
| 12GA (perdigones) | $324 | $1.294 |
| 7.62x39 | $324 | $1.294 |
| 5.56x45 | $324 | $1.294 |
| 7.62x51 | $324 | $1.294 |
| .308 Winchester | $403 | $1.553 |
| .30-06 Springfield | $460 | $1.610 |
| 6.5 Creedmoor | $518 | $1.668 |
| .300 Winchester Magnum | $575 | $1.725 |

El cargador **.44** de la Desert Eagle es el más caro del catálogo con **$810** de coste base y solo **7 balas** de capacidad.

## Estado del arma

Cada arma tiene una **calidad de 0 a 100** que baja con cada disparo y también **un punto por día** por simple envejecimiento, aunque la guardes sin tocarla. Cuanto peor esté el arma, menos daño hace y más fácil es que se atasque.

| Estado | Calidad | Efecto |
|---|---|---|
| **En buen estado** | Más de 50 | Daño íntegro, sin atascos. |
| **Desgastada** | Entre 26 y 50 | Pierde **entre un 30% y un 60%** de daño; falla al recargar el 10% de las veces. |
| **Dañada** | Entre 2 y 25 | Pierde hasta un **60%** de daño; falla al recargar un tercio de las veces. |
| **Rota** | 1 o menos | El daño cae un **70%** y el cargador queda atascado: no se puede recargar. |

### Reparar el arma

Necesitas un **kit de limpieza**. Sostén el arma en la mano derecha, el kit en la izquierda y usa `/limpiararma`.

- El proceso tarda entre **15 segundos** (arma casi nueva) y **60 segundos** (arma destrozada).
- Cada reparación devuelve entre **10 y 33 puntos** de calidad: cuanto peor esté el arma, menos recupera por pasada.
- Cada reparación consume **5 unidades** del kit, que trae 20 en total.
- No se puede reparar dentro de un vehículo, y si guardas el arma o el kit a mitad del proceso, se cancela.

<img width="400" height="45" alt="image" src=../assets/sistema-de-armas/limpiararma.png>

## Seriales y registro

Cada arma fabricada o vendida legalmente lleva un **número de serial único** grabado, que permite rastrearla hasta el comprador original y la armería que la despachó. Es la principal prueba que usa la policía para vincular un arma con un crimen.

- Las armas compradas en comercios llevan un serial **numérico de 8 cifras**, asociado a tu personaje.
- Las armas del **armamento federal** entregadas a facciones llevan el formato **CÓDIGO-NÚMERO**, donde el código identifica a la facción propietaria.

<img width="212" height="18" alt="image" src="https://github.com/user-attachments/assets/8bc00f91-f086-4495-8241-b1b1c40d1f06" />

Con `/serial` ves el serial del arma que empuñas. Si el arma nunca lo tuvo, el sistema lo indica.

### Borrar el serial

Un delincuente experimentado puede limar el serial con un **destornillador en la mano izquierda** usando `/borrarserial confirmar`. Requiere al menos **80 puntos de habilidad de delincuente**. A partir de ahí el arma figura como "borrada" y deja de ser rastreable, pero es un **delito grave** que aumenta considerablemente la condena si te lo descubren.

<img width="212" height="18" alt="image" src=../assets/sistema-de-armas/serial-borrado1.png>

<img width="212" height="18" alt="image" src=../assets/sistema-de-armas/serial-borrado2.png>

Cada disparo deja además casquillos en el suelo y restos de pólvora en las manos, que los investigadores pueden recoger y analizar. Ese trabajo se detalla en el [sistema forense](sistema-forense.md).

## Heridas

Cada impacto queda registrado en el cuerpo de la víctima con el arma, la zona y el daño. Caer herido, los umbrales de muerte, el sangrado, los vendajes y cómo socorrer a alguien se explican en el [sistema de heridas](sistema-de-heridas.md). Aquí solo interesa lo que depende del arma: el daño por calibre (tabla más abajo) y el chaleco que lo frena.

## Chaleco antibalas

El **chaleco kevlar** es un accesorio que se coloca sobre el torso y absorbe impactos antes de que lleguen a tu vida.

| Parámetro | Valor |
|---|---|
| Protección inicial | **100 puntos** |
| Desgaste por impacto absorbido | **20 puntos** |
| Protección mínima útil | **5 puntos** |
| Peso | **2,6 kg** (ocupa 2 huecos) |
| Coste base | **$431** |

Cómo funciona:

- Solo protege **impactos al torso**. Un tiro a la cabeza, los brazos o las piernas lo atraviesa.
- Solo absorbe el impacto si el disparo viene **de al menos 10 metros** o si el arma es de las que el chaleco puede parar. **A quemarropa muchas armas lo perforan.**
- **Las escopetas y los rifles de gran calibre lo ignoran siempre**: Citadel CDP12, Mossberg 590A1 y Mav88, Remington 870, Benelli M4, Serbu Super Shorty, Mossberg 500 Compact Cruiser, Tikka T3x, Sako 85 y M40A6 atraviesan el kevlar sin importar la distancia.
- El chaleco se **gasta**: cada impacto absorbido le quita 20 puntos, y cuando baja del mínimo queda inservible. No se repara con el kit de limpieza.
- Los impactos que el chaleco frena **no generan herida registrada ni hemorragia**: por eso es la diferencia entre un susto y una ambulancia.
- No puede usarse en eventos especiales.

Para colocártelo, ten el chaleco en la mano y usa `/usar`. El chaleco kevlar estándar se lleva bajo la ropa y no es visible; otros modelos (policiales, reflectantes) sí se ven y pueden ajustarse con `/editar chaleco`.

Existen también reducciones de daño que no dependen del chaleco: los **escudos** antidisturbios reducen a la mitad el daño recibido, igual que el equipo táctico pesado de las unidades especiales; disparar desde dentro de un vehículo a más de 7 metros **falla la mitad de las veces**, y los vehículos blindados anulan por completo el daño a sus ocupantes. Tu vida máxima (musculatura y felicidad) se explica en el [sistema de heridas](sistema-de-heridas.md).

## Tabla de calibres y daño

El daño indicado es el de un arma **en buen estado**. Recuerda que la calidad reduce el daño hasta un 70%, y que el arma solo hace daño si tiene balas cargadas.

### Pistolas y revólveres (de bolsillo)

| Arma | Calibre | Cargador | Peso | Daño | Coste base |
|---|---|---|---|---|---|
| Hi-Point C9 | 9x19 | 8 | 0,6 kg | 18 | $620 |
| Bersa Firestorm | .380 | 8 | 0,6 kg | 18 | $680 |
| Taurus G2C | .40 | 12 | 0,8 kg | 19 | $720 |
| SCCY CPX-2 | 9x19 | 10 | 0,8 kg | 19 | $720 |
| CZ75B | 9x19 | 16 | 1,0 kg | 20 | $820 |
| Beretta 92FS | 9x19 | 15 | 1,2 kg | 20 | $820 |
| Ruger Security-9 | 9x19 | 15 | 1,0 kg | 20 | $820 |
| Springfield XD40 | .40 | 12 | 1,0 kg | 21 | $920 |
| Sig Sauer SP2022 | 9x19 | 15 | 0,8 kg | 21 | $920 |
| Canik TP9 SF | .40 | 18 | 1,0 kg | 21 | $920 |
| S&W Shield | 9x19 | 14 | 0,8 kg | 22 | $1.050 |
| Glock 17 | 9x19 | 17 | 1,2 kg | 22 | $1.050 |
| Glock 45 / Glock 47 | 9x19 | 17 | 1,2 kg | 22 | $1.050 |
| Sig Sauer P226 | 9x19 | 15 | 1,0 kg | 22 | $1.050 |
| Sig Sauer P320 | 9x19 | 17 | 1,2 kg | 22 | $1.050 |
| S&W M&P9 | 9x19 | 17 | 1,3 kg | 22 | $1.050 |
| S&W SD9 VE | 9x19 | 16 | 1,2 kg | 22 | $1.050 |
| Ruger American Pistol | 9x19 | 17 | 1,2 kg | 22 | $1.050 |
| Walther PDP | 9x19 | 18 | 1,2 kg | 22 | $1.050 |
| IWI Masada | 9x19 | 17 | 1,2 kg | 22 | $1.050 |
| Stoeger STR-9 | 9x19 | 15 | 1,2 kg | 22 | $1.050 |
| HK USP | .45 | 12 | 1,4 kg | 23 | $1.180 |
| FNX-45 Tactical | .45 | 19 | 1,4 kg | 23 | $1.180 |
| FN 509 MRD-LE | 9x19 | 17 | 1,2 kg | 23 | $1.180 |
| CZ P-10 F | 9x19 | 19 | 1,4 kg | 23 | $1.180 |
| Beretta APX A1 | 9x19 | 19 | 1,4 kg | 23 | $1.180 |
| HK VP9 | 9x19 | 17 | 1,4 kg | 23 | $1.180 |
| Sig Sauer P229 | 9x19 | 15 | 1,4 kg | 23 | $1.180 |
| Glock 19 Gen5 | 9x19 | 12 | 1,4 kg | 23 | $1.180 |
| Shadow Systems MR920 | 9x19 | 12 | 1,4 kg | 23 | $1.180 |
| Taurus 605 | .357 | 5 | 0,6 kg | 24 | $1.350 |
| Colt Python 4P | .357 | 5 | 0,6 kg | 24 | $1.350 |
| S&W Model 686 | .357 | 5 | 0,6 kg | 24 | $1.350 |
| Glock 31 | .357 | 15 | 1,1 kg | 24 | $1.350 |
| Glock 39 | .45 | 6 | 1,0 kg | 24 | $1.350 |
| Glock 20 / Glock 21 | .45 | 6 | 1,0 kg | 24 | $1.350 |
| Springfield XD-M Elite 10mm | .45 | 6 | 1,0 kg | 24 | $1.350 |
| Sig Sauer P220 | .45 | 6 | 1,0 kg | 24 | $1.350 |
| FN 510 Tactical | .45 | 6 | 1,0 kg | 24 | $1.350 |
| Desert Eagle | .44 | 8 | 1,6 kg | **40** | $3.300 |
| Magnum Research BFR | .44 | 8 | 1,6 kg | **40** | $3.300 |

### Pistolas con silenciador (de bolsillo)

| Arma | Calibre | Cargador | Peso | Daño | Coste base |
|---|---|---|---|---|---|
| Suppressed Ruger MkIV | .22 LR | 10 | 1,0 kg | 18 | $1.450 |
| Suppressed Glock 19 | .45 | 15 | 1,3 kg | 22 | $1.750 |
| Suppressed HK45 | .45 | 10 | 1,3 kg | 23 | $1.750 |
| Suppressed Sig Sauer P226 | .45 | 15 | 1,3 kg | 23 | $1.750 |
| AF-1 Strike One | 9x19 | 17 | 0,75 kg | 23 | $1.750 |

### Pistolas automáticas y subfusiles compactos (de bolsillo)

| Arma | Calibre | Cargador | Peso | Daño | Coste base |
|---|---|---|---|---|---|
| AA Arms AP9 | 9x19 | 20 | 1,1 kg | 15 | $1.132 |
| MAC-10 | 9x19 | 25 | 1,0 kg | 16 | $920 |
| CZ75 Auto | 9x19 | 17 | 1,2 kg | 16 | $972 |
| Beretta 92F Auto | 9x19 | 20 | 1,3 kg | 16 | $1.294 |
| Glock 18 Auto | 9x19 | 25 | 1,0 kg | 17 | $1.456 |
| AA Custom FMG9 | 9x19 | 40 | 1,0 kg | 17 | $19.406 |

### Escopetas compactas (de bolsillo)

Ignoran el chaleco antibalas.

| Arma | Calibre | Cargador | Peso | Daño | Coste base |
|---|---|---|---|---|---|
| Serbu Super Shorty | 12GA | 3 | 1,8 kg | **34** | $1.618 |
| Mossberg 500 Compact Cruiser | 12GA | 4 | 2,2 kg | 26 | $1.941 |

### Escopetas (pesadas)

Ignoran el chaleco antibalas.

| Arma | Calibre | Cargador | Peso | Daño | Coste base |
|---|---|---|---|---|---|
| Citadel CDP12 | 12GA | 5 | 3,0 kg | 25 | $810 |
| Mossberg 590A1 | 12GA | 6 | 2,4 kg | 28 | $972 |
| Mossberg Mav88 | 12GA | 7 | 3,0 kg | 28 | $1.132 |
| Remington 870 | 12GA | 8 | 3,6 kg | 30 | $1.456 |
| Benelli M4 | 12GA | 6 | 4,0 kg | **33** | $1.779 |

Además de su poder de parada, una escopeta disparada contra la puerta de un interior la **revienta de un tiro**, abriendo paso sin ganzúas ni ariete.

### Subfusiles (pesadas)

| Arma | Calibre | Cargador | Peso | Daño | Coste base |
|---|---|---|---|---|---|
| UZI | 9x19 | 30 | 3,5 kg | 15 | $2.588 |
| Colt Commando | 9x19 | 45 | 2,6 kg | 16 | $2.912 |
| HK MP7 | 9x19 | 30 | 1,9 kg | 17 | $3.073 |
| HK MP5 | 9x19 | 30 | 2,5 kg | 18 | $3.397 |

### Fusiles de asalto (pesadas)

| Arma | Calibre | Cargador | Peso | Daño | Coste base |
|---|---|---|---|---|---|
| Colt AR15 | 5.56x45 | 30 | 3,2 kg | 9 | $2.875 |
| M16A1 | 5.56x45 | 30 | 3,2 kg | 10 | $2.645 |
| Colt M4 | 5.56x45 | 30 | 3,5 kg | 14 | $3.105 |
| SLR-107 | 7.62x39 | 60 | 2,8 kg | 14 | $1.725 |
| VSS Vintorez | 9x39 | 10 | 2,5 kg | 15 | $1.941 |
| WASR-10 | 7.62x39 | 60 | 2,8 kg | 16 | $2.588 |
| HK416 | 5.56x45 | 30 | 3,8 kg | 16 | $3.397 |
| AKMSU | 7.62x39 | 60 | 2,8 kg | 18 | $2.013 |
| Zastava M70 | 7.62x39 | 60 | 3,7 kg | 21 | $2.750 |
| M240 | 7.62x51 | 250 | 3,5 kg | **33** | $6.389 |

### Rifles y francotiradores (pesadas)

| Arma | Calibre | Cargador | Peso | Daño | Coste base | Perfora chaleco |
|---|---|---|---|---|---|---|
| Savage Axis XP | .308 Winchester | 4 | 3,3 kg | 40 | $972 | No |
| Winchester Modelo 70 | .30-06 Springfield | 4 | 3,3 kg | **55** | $972 | No |
| Remington 788 | .308 Winchester | 3 | 3,3 kg | 45 | $1.941 | No |
| Ruger American | .308 Winchester | 4 | 3,0 kg | 25 | $5.750 | No |
| SR-25 | 7.62x51 | 5 | 3,3 kg | 40 | $3.478 | No |
| Remington 700P | .30-06 Springfield | 4 | 3,4 kg | 40 | $8.625 | No |
| Tikka T3x | 6.5 Creedmoor | 3 | 3,0 kg | **50** | $11.500 | **Sí** |
| Sako 85 | .300 Winchester Magnum | 3 | 3,7 kg | **70** | $14.375 | **Sí** |
| M40A6 | 7.62x51 | 5 | 4,0 kg | **100** | $22.641 | **Sí** |

### Armas blancas y contundentes

Las armas blancas no usan munición y algunas provocan hemorragia. Las **apuñaladas** cuentan hacia el umbral de 5 heridas mortales; los **golpes** con objeto contundente, hacia el de 10.

| Arma | Daño | Peso | Coste base | Provoca sangrado |
|---|---|---|---|---|
| Cuchillo destripador de gancho | 30 | 0,1 kg | $1.150 | Sí |
| Pala | 25 | 5,0 kg | $15 | No |
| Cuchillo de hoja fija | 20 | 0,1 kg | $863 | Sí |
| Porra | 15 | 0,6 kg | $144 | No |
| Palo de golf | 15 | 0,14 kg | $44 | No |
| Cuchillo | 10 | 0,1 kg | $144 | Sí |
| Cuchillo de hoja curva corta | 10 | 0,1 kg | $575 | Sí |
| Bate | 10 | 0,9 kg | $144 | No |
| Bastón | 10 | 0,2 kg | $15 | No |

Pelear a puño limpio hace **3 puntos** de daño por golpe, modificados por el estilo de lucha que hayas entrenado en el [gimnasio](sistema-de-gimnasio.md). Los **nudillos de acero** provocan hemorragia.

### Explosivos e incendiarios

| Arma | Capacidad | Peso | Efecto |
|---|---|---|---|
| Cóctel molotov | 1 | 1,0 kg | Incendia al objetivo; 3 quemaduras matan. |

Las bombas y artefactos explosivos tienen su propio sistema; consulta el [sistema de bombas](sistema-de-bombas.md).

## Qué pasa al morir o ser arrestado

Al reaparecer tras la muerte, el sistema revisa tu inventario. Si **no tienes licencia de armas** y no perteneces a la policía ni a seguridad privada, **pierdes todo el material ilegal que llevabas encima**: armas, cargadores, munición y drogas. Es la pérdida más cara de todo el sistema y la razón principal para tramitar la licencia si juegas un personaje legal.

Los jugadores con premium de nivel alto conservan el material pequeño y solo pierden las **armas pesadas**.

Si mueres y tu cuerpo queda en el suelo, tus pertenencias pueden ser registradas por quien llegue primero: el [sistema de cadáveres](sistema-de-cadaveres.md) explica el saqueo y el levantamiento de restos.

Durante una detención, la policía puede cachear a un sospechoso, incautarle el armamento y usarlo como evidencia, además de retirarle la licencia en el acto. También necesita **esposas físicas en la mano** para poder esposarte y recupera las esposas al liberarte. Todo el procedimiento policial se detalla en [facciones legales](facciones-legales.md) y las consecuencias judiciales en el [sistema de justicia](sistema-de-justicia.md).

Agredir a otro recluso estando encarcelado añade **3 horas** a tu condena.

## Consejos

- **Tramita la licencia antes de comprar nada.** Sin ella pierdes todo el arsenal cada vez que mueres, y no te venden ni un cargador.
- **Un arma sucia es un arma inútil.** Lleva siempre un kit de limpieza: un arma rota no solo hace un 70% menos de daño, es que ni siquiera puedes recargarla en mitad de un tiroteo.
- **Lleva cargadores llenos, no cajas.** La caja de munición no recarga el arma: si entras a un tiroteo con la caja y sin cargadores, no vas a poder disparar.
- **El chaleco no es invulnerabilidad.** A quemarropa lo perforan, las escopetas lo ignoran siempre y solo cubre el torso.
- **Un herido es salvable.** Antes de rematar o de dar por perdido a un compañero, recuerda que `/levantar` y `/metercoche` funcionan sin ser médico, y que hay cinco minutos de margen.
- **Si sangras, véndate.** El sangrado por sí solo puede matarte aunque nadie te vuelva a disparar.
