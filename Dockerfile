FROM node:16.14.2 as build-stage

WORKDIR /app
COPY . /app
RUN npm run build

# production stage
FROM httpd:alpine

COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=build-stage /app/build /usr/local/apache2/htdocs/
COPY ./.htaccess /usr/local/apache2/htdocs/