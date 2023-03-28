const dotenv = require('dotenv');
dotenv.config();

const databaseEnvDetails = {
  username: process.env.DB_CONFIG_USERNAME,
  password: process.env.DB_CONFIG_PASSWORD,
  host: process.env.DB_CONFIG_HOST,
  port: process.env.DB_CONFIG_PORT,
  dialect: 'postgres',
  logging: false,
  pool: {
  max: 10,
  min: 1,
  acquire: 3000,
  idle: 5000
}

};

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
