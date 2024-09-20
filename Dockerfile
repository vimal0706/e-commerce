# Use a Node.js base image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies (if you add package.json later)
COPY package.json .
RUN npm install

# Copy the entire application
COPY . .

# Expose the port where the app runs
EXPOSE 8081

# Start the server
CMD ["node", "src/js/main.js"]
