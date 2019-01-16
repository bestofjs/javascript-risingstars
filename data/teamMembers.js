import React from 'react'

const size = 75

const getAvatarURL = (userId) => `https://avatars0.githubusercontent.com/u/${userId}?v=3&s=${size}`

const team = [
  {
    name: 'Nobuhiro Uchiyama',
    url: 'https://github.com/azukiwasher',
    avatar: getAvatarURL('442462'),
    bio1: 'A generic programmer and linguist living in Osaka from Sapporo.',
    bio2: '素朴なプログラマで言語マニア。札幌生まれの大阪在住。',
    role: 'translation',
    language: 'ja',
    years: [2016, 2017]
  },
  {
    name: 'Yohei Ice',
    url: 'https://github.com/meltedice',
    avatar: getAvatarURL('557001'),
    bio1: 'Web application developer (Rails, React, ...)',
    role: 'translation',
    language: 'ja',
    years: [2016, 2017]
  },
  {
    name: 'Shigeto Yatani',
    url: 'https://www.facebook.com/vanxx2',
    avatar: getAvatarURL('572205'),
    bio1:
      'Node.js, 美味しいご飯, 酒, 料理, バスケ, ヨガ, エレクトロニカ, DJ, 園芸, DIY, プチアウトドア, 六甲山',
    role: 'translation',
    language: 'ja',
    years: [2016]
  },
  {
    name: '王仕军 (Wang Shijun)',
    url: 'https://zhuanlan.zhihu.com/feweekly',
    avatar: getAvatarURL('719985'),
    bio1: (
      <span>
        <a href="https://zhuanlan.zhihu.com/feweekly">前端周刊</a>创办者
      </span>
    ),
    role: 'translation',
    language: 'zh',
    years: [2016, 2017]
  },
  {
    name: 'Frank Xu',
    url: 'https://github.com/frankyxhl',
    avatar: getAvatarURL('309457'),
    bio1: '全栈开发者、Lisp爱好者, 目前旅居日本',
    bio2: 'Lisp lover, full stack developer living in Japan',
    role: 'translation',
    language: 'zh',
    years: [2017]
  },
  {
    name: 'Sacha Grief',
    url: 'http://sachagreif.com',
    avatar: getAvatarURL('358832'),
    bio1: (
      <span>
        Author of <a href="http://discovermeteor.com/">Discover Meteor</a> and
        creator of <a href="http://vulcanjs.org/">Vulcan</a>, a React+GraphQL
        open-source framework.
      </span>
    ),
    role: 'author',
    years: [2016, 2017, 2018]
  },
  {
    name: 'Michael Rambeau',
    url: 'https://michaelrambeau.com',
    avatar: getAvatarURL('5546996'),
    bio1: (
      <span>
        Creator of <a href="https://bestofjs.org">Best of JavaScript</a>
      </span>
    ),
    role: 'author',
    years: [2016, 2017, 2018]
  },
  {
    name: 'Javier Valencia',
    url: 'http://www.jvalen.com',
    avatar: getAvatarURL('4639830'),
    bio1: (
      <span>
        Creator of <a href="https://www.pixelartcss.com/">Pixel Art React</a>
      </span>
    ),
    role: 'translation',
    language: 'es',
    years: [2017, 2018]
  },
  {
    name: 'Lobot Hijau',
    url: 'http://lobothijau.com/',
    avatar: getAvatarURL('34962330'),
    bio1: '?',
    role: 'translation',
    language: 'id',
    years: [2017]
  }
]

export default team
