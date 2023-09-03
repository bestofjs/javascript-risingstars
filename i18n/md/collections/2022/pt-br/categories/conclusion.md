---
id: conclusion
language: pt-br
---

2022 começou com o caos quando dois pacotes muito populares foram intencionalmente quebrados por seu criador: [Faker.js e colors.js sabotados](https://www.theregister.com/2022/01/10/npm_fakerjs_colorsjs/).

A fragilidade do enorme ecossistema foi demonstrada novamente quando {lerna} , uma ferramenta popular para mono-repos, foi declarada como não mantida... até que Nrwl, a empresa por trás do {nx}, anunciou que estava assumindo a administração de Lerna.

JavaScript está devorando o mundo, você deve ter ouvido falar desta profecia de 2009:

> Qualquer aplicação que possa ser escrita em JavaScript, eventualmente será escrita em JavaScript

..._ou no TypeScript_ poderíamos adicionar 13 anos depois, já que o TypeScript está se tornando o padrão de fato para escrever JavaScript (suporte de primeira classe por {deno} e {bun}, configuração padrão de Next.js, suporte pronto para uso por Vite...).

O lugar ocupado pelo JavaScript na base de código e nas ferramentas apresenta alguns problemas, tanto para desenvolvedores quanto para usuários finais:

- os tempos de construção ficam fora de controle em grandes bases de código
- o tamanho médio do JavaScript continua aumentando, levando a um desempenho ruim

Em 2022, vimos grandes inovações para resolver esses dois tipos de problemas em diferentes camadas da pilha.

As ferramentas melhoraram com estas soluções:

- {bun}, o campeão do ano, adota uma abordagem drástica para acelerar as instalações e os tempos de construção
- {rome} é agora um linter e um formatador que pretende ser a única ferramenta para gerenciar aplicações escritas em JS/TS.
- A ferramenta de construção {vite}

Pelo desempenho no navegador, competem diferentes padrões:

- Estruturas JavaScript de linha de base zero para fornecer quase nenhum JS ao navegador ({qwik} está liderando o ataque)
- [Hidratação parcial](https://ajcwebdev.com/2021/11/22/what-is-partial-hydration-and-why-is-everyone-talking-about-it/) para fornecer ilhas de interatividade às páginas estáticas ({astro})
- Componentes do React Server (implementados por {nextjs} 13 e {gatsby}) para delegar mais trabalho no lado do servidor.
- A arquitetura [Progressively Enhanced Single Page Apps](https://www.epicweb.dev/the-webs-next-transition)  implementada pela {remix} fornece excelente DX e desempenho no navegador sem comprometer qualquer comportamento dinâmico.

Não existe solução mágica para resolver esses problemas, pois o espectro de "páginas" estáticas a "aplicativos" totalmente dinâmicos é grande.

O cenário do JavaScript já foi muito fragmentado: vários navegadores de um lado, Node.js com seu próprio sistema de módulos CommonJS e suas próprias APIs do outro lado.

Com a ascensão da computação de ponta, há agora uma forte tendência de usar em todos os lugares o mesmo subconjunto de APIs padronizadas (busca, solicitação e resposta HTTP...).

Nosso escritor convidado Lee Robinson escreveu um ótimo resumo dessa tendência no artigo [Por que estou otimista sobre o futuro do JavaScript](https://leerob.substack.com/p/why-im-optimistic-about-javascripts).

E partilhamos o optimismo da sua conclusão!

> Que momento incrível para ser um desenvolvedor web.


