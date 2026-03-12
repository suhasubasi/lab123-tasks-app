# Lab 1, Lab 2, Lab 3 project

This project is my lab work for the Backend course in Kristianstad University.

I started with a simple Express server, then added JSON CRUD for tasks, then connected the project to MariaDB.  
After that I moved the task API from memory to the database and added a basic users API with the same structure. 
For lab 2 I also added Helmet, API key protection, and JWT login.
For lab 3 I added EJS pages, a Friday page, task CRUD pages with forms, and sessions with flash messages.

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
- Helmet security middleware
- API key protected route
- JWT login
- JWT protected route
- EJS setup
- landing page for `/` 
- Friday page with query string date test
- task CRUD web pages and forms
- sessions
- flash messages for task CRUD

## Project structure

Some important files right now:

- `app.js` starts the server
- `src/express.js` sets up Express
- `src/routes/tasks.js` has the task routes
- `src/routes/users.js` has the user routes
- `src/routes/apikey.js` has the API key route
- `src/routes/jwt.js` has the JWT routes
- `src/routes/friday.js` has the Friday page route
- `src/routes/taskCrud.js` has the task CRUD page routes
- `src/controllers/taskController.js` has the controller logic
- `src/controllers/userController.js` has the user controller logic
- `src/controllers/apiKeyController.js` has the API key controller logic
- `src/controllers/jwtController.js` has the JWT controller logic
- `src/controllers/fridayController.js` has the Friday page logic
- `src/controllers/taskCrudController.js` has the task CRUD page logic
- `src/models/taskModel.js` talks to the database
- `src/models/userModel.js` talks to the user table in the database
- `src/models/jwt.js` handles JWT create and verify
- `src/models/jwtUserModel.js` handles login for the JWT user
- `src/service/DatabaseService.js` handles the database connection
- `src/config/database.js` has the database config
- `src/config/sessionOptions.js` has the session config
- `src/connect.js` is used to test the database connection
- `src/middleware/verifyApiKey.js` checks the API key
- `src/middleware/jwt.js` checks the JWT token
- `src/middleware/locals.js` adds local values for the views
- `src/middleware/flashMessage.js` handles flash messages
- `src/views/` has the EJS pages
- `sql/` has the SQL files

## Install packages

```bash
npm install