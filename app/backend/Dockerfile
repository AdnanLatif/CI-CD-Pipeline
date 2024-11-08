# Stage 1: Build, install dependencies, and run tests
FROM node:lts AS build

WORKDIR /app/backend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Run tests in the build stage; if tests fail, the build process will stop here
RUN npm test  # Alternatively, use `RUN npx jest --verbose` if needed

# Stage 2: Final image with only the application code and dependencies
FROM node:lts

WORKDIR /app/backend

# Copy only the necessary files from the build stage
COPY --from=build /app/backend/node_modules ./node_modules
COPY --from=build /app/backend .

EXPOSE 5000

CMD ["npm", "start"]
