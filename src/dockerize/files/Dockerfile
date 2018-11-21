# Stage 1 (compile angular)
FROM node:10-alpine as node
WORKDIR /<%= packageName %>
COPY . .
RUN npm ci
RUN npm run build --prod

# Stage 2 (serve app via http)
FROM nginx:1.15-alpine
COPY --from=node <%= packageName %>/dist/<%= packageName %> /html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
