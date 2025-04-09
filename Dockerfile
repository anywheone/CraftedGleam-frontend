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

# ポート3000を開放
EXPOSE 3000

# 開発サーバーを起動するコマンド
CMD ["npm", "start"]
