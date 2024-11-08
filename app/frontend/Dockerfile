# Stage 1: Build and install dependencies in a lightweight way
FROM node:lts-alpine AS build

WORKDIR /app/frontend

COPY frontend/package.json ./
RUN npm install

COPY frontend/ .

RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/frontend/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
