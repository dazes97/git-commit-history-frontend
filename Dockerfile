FROM node:18-alpine as react-build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build
FROM nginx:latest
WORKDIR /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/dist /usr/share/nginx/html
EXPOSE 3000
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]