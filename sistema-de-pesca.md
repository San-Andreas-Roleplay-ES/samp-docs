# Sistema de pesca 🎣

## Introducción

El trabajo de pescador en el estado de San Andreas te invita a recorrer sus costas y aguas abiertas, ofreciendo una mezcla de **aventura y sustento**. Ya sea participando en la **pesca comercial** con grandes embarcaciones o disfrutando de la **pesca deportiva** con caña, este trabajo es ideal para quienes buscan explorar el mar y ganar dinero en el proceso.

### Comandos

- /radarpesca — marca todas las zonas de pesca en el mapa durante **30 segundos**.
- /pescador — lanza la red desde un barco comercial (solo empleados de empresas de pesca).
- /pescar — lanza el anzuelo con la caña de pescar (pesca deportiva).
- /cancelarpesca — cancela la pesca actual.
- /venderpescados — vende el cargamento de pescados del barco comercial en el muelle.
- /venderpesca — vende una pieza individual (pesca deportiva) en el muelle.
- /ayudapesca — muestra la ayuda de la pesca deportiva.

## Pesca comercial

### Requisitos

- Estar **empleado** en una empresa de pesca (`/trabajar`).
- Estar en un **barco de empresa** asignado vía `/negvehiculos [ID empresa]`. El barco habilitado es el **Reefer**.

### Proceso

1. **Dirígete a la zona de pesca.** Usa `/radarpesca` para localizar las zonas comerciales, marcadas en **verde** en el mapa. Una gran área comercial cubre la costa sur del estado y está delimitada por **cuatro boyas** que facilitan la ubicación.
2. **Lanza la red.** Estaciona el barco dentro de la zona verde y ejecuta `/pescador`. La red tarda entre **30 y 120 segundos** en atrapar peces.
   - Si te **alejas** de la zona, te **bajas del barco** o el barco sale del área, la red **se pierde**.
   - Si estás **en pausa (AFK)** cuando la red termina, hay **50% de probabilidad** de que se pierda.
3. **Cosecha.** Al finalizar, el maletero del barco se llena con peces aleatorios. El maletero tiene una capacidad máxima de **32 slots**; si se llena durante el lance, el exceso se pierde al mar.
4. **Venta.** Dirige el barco al muelle de **Ocean Docks** y usa `/venderpescados`. El checkpoint te lleva al punto exacto de venta. Recibirás el pago tanto en tu **paycheck** como en tu **banco**, y la caja de la empresa recibirá una suma equivalente.

### Cantidad capturada y habilidad

Cada lance captura entre **1 pez** y un máximo que **crece con tu habilidad de pesca**: a más habilidad, mayor tope de capturas por lance. Cada lance exitoso tiene **50% de probabilidad** de subir tu habilidad de pesca:

- Jugador estándar: **+1** de habilidad.
- Jugador **premium**: **+2** de habilidad (y probabilidad garantizada en parte del rango).

## Pesca deportiva

### Requisitos

- Tener una **caña de pescar** en la mano derecha. Se compra en ferreterías como la 24/7.
- **No estar** empleado como pescador comercial en servicio (si lo estás, debes usar `/pescador`, no `/pescar`).

### Proceso

1. **Localiza una zona deportiva.** Usa `/radarpesca`: están marcadas en **azul** en el mapa. Hay decenas de zonas repartidas por todo el estado (Lake Hollow, Los Santos, San Fierro, bahías, lagos interiores y costa de Las Venturas).
2. **Lanza el anzuelo** con `/pescar`. Tu personaje queda en animación de espera.
3. **Espera la picada.** Cada **10 segundos** hay una probabilidad de que algo muerda el anzuelo. Si no pica, vuelve a lanzar automáticamente.
4. **Minijuego de captura.** Cuando algo muerda, tienes **20 segundos** para presionar **rápidamente SPACE** y rellenar la barra de progreso hasta el **100%**. La barra se drena si dejas de presionar; si llega a 0, el pez se escapa.
5. **Resultado.** Si consigues el 100%, capturas la pieza y aparece en el suelo. Si lo que picó era basura, te llevas un objeto inservible.
6. **Venta.** Lleva la pieza en la mano derecha al **Los Santos Seafood Market** (muelle de Ocean Docks) y usa `/venderpesca`.

### Interrupciones

La pesca deportiva se **cancela automáticamente** si:

- Te alejas más de 2 metros del punto donde lanzaste el anzuelo.
- Sueltas o cambias la caña de pescar.
- Usas `/cancelarpesca`.

## Especies y basura

Todas las capturas pagan según su **peso en kg** y el precio base de la especie. No hay pescados garantizados: todo depende de la suerte y el rato que le dediques.

### Peces deportivos

| Especie | Rareza | Rango de peso |
|---------|--------|---------------|
| Barred Sand Bass | Muy frecuente | 0.5 – 6 kg |
| Calico Bass | Frecuente | 0.5 – 12 kg |
| Rockfish | Frecuente | 0.5 – 18 kg |
| San Andreas Yellowtail | Poco frecuente | 5 – 40 kg |
| San Andreas Halibut | Poco frecuente | 2 – 90 kg |
| Pacific Bonito | Poco frecuente | 0.5 – 6 kg |
| White Sea Bass | Poco frecuente | 2 – 54 kg |
| Ocean Whitefish | Poco frecuente | 1 – 10 kg |
| San Andreas Sheephead | Poco frecuente | 2 – 18 kg |
| Barracuda | Raro | 5 – 60 kg |
| San Andreas Scorpionfish | Raro | 0.5 – 2 kg |
| Lingcod | Raro | 5 – 30 kg |
| Spiny Lobster | Muy raro | 0.5 – 5 kg |

### Basura

A veces sacarás del agua objetos que no sirven para vender: **botas viejas**, **latas de cerveza**, **latas de soda** o **barriles oxidados**. Considéralo parte del encanto del mar.

## Frecuencia de radio

Los pescadores comerciales comparten la **frecuencia 304 MHz** en la radio UHF para coordinarse entre embarcaciones. Puedes ajustarla con `/frecuencia 304`.
