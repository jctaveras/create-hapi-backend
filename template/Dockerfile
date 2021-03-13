FROM node:12

WORKDIR /server

COPY package.json .
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]