FROM nginx:alpine

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/script.sh .
COPY build/ /usr/share/nginx/html

RUN ./script.sh