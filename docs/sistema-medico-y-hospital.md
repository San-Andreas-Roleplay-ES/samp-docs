# Sistema médico y hospital

## Introducción

El sistema médico de San Andreas Roleplay reúne la **atención de urgencias** que te devuelve a la calle tras caer herido, la **reaparición** cuando mueres, las **enfermedades y dolencias** que puedes interpretar, las **cirugías** que dejan una marca permanente, los **medicamentos** y el trabajo del personal médico. Cómo se registran las heridas, las hemorragias y los vendajes tienen su propia guía: el [sistema de heridas](sistema-de-heridas.md).

El centro de todo es el **All Saints General Hospital**, en Market (Los Santos). Allí está el mostrador de urgencias, allí trabajan los paramédicos y médicos residentes, y allí terminan casi todos los personajes heridos. También hay clínicas privadas repartidas por la ciudad y farmacias donde comprar medicamentos.

Este documento te sirve tanto si eres un civil que quiere entender qué pasa cuando lo hieren, como si formas parte del cuerpo médico y necesitas saber qué puedes hacer y cuánto cobrar por ello. Si estás del otro lado de la ley y buscas atención sin registros, existe una alternativa clandestina: consulta el [sistema de mercado negro](sistema-de-mercado-negro.md).

### Comandos

- /curarme — pide atención de urgencias en el mostrador del hospital.
- /reaparecer — una vez muerto, elige dónde volver a aparecer.
- /entorno — envía un aviso anónimo al 911 describiendo la situación.
- /enfermarme — abre el menú de eventos médicos para elegir una dolencia.
- /mirar [id] — inspecciona a alguien: verás sus síntomas activos y sus cirugías.
- /paramedicos — muestra cuántos paramédicos y médicos residentes hay de servicio. Alias: `/mds`.

Comandos del personal médico (paramédicos, residentes y empleados de clínica):

- /reanimar [id] — devuelve a la vida a un personaje muerto, con botiquín en mano.
- /curar [id] [precio] — trata las heridas de un paciente por un precio acordado.
- /consultamedica [id] [precio] — atiende una dolencia y elimina sus síntomas.
- /cirugia [id] [precio] — practica una operación que deja una descripción permanente.
- /certificadomedico [id] — entrega el certificado médico necesario para ciertas licencias.
- /historialmedico [Nombre_Apellido] — consulta el historial clínico de un personaje.
- /llevarhospital [id] — traslada un cuerpo al hospital (policía, cuando no hay paramédicos).

## Heridas y hemorragias

Cuando tu vida llega a cero caes **herido** con **5 minutos** para que alguien te salve; según la gravedad de las lesiones quedas noqueado, gravemente herido o brutalmente herido, y las heridas de bala y arma blanca abren **hemorragias** que se frenan con vendajes o torniquetes. Todo ese proceso, con sus umbrales y tiempos, está en el [sistema de heridas](sistema-de-heridas.md). Esta guía arranca donde termina aquella: cuando el herido llega al hospital o un paramédico lo atiende.

## Atención de urgencias en el hospital

El mostrador de urgencias del **All Saints General Hospital** está señalizado en el mapa de Market. Acércate a él a pie (no sirve desde un vehículo) y escribe `/curarme`.

Lo que ocurre después depende de cuántos **médicos residentes en servicio** haya dentro del perímetro del hospital:

| Residentes en servicio dentro del hospital | Qué hace `/curarme` |
| --- | --- |
| **0 o 1** | Te asignan una camilla de urgencias y te atienden automáticamente. |
| **2 o más** | Se genera una **alerta de socorro** para que un médico te atienda en persona. |

Cuando hay dos o más residentes y la atención pasa a ser interpretada, solo puedes generar una alerta cada **60 segundos**.

Si te asignan camilla, el tratamiento dura **5 minutos** durante los cuales quedas inmovilizado en la cama. Si te alejas más de **50 metros** del hospital antes de terminar, pierdes tu lugar en la lista de espera y la atención se cancela. Hay **10 camillas**; si están todas ocupadas tendrás que esperar a que se libere una.

Al terminar, tus heridas se limpian por completo y recuperas toda tu vida. El ingreso queda anotado en tu **historial clínico** (con heridas de bala, apuñaladas o heridas leves, según el caso).

Ten presente que el hospital no guarda silencio sobre todo: si llegas armado sin licencia, con heridas de bala o apuñalado, el centro lo comunica a la policía.

### Costos de urgencias

La tarifa de urgencias se cobra de tu **cuenta bancaria** y depende de si tienes casa propia en Los Santos y de cuántos residentes hay atendiendo:

| Situación del paciente | Precio | Quién lo paga |
| --- | --- | --- |
| Con residencia en Los Santos, **0 o 1** residente en servicio | **$2.500** | El paciente |
| Con residencia en Los Santos, **2 o más** residentes en servicio | **$5.000** | El paciente |
| **Sin residencia** en Los Santos | **$5.000** | El paciente (el gasto se contabiliza al gobierno) |
| **Funcionario público** en servicio | La tarifa vigente | Los fondos de su facción |
| **Empleado en servicio** de un negocio | La tarifa vigente | La empresa, como seguro médico |

Si hay **al menos un médico residente conectado y en servicio**, el importe de la tarifa ingresa a las arcas del hospital. Si no hay ninguno, el hospital no recauda nada por esa atención.

Tener casa propia en Los Santos abarata la urgencia a la mitad cuando el hospital está tranquilo: consulta el [sistema de propiedades](sistema-de-propiedades.md) para saber cómo comprar una.

## Reaparición tras morir

Si mueres, debes esperar **5 minutos** desde el momento de la muerte antes de poder usar `/reaparecer`. El comando te avisa de los segundos restantes si te adelantas.

Al reaparecer eliges tu punto de regreso entre cuatro ubicaciones:

- **Hospital de Los Santos** (All Saints General Hospital, Market)
- **Pizzería de Idlewood**
- **Unity Station**
- **Pershing Square**

Reaparecer también cuesta dinero: se aplica la **misma tarifa de urgencias** de la tabla anterior, con las mismas excepciones (funcionarios públicos y empleados con seguro médico lo tienen cubierto por su facción o su negocio).

Ten en cuenta que al volver a la vida se te **confiscan los objetos ilegales** que llevabas encima: armas, cargadores, munición y drogas. Los usuarios con nivel premium suficiente solo pierden las armas pesadas y conservan el resto. Más detalles en la [tienda premium](tienda-premium.md).

Si estás detenido o cumpliendo una sanción, reapareces directamente en el lugar que corresponda en lugar de ver el menú. Consulta el [sistema de cárcel](sistema-de-carcel.md).

### Curación clandestina

En Idlewood existe un punto de curación del mercado negro que cura tus heridas por **$15.000** en efectivo, sin registro médico y con un descanso de **4 horas** entre usos. No funciona si estás brutalmente herido. Los requisitos completos están en el [sistema de mercado negro](sistema-de-mercado-negro.md).

## Enfermedades y dolencias

Cada vez que entras al servidor con tu personaje hay una probabilidad cercana al **4 %** de que se te ofrezca participar en un **evento médico**. También puedes abrir el menú cuando quieras con `/enfermarme`.

El menú te propone **cinco dolencias al azar**, ordenadas de la más corta a la más larga. Eliges una (o cierras la ventana sin aceptar nada) y a partir de ese momento tu personaje la sufre durante las horas indicadas. Aceptar una dolencia te otorga **+50 Burger Points**; consulta el [sistema de Burger Points](sistema-de-burger-points.md) para saber en qué gastarlos.

El catálogo tiene **65 dolencias** distintas, desde molestias de dos horas hasta lesiones de tres días. Cada una trae una descripción, tres síntomas visibles y, en algunos casos, efectos mecánicos reales. Solo puedes tener una dolencia activa a la vez.

### Efectos que puedes sufrir

| Efecto | Qué provoca |
| --- | --- |
| **Tos** | Toses en voz alta, con un sonido audible a 10 metros de distancia. |
| **Estornudos** | Estornudas cada cierto tiempo, de forma visible para quienes te rodean. |
| **Mareos** | Tu personaje se tambalea y la visión se altera. |
| **Vómitos** | Vomitas de forma involuntaria. |
| **Alucinaciones** | Efectos visuales distorsionados. |
| **Puntería reducida** | Tu habilidad con todas las armas de fuego cae al mínimo. |
| **No poder saltar** | Tu personaje no puede saltar mientras dure la lesión. |

La tos se muestra como acción de rol con un **33 %** de probabilidad; el resto del tiempo aparece como burbuja de chat sobre tu personaje. El estornudo se muestra como acción de rol con un **20 %** de probabilidad.

### Ejemplos del catálogo

| Dolencia | Duración | Efectos |
| --- | --- | --- |
| Calambre muscular | **2 horas** | Ninguno mecánico |
| Náuseas por mareo | **3 horas** | Mareos |
| Mareo leve | **4 horas** | Mareos, alucinaciones |
| Ansiedad leve | **6 horas** | Ninguno mecánico |
| Dolor de estómago | **8 horas** | Mareos, vómitos |
| Laringitis | **10 horas** | Tos |
| Insomnio | **12 horas** | Ninguno mecánico |
| Dolor de rodilla | **16 horas** | No puedes saltar |
| Gastroenteritis | **16 horas** | Mareos intensos, vómitos |
| Estrés | **24 horas** | Ninguno mecánico |
| Torcedura de muñeca | **24 horas** | Puntería reducida |
| Bronquitis | **36 horas** | Tos, estornudos |
| Esguince de tobillo | **48 horas** | No puedes saltar |
| Luxación de hombro | **48 horas** | Puntería reducida |
| Fractura leve | **72 horas** | Ninguno mecánico |

Tus síntomas activos son visibles para cualquiera que te haga `/mirar`, así que son material de interpretación: quien te vea sabrá que algo te pasa aunque no sepa exactamente qué.

**Importante**: las dolencias del sistema de eventos médicos son afecciones físicas y no tienen relación con el contador de asesinatos ni con el nivel de felicidad de tu personaje. Esos van por su cuenta y no se tratan en el hospital; míralos en [asesinatos, salud mental y felicidad](sistema-de-asesinatos.md).

## Personal médico

El sistema trabaja con tres figuras:

- **Paramédicos** — el cuerpo de emergencias que sale a la calle: reanimaciones, vendajes, traslados y atención in situ.
- **Médicos residentes** — el personal con rango suficiente dentro del hospital, con acceso a consultas médicas y a las funciones internas del centro.
- **Empleados de clínica** — trabajadores contratados en un negocio del rubro sanitario, con acceso a `/curar` y al historial clínico mientras estén trabajando.

El comando `/paramedicos` (o `/mds`) te dice en cualquier momento cuántos hay de servicio, para saber si vale la pena llamar o si te conviene ir directo al mostrador. Los detalles de la facción están en [facciones legales](facciones-legales.md).

### Reanimación

`/reanimar [id]` devuelve a la vida a un personaje clínicamente muerto. Lo pueden usar policías, paramédicos, militares, guardabosques y guardias de seguridad, siempre en servicio y con un **botiquín de primeros auxilios** en la mano derecha, a menos de **2,5 metros** del cuerpo. El reanimado vuelve con **20 de vida**: sigue siendo urgente llevarlo al hospital.

Si no hay ningún paramédico conectado, un policía en servicio puede usar `/llevarhospital [id]` para que una ambulancia se lleve el cuerpo al All Saints General Hospital.

### Atención de heridas en la calle

`/curar [id] [precio]` es el comando con el que un paramédico o un empleado de clínica trata las heridas de un paciente fuera del hospital. Requisitos:

- Estar en servicio (o trabajando, si eres empleado de clínica).
- Llevar un **botiquín de primeros auxilios** en la mano derecha (se gasta una unidad por curación).
- Estar a menos de **3 metros** del paciente.
- Los empleados de clínica necesitan además **10 puntos** de habilidad de paramédico.

El precio se acuerda entre **$500 y $50.000**. El paciente recibe la oferta y responde con `/aceptar` o `/rechazar`. Al aceptar:

- El paciente paga el total desde su cuenta bancaria.
- El paramédico se queda con el **50 %** en su cuenta personal.
- El otro **50 %** va a las arcas de la facción (o del negocio, si es una clínica privada).
- La atención queda registrada en el historial clínico del paciente.

Hay dos límites de habilidad importantes: con **menos de 30 puntos** de habilidad de paramédico no puedes tratar las heridas de verdad (solo frenas el sangrado durante 30 minutos), y necesitas **80 puntos** para revivir a un paciente clínicamente muerto si no eres policía.

Cada curación tiene un **5 %** de probabilidad de subirte un punto de habilidad de paramédico. Los bomberos en servicio tienen su propia versión gratuita de `/curar`, con un **2 %** de probabilidad de subir habilidad.

### Consulta médica

`/consultamedica [id] [precio]` es el tratamiento de las dolencias. Es exclusivo del personal médico **en servicio**, con el paciente a menos de **3 metros**, y el precio se fija entre **$1.000 y $100.000**.

El paciente responde con `/aceptar` o `/rechazar`. Al aceptar, paga el total desde su cuenta bancaria, el médico se lleva el **50 %** y el otro **50 %** entra a las arcas de la facción. La dolencia se cura y los síntomas desaparecen progresivamente.

Hay una excepción: si el paciente tiene **salbutamol** o **codeína** activos en el cuerpo, la consulta no elimina la dolencia. Esos fármacos enmascaran el cuadro y hay que esperar a que pasen sus efectos antes de tratarlo de raíz.

### Cirugías

Las cirugías son intervenciones estéticas u operaciones que dejan una **marca permanente** en la descripción del personaje. Cualquiera que le haga `/mirar` verá la descripción de la cirugía destacada en un apartado propio.

Requisitos para operar:

- Ser paramédico o médico residente y estar **en servicio**.
- Llevar un **bisturí** en la mano derecha.
- Estar a menos de **3 metros** del paciente.

El proceso es: usas `/cirugia [id] [precio]`, se abre una ventana donde escribes la descripción del resultado (entre **10 y 128 caracteres**), y el paciente recibe la oferta con esa descripción para aceptarla o rechazarla. El precio va de **$1.000 a $1.000.000**.

Al aceptar, el paciente paga el total desde el banco, el médico se queda con el **50 %** y el otro **50 %** entra a la facción. La descripción sustituye a la cirugía anterior que tuviera el personaje, así que una operación nueva borra el registro visible de la anterior.

### Certificado médico

`/certificadomedico [id]` entrega el certificado médico que acredita la aptitud física del personaje. Lo emite cualquier paramédico o médico en servicio, con el receptor a menos de **3 metros**, y solo puede tenerse uno.

El certificado es requisito para dos trámites: la **licencia de seguridad privada** (RESP) y el **permiso para comprar un arma**. Consulta el [sistema de certificación](sistema-de-certificacion.md) y el [sistema de armas](sistema-de-armas.md).

## Medicamentos

Las farmacias de la ciudad venden medicamentos que actúan sobre los síntomas. El precio final lo fija cada negocio, pero nunca puede estar por debajo del costo base ni por encima de **diez veces** ese costo:

| Medicamento | Para qué sirve | Costo base |
| --- | --- | --- |
| Paracetamol | Analgésico y antifebril | **$115** |
| Ibuprofeno | Antiinflamatorio | **$138** |
| Amoxicilina | Antibiótico | **$138** |
| Omeprazol | Antiácido | **$138** |
| Losartán | Hipertensión | **$138** |
| Metformina | Diabetes | **$138** |
| Salbutamol | Broncodilatador: corta la tos | **$138** |
| Loratadina | Antialérgico: corta los estornudos | **$138** |
| Diclofenaco | Analgésico y antiinflamatorio | **$138** |
| Codeína | Analgésico opioide potente | **$144** |

Material sanitario que también encontrarás a la venta:

| Objeto | Uso | Costo base |
| --- | --- | --- |
| Rollo de gasa | Alternativa económica al vendaje | **$44** |
| Vendaje | Detiene hemorragias temporalmente | **$144** |
| Torniquete | Detiene hemorragias con más eficacia | **$360** |
| Bisturí | Necesario para operar | **$360** |
| Botiquín de primeros auxilios | Necesario para reanimar y curar | **$1.438** |

La **loratadina** anula por completo los estornudos mientras esté activa. El **salbutamol** y la **codeína** eliminan los síntomas, pero bloquean el tratamiento médico completo: mientras los tengas encima, un médico no podrá curarte la dolencia de raíz.

## Historial clínico

Cada atención deja rastro. El **historial clínico** de un personaje guarda las urgencias en el hospital (indicando si llegó con heridas de bala, apuñaladas o heridas leves) y las curaciones hechas por paramédicos y clínicas, con la fecha y el importe cobrado.

`/historialmedico [Nombre_Apellido]` muestra los últimos registros de un personaje. Lo pueden consultar el personal médico, la policía y el poder judicial, siempre que estén dentro de una clínica o del hospital. Es una herramienta habitual en investigaciones: ver dónde y cuándo se atendió alguien puede ser la prueba que faltaba. Consulta el [sistema de justicia](sistema-de-justicia.md).

Una excepción: quien trabaje en una clínica privada, tenga antecedentes delictivos y al menos **50 puntos** de habilidad de paramédico puede atender **sin dejar registro médico**.

## Consejos

- Lleva siempre **un torniquete o un par de vendas** encima. Una hemorragia sin tratar mata mucho antes de que llegue una ambulancia.
- Si te hirieron con pocos disparos, pide que te levanten con `/levantar` en lugar de esperar: son 60 segundos y no cuesta nada.
- Usa `/entorno` para llamar al 911 de forma anónima. El aviso llega a la policía, a los paramédicos y a la prensa con tu ubicación, pero sin tu nombre.
- Comprar casa en Los Santos abarata las urgencias a la mitad cuando el hospital está tranquilo, y a la larga sale rentable si eres de meterte en líos.
- Aceptar una dolencia en el evento médico no solo te da **50 Burger Points**: es material de rol gratis, porque tus síntomas quedan visibles en `/mirar` para todo el que te mire.
- Si vas a tratarte con un médico, no tomes codeína ni salbutamol antes: bloquean la consulta médica y tendrás que esperar.
- Vendar a otros es la forma más rápida de subir habilidad de paramédico, y con habilidad alta te desangras mucho menos tú mismo.
