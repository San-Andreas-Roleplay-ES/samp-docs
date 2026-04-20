# Sistema de basura

## Introducción

La **basura** se genera principalmente en los negocios y las calles del servidor, creando una necesidad real de empleados dedicados a la limpieza. Las bolsas pueden acumularse donde quieras o depositarse en contenedores. Un negocio que no gestiona bien sus residuos **pierde ingresos automáticos** (ver [Sistema de propiedades](sistema-de-propiedades.md)).

Las **empresas recolectoras de basura** se encargan de limpiar negocios y contenedores, y transportar los desechos a los vertederos. A cambio reciben una compensación en dólares por unidad recolectada, y el gobierno obtiene un pequeño porcentaje por reciclaje.

> La basura es **el único objeto que persiste entre reinicios**, lo que hace que la acumulación en las calles sea un problema tangible.

## Basura en negocios

Cada vez que un cliente (jugador o NPC) compra en un negocio, se genera **0 o 1 kg de basura** de forma aleatoria. Los NPCs pueden añadir hasta **10 kg por día** en el peor escenario. El tope máximo de basura acumulada es de **100 kg**.

La cantidad acumulada afecta directamente a las **ventas automáticas por hora** del negocio:

| Basura acumulada | Productos vendidos por hora |
| ---------------- | --------------------------- |
| 0 – 9 kg         | 35                          |
| 10 – 20 kg       | 30                          |
| 21 – 30 kg       | 25                          |
| 31 – 40 kg       | 20                          |
| 41 – 50 kg       | 15                          |
| 51 – 60 kg       | 10                          |
| 61 – 70 kg       | 5                           |
| +70 kg           | **0 (sin ventas)**          |

A partir de **70 kg** aparecen **plagas de ratas**, y a partir de ese punto solo un **recolector de basura especializado** puede limpiar el negocio. Además, cuanto más sucio está el local, aparecen mensajes de entorno que desmotivan a los clientes.

### Comandos

- /mirarbasura — muestra los kilos de basura, las plagas y cuántos productos pierdes cada hora.
- /limpiarnegocio — recoge basura del negocio donde trabajas.

## Limpiar un negocio

El comando `/limpiarnegocio` tarda **30 segundos** y debes mantenerte dentro del negocio todo el proceso. Puede usarlo:

- **Un empleado del negocio** en servicio: limpia entre **15 y 30 kg** por uso.
- **Un recolector de basura** de una empresa: también limpia entre **15 y 30 kg** por uso, y **es el único** que puede limpiar negocios con **70 kg o más** (plagas).

Cuando terminas, aparece una **bolsa de basura** a tus pies. Esa bolsa es parte del sistema de inventario: puedes llevarla a cualquier contenedor cercano, tirarla o entregarla en un vertedero si eres recolector.

Esto abre la puerta a **contratos de limpieza** entre empresas recolectoras y negocios.

### Comandos

- /limpiarnegocio — inicia la limpieza del negocio (empleado o recolector).

## Contenedores de basura

Los contenedores son puntos fijos repartidos por el mapa (los administra el Estado y las empresas). Cualquier jugador puede **tirar objetos** en ellos o sacar lo que otros hayan dejado; los recolectores, además, pueden **vaciarlos por completo** para llevarse la basura al camión.

Los contenedores se **rellenan automáticamente cada 30 minutos** para ofrecer rutas de trabajo continuas a las empresas recolectoras.

### Comandos

- /basurero — abre el inventario del contenedor más cercano.
- /basurero sacar [ranura] — saca un objeto del contenedor.
- /basurero meter — guarda el objeto que tengas en la mano derecha en el contenedor.
- /basurero limpiar — un recolector en servicio vacía todo el contenedor en una bolsa para su camión.
- /recolectar — un recolector localiza el contenedor, bolsa o negocio con basura más cercano.

## Vertederos

Las bolsas de basura recolectadas deben entregarse en alguno de los **vertederos de Willowfield, Dillimore o Angel Pine**. El vertedero paga una cantidad en dólares por cada unidad entregada, y el gobierno recibe una pequeña parte por reciclaje. La empresa recolectora se queda con un **40%** de lo que ganan sus empleados.

El pago al recolector depende de su **habilidad**:

| Habilidad de recolector | Multiplicador del pago |
| ----------------------- | ---------------------- |
| 0 – 25                  | x0.8                   |
| 26 – 50                 | x1.0                   |
| 51 – 75                 | x1.2                   |
| 76 o más                | x1.4                   |

Los recolectores premium ganan habilidad más rápido por cada bolsa entregada.

### Comandos

- /entregarbasura — entrega la bolsa de basura que tengas en la mano derecha al vertedero.
