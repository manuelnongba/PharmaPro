## PharmaPro

## Configuration

Create a config.env file in the root directory with the following environment variables:

```sh
PORT
DATABASE_PASSWORD
DATABASE

JWT_SECRET
JWT_EXPIRES_IN
JWT_COOKIE_EXPIRES_IN
```

- Create a Mongo Cluster and retrieve your mongo uri and set it to DATABASE.
- Your PORT, DATABASE_PASSWORD, JWT_SECRET, JWT_EXPIRES_IN and JWT_COOKIE_EXPIRES_IN.

## Getting Started

From your terminal :

```sh
npm start
```

This will start the Node.js server and React with concurrently.
