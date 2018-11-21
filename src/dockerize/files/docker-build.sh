#!/bin/sh

# docker build -t <registry:port>/<username>/<image> .
docker build -t <%= registry %>:<%= dockerport %>/<%= username %>/<%= packagename %> .

# docker push <registry:port>/<username>/<%= packagename %>
<% if(push) { %>docker push <%= registry %>:<%= dockerport %>/<%= username %>/<%= packagename %><% } %>
