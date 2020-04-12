FROM node:11 AS BUILDER

ADD . /
RUN yarn
RUN yarn build


FROM nginx:alpine

COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder build/ /usr/share/nginx/html
