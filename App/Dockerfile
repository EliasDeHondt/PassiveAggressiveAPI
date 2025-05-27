############################
# @author Elias De Hondt   #
# @see https://eliasdh.com #
# @since 01/01/2025        #
############################
FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]