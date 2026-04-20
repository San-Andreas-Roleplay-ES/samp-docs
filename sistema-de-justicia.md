# Sistema de justicia

## Introducción

El sistema de **Poder Judicial** agrupa a todos los roles encargados de impartir justicia en el servidor: **jueces**, **fiscales** y **abogados** (tanto de la Defensoría Pública como de firmas privadas). Cada figura tiene funciones y comandos distintos dentro de los procesos judiciales, las órdenes de arresto, las asistencias legales y el traslado de prisioneros.

## Hall of Justice

El **Hall of Justice** está ubicado en el **908 Hill Street**, en el distrito del Centro Cívico del centro de Los Santos, dentro de las instalaciones del City Hall.

Construido en **1925** junto con el Ayuntamiento de Los Santos, fueron los dos primeros edificios grandes inaugurados en lo que, durante las décadas siguientes, transformaría el antiguo Distrito Comercial Central de finales del siglo XIX en un Centro Cívico con edificios y plazas emblemáticas modernas.

En el mismo edificio se encuentran:

- La sede del **Los Santos Police Department HQ**.
- La sede del **Los Santos County Sheriff's Department HQ**.
- La **Defensoría Pública** (oficina #912).

## Cortes de San Andreas

La **Corte Superior del Condado de Los Santos** es una de las 58 cortes superiores del estado. Tiene jurisdicción sobre el Condado de Los Santos y lleva a cabo todos los juicios originales del condado, excepto en los casos donde los tribunales de apelación tienen jurisdicción original.

En **enero de 2000**, la corte fusionó sus operaciones con el tribunal municipal del Condado de Los Santos tras la aprobación de la **Proposición 220** (1998). Una vez acordada la consolidación, los tribunales municipales fueron abolidos y todos sus jueces y empleados pasaron a formar parte de la corte superior.

Las **Cortes de Apelaciones de San Andreas** son los tribunales de apelación intermedios del estado. San Andreas está dividido en seis distritos de apelación, formando el sistema de tribunales intermedios más grande de Estados Unidos con 106 jueces.

### Comandos del juez

- /firmarorden — firma órdenes de allanamiento o de arresto dirigidas contra un sospechoso.
- /cerrarorden — cierra una orden firmada previamente.
- /condenar — aplica la condena a un sospechoso.
- /bloquearbanco — bloquea las transacciones bancarias de un sospechoso.
- /desbloquearbanco — levanta el bloqueo bancario de un sospechoso.
- /asignarpreventiva — asigna prisión preventiva a un sospechoso.
- /removerpreventiva — retira la prisión preventiva.
- /borrararresto — elimina un arresto del historial del sospechoso.
- /recuperararresto — restaura un arresto previamente borrado.
- /borrarmulta — elimina una multa del sospechoso.
- /iniciotraslado — inicia el traslado de un prisionero desde la cárcel hasta la corte.
- /fintraslado — concluye exitosamente el traslado del prisionero.

## Fiscalía del Condado de Los Santos

El **Fiscal del Distrito del Condado de Los Santos (LSCDAO)** está a cargo de la oficina que procesa delitos graves y menores ocurridos dentro del condado. Algunos delitos menores son gestionados por fiscales locales de la ciudad, pero la mayoría de delitos graves y menores pasan por la oficina del fiscal del distrito, la **fiscalía local más grande de Estados Unidos**.

La **Oficina del Defensor Público** proporciona asistencia legal a quienes no pueden pagar un abogado privado.

### Most Wanted

El sistema **Most Wanted** identifica a sospechosos potencialmente peligrosos y los designa como **prioritarios en la búsqueda**, destacándolos en rojo y alertando a la comunidad sobre su inminente arresto. Simula la práctica de agencias gubernamentales estadounidenses que alertan al público sobre individuos buscados.

Los policías deben **solicitar al fiscal** que eleve la prioridad de búsqueda. Esto fomenta que los sospechosos con órdenes activas interpreten su situación con el peso que merece.

### Comandos del fiscal

- /pedirfiscal [id] — **(policías)** solicita la presencia de un fiscal para un sospechoso.
- /cancelarfiscal — **(policías)** cancela la solicitud de fiscal.
- /listaoficios — muestra la lista de casos pendientes solicitados por agentes de policía.
- /atenderoficio — selecciona un caso de la lista y contacta telefónicamente con el solicitante para coordinar la presencia en el lugar.

## Defensoría Pública

La **Oficina del Defensor Público del Condado de Los Santos (LSCPD)** fue la **primera agencia de defensa pública en Estados Unidos** y actualmente es la más grande del país. Entre el Defensor Público Alternativo (DPA) y la LSCPD, trabajan más de mil abogados acompañados de paralegales, investigadores, trabajadores sociales y otros perfiles de apoyo.

Proporciona asistencia legal **gratuita** a las personas acusadas de un delito que no pueden permitirse un abogado privado. Cada caso atendido por un defensor público se compensa con **$2.500** para el abogado.

**Ubicación**: Los Santos Hall of Justice, oficina #912.

## Firmas de abogados

Las **firmas de abogados** (o bufetes) son empresas que prestan servicios legales a particulares, empresas u organizaciones. En el servidor puedes **trabajar como abogado privado** dentro de una firma. La creación de una firma debe solicitarse en el foro de solicitud de creación de empresas.

Un abogado de firma puede fijar el precio de sus servicios legales entre **$2.500 y $100.000**. Las ganancias se reparten así:

- **50%** — para el abogado.
- **30%** — para la firma legal.
- **20%** — para el Departamento de Justicia (tasas obligatorias).

Los abogados de firma pueden además consultar la situación financiera del cliente para ajustar sus tarifas con criterio.

### Comandos del abogado

- /mostrariden — muestra tu licencia otorgada por el **State Bar of San Andreas**.
- /pedirabogado [id] — **(policías o fiscales)** solicita la asistencia de un abogado para un cliente. La solicitud se difunde en el juego y en el Discord del Departamento de Justicia.
- /cancelarabogado — **(policías o fiscales)** cancela la solicitud de abogado.
- /listaoficios — muestra la lista de casos pendientes solicitados por policías o fiscales.
- /atenderoficio — selecciona un caso y contacta telefónicamente con el solicitante.
- /aceptaroficio — establece el oficio con el cliente. Los defensores públicos reciben $2.500 fijos; los abogados privados establecen su propia tarifa.
- /informacionbanco — accede a la información financiera del cliente para ajustar la tarifa (solo abogados de firma).

## Reincidencia grave (3 strikes)

El sistema de **3 strikes** sanciona la reincidencia en delitos graves. Un strike **no se cuenta por cada delito**, sino por cada **arresto que incluya al menos un delito GRAVE** dentro de los **últimos 30 días**.

- Cada arresto con uno o más delitos graves suma **1 strike**, sin importar cuántos delitos graves contenga ese mismo arresto.
- Cada strike se refleja como una **estrella visible** en tu HUD (tipo wanted level de GTA), **permanente hasta que el strike caduca**. Esta estrella **solo la ves tú**, sirve como recordatorio personal de tus strikes activos.
- Los strikes **caducan automáticamente** 30 días después del arresto (y con ellos su estrella correspondiente).
- Al acumular **3 strikes** en los últimos 30 días, el juez o fiscal puede aplicar la **agravante de reincidencia grave**, que conlleva **cadena perpetua**.
- Los strikes actuales aparecen en el código penal cuando se tramita un arresto (ej. `2/3 strikes`).

## Puntos de criminalidad

Los **puntos de criminalidad** miden tu historial criminal acumulado. Al llegar a **30 puntos** eres condenado a **1 semana** de cárcel como castigo automático, sin importar el delito que cometas al ser arrestado.

### Cómo se ganan

- Por cada arresto, el sistema suma los **puntos asociados a los delitos** cometidos a tu cuenta de criminalidad.
- Cuando te acercas a los 30 puntos, recibes avisos en pantalla para que evites seguir delinquiendo.

### Cómo se pierden

- **Cumpliendo condena activo en la cárcel**: en cada **payday** que pases conectado estando preso, se te descuenta **1 punto** de criminalidad.
- **Leyendo libros en la biblioteca de la cárcel**: ciertas lecturas reducen tus puntos criminales de forma aleatoria.
- Cuando alcanzas los 30 puntos y eres arrestado por el castigo automático, el sistema resta **15 puntos** de golpe para reiniciar el ciclo.

> Por eso conviene **permanecer activo** estando en la cárcel: cada hora de juego preso reduce tu criminalidad para cuando vuelvas a la calle.
