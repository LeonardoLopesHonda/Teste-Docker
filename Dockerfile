FROM node:18-alpine3.15

WORKDIR /app

COPY package*.json ./

RUN npm i
# RUN npm i -g serve
# RUN npm run build
# RUN rm -fr node_modules

COPY ./ ./

ENV PORT=8081

EXPOSE 8081

CMD [ "npm", "start" ]