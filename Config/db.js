const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
  }
);

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `MySQL database connection has been established successfully`.bgBlue.black
    );
  } catch (err) {
    console.log(`MySQL database connection has been failed due to ${err}`);
  }
};

module.exports = dbConnection;
