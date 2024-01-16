[![image](https://github.com/bestofjs/javascript-risingstars/blob/develop/public/img/2023/en/rising-stars.png?raw=true)](https://risingstars.js.org/)

# JavaScript Rising Stars

An overview of the JavaScript landscape in 2023: trends about frontend, backend and fullstack frameworks, React and Vue.js ecosystems, build tools, testing, state management, GraphQL...

## Team members

- [Alexey Pyltsyn](https://lex111.ru/)
- [Benjamin Blackwood](https://twitter.com/B_Blackwo)
- [Frank Xu](https://github.com/frankyxhl)
- [Evan Trujillo](https://github.com/Evomatic)
- [Javier Valencia](http://www.jvalen.com)
- [L1lith](https://github.com/L1lith)
- [Michael Rambeau](https://michaelrambeau.com)
- [Mihai Badescu](https://github.com/zawarudo)
- [Misol Goh](https://github.com/melancholy14)
- [Nobuhiro Uchiyama](https://github.com/azukiwasher)
- [Oh TaeJun](https://github.com/rewrite0w0)
- [Rana Kualu](https://github.com/NurseAngel)
- [Sacha Grief](http://sachagreif.com/)
- [Sebastien Lorber](https://sebastienlorber.com/)
- [Seognil LC](https://github.com/seognil)
- [Shigeto Yatani](https://www.facebook.com/vanxx2)
- [王仕军](https://github.com/wangshijun)
- [Yohei Ice](https://github.com/meltedice)

Special thanks:

- The content of 2021 and 2022 editions of the Rising Stars was double checked by [L1lith](https://github.com/L1lith).
- [Benjamin Blackwood](https://twitter.com/B_Blackwo) was the co-author of the 2020 edition.
- [Sacha Grief](http://sachagreif.com/) did a lot of work about the design and the content of the first editions (2016, 2017, 2018, 2019).

## Stack

- Built with [Astro](https://astro.build/)
- Hosted on [Vercel](https://vercel.com/)
- Domain provided by [js.org](https://dns.js.org/)

## How to contribute?

Requirements: [PNPM](https://pnpm.io/), Node.js 18+

- Clone the repo
- Install the dependencies: `pnpm install`
- Start the development server: `pnpm run dev`
- Check the following URL: `http://localhost:4321/`
- Update the comments in your language (see below)

## Translations

There are 2 types of file to translate:

- markdown content inside the `src/content/comments` folder (handled using Astro [content collection](https://docs.astro.build/en/guides/content-collections/)) feature)
- key/values messages stored as JSON in the `i18n/messages` folder

```
./i18n
└── messages
    ├── 2024
    │   └── en.json
    └── common
        ├── en.json
```

```
./src
└── content
   └── comments
       └── 2024
           └── en
               ├── categories
               │   ├── all.md
               │   ├── build.md
               │   ├── framework.md
               │   ├── nodejs-framework.md
               │   ├── react.md
               │   └── vue.md
               ├── conclusion.md
               ├── guests
               │   ├── atinux.md
               │   ├── bblackwo.md
               │   └── leerob.md
               └── introduction.md
```
