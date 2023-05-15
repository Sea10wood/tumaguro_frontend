#*未完成！！！！

    ##環境構築

        -１. ローカル環境の構築
        -WSLで以下のコマンドを実行してローカルにリポジトリをクローンしてください。
        -'git clone git@github.com:Sea10wood/tumaguro_frontend.git'

        -2.フォルダに移動
        -'cd tumaguro_frontend.git'

        -3.ライブラリのインストール(今回はnpmを使用します。)
        -'npm install --save next react react-dom three @mui/material @emotion/react @emotion/styled @mui/icons-material tailwindcss @react-three/drei @react-three/fibe eslint '


        -4.ここまでインストールしたら、以下のコマンドを実行する。
        -npm run dev
        -http://localhost:3000　にアクセス



    ##ローカルで実行
        -'npm run dev'　　　　　
        -**開発インスタンスをホット リロード（プログラムの変更を即座に画面に反映させる機能）、ファイル監視、タスク再実行で実行します。**

        -'npm run build'
        -**プロジェクトをコンパイルします。（作成したフローが処理可能な手順で記述されているかどうかを確認すること）**

        -'npm start'
        -**アプリを実稼働モードで起動します。**




    ##ブランチに関して

        - developブランチから生やしてください

            （git checkout developでdevelopに移動してgit checkout -b [ブランチ名]。（-bで移動とセットでブランチの作成も出来る）。現在のブランチはgit branchで確認できる。）

        - ブランチの命名規則

          ブランチは基本以下のように命名してください
              
              `[feature | fix]/[issue番号]-[issue内容]`
              例えば issue 番号が`#14`で issue の内容が`headerの作成`だった場合以下のようになります

              `feature/#14-header`
              また不具合修正の場合`feature`の部分が`fix`となります





    ##コミットメッセージ規則
          -コミットメッセージは以下のように記述してください

          `[add | change | fix | delete]:[メッセージ] [issue番号]`

          例えば issue 番号が`#14`で issue の内容が`headerの作成`だった場合以下のようにしてください

          `add:ヘッダーの追加 #14`

          機能追加の場合は`add`,機能変更の場合は`change`,不具合修正の場合は`fix`,機能削除の場合は`delete`となる。

          またメッセージの部分はわかりやすく簡潔にしてください。





      #更新内容を統合

          - commit/pushを完了させる
          - 'git commit -m <コミットメッセージ>'
          - 'git push origin [ブランチ名]'


          - **developブランチ**にプルリクエストを出す
          - （GitHub上で右上の緑色のCompare & pull requestボタンをクリック＋どういった変更を加えたのかを説明する内容を記載）


          - mergeする


          - **大きな更新が一段落したタイミングで**developブランチをmasterブランチにmergeする


          - **masterブランチに直接mergeしないこと!!**




  ##Gitについて

      -'git fetch origin master'
      -リモートリポジトリの状態を、ローカルの追跡ブランチに反映させる

      -'git checkout -b develop'
      -今いるブランチからdevelopブランチに移動する

      -'git pull origin develop'
      -ローカルリポジトリの状態を追跡ブランチであるorigin/masterにコピーしてきて,developブランチの追跡ブランチ(origin/develop)をローカルのdevelopブランチにマージしてくる

      -'git pull origin develop'
      -Featureブランチ(追加したブランチ)にMainブランチの変更がまず入り、そこにFeatureブランチの変更が加えられます。コミット(追加・変更したファイルをGitに登録すること)はそのまま使われ、また必ずマージコミット（複数の履歴の流れを合流させること）が追加されます。

      -'git checkout ブランチ名'
      -ブランチの切り替え

      -'git git merge origin/master'
      -masterブランチの追跡ブランチ(origin/master)をローカルのmasterブランチにマージする

      -'git pull origin master'
      -(fetch+merge)

      -'git reset --hard HEAD'
      -直前のcommitまで戻る（fetchでエラーがある時）

      -'git merge --abort'
      -'git reset --hard HEAD'
      -pullによって起きたコンフリクトを解消したい時









This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
