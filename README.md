# Lab 1, Lab 2, Lab 3 project

This project is my lab work for the Backend course in Kristianstad University.

I started with a simple Express server, then added JSON CRUD for tasks, then connected the project to MariaDB.  
After that I moved the task API from memory to the database and added a basic users API with the same structure

## What works now

At this stage, the project has:

- Express server
- basic routes
- JSON CRUD for tasks
- JSON CRUD for users
- MariaDB connection
- tasks stored in the database
- users stored in the database
- controller and model structure for tasks and users

## Project structure

Some important files right now:

- `app.js` starts the server
- `src/express.js` sets up Express
- `src/routes/tasks.js` has the task routes
- `src/routes/users.js` has the user routes
- `src/controllers/taskController.js` has the controller logic
- `src/controllers/userController.js` has the user controller logic
- `src/models/taskModel.js` talks to the database
- `src/models/userModel.js` talks to the user table in the database
- `src/service/DatabaseService.js` handles the database connection
- `src/config/database.js` has the database config
- `src/connect.js` is used to test the database connection
- `sql/` has the SQL files

## Install packages

```bash
npm install