# Use Node.js as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN npm install express

# Copy the rest of the app
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
