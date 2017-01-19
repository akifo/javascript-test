# javascript-test

**注意: 勉強中の資料なので、参考にしないでください。**

## 種類

- ブラウザで動くJavaScript
- サーバーで動くJavaScript

大きく分けて、このふたつが存在する。

- EcmaScript
- Node.js

この二つは同じようで、違うもの。
使える機能がそれぞれ違い、またバージョンによっても異なる。



## Promise

## Iterators and Generators

> イテレーターとは、一連の処理中において現在の処理位置を把握しつつ、コレクション中の項目へ一つずつアクセスする方法を備えたオブジェクトのことです。
JavaScript においては、イテレーターは一連の処理中の次の項目を返す next() メソッドを提供するオブジェクトです。
このメソッドは done と value という 2 つのプロパティを持つオブジェクトを返します。

## npm と bower

- npmはサーバー側
- bowerはブラウザ側

パッケージを公開する際に、つまったこと。

- npmはローカルから、公開コマンドを打つと、そのバージョンが公開される。
- bowerは一度登録すると、Githubのタグと連動するので、都度公開コマンドを打つ必要はない。

つまり、普段、開発を行うときには、

```bash
# gitのタグを更新し、package.jsonも更新し、それらをコミット
npm version patch
```

あとは、レポジトリ本体とタグをリモートにpushすればOK。


```bash
# レポジトリ本体をpush
git push origin master
# タグをpush
git push origin v1.0.3
```


```bash
# npmに公開
npm publish
```
