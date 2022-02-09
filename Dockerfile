FROM node:14
WORKDIR /app
RUN npm install express
COPY * ./
EXPOSE 5000
CMD ["npm", "start"]