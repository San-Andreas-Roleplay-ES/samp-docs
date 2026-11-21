# Sistema de mascotas

## Introducción

Las mascotas son perros y gatos que te acompañan por toda la ciudad como un personaje más. Caminan a tu lado en formación (a tu izquierda, a tu derecha o detrás), te siguen al entrar y salir de los interiores, se suben a tu vehículo si hay asientos libres y corren junto a ti cuando vas en bicicleta. Llevan su nombre sobre la cabeza y aparecen en la lista de jugadores.

Además de hacerte compañía, cada mascota tiene habilidades que mejoran con el uso: cazar, rastrear olores, sanarte y correr más rápido. También pueden pelear por ti o defenderte, y puedes darles órdenes con un menú o simplemente hablándoles en el chat.

Las mascotas se adoptan con monedas en la tienda de mascotas del panel de control (UCP), no en el juego. Para saber qué son las monedas y cómo se consiguen, revisa la [tienda premium](tienda-premium.md) y el [panel de control](panel-de-control.md).

### Comandos

- `/adoptar` (alias `/petshop`) — te recuerda que la tienda de mascotas está en el panel de control.
- `/mascotas` (alias `/pets`) — lista tus mascotas y saca o guarda la que elijas.
- `/control` (alias `/controlar`) — abre el menú de órdenes de tus mascotas.

## Cuántas mascotas puedes sacar

Puedes tener todas las mascotas que adoptes, pero solo algunas fuera a la vez. El límite depende de tu premium:

| Cuenta | Mascotas fuera a la vez |
|--------|-------------------------|
| Sin premium | 1 |
| Premium Platinum | 2 |
| Premium Ruby | 3 |

Los slots de mascota que compres en el panel de control se suman a ese límite. El máximo absoluto es de **5 mascotas** fuera a la vez.

## Sacar y guardar mascotas

Escribe `/mascotas` para ver tus mascotas. Las que ya están fuera aparecen en verde, las que se están recuperando de una pelea en rojo y las disponibles en blanco. Al elegir una que está fuera, vuelve a casa; al elegir una disponible, sale contigo.

Para sacar una mascota debes cumplir lo siguiente:

- Estar a pie, no dentro de un vehículo.
- No estar en la cárcel.
- No haber alcanzado tu límite de mascotas fuera.
- Que la mascota no esté recuperándose.

Hay un límite de **6 salidas por minuto**, y el servidor también limita cuántas mascotas pueden salir en el mismo instante. Si no puedes sacar otra, espera unos segundos. Tus mascotas vuelven a casa solas cuando cierras sesión con `/logout` o te desconectas.

## Nombre

Cada mascota tiene un nombre que se ve sobre su cabeza y en la lista de jugadores. Puedes cambiarlo desde `/control` eligiendo la mascota y la opción **Cambiar nombre**:

| Dato | Valor |
|------|-------|
| Costo | **50 monedas** |
| Frecuencia | Una vez por hora por mascota |
| Largo | De 3 a 20 caracteres |
| Caracteres | Solo letras y espacios, sin acentos ni números |

Si no le pones nombre, usa el de su raza.

## El menú de órdenes

Con `/control` eliges **Todas** tus mascotas o una en particular (si tienes una sola, se abre directo) y luego la acción. El menú reúne cuatro tipos de opciones:

| Tipo | Opciones |
|------|----------|
| Comanda | Seguir, Detener, Acostarse, Saltar y Ladrar (perros) o Maullar (gatos) |
| Pelea | Atacar y Defensa |
| Habilidad | Caza, Sabueso (solo perros) y Sanación |
| Dueño | Cambiar nombre |

Algunos detalles:

- **Seguir** funciona aunque la mascota esté lejos: te alcanza desde hasta **500 metros**. Las demás órdenes solo las cumple si está a menos de **20 metros** de ti.
- **Detener** deja a la mascota quieta donde está hasta que le pidas seguir otra vez.
- Las habilidades y el cambio de nombre solo aparecen si eliges una mascota en particular.
- Una mascota que va sentada en un vehículo, que está bajando de él o que quedó fuera de combate no recibe órdenes.
- Hay una pausa corta entre una orden y la siguiente.

### Órdenes por voz

También puedes dar órdenes hablando en el chat de rol. Escribe el nombre de tu mascota, una coma y la orden, por ejemplo: *"Toby, quieto"*. La mascota solo obedece la **primera palabra** que viene después de su nombre, así que "Toby, por favor ven" no hace nada. No importan las mayúsculas ni los acentos.

Funciona con cualquier chat de rol: hablar normal, susurrar, gritar y los demás chats de voz. La mascota tiene que oírte:

| Cómo hablas | Distancia máxima |
|-------------|------------------|
| Susurro o voz baja | 5 metros |
| Voz normal | 20 metros |
| Gritos o voz alta | 40 metros |

Estas son las palabras que entiende cada orden:

| Orden | Palabras |
|-------|----------|
| Seguir | sigue, sígueme, seguime, ven, vení, vente, vamos, aquí, acá |
| Detener | quieto, quieta, quédate, quedo, espera, alto, detente, para, stop |
| Acostarse | échate, acuéstate, túmbate, siéntate, abajo |
| Saltar | salta, brinca, arriba |
| Ladrar o maullar | habla, ladra, guau (perros); habla, maulla, miau (gatos) |
| Atacar | ataca, atácalo, atácala, muerde, muérdelo, muérdela, agárralo, agárrala, chúmbale |
| Subir al vehículo | sube, súbete, adentro |
| Sanar | sana, sáname, sánate, cura, cúrame, cúrate |
| Cazar | caza |
| Rastrear (solo perros) | busca, rastrea, olfatea, huele |

Cada orden pasa por las mismas condiciones que en el menú: cercanía, estado de la mascota y requisitos de la habilidad. Con **ataca** se abre la lista de objetivos para que elijas a quién. Si dos mascotas tuyas se llaman igual, responde la primera.

## Habilidades

Cada mascota tiene cinco habilidades de **0 a 100**. Las razas más caras empiezan con mejor nivel. Mejoran con el uso: cada vez que la habilidad da resultado, hay una probabilidad de subir un punto, que baja a medida que el nivel crece (de un 50% con nivel 0 a un 10% con nivel 100). Cuando una habilidad sube, recibes un aviso con el nuevo nivel.

Para usar una habilidad desde `/control` tu mascota debe estar libre, a menos de **20 metros** y tú a pie. Después de usarla, algunas necesitan un tiempo de descanso, que se muestra junto al nivel en el menú.

| Habilidad | Para qué sirve | Descanso |
|-----------|----------------|----------|
| Caza | Apunta hacia un animal salvaje vivo | 1 minuto (compartido entre todas tus mascotas) |
| Sabueso | Marca la dirección de algo escondido (solo perros) | 1 minuto |
| Sanación | Te devuelve vida | 5 minutos |
| Corredor | Corre más rápido al perseguir | No se usa desde el menú |
| Pelea | Muerde más fuerte a otras mascotas | No se usa desde el menú |

### Caza

Solo funciona al aire libre, no dentro de interiores. La mascota olfatea y te avisa qué tan cerca está la presa más cercana:

| Distancia a la presa | Aviso |
|----------------------|-------|
| Menos de 50 metros | Rastro caliente |
| Entre 50 y 150 metros | Rastro tibio |
| Más de 150 metros | Rastro frío |

Después camina unos pasos señalando la dirección. Cuando está a menos de **30 metros** de la presa, se queda inmóvil mirándola y ladra. Mientras más nivel tiene, más preciso es el ángulo con el que apunta.

- **Alcance**: 60 metros más 3 metros por cada nivel.
- **Presas según el nivel**: con nivel menor a 40 solo encuentra animales comunes; desde el nivel 40 también los medianos; desde el nivel 70 también los más raros, como los osos.
- **Caza en jauría**: cada otro perro tuyo que esté a menos de 20 metros de la mascota suma un 20% de alcance y de puntería.
- **Gatos**: suben su nivel de Caza la mitad de rápido que los perros.
- **Mejora de nivel**: la presa queda marcada 5 minutos y la habilidad solo sube si tú la cazas dentro de ese plazo.

Para saber cómo cazar y vender las piezas, revisa el [sistema de caza](sistema-de-caza.md).

### Sabueso

Solo los perros tienen esta habilidad. El perro olfatea a su alrededor y señala la dirección de lo que encuentra. Si hay varias cosas, prioriza en este orden:

1. Cadáveres.
2. Drogas ilegales, incluidas las plantas.
3. Escondites de presos con objetos adentro.
4. Explosivos.

Busca en el suelo, en los bolsillos de las personas cercanas y en los maleteros de los vehículos cercanos.

- **Alcance**: 10 metros más 0,4 metros por cada nivel. Los cadáveres los detecta desde más lejos: 100 metros más 1 metro por nivel.
- **Fallos**: al principio falla la mitad de las veces; con nivel 100 solo falla el 5%. Cuando falla, se ve al perro olfatear sin encontrar nada.
- **Mejora de nivel**: el Sabueso sube cuando el perro señala un hallazgo.

### Sanación

Tu mascota va hasta ti, baila a tu lado y los dos recuperan vida a la vez:

| Dato | Valor |
|------|-------|
| Vida que recuperas | De 10 con nivel 0 hasta 50 con nivel 100 |
| Vida que recupera la mascota | La misma cantidad |
| Descanso | 5 minutos |

Condiciones: estar a pie, vivo y en el mismo lugar que tu mascota. No funciona si estás esposado, paralizado, placado, en una sala de paintball o si tienes **heridas de bala o de arma blanca**. Tampoco puedes usarla si ni tú ni tu mascota necesitan recuperarse. Si te subes a un vehículo o te alejas mientras ella viene, la sanación se cancela.

### Corredor

Cuando tu mascota persigue a alguien, corre más rápido según su nivel: desde x0,8 con nivel 0 hasta x1,5 con nivel 100. Tiene una probabilidad de subir cada vez que alcanza a su objetivo en una persecución. Es una habilidad pasiva: no da aviso al mejorar.

### Pelea

Es una habilidad que no aparece en el menú. Las razas más caras empiezan más fuertes y sube cuando tu mascota deja fuera de combate a otra mascota. Hace que sus mordidas a otras mascotas pesen más: desde x0,75 con nivel 0 hasta x1,5 con nivel 100. No cambia el daño que hace a las personas.

## Peleas

Desde `/control`, la opción **Atacar** abre la lista de objetivos cercanos (hasta 30 metros): puedes elegir a una persona, a la mascota de otro jugador o atacar a **todas las mascotas cercanas**. También puedes ordenarlo por voz con *"ataca"*.

- **Hasta 4 mascotas** pueden rodear al mismo objetivo.
- Tu mascota persigue a su objetivo y lo muerde. A una persona le quita **4 de vida** cada 1,5 segundos; a otra mascota le quita **8** (multiplicado por su nivel de Pelea) en el mismo intervalo. Una mascota tiene 100 de vida.
- La mascota deja de pelear si el objetivo queda herido, se aleja más de **50 metros**, tú te alejas más de **60 metros**, o no logra alcanzarlo en unos 30 segundos.
- Cuando termina, si fue por orden tuya contra una sola persona o mascota se queda quieta hasta que le des otra orden; si peleaba contra todas las mascotas, vuelve a seguirte; si se estaba defendiendo, retoma lo que hacía antes (te sigue si te seguía, o se queda quieta si estaba quieta).
- Sus ataques dejan heridas propias en `/heridas` (consulta el [sistema de heridas](sistema-de-heridas.md)): una **mordida** si es un perro y un **arañazo** si es un gato.
- Tus mascotas no pelean si estás en una sala de paintball ni durante los Juegos del Hambre. Durante la Purga tampoco atacan a quien esté protegido o cerca de un buhonero.

### Defensa

Con **Defensa** activada, tu mascota va tras cualquiera que la hiera, siempre que sea una persona o mascota que esté cerca (hasta 30 metros) y que la mascota sobreviva al golpe. Se activa o desactiva desde `/control`, por mascota o para todas, y se mantiene guardada.

## Heridas y reaparición

Cualquier persona puede herir a tu mascota, menos tú: si le disparas o la golpeas verás el aviso *"No puedes herir a tu propia mascota"*.

Si tu mascota cae en una pelea o recibe daño hasta quedar fuera de combate:

- Recibes un aviso de que fue herida.
- Su cuerpo desaparece a los pocos segundos y vuelve a casa.
- Tendrás que esperar **30 minutos** para volver a sacarla. En `/mascotas` aparece en rojo, y si intentas sacarla antes, te indica cuántos minutos faltan.

## Vehículos

Las mascotas suben a tu vehículo y bajan con tu vehículo sin que tengas que hacer nada:

- Al subir tú como conductor o pasajero, cada mascota que te esté siguiendo y esté cerca (hasta 20 metros) ocupa un **asiento de pasajero** libre. Las que estén quietas, peleando o haciendo otra cosa no suben solas.
- Las que no alcanzan lugar, o que están demasiado lejos, esperan donde están y vuelven a seguirte cuando bajas, siempre que estés a menos de 150 metros de ellas.
- **No suben a aviones ni helicópteros.**
- En **bicicleta** no suben: corren a tu lado.
- Si una mascota se quedó afuera, puedes pedirle que suba con la orden por voz *"sube"* o *"súbete"* estando tú dentro del vehículo.
- Cuando bajas, ellas siguen sentadas hasta que te alejas unos **5 metros** del vehículo; entonces bajan y te siguen.
- Si otro jugador sube a un asiento ocupado por una mascota, ella cede el lugar.

## Vida propia

Cada mascota hace sus propias cosas cuando está quieta. De vez en cuando, cada pocos minutos y a su propio ritmo, se rasca, se lame las patas, se muerde las pulgas, bosteza, ronronea o ladra sola. Estos gestos se ven como acciones en el chat de las personas cercanas. Ladrar o maullar desde `/control` tiene muchas variantes, y una mascota no repite dos veces seguidas la misma línea.

## Consejos

- **Habla con tus mascotas.** Las órdenes por voz son más cómodas que el menú y no interrumpen tu rol.
- **Mejora tu Caza con paciencia.** Cazar la presa marcada dentro de los 5 minutos es lo único que hace subir ese nivel.
- **Usa varios perros para cazar.** Mientras más perros tengas cerca, más alcance y puntería.
- **Cuida a tu mascota.** Una pelea imprudente te deja 30 minutos sin ella.
- **Revisa tus heridas antes de pedir sanación.** Con heridas de bala o de arma blanca, tu mascota no puede ayudarte.
- **Activa Defensa solo cuando quieras.** Tu mascota irá tras quien la hiera, aunque eso la meta en una pelea que te complique.
- **Elige bien la raza.** Las razas más caras empiezan con mejores habilidades, pero todas pueden mejorar con el uso.
