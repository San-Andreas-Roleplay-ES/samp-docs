# Panel de Control de Usuario (UCP)

## Introducción

El **Panel de Control de Usuario (UCP)**, también llamado **PCU**, es la web oficial de San Andreas Roleplay: el lugar donde gestionas tu cuenta, tus personajes y todo lo que ocurre fuera de la partida. No es un extra opcional — es el punto de entrada obligatorio al servidor. Antes de poder conectarte tienes que registrarte aquí, aprobar la certificación de rol y crear tu primer personaje.

Una vez dentro del juego, el panel sigue siendo tu herramienta de apoyo: desde ahí consultas las normativas, gestionas los empleados de tu negocio, revisas la actividad de tu facción, abres tickets de soporte y compras en la tienda. Muchas de esas gestiones se hicieron demasiado grandes para caber en un menú del juego, así que viven en la web.

Lo más importante es que **el panel y el servidor están conectados en tiempo real**: los cambios que realizas en la web se aplican dentro del juego en cuestión de segundos, sin esperar a un reinicio del servidor.

URL: [ucp.sarp.es](https://ucp.sarp.es)

## Primeros pasos

Al entrar a la portada del panel verás una guía con los pasos obligatorios para empezar a jugar. Tienes que completarlos en orden:

1. **Descargar GTA San Andreas** — la descarga del juego base está enlazada desde el foro.
2. **Instalar SA-MP 0.3DL** — la versión 0.3.7 estándar **no es compatible**. El servidor usa 0.3DL, que es lo que permite cargar las skins, modelos y objetos personalizados de la comunidad.
3. **Aprobar la certificación** — el test de rol obligatorio. Consulta el detalle en [certificación](sistema-de-certificacion.md).
4. **Crear un personaje** — necesitas al menos uno para poder conectarte.
5. **Verificar Discord** — la vinculación de tu cuenta de Discord es un paso obligatorio.

Si intentas conectarte al servidor sin la certificación aprobada, el juego te expulsará con un aviso indicándote que la completes en el panel. Lo mismo ocurre si tu cuenta todavía está pendiente de aprobación por parte del equipo administrativo.

## Autenticación y seguridad de la cuenta

| Función | Para qué sirve |
|---|---|
| Registro e inicio de sesión | Con correo electrónico y contraseña |
| Confirmación de correo | Código enviado al registrarte |
| Recuperación de cuenta | Restablecimiento de contraseña por correo |
| Inicio de sesión con Discord | Acceso rápido usando tu cuenta de Discord vinculada |
| Verificación en dos pasos (2FA) | Código temporal de una aplicación autenticadora, con códigos de respaldo |
| Vinculación de Discord | Obligatoria; asocia tu perfil de Discord a tu cuenta |

La **verificación en dos pasos** se activa desde tu perfil escaneando un código QR con una aplicación como Google Authenticator o Authy. Es la protección más eficaz contra el robo de cuentas: aunque alguien consiga tu contraseña, no podrá entrar sin el código. El servidor te recuerda dentro del juego que la actives si aún no lo has hecho.

Ten en cuenta también que **conectarte usando una VPN o un proxy sin autorización previa deja tu cuenta inactiva**. Si te ocurre, la vía para recuperarla es abrir un ticket de soporte técnico solicitando el permiso correspondiente; el sistema de [tickets](sistema-de-tickets.md) vive en el propio panel.

## Sincronización en tiempo real con el servidor

Esta es la pieza que hace que el panel sea útil de verdad. Cuando algo cambia en la web, el servidor de juego lo detecta y lo aplica **sin necesidad de esperar un reinicio**. La comprobación se repite de forma continua, cada pocos segundos, de modo que en la práctica el cambio es inmediato.

Lo que se sincroniza y cómo se aplica:

| Qué cambia | Qué ocurre dentro del juego |
|---|---|
| **Datos de tu cuenta** | Si estás conectado, se te desconecta con un aviso para que vuelvas a entrar con la información actualizada |
| **Datos de un personaje** | Igual que arriba: si el personaje afectado está en línea, se le desconecta con aviso |
| **Propiedades** (casas y negocios) | La propiedad se recarga al momento: dueño, precio, nombre y demás datos quedan actualizados sin tocar nada |
| **Facciones** | La facción se recarga con sus nuevos datos y configuración |
| **Vehículos** | El vehículo afectado se retira del mundo para volver a aparecer con los datos nuevos |

En los dos primeros casos verás un mensaje en pantalla avisándote de que la desconexión se debe a cambios pendientes en tu panel. No es una expulsión ni una sanción: simplemente vuelve a conectarte y tendrás tu cuenta o tu personaje al día.

## Personajes

Desde el panel gestionas todo lo que rodea a tus personajes antes de meterlos en la ciudad:

- **Crear un personaje** — nombre, aspecto, historia y atributos iniciales.
- **Consultar el detalle** de cada personaje y editar sus atributos.
- **Revisar el historial** de acciones y el inventario.
- **Gestor de ropa** para la personalización visual.
- **Subir skins personalizadas**, que pasan por una revisión antes de aprobarse. El servidor usa SA-MP 0.3DL precisamente para poder mostrarlas.

Cada cuenta tiene un número de personajes limitado. Se pueden conseguir **espacios adicionales**, igual que los cambios de nombre y de edad; todo eso está detallado en la [tienda premium](tienda-premium.md).

## Mapa interactivo

El mapa es la herramienta de orientación del panel: una versión interactiva de Los Santos y alrededores con iconos que marcan los puntos relevantes del servidor — negocios, propiedades, departamentos, industrias, puntos de interés y ubicaciones administrativas.

Antes de recorrer la ciudad sin rumbo, una mirada rápida al mapa te ahorra mucho tiempo. Es especialmente útil si eres nuevo y todavía no sabes dónde está cada cosa, pero también si buscas una casa o un local en una zona concreta.

## Empresas

> **Importante:** las "Empresas" del panel son las **propiedades comerciales que tu personaje posee o administra** dentro del juego (un bar, un taller, una tienda…). No tienen relación con las **empresas legales** de la sección de facciones, que son organizaciones reconocidas oficialmente por el servidor.

Desde aquí ves el listado de negocios que tu personaje posee o administra, consultas los que están **disponibles a la venta** y entras al detalle de cada uno para revisar el stock, los movimientos y la actividad reciente.

La gestión de personal se hace exclusivamente en el panel: el comando `/empleados` está desactivado dentro del juego y te redirige a la sección "mi empresa" de la web. Ahí contratas, despides y organizas la plantilla con calma, sin depender de menús en pantalla. Los **cargos** y sus permisos sí se siguen configurando desde el juego con `/cargos`, estando dentro del local y siendo su dueño.

El detalle completo de cómo funcionan las casas y los negocios está en [sistema de propiedades](sistema-de-propiedades.md), y lo que pagas por tenerlos, en [sistema de impuestos](sistema-de-impuestos.md).

## Facción

Si tu personaje pertenece a una facción, el panel te da acceso a un **panel interno** que centraliza la gestión administrativa fuera del juego. Desde ahí puedes ver el listado de miembros y rangos, consultar registros especializados (movimientos del banco interno, comunicaciones de radio, entradas del ordenador policial) y, si tu rango lo permite, gestionar ascensos y degradaciones.

Es la herramienta que conecta el día a día de la facción con el trabajo organizativo que la sostiene. Puedes ver qué facciones existen y cómo se entra en ellas en [facciones legales](facciones-legales.md) y [facciones ilegales](facciones-ilegales.md).

## Tienda

La tienda del panel es donde se compran las membresías premium y los servicios de cuenta: espacios extra de personaje, cambios de nombre, cambios de edad y similares. También es donde se gestiona la renovación de tu membresía.

El cambio de nombre resulta especialmente relevante cuando un personaje muere de forma definitiva: para seguir jugando con esa cuenta necesitarás uno nuevo, y el juego te indicará que pases por la tienda.

Los precios, las monedas y lo que incluye cada nivel de membresía están en [tienda premium](tienda-premium.md).

## Información del servidor

El panel centraliza la documentación oficial de la comunidad para que tengas todo lo importante a un clic, sin rebuscar en el foro:

- **Normativas** — las reglas del servidor, categorizadas y siempre actualizadas. Es el documento más importante de toda la comunidad: es el que se aplica en cada reporte, sanción y apelación. Si solo vas a leer una cosa antes de empezar, que sea esto. Incluye además un minimapa con las **zonas seguras**.
- **Código penal** — el catálogo oficial de delitos, con sus tipos y consecuencias dentro del rol. Referencia obligada para cualquier personaje policial o legal, y útil también para civiles que quieran saber dónde están los límites.
- **Elecciones** — el sistema de votaciones para los cargos del gobierno de San Andreas. Cuando hay elecciones activas puedes consultar candidatos, sus partidos y ejercer tu voto.
- **Eventos** — el listado de eventos organizados por el servidor o por las facciones, con fecha y descripción. La forma rápida de saber qué está pasando esta semana.
- **Emisoras de radio** — la configuración de las radios que se escuchan dentro del juego, para que las emisoras de la comunidad se transmitan correctamente.

## Notificaciones

El panel muestra notificaciones en vivo, sin necesidad de recargar la página. Llegan principalmente por tres motivos:

- **Respuestas a tus tickets** de soporte. Además, al conectarte al juego el servidor te avisa si tienes tickets abiertos esperando tu atención.
- **Interacciones en [Bleeter](bleeter.md)**: cuando alguien responde a una de tus publicaciones o le da "me gusta".
- **Avisos generales** del servidor y de tu cuenta.

Cada notificación enlaza directamente al sitio donde ocurrió, así que no tienes que ir buscándola.

## Consejos

- Activa la **verificación en dos pasos** el primer día. Recuperar una cuenta robada es mucho más lento que protegerla.
- Si has hecho un cambio importante desde la web y el juego te desconecta, es la sincronización haciendo su trabajo: vuelve a entrar y listo.
- Antes de comprar una casa o un negocio, mira primero el **mapa** y el listado de propiedades disponibles: te evitará dar vueltas.
- Lee las **normativas** completas aunque hayas aprobado la certificación. El test comprueba lo básico; las normas cubren mucho más.
