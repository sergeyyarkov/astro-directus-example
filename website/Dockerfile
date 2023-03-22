# syntax=docker/dockerfile:1.0

ARG NODE_IMAGE=node:19-alpine3.16
ARG NGINX_IMAGE=nginx:1.23.3-alpine

FROM ${NODE_IMAGE} as development
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

FROM development as builder
WORKDIR /app
RUN npm run build

FROM ${NGINX_IMAGE} as production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/conf.d /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
