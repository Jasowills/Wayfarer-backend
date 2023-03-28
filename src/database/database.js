import { Sequelize } from "sequelize";

import { config } from "dotenv";
config();

const dbUrl = process.env.DATABASE_URL


const sequelize = new Sequelize(dbUrl);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })
  
export default sequelize;