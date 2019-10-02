# Requirements

To run the backend you must have the following installed
1. MongoDB
2. NodeJS

To check if you have these installed run
`$ mongo` to see if you have MongoDB installed, and run `$ node` to check if NodeJS is installed. 

# Development

1. Clone this repo and cd into it.
2. Run `$ npm install` to install the neccessary dependencies.
3. If you have not run the server before run `$ mongo` to allow for local creation of the database (also run if you have deleted the database).
3. Run `$ npm start` to start the server.

# Structure

- The code for the server and database connection is in the file `server.js`
- The models for the database collections are in `/models`
- The endpoints and routes for the server are in `/routes` and are imported to `server.js`
- The files containing test data that is added to the database is in the `/config` directory and are imported and called when the database is setup
