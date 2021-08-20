const express = require('express');
const morgan = require('morgan');
const app = express();

/*--------- Setting up MySQL database connection ---------*/
const dbConnection = require('./Config/db');
dbConnection();

/*--------- Setting up express body parser ---------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*--------- Routes ---------*/

module.exports = app;
