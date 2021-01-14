---
id: ssg  
language: ja
---

静的サイトジェネレータ（"Static Site Generators" 略してSSG） は .html, .css, JavaScriptといったWebサイトを構成するファイル一式を生成してくれるツールです。生成されたファイルは、ApacheやNginxのシンプルなWebサーバーへ悩み無用でデプロイできます。データベースやWebアプリケーションフレームワークのセットアップも不要です。例えば、SSGのひとつである {gatsby} は自らをこう表現しています:

> 1995年ころのようにサイトを構築する。

静的なWebサイトは高速、堅牢で、メンテナンスも容易です。

SSGが人気なのは、静的なWebサイトを無料でホスティングできるサービスが多いことも要因でしょう。

* [GitHub pages](https://pages.github.com/)
* [GitLab pages](http://pages.gitlab.io/)
* [Netlify](https://www.netlify.com/)
* [Surge](https://surge.sh/)
* [Now static](https://zeit.co/blog/now-static)

#### {hexo}

2016年でもっとも人気のあったSSGがNode.jsでビルドする {hexo} です。とてもよくできたSSGで、WordpreessのようなCMSに近く、ブログの構築に利用できます。i18nプラグインを含め、多くのフィーチャを提供しています。

#### {gatsby}

ニューカマーの {gatsby} のソリューションは非常に興味深いものです。静的htmlファイルを生成するのにReactのエコシステムを利用しており、競合と一線を画しています。Reactコンポーネントを取り込んでいることからもわかるように、Markdownやサーバーサイドレンダリングをサポートしており、パワフルな仕上がりになっています。

