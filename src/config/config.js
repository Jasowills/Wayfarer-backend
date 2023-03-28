const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const databaseEnvDetails = {
  user: process.env.DB_CONFIG_USERNAME,
  password: process.env.DB_CONFIG_PASSWORD,
  host: process.env.DB_CONFIG_HOST,
  port: process.env.DB_CONFIG_PORT,
  database: process.env.DB_CONFIG_DEV,
  ssl: { rejectUnauthorized: false }
};

const pool = new Pool({
  max: 10,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 5000,
  ...databaseEnvDetails
});

module.exports = pool;
