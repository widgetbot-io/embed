FROM nginx:alpine

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .doccker/script.sh .
COPY build/ /usr/share/nginx/html

RUN ./script.sh