Il n'y a toujours pas de consensus à propos de la meilleure façon de manipuler les styles d'une application construite avec React.

Il est possible d'utiliser des ensembles de composants React qui intègrent déjà leurs propres styles: c'est la cas de solutions telles que {material-ui} ou {ant-design}. Cette solution est très pratique à condition que les besoins soient plutôt standards et ne nécessitent pas trop de personnalisation.

Il est aussi possible d'opter pour l'intégration d'une feuille de styles à l'ancienne, en utilisant le très célèbre {bootstrap} ou encore {bulma}, et en jouant avec la propriété `className` des composants pour associer les bons styles.

Mais dans ce cas les composants dépendent d'un contexte global, ils ne sont plus atomiques, ce qui rend le partage, les tests plus difficiles. Sans parler des risques de confilt entre les composants qui partagent des styles communs... jusqu'à ce que un besoin de personnalisation fasse jour. Un casse-tête bien connu des développeurs Web !

C'est la raison pour laquelle une nouvelle catégorie de solutions a émergé récemment: "CSS dans JavaScript" ou "Feuilles de styles en JavaScript".

[Mark Dalgleish](http://markdalgleish.com/), l'auteur de {css-modules}, a écrit un excellent article qui explique l'intérêt de cette approche: [Un language de style unique](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660).
