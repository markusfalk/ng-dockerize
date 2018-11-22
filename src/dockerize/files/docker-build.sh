#!/bin/sh

# docker build -t <registry:dockerport>/<username>/<packagename>:<tag> .
docker build -t <%= registry %>:<%= dockerport %>/<%= username ? username + '/' : '' %><%= packagename %>:<%= tag %> .

# docker push <registry:dockerport>/<username>/<packagename>:<tag>
<% if(!push) { %>\# <% } %>docker push <%= registry %>:<%= dockerport %>/<%= username ? username + '/' : '' %><%= packagename %>:<%= tag %>
