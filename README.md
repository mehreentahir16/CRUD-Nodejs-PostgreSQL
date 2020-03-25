# CRUD-Nodejs-PostgreSQL
This repository contains a simple Application explaining CRUD operations using PostgreSQL as database and Nodejs on the backend.

## Environment Setup
To run this project, make sure you have the following installed on your system.

1: [Visual Studio Code](https://code.visualstudio.com/)

2: [PostgreSQL](https://www.postgresql.org/download/)

3: [Nodejs](https://nodejs.org/en/download/)

Before moving forward, confirm the NodeJs installing by checking its version with the 'node -v' command. Also check that you have NPM installed with the 'npm -v' command.
Next, check the installation of PostgreSQL database with 'postgres --version' command and check that its running with 'psql --version' command.

## Creating Database
You can either create a database using [pgAdmin](https://www.pgadmin.org/download/) or straight up use raw SQL. pgAdmin comes with an easy to follow UI. 
In order to create database using raw SQL queries, all you need to do is to do is connect to Postgres using 'psql -U postgres' command. Later, you can execute SQL queries from within terminal.
e.g.

Connecting to PostgreSQL:
      ```psql -U postgres```
      
Creating testdb Database:
      ```CREATE DATABASE testdb;```

Connecting to recently created Database:
      ```\c testdb```

Create Table:
```
CREATE TABLE table_name (
  field_name TYPE CONSTRAINTS,
  field_name TYPE(args) CONSTRAINTS
  ...
);
```
## Connecting to Database
Once you've created the database, change the following credentials at ```connectionStrings``` as per your database.
```
const { Client } = require('pg');
var connectionString = "postgres://[username]:[password]@localhost:5432/[database name]";

const client = new Client({
    connectionString: connectionString
});
```
## Running the Application
To run the application, move to the source folder i.e. the folder contains 'package.json' file and execute ```npm install```

The source folder also contains 'app.js' file. Execute ```node app.js``` to run the application. 

If everything goes well, you should see 'server started on port 4000'. Move to (http://localhost:4000/) in default browser. 
