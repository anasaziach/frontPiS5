FROM nginx:latest
WORKDIR /app
COPY ./backend/angular /usr/share/nginx/html
EXPOSE 80
