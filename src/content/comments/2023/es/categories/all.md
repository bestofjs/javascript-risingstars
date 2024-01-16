---
id: all
language: es
---

#### Ganador: shadcn/ui 🏆

El proyecto más destacado del año es shadcn/ui, una colección de componentes UI escritos en React que permiten la personalización del estilo a través de TailwindCSS.

Construido sobre {radix}, un conjunto de componentes headless que proporcionan primitivas para aspectos como la accesibilidad y las interacciones con el teclado, shadcn/ui se distingue de otras librerías populares (como MUI, ChakraUI, React Spectrum) al no ser un paquete descargable de NPM. En su lugar, integramos los componentes shadcn/ui mediante un comando desde nuestra terminal que instala las dependencias subyacentes y copia el código fuente del componente directamente en el código de tu proyecto para su modificación posterior.

El éxito del proyecto está estrechamente relacionado con la popularidad de {tailwind-css} (que ocupa el puesto número 20 en la clasificación global), su compatibilidad con React Server Components y la existencia de una excelente documentación.

Parece que cada vez hay más proyectos React que adoptan shadcn/ui. Incluso fue elegido por Kent C. Dodds para su innovador [Epic Stack](https://www.epicweb.dev/epic-stack).

Otro ejemplo, en este caso relacionado con la inteligencia artificial: a partir de un prompt que describe las características y la apariencia de una interfaz de usuario, la aplicación [v0.dev](https://v0.dev) genera el código JSX compuesto por componentes shadcn/ui. ¡Fascinante!

Por último, aunque no menos importante, [Best of JS](https://bestofjs.org) también los utiliza, después de la reescritura que hice para hacer la transición de SPA a una aplicación Next.js

Su enfoque ha inspirado otros proyectos como:

- [shad-cn/svelte](https://shadcn-svelte.com/) es la adaptación para Svelte.
- [Draft UI](https://github.com/IHIutch/draft-ui) construido sobre [React Aria](https://react-spectrum.adobe.com/react-aria/) en vez de Radix.

Para un análisis en profundidad, consulta el artículo [The anatomy of shadcn/ui](https://manupa.dev/blog/anatomy-of-shadcn-ui).

#### Segunda posición: Bun

Bun, el campeón de 2022, mantiene su tremendo éxito.

Bun tiene como objetivo ser un conjunto de herramientas rápido y completo para ejecutar, construir, testar y depurar aplicaciones JavaScript y TypeScript.

Su [versión 1.0](https://bun.sh/blog/bun-v1.0) se lanzó oficialmente en septiembre (¡fíjate en el pico de ese mes en el gráfico!), momento en el que Bun confirmó estar listo para producción.

La documentación proporciona unas recetas excelentes para comenzar lo más rápido posible con su API y tareas comunes como la manipulación de archivos y el manejo de interacciones con bases de datos.

Se hizo una [declaración contundente](https://twitter.com/bunjavascript/status/1732945030007099510) al final del año:

> Tenemos un objetivo para 2024.
> Reemplazar Node.js por Bun como runtime por defecto del backend JavaScript.  

La compatibilidad con la mayor parte del ecosistema de Node.js (incluidos los antiguos imports CommonJS mediante `require`) y el soporte de los principales frameworks full-stack (Next.js, Nuxt, Astro...) puede que lo hagan posible!

