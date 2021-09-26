# movies-app
Angular front-end, NodeJS API, AWS RDS SQL database

This is a very rudimentary app that allows the user to add movie information to the database and view a list of movies in the database.
It's still needs more form validation, more unit tests, etc.

There are two apps to run:

movies-api 
This is a NodeJS app with APIs to read and write to/from the database.

1. Make sure Node is installed
2. In app.js replace the user name and password with provided credentials.
3. Run "npm install" from the root of the project
4. Run the app using "node app.js" command.

movies
This is an Angular app with UI that interacts with NodeJS
1. Make sure Angular is installed
2. Run "npm install" from the root of the project
3. Run the app using "ng serve" command
