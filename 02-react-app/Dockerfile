FROM node:19.2-alpine3.16 as dev
WORKDIR /app
COPY package.json ./
RUN yarn install
CMD ["yarn", "start"]

