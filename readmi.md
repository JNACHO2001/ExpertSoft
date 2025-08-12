# Backend REST Project for data management

## Description

 This project makes a REST API. The API can create, read, update and delete data. The backend gets, processes and answers HTTP requests. It works with a database and can do many operations.

## Technologies and libraries used

- Node.js to run backend code.
- Express to make HTTP server and routes.
- MySQL to save data in tables.
- mysql2 to connect to MySQL and do queries.
- cors to allow requests from other places.
- csv-parser to read CSV files.

## Steps to set up and run the project

1. Make a project folder and go inside.
2. Run `npm init -y` to create package.json.
3. Install needed packages:
  - `npm install express`
  - `npm install mysql2`
  - `npm install cors`
  - (Optional) `npm install csv-parser` to import CSV files.
4. Use MySQL console or tools to create database.
5. Create tables for your data.
6. Make a file to connect to database with mysql2 createConnection. Set host, user, password, database name.
7. Export the connection to use in your server.
8. Make main server file with Express.
9. Use middlewares cors and express.json().
10. Make routes with methods GET, POST, PUT, DELETE.
11. Use callbacks for database queries.
12. Start server with `node app.js`.
13. Test API with Postman or curl.


### autor
jose gomez
link:https://github.com/JNACHO2001/ExpertSoft.git
branch;develop

