############################
# @author Elias De Hondt   #
# @see https://eliasdh.com #
# @since 01/01/2025        #
############################
FROM node:alpine

LABEL maintainer "Passive Aggressive API"
LABEL version "1.0"
LABEL description "This is a simple Node.js application that serves as a passive aggressive API."
LABEL org.opencontainers.image.description "This is a simple Node.js application that serves as a passive aggressive API."

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]