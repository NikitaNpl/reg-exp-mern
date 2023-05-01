# Getting Started with project

To use the local version of the application, you must install [NodeJs at least version 14.0.0 and npm at least version 5.6](https://nodejs.org/en).

## Dependencies installation

This application is designed as a monolithic repository; It has both the server-side logic written in [express](https://expressjs.com/) and the interface logic created using [create-react-app](https://github.com/facebook/create-react-app).

### `npm install`

Install all the dependencies of the server part of the application.

## Running the application

### `npm run backend start`

Allows you to start the application server. It starts at http://localhost:5000

### `npm run client start`

Allows you to run the UI of the application. It starts at http://localhost:3000

### `npm run docker start`

Allows you to run docker containers with all the necessary services

### `npm run docker stop`

Allows you to stop and remove docker, networks