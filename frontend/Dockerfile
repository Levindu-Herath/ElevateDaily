# get the base image
FROM node:20-alpine

# set the working directory
WORKDIR /app

# copy the package.json file
COPY package*.json ./

# install the dependencies
RUN npm install

# copy the source code
COPY . .

# expose the port
EXPOSE 5173

# start the application
CMD ["npm", "run","dev"]