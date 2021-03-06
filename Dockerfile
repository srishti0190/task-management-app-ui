# pull official base image
FROM node:14.8.0

# set working directory
WORKDIR /task-management-system-ui

# add `/app/node_modules/.bin` to $PATH
ENV PATH /task-management-system-ui/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# Uncomment and give your application server host:port to run on local
# REACT_APP_API_ENDPOINT=http://localhost:8080

# add app
COPY . ./

# start app
CMD ["npm", "start"]