import { Sequelize } from "sequelize";

import { config } from "dotenv";
config();

const dbUrl = process.env.DATABASE_URL


const sequelize = new Sequelize(dbUrl);


  
export default sequelize;