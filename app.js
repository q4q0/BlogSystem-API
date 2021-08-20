const express = require('express');
const morgan = require('morgan');
const app = express();

/*--------- Setting up morgan middleware ---------*/

app.use(morgan());

/*--------- Setting up MySQL database connection ---------*/

const dbConnection = require('./Config/db');
dbConnection();

/*--------- Setting up express body parser middleware ---------*/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*--------- Require routes ---------*/

const usersRoutes = require('./Routes/users.routes');
const postsRoutes = require('./Routes/posts.routes');
const tagsRoutes = require('./Routes/tags.routes');
const categoriesRoutes = require('./Routes/categories.routes');

/*--------- Setting up routes ---------*/

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/tags', tagsRoutes);
app.use('/api/v1/categories', categoriesRoutes);

module.exports = app;
