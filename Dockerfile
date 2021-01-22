FROM bitnami/nginx

COPY .docker/nginx.conf /opt/bitnami/nginx/conf/server_blocks/my_server_block.conf
COPY .docker/start.sh /
COPY .docker/replaceEnvVars.sh .
COPY build/ /usr/share/nginx/html

USER 0

RUN chmod +x replaceEnvVars.sh
RUN chmod +x /start.sh

CMD [ "/start.sh" ]
