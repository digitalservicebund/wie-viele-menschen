FROM node:24-alpine as build

RUN apk update && apk upgrade

WORKDIR /app
COPY package* ./
RUN  npm ci
COPY . ./
RUN npx nuxt build

FROM node:24-alpine
RUN apk update && apk upgrade && apk add dumb-init
USER node
WORKDIR /app
COPY --chown=node:node --from=build /app/.output ./
COPY ./start.sh ./
EXPOSE 3000

ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["sh", "./start.sh"]
