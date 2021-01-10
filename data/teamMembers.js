import React from "react";

const size = 75;

const getAvatarURL = (userId) =>
  `https://avatars0.githubusercontent.com/u/${userId}?v=3&s=${size}`;

// * ---------------- authors

const authorWorks = {
  "Sacha Grief": [2016, 2017, 2018, 2019],
  "Michael Rambeau": [2016, 2017, 2018, 2019, 2020],
};

const authors = {
  "Sacha Grief": {
    name: "Sacha Grief",
    url: "http://sachagreif.com",
    avatar: getAvatarURL("358832"),
    bio1: (
      <span>
        Author of <a href="http://discovermeteor.com/">Discover Meteor</a> and
        creator of <a href="http://vulcanjs.org/">Vulcan</a>, a React+GraphQL
        open-source framework.
      </span>
    ),
  },
  "Michael Rambeau": {
    name: "Michael Rambeau",
    url: "https://michaelrambeau.com",
    avatar: getAvatarURL("5546996"),
    bio1: (
      <span>
        Creator of <a href="https://bestofjs.org">Best of JS</a>
      </span>
    ),
  },
};

// * ---------------- translators

const translationWorks = {
  2016: {
    zh: ["Wang Shijun"],
    ja: ["Nobuhiro Uchiyama", "Yohei Ice", "Shigeto Yatani"],
  },
  2017: {
    zh: ["Frank Xu", "Wang Shijun"],
    ja: ["Nobuhiro Uchiyama", "Yohei Ice"],
    fr: [],
    es: ["Javier Valencia"],
    id: ["Lobot Hijau"],
  },
  2018: {
    zh: ["Seognil LC"],
    es: ["Javier Valencia"],
  },
  2019: {
    zh: ["Seognil LC"],
    es: ["Javier Valencia"],
  },
};

const translators = {
  "Nobuhiro Uchiyama": {
    name: "Nobuhiro Uchiyama",
    url: "https://github.com/azukiwasher",
    avatar: getAvatarURL("442462"),
    bio1: "A generic programmer and linguist living in Osaka from Sapporo.",
    bio2: "素朴なプログラマで言語マニア。札幌生まれの大阪在住。",
  },
  "Yohei Ice": {
    name: "Yohei Ice",
    url: "https://github.com/meltedice",
    avatar: getAvatarURL("557001"),
    bio1: "Web application developer (Rails, React, ...)",
  },
  "Shigeto Yatani": {
    name: "Shigeto Yatani",
    url: "https://www.facebook.com/vanxx2",
    avatar: getAvatarURL("572205"),
    bio1:
      "Node.js, 美味しいご飯, 酒, 料理, バスケ, ヨガ, エレクトロニカ, DJ, 園芸, DIY, プチアウトドア, 六甲山",
  },

  "Wang Shijun": {
    name: "王仕军 (Wang Shijun)",
    url: "https://zhuanlan.zhihu.com/feweekly",
    avatar: getAvatarURL("719985"),
    bio1: (
      <span>
        <a href="https://zhuanlan.zhihu.com/feweekly">前端周刊</a>创办者
      </span>
    ),
  },
  "Frank Xu": {
    name: "Frank Xu",
    url: "https://github.com/frankyxhl",
    avatar: getAvatarURL("309457"),
    bio1: "全栈开发者、Lisp爱好者, 目前旅居日本",
    bio2: "Lisp lover, full stack developer living in Japan",
  },
  "Seognil LC": {
    name: "Seognil LC",
    url: "https://github.com/seognil",
    avatar: getAvatarURL("5526096"),
    bio1: "略懂点 JavaScript，做过点翻译工作",
    bio2: (
      <span>
        写了{" "}
        <a href="https://fe.rualc.com/note/fe-development-cookbook.html">
          前端开发入门指南
        </a>{" "}
        和{" "}
        <a href="https://fe.rualc.com/note/js-foundation.html">
          JavaScript 学习指南
        </a>
      </span>
    ),
  },

  "Javier Valencia": {
    name: "Javier Valencia",
    url: "http://www.jvalen.com",
    avatar: getAvatarURL("4639830"),
    bio1: (
      <span>
        Creator of <a href="https://www.pixelartcss.com/">Pixel Art React</a>
      </span>
    ),
  },
  "Lobot Hijau": {
    name: "Lobot Hijau",
    url: "http://lobothijau.com/",
    avatar: getAvatarURL("34962330"),
    bio1: "?",
  },
};

// * ---------------- export

export default {
  authorWorks,
  authors,
  translationWorks,
  translators,
};
