FROM node:17.8
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3010
CMD ["npm", "run", "start"]