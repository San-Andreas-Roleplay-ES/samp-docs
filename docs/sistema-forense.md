# Sistema forense

## Introducción

El sistema forense convierte cualquier escena del crimen en algo que se puede investigar de verdad. Cada disparo deja casquillos en el suelo, cada herida sangrante deja manchas, cada objeto que tocas guarda tus huellas y cada arma disparada deja restos de pólvora en las manos de quien apretó el gatillo. Nada de eso es decorativo: se recoge, se guarda, se analiza en un laboratorio y termina en un informe que puede presentarse ante un tribunal.

Está pensado para dos públicos opuestos. Para los agentes de la ley y los detectives privados es la herramienta que permite sostener una acusación con pruebas científicas en lugar de con suposiciones. Para los delincuentes es un motivo constante de cuidado: usar guantes, limpiar lo que tocaste, recoger tus casquillos antes de irte y no disparar con un arma que lleve tu nombre en el registro.

La regla de fondo es simple: el sistema nunca identifica a nadie por arte de magia. Una muestra de sangre sin una prueba de ADN registrada previamente no sirve de nada, y un casquillo de un arma sin serial solo revela el modelo. El trabajo policial consiste en conseguir esas piezas antes de poder cruzarlas.

Los sistemas relacionados están en [Facciones legales](facciones-legales.md), [Sistema de detectives privados](sistema-de-detectives-privados.md), [Sistema de justicia](sistema-de-justicia.md) y [Sistema de cadáveres](sistema-de-cadaveres.md).

---

## Comandos

**En la escena del crimen**

- `/casquillo` — examina el casquillo que llevas en la mano derecha: calibre, número identificador, temperatura y estado.
- `/recogercasquillo` — recoge el casquillo más cercano y lo pasa a tu mano derecha.
- `/recogersangre` — recoge la mancha de sangre más cercana como muestra.
- `/limpiarhuellas` — limpia huellas del objeto que llevas en la mano derecha, usando alcohol isopropílico.
- `/serial` — consulta el número de serie del arma que llevas en la mano derecha.

**Pruebas sobre personas**

- `/pruebaadn [jugador]` — solicita registrar el ADN de un sospechoso en la base de datos.
- `/pruebapolvora [jugador]` — solicita una prueba de residuos de pólvora para saber si disparó.
- `/pruebadrogas [jugador]` — solicita una prueba de sustancias en sangre.
- `/donacionsangre [jugador]` — pide a alguien donar sangre; también deja su ADN registrado.
- `/aceptar` y `/rechazar` — los usa el sospechoso para consentir o negarse a cualquiera de estas pruebas.

**Almacén y laboratorio**

- `/etiqueta [texto]` — rotula la bolsa de evidencias que llevas en la mano derecha.
- `/evidencias guardar` — guarda en el almacén la bolsa de evidencias de la mano derecha.
- `/evidencias buscar [etiqueta, fecha o #id]` — busca evidencias guardadas.
- `/evidencias sacar [#id]` — retira una evidencia del almacén.
- `/evidencias examinar [#id]` — envía la evidencia al laboratorio forense.
- `/evidencias resultados [#id]` — muestra el reporte forense.
- `/evidencias bitácora [#id]` — muestra el historial de manipulación de esa evidencia.
- `/mostrarevidencias [jugador] [#id]` — muestra el reporte a otra persona cercana (solo fiscales y jueces en servicio).

---

## Casquillos de bala

Cada vez que alguien dispara un arma de fuego cae un casquillo al suelo, a unos metros de donde estaba el tirador. Hay tres tipos visuales distintos según el arma: casquillos de **pistola**, de **rifle** y cartuchos de **escopeta**. Sobre cada montón aparece una etiqueta con el calibre y la cantidad acumulada, visible a **2 metros**.

Los disparos hechos dentro de una **sala de paintball** y durante los eventos especiales del servidor no generan casquillos. Los policías en servicio tampoco los dejan.

Si sigues disparando la misma arma en el mismo sitio, los casquillos se agrupan en un único montón mientras no te alejes más de **10 metros** del anterior.

### Qué revela un casquillo

Al examinarlo con `/casquillo` obtienes tres datos:

| Dato | Qué te dice |
| --- | --- |
| **Calibre** | El tipo de munición, y por tanto qué familia de armas pudo dispararlo. |
| **Temperatura** | Cuánto tiempo lleva en el suelo. Empieza en **370 °C** y baja hasta los **20 °C** ambientales en unos **10 minutos**. |
| **Estado** | Determina si servirá o no en el laboratorio. |

El estado se sortea en cada disparo con la misma probabilidad (**25% cada uno**): **Destruido**, **Severamente dañado**, **Bueno** o **Excelente**.

La temperatura es la herramienta que permite **cronometrar una escena**: un casquillo a más de 300 °C significa que el tiroteo acaba de ocurrir y el tirador debería estar cerca; uno a temperatura ambiente lleva al menos diez minutos ahí.

### Quién puede recogerlos

Solo pueden usar `/recogercasquillo`:

- **Agentes de la ley** (policías, alguaciles, agencias federales y justicia).
- **Detectives privados** con licencia.
- **Delincuentes** con al menos **70 de habilidad de delincuente**.

Ese umbral alto es deliberado: limpiar tus propios casquillos es un privilegio de criminales veteranos, no algo que cualquiera pueda hacer tras su primer tiroteo. Cómo se sube esa habilidad está explicado en [Sistema de delincuente](sistema-de-delincuente.md).

Necesitas además la **mano derecha libre**, y hay dos condiciones que pueden arruinar la recogida:

> **Casquillo caliente:** por encima de **50 °C** te quemarías. Si no llevas **guantes** puestos no podrás levantarlo y tendrás que esperar a que se enfríe, algo más de ocho minutos desde el disparo.

> **Casquillo en pésimo estado:** algunos se rompen en el intento y se pierden para siempre. No hay forma de recuperarlos.

Los casquillos recogidos se convierten en un objeto de inventario que conserva su calibre, número identificador, estado y la hora del disparo original.

### Cuánto duran en el suelo

Los casquillos que nadie recoge permanecen en el lugar hasta el **reinicio diario del servidor**, momento en el que desaparecen todos. Es decir: tienes hasta el próximo mantenimiento para volver a la escena, pero después la evidencia física ya no existe.

---

## Manchas de sangre

Las manchas de sangre aparecen automáticamente en tres situaciones:

- Cuando alguien recibe un **balazo** que atraviesa la ropa (los impactos detenidos por el chaleco no sangran).
- Cuando alguien es herido con un **arma blanca**: cuchillo, katana o puño americano.
- Cada vez que un herido **se desangra** mientras espera atención médica.

No siempre queda rastro: hay un **60% de probabilidad** de que la herida deje mancha. Tampoco se crean si la víctima está dentro de un vehículo, en una sala de paintball o durante eventos especiales. Como cada sangrado puede generar una nueva, un herido que camina dejando un reguero marca literalmente su recorrido por el mapa.

### Quién puede recoger muestras

`/recogersangre` está limitado a **agentes de la ley en servicio** y a **detectives privados con licencia**. Necesitas la mano derecha libre y estar a **2 metros** de la mancha.

La muestra recogida guarda internamente a quién pertenecía esa sangre, pero ese dato **no es legible** hasta que se analiza en el laboratorio y se cruza contra el registro de ADN.

Igual que los casquillos, las manchas que nadie recoge se borran en el **reinicio diario del servidor**.

---

## Pruebas de ADN

Una muestra de sangre por sí sola no identifica a nadie. El laboratorio necesita que exista una **prueba de ADN registrada** de esa persona para poder compararla. Sin registro previo, el reporte dirá simplemente que la muestra no tiene coincidencias.

Hay tres formas de que el ADN de un personaje quede registrado:

| Situación | Quién la realiza | Qué se necesita |
| --- | --- | --- |
| **Ingreso a prisión** | Automático al entrar a la Twin Towers | Nada, es parte del procedimiento carcelario |
| **Prueba voluntaria** (`/pruebaadn`) | Policías, paramédicos, bomberos y justicia en servicio | Un **hisopo de laboratorio** en la mano derecha y el consentimiento del sospechoso |
| **Donación de sangre** (`/donacionsangre`) | Paramédicos y bomberos en servicio | El consentimiento del donante |

En los dos últimos casos el sospechoso debe estar a menos de **5 metros** y aceptar con `/aceptar`; puede negarse con `/rechazar` y nadie puede obligarlo. Un agente no puede hacerse la prueba a sí mismo. El hisopo se **consume** al realizar la prueba de ADN.

Donar sangre cuesta **15 puntos de vida** al donante, así que conviene hacerlo estando sano y no en mitad de una emergencia.

> **Sin ADN registrado no hay identificación posible.** Este es el muro que impide que la policía sepa de quién es la sangre solo porque lo sospecha: hay que haber hecho el trabajo previo de fichar a esa persona.

---

## Prueba de residuos de pólvora

La prueba de pólvora responde a una sola pregunta, pero es la más directa de todas: **¿esta persona disparó un arma recientemente?**

- La solicita un **agente de la ley o de justicia en servicio** con `/pruebapolvora [jugador]`.
- Necesita un **kit de pólvora** en la mano derecha. Cada kit sirve para **3 pruebas** y se gasta al agotarse.
- El sospechoso debe estar a menos de **5 metros** y aceptar con `/aceptar`.

El resultado indica si disparó dentro de las últimas **6 horas** y, en caso afirmativo, **hace cuánto tiempo exactamente**, en horas y minutos. Pasada esa ventana el resultado siempre sale negativo.

El momento del último disparo se registra **en el instante en que se aprieta el gatillo** y queda guardado de forma permanente, como máximo una vez por minuto. Esto significa que **desconectarse no borra el rastro**: quien dispara, sale del servidor y vuelve media hora después sigue dando positivo hasta que se cumplan las 6 horas.

Vale la pena entender bien el alcance de la prueba: demuestra que disparaste, **no con qué arma ni contra quién**. Es una pieza de la investigación, no una condena por sí sola.

---

## Huellas dactilares

Cada objeto del inventario guarda las huellas de **todos los que lo han tenido en las manos**. Se registran automáticamente cada vez que tomas un objeto: al sacarlo del inventario, de un paquete o de tu equipo de facción, al recibirlo de otra persona o al robárselo a alguien.

### Cómo evitar dejarlas

Basta con llevar **guantes puestos**. Con guantes el objeto no registra nada, pero los guantes **se desgastan con cada manipulación** y acaban rompiéndose:

| Guantes | Usos aproximados |
| --- | --- |
| **Guantes desechables** | 15 |
| **Guantes de cuero** | 100 |
| **Guantes de kevlar** | 150 |

Los guantes son, con diferencia, la inversión más rentable para cualquier criminal: cuestan poco y evitan todo el problema desde el origen.

### Cómo borrarlas después

Si ya tocaste algo sin guantes, la única salida es `/limpiarhuellas` con **alcohol isopropílico** en la mano izquierda y el objeto en la derecha. Requisitos:

- Estar **dentro de una propiedad**: una casa, un negocio o cualquier interior, no en plena calle.
- **No estar dentro de un vehículo**.
- Tener al menos **3 unidades** de alcohol isopropílico, que es lo que consume cada limpieza.

La limpieza dura **30 segundos** de animación continua. Si sales de la propiedad, te guardas el alcohol o guardas el objeto antes de terminar, el proceso se cancela y no limpias nada.

Al completarse se borran entre **1 y 3 huellas**, siempre las más recientes, y la cantidad es aleatoria. Si el objeto pasó por muchas manos tendrás que repetir la operación varias veces, gastando 3 unidades de alcohol cada vez.

> **Las huellas caducan solas.** El laboratorio solo considera las registradas en los **últimos 15 días** y muestra como máximo **10 nombres** por objeto. Un arma guardada mucho tiempo pierde valor probatorio por sí sola.

---

## Almacén de evidencias

Las agencias de la ley tienen un **almacén de evidencias** dentro de sus propiedades de facción, en un punto concreto del edificio. Cada agencia gestiona el suyo de forma independiente: la policía de Los Santos, el departamento del alguacil, las agencias federales y la justicia no comparten archivo.

Para usarlo necesitas ser **agente de la ley en servicio** y estar a **2 metros** del armario de evidencias, dentro de una comisaría de tu propia facción.

### La bolsa de evidencias

Todo lo que se guarda va dentro de una **bolsa de evidencias**, que funciona como un contenedor: dentro caben casquillos, muestras de sangre, hisopos, armas, drogas, teléfonos y cualquier otro objeto recogido en la escena.

Una vez que un objeto entra en una bolsa de evidencias, **solo los agentes de la ley y los líderes de facciones policiales pueden sacarlo de ahí**. Cualquier otro intento queda bloqueado.

### Etiquetado obligatorio

Antes de guardar una bolsa **debes etiquetarla** con `/etiqueta`. La etiqueta tiene entre **3 y 32 caracteres** y cada facción usa sus propios formatos normalizados: número de caso, fecha, ubicación. Sin etiqueta, el almacén rechaza la bolsa.

Es más que burocracia: la etiqueta es lo que luego permite encontrar la evidencia entre cientos de bolsas guardadas.

### Buscar y retirar

`/evidencias buscar` acepta tres formas de búsqueda y devuelve hasta **10 coincidencias**:

- Por **etiqueta**, con texto parcial.
- Por **fecha** de guardado.
- Por **número identificador**.

Retirar una evidencia con `/evidencias sacar` está más restringido que guardarla. Se exige mando dentro de la agencia: **detective o sargento** en la policía de Los Santos y en el departamento del alguacil, **supervisor** en la agencia forestal y **liderazgo** en las agencias federales. Hace falta además la mano derecha libre.

### Bitácora de custodia

Cada movimiento sobre una evidencia queda escrito en su **bitácora**: quién la guardó, quién la sacó, quién la consultó y quién se la mostró a un tercero, con rango, nombre y fecha exacta. `/evidencias bitácora [#id]` lo muestra completo.

La bitácora es la cadena de custodia. Un abogado defensor puede pedirla en un juicio y encontrar huecos: una evidencia que entró y salió del almacén varias veces sin justificación pierde credibilidad.

---

## Laboratorio forense

`/evidencias examinar [#id]` envía toda la bolsa al laboratorio. Los resultados están disponibles **de inmediato** con `/evidencias resultados [#id]`, y cada nuevo examen **reemplaza** el reporte anterior de esa misma bolsa.

El reporte sale como un documento clasificado con fecha, agencia investigadora y el agente que solicitó el análisis. Contiene una línea por cada muestra analizada.

### Análisis de casquillos

El laboratorio compara las marcas microscópicas del casquillo contra el registro de armas. Solo cuentan los casquillos en buen estado:

| Estado del casquillo | Resultado |
| --- | --- |
| **Destruido** | Se descarta por completo, ni siquiera aparece en el reporte |
| **Severamente dañado** | Solo **una cuarta parte** de los casquillos de ese lote da coincidencia |
| **Bueno** | Coinciden todos |
| **Excelente** | Coinciden todos |

Por eso **cuantos más casquillos metas en la bolsa, más sólido es el resultado**: el informe dice literalmente cuántas veces coincidió cada arma, y una coincidencia de veinte casquillos es mucho más difícil de discutir en un juicio que una de uno solo.

El reporte distingue dos casos:

- **Arma con serial registrado**: el informe da el **modelo y el número de serie**. Desde ahí la policía puede rastrear a quién está registrada esa arma.
- **Arma sin serial**, ya sea ensamblada o con el serial limado: el informe da únicamente el **modelo**, con la anotación de que no tiene registro. No hay rastro documental que seguir.

Además, cada arma recibe una **etiqueta de balística**: un número y un color propios que la identifican dentro del reporte. La misma etiqueta aparece junto a los casquillos que disparó y junto al arma, si esta también está en la bolsa. Esto permite algo muy potente: **demostrar que todos los casquillos de una escena salieron del mismo arma**, aunque esa arma no tenga serial y no se sepa de quién es. Si más tarde el arma aparece en un registro y se analiza, las etiquetas coinciden y la conexión se cierra sola.

Cómo se fabrican armas sin serial está en [Sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md), y cómo se compran armas registradas de forma clandestina, en [Sistema de mercado negro](sistema-de-mercado-negro.md).

### Análisis de muestras de sangre

Cada muestra se compara contra el registro de pruebas de ADN. El reporte indica el **nombre de la persona** y **cuántas veces coincidió**, lo que a su vez señala cuánta sangre suya había en la escena.

Si esa persona no tiene ADN registrado, la línea dice simplemente que la muestra **no tiene coincidencias**. No aparece su nombre ni ninguna pista sobre su identidad.

### Análisis de huellas

Cualquier otro objeto de la bolsa (un arma, un teléfono, un paquete de droga, una herramienta) se analiza buscando huellas. El reporte lista:

- El **objeto y sus datos**: modelo y serial si es un arma, gramos si es droga, número de línea si es un teléfono, cantidad en el resto de casos.
- Los **nombres de quienes lo tocaron** sin guantes en los últimos 15 días, hasta un máximo de 10.

Si no hay nada registrado, el informe indica que no tiene huellas.

A diferencia del ADN, **no hace falta ningún registro previo** para identificar a alguien por sus huellas. Es el método más peligroso para un criminal descuidado: la única defensa es haber llevado guantes o haber limpiado el objeto a tiempo.

### Análisis de hisopos

Los hisopos usados en las pruebas de drogas también pueden guardarse como evidencia; el laboratorio devuelve las sustancias que detectaron. Más detalle sobre consumo y detección en [Sistema de drogas](sistema-de-drogas.md).

---

## Presentar las pruebas

Un reporte forense solo tiene valor si llega a la persona correcta. Los **fiscales y jueces en servicio** pueden mostrarlo a cualquier persona a menos de **30 metros** con `/mostrarevidencias [jugador] [#id]`, y ese acto queda también anotado en la bitácora de la evidencia.

Al enviar una evidencia al laboratorio, el sistema recuerda expresamente que debe existir **causa probable** para usarla en una persecución criminal. Una prueba obtenida sin fundamento puede caerse en el juicio; el procedimiento completo está en [Sistema de justicia](sistema-de-justicia.md).

Cuando la investigación arranca con un fallecido, la recuperación del cuerpo y lo que se puede extraer de él se explica en [Sistema de cadáveres](sistema-de-cadaveres.md).

---

## Consejos

**Si investigas:**

- Llega rápido y examina un casquillo antes que nada: la temperatura te dice si el tirador todavía puede estar cerca.
- Lleva guantes también tú. Un agente que manosea la evidencia sin protección deja sus propias huellas en ella y se lo van a sacar en el juicio.
- Recoge **todos** los casquillos que puedas, no uno de muestra: la fuerza del informe depende del número de coincidencias.
- Ficha el ADN de los detenidos cuando tengas ocasión. Una muestra de sangre sin registro previo no vale absolutamente nada.
- Etiqueta con un formato consistente y anota el número de la bolsa: un almacén con cientos de evidencias mal rotuladas es un almacén inútil.

**Si te preocupa que te investiguen:**

- Los guantes son la solución barata a casi todo. Póntelos antes de tocar nada, no después.
- Dispara con un arma sin serial. Un arma registrada a tu nombre convierte un casquillo en una orden de arresto.
- Recoge tus casquillos si tienes habilidad suficiente, y recuerda que los calientes te quemarán las manos si vas sin guantes.
- La sangre que dejas al desangrarte marca tu ruta de huida. Si estás herido, la prioridad es dejar de sangrar antes que correr.
- Los restos de pólvora en tus manos duran **6 horas** y desconectarte no los elimina. Si acabas de disparar, evita cruzarte con un control policial.
- Limpiar huellas exige estar bajo techo, treinta segundos quieto y alcohol isopropílico: no es algo que puedas improvisar mientras huyes.
