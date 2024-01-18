# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
# FROM node:latest as build

# # Set the working directory
# WORKDIR /usr/local/app

# # Add the source code to app
# COPY ./ /usr/local/app/

# RUN npm install -g @angular/cli

# RUN npm install

# CMD [ "ng" , "build" ]


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
# FROM nginx:latest

# # Copy the build output to replace the default nginx contents.
# # COPY --from=build /usr/local/app/dist/sample-angular-app /usr/share/nginx/html
# COPY --from=build /usr/local/app/backend/angular /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

FROM nginx:latest
WORKDIR /app
COPY ./backend/angular /usr/share/nginx/html
EXPOSE 80
