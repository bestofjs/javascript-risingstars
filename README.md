[![image](public/img/2024/en/rising-stars.png)](https://risingstars.js.org/)

# JavaScript Rising Stars

An overview of the JavaScript landscape in 2024: trends about frontend, backend and fullstack frameworks, React and Vue.js ecosystems, build tools, AI tools, testing, state management...

## Contributors

- [Alexey Pyltsyn](https://lex111.ru/)
- [Benjamin Blackwood](https://twitter.com/B_Blackwo)
- [Frank Xu](https://github.com/frankyxhl)
- [Evan Trujillo](https://github.com/Evomatic)
- [Jack Huan](https://github.com/HuanBaby1314)
- [Javier Valencia](http://www.jvalen.com)
- [Jusang Kim](https://github.com/kimjusang)
- [Hamid Dinar](https://github.com/codinHamster)
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

Requirements: [PNPM](https://pnpm.io/), Node.js 20+

- Clone the repo
- Install the dependencies: `pnpm install`
- Start the development server: `pnpm run dev`
- Check the following URL: `http://localhost:4321/`
- Update the comments in your language (see below)

## Translations

There are 2 types of file to translate:

- markdown content inside the `src/content/comments` folder, used for comments related to each category: `introduction.md`, `react.md`...
- key/values messages stored as JSON in the `src/content/messages` folder, used for simple strings used in the UI: `en.json`, `ja.json`...

File system overview:

```
./src/content
├── categories
├── comments
│   └── 2024
│       ├── en
│       │   ├── categories
│       │   └── guests
│       ├── es
│       │   ├── categories
│       │   └── guests
│       └── zh
│           ├── categories
│           └── guests
├── contributors
└── messages
    ├── 2024
    └── common
```
