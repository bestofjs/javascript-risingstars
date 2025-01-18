---
id: statemanagement
language: es
---

{zustand} continúa su meteórico ascenso como la librería de gestión de estado preferida para React, así como para React Native y más allá. Zustand es la librería de gestión de estado "esencial" y está claro que los desarrolladores buscan precisamente eso.

Si analizamos los resultados según el estilo de gestión de estado, surgen patrones interesantes. Zustand, {pinia}, {redux} y {boardgame} son unidireccionales: defines tu estado y las acciones que lo modifican. Con {jotai}, {nano-stores} y {Legend-State}, defines tu estado como átomos y creas átomos computados que dependen de otros átomos. {valtio} es una librería bidireccional para la gestión de estado. Y {XState} es una librería de máquinas de estados.

Una conclusión que podemos sacar de estos resultados es que el estilo formal de gestión de estado tipo Redux (aunque no necesariamente la librería Redux en sí) sigue siendo el más popular. Mientras tanto, el modelo atómico está avanzando significativamente (Recoil, la librería atómica original, está justo fuera del top diez).

Sin embargo, {XState} no puede pasarse por alto. Para aplicaciones complejas, las máquinas de estados son una elección fantástica porque modelan tu aplicación en una serie estricta de estados y transiciones entre ellos. Si aún no la has probado, el editor interactivo y el simulador para X-State son imprescindibles.

{Boardgame} y {Tinybase} son adiciones muy interesantes en el top diez. Boardgame está específicamente orientada al desarrollo de juegos. Tinybase, por su parte, se centra en el almacenamiento de datos local-first y la sincronización de esos datos con servicios backend. Ambas librerías están altamente especializadas, lo que podría indicar una tendencia. Problemas como sincronizar datos local-first con servicios backend son complejos, por lo que tener librerías (como Tinybase y Legend State) que se enfoquen específicamente en eso es algo positivo.

Algo que no aparece en esta lista son las "señales". No estoy seguro de si esto se debe a que los desarrolladores están esperando que se finalice y adopte ampliamente la propuesta de TC39, o porque está integrado en frameworks como {Solid}, {Svelte} y {Qwik}. Aunque las señales no hayan llegado al top diez, siguen siendo una forma destacada de modelar el estado de manera eficiente.

Los próximos años prometen ser un período emocionante para la gestión de estado en React, Vue, JavaScript y más allá.