---
id: build  
language: fr
---

Pour construire une application web moderne, les développeurs ont besoin d'un outil capable d'assembler et de transformer diverses parties (_templates_, code JavaScript écrit dans un dialecte donné, styles...) et d'optimiser le tout dans le but de rendre l'application web performante. Ce sont ces outils de construction que nous analysons ici.

La plus grosse surprise de l'année est l'arrivée de {parcel} qui détrône {webpack}, le roi incontesté de la catégorie.

Lancé en août 2017, {parcel} a connu un départ fulgurant avec 14 000 étoiles ajoutées sur GitHub en l'espace de quelques mois.

Alors que {webpack} est basé sur tout un éco-système d'extensions appelées _loaders_, {parcel} promet un usage extrêmement simple, sans aucune configuration nécessaire.

Ne faisons pas dire à ces chiffres ce qu'ils ne disent pas, {webpack} reste extrêmement populaire et est inclus par de nombreux autres projets, en particulier {gatsby} et {create-react-app}.

Alors que {parcel} et {webpack} ciblent les développeurs d'applications web, {rollup}, cible les créateurs de "librairies".

C'est ainsi que les créateurs de {react} ont migré leur processus de construction de {browserify} vers {rollup} en 2017, comme expliqué dans [cet article issu du site officiel](https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html).

Tout comme {parcel}, {poi} mise sur une grande simplicité d'usage mais ne concerne (pour l'instant) que les projets créés avec {react}, {vuejs} ou {preact}.

