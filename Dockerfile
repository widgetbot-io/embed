FROM nginx:alpine

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/entrypoint.sh /
COPY build/ /usr/share/nginx/html

ENTRYPOINT ["/entrypoint.sh"]