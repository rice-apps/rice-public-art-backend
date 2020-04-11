# Requirements

To run the backend you must have the following installed
2. NodeJS

# Development

1. Clone this repo and cd into it.
2. Run `$ npm install` to install the neccessary dependencies.
3. Run `$ npm start` to start the server using node.
4. Run `$ npm run dev` to run the server in development mode using nodemon.

Note that unless the environment variable for `PORT` are set in the `.env` file, the server runs on `port 3000`.

# Deployment 
Deploy using `gcloud app deploy` once the google cloud API is installed.

# Structure

- The code for the server and database connection is in the file `server.js`
- The endpoints and routes for the server are in `/routes` and are imported to `server.js`
