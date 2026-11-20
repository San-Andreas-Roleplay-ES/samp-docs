# Sistema de pesca

## Introducción

Las aguas de San Andreas dan de comer a mucha gente. El estado tiene dos formas de sacar provecho del mar: la **pesca deportiva**, que cualquiera puede practicar con una caña desde la orilla o un muelle, y la **pesca comercial**, un trabajo formal en el que sales a mar abierto con un barco de empresa y lanzas la red.

La pesca deportiva no pide requisitos ni empleo: basta con comprar una caña y encontrar una de las muchas zonas repartidas por la costa, los ríos y los lagos del estado. Es una actividad tranquila, pero con un minijuego de tres etapas (lanzar, esperar y pelear con el pez) y recompensas muy variables: hay presas comunes que valen unas monedas y piezas raras que pagan más de mil dólares si salen grandes. Además, cada captura suma [Burger Points](sistema-de-burger-points.md) según lo difícil que sea el pez.

La pesca comercial es un trabajo de empresa. Necesitas estar empleado en una compañía pesquera, salir con el barco de la empresa a una zona de mar abierto y volver al muelle a descargar. Paga más por viaje y reparte el ingreso entre tú y la caja del negocio, pero solo saca las especies más comunes del mar.

Ojo con una cosa: después de descargar un cargamento comercial quedarás **apestando a pescado durante 4 horas**, y todos a tu alrededor lo notarán.

### Comandos

- `/radarpesca` — marca las zonas de pesca en el mapa durante **30 segundos**.
- `/pescar` — empieza a pescar con la caña (pesca deportiva).
- `/cancelarpesca` — cancela la pesca en curso.
- `/venderpesca` — vende una pieza individual de pesca deportiva en uno de los muelles de venta.
- `/pescador` — lanza la red desde el barco de la empresa (solo pesca comercial).
- `/venderpescados` — descarga y vende el cargamento entero del barco comercial.
- `/frecuencia 304` — sintoniza la radio UHF en la frecuencia que comparten los pescadores comerciales.

## Zonas de pesca

Usa `/radarpesca` en cualquier momento para verlas dibujadas en el mapa durante medio minuto:

- **Azul: zonas deportivas.** Hay **más de setenta** repartidas por el estado: la costa de Los Santos y Santa Maria, los muelles y bahías de San Fierro, la represa Sherman, los ríos y esteros de Tierra Robada, Red County, Flint County, Bone County y Back o' Beyond, y el muelle de Verdant Bluffs. A ellas se suman otras **18 zonas deportivas que siguen la costa de [Santa Catalina Island](santa-catalina.md)**; esas no aparecen en el radar, pero funcionan igual.
- **Verde: zonas comerciales.** Son **cuatro**, todas en mar abierto: la franja del sur del estado, el mar frente a Santa Maria y Verona, el mar al este del aeropuerto y de Ocean Docks, y el mar abierto al suroeste, frente a Angel Pine. Cada una está delimitada por **cuatro boyas** flotantes en sus esquinas para que puedas ubicarla incluso sin el radar.

Las zonas deportivas y las comerciales no se solapan: con la caña solo pescas en las azules, y con la red solo en las verdes.

## Pesca deportiva

### Requisitos

- Una **caña de pescar** sostenida en la **mano derecha**, y la **mano izquierda libre**. La caña se vende en tiendas generales y su precio varía según el negocio: desde unos **$44** hasta cerca de **$440**.
- Estar a pie, sano y sin esposas, dentro de una **zona deportiva** (las azules del radar, o la costa de Santa Catalina).
- **No** estar en servicio como pescador comercial. Si trabajas como pescador y estás de servicio, el juego te redirige a `/pescador`.

No hace falta comprar cebo ni ningún otro consumible: la caña no se gasta y puedes usarla todas las veces que quieras.

El juego no te pide una licencia para pescar. Aun así, en el ayuntamiento puedes tramitar con `/adquirirlicencia` la **licencia de pesca deportiva** ($2.000 y 10 de respeto) y, después, la de **pesca comercial** ($5.500 y 20 de respeto); para empezar a tramitar licencias necesitas tener ya la de conducir.

### Cómo funciona

La pesca tiene tres etapas.

**1. Lanzar.** Colócate en una zona de pesca con la caña en la mano y usa `/pescar`. Mantén la tecla de sprint para cargar la barra de **fuerza**: sube de 0 a 100 y vuelve a bajar una y otra vez mientras no sueltes. Al soltar, el anzuelo sale despedido.

- Cuanta más fuerza, más lejos cae el anzuelo (entre 6 y 16 metros) y mejores presas puedes sacar: con fuerza 0 las presas medias y los trofeos salen un 40% menos a menudo que con fuerza 100.
- Con **80 o más** es un "gran lanzamiento"; con menos de **30**, un lanzamiento flojo.
- Si cargas más de **12 segundos** sin soltar, el lanzamiento sale solo. Si pasan **20 segundos** sin que empieces a cargar, la pesca se cancela.

**2. Esperar.** Cada **10 segundos** se comprueba si algo pica: la probabilidad en cada intento es del **40%**, así que en promedio esperarás menos de medio minuto. Si no pica, el anzuelo sigue en el agua sin que tengas que hacer nada. Cuando algo muerde, suena la alarma de la caña (solo la oyes tú) y, un instante después, empieza la pelea.

**3. Pelear.** En pantalla aparece una flecha: el pez **tira hacia una dirección** y tú debes tirar hacia la **dirección contraria** con las teclas de movimiento, antes de que se acabe el tiempo y antes de que el pez cambie.

- Cada acierto lo cansa y te acerca al pez. Necesitas **10 aciertos** para sacarlo del agua.
- Una tecla equivocada, varias direcciones a la vez o quedarte sin tiempo cuentan como un **fallo**. Con **5 fallos**, el pez se escapa.
- Al empezar tienes unos **2,2 segundos** para reaccionar, y ese margen se acorta hasta **1 segundo** a medida que el pez se cansa. Si la pelea se alarga, también se acelera por sí sola, aunque no aciertes: a los 25 segundos ya va a máxima velocidad.
- Tu habilidad de pesca da hasta un **30% más de tiempo** para reaccionar (con la habilidad al máximo).

### Calidad de la pesca y tipo de presa

Los fallos que acumules durante la pelea determinan la **calidad** de la pesca, y la calidad determina qué categoría de presa sale:

| Fallos | Calidad | Basura | Común | Media | Trofeo |
|---|---|---|---|---|---|
| 0 | Perfecta | 2% | 77% | 18% | 3% |
| 1 | Buena | 6% | 79% | 13,5% | 1,5% |
| 2 o 3 | Regular | 12% | 78% | 9,2% | 0,8% |
| 4 | Mala | 25% | 71,5% | 3,2% | 0,3% |

Los porcentajes son los de un lanzamiento con fuerza máxima; con menos fuerza, la parte de presas medias y trofeos que se pierde pasa a las comunes. Con pesca perfecta y buena fuerza, un trofeo sale aproximadamente una de cada treinta y cuatro capturas.

Dentro de cada categoría, la especie se elige según su frecuencia (ver la tabla de especies). **Cada especie pide una habilidad de pesca mínima**: si te sale una que todavía no tienes desbloqueada, el juego la cambia por una presa de la categoría inferior. Así, mientras más pescas, más especies puedes sacar.

Una pesca **perfecta** tiene además dos ventajas: el peso de la presa se sortea dos veces y te quedas con el mayor, y es la única que puede **subir tu habilidad de pesca** (ver más abajo).

### Después de la captura

La presa sale del agua y cuelga unos segundos de tu caña; después cae a tus pies como una pieza que puedes **recoger del suelo**. Su tamaño (pequeño, mediano o grande) depende de lo que pese dentro del rango de su especie. Llévala en la mano derecha a uno de los muelles de venta y usa `/venderpesca`.

Si lo que sacas es basura, solo ves el mensaje: no deja ningún objeto ni da Burger Points.

### Dónde vender con /venderpesca

Debes estar a menos de 3 metros de uno de estos tres puntos, con el pescado en la **mano derecha**:

- **Los Santos Seafood Market**, en el muelle de Ocean Docks.
- **Verdant Bluffs Pier**, en el muelle de Verdant Bluffs.
- **Catalina Island Pier**, en el muelle de [Santa Catalina Island](santa-catalina.md).

Si estás lejos, el comando te marca en el mapa el punto adecuado: el de Santa Catalina si estás en la isla, el de Verdant Bluffs si estás cerca de su muelle y el mercado de Ocean Docks en cualquier otro caso. La venta se cobra **en efectivo, en la mano**.

### Interrupciones

La pesca se cancela si:

- Te alejas más de **2 metros** del punto donde empezaste.
- Sueltas la caña, cambias el objeto de tu mano derecha o ocupas la mano izquierda.
- Subes a un vehículo, te esposan o caes herido.
- Usas `/cancelarpesca`.

Mientras pescas no puedes usar animaciones.

### Consejos

- Como la pieza cae al suelo y no a tu inventario, recógela enseguida: si te vas sin ella, la pierdes.
- No hay límite de capturas ni tiempo de espera entre lances. Lo único que limita tu ganancia es la paciencia y la puntería con las teclas.
- Puedes pescar acompañado: varias personas en la misma zona no se estorban entre sí.

## Pesca comercial

### Requisitos

- Estar **empleado en una empresa pesquera** y haber entrado en servicio con `/trabajar`.
- Ir al mando del **barco de la empresa** que te asignaron con `/negvehiculos [ID empresa]`. El único barco habilitado para pescar es el **Reefer**.
- Estar dentro de una **zona comercial** (las verdes) y tener **espacio libre** en la bodega del barco.

No se exige ninguna licencia ni habilidad mínima para empezar: puedes lanzar la red desde el primer día.

### Cómo funciona

1. Sube al Reefer de la empresa, navega hasta una zona verde y usa `/pescador`. La red cae al agua y queda marcado en el mapa el punto exacto donde la lanzaste.
2. La red tarda en llenarse entre **60 y 120 segundos**. Cuanta más habilidad de pesca tengas, más se acorta el tope: con la habilidad al máximo, ningún lance pasa de **60 segundos**.
3. Mientras la red está fuera, **no salgas de la zona verde ni te bajes del barco**: si lo haces, la red se pierde en el mar con todo lo que llevara dentro.
4. Al terminar el lance, las capturas van directas a la **bodega del barco**, que tiene **32 espacios**. Si se llena a mitad del reparto, el resto de la pesca se tira al mar.
5. Navega al **muelle de descarga de Ocean Docks** y usa `/venderpescados` para vender todo el cargamento de una vez. El comando te marca el punto si aún no estás allí.

Si estás **en pausa** justo en el momento en que la red termina, hay un **50% de probabilidad** de perder todo el lance.

### Qué saca la red

Las redes sacan en cantidad **solo las tres especies más comunes del mar**: Barred Sand Bass (la mitad de las piezas), Calico Bass (algo más de una cuarta parte) y Spot Prawn (algo menos de una cuarta parte). Alrededor de un **3%** de lo que sube es basura. Las presas medias y los trofeos solo se consiguen con la pesca deportiva.

Cada lance saca entre **1 pieza** y un máximo que depende de tu habilidad de pesca:

| Habilidad de pesca | Máximo de piezas por lance |
|---|---|
| 0 | 3 |
| 25 | 5 |
| 50 | 8 |
| 75 | 10 |
| 100 | 12 |

### El pago

Al usar `/venderpescados` se venden todos los pescados de la bodega de golpe. El importe se calcula pieza por pieza según su **peso** y el **precio base de la especie**, y se reparte así:

- Se abona **íntegro a tu paycheck**.
- Se abona **otra vez íntegro a tu cuenta bancaria**.
- La **caja de la empresa** recibe una suma equivalente, que cuenta también como tus ganancias registradas como empleado.

Además recibes **+5 Burger Points** por cada descarga, y arrancan las **4 horas de olor a pescado**.

## Habilidad de pesca

La habilidad va de **0 a 100** y se sube de dos formas:

| Cómo | Probabilidad de subir +1 punto (cuenta estándar) | Cuenta premium |
|---|---|---|
| Pesca deportiva: cada pesca **perfecta** (sin fallos) | **1 de cada 8** | **1 de cada 3** |
| Pesca comercial: cada lance de red completado | **1 de cada 20** | **1 de cada 8** |

Las redes suben la habilidad mucho más despacio que la caña, así que las especies raras se desbloquean sobre todo pescando de forma deportiva. Cuando subes a una habilidad que desbloquea una especie, el juego te avisa en el chat.

Subir la habilidad tiene varios efectos:

- **Pesca deportiva:** desbloquea especies y da más tiempo para reaccionar en la pelea.
- **Pesca comercial:** acorta la espera de la red y aumenta el máximo de piezas por lance.

Habilidad mínima de cada especie de la pesca deportiva:

- **0:** todas las especies comunes y el Rockfish.
- **10:** San Andreas Sheephead.
- **20:** San Andreas Yellowtail.
- **30:** White Sea Bass.
- **40:** Two-Spot Octopus.
- **50:** Spiny Lobster y San Andreas Halibut.
- **65:** Barracuda.
- **80:** Lingcod.
- **90:** American Lobster.

## Especies, pesos y precios

Todas las capturas se pagan por **kilo**: el precio final sale de multiplicar el peso de la pieza por el precio base de la especie. Dos pescados de la misma especie pueden valer diez veces más el uno que el otro solo por el tamaño.

La pesca deportiva paga **el doble por kilo** que la comercial, pero saca una pieza por vez. La columna de valor de esta tabla es el de la venta deportiva con `/venderpesca`; la venta comercial paga la mitad.

La **frecuencia** es la probabilidad aproximada de que salga esa especie una vez elegida su categoría, sin contar las que aún no tengas desbloqueadas.

| Especie | Categoría | Frecuencia | Habilidad mínima | Peso | Valor deportivo | Burger Points |
|---|---|---|---|---|---|---|
| Barred Sand Bass | Común | 28% | 0 | 0,5 – 6 kg | $6 – $75 | +5 |
| Calico Bass | Común | 15% | 0 | 0,5 – 12 kg | $3 – $60 | +5 |
| Spot Prawn | Común | 13% | 0 | 0,1 – 0,3 kg | $20 – $60 | +5 |
| Pismo Clam | Común | 11% | 0 | 0,2 – 0,8 kg | $12 – $48 | +5 |
| Rock Crab | Común | 9% | 0 | 0,3 – 1,5 kg | $15 – $75 | +10 |
| Market Squid | Común | 9% | 0 | 0,1 – 0,5 kg | $10 – $50 | +10 |
| Pacific Bonito | Común | 8% | 0 | 0,5 – 6 kg | $9 – $105 | +10 |
| Ocean Whitefish | Común | 5% | 0 | 1 – 10 kg | $18 – $175 | +10 |
| San Andreas Scorpionfish | Común | 3% | 0 | 0,5 – 2 kg | $19 – $75 | +15 |
| Rockfish | Media | 29% | 0 | 0,5 – 18 kg | $10 – $360 | +5 |
| San Andreas Yellowtail | Media | 21% | 20 | 5 – 40 kg | $50 – $400 | +10 |
| White Sea Bass | Media | 15% | 30 | 2 – 54 kg | $15 – $405 | +10 |
| San Andreas Sheephead | Media | 15% | 10 | 2 – 18 kg | $55 – $495 | +10 |
| Two-Spot Octopus | Media | 12% | 40 | 0,5 – 4 kg | $45 – $360 | +15 |
| Spiny Lobster | Media | 9% | 50 | 0,5 – 5 kg | $20 – $200 | +15 |
| San Andreas Halibut | Trofeo | 50% | 50 | 2 – 90 kg | $20 – $900 | +10 |
| Barracuda | Trofeo | 21% | 65 | 5 – 60 kg | $88 – $1.050 | +15 |
| Lingcod | Trofeo | 14% | 80 | 5 – 30 kg | $175 – $1.050 | +20 |
| American Lobster | Trofeo | 14% | 90 | 0,5 – 4 kg | $106 – $850 | +20 |

Valor de las tres especies que sacan las redes en la pesca comercial: Barred Sand Bass $3 – $38, Calico Bass $1 – $30 y Spot Prawn $10 – $30 por pieza.

Las presas más raras son también las que más Burger Points reparten: el **Lingcod** y la **American Lobster** son las que más pagan, con **+20 BP**. Cada trofeo que sacas se celebra con vítores que solo oyes tú.

Fíjate en el peso antes de vender: un halibut de 90 kg vale casi lo mismo que un lingcod grande aunque el lingcod sea mucho más raro. Las especies de peso alto (halibut, barracuda, white sea bass, yellowtail) son las que dan las mejores capturas.

### Basura

Una parte de las picadas no son pescado sino desechos: una **bota vieja**, una **lata de cerveza**, una **lata de soda** o un **barril oxidado**. En la pesca deportiva sale con más frecuencia cuanto peor peleas (entre un 2% con pesca perfecta y un 25% con pesca mala) y no deja ningún objeto. En la pesca comercial es solo un 3% de la red, pero ocupa espacio en la bodega y no se puede vender: conviene tirarla antes de volver al muelle.

## El olor a pescado

Descargar un cargamento comercial te deja impregnado: durante las **4 horas siguientes** cualquier persona cerca de ti verá que **apestas a pescado**, y el estado queda visible junto al resto de tus síntomas.

Para quitártelo de encima solo hay una vía: **usar un perfume** de tu inventario. Rociarte borra al instante tanto el olor a pescado como el olor a basura. El olor también se reinicia solo con el reinicio diario del servidor.

## Frecuencia de radio

Los pescadores comerciales comparten la frecuencia **304 MHz** de la radio UHF para coordinar salidas y avisar de zonas ocupadas. Sintonízala con `/frecuencia 304`.
