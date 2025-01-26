const express = require('express');
const cors = require('cors'); // cors is a middleware that allows the client to make requests to the server from a different domain
const {connect} = require('mongoose'); // connect is a function that connects to the MongoDB database
require('dotenv').config(); // dotenv is a package that loads environment variables from a .env file into process.env

const app = express();

connect(process.env.MONGO_URI)
    .then(app.listen(5000, () => console.log(`Server is running on port ${process.env.PORT}`)))
    .catch(err => console.error(err));
