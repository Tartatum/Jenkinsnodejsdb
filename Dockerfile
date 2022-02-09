FROM node:14
WORKDIR /app
RUN npm install express
COPY * ./
EXPOSE 8081
CMD ["npm", "start"]