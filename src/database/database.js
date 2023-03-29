import { Sequelize } from "sequelize";

import { config } from "dotenv";
config();

const dbUrl = process.env.DATABASE_URL


const sequelize = new Sequelize(dbUrl, {
    pool: {
        max: 7,
        min: 0,
        idle: 10000
    }
});


  
export default sequelize;