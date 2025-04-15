# Node.jsの公式イメージを使用
FROM node:18

# 作業ディレクトリの作成
WORKDIR /app

# 必要な依存関係をインストールするために package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコンテナ内にコピー
COPY . .

# ポート5173を開放（Viteのデフォルトポート）
EXPOSE 5173

# 開発サーバーを起動するコマンド
CMD ["npm", "run", "dev"]

# curlをインストール
RUN apt-get update && apt-get install -y curl