# build the react app
FROM node:alpine3.11 as build-stage

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# serve using nginx
FROM nginx:alpine

COPY --from=build-stage /app/build/ /var/www

COPY  --from=build-stage /app/deploy/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]
