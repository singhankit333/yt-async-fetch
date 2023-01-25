# Dockerfile

FROM node:16.15-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm ci
COPY . /app
EXPOSE 3000 
CMD [ "npm", "start" ]