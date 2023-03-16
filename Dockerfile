# Stage 1: Compile and Build angular codebase

FROM node:16 as node
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

# Stage 2: Serve app with nginx server

FROM nginx:latest
COPY --from=node /usr/local/app/dist/user-register-fullstack-frontend /usr/share/nginx/html
EXPOSE 80