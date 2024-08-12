# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Install Truffle and Ganache CLI globally
RUN npm install -g truffle ganache-cli

# Install OpenZeppelin contracts
RUN npm install @openzeppelin/contracts

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Expose Ganache CLI port
EXPOSE 8545

# Command to run Ganache CLI by default
CMD ["ganache-cli", "--host", "0.0.0.0"]
