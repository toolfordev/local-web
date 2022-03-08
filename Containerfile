FROM docker.io/library/node:10.24.1 as builder
WORKDIR /tmd
COPY . .
RUN npm install
RUN npm run ng build
FROM docker.io/library/nginx:1
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/toolfordev-local-web /usr/share/nginx/html
EXPOSE 14000
