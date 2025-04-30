FROM node:22-alpine AS BUILD

WORKDIR /app

COPY ./package-lock.json ./package.json .

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/places-angular/browser /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT nginx -g "daemon off;"
