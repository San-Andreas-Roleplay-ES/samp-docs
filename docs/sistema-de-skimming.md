# Sistema de skimming

## Introducción

Los **skimmers** son dispositivos electrónicos maliciosos que los delincuentes instalan en los cajeros automáticos para quedarse con una parte del dinero que mueven los clientes. Es una de las fuentes de ingresos ilegales más silenciosas del servidor: no hay disparos ni persecuciones, solo un aparato oculto que va acumulando dinero mientras otros jugadores usan el cajero.

Como en San Andreas Roleplay no existe un sistema de tarjetas de crédito, el robo opera directamente sobre las **transacciones que se hacen en los cajeros automáticos**. Cada vez que alguien mueve dinero en un cajero manipulado, un porcentaje se descuenta de su cuenta bancaria y se guarda dentro del skimmer. Ese dinero no se cobra al instante: se acumula hasta que el dueño del dispositivo vuelve al cajero y lo retira.

El sistema está pensado para personajes con perfil de **ciberdelincuente**. Requiere dos habilidades distintas: **electrónica** para fabricar el aparato y detectarlo, y **delincuente** para instalarlo y retirarlo. Encontrarás cajeros automáticos repartidos por todo San Andreas, en bancos, tiendas, gasolineras y esquinas concurridas: hay cerca de **un centenar** en el mapa, y cualquiera de ellos puede ser manipulado.

Del otro lado del mostrador están los **técnicos de seguridad**, empleados de las empresas de seguridad privada, que cobran del Gobierno por localizar y desmontar estos dispositivos. La policía también puede retirarlos si los encuentra.

### Comandos

- /revisarcajero — inspecciona el cajero automático frente a ti para ver si tiene un skimmer oculto.
- /skimmer — fabrica un skimmer (miembros de facciones ilegales oficiales).
- /instalarskimmer — instala el skimmer que llevas en la mano derecha en el cajero que tienes delante.
- /retirarskimmer — desmonta el skimmer del cajero y cobra lo acumulado.
- /marcarcajero — localiza el cajero manipulado más cercano (solo técnicos de seguridad en servicio).

## Cómo conseguir un skimmer

Los miembros de **facciones ilegales oficiales** pueden fabricar sus propios skimmers con `/skimmer`. El aparato aparece directamente en la **mano derecha** del personaje.

Requisitos para fabricar un skimmer:

| Requisito | Detalle |
|---|---|
| Facción | Ser miembro de una **facción ilegal oficial** |
| Habilidad de electrónica | **50** como mínimo |
| Mano izquierda | Una **laptop** equipada |
| Mano derecha | **Libre** |
| Dinero en efectivo | **$25.000** |

La laptop se compra en tiendas de electrónica por unos **$719** de base y es reutilizable: sirve para fabricar todos los skimmers que quieras, además de otras actividades de ciberdelincuencia como falsificar licencias de conducir.

Los $25.000 se descuentan del efectivo en el momento de la fabricación, no de la cuenta bancaria. Un skimmer ocupa **una ranura** del inventario y pesa muy poco, así que es fácil de transportar.

Los miembros de **facciones destacadas** también pueden solicitar el dispositivo al **Faction Team**, siempre que presenten una justificación adecuada que respalde el perfil de su personaje como ciberdelincuente.

Consulta el [sistema de delincuente](sistema-de-delincuente.md) para saber cómo subir la habilidad de delincuente, que es la que te habilita a instalar y retirar el aparato.

## Instalación

Para instalar un skimmer necesitas llevarlo en la **mano derecha** y estar pegado a un cajero automático que no haya sido manipulado antes.

El proceso tiene dos pasos obligatorios:

1. **Revisar el cajero** con `/revisarcajero` para confirmar que no hay otro skimmer ya instalado. Si no revisas ese cajero en concreto, la instalación no arranca.
2. **Instalar el skimmer** con `/instalarskimmer` en ese mismo cajero.

La instalación dura **90 segundos**. Durante todo ese tiempo el personaje ejecuta una animación junto al cajero y debe cumplir tres condiciones: **no alejarse** del cajero, **conservar el skimmer** en la mano derecha y **seguir con vida**. Si falla cualquiera de ellas, el proceso se cancela. Un aviso en pantalla te recuerda que la instalación sigue en curso.

Los personajes que pasen cerca verán una acción visible que indica que estás manipulando el cajero, así que conviene elegir un cajero poco transitado o tener a alguien vigilando.

Requisitos para instalar:

| Requisito | Detalle |
|---|---|
| Habilidad de delincuente | **50** como mínimo |
| Objeto | Skimmer en la **mano derecha** |
| Cajero | **Sin skimmer** previo |
| Paso previo | Haber usado `/revisarcajero` en ese mismo cajero |

### Calidad del skimmer

Al completarse la instalación, el sistema fija la **calidad** del dispositivo, un valor entre **0 y 100** que no vuelve a cambiar. La calidad se calcula sumando a tu **habilidad de electrónica** una cantidad aleatoria de **0 a 29 puntos**, con tope en 100.

La calidad es el parámetro más importante del sistema, porque decide dos cosas a la vez:

- **Cuánto roba** el skimmer en cada transacción.
- **Si los técnicos de seguridad pueden rastrearlo** a distancia.

Por eso conviene invertir en habilidad de electrónica antes de empezar a instalar: un personaje con 90 de electrónica produce skimmers de calidad casi máxima, mientras que uno recién iniciado dejará aparatos flojos y fáciles de localizar.

Al terminar la instalación tienes **1 de cada 3 probabilidades** de ganar **+1 punto** de habilidad de electrónica.

## Ganancias

En cada transacción que se realiza en un cajero manipulado, el skimmer se queda con una porción del dinero movido. Ese importe se descuenta directamente de la **cuenta bancaria** del cliente, no de su efectivo, y se **acumula dentro del skimmer** hasta que alguien lo retire.

El porcentaje robado depende de la **calidad del skimmer** y escala de forma lineal:

| Calidad del skimmer | Porcentaje robado por transacción |
|---|---|
| 0 | **3 %** |
| 25 | 5,25 % |
| 50 | **7,5 %** |
| 75 | 9,75 % |
| 100 | **12 %** |

En la práctica, casi todo lo que roba un skimmer proviene de los **retiros en cajero**, que es la operación que los jugadores hacen a diario en la calle. Los depósitos solo pueden realizarse dentro de una sucursal bancaria.

El dinero acumulado se otorga **únicamente al dueño del dispositivo**, es decir, al personaje que lo instaló. **No es posible robar las ganancias de otro ciberdelincuente**: si otro delincuente, un policía o un técnico de seguridad desmonta el skimmer, el dinero acumulado se pierde y no lo cobra nadie.

Un skimmer muy productivo también es un skimmer arriesgado: cuanto más tiempo lo dejes puesto, más dinero junta, pero más oportunidades tiene alguien de encontrarlo.

## Retirar el skimmer

Para cobrar, el dueño debe volver al cajero, usar `/revisarcajero` y luego `/retirarskimmer`.

El proceso dura **60 segundos** con una animación junto al cajero. Igual que en la instalación, debes permanecer **cerca del cajero** y **con vida** hasta que termine, o se cancela.

Al finalizar:

- El dinero acumulado se transfiere a tu **cuenta bancaria**.
- El dispositivo queda **destruido**: no se recupera el objeto ni se puede reinstalar.
- Recibes **+3 Burger Points** (consulta el [sistema de Burger Points](sistema-de-burger-points.md)).
- Tienes **1 de cada 2 probabilidades** de ganar **+1 punto** de habilidad de electrónica.

Requisitos para retirar:

| Quién | Condiciones |
|---|---|
| Dueño del skimmer | **50** de habilidad de delincuente y haber revisado el cajero |
| Policía | Haber revisado el cajero |
| Técnico de seguridad | Haber revisado el cajero |

Nadie más puede desmontar el aparato: otro delincuente ajeno al dispositivo no podrá retirarlo aunque lo encuentre.

## Detección

Encontrar un skimmer **no es tan fácil ni evidente** como en la vida real: el sistema busca que la mayoría de los clientes no note nada. Para detectarlos con fiabilidad hay que subir la **habilidad de electrónica**.

El comando `/revisarcajero` ejecuta una inspección de **5 segundos** y requiere al menos **5 de habilidad de electrónica**. Al terminar:

- Se genera un número aleatorio entre **0 y 100**.
- El umbral de éxito es el promedio entre tu **habilidad de electrónica** y la **calidad del skimmer**.
- Si el número aleatorio queda **por debajo o igual** a ese umbral, encuentras el dispositivo.

Algunos ejemplos del resultado de esa cuenta:

| Tu habilidad de electrónica | Calidad del skimmer | Probabilidad de encontrarlo |
|---|---|---|
| 10 | 30 | **~20 %** |
| 30 | 60 | **~45 %** |
| 60 | 60 | **~60 %** |
| 90 | 80 | **~85 %** |

Lo que protege de verdad a un skimmer no es su calidad, sino que casi nadie se molesta en revisar el cajero antes de usarlo y que quienes revisan suelen tener poca habilidad de electrónica.

Detectan el skimmer **siempre**, sin depender del azar:

- El **dueño** del dispositivo.
- Los **técnicos de seguridad**.

Si el cajero no tiene ningún skimmer, la revisión te lo confirma directamente.

## Técnicos de seguridad

Los técnicos de seguridad son empleados de las **empresas de seguridad privada** y forman la contraparte legal del sistema. Trabajan por encargo del Gobierno para mantener limpia la red de cajeros.

Estando en servicio, el comando `/marcarcajero` localiza el cajero manipulado más cercano y lo marca en el mapa para que puedas llegar hasta él. El comando tiene una limitación importante: **solo encuentra skimmers de calidad 50 o inferior**. Los dispositivos de alta calidad, fabricados por ciberdelincuentes con mucha habilidad de electrónica, son invisibles para esta herramienta y solo aparecen revisando cajeros a mano.

Una vez en el cajero, el procedimiento es `/revisarcajero` seguido de `/retirarskimmer`.

Al desmontar un skimmer ajeno estando en servicio, el técnico cobra **$25.000** en efectivo y **+3 Burger Points**. El Gobierno asume un coste total de **$100.000** por cada intervención: los $25.000 del trabajo del técnico más **$75.000** de multa municipal por haber permitido el fraude. Es decir, cada skimmer que llega a instalarse le sale caro a las arcas públicas aunque se retire a tiempo.

El dinero acumulado dentro del dispositivo **no se recupera**: al retirarlo, desaparece.

## Costes y cifras de referencia

| Concepto | Valor |
|---|---|
| Fabricar un skimmer | **$25.000** en efectivo |
| Laptop (reutilizable) | desde **$719** |
| Habilidad de electrónica para fabricar | **50** |
| Habilidad de delincuente para instalar o retirar | **50** |
| Habilidad de electrónica para revisar un cajero | **5** |
| Tiempo de instalación | **90 segundos** |
| Tiempo de retirada | **60 segundos** |
| Tiempo de revisión | **5 segundos** |
| Calidad del skimmer | habilidad de electrónica + **0 a 29** (máximo 100) |
| Robo por transacción | del **3 %** (calidad 0) al **12 %** (calidad 100) |
| Burger Points al cobrar | **+3** |
| Pago al técnico de seguridad | **$25.000** |
| Coste para el Gobierno por skimmer retirado | **$100.000** |
| Comisión del cajero por operación | **$12** |

## Consejos

- **Sube electrónica antes de invertir.** Un skimmer cuesta $25.000 fijos: si lo fabricas con 50 de electrónica justos, la calidad rondará entre 50 y 79 y robarás entre un 7,5 % y un 10 %, además de quedar al alcance del rastreo de los técnicos de seguridad. Con 90 de electrónica prácticamente garantizas el 12 % y quedas fuera de ese radar.
- **Elige cajeros con tráfico.** El skimmer solo gana dinero si alguien usa el cajero. Uno en zona céntrica y concurrida rinde muchísimo más que otro perdido en el campo.
- **No lo dejes puesto para siempre.** Cada día que pasa aumenta la probabilidad de que un técnico de seguridad o un jugador curioso lo encuentre, y entonces pierdes todo lo acumulado, no solo el aparato.
- **Instala acompañado.** La instalación de 90 segundos deja una acción visible para cualquiera que pase por ahí. Tener a alguien vigilando la zona reduce el riesgo de que te sorprendan a mitad del proceso.
- **Reparte el riesgo.** Varios skimmers en cajeros distintos rinden mejor que concentrar el esfuerzo en uno solo, porque si pierdes uno no pierdes toda la operación.
- **Si eres técnico de seguridad**, no te fíes solo de `/marcarcajero`: los skimmers más rentables tienen calidad superior a 50 y no aparecen en la búsqueda. Revisar a mano los cajeros de zonas concurridas es la única forma de encontrarlos.
- **Si eres un cliente cualquiera**, revisar el cajero antes de retirar dinero es gratis y solo toma 5 segundos. Con poca habilidad de electrónica rara vez encontrarás algo, pero es la única defensa disponible.

Puedes consultar también el [sistema de delincuente](sistema-de-delincuente.md) para conocer el resto de actividades ilegales y cómo progresa la habilidad de delincuente, y las [facciones ilegales](facciones-ilegales.md) si quieres acceder a la fabricación de skimmers.
