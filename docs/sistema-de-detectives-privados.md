# Sistema de detectives privados

## Introducción

Los **detectives privados** son investigadores civiles acreditados por la **San Andreas Association of Licensed Investigators (SAALI)**. Su licencia les abre la puerta a un arsenal de vigilancia que, fuera de su gremio, solo manejan la policía y las agencias federales: micrófonos espía, rastreadores GPS, drones de reconocimiento, interceptores telefónicos StingRay, autoradares vehiculares y kits de desactivación de bombas.

La gran diferencia con un agente del orden es que el detective **no depende del servicio de facción**. Mientras un policía necesita estar de turno y tener rango de supervisor para muchas de estas herramientas, el detective puede usarlas en cualquier momento, siempre que lleve el equipo encima. A cambio, todo lo que para la policía es gratuito, para el detective se paga: el equipo cuesta el doble del precio de catálogo y cada consulta a las bases de datos se cobra de su cuenta bancaria.

La licencia SAALI la otorga el equipo administrativo del servidor a personajes con un rol de investigación consolidado; no se compra en ninguna tienda ni se tramita con un comando. Una vez concedida, aparece reflejada en tu ficha como profesión "Detective privado" y habilita todos los comandos de este documento.

Este trabajo encaja con abogados, periodistas, familias que buscan pruebas de infidelidad, empresas que sospechan de sus empleados y con cualquier trama que necesite pruebas antes de llegar a un tribunal. Para saber qué valor tienen esas pruebas en un juicio, consulta el **[sistema de justicia](sistema-de-justicia.md)**; para el trabajo de campo con casquillos y sangre, el **[sistema forense](sistema-forense.md)**.

> Los kits de desactivación de bombas forman parte del equipo de detective, pero el funcionamiento de los explosivos se documenta aparte en el **[sistema de bombas](sistema-de-bombas.md)**.

### Comandos

- `/placadet` — muestras o enseñas tu placa SAALI.
- `/equipodet` — abres el catálogo de compra de equipo.
- `/pdc` — abres el Private Detective Computer.
- `/informacionbanco [jugador]` — consultas un saldo bancario por **$10,000**.
- `/recogercasquillo`, `/recogersangre` — recoges evidencias del suelo.
- `/encendermicrofono`, `/apagarmicrofono` — activas o desactivas un micrófono espía.
- `/escucharmicrofono` — enciendes o apagas el receptor de micrófonos.
- `/detectarmicrofono` — barres la zona buscando micrófonos ocultos.
- `/rastreargps` — activas o desactivas el rastreo de GPS en el mapa.
- `/drone [raider | goblin]`, `/destruirdrone` — despliegas o recoges un drone.
- `/interceptarnumero [número]` — sintonizas la StingRay con un teléfono.
- `/autoradar` — instalas o desinstalas el autoradar del vehículo que conduces.
- `/detectarsenal` (o `/detectarseñal`) — buscas StingRays y autoradares cercanos.
- `/desactivarbomba` — intentas cortar el cable correcto de una bomba cercana.

## La placa SAALI

`/placadet` sin nada detrás hace que mires tu propia placa; con el nombre de alguien a menos de **5 metros**, se la enseñas. Muestra tu número de colegiado, la asociación y tu condición de detective privado. Es un gesto de rol: no obliga a nadie a colaborar, pero da credibilidad al pedir información.

## Equipo de detective

Con `/equipodet` se abre un catálogo exclusivo **dentro del Ammu-Nation de Market**. Fuera de esa propiedad el comando no funciona, y necesitas la mano derecha libre para poder recibir lo que compres.

Todo el equipo se cobra **directamente del banco** y cuesta **el doble del precio base** del artículo. Para los artículos clasificados como arma hace falta además **licencia de armas**. Durante los eventos de **La Purga** y los **Hunger Games** el catálogo queda desactivado.

### Electrónica de vigilancia

Estos son los aparatos que definen el oficio, con el precio ya duplicado que paga el detective:

| Artículo | Precio para detective | Para qué sirve |
|---|---|---|
| Micrófono espía | **$70,000** | Se planta en el lugar y capta lo que se habla alrededor. |
| Receptor de micrófonos ocultos | **$130,000** | Escucha todos los micrófonos activos en 300 metros. |
| Detector de micrófonos ocultos | **$10,000** | Localiza micrófonos en 10 metros (**10 usos**). |
| Rastreador GPS | **$50,000** | Se coloca en el objetivo para seguirlo en el mapa. |
| Receptor de rastreadores GPS | **$130,000** | Muestra los rastreadores dentro de 300 metros. |
| Dispositivo StingRay | **$180,000** | Intercepta las comunicaciones de un número de teléfono. |
| Detector de receptores de señal | **$17,000** | Detecta StingRays y autoradares (**5 usos**). |
| Inhibidor de señales de radio | **$16,000** | Bloquea comunicaciones por radio en la zona. |
| Kit de desactivación de bombas | **$200,000** | Permite intentar desarmar un explosivo. |

### Resto del catálogo

| Categoría | Artículos |
|---|---|
| Defensa y reducción | Porra **$288**, spray de pimienta **$88**, táser **$5,750**, esposas **$2,158**, escudo **gratis**, chaleco kevlar **$862**, guantes LawPro kevlar **gratis** |
| Armas de fuego | Glock 17 **$2,100**, AF-1 Strike One **$3,500**, cargador 9x19 **$324**, cuchillo de hoja fija **$1,726** |
| Protección personal | Mascarilla **$432**, máscara táctica de gas **$2,000**, gafas de visión nocturna **$5,000** |
| Herramientas | Cámara **$432**, linterna **$30**, radio UHF **$1,150**, halligan **$2,300**, ganzúas **$144**, detector de metales **$3,594**, kit de limpieza de armas **$1,036**, estuche porta rifles **$862** |
| Acreditación | ID policial **$288** |
| Médico y logística | Medicamentos de detoxicación **$11,500**, Narcan **$2,300**, caja de cartón **$88**, bolsa de evidencias **$862**, bolsa para cadáveres **$288** |

## Private Detective Computer (PDC)

Con una **laptop en la mano derecha**, `/pdc` abre una terminal equivalente al ordenador policial, pero de pago. Cada consulta descuenta su importe del banco en cuanto se muestra el resultado, y si no tienes saldo suficiente la búsqueda se rechaza antes de empezar.

| Consulta | Precio | Qué devuelve |
|---|---|---|
| Información por **nombre** | **$50,000** | Ficha del personaje: edad, licencias vigentes y multas registradas. |
| Información por **matrícula** | **$25,000** | Datos del vehículo e indica si está denunciado como robado. |
| Información por **propiedad** | **$10,000** | Tipo de propiedad, dirección y dueño o arrendatario. |
| Información por **teléfono** | **$10,000** | A quién pertenece ese número. |
| Información por **serial de arma** | **$50,000** | Historial y titular registrado del arma. |
| **Armas por propietario** | **$100,000** | Listado de armas a nombre de una persona. |

A esto se suma `/informacionbanco`, que fuera del PDC te da el saldo bancario de cualquier persona conectada por **$10,000** por consulta (el mismo precio que pagan los abogados; policías, investigadores fiscales y agentes federales la tienen gratis).

## Micrófonos espía

Los micrófonos funcionan en tres piezas que se compran por separado y se complementan: el **micrófono** capta, el **receptor** escucha y el **detector** busca micrófonos ajenos.

### Alcances y batería

| Parámetro | Valor |
|---|---|
| Captación al aire libre | **20 metros** |
| Captación dentro de una propiedad | **8 metros** |
| Captación de conversaciones en voz baja o susurros | **5 metros** |
| Alcance del receptor | **300 metros** |
| Alcance del detector | **10 metros** |
| Batería del micrófono encendido | **60 minutos** |

### Cómo funciona

Enciendes el micrófono con `/encendermicrofono` teniéndolo en la mano derecha y luego lo dejas donde quieras vigilar. A partir de ahí, cualquier frase hablada en su radio —conversación normal, susurro, acción de `/me`, descripción de `/do` o grito— se reenvía a **todos los receptores encendidos** que estén dentro de 300 metros del micrófono.

Cada frase interceptada llega al receptor indicando la distancia a la que se dijo y un número anónimo que identifica al hablante, pero **no su nombre**. Reconocer quién es quién forma parte del trabajo: tendrás que cruzarlo con lo que veas en el terreno.

El detalle más aprovechable es que un micrófono **dentro de una propiedad** también alcanza a los receptores que estén **en la calle, cerca de la entrada** de esa propiedad. No hace falta entrar para oír lo que pasa dentro: basta con dejar el micrófono y quedarse aparcado enfrente.

La batería se agota sola a los 60 minutos y el micrófono se apaga. Puedes apagarlo antes con `/apagarmicrofono`, que exige más pericia que encenderlo: desmontarlo sin romperlo es lo difícil.

### Requisitos

| Comando | Requisito |
|---|---|
| `/encendermicrofono` | Detective **o** habilidad de electrónica **5+** |
| `/apagarmicrofono` | Detective **o** habilidad de electrónica **20+** |
| `/escucharmicrofono` | Detective **o** habilidad de electrónica **5+** |
| `/detectarmicrofono` | Detective **o** habilidad de electrónica **15+** |

`/escucharmicrofono` se corta solo si guardas el receptor o si mueres. `/detectarmicrofono` gasta **un uso** del detector por barrido y, cuando encuentra algo, te dice la distancia exacta al aparato para que puedas peinarla.

## Rastreadores GPS

El rastreador GPS se coloca discretamente en un vehículo, una bolsa o encima de una persona y permite seguir su posición sobre el mapa mientras estés relativamente cerca.

| Parámetro | Valor |
|---|---|
| Alcance del receptor | **300 metros** |
| Rastreadores visibles a la vez | **5** |
| Requisito de `/rastreargps` | Detective **o** habilidad de electrónica **5+** |

Con el receptor en la mano derecha, `/rastreargps` activa o desactiva el seguimiento. Mientras esté activo aparece un **icono rojo en el mapa** por cada rastreador dentro de rango, y las posiciones se refrescan de forma continua, así que un objetivo en movimiento se ve avanzar. Si guardas el receptor o mueres, el rastreo se interrumpe y los iconos desaparecen.

## Drones de reconocimiento

El drone es un aparato de radiocontrol que pilotas desde el **asiento trasero** de una furgoneta Topfun Van. Mientras lo vuelas ves por sus ojos: sirve para reconocer una azotea, seguir una persecución desde el aire o documentar una reunión sin acercarte.

### Requisitos

- Estar **vivo** y sin otro drone activo.
- Estar en el **asiento trasero** de una Topfun Van, al aire libre (nada de interiores).
- Cumplir **al menos una** de estas condiciones: ser **detective privado**, ser **policía**, ser **bombero**, tener **70 o más de habilidad de electrónica**, o tener **premium oro** o superior.

La policía puede además pilotar desde un Enforcer, y los bomberos desde su unidad de incendios, donde disponen de un modelo propio equipado con chorro de agua.

### Modelos y alcance

- `/drone raider` y `/drone goblin` son los dos modelos disponibles para detectives y civiles.
- **Alcance máximo desde la van**: **150 metros** para detectives y civiles, **300 metros** para policías.

Mientras vuelas se dibuja sobre el mapa un área de color que marca tu margen de maniobra:

| Color | Significado |
|---|---|
| 🟢 Verde | Señal fuerte (primer tercio del alcance) |
| 🟡 Amarillo | Señal media (segundo tercio) |
| 🔴 Rojo | Señal débil (último tercio: estás al borde de perderlo) |

Si superas el alcance, el drone **pierde señal y se apaga en el sitio**; en cuanto la van se acerca de nuevo, vuelve a arrancar solo. Esto obliga a trabajar en pareja: uno conduce la furgoneta acercando el punto de emisión y otro pilota.

### Qué destruye el drone

- Que la Topfun Van sea destruida.
- Que mueras, dejes de pilotarlo o entres en un interior.
- Que el drone reciba demasiado daño (es frágil: unos pocos disparos bastan).
- Usar `/destruirdrone`, que lo recoge limpiamente y te devuelve al asiento trasero de la van.

## Escuchas telefónicas (StingRay)

La StingRay es un maletín que, llevado en la mano derecha, se sintoniza con un **número de teléfono concreto** y a partir de ahí intercepta las comunicaciones asociadas a ese número.

### Quién puede usarla

- **Detectives privados**, sin necesidad de estar en servicio.
- **Policías con rango de supervisor**, en servicio.
- **Agentes de la JSA con rango de supervisor**, en servicio.

### Alcances

| Parámetro | Valor |
|---|---|
| Radio de captación alrededor del dispositivo | **300 metros** |
| Radio en el que se oye el mensaje interceptado | **10 metros** alrededor del operador |
| Rango de números válidos | de **0** a **999999999** |

`/interceptarnumero [número]` sintoniza el aparato. A partir de ese momento, los mensajes enviados desde o hacia ese teléfono, cuando el emisor esté dentro de los 300 metros de la StingRay, aparecen en tu chat identificando el número del emisor y el contenido del mensaje.

Ojo con el radio de emisión: el mensaje interceptado lo lee **cualquiera que esté a menos de 10 metros de ti**. Escuchar en una plaza llena significa compartir la escucha con todos los presentes; hazlo dentro de un vehículo o en un sitio apartado.

Igual que los micrófonos, la StingRay atraviesa la barrera interior/exterior: si el operador está dentro de una propiedad, la captación se calcula desde la puerta de esa propiedad hacia fuera.

## Autoradares de vehículo

El autoradar convierte una furgoneta en una unidad móvil de escucha de comunicaciones. En lugar de seguir un número concreto como la StingRay, barre **todo lo que se habla** en su radio y lo vuelca dentro del vehículo.

### Requisitos

- Ser **detective privado** (sin necesidad de servicio), **supervisor de policía** en servicio o **supervisor de la JSA** en servicio.
- Ser el **conductor** del vehículo.
- Llevar una **laptop en la mano derecha**.

### Vehículos compatibles

| Vehículo | Quién puede usarlo |
|---|---|
| Boxville | Cualquier autorizado |
| Newsvan | Cualquier autorizado |
| Enforcer | Solo policías |

### Funcionamiento

`/autoradar` instala el equipo si el vehículo no lo tiene y lo desinstala si ya estaba puesto. Una vez instalado, todo lo que se hable dentro de **300 metros** del vehículo llega al chat de **quienes van dentro** —solo ellos—, indicando la distancia a la que se dijo y un número anónimo por hablante.

Es la herramienta más potente del arsenal y también la más fácil de detectar: deja la huella de señal más fuerte de todas.

## Contramedidas: detección de señales

Nadie está indefenso frente a este equipo. El **detector de receptores de señal** permite barrer el entorno y averiguar si te están escuchando.

### Requisitos

- Detector de receptores de señal en la mano derecha, con batería (**5 usos**; cada barrido gasta uno).
- Ser **detective** **o** tener al menos **15 de habilidad de electrónica**.

### Qué significa cada lectura

`/detectarsenal` (o `/detectarseñal`) devuelve uno de cuatro mensajes:

| Lectura | Qué la provoca |
|---|---|
| Alteración **fuerte** | Hay un **autoradar activo** a menos de 300 metros. |
| Alteración **mediana** | Hay una **StingRay operativa** a menos de 300 metros. |
| Alteración **débil** | Falso positivo: no hay nada, pero el aparato duda. |
| "No has detectado ningún receptor" | Lectura limpia. |

Cuando no hay ninguna señal activa, el resultado se reparte **al azar a partes iguales** entre el falso positivo y la lectura limpia: la mitad de las veces el detector te asustará sin motivo. Ese ruido es intencionado y significa que **un detector nunca confirma que la zona esté limpia**; solo confirma que sí hay algo cuando marca fuerte o mediano. Si sospechas, repite el barrido: dos lecturas limpias seguidas son mucho más fiables que una.

Ten en cuenta también que el autoradar tapa a la StingRay: si hay un autoradar en la zona, el detector marcará "fuerte" y no te dirá si además hay una StingRay funcionando. Para localizar micrófonos plantados hace falta el **detector de micrófonos**, que es un aparato distinto y trabaja con `/detectarmicrofono`.

## Trabajo de campo y evidencias

La licencia de detective también da acceso a tareas de recogida de pruebas que normalmente están reservadas a la policía científica:

- `/recogercasquillo` — recoges un casquillo del suelo. Necesitas la mano derecha libre y el casquillo tiene que estar **frío**: si acaba de ser disparado, quema, salvo que lleves guantes puestos. Los casquillos muy deteriorados se rompen al levantarlos.
- `/recogersangre` — tomas una muestra de sangre del suelo, también con la mano derecha libre. A diferencia de la policía, tú **no necesitas estar en servicio** para hacerlo.
- Los detectives pueden manipular **bolsas de cadáveres**, algo que en general requiere estómago (habilidad de delincuente alta) o ser paramédico.

Qué hacer después con esas muestras —análisis, comparación de huellas y valor probatorio— se explica en el **[sistema forense](sistema-forense.md)**.

## Desactivación de bombas

Con un **kit de desactivación de bombas** en la mano derecha y una bomba a menos de **5 metros**, `/desactivarbomba` abre un panel con **tres cables** de colores. Debes elegir uno.

Uno de los tres es el equivocado y **hace estallar el artefacto en el acto**: tienes un **tercio de probabilidad de morir** en cada intento. No hay pista alguna sobre cuál es el correcto, así que la decisión sensata suele ser evacuar la zona antes que jugarse la vida. Si no eres detective, necesitas **5 de habilidad de electrónica**.

El resto del funcionamiento de los explosivos está en el **[sistema de bombas](sistema-de-bombas.md)**.

## Resumen de requisitos

| Comando | Quién puede usarlo | Objeto necesario |
|---|---|---|
| `/placadet` | Detective | — |
| `/equipodet` | Detective, en el Ammu-Nation de Market | Mano derecha libre |
| `/pdc` | Detective | Laptop |
| `/informacionbanco` | Detective, abogado, policía, investigador fiscal o agente federal | — |
| `/encendermicrofono` | Detective o electrónica 5+ | Micrófono espía |
| `/apagarmicrofono` | Detective o electrónica 20+ | Micrófono espía |
| `/escucharmicrofono` | Detective o electrónica 5+ | Receptor de micrófonos |
| `/detectarmicrofono` | Detective o electrónica 15+ | Detector de micrófonos |
| `/rastreargps` | Detective o electrónica 5+ | Receptor de rastreadores GPS |
| `/drone` | Detective, policía, bombero, electrónica 70+ o premium oro | Topfun Van |
| `/interceptarnumero` | Detective, o supervisor de policía/JSA en servicio | StingRay |
| `/autoradar` | Detective, o supervisor de policía/JSA en servicio | Laptop + Boxville, Newsvan o Enforcer |
| `/detectarsenal` | Detective o electrónica 15+ | Detector de receptores de señal |
| `/desactivarbomba` | Detective o electrónica 5+ | Kit de desactivación de bombas |
| `/recogercasquillo` | Detective, policía científica o delincuente 70+ | Mano derecha libre |
| `/recogersangre` | Detective o policía científica en servicio | Mano derecha libre |

## Consejos

- **Llega al PDC con deberes hechos.** Una consulta por nombre cuesta $50,000; una matrícula, la mitad. Si puedes anotar la placa de un coche antes de identificar al conductor, ahorras dinero.
- **Trabaja en equipo.** El drone necesita alguien al volante de la van, y el autoradar necesita un conductor que lo mueva. Un detective solo rinde la mitad.
- **Cuida la discreción.** La StingRay reparte lo que intercepta a 10 metros a la redonda y el autoradar es lo más escandaloso que existe para un detector. Escuchar desde dentro de un vehículo cerrado es casi siempre la opción correcta.
- **El micrófono es tu mejor inversión por hora.** Sesenta minutos de batería y la posibilidad de oír el interior de una propiedad desde la calle rinden más que cualquier consulta de base de datos.
- **Anota los números anónimos.** Ni el micrófono ni el autoradar te dan nombres. Cruzar el número con lo que ves en el terreno es lo que convierte una escucha en una prueba.

> **Aviso de rol:** el equipo de detective desequilibra situaciones si se usa como simple ventaja mecánica. Justifica cada escucha con una investigación creíble, respeta el metagame y recuerda que las contramedidas existen precisamente para que el bando vigilado tenga contrajuego. Si tu trabajo acaba en un tribunal, el valor de las pruebas depende de cómo las obtuviste: consulta el **[sistema de justicia](sistema-de-justicia.md)** y, para el papel de la policía y la JSA en estas mismas herramientas, las **[facciones legales](facciones-legales.md)**.
