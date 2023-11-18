FROM node:latest
LABEL authors="yunikon"


WORKDIR /app
COPY package.json index.js pnpm-lock.yaml sequelize.js ./
COPY commands ./commands
RUN npm install -g pnpm && pnpm install --loglevel verbose


CMD ["node", "index.js"]