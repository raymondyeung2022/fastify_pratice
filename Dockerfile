# Fastify
FROM node:20-alpine
WORKDIR /app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "app.js"]

# mysql
FROM mysql:9.0
COPY ./database/init_db.sql /docker-entrypoint-initdb.d/
ENV MYSQL_ROOT_PASSWORD=mysql
VOLUME ./db_data:/var/lib/mysql