# Lab 1, Lab 2, Lab 3 project

This project is my lab work for the Backend course in Kristianstad University.

I started with a simple Express server, then added JSON CRUD for tasks, then connected the project to MariaDB.  
Right now the task API is working with the database.

## What works now

At this stage, the project has:

- Express server
- basic routes
- JSON CRUD for tasks
- MariaDB connection
- tasks stored in the database
- controller and model structure for tasks

## Project structure

Some important files right now:

- `app.js` starts the server
- `src/express.js` sets up Express
- `src/routes/tasks.js` has the task routes
- `src/controllers/taskController.js` has the controller logic
- `src/models/taskModel.js` talks to the database
- `src/service/DatabaseService.js` handles the database connection
- `src/config/database.js` has the database config
- `src/connect.js` is used to test the database connection
- `sql/` has the SQL files

## Install packages

```bash
npm install