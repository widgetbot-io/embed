FROM nginx:alpine

WORKDIR /

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY .docker/entrypoint.sh .
COPY .docker/replaceEnvVars.sh .
COPY build/ /usr/share/nginx/html

RUN chmod +x replaceEnvVars.sh

ENTRYPOINT ["/bin/ash", "entrypoint.sh"]

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
