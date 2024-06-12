# Use a slim Node.js base image for efficiency
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies (excluding dev dependencies)
COPY package*.json ./
RUN npm install --production

# Copy remaining project files
COPY . .

# Build the production output (adjust script if necessary)
CMD [ "npm", "run", "build" ]

# (Optional) Create a smaller runtime image
FROM node:18-alpine

WORKDIR /app

# Copy only the production build output from the builder stage
COPY --from=builder /app/dist /app

# Expose the port used by your Vite app (usually 5173)
EXPOSE 5173

# Start the development server (adjust script if necessary)
CMD [ "npm", "run", "dev" ]
