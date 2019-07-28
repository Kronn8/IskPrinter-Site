FROM node:12.6.0 AS package-stage
WORKDIR /app
COPY ./angular/package.json ./angular/package-lock.json ./
RUN npm install
COPY ./angular/. ./
RUN npm run ng build -- --configuration=production

FROM nginx:1.17.1
COPY --from=package-stage /app/dist/* /usr/share/nginx/html/
COPY ./nginx/. /