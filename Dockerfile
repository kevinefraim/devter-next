FROM node:16.14.2

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install

COPY next.config.js ./next.config.js


COPY . ./
EXPOSE 3000

CMD ["npm","run","dev"]