FROM node:18.17.1

WORKDIR /app

ENV PORT 5000

ENV MODEL_URL 'json model'

COPY . .

RUN npm install

EXPOSE 5000

CMD [ "npm", "run", "start"]