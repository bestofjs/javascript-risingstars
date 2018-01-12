Les "compilateurs" de cette catégorie sont des outils qui transforment du code dans un langage donné en code JavaScript standard, capable de s'exécuter dans n'importe quel navigateur Web, ou tout environnement supportant JavaScript.

On peut avoir besoin d'un tel compilateuur pour 2 raisons:

* Pour profiter des dernières avancées du langage JavaScript (spécifications ES6 et ES7) tout en produisant du code compatible avec la majorité des navigateurs web. C'est ce qui fait le succès de {babel}, utilisé par un très grand nombre de projets Web.
* Pour ajouter de nouvelles fonctionnalités au langage, en particulier les "types statiques" qui existent dans des langages institutionnels tels que Java ou C#.

Le langage JavaScript ne propose que des types "dynamiques", cette flexibilité peut poser problème, en particulier dans le cadre de gros projets.

Dans le but d'offrir aux développeurs web le confort et la sécurité des "types statiques", 2 concurrents s'opposent farouchement: {typescript}, créé par MicroSoft et {flow}, créé par Facebook, et utilisé en interne par Facebook sur de nombreux projets.

{typescript}, largement en tête en 2016, conserve l'avantage sur son rival en 2017.
De nombreux projets utilisent {typescript}, à commencer par {angular} et l'intégration facile avec l'éditeur de texte {vs-code} joue en sa faveur.

Pour mieux comprendre les différences, nous vous recommandons cet article de [James Kyle](https://github.com/thejameskyle): [A Comparison Between Adopting Flow or TypeScript](https://medium.com/the-thinkmill/adopting-flow-typescript-3549a3a36d51)
