const dotenv = require('dotenv');
dotenv.config();

const databaseEnvDetails = {
  username: process.env.DB_CONFIG_USERNAME,
  password: process.env.DB_CONFIG_PASSWORD,
  host: process.env.DB_CONFIG_HOST,
  port: process.env.DB_CONFIG_PORT,
  dialect: 'postgres',
  logging: false,
  
}
const testEnvDetails = {
  url: process.env.TEST_URL,
  logging: false
}



const config = {
  development: {
    database: process.env.DB_CONFIG_DEV,
    ...databaseEnvDetails,
  },
  test: {
    database: process.env.DB_CONFIG_TEST,
    ...testEnvDetails,
  },
  production: {
    use_env_variable: "DATABASE_URL",
    ...databaseEnvDetails
  }
};

module.exports = config;
