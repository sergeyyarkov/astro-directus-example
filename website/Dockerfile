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
ARG DIRECTUS_URL=http://cms.localhost
ARG DIRECTUS_EMAIL=admin@example.com
ARG DIRECTUS_PASSWORD=d1r3ctu5
ARG DIRECTUS_STATIC_TOKEN=

ENV DIRECTUS_URL=${DIRECTUS_URL}
ENV DIRECTUS_EMAIL=${DIRECTUS_EMAIL}
ENV DIRECTUS_PASSWORD=${DIRECTUS_PASSWORD}
ENV DIRECTUS_STATIC_TOKEN=${DIRECTUS_STATIC_TOKEN}

FROM development as builder
WORKDIR /app
RUN npm run build

FROM ${NGINX_IMAGE} as production

COPY --from=builder /app/nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]