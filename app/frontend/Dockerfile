FROM node:lts

WORKDIR /app/frontend

COPY frontend/package.json ./
RUN npm install

COPY frontend/ .

RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/frontend/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
