---
id: nodejs-framework
language: es
---

Los principales frameworks UI tienen su propio "meta framework" para crear aplicaciones escalables y modernas, proporcionando funcionalidades como routing, server-side rendering, generación estática de páginas, optimización de builds para producción...

- React tiene a {nextjs}, el ganador de esta categoría, que podemos considerar como pionero en este ámbito
- Vue.js tiene a {nuxt}, ahora dividido en dos versiones para Vue.js v2 y v3
- Svelte tiene a {sveltekit}

{remix}, un framework full stack para crear aplicaciones React que debuta en esta categoría. Es una de la grandes historias del año. Fue creado por los autores de [React Router](https://reactrouter.com/) y no estuvo disponible gratuitamente hasta Octubre.

El proyecto ha sido muy popular (recibió 3M$ en [seed funding](https://remix.run/blog/seed-funding-for-remix) ¡algo que ayudó mucho!) desde que se hizo público. Su lema es claro: "Fundamentos Web, UX Moderno" ya que su API sigue tanto como puede los estándares web (respuestas HTTP, envíos de formularios...).

Aquí tenemos dos ejemplos que me fascinaron:

Para gestionar envíos de formularios, podemos simplemente...usar la forma normal para envíar formularios. Parece algo trivial sin embargo los desarrolladores estamos acostumbrados a usar `event.preventDefault()` para evitar el envío de un formulario por ejemplo. La mejor parte es que nos permite trabajar con formularios aunque JavaScript esté deshabilitado! Es realmente interesante ver como Remix revisa comportamientos que damos por hecho, "remixing" viejos principios con un nuevo enfoque que se centra tanto en el usuario como en el desarrollador.

También maneja rutas anidadas de manera inteligente, siendo capaz de cargar solo los datos necesarios por los componentes que forman parte de una página de manera eficiente, en vez de generar una cascada de llamadas HTTP, que normalmente nos llevan a mostrar muchos indicadores de carga en la pantalla.

A diferencia de estos meta frameworks, en segunda posición, {nest} es el líder de los frameworks server-side Node.js más convencionales, no anclado a una librería UI.

Y finalmente en tercera posición, {strapi} lidera a los "headless CMS", aquellas aplicaciones que proporcionan un rico panel de administración que permite a los usuarios controlar datos y una API moderna. Su última versión (4) proporciona un design system basado en una librería de componentes React.