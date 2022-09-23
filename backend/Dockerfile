FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usrc/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]