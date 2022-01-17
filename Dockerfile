FROM node:16-alpine3.14

RUN mkdir -p /home/node/app/ && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node . .

EXPOSE 8080
CMD ["npm", "start"]
