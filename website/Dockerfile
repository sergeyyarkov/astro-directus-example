# syntax=docker/dockerfile:1

ARG NODE_IMAGE=node:19-alpine3.16
ARG NGINX_IMAGE=nginx:1.23.3-alpine

FROM ${NODE_IMAGE} as development
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci && npm cache clean --force

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

ARG CACHE_DATE=not_a_date

FROM development as builder
WORKDIR /app
ENV DIRECTUS_URL=http://cms.localhost
RUN npm run build

FROM ${NGINX_IMAGE} as production

COPY --from=builder /app/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]