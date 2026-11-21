# Sistema de zonas de pandilla

## Introducción

Las **zonas de pandilla** son los territorios que las facciones criminales se disputan en Los Santos. Aparecen pintadas en el radar y en el mapa con el color de la facción que las controla, y una zona marcada oficialmente como **en disputa** parpadea en rojo para todos.

Todo Los Santos está cubierto por zonas, sin huecos entre ellas, y también hay zonas en Blueberry, Dillimore, Montgomery, Palomino Creek y Angel Pine. Las zonas que nadie ha reclamado empiezan **sin dueño**.

Controlar un territorio no es decorativo: retrasa la llegada de la policía a los incidentes que ocurren dentro, habilita bonificaciones para quienes delinquen sobre su propio terreno y mejora la producción de drogas de la pandilla. Además, la **influencia** que tu facción acumula en las calles es lo que determina cuánto cobra cada miembro en el paycheck. Por eso el mapa cambia de manos constantemente: cualquier **pandilla** puede disputar cualquier zona con solo mantener gente activa dentro de ella.

Si prefieres jugar con el mapa limpio, puedes ocultar las zonas del radar desde tus preferencias. Este documento cubre el sistema de territorios y un resumen de los **graffitis**, la forma más visible de marcar el barrio. Para saber cómo entrar a una facción criminal consulta [Facciones ilegales](facciones-ilegales.md), y para las actividades delictivas en sí, [Sistema de delincuente](sistema-de-delincuente.md).

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/territorios-de-pandilla-mapa.png" alt="Mapa de los territorios de pandilla de Los Santos" width="745" height="660">

### Comandos

- /influencias — muestra cuánta influencia tiene acumulada cada facción en la zona donde estás parado.
- /misinfluencias — resumen de la influencia de tu facción en todas las zonas y del dinero que genera. Disponible para miembros de pandillas, mafias y facciones penitenciarias.
- /graffiti crear — inicia la creación de un graffiti en la pared que tengas delante.
- /graffiti editar — reposiciona un graffiti tuyo pintado hace menos de 5 minutos.
- /graffiti borrar — elimina un graffiti tuyo pintado hace menos de 5 minutos.
- /preferencias — abre tus preferencias; en la sección **Radar** puedes activar u ocultar las zonas de pandilla. Alias: `/panel`.

## Cómo se conquista una zona

El control de cada territorio lo decide un contador de **influencia**. Cada facción acumula su propia influencia en cada zona, y la pandilla que más tenga se queda con ella.

### Quién genera influencia

El servidor revisa **una vez por minuto** a cada jugador. Sumas influencia para tu facción solo si cumples todo esto:

- Perteneces a una **pandilla o una mafia**.
- Estás **dentro** de la zona, en la calle. Dentro de un interior no sumas.
- Estás **a pie** (dentro de un vehículo no cuenta).
- No llevas **máscara** puesta.
- No estás **pausado**.

Las facciones penitenciarias solo suman influencia en la zona de la prisión, y lo hacen también desde dentro de la cárcel.

### Cuánta influencia sumas

Cada jugador que cumple los requisitos aporta un punto base por minuto, más los extras que le correspondan a su facción. El extra por tipo de facción se suma al de estatus, pero una facción solo puede ser **destacada** u **oficial**, no ambas:

| Fuente | Influencia por minuto |
|---|---|
| Presencia dentro de la zona | +1 |
| Facción de tipo **pandilla** | +2 |
| Facción con estatus **destacada** | +1 |
| Facción con estatus **oficial** | +3 |

Así, un miembro de una pandilla común aporta **3 puntos por minuto**, uno de una pandilla destacada aporta **4** y uno de una pandilla oficial aporta **6**. Un miembro de una mafia aporta 1 punto, **2** si su familia es destacada y **4** si es oficial.

Además, cada vez que alguien suma influencia en una zona, **todas las demás pandillas presentes en el contador de esa zona pierden 1 punto** (nunca por debajo de cero). Diez miembros tuyos dentro del territorio no solo suben tu marcador: también erosionan el de tus rivales diez veces por minuto. Las mafias no pierden influencia por este efecto.

La influencia de cada facción en una zona está limitada a un máximo de **10.000 puntos**.

Vender droga a un cliente de misión (el mensaje de texto de un desconocido que se describe más abajo) dentro de un territorio de tu propia pandilla suma además **+5 de influencia** de una sola vez a tu pandilla, o **+6** si es destacada y **+8** si es oficial, y resta 1 punto a las demás pandillas de esa zona. Las ventas con `/traficar` no cuentan.

### El cambio de dueño

**15 segundos** después de cada suma de influencia, el servidor revisa el marcador completo de la zona. La **pandilla** con **más influencia** se queda con el territorio, siempre que supere el umbral mínimo de **100 puntos**. Si nadie llega a ese número, la zona conserva a su dueño actual.

Las **mafias no conquistan territorios**: siguen sumando influencia, y las zonas que ya controlaban se mantienen hasta que una pandilla supere los 100 puntos en ellas.

Que el umbral sea bajo hace que una zona descuidada caiga rápido: una pandilla común con diez miembros dentro genera 30 puntos por minuto y puede capturarla en unos **cuatro minutos** si no encuentra oposición. Con presencia enemiga la cosa se alarga, porque cada punto que suma el rival te resta uno a ti.

### El desgaste

Cada **hora** el servidor recorta la influencia de **todas** las facciones en **todas** las zonas en una cantidad aleatoria de **0 a 10 puntos**. Es imposible dejar una zona asegurada para siempre: si tu gente deja de pisar el barrio, el marcador se desinfla solo y tarde o temprano otro grupo lo supera.

## La influencia como recurso

La influencia no solo decide quién manda en cada calle: también se gasta. Fabricar armas y drogas cuesta influencia de tu facción:

| Acción | Costo |
|---|---|
| `/ensamblararmas` | **1.000** puntos de influencia |
| `/creardroga` | **250** puntos de influencia |

El costo se descuenta de la influencia de tu facción, **repartido en partes iguales entre todas las zonas donde tenga influencia**, estén conquistadas o no. Si una zona no alcanza a cubrir su parte, las demás completan el resto. Para poder fabricar, la suma de la influencia de tu facción en todas las zonas debe alcanzar el costo; si no llega, el juego te lo avisa. Si la fabricación no se completa, la influencia se devuelve. Si no perteneces a ninguna facción, no se cobra influencia.

Los pedidos ilegales por teléfono de las facciones penitenciarias también cuestan **1.000** puntos de influencia, descontados de la zona de la prisión.

En la práctica, fabricar sin presencia en las calles es mucho más difícil: una facción que solo cocina y ensambla, sin pisar el barrio, se queda sin influencia por el desgaste horario y por los costos. Para más detalle de cada actividad consulta [Sistema de drogas](sistema-de-drogas.md) y [Sistema de ensamblaje de armas](sistema-de-ensamblaje-de-armas.md).

### Red de contactos de las mafias

Como las mafias no conquistan zonas, su influencia total en toda la ciudad define el nivel de su **red de contactos**:

| Nivel | Influencia total necesaria |
|---|---|
| 1 | **500** puntos |
| 2 | **1.500** puntos |
| 3 | **3.000** puntos |

El nivel se recalcula cada hora. Por **cada nivel**, los contrabandistas de la mafia reciben **10 %** de descuento en el ensamblado de todas las armas, **10 %** menos de enfriamiento por pedido y **+1 arma** por pedido (excepto en los rifles). En el nivel 3 son **30 %** de descuento, **30 %** menos de enfriamiento y **+3 armas** por pedido. `/ensamblararmas` muestra el nivel actual.

## Beneficios de controlar territorio

### Pago en el paycheck

Todos los miembros de una **pandilla o una mafia** reciben un extra en cada paycheck según la influencia de su facción. El pago aparece en el recibo bajo el concepto **Pandilla**:

- **$1** por cada **20 puntos de influencia** que tu facción suma **en todas sus zonas**, estén conquistadas o no. Por eso las mafias, que no conquistan, también cobran.
- El pago tiene un tope por paycheck que depende del estatus de la facción: **$1.000** si no es oficial, **$2.000** si es destacada y **$3.000** si es oficial.

Por ejemplo, una pandilla no oficial con 4.000 puntos de influencia repartidos en varias zonas paga $200 a cada miembro en cada paycheck, y el tope de $1.000 se alcanza con 20.000 puntos. La cifra de influencia que se usa para el pago se actualiza cada hora.

No cobran este pago las **personas presas** ni los miembros de **facciones cerradas**. Con `/misinfluencias` puedes ver cuánto genera tu facción por paycheck.

### /misinfluencias

Abre un resumen de tu facción con:

- Los **territorios conquistados** y las **zonas con influencia**.
- El total de **puntos de influencia** y el **dinero por paycheck** que genera para cada miembro, junto con el tope que le corresponde a tu facción.
- La lista de zonas donde tienes influencia, de mayor a menor.

Tiene una espera de unos segundos entre consultas.

### Retraso de las alertas policiales

Cuando alguien resulta herido de bala o se genera un incidente **dentro de una zona reclamada por cualquier facción**, el aviso a la policía llega con un retraso adicional de **30 a 60 segundos** sobre el tiempo normal. Es el margen de ventaja que da jugar en terreno marcado.

### Producción de drogas en territorio

Las pandillas tienen ventajas al cocinar drogas con `/creardroga`. El territorio de un laboratorio se determina por la entrada exterior de la propiedad.

- Si el laboratorio está en territorio de **tu propia pandilla**, el límite de ingredientes por cocinada sube **+25 unidades** y el enfriamiento de `/creardroga` baja **25 %**, además de la reducción premium.
- Por cada territorio que controle tu pandilla, el límite de ingredientes sube **+2 %**, hasta un máximo de **+20 %** (diez territorios). Cuentan todos sus territorios, estén donde estén, y el porcentaje se aplica sobre el límite total.
- Si el laboratorio está en territorio de **otra facción**, la probabilidad de explosión sube de **20 %** a **35 %**. Esto aplica a cualquier jugador, no solo a pandilleros, y el extintor sigue evitándola.

Un ejemplo: un almacén con habilidad de drogas 21 o más (150 unidades), más la base ilegal (25), más territorio propio (25) da 200 unidades; con diez territorios controlados (+20 %) llegan a 240. Los laboratorios de la base ilegal de tu facción tienen además su propio bono, que se explica en [Sistema de bases ilegales](sistema-de-bases-ilegales.md).

### Bonificaciones por delinquir en tu propio barrio

Delinquir **dentro de un territorio de tu propia facción** te da puntos de habilidad extra y [Burger Points](sistema-de-burger-points.md). Para optar a estas bonificaciones necesitas:

- Ser miembro de una facción de **tipo pandilla** (las mafias no entran aquí) y que la facción esté activa.
- Que la zona donde estás esté **controlada por tu propia facción**.
- Tener al menos **5 puntos de habilidad de drogas**.
- **No estar preso.**
- No estar dentro del **tiempo de espera** de la última bonificación.

Cuando se cumple todo, cada actividad tiene su propia probabilidad de activar la bonificación:

| Actividad | Probabilidad | Puntos de habilidad | Habilidad |
|---|---|---|---|
| Fumar | **5 %** | +1 | Delincuente |
| Beber alcohol | **10 %** | +1 | Delincuente |
| Drogarse | **50 %** | +1 o +2 | Delincuente |
| Robar a una persona (`/robar`) | **50 %** | +2 o +3 | Delincuente |
| Pintar un graffiti | **40 %** | +2 o +3 | Delincuente |
| Robar un vehículo | **40 %** | +2 o +3 | Ladrón de autos |

Cada bonificación que se activa paga además **+5 Burger Points** y abre un **tiempo de espera de 30 minutos**. Ese tiempo es **único y compartido**: mientras corre, ninguna de las otras actividades de la lista te dará nada, aunque puedas seguir haciéndolas con normalidad. Conviene reservarlo para lo que más paga.

El robo de vehículo cuenta tanto si lo consigues puenteando el cableado como al desarmar piezas del coche o al entregarlo en el desguazadero.

### Sorteos automáticos dentro de tu zona

Mientras estás dentro de un territorio de tu facción y cumples los mismos requisitos de arriba, participas en dos sorteos automáticos. Los jugadores pausados quedan fuera de ambos.

- **Cada hora**: **30 %** de probabilidad de encontrarte **entre $100 y $499** en efectivo.
- **Cada 15 minutos**: **50 %** de probabilidad de recibir un **mensaje de texto de un desconocido** pidiéndote droga y citándote en una propiedad al azar dentro de la zona. Solo llega si no tienes ya otro encargo pendiente, y únicamente cuando hay al menos **dos policías** conectados. En cada sorteo se envía como máximo **un** mensaje en todo el servidor. Para este sorteo no hace falta esperar el tiempo de espera de las bonificaciones.

## Graffitis

Los graffitis son carteles de texto que pintas sobre cualquier pared con una lata de spray y quedan guardados permanentemente. Sirven para marcar el barrio, dejar recados o firmar el territorio de la pandilla. La guía completa, con todas las fuentes, etiquetas de color y límites, está en [Sistema de graffitis](sistema-de-graffitis.md); aquí van los puntos principales.

### Lo esencial

- Necesitas **8 horas de juego** como mínimo, una **cuenta certificada** y una **lata de spray** con carga en la **mano derecha**.
- Puedes tener hasta **2 graffitis** activos a la vez. Para superar ese número necesitas **puntos de rol positivos**.
- Pintar dentro de un interior o mundo privado requiere **premium oro** o superior.
- La lata tiene una carga de **10.000** unidades y cada graffiti terminado gasta **250**, así que una lata llena da para **40 graffitis**.
- Hay cuatro fuentes clásicas para todos (Arial, Arial Black, Comic Sans MS y Diploma, con tamaño a elección) y **doce fuentes de letras** de estilo callejero, exclusivas de usuarios **premium** de cualquier nivel. Con estas últimas puedes usar hasta **16 letras** en un máximo de **3 líneas**, con un color distinto por letra.
- El tiempo de pintado depende del largo del texto: **2 segundos por letra**, con un tope según el tamaño en las fuentes clásicas. Mientras pintas debes quedarte quieto junto al muro; si te alejas, el graffiti se cancela.
- Al terminar un graffiti, cualquier graffiti **ajeno** pegado al mismo punto se borra: has repintado encima. Es la forma normal de tapar la firma de una pandilla rival.
- Durante los **primeros 5 minutos** puedes recolocar tu graffiti con `/graffiti editar` o eliminarlo con `/graffiti borrar`. Pasado ese margen es definitivo.

### Lo que gana pintar

- **+10 Burger Points** por cada graffiti terminado.
- **−5 Burger Points** si borras un graffiti tuyo con `/graffiti borrar`. Piensa bien la posición antes de guardarlo.
- Si pintas dentro de un territorio de tu propia pandilla, entra el sorteo de bonificación de zona descrito arriba: **40 %** de probabilidad de **+2 o +3** de habilidad de delincuente y **+5 Burger Points** extra.
- Desbloquea el logro del primer graffiti.

## Consejos

- **La presencia manda.** No hay comando para capturar un territorio: se gana teniendo gente a pie, sin máscara y sin pausar, dentro de la zona. Coordinar una quedada de quince minutos vale más que cualquier tiroteo.
- **Vigila el desgaste horario.** Una zona ganada y abandonada se pierde sola. Pasa por el barrio de vez en cuando aunque no haya nadie a quien disputársela.
- **Consulta `/influencias` antes de atacar.** Te dice exactamente cuántos puntos tiene cada facción en la zona y cuánto te falta para superar al dueño actual.
- **Consulta `/misinfluencias` antes de fabricar.** Fabricar armas y drogas cuesta influencia, y si tu facción no tiene suficiente en las calles no podrás hacerlo.
- **Aprovecha el tiempo de espera de 30 minutos.** Como es compartido entre todas las actividades, gastarlo fumando (que solo da +1) desperdicia media hora que podría haber dado +3 con un robo o un graffiti.
- **Delinque dentro de casa.** El retraso de 30 a 60 segundos en la alerta policial y los puntos de habilidad extra hacen que el mismo delito rinda mucho más en territorio propio.
- **Cocina en tu propio barrio.** Un laboratorio en territorio de tu pandilla rinde más, enfría más rápido y explota menos que uno en terreno rival.
- **Si no quieres ver el mapa pintado**, apaga las zonas en `/preferencias` ➡️ Radar.
