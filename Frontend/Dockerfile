#Start by selecting the version of node i want
FROM node:17.8

#The workdir inside docker
WORKDIR /app

#Copy the package.json stuff
COPY package.json ./

#Run npm install to install all the dependencies listed on the package.json
RUN npm install

#Copy all the files inside the docker image
COPY . .

#Exposing the port 3000
EXPOSE 3000

#Running the app
CMD ["npm", "run", "start"]
