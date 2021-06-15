FROM node:16-alpine

ENV  APP_HOME="/usr/src/app"
WORKDIR $APP_HOME

COPY package*.json ./

RUN npm install -g typescript
RUN npm install
COPY . .
RUN tsc
EXPOSE 3000

ENTRYPOINT ["npm", "start"]
