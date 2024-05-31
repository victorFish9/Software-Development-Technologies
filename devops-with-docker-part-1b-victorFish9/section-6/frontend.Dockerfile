# use this Dockerfile in exercises 1.12 and 1.14
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV REACT_APP_BACKEND_URL=http://example-backend:8080

EXPOSE 3000

CMD ["npx", "serve", "-s", "-l", "5000", "build"]