# Sistema de ensamblaje de armas

## Introducción

En San Andreas Roleplay no todas las armas son iguales, aunque disparen la misma bala. Lo que realmente distingue a un arma es **de dónde salió**: una pistola comprada legalmente en un Ammu-Nation queda registrada a tu nombre desde el primer día, mientras que una ensamblada en un taller clandestino no existe en ningún papel. Esa diferencia se paga con dinero, con tiempo de espera y con el riesgo que asumes cuando la policía la encuentra en tus manos.

Existen **tres orígenes posibles** para un arma de fuego: la **compra legal** en una armería, el **contacto del mercado negro** mediante `/conseguirarma`, y el **ensamblaje artesanal** con `/ensamblararmas`, reservado a los contrabandistas que montan su propio taller. Cada vía tiene su público: el ciudadano que quiere defender su casa, el delincuente que necesita un arma para un golpe puntual, y la facción ilegal que quiere abastecer a toda su banda.

Esta guía compara los tres caminos y luego explica cada uno en detalle, con énfasis en el ensamblaje, que es el más complejo y el que más planificación exige. Si te interesan los calibres, las heridas, los cargadores y el mantenimiento del arma una vez que la tienes, consulta [Sistema de armas](sistema-de-armas.md).

### Comandos

- `/ensamblararmas` — abre el catálogo de ensamblaje estando junto a tu punto de armas (solo contrabandistas).
- `/comprarcargadores` — fabrica cargadores y cajas de munición en tu punto de armas (solo contrabandistas).
- `/crearpuntoarmas [confirmar]` — establece tu taller de ensamblaje dentro de una casa o almacén de tu propiedad.
- `/destruirpuntoarmas [confirmar]` — destruye el taller de armas más cercano.
- `/conseguirarma` — contacta con el vendedor del mercado negro para comprar un arma.
- `/mercadonegro` — abre el menú del mercado negro, donde también se compra munición.
- `/comprar` — catálogo de la armería legal cuando estás dentro de ella.
- `/serial` — consulta el número de serie del arma que llevas en la mano derecha.
- `/borrarserial [confirmar]` — elimina el serial de un arma registrada.

## Comparativa de los tres orígenes

| | **Armería (legal)** | **Mercado negro (`/conseguirarma`)** | **Ensamblaje (`/ensamblararmas`)** |
|---|---|---|---|
| **Quién puede** | Cualquier ciudadano | Delincuentes | Solo contrabandistas |
| **Requisitos** | 50 horas jugadas, casa propia, licencia de armas y cero antecedentes penales | 50 horas jugadas, ser delincuente, **50 de habilidad de delincuente** y 2 puntos de rol positivos | Ser contrabandista y tener un punto de armas propio |
| **Dónde** | Dentro de una armería con stock | En un Ammu-Nation de Las Venturas o en Idlewood, donde te cite el contacto | En tu propia casa o almacén, junto a tu taller |
| **Precio** | El que fije el dueño del negocio, entre el valor base del arma y **10 veces** ese valor | **8 veces** el valor base del arma | **5 veces** el valor base del arma |
| **Espera entre compras** | **2 semanas** (1 semana con Premium Gold o superior) | **1 semana** (3 días y medio en pistolas para Platinum y Ruby) | Se calcula por unidad ensamblada: de **12 a 168 horas** por arma |
| **Cantidad por operación** | 1 arma | 1 arma | Hasta **20 unidades** según el tipo |
| **¿Tiene serial?** | **Sí**, registrado a tu nombre y a la armería | **Sí**, registrado a tu nombre | **No**, sale completamente limpia |
| **¿Viene cargada?** | **No**, sale vacía | **No**, sale vacía | **No**, sale vacía |
| **Ante la policía** | Legal mientras conserves la licencia | El serial te delata: aparece en las bases policiales a tu nombre | Sin rastro documental: no hay nada que buscar |
| **Ante el forense** | El casquillo apunta a tu arma registrada | El casquillo apunta a tu arma registrada | El casquillo aparece como **"sin registro"** |
| **Catálogo** | Pistolas comunes, escopetas y algún rifle de caza | Lista corta: pistolas y unas pocas armas largas | El catálogo más amplio del servidor, incluido armamento pesado |
| **Riesgo principal** | Perder la licencia para siempre al ser arrestado | Que rastreen el serial hasta ti | Que la policía encuentre y destruya tu taller |

**💡 La regla resumida:** la armería te da legalidad, el mercado negro te da acceso rápido a cambio de dejar huella, y el ensamblaje te da volumen y anonimato a cambio de tiempo, dinero y un taller que puede ser descubierto.

## Origen 1: compra legal en la armería

Las armerías (los Ammu-Nation y alguna tienda independiente) son **negocios de jugadores**: alguien las compra, las abastece y fija sus propios precios. Por eso el mismo modelo puede costar $3,000 en una tienda y $12,000 en otra: conviene comparar antes de gastar. El precio nunca baja del valor base del arma ni supera **10 veces** ese valor.

### Requisitos para comprar

Para que te vendan un arma o munición debes cumplir **todos** estos puntos:

- **50 horas de juego** en el personaje.
- **Tener una casa** a tu nombre. El estado no vende armas a quien no tiene domicilio.
- **No tener antecedentes penales**. Un solo arresto en tu historial te cierra esta puerta de forma permanente para ese personaje.
- **Licencia de portación de armas (CCW)**. Los guardias de seguridad privada están exentos de presentarla.

Los cargadores y la munición exigen lo mismo salvo la licencia; pero si tu personaje tiene asesinatos registrados y no cuenta con licencia de armas, tampoco te los venderán.

### La licencia de armas

La licencia **no se compra en el ayuntamiento**: la entrega en mano un **líder de la policía o de la fiscalía que esté en servicio**. Para recibirla necesitas **licencia de conducir vigente** y **cero antecedentes penales**.

No tiene coste ni caducidad: es permanente hasta que te la revoquen, y eso ocurre de dos maneras. Un agente puede retirártela en el acto, y además **la pierdes automáticamente cuando te procesan un arresto**. Como el arresto también te deja antecedentes, una condena inhabilita a ese personaje de por vida para comprar armas legalmente.

Puedes mostrar tu licencia a otro personaje con `/licencia [id] armas`.

### Qué se vende y a qué precio

Encontrarás sobre todo **pistolas** (desde una Hi-Point C9 económica hasta una Desert Eagle), algunas **escopetas** y, en tiendas bien surtidas, algún **rifle de caza**. Lo que no se vende legalmente jamás son subfusiles, rifles de asalto ni pistolas silenciadas. Precios habituales del mercado:

| Tipo | Rango de precio habitual |
|---|---|
| Pistola común | **$3,000 – $12,000** |
| Pistola de gran calibre (Desert Eagle) | hasta **$28,000** |
| Escopeta | **$5,000 – $15,000** |
| Rifle de caza | **$4,200 – $15,000** |
| Cargador | **$250 – $1,400** |

Si te atiende un empleado del local en lugar de comprar tú solo, el precio sube según la propina que hayas aceptado, entre un **10% y un 60%**. Y si compras desde la ventanilla de un autoservicio, el recargo es de un **20%**.

### Después de comprar

- El arma sale **cargada** y con un **número de serie de ocho cifras** ligado a tu personaje y a la armería donde la compraste.
- Quedas con un **tiempo de espera de dos semanas** antes de poder comprar otra arma. Con **Premium Gold, Platinum o Ruby** ese plazo baja a una semana.
- Ese tiempo de espera es **compartido** con el mercado negro: comprar legalmente también te bloquea `/conseguirarma`, y al revés.

## Origen 2: mercado negro (`/conseguirarma`)

Si no puedes o no quieres pasar por los trámites legales, el mercado negro tiene su propio surtido. Su funcionamiento completo (venta de botín, munición, clínica clandestina) se explica en [Sistema de mercado negro](sistema-de-mercado-negro.md); aquí solo interesa la parte de armas.

### Requisitos

- Ser **delincuente** y llevar al menos **50 horas jugadas**.
- **50 de habilidad de delincuente** como mínimo para acceder a la lista. Las armas más interesantes piden más: hay modelos bloqueados hasta llegar a **70, 80, 90 e incluso 100**.
- Tener al menos **2 puntos de rol positivos**.

### Cómo funciona

Al usar `/conseguirarma` recibes un mensaje de un número desconocido con un punto de encuentro marcado en tu mapa. El contacto opera dentro de **los Ammu-Nation de Las Venturas** y en la base criminal de **Idlewood**; el lugar concreto se te asigna y no cambia, así que memorízalo.

Allí se abre el catálogo. Las armas por encima de tu habilidad aparecen atenuadas con el requisito indicado al lado. El precio equivale a **8 veces el valor base del arma**.

| Arma | Habilidad requerida | Precio |
|---|---|---|
| Hi-Point C9 | 0 | **$4,960** |
| Bersa Firestorm | 0 | **$5,440** |
| Taurus G2C / SCCY CPX-2 | 0 | **$5,760** |
| Sig Sauer P320, Walther PDP, Stoeger STR-9, Ruger American Pistol | 0 | **$8,400** |
| Beretta APX A1 / Glock 19 Gen5 | 70 | **$9,440** |
| Citadel CDP12 (escopeta) | 80 | **$6,480** |
| MAC-10 | 80 | **$7,360** |
| Savage Axis XP (rifle) | 90 | **$7,776** |
| SLR-107 (rifle de asalto) | 90 | **$13,800** |
| Colt AR15 | 100 | **$23,000** |

### Lo que debes saber antes de usarla

- El arma **sí lleva serial**, y queda registrada a tu nombre. Aunque el vendedor sea clandestino, la papelería aparece como si la hubieras comprado en una armería. Si disparas con ella y la policía analiza los casquillos, el rastro conduce directamente a tu personaje.
- Sale **cargada** y lista para usar.
- Después de la compra quedas con un tiempo de espera de **una semana**. Los usuarios **Platinum y Ruby** tienen la mitad de espera (**3 días y medio**) para volver a comprar pistolas.
- Si vas a usarla para algo serio, plantéate **borrar el serial** primero. El procedimiento se explica más abajo.

## Origen 3: ensamblaje de armas (`/ensamblararmas`)

El ensamblaje es la vía reservada a los **contrabandistas**, personajes autorizados para montar un taller y abastecer a su entorno. Es la única forma de conseguir **armas sin ningún registro**, y también la única de producir **en cantidad**.

### Quién puede ser contrabandista

El contrabandista no es un trabajo que se tome en un punto del mapa: es un **rol autorizado por la administración** a personajes con una historia criminal sólida. No hay comando para hacerse contrabandista por cuenta propia.

Dentro del rol existen dos niveles de acceso:

- **Contrabandista común** — puede ensamblar únicamente el armamento ligero del catálogo: **pistolas y pistolas automáticas**.
- **Contrabandista avanzado** — abarca todo el catálogo: silenciadas, escopetas, subfusiles, rifles de asalto, rifles de precisión y explosivos. Se accede a este nivel siendo **miembro de una facción ilegal oficial**. Las facciones destacadas que aún no son oficiales no cuentan.

El rol de contrabandista se pierde al cambiar el nombre del personaje.

### Montar el taller

Antes de ensamblar nada necesitas un **punto de armas**: el banco de trabajo donde montas el armamento.

- Se crea con `/crearpuntoarmas confirmar` estando **dentro de una casa o un almacén de tu propiedad**. No sirven negocios ni propiedades ajenas.
- Cada personaje puede tener **un único punto de armas**.
- Solo puedes establecer un punto **cada 2 semanas (336 horas)**. Ese mismo plazo se te aplica si tu punto es destruido.
- Para trabajar en él tienes que estar **a menos de 2 metros** del banco.
- El taller es visible para cualquiera que entre a la propiedad, identificado como *"Ensambladora de armas"*.

**⚠️ Riesgo:** la policía en servicio puede **destruir tu punto de armas** si lo encuentra dentro de la propiedad, y tú quedas dos semanas sin poder montar otro. Piensa bien dónde lo instalas: un almacén discreto es mucho más seguro que el salón de una casa conocida, y una orden de allanamiento pone en riesgo toda tu producción.

### Ensamblar armas

Con el taller montado, acércate a él y usa `/ensamblararmas`. Se abre un catálogo dividido por categorías donde eliges el modelo, y después indicas **cuántas unidades** quieres producir.

El coste de cada unidad es **5 veces el valor base del arma**: la tarifa más barata de las tres vías. A cambio, cada unidad suma **horas de espera** antes de poder volver a ensamblar.

#### Cantidad máxima por pedido

| Categoría | Máximo por pedido |
|---|---|
| Pistolas y pistolas automáticas | **20 unidades** |
| Subfusiles | **10 unidades** |
| Escopetas | **5 unidades** |
| Rifles de asalto y de precisión | **2 unidades** |

Estos topes están además limitados por tu nivel: un **contrabandista común** no puede superar las **10 unidades** en un mismo pedido, mientras que el **avanzado** llega hasta **20**. En la práctica la diferencia solo se nota en las pistolas, porque el resto de categorías ya está por debajo de diez.

#### Tiempo de espera

El tiempo de espera se calcula multiplicando la cantidad encargada por las horas que exige ese tipo de arma:

| Tipo de arma | Horas por unidad |
|---|---|
| Rifles de asalto y rifles de precisión | **168 horas** (una semana por unidad) |
| Cualquier otra arma, siendo contrabandista avanzado | **12 horas** |
| Cualquier otra arma, contrabandista común | **24 horas** |

Los rifles cuestan 168 horas por unidad **para todos**, incluidos los contrabandistas avanzados: es el armamento más caro de producir en tiempo.

Ejemplo: un contrabandista avanzado que encarga 10 pistolas queda **120 horas** (5 días) sin poder volver a ensamblar. Si en cambio encarga 2 rifles de asalto, la espera sube a **336 horas** (dos semanas). Un contrabandista común con ese mismo pedido de 10 pistolas esperaría **240 horas**.

Los usuarios **Premium** reducen esa espera: **15% menos** con Bronze, **25%** con Silver, **35%** con Gold y **45%** con Platinum o Ruby.

#### Precios de referencia

| Arma | Coste de ensamblaje | Nivel necesario |
|---|---|---|
| Hi-Point C9 | **$3,100** | Común |
| Taurus G2C | **$3,600** | Común |
| Glock 17 / Sig Sauer P226 | **$5,250** | Común |
| Desert Eagle | **$16,500** | Común |
| MAC-10 | **$4,600** | Común |
| Glock 18 Auto | **$7,280** | Común |
| Suppressed Glock 19 (silenciada) | **$8,750** | Avanzado |
| Citadel CDP12 (escopeta) | **$4,050** | Avanzado |
| Serbu Super Shorty | **$8,090** | Avanzado |
| UZI | **$12,940** | Avanzado |
| HK MP5 | **$16,985** | Avanzado |
| SLR-107 (rifle de asalto) | **$8,625** | Avanzado |
| Colt AR15 | **$14,375** | Avanzado |
| Savage Axis XP (rifle) | **$4,860** | Avanzado |
| Ruger American | **$28,750** | Avanzado |
| Bomba TNT | **$150,000** | Avanzado |

Los explosivos tienen su propio funcionamiento, explicado en [Sistema de bombas](sistema-de-bombas.md).

### Qué obtienes al ensamblar

Las armas ensambladas aparecen **en el suelo, junto a tu taller**, no directamente en tus manos: si encargaste veinte pistolas, tendrás veinte pistolas tiradas en el piso de la propiedad, que habrá que recoger y guardar una por una.

Dos diferencias fundamentales frente a las otras dos vías:

- **No tienen número de serie.** Al consultarlas con `/serial` responden "sin serial". Esta es la característica que hace valioso el ensamblaje.
- **Vienen vacías.** No traen munición: tendrás que cargarlas aparte antes de que sirvan de algo.

### Cargadores y munición del taller

El mismo taller permite fabricar munición con `/comprarcargadores`, y aquí está la mayor ventaja económica del contrabandista: el precio es **1.5 veces el valor base**, muy por debajo del **3.5 veces** que cobra el mercado negro. Son la fuente de munición más barata del servidor.

| Producto | Coste en el taller | Coste en el mercado negro |
|---|---|---|
| Cargador 9x19, .40, .45, .357 o .22 LR | **$243** | $567 |
| Cargador 7.62x39, 5.56x45, 7.62x51 o perdigones 12ga | **$486** | $1,134 |
| Cargador .44 | **$1,215** | $2,835 |
| Caja de munición 9x19 (1,000 balas) | **$1,458** | $3,402 |
| Caja de munición 5.56x45 (1,000 balas) | **$1,941** | $4,529 |

Los cargadores fabricados en el taller aparecen **directamente en tu mano derecha**, así que debes tenerla libre antes de pedirlos.

## Lo que ve la policía y el forense

Aquí está la diferencia que de verdad importa cuando las cosas salen mal.

**Con un arma registrada** (comprada legalmente o en el mercado negro):

- El número de serie está asociado a **tu personaje** y a la tienda de origen. La policía puede buscar por serial y obtener modelo, propietario y lugar de registro; también puede pedir el listado completo de armas registradas a nombre de una persona.
- Cada disparo deja un **casquillo** en el suelo. Al analizarlo en el laboratorio, el informe indica el modelo del arma **y su serial**, lo que permite unir la escena del crimen con su dueño registrado.

**Con un arma ensamblada** (sin serial):

- La búsqueda policial por serial no devuelve nada, porque no hay nada que buscar.
- El informe de balística identifica el modelo y agrupa todos los casquillos disparados por la misma arma, pero la conclusión termina en **"sin registro"**: se sabe qué arma disparó y cuántas veces, pero no a quién pertenece.

Esto no te vuelve invisible: el laboratorio sigue pudiendo demostrar que **todos los casquillos de una escena salieron del mismo arma**, y si esa arma acaba en tus manos durante un registro, la conexión se hace igual. El detalle de cómo se recogen y analizan los casquillos está en [Sistema forense](sistema-forense.md).

Los **detectives privados** también pueden consultar estas bases pagando por cada búsqueda: **$50,000** por rastrear un serial y **$100,000** por listar las armas registradas a una persona. Más información en [Sistema de detectives privados](sistema-de-detectives-privados.md).

### Borrar el serial

Si ya tienes un arma registrada y quieres que deje de apuntar hacia ti, puedes eliminar el serial con `/borrarserial confirmar`. Necesitas:

- **80 de habilidad de delincuente**.
- Un **destornillador** en la mano izquierda y el arma en la mano derecha.

El arma pasa entonces a mostrar su serial como "borrada", que no es lo mismo que no tener serial: se nota a simple vista que alguien lo limó. Es un delito grave por sí mismo y si te detienen con un arma limada tu condena puede aumentar considerablemente. Un arma ensamblada nunca necesita este paso, porque nunca tuvo serial que borrar.

## Consejos

- **Elige el origen según el uso.** Para autodefensa y portar sin problemas, la armería. Para un golpe puntual, el mercado negro. Para armar a toda una banda sin dejar rastro, el ensamblaje.
- **Nunca uses un arma registrada a tu nombre en un crimen serio.** Si vas a disparar, que sea con un arma ensamblada o con el serial ya limado.
- **Cuida tu historial si quieres la vía legal.** Un solo arresto te cierra las armerías de forma permanente para ese personaje y te deja sin licencia.
- **Planifica los pedidos grandes.** Encargar el máximo de rifles deja tu taller parado dos semanas enteras; alternar pedidos medianos de pistolas mantiene la producción fluyendo.
- **Esconde bien el taller** y **recoge la producción de inmediato**: las armas quedan tiradas en el suelo, a la vista de cualquiera que entre a la propiedad.
- **Aprovecha la munición barata del taller.** Aunque no vendas armas, fabricar cargadores para tu facción sale a menos de la mitad que comprarlos en el mercado negro.
- **Sube la habilidad de delincuente antes de depender del mercado negro.** Sin 50 puntos no accedes ni al catálogo, y las armas interesantes empiezan a partir de 80. Cómo se gana y se pierde está en [Sistema de delincuente](sistema-de-delincuente.md).
- **Entrar en una facción ilegal oficial es el salto de calidad**: convierte a un contrabandista común en avanzado, abre todo el catálogo pesado y divide por dos el tiempo de espera. Consulta [Facciones ilegales](facciones-ilegales.md).
