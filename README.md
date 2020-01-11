![image](https://user-images.githubusercontent.com/5546996/72196611-d39ae200-345c-11ea-9359-538c36db90b8.png)

# JavaScript Rising Stars

A complete overview of the JavaScript landscape in 2018: trends about front-end and Node.js frameworks, React, Vue and Angular ecosystems, tooling, testing, GraphQL...

Available in English, Chinese, Spanish and French.

## Credits

### Team members

- [Frank Xu](https://github.com/frankyxhl)
- [Javier Valencia](http://www.jvalen.com)
- [Michael Rambeau](https://michaelrambeau.com)
- [Nobuhiro Uchiyama](https://github.com/azukiwasher)
- [Sacha Grief](http://sachagreif.com/)
- [Seognil LC](https://github.com/seognil)
- [Shigeto Yatani](https://www.facebook.com/vanxx2)
- [王仕军](https://github.com/wangshijun)
- [Yohei Ice](https://github.com/meltedice)

### Stack

- Built with [Gatsby](https://www.gatsbyjs.org/)
- Hosted on [Netlify](https://www.netlify.com/)
- Domain provided by [js.org](https://dns.js.org/)

## How to contribute?

Requirements: Node.js 8.4

- Clone the repo
- Install the dependencies: `npm install`
- Start the development server: `npm start`
- Check the following URL: `http://localhost:8000/`
- Update the comments in your language
- Commit and push, the development version of site will be automatically rebuilt on Netlify.com

---

**troubleshooting**

If you catch up a build failure while using `yarn` on local development,  
Try this:  
`yarn add gatsby@~1.9` then `yarn start`  
But **DO NOT** commit the change of `package.json` or other config files, because this project is using Netlify auto building, and dependencies were frozen on purpose.

---

Files to translate are located files are located in the `i18n` folder.

```
i18n
├── 2016
├── 2017
│   ├── categories
│   │   ├── all
│   │   │   ├── en.md
│   │   │   ├── ja.md
│   │   │   └── zh.md
│   │   ├── build
│   │   │   ├── en.md
│   │   │   ├── ja.md
│   │   │   └── zh.md
│   │   ├── compiler
│   │   │   ├── en.md
│   │   │   ├── ja.md
│   │   │   └── zh.md
│   ├── conclusion
│   │   ├── en.md
│   │   ├── ja.md
│   │   └── zh.md
│   ├── introduction
│   │   ├── en.md
│   │   ├── ja.md
│   │   └── zh.md
│   └── messages
│       ├── en.yaml
│       ├── index.js
│       ├── ja.yaml
│       └── zh.yaml
└── messages.js
```
