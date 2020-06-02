const express = require('express');
const dotenv = require('dotenv');

// loading the env variables
dotenv.config({ path: './config/config.env'});

const app = express(); //creating the app

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    function() {console.log(`Server is running on ${process.env.NODE_ENV} mode on port : ${PORT}`)}
); 



