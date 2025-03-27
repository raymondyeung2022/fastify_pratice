# fastify_pratice
 
Fastify API練習用リポジトリ

・「Items」はJSONファイルでデータを保存するが、データ更新できない

・「Users」はMySQLでデータを保存して、データ更新できる

環境:

・Ubuntu-22.04 LTS

・Docker Engine 27.3.1

・Node 22.13.1

・NVM 0.39.3

・NPM 10.9.2

・VSCode拡張機能: REST Client (Ubuntu-22.04 LTSにインストールする)

他のバージョンは多分大丈夫ですが、ビルドの問題を避けたいように、上記のバージョンがオススメ

前提条件:

1. 上記のOS / ツール全てインストールしていること

2. 以下のコマンドはUbuntu-22.04 LTSで実行する

Docker指定バージョンインストール:

https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository

ステップ1＆2に従ってインストールする

Node指定バージョンインストール:

`nvm install 22`

`nvm use 22`

環境構築手順:

1. docker compose up -d

2. ルートディレクトリに「npm run dev」を実行する

3. VSCodeで「test.http」を開いて、各APIエンドポイントを実行する

4. 問題が無ければ完成！

