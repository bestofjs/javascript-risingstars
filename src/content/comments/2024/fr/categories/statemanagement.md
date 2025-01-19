---
id: statemanagement
language: fr
---

{zustand} continue son ascension fulgurante en tant que librairie de gestion d'état pour React, ainsi que React Native et au-delà. Zustand est la librairie de gestion d'état "épurée" et il est clair que les gens en sont friand.

Si nous examinons les résultats par style de gestion d'état, des tendances intéressantes émergent. Zustand, {pinia} et {redux}, et {boardgame} sont unidirectionnels : on définit l'état et les actions qui le modifient. Avec {jotai}, {nano-stores}, et {Legend-State} on définit l'état sous forme d'atomes et on crée des atomes calculés qui dépendent d'autres atomes. {valtio} est une librairie de gestion d'état bidirectionnelle. Et X-State est une librairie de machine à états.

Une conclusion que nous pouvons tirer de ces résultats est que la gestion d'état formelle de type Redux (mais pas la librairie Redux elle-même) continue d'être le style de gestion d'état le plus populaire. Le modèle atomique fait également de grands progrès (Recoil, la librairie atomique originale, est juste en dehors de ce top 10).

{XState} ne doit cependant pas être négligé. Lorsqu'il s'agit d'applications complexes, les machines à états sont un excellent choix car elles modélisent votre application en une série stricte d'états et de transitions entre états. Si vous ne l'avez pas encore essayé, l'éditeur interactif et le simulateur pour X-State sont à voir absolument.

{Boardgame} and {Tinybase} sont des ajouts très intéressants dans le top 10. Boardgame est spécifiquement conçu pour créer des jeux. Et Tinybase est orienté vers le stockage local des données et leur synchronisation avec les services backend. Ces deux librairies sont hautement spécialisées, ce qui pourrait indiquer une tendance. Des problèmes tels que la synchronisation des premières données locales avec les services backend est un problème complexe, donc avoir des librairies (comme Tinybase et Legend State) qui se concentrent spécifiquement sur cela est une bonne chose.

Une chose que je ne vois pas dans cette liste, ce sont les signaux. Je ne sais pas si c'est parce que les gens attendent que la proposition TC39 soit finalisée et largement adoptée, ou parce que c'est intégré dans des frameworks comme {Solid}, {Svelte}, et {Qwik}. Les signaux n'ont peut-être pas atteint le top 10, mais ils restent une excellente façon de modéliser l'état efficacement.

Les prochaines années s'annoncent passionnantes dans le domaine de la gestion d'état pour React, Vue, JavaScript et au-delà.
