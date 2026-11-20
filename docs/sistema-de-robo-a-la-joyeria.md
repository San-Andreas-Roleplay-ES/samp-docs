# Sistema de robo a la joyería

## Introducción

La joyería de **Market**, en Los Santos, se puede asaltar. Guarda tres botines distintos: las **41 vitrinas** repartidas por el local, la **caja registradora** del mostrador y la **caja fuerte** de la oficina. Las joyas de las vitrinas se guardan en una **bolsa de joyas robadas** que solo compra el [mercado negro](sistema-de-mercado-negro.md), mientras que la caja fuerte suelta casetes de dinero como los de los [cajeros automáticos](sistema-de-robo-de-cajeros.md).

El local no está desprotegido. Dos **guardias** patrullan los pasillos y se apoyan entre sí, el **vendedor** puede dar la alarma y, en cuanto se avisa a la policía, una **cortina metálica** baja y cierra todo el frente de la joyería. Es un golpe pensado para un grupo, con las mismas exigencias que el [robo al banco](sistema-de-robo-al-banco.md).

Todo el botín sale de las arcas del gobierno. Para repartir los roles del golpe y conocer lo que viene después, revisa el [sistema de delincuente](sistema-de-delincuente.md) y el [sistema policial](sistema-policial.md).

### Comandos

- `/robojoyeria [acción]` — realiza cada paso del robo. Sin acción te muestra la lista.
- `/abrir` y `/cerrar` — abren y cierran la puerta de la oficina (con la llave de la oficina en la mano derecha si está cerrada con llave).
- `/forzarcerradura` — fuerza la puerta de la oficina desde la tienda.
- `/cachear` — junto a un guardia reducido, atado o caído, lo registra y le quita la llave.
- `/recoger` — junto a una vitrina rota, saca las joyas que quedan dentro. En la caja fuerte recoge los casetes (y si eres policía de servicio, los asegura como evidencia).
- `/mercadonegro` (o `/venderrobo`) — vende la bolsa de joyas en el mercado negro.

Las acciones de `/robojoyeria` se agrupan por lugar:

| Lugar | Acciones |
| ----- | -------- |
| Tienda | `rompervitrina`, `taparcamara`, `cortarcortina` |
| Mostrador | `forzarregistradora`, `sacarfajo`, `interrogar` |
| Oficina | `desactivaralarma`, `romperalarma`, `revisarcarpetas` |
| Caja fuerte | `marcarcombinacion`, `forzardial`, `taladrarcaja`, `ponerbomba` |
| Guardias | `reducir`, `atar` |

## Requisitos

Cada paso del robo exige todo lo siguiente:

| Requisito | Detalle |
| --------- | ------- |
| Ser delincuente | Los policías de servicio no pueden participar. |
| Cuenta certificada | Consulta el [sistema de certificación](sistema-de-certificacion.md). |
| Policías de servicio | Al menos **10** conectados y de servicio. |
| Habilidad de delincuente | **70** como mínimo para entrar en el robo. Algunas acciones piden más (ver la tabla siguiente). |
| Enfriamiento personal | No tener un enfriamiento delictivo activo (ver más abajo). |
| Sin otro delito en curso | No puedes estar robando un cajero, el banco ni haciendo otro delito a la vez. |
| Sin evento | No se puede robar durante el paintball, los Juegos del Hambre ni la Purga. |
| Libre de ataduras | No estar esposado, tazeado ni placado, y estar a pie y vivo. |

Hasta **16 personas** pueden participar en un mismo robo.

### Habilidad de delincuente por acción

| Acción | Habilidad mínima |
| ------ | ---------------- |
| Vitrinas, caja registradora, vendedor, panel de la alarma, archivadores, guardias, cámaras, puerta de la oficina y combinación de la caja fuerte | **70** |
| Cortar la cortina o taladrar la caja fuerte | **75** |
| Abrir la caja fuerte con ganzúas (el dial) | **80** |
| Detonar una bomba TNT | **90** |

### Enfriamiento personal

En cuanto haces el primer acto del robo se activa tu enfriamiento delictivo, que **dura 12 horas** y se comparte con los demás delitos (atracos, robo al banco y a cajeros). Las cuentas premium lo reducen según su nivel, entre un **25%** y un **50%**.

Mientras dura no puedes empezar otro robo, pero sí puedes seguir participando en el que ya estás haciendo.

## Cómo funciona el robo

El robo empieza con el primer acto delictivo dentro de la joyería. Termina cuando pasan **30 minutos** desde que empezó o cuando durante **2 minutos** no hay nadie haciendo nada dentro (salvo que alguien esté cortando o girando el dial). Al terminar, cada participante que se haya llevado botín gana **al menos 2 puntos** de habilidad de delincuente, solo una vez.

La joyería queda cerrada **1 hora** después de un robo. Si nadie tocó la caja fuerte ni se llevó botín, queda cerrada solo **10 minutos**. Mientras está cerrada (o con la cortina baja) no se puede comprar en ella.

### Cortina metálica

Cuando se avisa a la policía baja una **cortina metálica** que cierra las vidrieras, la puerta y los pilares de todo el frente. Quien no participa en el robo y está dentro es sacado a la vereda; los participantes quedan atrapados dentro. Para salir hay cuatro caminos:

- **Cortarla** con una motoamoladora o un soplete frente a la puerta de la joyería (habilidad 75). Abre un hueco por el que pasa una persona.
- **Volarla** con una bomba TNT puesta junto a la cortina (habilidad 90).
- Esperar a que un **policía de servicio** la levante con `/abrir` frente a la puerta.
- Esperar a que la central la levante sola cuando termina el robo.

Si la alarma saltó por error y no hubo robo, la central levanta la cortina a los **2 minutos**.

## Las vitrinas

La joyería tiene **41 vitrinas** de cuatro tipos. Cada una guarda joyas de valor distinto:

<img src="https://f005.backblazeb2.com/file/sarp-public/images/docs/joyeria-vitrinas.jpg" alt="Vitrinas de la joyería de Los Santos durante un robo" width="1600" height="1600">

| Vitrina | Cantidad | Valor de las joyas |
| ------- | -------- | ------------------ |
| De piso (en las islas del centro) | 22 | $15.000 a $25.000 |
| De pared | 12 | $10.000 a $20.000 |
| Mostrador de vidrio | 1 | $35.000 a $45.000 |
| Cúpulas de la vidriera | 6 | $6.000 a $10.000 |

Para vaciar una vitrina:

1. Ponte junto a ella y usa `/robojoyeria rompervitrina` con un **arma** (de fuego o blanca), una **palanca** o un **mazo** en la mano. Romper el vidrio tarda **1 segundo** y hace ruido.
2. Con el vidrio roto, sacar las joyas tarda **2 segundos**. También puedes usar `/recoger` junto a la vitrina rota.
3. Las vitrinas también se rompen a tiros. En ese caso las joyas quedan a la vista hasta que alguien las saque con `/recoger`.

Necesitas la mano derecha libre o un bolsillo disponible para guardar la bolsa. Una vitrina vaciada se queda vacía hasta que la joyería se reponga.

### Caja registradora

Detrás del mostrador, frente a la caja registradora:

1. `/robojoyeria forzarregistradora` con una **palanca** en la mano abre el cajón. Tarda **3 segundos**. Si el vendedor coopera, también la abre él.
2. `/robojoyeria sacarfajo` saca un fajo con la mano derecha libre (o con otro fajo de dinero en ella).

El cajón guarda **3 fajos de $10.000**, en total $30.000.

### Reposición

Las vitrinas y la caja registradora se reponen **2 horas después de que se lleven el primer botín**. Si la joyería se repone antes de que pase ese tiempo, las vitrinas y el cajón quedan vacíos hasta que se cumpla.

## La caja fuerte

La caja fuerte está en la oficina, detrás de una puerta que normalmente permanece **cerrada con llave**. Es el botín más grande.

### Llegar a la oficina

La puerta de la oficina se abre de varias formas, desde la tienda:

- Con la **llave de la oficina** en la mano derecha, usando `/abrir` frente a la puerta. Conseguirla es parte del golpe.
- Con **ganzúas**, mediante `/forzarcerradura` (minijuego de ganzúas).
- Con una **palanca**, `/forzarcerradura` tarda **4 segundos**.
- A **patadas** con las manos vacías o con un **mazo** (más rápido), también con `/forzarcerradura`.

Desde adentro la puerta se abre sin llave.

### Abrir la caja fuerte

Hay cuatro formas de abrirla. La caja fuerte solo se abre una vez por reposición. En cuanto alguien empieza a intentar abrirla, **queda con un cierre de seguridad de 24 horas**: hasta que pase ese tiempo no se puede intentar abrir en un robo posterior, aunque ese robo haya terminado.

| Método | Herramienta | Habilidad | Detalle |
| ------ | ----------- | --------- | ------- |
| Combinación | Ninguna | 70 | `/robojoyeria marcarcombinacion`. Son tres números de 0 a 99. Tienes **3 intentos**; el tercero fallido dispara el sensor de la caja. |
| Dial con ganzúas | Ganzúas en la mano derecha | 80 | `/robojoyeria forzardial`. Minijuego de giro del dial. Se gasta un uso de las ganzúas. |
| Taladro | Taladro demoledor | 75 | `/robojoyeria taladrarcaja`. Minijuego de calor; recalentar el metal avisa en silencio a la policía. |
| Bomba TNT | Bomba TNT | 90 | `/robojoyeria ponerbomba`. Se detona llamando al número de la bomba, dentro de los **10 minutos** siguientes. Hace mucho ruido y enciende la sirena. |

#### La combinación

La combinación cambia en cada reposición. La conoce el **vendedor**: si lo encañonas hasta que coopere, `/robojoyeria interrogar` le saca el código de la alarma y, con más presión, la combinación de la caja fuerte. Sin la combinación, te quedan el dial, el taladro o la bomba.

#### El dial

Con ganzúas en la mano y frente a la caja fuerte, el minijuego te pide **tres números** en secuencia. Giras el dial con las teclas de izquierda y derecha, y cuando escuchas el clic fijas el número con la tecla de sprint. El primer número se alcanza girando a la derecha, el segundo a la izquierda y el tercero a la derecha de nuevo. Para dejarlo, usa la tecla que te indica la ayuda en pantalla.

- Fijar un número equivocado suma un fallo y los pestillos vuelven a cero.
- Con **3 fallos** o pasados **90 segundos**, la caja bloquea el dial: pierdes un uso de las ganzúas y salta el sensor.
- Abrirla con éxito también gasta un uso de las ganzúas.

### El botín de la caja fuerte

Al abrirse, la caja fuerte suelta casetes de dinero, como los de los cajeros, de hasta **$100.000** cada uno. Se recogen con `/recoger`. El monto total depende del método y de si la policía ya estaba avisada cuando se abrió:

| Método | Sin aviso a la policía | Con la policía avisada |
| ------ | ---------------------- | ---------------------- |
| Combinación o dial | $600.000 a $800.000 | $450.000 a $600.000 |
| Taladro o TNT | $350.000 a $500.000 | $300.000 a $450.000 |

**Algunos casetes pueden venir entintados.** Un casete entintado no vale nada y deja una mancha delatora en quien lo toca. Con la combinación o el dial y sin aviso a la policía no sale ninguno entintado; el taladro y sobre todo la TNT entintan una parte importante, más todavía si la policía ya fue avisada.

Un policía de servicio que se acerque a los casetes puede **asegurarlos como evidencia**: desaparecen. Los que quedan en la caja cuando la joyería se repone, también.

## La alarma

La joyería tiene un panel de alarma en la oficina. Mientras está armado, la central avisa a la policía si ocurre alguna de estas cosas:

- Las **cámaras** te registran con arma a la vista, enmascarado o en zonas restringidas, o se rompe una vitrina: la central verifica unos segundos y después avisa, salvo que desarmes la alarma antes.
- **Aviso silencioso**, inmediato: el vendedor herido, el código del panel fallado tres veces, el panel destruido o el taladro recalentado.
- **Sirena y balizas**, con aviso a la policía: disparar sin silenciador dentro de la joyería, una explosión o la radio de un guardia. Se oye hasta **120 metros** a la redonda.

El mensaje que reciben los policías es un aviso de radio con el nombre de la joyería de Market y, si las cámaras registraron a alguien sin máscara, también su nombre.

### Desarmar la alarma

En la oficina, frente al panel:

- `/robojoyeria desactivaralarma` pide el código de **cuatro cifras**. Tienes **3 intentos**; el tercero fallido avisa en silencio a la policía.
- `/robojoyeria romperalarma`, con una palanca o un mazo, destruye el panel: avisa a la policía en silencio, pero deja el sistema muerto y la sirena ya no volverá a sonar.
- El código se consigue dentro de la joyería: el **vendedor** lo sabe (`/robojoyeria interrogar`) y no es la única fuente.

### Cámaras

Hay cámaras de seguridad dentro de la tienda. Puedes taparlas con un spray debajo de ellas con `/robojoyeria taparcamara` (**3 segundos**) o romperlas a tiros. Consulta el [sistema de cámaras de seguridad](sistema-de-camaras-de-seguridad.md).

## Los guardias y el vendedor

### Guardias

Dos guardias armados patrullan los pasillos de la tienda. Si uno entra en combate, el otro le dispara a quien vea o corre a apoyarlo, y con varios ladrones reparten los objetivos según la amenaza (quién les apunta o les pegó). Disparan rápido: no los subestimes.

Para neutralizarlos sin pelear:

- **Rendición**: encañonados de cerca o por varias personas antes de que den la alarma, se rinden con las manos arriba.
- `/robojoyeria reducir`: por la espalda, con las manos vacías o con un arma blanca, solo si el guardia no está alerta. Lo deja inconsciente **3 minutos**.
- `/robojoyeria atar`: ata a un guardia rendido o reducido. Necesitas un **rollo de cuerda** o unas **esposas** en la mano (se gastan). Tarda **3 segundos**.
- `/cachear` junto a un guardia reducido, atado o caído lo registra (**4 segundos**).

### Vendedor

El vendedor está detrás del mostrador. Si lo encañonas con un arma de fuego varios segundos, coopera: abre el cajón de la caja registradora y puede dar el código de la alarma y, con más presión, la combinación de la caja fuerte. Herirlo avisa en silencio a la policía.

## La bolsa de joyas robadas

Lo que sacas de las vitrinas va a una **bolsa de joyas robadas**, cuyo valor es la suma de las joyas. Una bolsa acumula hasta **$250.000** en joyas; si superas ese valor, se abre otra bolsa. Se lleva en la mano derecha o en los bolsillos.

- Solo la compra el **mercado negro**. La casa de empeños no la acepta.
- Para venderla, ponla en la mano derecha y usa `/mercadonegro` o `/venderrobo` en el punto de venta, eligiendo **Vender joyas**. Pagan **el valor completo** de la bolsa, sin descuentos. Revisa los requisitos de acceso en el [sistema de mercado negro](sistema-de-mercado-negro.md).
- Es un objeto ilegal y cuenta como contrabando dentro de la cárcel.

## Resumen de enfriamientos

| Qué | Duración |
| --- | -------- |
| Enfriamiento personal tras participar | 12 horas (menos con premium) |
| Reposición de vitrinas y caja registradora | 2 horas desde el primer botín |
| Cierre de seguridad de la caja fuerte | 24 horas desde que se intenta abrir |
| Joyería cerrada tras un robo | 1 hora (10 minutos si nadie tocó la caja fuerte ni se llevó botín) |
| Duración máxima de un robo | 30 minutos |

## Consejos

- **Reúne a todo el equipo antes de entrar.** Con 10 policías conectados, un grupo con roles claros (guardias, vendedor, vitrinas, caja fuerte) rinde mucho más que uno solo.
- **Ocúpate primero de los guardias y de la alarma.** Reducir o atar a los guardias y desarmar el panel te da margen antes de que la cortina baje.
- **Lleva una vía de escape.** Si la policía es avisada, la cortina atrapa a quien está dentro. Ten lista una motoamoladora, un soplete o una bomba, o planifica cómo salir.
- **No olvides el espacio.** Cada herramienta ocupa una mano y la bolsa de joyas necesita la mano derecha libre o un bolsillo disponible.
- **No todos los casetes valen lo mismo.** Si vas con prisa y usas fuerza bruta, cuenta con que una parte del dinero puede venir entintado.
- **Los policías de servicio también tienen su papel.** Levantar la cortina con `/abrir` y asegurar los casetes como evidencia corta el botín al grupo.
