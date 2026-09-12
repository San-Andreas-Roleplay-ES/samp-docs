# Sistema de justicia

## Introducción

El **Departamento de Justicia** agrupa a los roles encargados de impartir justicia en San Andreas: **jueces**, **fiscales** e **investigadores** de la fiscalía, más los **abogados** que trabajan desde la Defensoría Pública o desde una firma privada. Entre todos manejan las órdenes de arresto y allanamiento, las condenas, la prisión preventiva, la libertad condicional y la asistencia legal de cualquier detenido.

Los jueces y fiscales pertenecen a una facción de justicia, por lo que su rol se rige por las reglas generales de las [facciones legales](facciones-legales.md): necesitan estar **de servicio** para usar prácticamente todos sus comandos. Los abogados, en cambio, son **empleados de un negocio** del tipo bufete: no hacen falta rangos de facción, solo estar contratado en una firma legal.

Casi todo lo que ocurre en este sistema tiene su contraparte en la calle (la policía redacta las órdenes y los arrestos) y en la [cárcel del condado](sistema-de-carcel.md), donde se cumplen las condenas. Este documento explica lo que hace cada figura, qué requisitos tiene y cuánto cuesta o paga cada servicio.

## Hall of Justice

El **Hall of Justice** está ubicado en el **908 Hill Street**, en el Centro Cívico del centro de Los Santos, dentro de las instalaciones del City Hall.

Construido en **1925** junto con el Ayuntamiento de Los Santos, fueron los dos primeros edificios grandes inaugurados en lo que, durante las décadas siguientes, transformaría el antiguo Distrito Comercial Central de finales del siglo XIX en un Centro Cívico con edificios y plazas emblemáticas modernas.

En el mismo edificio se encuentran:

- La sede del **Los Santos Police Department HQ**.
- La sede del **Los Santos County Sheriff Department HQ**.
- La **Defensoría Pública** (oficina #912).

La **corte** es también el único lugar donde los ciudadanos pueden consultar y pagar sus multas.

## Cortes de San Andreas

La **Corte Superior del Condado de Los Santos** es una de las 58 cortes superiores del estado. Tiene jurisdicción sobre el Condado de Los Santos y lleva a cabo todos los juicios originales del condado, excepto en los casos donde los tribunales de apelación tienen jurisdicción original.

En **enero de 2000**, la corte fusionó sus operaciones con el tribunal municipal del Condado de Los Santos tras la aprobación de la **Proposición 220** (1998). Una vez acordada la consolidación, los tribunales municipales fueron abolidos y todos sus jueces y empleados pasaron a formar parte de la corte superior.

Las **Cortes de Apelaciones de San Andreas** son los tribunales de apelación intermedios del estado. San Andreas está dividido en seis distritos de apelación, formando el sistema de tribunales intermedios más grande de Estados Unidos con 106 jueces.

## El juez

El juez es el rango más alto del Departamento de Justicia. Solo él puede firmar órdenes, modificar condenas, decretar prisión preventiva, conceder libertad condicional y corregir el historial penal de un ciudadano. Todos sus comandos exigen estar **de servicio**.

### Comandos del juez

- /firmarorden — firma una orden de allanamiento o de arresto ya redactada por la policía.
- /cerrarorden — cierra una orden que sigue abierta.
- /condenar — fija o modifica la condena de cárcel de una persona.
- /asignarpreventiva — decreta prisión preventiva sobre un detenido.
- /removerpreventiva — levanta la prisión preventiva.
- /asignarcondicional — concede libertad condicional (y saca de la cárcel si estaba preso).
- /removercondicional — revoca la libertad condicional.
- /bloquearbanco — bloquea la cuenta bancaria de un ciudadano.
- /desbloquearbanco — levanta el bloqueo bancario.
- /borrararresto — elimina un arresto del historial.
- /recuperararresto — restaura un arresto borrado.
- /borrarmulta — anula una multa.
- /iniciotraslado — inicia el traslado de un preso desde la cárcel hasta la corte.
- /fintraslado — concluye el traslado y devuelve al preso a la cárcel.

### Condenas

Con `/condenar` el juez puede reemplazar la condena de cualquier persona, aunque no la haya dictado él. Los límites son:

| Parámetro | Valor |
|---|---|
| Condena mínima | **1 hora** |
| Condena máxima | **2190 horas** (3 meses) |
| Equivalente a cadena perpetua | **2190 horas** |

Condenar a alguien lo lleva de inmediato a la cárcel y **anula cualquier prisión preventiva** que tuviera encima. Tanto el condenado como los agentes de la ley reciben el aviso.

Ojo con la diferencia: las condenas que dicta la **policía al cerrar un arresto** se cuentan en **minutos** (mínimo 5, máximo 180 salvo perpetua), mientras que el comando del juez trabaja en **horas**, pensado para sentencias largas y correcciones de sentencia. El detalle de cómo se cumple el tiempo está en el [sistema de cárcel](sistema-de-carcel.md).

### Prisión preventiva

La prisión preventiva mantiene a un detenido encerrado mientras avanza una investigación, incluso si su condena ya terminó.

- Solo puede aplicarse a alguien que **ya esté encarcelado**.
- Duración: entre **1 y 7 días**.
- No se puede acumular: si la persona ya está en preventiva, hay que retirarla primero con `/removerpreventiva`.
- Cuando la preventiva expira, el preso queda **libre automáticamente** y puede abandonar la cárcel.

Mientras dura la preventiva no se muestra el tiempo restante de condena, porque lo que retiene a la persona es la investigación en curso.

### Libertad condicional

El juez puede conceder libertad condicional por **1 a 30 días**. Si el beneficiario está preso, sale de la cárcel en el acto; si está libre, debe estar **cerca del juez** para recibirla.

Quien queda en condicional arrastra una serie de condiciones (registros, permisos de viaje, prohibición de portar armas, obligación de presentarse) y lleva una tobillera hasta que el plazo termina. Las reglas completas y los comandos del beneficiario se explican en el [sistema de cárcel](sistema-de-carcel.md).

### Bloqueo bancario

`/bloquearbanco` congela las operaciones bancarias de un ciudadano, esté conectado o no. Es una medida cautelar típica de investigaciones por delitos económicos. El bloqueo se levanta con `/desbloquearbanco` y también **desaparece solo** cuando la persona es arrestada y procesada.

### Corrección del historial

- `/borrararresto` retira un arresto del historial penal; `/recuperararresto` lo devuelve si fue un error. Un arresto borrado deja de contar para los strikes y desaparece de las búsquedas.
- `/borrarmulta` anula una multa concreta, que se elimina de la deuda del ciudadano.

### Traslados a juicio

Cuando hay que llevar a un preso a la corte, un juez o un guardia de la cárcel abre el traslado con `/iniciotraslado`. Durante el traslado el preso puede moverse fuera de la cárcel y se le distingue por el color de su nombre. Al terminar, `/fintraslado` lo devuelve automáticamente a la prisión. Si el preso se desconecta en mitad del traslado, reaparece dentro de la cárcel.

## Fiscalía del Condado de Los Santos

El **Fiscal del Distrito del Condado de Los Santos (LSCDAO)** está a cargo de la oficina que procesa delitos graves y menores ocurridos dentro del condado. Algunos delitos menores son gestionados por fiscales locales de la ciudad, pero la mayoría de delitos graves y menores pasan por la oficina del fiscal del distrito, la **fiscalía local más grande de Estados Unidos**.

Los fiscales acompañan a la policía en los procedimientos delicados: arrestos importantes, allanamientos, negociaciones de cargos y decisiones sobre qué delitos se imputan. Los **investigadores de la fiscalía** trabajan en la calle junto a los detectives policiales, con acceso a las mismas herramientas de investigación.

### Cómo pedir un fiscal

Cuando un policía necesita un fiscal en el lugar:

1. El agente usa `/pedirfiscal` **con un teléfono con número asignado en la mano derecha** y estando de servicio.
2. La solicitud llega a todos los fiscales conectados, con el nombre del agente y del sospechoso.
3. Un fiscal la toma con `/atenderoficio`, recibe el número de teléfono del agente y lo llama para coordinar.
4. Si el agente ya no necesita al fiscal, cancela con `/cancelarfiscal`.

### Comandos del fiscal

- /pedirfiscal [id] — **(policías y Departamento de Justicia)** solicita la presencia de un fiscal para un sospechoso.
- /cancelarfiscal — cancela la solicitud pendiente.
- /listaoficios — muestra las solicitudes de fiscal pendientes.
- /atenderoficio — toma una solicitud y obtiene el contacto telefónico del agente.
- /mostrarevidencias — presenta las evidencias reunidas en un caso.
- /identidad — identifica formalmente a una persona.

### Most Wanted

El sistema **Most Wanted** identifica a sospechosos potencialmente peligrosos y los designa como **prioritarios en la búsqueda**, destacándolos en rojo y alertando a la comunidad sobre su inminente arresto. Simula la práctica de agencias gubernamentales estadounidenses que alertan al público sobre individuos buscados.

Los policías deben **solicitar al fiscal** que eleve la prioridad de búsqueda. La designación se pierde en cuanto la persona es arrestada, y quien esté marcado como Most Wanted tampoco puede entregarse voluntariamente en la cárcel.

## Órdenes de arresto y de allanamiento

Las órdenes son documentos que redacta la policía (o la fiscalía) y que firma un juez. Existen dos tipos: **orden de arresto** y **orden de allanamiento**.

### Cómo se tramita una orden

1. **Redacción**: un agente de servicio usa `/ordenarresto` u `/ordenallanamiento` con el nombre del sospechoso. Debe estar **dentro de un vehículo o de una propiedad de su facción**.
2. **Contenido**: en el formulario se añaden los cargos del código penal, una descripción obligatoria, si el sospechoso es de **riesgo alto o bajo** y si la orden es **confidencial**. Una orden confidencial solo la ven detectives, sargentos y rangos superiores.
3. **Publicación**: la solicitud queda listada como pendiente de firma.
4. **Firma**: la firma la aplica un **juez de servicio** o el **líder de la facción policial** que la solicitó, con `/firmarorden`.
5. **Cierre**: cuando la orden ya cumplió su función, se cierra con `/cerrarorden`. Además del juez, pueden cerrarla los detectives y sargentos de la policía o del sheriff, los líderes federales y los supervisores de guardaparques.

Las órdenes pendientes se consultan desde el ordenador de a bordo de los vehículos policiales, ordenadas por riesgo y antigüedad. Los lectores de matrículas de las patrullas también avisan cuando cruzan un vehículo relacionado con una orden de allanamiento.

### Qué habilita una orden de allanamiento

Una orden firmada no basta por sí sola: el mando de la facción debe **autorizar el operativo de allanamiento**, y esa autorización dura **30 minutos** antes de caducar sola. Mientras está activa, los agentes de esa facción, estando de servicio, pueden:

- Forzar el almacén de una [propiedad](sistema-de-propiedades.md) sin tener las llaves.
- Forzar el **buzón** de una casa y sacar lo que hay dentro. Sin orden, únicamente quien tiene las llaves puede vaciarlo, aunque cualquier persona puede dejar cosas dentro.
- Forzar el maletero de un vehículo ajeno.

## Defensoría Pública

La **Oficina del Defensor Público del Condado de Los Santos** fue la **primera agencia de defensa pública en Estados Unidos** y actualmente es la más grande del país. Entre el Defensor Público Alternativo y la oficina principal trabajan más de mil abogados acompañados de paralegales, investigadores, trabajadores sociales y otros perfiles de apoyo.

En el servidor, la Defensoría Pública funciona como un bufete más, pero con **tarifa fija**: el defensor no negocia su precio, cobra siempre **$5,000** por caso atendido, íntegros para él.

**Ubicación**: Los Santos Hall of Justice, oficina **#912**.

## Firmas de abogados

Las **firmas de abogados** (o bufetes) son empresas que prestan servicios legales a particulares, empresas u organizaciones. Puedes **trabajar como abogado** siendo empleado de una firma legal; la creación de una firma se solicita en el foro de creación de empresas.

Un abogado de firma fija libremente el precio de su servicio dentro de un rango, y el cobro se reparte entre él y el bufete:

| Concepto | Valor |
|---|---|
| Precio mínimo del servicio | **$2,500** |
| Precio máximo del servicio | **$100,000** |
| Parte para el abogado | **60%** |
| Parte para la firma legal | **40%** |
| Defensor público (tarifa fija) | **$5,000** íntegros |

### Cómo se cobra un servicio

1. El abogado y el cliente deben estar **muy cerca** el uno del otro (a pocos pasos).
2. El abogado ofrece el servicio con `/aceptaroficio` indicando el precio.
3. El cliente **acepta o rechaza** la oferta.
4. El pago sale de la **cuenta bancaria** del cliente (debe tener saldo suficiente ya en el momento de la oferta) y entra en la del abogado.

Cada servicio cobrado otorga además **3 [Burger Points](sistema-de-burger-points.md)** al abogado.

### Consultar la situación financiera del cliente

`/informacionbanco` muestra el saldo bancario de una persona, para ajustar honorarios con criterio. Para abogados y [detectives privados](sistema-de-detectives-privados.md) la consulta cuesta **$10,000**, que se descuentan del banco. Policías, investigadores de la fiscalía y agentes federales la consultan **gratis**.

### Cómo pedir un abogado

Cuando un detenido necesita representación legal, un policía o un miembro del Departamento de Justicia lo solicita con `/pedirabogado`, igual que con el fiscal: hace falta estar de servicio y llevar un **teléfono con número asignado en la mano derecha**. El aviso llega a todos los abogados conectados, que toman el caso con `/atenderoficio` y llaman al agente. La solicitud se anula con `/cancelarabogado`.

### Comandos del abogado

- /mostrariden — muestra tu licencia del **State Bar of San Andreas**, con tu nombre y la firma para la que trabajas.
- /listaoficios — muestra las solicitudes de abogado pendientes.
- /atenderoficio — toma una solicitud y obtiene el contacto telefónico del agente.
- /aceptaroficio — ofrece el servicio a un cliente por el precio que fijes (los defensores públicos, por $5,000 fijos).
- /informacionbanco — consulta el saldo bancario del cliente ($10,000 por consulta).

## Multas

Las multas las emiten los agentes de la ley y las cámaras de velocidad. Se acumulan como deuda hasta que las pagas.

| Parámetro | Valor |
|---|---|
| Lugar de consulta y pago | **La corte** |
| Multas pendientes visibles a la vez | **16** |
| Deuda máxima tolerada para operaciones | **$10,000** |

### Cómo pagar

- `/pagarmulta` abre el **menú de multas pendientes**, estando dentro de la corte. Cada ticket muestra su número, el motivo resumido, la fecha y quién lo firmó (o "cámara de velocidad" si fue automática). Al abrir uno ves el importe completo y puedes pagarlo en el acto.
- `/multas` muestra el **historial de multas ya pagadas**, también desde la corte.

El pago siempre sale de tu **cuenta bancaria**.

### Por qué conviene pagarlas

- Si acumulas más de **$10,000** en multas impagas no puedes comprar, vender ni transferir propiedades ni vehículos.
- Las personas con multas pendientes aparecen listadas en el ordenador de a bordo policial, con el monto exacto que deben.
- Un juez puede anular una multa concreta si el procedimiento fue incorrecto.

## Reincidencia grave (3 strikes)

El sistema de **3 strikes** sanciona la reincidencia en delitos graves. Un strike **no se cuenta por cada delito**, sino por cada **arresto que incluya al menos un delito GRAVE** dentro de los **últimos 30 días**.

- Cada arresto con uno o más delitos graves suma **1 strike**, sin importar cuántos delitos graves contenga ese mismo arresto.
- Cada strike se refleja como una **estrella visible** en tu HUD (tipo wanted level de GTA), hasta que el strike caduca. Esta estrella **solo la ves tú**: sirve como recordatorio personal de tus strikes activos.
- Los strikes **caducan automáticamente** 30 días después del arresto, y con ellos su estrella.
- Al acumular **3 strikes**, un juez o un supervisor puede aplicar la **agravante de reincidencia grave**, que conlleva **cadena perpetua**. Nadie más puede añadir esa agravante a un arresto.
- Al conectarte se te avisa cuántos strikes tienes acumulados y qué implica alcanzar el máximo.
- Un arresto borrado por un juez deja de contar para los strikes.

## Puntos de criminalidad

Los **puntos de criminalidad** miden tu historial criminal acumulado. Al llegar a **30 puntos** eres condenado a **1 semana** de cárcel como castigo automático, sin importar el delito que cometas al ser arrestado.

### Cómo se ganan

- Por cada arresto, el sistema suma a tu cuenta los **puntos asociados a los delitos** que te imputaron.
- Cuando te acercas a los 30 puntos recibes avisos en pantalla para que evites seguir delinquiendo.

### Cómo se pierden

- **Cumpliendo condena activo en la cárcel**: en cada pago periódico que pases conectado estando preso se te descuenta **1 punto**.
- **Leyendo libros en la biblioteca de la cárcel**: ciertas lecturas reducen tus puntos criminales de forma aleatoria.
- Cuando alcanzas los 30 puntos y recibes el castigo automático, el sistema resta **15 puntos** de golpe para reiniciar el ciclo.

> Por eso conviene **permanecer activo** estando en la cárcel: cada rato de juego preso reduce tu criminalidad para cuando vuelvas a la calle.

## Consejos

- Los fiscales y abogados dependen del **teléfono**: sin un número asignado, nadie puede pedirte ni ofrecerte un oficio.
- Como abogado de firma, consulta el saldo del cliente **antes** de fijar el precio: si no tiene el dinero en el banco, la oferta ni siquiera se puede plantear.
- Como juez, recuerda que la prisión preventiva solo funciona sobre gente **ya encarcelada**: para retener a alguien que está en la calle, primero hace falta una orden de arresto firmada.
- Como policía, una orden de allanamiento firmada no sirve de nada sin el **operativo autorizado**, y ese permiso solo dura media hora.
- Paga tus multas apenas puedas: superar los **$10,000** de deuda te deja fuera del mercado de propiedades y vehículos.
