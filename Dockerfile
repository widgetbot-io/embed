FROM nginx:1.15

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY build/ /usr/share/nginx/html