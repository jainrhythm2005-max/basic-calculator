FROM nginx:alpine
COPY index.html calculator.js /usr/share/nginx/html/
EXPOSE 80
