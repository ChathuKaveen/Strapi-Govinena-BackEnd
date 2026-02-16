FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm i strapi-provider-email-resend

COPY . .

RUN npm run build

EXPOSE 1337

CMD ["npm", "run", "develop"]