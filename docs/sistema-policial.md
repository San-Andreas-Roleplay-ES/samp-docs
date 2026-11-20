# Sistema policial

## Introducción

Los cuerpos policiales de San Andreas (LSPD, LSSD, FBI y las facciones de justicia) comparten un conjunto de herramientas para patrullar, consultar datos y sancionar infracciones: un **ordenador policial** con interfaz gráfica, **multas con citación** basadas en el Código Penal, un **lector de matrículas (ALPR)**, **radares de velocidad**, **callsigns** de unidad, el **alcoholímetro** y el **megáfono**. Esta guía explica cómo se usa cada una y qué requisitos tiene.

Casi todo exige estar **de servicio** (`/servicio`) y pertenecer a una facción policial o de justicia. Las reglas generales de las facciones, los rangos y los demás comandos de cada departamento están en la guía de [facciones legales](facciones-legales.md). Las órdenes de arresto y de allanamiento, las condenas y el resto del proceso judicial están en el [sistema de justicia](sistema-de-justicia.md).

### Comandos

- `/ordenador` (alias `/odp` y `/mdc`) — abre el ordenador policial.
- `/mdc2` — abre la versión de consulta por diálogos del ordenador.
- `/multar [jugador]` — redacta una multa a una persona, con citación.
- `/multarveh [matrícula]` — deja una multa a un vehículo.
- `/mirarmulta` — muestra el detalle de la multa del ticket que llevas en la mano.
- `/alpr` — reinicia el lector de matrículas de tu unidad.
- `/infoalpr` — muestra la ficha completa de la última matrícula capturada.
- `/radar [id]` — marca en el mapa un radar de velocidad.
- `/togradar` — activa o desactiva los avisos de los radares.
- `/callsign [nombre]` — te une a un callsign, cambias de uno a otro o sales.
- `/callsigns` — lista los callsigns en turno.
- `/est` — cambia el estado de tu callsign.
- `/alcoholimetro [jugador]` (alias `/alcotest`) — mide la tasa de alcohol de una persona.
- `/m [mensaje]` — habla por el megáfono.
- `/dpl [jugador] [puntos] [motivo]` y `/qpl [jugador] [puntos]` — suman o quitan puntos de infracción de la licencia de conducir.
- `/togtraficoaereo` — activa o desactiva las alertas del tráfico aéreo ambiental.
- `/snakecam` (alias `/optiwand`) — cámara por debajo de una puerta. Ver el [sistema de cámaras de seguridad](sistema-de-camaras-de-seguridad.md).

## Ordenador policial

El ordenador policial es la base de datos central de la policía y de la justicia. Se abre con `/ordenador` y se maneja con clics.

| Requisito | Detalle |
|---|---|
| Quién | Policías y miembros de la justicia |
| Estado | **De servicio** |
| Lugar | Dentro de un **vehículo** o de una **propiedad** de tu facción |

La pantalla de inicio muestra contadores en vivo: órdenes de arresto, órdenes de allanamiento, vehículos denunciados como robados en las últimas 12 horas, personas con multas impagas, incidentes, llamados al 911 y callsigns en turno. Debajo hay accesos rápidos para buscar una persona, consultar una matrícula, ver las órdenes de arresto y ver los llamados de servicio. Las secciones son:

| Sección | Qué puedes hacer |
|---|---|
| **Servicio y unidades** | Cambiar el estado de tu callsign y ver los callsigns en turno |
| **Personas** | Buscar información, arrestos y multas por nombre; ver las personas con multas impagas, las que están en libertad condicional y los [prófugos](sistema-de-profugos.md) conectados |
| **Vehículos** | Consultar una matrícula y ver las denuncias de vehículos robados |
| **Propiedades** | Consultar una propiedad y su titularidad |
| **Telefonía** | Consultar un número de teléfono |
| **Armas** | Buscar un arma por su serial o las armas registradas a nombre de una persona |
| **Órdenes judiciales** | Ver las órdenes de arresto y de allanamiento pendientes |
| **Actividad operativa** | Ver los últimos incidentes y los últimos llamados de servicio |

La ficha de una persona reúne sus datos básicos, sus licencias (con los puntos de infracción de la de conducir) y una sección de libertad condicional, que indica si está vigente, vencida, sin fecha o si la persona sigue en prisión. También funciona con personas desconectadas. Las armas que entrega una facción no aparecen a nombre de un ciudadano.

Las órdenes **confidenciales** solo las ven los detectives, sargentos y rangos superiores. `/mdc2` abre la versión por diálogos del mismo ordenador, con los mismos requisitos.

Los detectives privados, aunque tienen su propio ordenador de pago, no usan este: ver el [sistema de detectives privados](sistema-de-detectives-privados.md).

## Multas y citaciones

### Multar a una persona

`/multar` abre la lista de infracciones del **Código Penal de San Andreas**. Pueden multar a una persona los policías y la justicia en servicio, agentes de tránsito, inspectores de bomberos, el ejército desde un rango alto y los rangos altos del gobierno (estos últimos sin necesidad de estar de servicio).

| Requisito | Detalle |
|---|---|
| Equipo | Un **portapapeles** en la mano derecha |
| Distancia | A menos de **5 metros** de la persona |
| Receptor | Necesita **una mano libre** y no puede tener otra oferta pendiente |
| Restricción | No puedes multarte a ti mismo ni redactar otra multa mientras tengas una citación pendiente de firma |

Cada vez que eliges una infracción se suma su descripción y su monto al total. Además de las infracciones de la lista, puedes **escribir un cargo manual**, con un monto de **$1 a $100.000** y una descripción de al menos 3 caracteres. No puedes repetir un cargo ni pasar del largo máximo del texto. Cuando hay al menos un cargo aparece la opción **Emitir multa**.

| Total de la multa | Límite |
|---|---|
| Agentes de tránsito | De $1 a **$5.000** |
| Resto de facciones | De $1 a **$100.000** |

### La citación

La persona multada ve una **citación** en pantalla con la fecha, el oficial, los cargos y la cantidad, y debe elegir **Firmar** o **No firmar**. Negarse a firmar está penado por el Código Penal de San Andreas: si no firma, la citación se cancela y el oficial recibe el aviso.

- Al firmar, la multa queda registrada como deuda y la persona recibe un **ticket** de LSPD o de LSSD, según la facción del oficial. Necesita una mano libre para recibirlo.
- `/mirarmulta` muestra el detalle y el estado (pagada o pendiente) del ticket que lleves en la mano.
- Las multas se consultan y se pagan en la corte (ver [sistema de justicia](sistema-de-justicia.md)). Si pagas con el **ticket en la mano derecha**, tienes un **40 % de descuento** y el ticket se consume.
- Si la infracción elegida pertenece a los delitos contra la seguridad vial, la multa suma **1 punto** a tu licencia de conducir (ver [Puntos de licencia](#puntos-de-licencia)).

### Multar un vehículo

`/multarveh [matrícula]` funciona con el mismo portapapeles y la misma lista de infracciones, pero lo pueden usar solo los policías, la justicia y los agentes de tránsito en servicio. Debes estar a menos de **10 metros** del vehículo, y no admite vehículos de facción ni vehículos sin propietario. No hay citación: la multa se deja en el vehículo y queda como deuda de su propietario (en un vehículo de empresa, del dueño del negocio). Las multas a vehículos no suman puntos de licencia.

## Registro de vehículos y lector de matrículas

Los vehículos con el registro vencido figuran en el ordenador policial y en el lector de matrículas. Los que nunca se registraron no aparecen en el ordenador, pero el lector avisa cuando una matrícula corresponde a un vehículo sin registro. Los detalles del registro están en el [sistema de vehículos](sistema-de-vehiculos.md).

### ALPR

Algunas unidades policiales llevan instalado un **lector automático de matrículas (ALPR)**. Se usa desde el asiento del conductor:

1. Pulsa la tecla **2** para capturar la matrícula del vehículo más cercano, a menos de **15 metros**. Debes esperar **10 segundos** entre capturas.
2. Si el vehículo tiene la placa oculta, el lector solo informa de ello.
3. Si no, muestra la matrícula y el modelo real del vehículo, y consulta la base de datos. En rojo, en tu chat, aparecen los avisos que correspondan: **orden de arresto** relacionada con la matrícula, **orden de allanamiento**, **denuncia por robo**, **vehículo sin registro** y, si pertenece a un prófugo, la advertencia correspondiente (ver [sistema de prófugos](sistema-de-profugos.md)).

`/alpr` reinicia el lector de tu unidad y borra la matrícula capturada. Solo funciona al volante.

`/infoalpr` abre una **ficha completa de la última matrícula capturada**: matrícula, modelo, propietario, estado del registro (vigente hasta una fecha, vencido, permanente o no requerido), si está denunciada como robada y cuántas órdenes de arresto activas tiene su titular. Puedes usarlo como piloto o copiloto de la unidad y esperando 3 segundos entre consultas; las órdenes confidenciales solo cuentan para quien puede verlas.

## Radares de velocidad

Los radares de la ciudad vigilan a los vehículos terrestres. No actúan sobre embarcaciones ni aeronaves, ni sobre policías, bomberos o paramédicos de servicio.

- Cuando un vehículo supera el límite, la central avisa por radio a los policías de servicio con el número del radar, el **modelo real** del vehículo, su placa (o que la lleva oculta), la velocidad en mph y el lugar. Entre un reporte y otro del mismo vehículo hay una espera.
- Si la placa es visible, la central añade un segundo aviso cuando la matrícula figura **como robada** y otro cuando el **titular tiene una orden de arresto activa** (las órdenes confidenciales no se anuncian).
- Un vehículo con la **patente quitada** no puede ser multado por el radar, pero el exceso se reporta igual como placa oculta.
- Las multas llegan al propietario del vehículo: las dos primeras veces que superas el límite por **5 mph o más** solo suena un aviso, y a la **tercera** recibes la multa, de **$150 más $100 por cada mph** de exceso. Después, ese vehículo no vuelve a ser multado por radar hasta pasados 15 minutos.

`/radar [id]` coloca un punto en el mapa con la ubicación de un radar. `/togradar` silencia (o reactiva) los reportes de los radares para tu personaje, incluidos los avisos de robo y de órdenes. La preferencia se guarda y también se cambia desde `/panel`.

## Callsigns

El callsign es la identificación de tu unidad durante el turno. Lo usan los policías, la justicia y los paramédicos.

| Parámetro | Valor |
|---|---|
| Callsigns por facción | Hasta **32** |
| Miembros por callsign | Hasta **4** |
| Requisito | Estar de servicio |

- `/callsign [nombre]` te une al callsign (lo crea si no existe). Repetir el mismo nombre te saca de él. Si ya estás en uno y escribes otro nombre, **cambias en un solo paso**, siempre que haya cupo.
- `/callsigns` muestra la lista con los miembros, el estado y la ubicación de cada unidad.
- `/est` cambia el estado de tu callsign. LSPD, FBI y SADCR usan *Disponible*, *No disponible*, *Código 6*, *Código 7*, *En TAC* y *Respondiendo*. El LSSD usa *10-8*, *10-6*, *10-97* y *C/6*. El resto de facciones solo tiene *Disponible* y *No disponible*.

Tu callsign se **recuerda entre conexiones**: al entrar de servicio (o al conectarte ya de servicio) vuelves a él y recibes un recordatorio para actualizarlo. Si el callsign ya está completo, se te avisa para que elijas otro. Al salir de servicio dejas de figurar en la lista y no quedan callsigns vacíos.

## Alcoholímetro

El alcoholímetro mide la tasa de alcohol de un conductor.

| Requisito | Detalle |
|---|---|
| Quién | Policía en servicio (el equipo lo entregan LSPD y LSSD con `/equipar`) |
| Equipo | El alcoholímetro en la mano derecha |
| Distancia | A menos de **2,5 metros**, en el mismo mundo |
| Espera del oficial | **30 segundos** entre pruebas |
| Espera sobre la misma persona | **120 segundos** |

La persona recibe un cuadro para **soplar** o **negarse**, y tiene **30 segundos** para responder. Negarse a la prueba está penado por el Código Penal de San Andreas. Soplar muestra la tasa medida, el límite legal y el resultado a los dos:

| Tasa | Resultado |
|---|---|
| Menos de 0,08 | Negativo |
| De 0,08 a 0,15 | Positivo |
| Más de 0,15 | Positivo agravado |

Con un resultado positivo puedes multar con la infracción correspondiente de la lista de `/multar` por conducir con alcohol: **$4.800** de 0,08 a 0,15 y **$9.600** por encima de 0,15. Son delitos contra la seguridad vial, así que suman un punto de licencia. La prueba se anula si el oficial o la persona se alejan, cambian de mundo, o el oficial deja el servicio o suelta el equipo.

## Puntos de licencia

Las multas de tráfico y los arrestos con un cargo de tránsito suman puntos a la licencia de conducir. Con **8 puntos vigentes** la licencia queda **suspendida 7 días**, y cada punto **caduca a los 30 días**. El detalle del sistema, incluidas las restricciones de trabajo con la licencia suspendida, está en el [sistema de vehículos](sistema-de-vehiculos.md).

Además de los puntos automáticos, los policías, la justicia, los guardabosques y los agentes de tránsito en servicio pueden gestionarlos a mano:

| Comando | Qué hace | Límites |
|---|---|---|
| `/dpl [jugador] [puntos] [motivo]` | Suma de **1 a 3 puntos** | Motivo de 8 a 100 caracteres; a menos de **20 metros**; **60 segundos** entre usos; la persona debe tener licencia |
| `/qpl [jugador] [puntos]` | Quita de **1 a 3 puntos**, empezando por los más antiguos | A menos de **20 metros**; la persona debe tener licencia |

Solo un **líder** puede provocar con `/dpl` la suspensión: si quien suma no lo es y los puntos llegarían a 8, no se aplican. Un juez en servicio puede levantar una suspensión con `/levantarsuspension`. No puedes modificar tus propios puntos.

## Aviso de órdenes al arrestar

Al abrir `/arrestar` sobre una persona, y de nuevo al finalizar el reporte, el sistema avisa si el detenido tiene **órdenes de arresto activas**, con los números de orden (hasta 8; si hay más indica "más de 8"). El aviso al finalizar te recuerda cerrarlas con `/cerrarorden` si corresponde: el arresto **no cierra las órdenes por sí solo**. Las órdenes confidenciales solo se muestran a quien tiene permiso para verlas. El arresto en sí está explicado en el [sistema de cárcel](sistema-de-carcel.md).

## Megáfono

`/m [mensaje]` envía tu mensaje a **50 metros** a la redonda. Se puede usar de dos maneras:

- **Megáfono de mano**: con el objeto en cualquiera de tus manos puedes usar `/m` en cualquier lugar, sin vehículo.
- **Megáfono del vehículo**: policías, bomberos, paramédicos, ejército, guardabosques y agentes de tránsito de servicio pueden usarlo dentro de un vehículo equipado con megáfono, o a pie a menos de **5 metros** de un vehículo con megáfono de su facción. A pie no puedes usarlo esposado.

## Helicópteros policiales

Los helicópteros tienen un techo de vuelo: por encima de él la estructura se tensa y el helicóptero no puede seguir subiendo.

| Quién | Techo (sobre el suelo) |
|---|---|
| Piloto de un helicóptero de su propia facción, policía en servicio | **300 metros** |
| Resto de pilotos | **175 metros** |

Los pilotos de helicópteros policiales de servicio tampoco reciben las alertas de proximidad del **tráfico aéreo ambiental** (las aeronaves ambientales del servidor). Cualquier piloto puede apagar o encender esas alertas con `/togtraficoaereo`; la preferencia se guarda.

## Equipo policial

Estos objetos se obtienen con `/equipar`, estando de servicio y dentro de un vehículo o una propiedad de tu facción:

| Equipo | Facciones | Uso |
|---|---|---|
| **Alcoholímetro** | LSPD, LSSD | Mide la tasa de alcohol con `/alcoholimetro` |
| **Chaleco moderno** | LSPD y LSSD, cada uno el suyo | Chaleco antibalas del departamento |
| **Radio APX 8000** | LSPD, LSSD, FBI | Radio con las mismas funciones que la radio UHF |
| **Megáfono de mano** | LSPD, LSSD, FBI | Permite usar `/m` en cualquier lugar |
| **Optiwand** | LSPD, LSSD, FBI, justicia, guardabosques | Obligatorio en la mano derecha para usar `/snakecam` |
| **Pistola radar, señal de alto, señal de despacio y bastón luminoso** | LSPD, LSSD, FBI | Objetos de rol para controles de tráfico |

### Conos y barreras

`/cono` coloca conos y barreras de señalización, y `/clonarcono [id]` copia uno cercano y abre el editor sobre la copia. Pueden usarlos las facciones de emergencia y el gobierno en servicio, además del ejército y los guardabosques; los pinchos solo los clona la policía. El catálogo incluye biombos, marcadores de evidencia, conos reflectantes, barricadas, señales de tránsito y puestos de mando.

## Cámaras de seguridad y snakecam

La policía de servicio puede revisar el registro de las cámaras de seguridad de una propiedad, desde el interior o desde su puerta, y con la snakecam puede mirar por debajo de una puerta con un Optiwand. Ambas funciones están explicadas en el [sistema de cámaras de seguridad](sistema-de-camaras-de-seguridad.md).

## Consejos

- Revisa siempre el ordenador antes de una parada: una orden de arresto, una denuncia de robo o un registro vencido cambian por completo el procedimiento.
- Mantén tu callsign actualizado con `/est`: tus compañeros ven tu estado en `/callsigns`.
- Antes de multar, comprueba que tienes el **portapapeles** en la mano derecha y que la persona tiene una mano libre; si no, la citación no se puede entregar.
- Si una persona quiere pagar con descuento, recuérdale que debe llevar el **ticket en la mano derecha** al pagar en la corte.
- Usa `/togradar` si los avisos de los radares te saturan el chat durante un operativo.
- Si pilotas el helicóptero de tu facción, vigila la altura: el techo es de 300 metros sobre el suelo.
- Al cerrar un arresto, acuérdate de cerrar con `/cerrarorden` las órdenes que ya cumpliste.
