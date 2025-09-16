const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new Sequelize(
  process.env.DB_NAME,       // Database name
  process.env.DB_USER,       // Database username
  process.env.DB_PASSWORD,   // Database password
  {
    host: process.env.DB_HOST || 'localhost',  // Default to localhost
    dialect: 'mysql',        // MySQL as the database dialect
    port: process.env.DB_PORT || 3306,        // Default MySQL port
    logging: false,          // Disable query logging to the terminal
  }
);

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database successfully.');
  })
  .catch(() => {
    console.error('Unable to connect to the database.'); // Log only generic errors
  });

module.exports = sequelize;
