# Sistema de bases ilegales

## Introducción

Las **bases ilegales** son propiedades que dejan de tener un dueño individual y pasan a pertenecer a una **facción criminal oficial o destacada**. Funcionan como cuartel general del grupo: un lugar donde reunirse, guardar el material de la banda y operar con mucho menos riesgo de que la policía sepa quién está detrás.

Cualquier propiedad sirve: una casa particular, un almacén, un club nocturno o un negocio. Lo que cambia no es el edificio sino su titularidad: una vez asignada, la propiedad figura a nombre de la facción y todos sus miembros reciben las llaves de forma automática.

El objetivo del sistema es premiar la **organización y la constancia** de las bandas consolidadas, dándoles un espacio inmersivo, invisible para los registros policiales y con ventajas concretas para el consumo de drogas pesadas. A cambio, la facción renuncia a poder vender la propiedad libremente y queda atada a ella durante un buen tiempo.

Aparte de las bases privadas de cada facción, el sur de Los Santos tiene un **punto criminal público** (el Idlestack, en Idlewood) al que puede acercarse cualquier delincuente. Se explica al final de este documento.

### Comandos

- /baseilegal — muestra cuál es la base ilegal actual de tu facción, si tiene una asignada.
- /baseilegal [llave] — (solo líder) propone asignar una propiedad tuya como base ilegal de la facción. Pide confirmación.
- /baseilegal [llave] confirmar — confirma la asignación de esa propiedad como base.
- /baseilegal [llave] retirar — (solo líder) devuelve la base a tu nombre personal. Solo funciona cuando venció la espera obligatoria.
- /almacen — abre el almacén de la base (también `/alm`, `/armario`, `/arm`).

## Requisitos para asignar una base

| Requisito | Detalle |
|---|---|
| Facción | Mafia o banda, con estado **oficial** o **destacado** |
| Rango | **Líder** de la facción (los miembros solo pueden consultar cuál es la base) |
| Propiedad | Debe estar **comprada a tu nombre**, o al de tu cónyuge si estás casado |
| Exclusividad | Tu facción **no puede tener** ya otra base asignada |
| Confirmación | Doble paso: primero el comando, después `confirmar` |

Si eres miembro pero no líder, `/baseilegal` te indica la llave de la propiedad que la facción tiene asignada, o te avisa de que todavía no hay ninguna.

## Qué pasa al asignarla

- La propiedad **deja de tener dueño individual** y queda registrada a nombre de la facción.
- **Todos los miembros reciben las llaves automáticamente**, sin necesidad de entregárselas uno por uno: pueden entrar, salir y usar el interior como si fuera propio.
- La facción queda bloqueada durante **14 días**: no puede cambiar ni retirar su base en ese periodo.
- Como la propiedad ya no tiene titular personal, **deja de pagar el impuesto diario a la vivienda** (ver [Sistema de propiedades](sistema-de-propiedades.md)).
- El número de teléfono asociado a la propiedad se actualiza al nuevo titular.

Al retirarla, una vez cumplidos los 14 días, la propiedad vuelve a nombre del líder que ejecuta el comando y recupera su condición de propiedad normal. La facción pierde toda referencia a esa base y puede asignar otra de inmediato.

## Permisos dentro de la base

| Rol | Entrar | Ver el almacén | Guardar en el almacén | Sacar del almacén |
|---|---|---|---|---|
| Líder de la facción | Sí | Sí | Sí | Sí |
| Miembro de la facción | Sí | Sí | Sí | No |
| Policía con orden de allanamiento | Forzando la entrada | Sí | — | Sí |
| Resto de jugadores | Según las reglas normales de la propiedad | — | — | — |

La restricción de retirada es deliberada: cualquier miembro puede **aportar** material al fondo común, pero solo el líder decide qué sale de ahí. Así se evita que un integrante recién ingresado vacíe el arsenal de la banda.

El almacén de la base tiene la misma capacidad que el de cualquier propiedad: **128 ranuras**. El líder puede reubicarlo dentro del interior con `/almacen situar` (solo si está completamente vacío) y localizarlo por sonido con `/almacen buscar`.

> **Ojo:** las drogas guardadas en un almacén **siguen perdiendo pureza** con el paso de los días. Solo el refrigerador de una propiedad las conserva, con un **70 % de probabilidad diaria** de no degradarse.

## Invisibilidad frente a la policía

Este es el beneficio principal de tener una base y la razón por la que conviene tenerla bajo el nombre de la facción:

- La base **no aparece en el ordenador policial** al consultar propiedades: una búsqueda por su número devuelve "sin coincidencias". La policía no puede averiguar por esa vía a quién pertenece.
- Cualquier **aviso de emergencia** generado dentro de la base o en sus alrededores inmediatos (balaceras, personas caídas, reportes de heridos) **se descarta por completo** y nunca llega a las patrullas.

La zona protegida cubre tanto el interior de la propiedad como el exterior en un radio de **15 metros** alrededor de la entrada. En la práctica, un tiroteo en el portal de la base no genera alerta, pero uno a media calle sí.

Esto no hace a la base intocable: la policía que consiga una **orden de allanamiento** puede forzar la entrada y revisar el almacén igual que en cualquier otra propiedad. Solo desaparecen los avisos automáticos y el rastro documental.

## Bonificaciones por consumo de drogas pesadas

Consumir drogas dentro de la base (o en su perímetro de 15 metros) activa un sorteo que no existe en ningún otro lugar. Es la recompensa por montar el consumo dentro del territorio de la banda en lugar de hacerlo en la calle.

Condiciones para participar:

- Tu personaje debe estar **vivo** (no herido ni inconsciente).
- Debes llevar **0,5 gramos o más acumulados** de esa sustancia. Por debajo de esa cantidad las probabilidades bajan un **10 %**.

| Sustancia | Premio | Probabilidad |
|---|---|---|
| Crack o heroína | De **1 a 3 puntos de experiencia** | 7 % |
| Fentanilo | **1 moneda premium** | 1,5 % |
| Fentanilo | **1 punto de rol positivo** | 0,1 % |

El punto de rol queda registrado en el historial del personaje indicando que se obtuvo consumiendo fentanilo en el entorno de tu facción, así que también sirve como constancia de tu actividad dentro de la banda.

> Fuera de una base ilegal, consumir drogas puede activar en su lugar la recompensa de **zona de pandilla**: un 50 % de probabilidad de ganar 1 o 2 puntos de habilidad de delincuente más 5 Burger Points, siempre que estés en una zona controlada por tu banda. Las dos recompensas son excluyentes: dentro de la base se juega la lotería de la base, fuera se juega la de la zona. Ver [Sistema de zonas de pandilla](sistema-de-zonas-de-pandilla.md).

## Consejos para el líder

- **No asignes la primera propiedad que compres.** Los 14 días de bloqueo son reales: si eliges mal, tu facción se queda atada a ese edificio casi dos semanas.
- **Elige por ubicación, no por tamaño.** El perímetro de 15 metros que anula los avisos de emergencia es lo que de verdad vale; una entrada discreta y alejada de rutas de patrulla rinde más que un interior grande.
- **Interiores con salida rápida** facilitan las huidas cuando llega una redada.
- **Usa el refrigerador para la droga y el almacén para el resto.** El material que no se degrada puede vivir en el almacén; lo que pierde pureza, no.
- **Reparte responsabilidades:** cualquier miembro puede aportar al almacén, así que anima a la banda a dejar ahí el excedente en vez de cargarlo encima.

## El Idlestack: la base criminal de Idlewood

Además de las bases privadas de cada facción, el sur de Los Santos cuenta con un **punto criminal abierto** conocido como el **Idlestack**, en Idlewood. No pertenece a ninguna banda ni se asigna con `/baseilegal`: es un enclave público del hampa al que puede acudir **cualquier delincuente**, sin importar su facción ni si tiene una.

Allí se concentra todo lo que antes estaba repartido por la ciudad:

- El **mercado negro**, que dejó de estar disperso en once puntos distintos y ahora opera únicamente aquí. Es el sitio donde se vende el botín (teléfonos, joyas, autopartes, muebles, mercancía de camiones) y donde los delincuentes con habilidad suficiente compran munición. El detalle de precios, requisitos y catálogo está en [Sistema de mercado negro](sistema-de-mercado-negro.md).
- Una **clínica clandestina** donde curar heridas pagando, sin pasar por el hospital ni dejar registro médico.
- La **pizzería de Idlewood**, incorporada a los puntos de reaparición del mapa.

El Idlestack es terreno abierto y sin protección: no anula los avisos de emergencia, no oculta nada al ordenador policial y la policía puede patrullarlo con total libertad. Lo que ofrece es acceso, no seguridad. Para eso está la base propia de tu facción.

## Enlaces relacionados

- [Facciones ilegales](facciones-ilegales.md) — cómo se consigue el estado oficial o destacado, jerarquías y actividad de banda.
- [Sistema de propiedades](sistema-de-propiedades.md) — compra, almacén, refrigerador, muebles e impuestos.
- [Sistema de zonas de pandilla](sistema-de-zonas-de-pandilla.md) — control de territorio y sus recompensas.
- [Sistema de drogas](sistema-de-drogas.md) — sustancias, pureza, adicción y consumo.
- [Sistema de mercado negro](sistema-de-mercado-negro.md) — venta de botín y compra de munición en el Idlestack.
