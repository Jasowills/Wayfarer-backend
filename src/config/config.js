const dotenv = require('dotenv');
dotenv.config();

const databaseEnvDetails = {
  url: process.env.DATABASE_URL,
  dialect: 'postgres',
  logging: false,
  
}

const config = {
  development: {
    database: process.env.DB_CONFIG_DEV,
    ...databaseEnvDetails,
  },
  test: {
    database: process.env.DB_CONFIG_TEST,
    ...databaseEnvDetails
  },
  production: {
    use_env_variable: "DATABASE_URL",
    ...databaseEnvDetails
  }
};

module.exports = config;
