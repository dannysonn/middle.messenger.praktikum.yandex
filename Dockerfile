FROM ubuntu:latest

WORKDIR /messanger

COPY . .

RUN apt update && apt install -y nodejs && apt install -y npm && npm install && npm run build

EXPOSE 3000

CMD ["node", "src/server.js"]


