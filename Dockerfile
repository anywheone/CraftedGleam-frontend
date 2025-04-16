# Node.jsの公式イメージを使用
FROM node:18

# 必要なパッケージを先にインストール（apt系）
RUN apt-get update && apt-get install -y curl \
  && rm -rf /var/lib/apt/lists/*

# 作業ディレクトリの作成
WORKDIR /app

# 依存関係をインストールするために package.json と package-lock.json をコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Viteのデフォルトポートを開放
EXPOSE 5173

# 開発サーバーを起動
CMD ["npm", "run", "dev"]
