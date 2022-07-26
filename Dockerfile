FROM nginx:alpine

COPY ./app /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html


