FROM node:16-alpine

WORKDIR /app
COPY . .

RUN apk add --no-cache git openssh
RUN npm install
RUN npm build

CMD [ "npm", "export" ]