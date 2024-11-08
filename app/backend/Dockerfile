# Stage 1: Build and install dependencies in a lightweight way
FROM node:lts-alpine AS build

WORKDIR /app/backend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Stage 2: Final image with only the application code and dependencies
FROM node:lts-alpine

WORKDIR /app/backend

# Copy only the necessary files from the build stage
COPY --from=build /app/backend/node_modules ./node_modules
COPY --from=build /app/backend .

EXPOSE 5000

CMD ["npm", "start"]
