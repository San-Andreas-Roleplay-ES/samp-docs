# Sistema de plantaciones de marihuana

## Introducción

El cultivo de marihuana es la forma más accesible de producir droga en San Andreas Roleplay: no exige facción, ni licencia, ni habilidad mínima. Cualquier personaje que consiga semillas, abono, fertilizante y agua puede montar su propio cultivo y, con paciencia, cosechar cogollos listos para consumir o vender.

Puedes plantar prácticamente en cualquier sitio: dentro de una casa, en un negocio, en un almacén, en un bosque o al aire libre. La maceta queda fija en el lugar donde la colocaste, con la orientación que tenías, y permanece ahí aunque cierres sesión o el servidor se reinicie. Las plantas crecen por tiempo real, así que siguen madurando aunque no estés conectado.

La planta tiene dueño, y eso te protege en parte: **solo tú o un invitado a tu granja pueden cosechar tus plantas**. Aun así, cualquier personaje que llegue hasta ella puede regarla o abonarla, y un policía de servicio puede destruirla. Un interior cerrado con llave sigue siendo mucho más seguro que un descampado, sobre todo frente a la policía.

Las plantas al aire libre rinden más: cada cosecha en el exterior da un **25% más de gramos** que la misma planta bajo techo.

Los cultivos legales (hortalizas y frutas) usan los mismos comandos, pero tienen reglas propias. Están explicados en el [sistema de cultivos](sistema-de-cultivos.md).

### Comandos

- /plantacion crear — coloca una maceta nueva con semillas. Alias: `/planta`, `/plantación`.
- /plantacion cuidar — riega la planta más cercana o, con un saco de abono, le sube la salud.
- /plantacion mejorar — aplica fertilizante a la planta más cercana.
- /plantacion examinar — muestra el estado de la planta más cercana.
- /plantacion cosechar — recoge los cogollos cuando la planta está madura.
- /plantacion eliminar — destruye la planta más cercana.
- /llenaragua — rellena la botella de agua o la regadera que llevas en la mano derecha. Solo funciona dentro de una propiedad.
- /invitargranja — deja que otro personaje coseche tus plantas durante 7 días.
- /granja — muestra tus plantas por tipo, tus granjeros invitados y las granjas ajenas a las que estás invitado.

Todos los comandos de `/plantacion`, salvo `crear`, actúan sobre la planta más cercana dentro de **2 metros** y en el mismo interior donde estás.

## Qué necesitas y cuánto cuesta

El cultivo se apoya en cuatro consumibles. Los tres primeros se venden en los negocios de tipo **growshop**; el agua se consigue en cualquier tienda 24/7, máquina expendedora o negocio que la tenga en catálogo.

| Objeto | Dónde se consigue | Unidades por envase | Costo base |
|--------|-------------------|---------------------|------------|
| Semillas de Marihuana | Growshop | hasta 1000 | **$51** |
| Saco de Abono | Growshop | hasta 20 | **$144** |
| Fertilizante | Growshop | hasta 5 | **$216** |
| Botella de Agua | Tiendas, expendedoras, bares | hasta 10 | **$6** |

El costo base es lo que el negocio paga por reponer stock. Cada growshop fija su propio precio de venta al público, que nunca puede ser **inferior al costo base** ni superior a **10 veces** ese costo. Si compras en un puesto con atención en ventanilla (drive-thru), el precio sube un **20%** adicional.

El saco de abono es pesado (**20 kg**) y ocupa **2 ranuras** del inventario: hay que cargarlo con las dos manos, así que planifica el traslado hasta el lugar donde vayas a cultivar.

El fertilizante es el mismo que usan los cultivos legales: no es exclusivo de la marihuana.

Para regar puedes usar también una **regadera**, que guarda hasta **100 unidades** de agua. Ni la botella ni la regadera se destruyen al regar: cuando se vacían, las rellenas con `/llenaragua`. Esto solo se puede hacer dentro de una propiedad, y el agua que sacas se suma a la factura de agua de esa propiedad (una unidad de factura por cada 10 de agua).

## Plantar

Para crear una planta debes cumplir **estas condiciones a la vez**:

- Llevar un paquete de **Semillas de Marihuana** en la mano derecha, con al menos 1 unidad.
- Tener un **Saco de Abono** apoyado en el piso, a **5 metros o menos** de ti.
- No haber otra planta a menos de **1,5 metros**.
- No haber ya **10 plantas de marihuana** en un radio de 10 metros. Si la zona está saturada, busca otro lugar.
- No tener ya el máximo de plantas permitidas: cada personaje puede tener **32 plantas** a la vez, entre legales e ilegales. Si llegas al tope, cosecha o descarta alguna antes de sembrar.

El servidor también tiene un cupo total de **4.096 plantas** en todo el mapa. Si está lleno, no podrás crear nuevas hasta que se liberen espacios.

Al ejecutar `/plantacion crear` colocas la maceta en tu posición y mirando hacia donde estás orientado. La planta nace con **5/10 de salud**, **0/5 de agua**, **0/5 de fertilizante** y madurez **Semilla**.

Justo después de plantar se abre un editor para que acomodes la maceta: puedes moverla hasta **3 metros** de donde la sembraste, siempre respetando la separación mínima con otras plantas. Si te alejas más o chocas con otra planta, se queda donde estaba.

Cada plantación consume una cantidad aleatoria de insumos:

- **1 a 5 semillas** del paquete.
- **1 a 5 unidades** del saco de abono.

Si a cualquiera de los dos se le acaban las unidades, el envase desaparece de tu inventario.

## Regar y fertilizar

Una planta solo crece si está bien cuidada. Hay tres acciones de mantenimiento y todas se aplican a la planta más cercana. Cualquier personaje puede realizarlas, aunque la planta no sea suya.

| Acción | Comando | Qué necesitas en la mano derecha | Tope | Efecto |
|--------|---------|----------------------------------|------|--------|
| Riego | `/plantacion cuidar` | Botella de Agua o regadera con agua | 5/5 de agua | **+1 salud** y **+1 agua** |
| Fertilización | `/plantacion mejorar` | Fertilizante | 5/5 de fertilizante | **+1 salud** y **+1 fertilizante** |
| Abono | `/plantacion cuidar` | Saco de Abono | 10/10 de salud | **+2 salud** (no sube agua ni fertilizante) |

Cada aplicación gasta entre **1 y 3 unidades** del envase, aunque solo sume al medidor de la planta: conviene llevar repuestos. La salud nunca pasa de **10/10** y el agua y el fertilizante nunca pasan de **5/5**; si el medidor ya está al máximo, el comando te avisa y no gasta nada. El agua no gasta el envase: la botella o la regadera quedan vacías y las rellenas. El fertilizante y el abono sí se agotan y desaparecen al terminarse.

Estas tareas también entrenan tu **habilidad de drogas**:

- Fertilizar: **50% de probabilidad** de sumar +1 punto.
- Regar o echar abono: **25% de probabilidad** de sumar +1 punto.

## Crecimiento

Cada planta atraviesa **seis etapas de madurez**. El aspecto de la maceta cambia visiblemente en cada una:

| Etapa | Nombre | ¿Se puede cosechar? |
|-------|--------|---------------------|
| 0 | Semilla | No |
| 1 | Brote | No |
| 2 | Plántula | No |
| 3 | Crecida | No |
| 4 | Floración | Sí |
| 5 | Cosecha | Sí (rendimiento máximo) |

El crecimiento depende del tiempo real: la marihuana completa **un ciclo cada 24 horas**, esté o no conectado su dueño. En cada ciclo, la planta sube una etapa **solo si cumple los tres umbrales**:

- Salud de **5/10** o más.
- Agua de **3/5** o más.
- Fertilizante de **1/5** o más.

Cumpla o no los requisitos, **siempre se descuentan recursos** en cada ciclo:

| Medidor | Consumo por ciclo |
|---------|-------------------|
| Salud | **1 a 2 puntos** |
| Agua | **1 a 3 puntos** |
| Fertilizante | **1 a 3 puntos** |

Como el consumo es constante, una planta abandonada pierde salud hasta llegar a cero. Con salud cero queda marchita: todavía puedes recuperarla regándola, abonándola o fertilizándola, pero **se elimina en el siguiente reinicio del servidor** si no lo haces antes. En el peor de los casos una planta puede vaciar el agua y el fertilizante en solo dos ciclos, así que lo razonable es pasar a revisarla y recargarla todos los días.

En la práctica, llevar una planta desde semilla hasta la etapa Cosecha requiere **cinco ciclos exitosos** (como mínimo, cinco días), y la Floración se alcanza al cuarto. Un ciclo en que la planta no cumple los umbrales no la hace avanzar: tardará un día más.

## Examinar

`/plantacion examinar` te muestra el estado de la planta más cercana, pero **cuánto ves depende de tu habilidad de drogas**:

| Habilidad de drogas | Información visible |
|---------------------|---------------------|
| Cualquiera | Etapa de madurez |
| **5 o más** | Estado del agua y del fertilizante, descrito con palabras |
| **10 o más** | Estado de la salud, descrito con palabras |
| **50 o más** | Los valores exactos de cada medidor, cuánto falta para el próximo ciclo y si la planta crecerá en él |

Un cultivador novato ve poco más que el aspecto de la planta: subir habilidad es lo que te permite afinar el riego y la fertilización antes de cosechar.

## Cosechar

Cuando la planta llega a **Floración** o **Cosecha**, ya puedes recogerla con `/plantacion cosechar`. Necesitas tener la **mano derecha vacía**, porque los cogollos aparecen directamente ahí.

Solo pueden cosechar el **dueño** de la planta y los personajes a los que haya invitado a su granja. Con `/invitargranja [id o nombre]` das permiso a otro personaje, que debe estar a tu lado (hasta 5 metros), para cosechar todas tus plantas durante **7 días**; repetir la invitación la renueva. Puedes tener hasta **8 granjeros** invitados a la vez, y un mismo personaje puede estar invitado en un máximo de **8 granjas**. `/granja` muestra tus plantas, tus granjeros con su última actividad y las granjas ajenas a las que estás invitado; desde ahí también puedes quitar una invitación. Invita solo a gente de confianza.

| Etapa al cosechar | Gramos en interiores | Gramos al aire libre (+25%) |
|-------------------|----------------------|-----------------------------|
| Floración | **20 a 49** | **25 a 61** |
| Cosecha | **30 a 49** | **37 a 61** |

La **fuerza** (pureza) de la marihuana obtenida, de 0 a 100, depende del estado de la planta al momento de cortarla. Cada punto de cada medidor suma a la fuerza:

| Medidor | Aporte por punto | Aporte máximo |
|---------|------------------|---------------|
| Agua (0 a 5) | **+4** | 20 |
| Fertilizante (0 a 5) | **+10** | 50 |
| Salud (0 a 10) | **+3** | 30 |

Es decir: una planta que llegue a la cosecha con los tres medidores al máximo entrega los **100 puntos de fuerza**, mientras que una descuidada puede dar gramos prácticamente inservibles. El fertilizante es, con diferencia, el factor que más pesa en la calidad final. Conviene regar y fertilizar **justo antes** de cortar, porque el ciclo de crecimiento previo ya habrá restado puntos a los medidores.

Cada cosecha tiene un **50% de probabilidad** de sumar +1 a tu habilidad de drogas.

Tras cortarla, la planta **no desaparece**: vuelve a la etapa **Semilla** conservando el agua, el fertilizante y la salud que le quedaban, y empieza de nuevo el ciclo. Una maceta bien mantenida produce indefinidamente.

## Eliminar

`/plantacion eliminar` destruye la planta más cercana y deja una **bolsa de basura** en su lugar. Solo pueden hacerlo el **dueño** de la planta y los **policías de servicio**. La acción es irreversible: pierdes la planta y todo lo invertido en ella.

## Qué hacer con la cosecha

Los cogollos que obtienes son marihuana normal: puedes fumarla, venderla a otros personajes, distribuirla en las zonas de venta callejera o guardarla. Todo eso se explica en el [sistema de drogas](sistema-de-drogas.md).

Un detalle importante para el cultivador: la marihuana **pierde fuerza con el paso de los días** esté donde esté, salvo que la guardes en el **refrigerador de una propiedad** (o dentro de un paquete que esté en ese refrigerador), donde tiene un **70% de probabilidad diaria** de conservar la pureza intacta. Si cosechas grandes cantidades para vender de a poco, el refrigerador es la diferencia entre vender producto premium y vender restos.

## Consejos

- **Planta en interiores con llave.** Es la mejor protección contra la policía y contra quien quiera molestarte, aunque al aire libre cosechas un 25% más.
- **Separa las macetas.** El mínimo es 1,5 metros entre plantas; dejar algo más de espacio facilita apuntar al comando correcto cuando riegas varias seguidas.
- **Lleva envases de sobra.** Cada riego o fertilización puede gastar hasta 3 unidades, y el bote de fertilizante trae solo 5.
- **Deja la planta cuidada antes de irte.** Crece aunque no estés conectado y cada ciclo de 24 horas le resta agua, fertilizante y salud.
- **Espera a la etapa Cosecha.** Cortar en Floración te da menos gramos en promedio; la diferencia se nota al vender lotes grandes.
- **Riega y fertiliza antes de cortar.** La fuerza se calcula con los valores del momento exacto de la cosecha.
- **Invita solo a gente de confianza.** Un granjero invitado puede cosechar todas tus plantas durante 7 días.
- **Sube tu habilidad de drogas cuidando plantas.** Con 5 puntos ya ves el agua y el fertilizante, con 10 ves también la salud y con 50 ves todos los números exactos, lo que te permite dejar de adivinar.
