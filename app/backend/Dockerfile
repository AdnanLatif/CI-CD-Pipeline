# Stage 1: Build and install dependencies
FROM node:lts AS build

WORKDIR /app/backend

COPY package*.json ./

RUN npm install

COPY . .

# Stage 2: Final image with just the application code and dependencies
FROM node:lts

WORKDIR /app/backend

COPY --from=build /app/backend/node_modules ./node_modules

COPY --from=build /app/backend .

EXPOSE 5000

CMD ["npm", "start"]
