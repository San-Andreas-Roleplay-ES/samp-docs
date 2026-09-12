# Sistema de zonas de pandilla

## Introducción

Las **zonas de pandilla** son los territorios que las facciones criminales se disputan en Los Santos. Aparecen pintadas en el radar y en el mapa con el color de la facción que las controla, y una zona marcada oficialmente como **en disputa** parpadea en rojo para todos.

Controlar un territorio no es decorativo: da dinero extra en cada paycheck a todos los miembros de la facción, retrasa la llegada de la policía a los incidentes que ocurren dentro y habilita bonificaciones para quienes delinquen sobre su propio terreno. Por eso el mapa cambia de manos constantemente: cualquier pandilla o mafia puede disputar cualquier zona con solo mantener gente activa dentro de ella.

Si prefieres jugar con el mapa limpio, puedes ocultar las zonas del radar desde tus preferencias. Este documento cubre el sistema de territorios y los **graffitis**, la forma más visible de marcar el barrio. Para saber cómo entrar a una facción criminal consulta [Facciones ilegales](facciones-ilegales.md), y para las actividades delictivas en sí, [Sistema de delincuente](sistema-de-delincuente.md).

### Comandos

- /influencias — muestra cuánta influencia tiene acumulada cada facción en la zona donde estás parado.
- /graffiti crear — inicia la creación de un graffiti en la pared que tengas delante.
- /graffiti editar — reposiciona un graffiti tuyo pintado hace menos de 5 minutos.
- /graffiti borrar — elimina un graffiti tuyo pintado hace menos de 5 minutos.
- /preferencias — abre tus preferencias; en la sección **Radar** puedes activar u ocultar las zonas de pandilla. Alias: `/panel`.

## Cómo se conquista una zona

El control de cada territorio lo decide un contador de **influencia**. Cada facción acumula su propia influencia en cada zona, y la que más tenga se queda con ella.

### Quién genera influencia

El servidor revisa **una vez por minuto** a cada jugador. Sumas influencia para tu facción solo si cumples todo esto:

- Perteneces a una **pandilla o una mafia**.
- Estás **dentro** de la zona.
- Estás **a pie** (dentro de un vehículo no cuenta).
- No llevas **máscara** puesta.
- No estás **pausado**.

### Cuánta influencia sumas

Cada jugador que cumple los requisitos aporta un punto base por minuto, más los extras que le correspondan a su facción. Los extras son **acumulables**:

| Fuente | Influencia por minuto |
|---|---|
| Presencia dentro de la zona | +1 |
| Facción de tipo **pandilla** | +2 |
| Facción con estatus **destacada** | +1 |
| Facción con estatus **oficial** | +3 |

Así, un miembro de una pandilla común aporta **3 puntos por minuto**, y uno de una pandilla oficial y destacada aporta **7**.

Además, cada vez que alguien suma influencia en una zona, **todas las demás facciones presentes en el contador de esa zona pierden 1 punto** (nunca por debajo de cero). Diez miembros tuyos dentro del territorio no solo suben tu marcador: también erosionan el de tus rivales diez veces por minuto.

La influencia de cada facción en una zona está limitada a un máximo de **10.000 puntos**.

### El cambio de dueño

**15 segundos** después de cada suma de influencia, el servidor revisa el marcador completo de la zona. La facción con **más influencia** se queda con el territorio, siempre que supere el umbral mínimo de **100 puntos**. Si nadie llega a ese número, la zona conserva a su dueño actual.

Que el umbral sea bajo hace que una zona descuidada caiga rápido: una pandilla común con diez miembros dentro genera 30 puntos por minuto y puede capturarla en unos **tres o cuatro minutos** si no encuentra oposición. Con presencia enemiga la cosa se alarga, porque cada punto que suma el rival te resta uno a ti.

### El desgaste

Cada **hora** el servidor recorta la influencia de **todas** las facciones en **todas** las zonas en una cantidad aleatoria de **0 a 10 puntos**. Es imposible dejar una zona asegurada para siempre: si tu gente deja de pisar el barrio, el marcador se desinfla solo y tarde o temprano otro grupo lo supera.

Si una facción es disuelta o pierde su condición de pandilla o mafia, pierde de inmediato todos sus territorios y toda la influencia acumulada.

## Beneficios de controlar territorio

### Pago en el paycheck

Todos los miembros de una pandilla o mafia reciben un extra en cada paycheck por los territorios que controle su facción. El pago aparece en el recibo bajo el concepto **Pandilla**:

- **Entre $0 y $49** por cada zona controlada, sorteado por separado en cada zona.
- El total está topado en **$1.000** por paycheck.

Como el sorteo es independiente en cada territorio, controlar muchas zonas paga en promedio unos **$25 por zona**: a partir de unas cuarenta zonas el tope se alcanza casi siempre.

### Retraso de las alertas policiales

Cuando alguien resulta herido de bala o se genera un incidente **dentro de una zona reclamada por cualquier facción**, el aviso a la policía llega con un retraso adicional de **30 a 60 segundos** sobre el tiempo normal. Es el margen de ventaja que da jugar en terreno marcado.

### Bonificaciones por delinquir en tu propio barrio

Delinquir **dentro de un territorio de tu propia facción** te da puntos de habilidad extra y [Burger Points](sistema-de-burger-points.md). Para optar a estas bonificaciones necesitas:

- Ser miembro de una facción de **tipo pandilla** (las mafias no entran aquí).
- Que la zona donde estás esté **controlada por tu propia facción**.
- Tener al menos **5 puntos de habilidad de drogas**.
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

El robo de vehículo cuenta tanto si lo consigues puenteando el cableado como al desarmar piezas del coche.

### Sorteos automáticos dentro de tu zona

Mientras estás dentro de un territorio de tu facción y cumples los mismos requisitos de arriba, participas en dos sorteos automáticos. Los jugadores pausados quedan fuera de ambos.

- **Cada hora**: **30 %** de probabilidad de encontrarte **entre $100 y $499** en efectivo.
- **Cada 15 minutos**: **50 %** de probabilidad de recibir un **mensaje de texto de un desconocido** pidiéndote droga y citándote en una propiedad al azar dentro de la zona. Solo llega si no tienes ya otro encargo pendiente, y únicamente cuando hay al menos **dos policías** conectados. Para este sorteo no hace falta esperar el tiempo de espera de las bonificaciones.

## Graffitis

Los graffitis son carteles de texto que pintas sobre cualquier pared y quedan guardados permanentemente. Sirven para marcar el barrio, dejar recados o firmar el territorio de la pandilla.

### Requisitos

- **8 horas de juego** como mínimo.
- Una **lata de spray** en la **mano derecha**, con carga suficiente.
- Puedes tener hasta **2 graffitis** activos a la vez. Para superar ese número necesitas **puntos de rol positivos**.
- Pintar dentro de un interior o mundo privado requiere **premium platino**.

La lata de spray tiene una carga de **3.000** unidades y cada graffiti terminado gasta **250**, así que una lata llena da para **doce graffitis**. El servidor admite un máximo de **1.024** graffitis en el mapa: si se llena, no podrás crear más hasta que se liberen huecos.

### Cómo se pinta

1. Colócate frente a la pared con la lata de spray en la mano derecha y escribe `/graffiti crear`.
2. Escribe el **texto**, de hasta **24 caracteres**. Debe estar en inglés, salvo jergas hispanas. Puedes usar etiquetas de color dentro del texto: `(n)` para salto de línea y `(b)` negro, `(w)` blanco, `(y)` amarillo, `(g)` verde, `(bl)` azul, `(r)` rojo, `(or)` naranja, `(lb)` celeste, `(gr)` gris, `(br)` marrón, `(p)` rosado, `(pu)` morado, `(dgr)` verde oscuro y `(nbl)` azul marino.
3. Elige la **fuente** entre Arial, Arial Black, Comic Sans MS y Diploma.
4. Elige el **tamaño**: pequeño, mediano, grande o gigante. El tamaño gigante solo admite textos de hasta **14 caracteres**.
5. Confirma y **mantén presionado el botón de disparo** con la lata en la mano para empezar a pintar.

El pintado es progresivo y el tamaño elegido decide cuánto tarda: **15 golpes de spray** para el pequeño, **20** para el mediano, **25** para el grande y **30** para el gigante, a razón de uno por segundo. Verás el progreso en pantalla.

Mientras pintas debes quedarte quieto junto al muro: si te alejas más de un par de pasos, el graffiti se cancela y pierdes el trabajo. Si sueltas el botón tienes **10 segundos** para retomarlo; pasado ese tiempo, todo el progreso se pierde y hay que empezar de cero. Desconectarte durante el proceso también lo cancela.

Cuando la barra se completa entras en modo de colocación para ajustar el cartel sobre la pared. Al guardar, el graffiti queda pintado y visible para todo el mundo.

### Repintar sobre otros

Al terminar un graffiti, cualquier graffiti **ajeno** que estuviera pegado al mismo punto se borra automáticamente: has repintado encima. El juego te avisa con el mensaje "Has repintado un graffiti" en lugar de "Has pintado". Es la forma normal de tapar la firma de una pandilla rival sin pedirle permiso a nadie.

### Editar y borrar

Durante los **primeros 5 minutos** después de pintarlo puedes acercarte a un graffiti tuyo (a menos de cinco pasos) y usar `/graffiti editar` para recolocarlo, o `/graffiti borrar` para eliminarlo. Pasado ese margen el graffiti es definitivo.

### Lo que gana pintar

- **+10 Burger Points** por cada graffiti terminado.
- **−5 Burger Points** si borras un graffiti tuyo con `/graffiti borrar`. Piensa bien la posición antes de guardarlo.
- Si pintas dentro de un territorio de tu propia pandilla, entra el sorteo de bonificación de zona descrito arriba: **40 %** de probabilidad de **+2 o +3** de habilidad de delincuente y **+5 Burger Points** extra.
- Desbloquea el logro del primer graffiti.

## Consejos

- **La presencia manda.** No hay comando para capturar un territorio: se gana teniendo gente a pie, sin máscara y sin pausar, dentro de la zona. Coordinar una quedada de quince minutos vale más que cualquier tiroteo.
- **Vigila el desgaste horario.** Una zona ganada y abandonada se pierde sola. Pasa por el barrio de vez en cuando aunque no haya nadie a quien disputársela.
- **Consulta `/influencias` antes de atacar.** Te dice exactamente cuántos puntos tiene cada facción en la zona y cuánto te falta para superar al dueño actual.
- **Aprovecha el tiempo de espera de 30 minutos.** Como es compartido entre todas las actividades, gastarlo fumando (que solo da +1) desperdicia media hora que podría haber dado +3 con un robo o un graffiti.
- **Delinque dentro de casa.** El retraso de 30 a 60 segundos en la alerta policial y los puntos de habilidad extra hacen que el mismo delito rinda mucho más en territorio propio.
- **Si no quieres ver el mapa pintado**, apaga las zonas en `/preferencias` ➡️ Radar.
