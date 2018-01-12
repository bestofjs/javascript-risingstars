{jest}, créé par Facebook pour tester les applications React, a évolué très vite au cours des derniers mois (plus de 22 versions majeurs sont sorties !) et s'est imposé comme le framework de test le plus populaire en 2017.

{jest} est devenu une solution de test complète qui peut être utilisé aussi bien côté client que côté serveur.

Ses points forts:

* Pas de configuration nécessaire
* Très confortable du point de vue du développeur (Jest détecte les changements sur les fichiers de manière intelligente, les compte-rendus d'exécution sont très lisibles...)
* Syntaxe similaire à celle de {mocha}, en particulier les mots-clefs `describe` et `it` sont connus de nombreux développeurs.
* Pas de librairie supplémentaire pour écrire les tests, tout est inclus dans Jest.
* Possibilité unique d'enregistrer automatiquement les réponse attendues aux futurs tests (_snapshots_)

{ava}, le projet numéro 1 l'an dernier, glisse en seconde position cette année.

C'est l'un des innombrables projets de [Sindre Sorhus](https://github.com/sindresorhus) qui l'utilise comme solution de test pour ses propres projets.

Par rapport à Jest, {ava} est une solution plus légère qui privilégie les performances en exécutant les tests in parallèle, et utilise une syntaxe proche de standards utilisés par des solutions telles que {tape}.
