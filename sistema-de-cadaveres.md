# Sistema de cadáveres

> ⚠️ **Advertencia de contenido sensible.** Este documento describe mecánicas de **roleplay ficticias** del servidor: manejo de cadáveres, quema de cuerpos y extracción de órganos. Son dinámicas de juego enmarcadas en un entorno de ficción y no representan ni promueven ninguna conducta de la vida real.

## Introducción

Los cadáveres se generan cuando un personaje experimenta una **muerte definitiva** (Character Kill) y permanecen en el lugar de forma permanente, a menos que sean "escondidos" por otros jugadores o llevados a la morgue.

## Cadáver

El cadáver generado mantiene el mismo **skin, descripción, inventario y heridas** del personaje asesinado. La desaparición del cadáver nunca ocurrirá a menos que un personaje médico o policía lo mande a la morgue. Un personaje criminal con suficiente habilidad podrá llevarse el cadáver, subirlo a un maletero, etc.

Es posible examinar la descripción física de un cadáver y las heridas que tiene mediante el comando `/cadaver examinar`. **Ten cuidado con encontrarte un cadáver demasiado destrozado**: puede dañar el estado mental de tu personaje (efectos de salud mental por exposición).

### Comandos

- /cadaver examinar — muestra las heridas y el estado de los órganos del cadáver más cercano.
- /cadaver inventario — revisa las pertenencias del cadáver (deja huellas).

## Forense

Hay dos formas de manejar un cadáver como agente de la ley:

### 1. Sin FD disponible (solicitar forense)

Si no hay ningún FD disponible, PD o SD tienen la opción `/cadaver solicitarforense`, que hará desaparecer el cadáver y lo mandará a la morgue **automáticamente después de 15 minutos** en la escena del crimen. El agente puede interpretar que el proceso forense es hecho por un NPC como de costumbre.

Esto sólo debe hacerse si no hay ningún FD disponible para responder. Las policías deben hacer el intento razonable para comunicarse con FD a través de la radio departamental.

Requisitos internos del comando:

- Ser **policía en servicio**.
- El cadáver debe llevar al menos **15 minutos** en escena (900 segundos).
- El cadáver **no debe estar ardiendo**.
- Sólo disponible cuando hay **menos de 2 paramédicos** en servicio.

### 2. Con FD disponible (bolsa de cadáver)

Si FD está disponible, podrán ir a la escena del crimen, utilizar una **bolsa para cadáveres** de su equipo faccionario y:

1. `/cadaver bolsa` — tapa el cuerpo con la bolsa.
2. `/cadaver recogerbolsa` — recoge la bolsa y la carga (requiere **ambas manos libres**).
3. `/cadaver entregarbolsa` — entrega la bolsa en la **morgue** del hospital (coordenadas 1158.16, -1346.06, 15.44).

Los miembros de FD que entreguen cadáveres en el hospital reciben un bonus de **$2.500** al banco. Es importante recalcar que FD no podrá actuar en calidad de oficina forense y deberá simular que se trata del traslado de una persona brutalmente grave que será declarada muerta en el hospital.

### Trabajo de detectives (PD / SD)

Antes de entregar un cadáver a la morgue, los detectives de homicidios de PD o SD deben recopilar pruebas visuales de la escena del crimen, tomar fotografías detalladas de las heridas, registrar descripciones del cuerpo y recoger el inventario del cadáver. Si este material será usado como evidencia, debe guardarse en una bolsa de evidencias mediante `/cadaver inventario`.

Los detectives también pueden recolectar **muestras de fluidos, tejidos o huellas dactilares** usando hisopos de laboratorio (equipo faccionario) con `/cadaver muestraadn`. Es fundamental que el cadáver **no esté calcinado** para poder obtener estas pruebas.

### Comandos

- /cadaver solicitarforense — envía el cadáver a la morgue automáticamente tras 15 min (PD/SD en servicio, sin FD disponible).
- /cadaver bolsa — tapa o destapa el cadáver con una bolsa (bolsa de basura o bolsa de cadáver en mano derecha).
- /cadaver recogerbolsa — carga la bolsa con el cadáver (ambas manos libres, hab. criminal 50 / paramédico / detective privado).
- /cadaver entregarbolsa — entrega la bolsa en la morgue (+$2.500 al banco, sólo paramédicos en servicio).
- /cadaver muestraadn — toma muestra de ADN con hisopo (policías o paramédicos en servicio).

## Inventario

Los cadáveres podrán ser **saqueados por cualquier criminal** una vez que hayan transcurrido al menos **3 horas** desde que el cuerpo apareció en la escena del crimen. Los policías pueden saquear el inventario sin esperar.

Es crucial que las facciones ilegales que planeen matar a un personaje y robarle sus pertenencias lo hagan **antes de cometer el homicidio**. El cadáver conserva todo el inventario original del personaje asesinado.

## Bolsas de cadáveres

Los criminales con **50 de habilidad de delincuente** podrán colocar cadáveres en bolsas de basura o bolsas para cadáveres y trasladarlos al lugar que consideren adecuado. Sin embargo, **mover un cadáver siempre deja rastros** (fluidos, insectos, huellas) que podrían ser recogidos posteriormente. Por ello, es fundamental que cada criminal encuentre la manera de cubrir sus huellas.

Requisitos para recoger la bolsa:

- **50 de habilidad de delincuente** (o ser paramédico o detective privado).
- El cadáver debe estar **dentro de una bolsa** (`/cadaver bolsa` previamente).
- **Ambas manos libres**.
- El cadáver **no debe estar ardiendo**.

---

> ⚠️ **Contenido sensible — roleplay ficticio.** Las secciones siguientes describen mecánicas de juego dentro de la ambientación criminal del servidor. No son instrucciones ni representaciones de la vida real.

## Quema de cuerpos

Los criminales con **50 de habilidad de delincuente** podrán rociar combustible sobre un cadáver para calcinarlo. Basta con tener un bidón de **diésel o gasolina** en la mano derecha y un **encendedor** en la mano izquierda para iniciar el fuego. El cadáver pasa al estado **"calcinado"** inmediatamente.

Al calcinarlo:

- El cadáver **arde durante 15 minutos** (objeto de fuego visible).
- Deja una **estela de humo durante 1 hora** (objeto de humo visible).
- Todas las **huellas dactilares y rastros de ADN se borran** del cuerpo, lo que impide extraer muestras con hisopo.
- Se consume combustible (5-9 unidades) y gas del encendedor (1-5 unidades).

Restricciones:

- Sólo disponible **al aire libre** (mundo virtual 0 / exteriores). No puedes quemar cadáveres en interiores.
- El cadáver no debe estar ya calcinado.
- Mientras arde, nadie puede recoger la bolsa ni solicitar forense.

### Comandos

- /quemarcadaver — rocía combustible y prende fuego al cadáver más cercano.

## Robo de órganos

Los criminales con **conocimientos en medicina** (habilidad de paramédico ≥ 25) podrán extraer determinados órganos de un cadáver para los fines que consideren oportunos. No se proporcionan spoilers ni documentación sobre las herramientas y elementos necesarios para llevar a cabo la extracción, dejando estos detalles a discreción del jugador.

Los órganos y zonas que el sistema contempla son: **pecho, costillas, estómago, ingle, corazón, pulmones, hígado, intestino, páncreas y riñones**. Cada órgano extraído o zona destrozada quedará reflejada al examinar el cadáver (`/cadaver examinar`) y afecta al estado mental de quien observa el cuerpo.

### Comandos

- /desmembrarcadaver [parte] — extrae o destroza la parte especificada (requiere ser criminal con habilidad paramédico ≥ 25).
