FROM node:17-alpine

WORKDIR /app

COPY . .

RUN ls -lh

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start:dev"]

