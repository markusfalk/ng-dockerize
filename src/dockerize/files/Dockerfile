# Stage 1 (compile angular)
FROM node:10-alpine as node
WORKDIR /<%= packagename %>
COPY . .
RUN npm ci
RUN npm run build --prod

# Stage 2 (serve app via http)
FROM nginx:1.15-alpine
COPY --from=node <%= packagename %>/dist/<%= packagename %> /html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
