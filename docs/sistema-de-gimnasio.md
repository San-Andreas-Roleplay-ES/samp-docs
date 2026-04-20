# Sistema de gimnasio

## Introducción

El sistema de gimnasio permite a los jugadores **mejorar sus atributos físicos** y administrar sus **necesidades básicas** (hambre, sed y energía) mientras utilizan las máquinas y consumen objetos disponibles en el servidor. Está diseñado para agregar una dinámica realista y entretenida a la experiencia de juego.

Todos los atributos físicos y las necesidades básicas se miden en una escala de **0 a 25**. Los gimnasios están repartidos por Los Santos, Las Venturas, la playa de LS y Ganton.

### Comandos

- /estilopelea [boxing | kungfu | kneehead | default] — cambia el estilo de pelea frente a un **saco de boxeo**.
- /ensenarestilo [id] [$precio] [boxing | kungfu | kneehead] — enseñar un estilo como **personal trainer** ($1,000 – $10,000).

## Estadísticas

### Musculatura

Es el atributo que representa la fuerza y determina la **vida máxima** del jugador. Progresa al usar la **pressbanca** y las **mancuernas**, y se reduce gradualmente si no entrenas.

- **Tope máximo**: 25.
- **Mecánica de decaimiento**: si no entrenas, cada **8 horas** pierdes progreso; cuando la experiencia acumulada se agota, bajas 1 punto de musculatura.
- **Curva de experiencia**: cada nivel requiere más repeticiones que el anterior. Las primeras subidas son rápidas y el coste aumenta de 6 en 6 hasta llegar al nivel máximo.

#### Vida máxima por musculatura

| Musculatura | Vida máxima |
|-------------|-------------|
| 0 – 5 | 100 HP |
| 6 – 10 | 125 HP |
| 11 – 24 | 150 HP |
| 25 | **175 HP** |

#### Contextura pública visible en `/describir`

| Musculatura | Contextura |
|-------------|------------|
| 0 – 5 | Normal |
| 6 – 10 | En forma |
| 11 – 24 | Musculoso |
| 25 | ¡Parece una mole! |

> **Tienda premium**: los suscriptores pueden adquirir **musculatura al 100%** (nivel 25) directamente desde la tienda premium sin necesidad de entrenar.

### Estado físico

Representa la resistencia y la capacidad de realizar ejercicios cardiovasculares. Se mejora con la **trotadora** y la **bicicleta**.

- **Tope máximo**: 25.
- Se **reduce** al consumir drogas, alcohol en exceso o alimentarse mal.
- Cada vez que ganas estado físico entrenando, hay una protección de **60 minutos** en la que el hambre no puede reducírtelo.

### Hambre

Indica la necesidad de consumir alimentos.

- Sube **+1 a +3 cada 30 minutos** automáticamente.
- **Tope máximo**: 25.
- Bloquea el **inicio** de una máquina si está ≥ **22**.
- Bloquea la **experiencia** durante el entrenamiento si es > **20**.

### Sed

Indica la necesidad de consumir líquidos.

- Sube **+1 a +3 cada 30 minutos** automáticamente.
- **Tope máximo**: 25.
- Bloquea el **inicio** de una máquina si está ≥ **18**.
- Bloquea la **experiencia** durante el entrenamiento si es > **15**.

### Energía

Indica la capacidad energética para entrenar.

- **Tope máximo**: 25.
- Se **regenera +1 cada 15 minutos**.
- Cada repetición exitosa consume **0 o 1 de energía (aleatorio)**.
- Si llega a **1 o menos**, no puedes seguir entrenando hasta descansar.
- Se repone de forma acelerada consumiendo **bebidas energéticas**.

## Máquinas

Cada máquina tiene una **barra de potencia** que se rellena pulsando ~k~~PED_SPRINT~ rápidamente y se drena automáticamente (−4% cada 250 ms). Si la barra se vacía en la trotadora te caes; en las demás simplemente pausas el esfuerzo.

Tras salir de una máquina hay un **cooldown de 5 segundos** antes de poder volver a entrar en cualquier máquina. Si pasas **60 segundos** inactivo en ella, te expulsan y te aplican un cooldown extra de **60 segundos**.

### Trotadora

- **Efecto**: mejora el estado físico (reduce peso).
- **Requisito de entrada**: hambre < 22, sed < 18, energía > 1, cooldown fuera.
- **Dinámica**: tres velocidades según la barra de potencia (caminando 0-20%, trote 21-65%, sprint 66-100%).

### Bicicleta

- **Efecto**: mejora el estado físico (reduce peso) a ritmo medio.
- **Requisito de entrada**: hambre < 22, sed < 18, energía > 1, cooldown fuera.
- **Dinámica**: tres velocidades según la barra de potencia (quieto 0-10%, lento 11-50%, rápido 51-100%).

### Pressbanca

- **Efecto**: mejora la musculatura a ritmo medio.
- **Requisito de entrada**: hambre < 22, sed < 18, energía > 1.
- **Dinámica**: cada repetición completa (empuje 90-100% de la barra) otorga progreso de musculatura.
- **Bonus por esteroides** (consumible farmacéutico): según el nivel de acumulación en sangre, las repeticiones rinden **x3**, **x5** o hasta **x9** el progreso habitual.

### Mancuernas

- **Efecto**: mejora la musculatura a ritmo constante.
- **Requisito de entrada**: hambre < 22, sed < 18, energía > 1.
- **Dinámica**: cada repetición (90-100% de la barra) otorga progreso de musculatura.
- **Bonus por esteroides**: mismos multiplicadores que la pressbanca.

## Estilos de pelea

Los estilos de pelea se desbloquean cumpliendo requisitos mínimos de **musculatura** y **estado físico**. Se aprenden estando frente a un **saco de boxeo** con `/estilopelea`.

Todos los estilos (incluido el default) aplican además un **extra de daño equivalente a 0.2 por cada punto de musculatura** al atacante.

| Estilo | Musculatura | Estado físico | Bonus daño al atacar | Reducción al recibir |
|--------|-------------|---------------|----------------------|----------------------|
| **Boxing** | > 15 | > 15 | +1.25 | −1.0 |
| **Kung Fu** | > 12 | > 18 | +2.0 | −0.5 |
| **Knee-Head** | > 10 | > 10 | +1.0 | −1.25 |
| **Default** | — | — | — | — |

### Protección y caducidad

Al cambiar o aprender un estilo queda **protegido durante 15 paychecks** (o **8 paychecks** si lo aprendes de un personal trainer con `/ensenarestilo`). Cuando expira la protección, si no cumples los requisitos mínimos del estilo, vuelves al estilo por defecto y recibes un mensaje de advertencia.

### Personal trainer

Los personajes con la certificación de **personal trainer** pueden enseñar estilos a otros jugadores mediante `/ensenarestilo`, cobrando entre **$1,000 y $10,000** por lección. El alumno debe aceptar la oferta (`/aceptar` o `/rechazar`) y queda con **8 paychecks** de protección.
