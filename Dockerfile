FROM node:16.19.0
WORKDIR /app
COPY . /app
RUN npm ci
CMD [ "npm", "start" ]
EXPOSE 3000 