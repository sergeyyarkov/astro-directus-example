# syntax=docker/dockerfile:1

ARG NODE_IMAGE=node:19-alpine3.16
ARG NGINX_IMAGE=nginx:1.23.3-alpine

# DEVELOPMENT STAGE
FROM ${NODE_IMAGE} as development
WORKDIR /app
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]

# BUILDER STAGE
FROM development as builder
ENV DIRECTUS_URL=http://cms.localhost
WORKDIR /app
RUN npm run build

# PRODUCTION STAGE
FROM ${NGINX_IMAGE} as production

COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/conf.d /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
