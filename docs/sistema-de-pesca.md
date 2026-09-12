# Sistema de pesca 🎣

## Introducción

Las aguas de San Andreas dan de comer a mucha gente. El estado tiene dos formas de sacar provecho del mar: la **pesca deportiva**, que cualquiera puede practicar con una caña desde la orilla o un muelle, y la **pesca comercial**, un trabajo formal en el que sales a mar abierto con un barco de empresa y lanzas la red.

La pesca deportiva no pide requisitos ni empleo: basta con comprar una caña y encontrar una de las muchas zonas repartidas por la costa y los lagos del estado. Es una actividad tranquila, con un minijuego de pulso y recompensas muy variables: hay presas comunes que valen unas monedas y piezas raras que pagan más de mil dólares si salen grandes. Además, cada captura suma [Burger Points](sistema-de-burger-points.md) según lo difícil que sea el pez.

La pesca comercial es un trabajo de empresa. Necesitas estar empleado en una compañía pesquera, salir con el barco de la empresa a la zona de mar abierto y volver al muelle a descargar. Paga más por viaje, sube tu habilidad de pesca y reparte el ingreso entre tú y la caja del negocio.

Ojo con una cosa: después de descargar un cargamento comercial quedarás **apestando a pescado durante 4 horas**, y todos a tu alrededor lo notarán.

### Comandos

- `/radarpesca` — marca todas las zonas de pesca en el mapa durante **30 segundos**.
- `/pescar` — lanza el anzuelo con la caña de pescar (pesca deportiva).
- `/cancelarpesca` — cancela la pesca en curso.
- `/venderpesca` — vende una pieza individual de pesca deportiva en el muelle.
- `/pescador` — lanza la red desde el barco de la empresa (solo pesca comercial).
- `/venderpescados` — descarga y vende el cargamento entero del barco comercial.
- `/frecuencia 304` — sintoniza la radio UHF en la frecuencia que comparten los pescadores comerciales.

## Zonas de pesca

Usa `/radarpesca` en cualquier momento para verlas dibujadas en el mapa durante medio minuto:

- **Azul: zonas deportivas.** Hay **veinte** repartidas por todo el estado: la costa de Los Santos, Santa Maria, los canales y bahías de San Fierro, la costa norte, los lagos interiores y varios puntos de Las Venturas.
- **Verde: zona comercial.** Es **una sola**, enorme, que cubre toda la franja de mar abierto al sur del estado. Está delimitada por **cuatro boyas** flotantes en sus esquinas para que puedas ubicarla incluso sin el radar.

Las zonas deportivas y la comercial no se solapan: con la caña solo pescas en las azules, y con la red solo en la verde.

## Pesca deportiva

### Requisitos

- Una **caña de pescar** sostenida en la **mano derecha**. Se vende en tiendas generales y su precio varía mucho según el negocio: desde unos **$44** hasta cerca de **$440**.
- Estar dentro de una **zona deportiva** (las azules del radar).
- **No** estar en servicio como pescador comercial. Si trabajas como pescador y estás de servicio, el juego te redirige a `/pescador`.

No hace falta comprar cebo ni ningún otro consumible: la caña no se gasta y puedes usarla todas las veces que quieras.

### Cómo funciona

1. Colócate en una zona azul con la caña en la mano y usa `/pescar`. Tu personaje lanza el anzuelo y queda esperando.
2. Cada **10 segundos** se comprueba si algo pica. La probabilidad de picada en cada intento es del **40%**, así que en promedio esperarás menos de medio minuto. Si no pica, el anzuelo se relanza solo sin que tengas que hacer nada.
3. Cuando algo muerde, empieza el forcejeo: presiona **repetidamente la tecla de sprint** para llenar la barra que aparece en pantalla. La barra arranca al **50%**, **sube 2.5 puntos** por cada pulsación y **baja 2 puntos cada fracción de segundo** si dejas de presionar.
4. Si llegas al **100%**, sacas la pieza y aparece en el suelo frente a ti. Si la barra cae a **0**, la presa se escapa y tienes que volver a empezar.
5. Recoge la pieza del suelo y llévala en la mano derecha al **Los Santos Seafood Market**, en el muelle de Ocean Docks, para venderla con `/venderpesca`. Si estás lejos, el comando te marca el punto exacto en el mapa.

### Interrupciones

El lance se cancela solo si:

- Te alejas más de **2 metros** del punto donde lanzaste el anzuelo.
- Sueltas la caña de pescar o cambias el objeto de tu mano derecha.
- Usas `/cancelarpesca`.

### Consejos

- Como la pieza cae al suelo y no a tu inventario, recógela enseguida: si te vas sin ella, la pierdes.
- No hay límite de capturas ni tiempo de espera entre lances. Lo único que limita tu ganancia es la paciencia y la suerte.
- Puedes pescar acompañado: varias personas en la misma zona no se estorban entre sí.

## Pesca comercial

### Requisitos

- Estar **empleado en una empresa pesquera** y haber entrado en servicio con `/trabajar`.
- Ir al mando del **barco de la empresa** que te asignaron con `/negvehiculos [ID empresa]`. El único barco habilitado para pescar es el **Reefer**.
- Estar dentro de la **zona comercial** (la verde) y tener **espacio libre** en la bodega del barco.

No se exige ninguna licencia ni habilidad mínima para empezar: puedes lanzar la red desde el primer día.

### Cómo funciona

1. Sube al Reefer de la empresa, navega hasta la zona verde y usa `/pescador`. La red cae al agua y queda marcado en el mapa el punto exacto donde la lanzaste.
2. La red tarda en llenarse entre **60 y 120 segundos**. Cuanta más habilidad de pesca tengas, más se acorta el tope: con la habilidad al máximo, ningún lance pasa de **60 segundos**.
3. Mientras la red está fuera, **no salgas de la zona verde ni te bajes del barco**: si lo haces, la red se pierde en el mar con todo lo que llevara dentro.
4. Al terminar el lance, las capturas van directas a la **bodega del barco**, que tiene **32 espacios**. Si se llena a mitad del reparto, el resto de la pesca se tira al mar.
5. Navega al **muelle de descarga de Ocean Docks** y usa `/venderpescados` para vender todo el cargamento de una vez. El comando te marca el punto si aún no estás allí.

Si estás **en pausa** justo en el momento en que la red termina, hay un **50% de probabilidad** de perder todo el lance.

### Cuánto se captura

Cada lance saca entre **1 pieza** y un máximo que depende de tu habilidad de pesca:

| Habilidad de pesca | Máximo de piezas por lance |
|---|---|
| 0 | 3 |
| 25 | 5 |
| 50 | 8 |
| 75 | 10 |
| 100 | 12 |

### Habilidad de pesca

La habilidad va de **0 a 100** y sube con la pesca comercial: cada lance completado tiene probabilidad de darte **+1 punto**.

| Tipo de cuenta | Probabilidad de subir por lance |
|---|---|
| Estándar | **1 de cada 8** lances (12.5%) |
| Premium | **1 de cada 3** lances (33%) |

Subir la habilidad tiene dos efectos: acorta la espera de la red y aumenta el máximo de piezas por lance. No afecta al tipo de pez que sacas ni al precio por kilo.

### El pago

Al usar `/venderpescados` se venden todos los pescados de la bodega de golpe. El importe se calcula pieza por pieza según su **peso** y el **precio base de la especie**, y se reparte así:

- Se abona **íntegro a tu paycheck**.
- Se abona **otra vez íntegro a tu cuenta bancaria**.
- La **caja de la empresa** recibe una suma equivalente, que cuenta también como tus ganancias registradas como empleado.

Además recibes **+5 Burger Points** por cada descarga, y arrancan las **4 horas de olor a pescado**.

## Especies, pesos y precios

Todas las capturas se pagan por **kilo**: el precio final sale de multiplicar el peso de la pieza por el precio base de la especie. Dos pescados de la misma especie pueden valer diez veces más el uno que el otro solo por el tamaño.

La pesca deportiva paga **el doble por kilo** que la comercial, pero saca una pieza por vez; la comercial saca hasta doce de una sentada.

| Especie | Probabilidad | Peso | Valor deportivo | Valor comercial | Burger Points |
|---|---|---|---|---|---|
| Barred Sand Bass | 26% | 0.5 – 6 kg | $6 – $74 | $3 – $37 | +5 |
| Calico Bass | 14% | 0.5 – 12 kg | $2 – $60 | $1 – $30 | +5 |
| Rockfish | 10% | 0.5 – 18 kg | $10 – $358 | $5 – $179 | +5 |
| San Andreas Yellowtail | 7% | 5 – 40 kg | $50 – $399 | $25 – $200 | +10 |
| San Andreas Halibut | 7% | 2 – 90 kg | $20 – $899 | $10 – $450 | +10 |
| Pacific Bonito | 7% | 0.5 – 6 kg | $9 – $103 | $4 – $52 | +10 |
| White Sea Bass | 5% | 2 – 54 kg | $15 – $404 | $8 – $202 | +10 |
| Ocean Whitefish | 5% | 1 – 10 kg | $18 – $173 | $9 – $87 | +10 |
| San Andreas Sheephead | 5% | 2 – 18 kg | $55 – $492 | $28 – $246 | +10 |
| Barracuda | 3% | 5 – 60 kg | $88 – $1,048 | $44 – $524 | +15 |
| San Andreas Scorpionfish | 3% | 0.5 – 2 kg | $20 – $76 | $10 – $38 | +15 |
| Lingcod | 2% | 5 – 30 kg | $175 – $1,046 | $88 – $523 | +20 |
| Spiny Lobster | 1% | 0.5 – 5 kg | $20 – $196 | $10 – $98 | +25 |

Las presas más raras son también las que más Burger Points reparten: la **langosta espinosa** es la pieza más difícil de sacar de todo el estado y la única que paga **+25 BP**.

Fíjate en el peso antes de vender: un halibut de 90 kg vale casi lo mismo que un lingcod grande aunque el lingcod sea mucho más raro. Las especies de peso alto (halibut, barracuda, white sea bass, yellowtail) son las que dan los mejores golpes de suerte.

### Basura

Alrededor de un **4%** de las picadas no son pescado sino desechos: una **bota vieja**, una **lata de cerveza**, una **lata de soda** o un **barril oxidado**. No se pueden vender en el mercado de pescado ni dan Burger Points. En la pesca comercial la basura también ocupa espacio en la bodega, así que conviene tirarla antes de volver al muelle.

## El olor a pescado

Descargar un cargamento comercial te deja impregnado: durante las **4 horas siguientes** cualquier persona cerca de ti verá que **apestas a pescado**, y el estado queda visible junto al resto de tus síntomas.

Para quitártelo de encima solo hay una vía: **usar un perfume** de tu inventario. Rociarte borra al instante tanto el olor a pescado como el olor a basura. El olor también se reinicia solo con el reinicio diario del servidor.

## Frecuencia de radio

Los pescadores comerciales comparten la frecuencia **304 MHz** de la radio UHF para coordinar salidas y avisar de zonas ocupadas. Sintonízala con `/frecuencia 304`.
