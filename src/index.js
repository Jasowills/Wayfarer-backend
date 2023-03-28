import express from "express";
import routes from "./routes";
import { Sequelize } from "sequelize";
import cors from "cors";

const INTERNAL_DB_URL =
  process.env.INTERNAL_DB_URL ||
  "postgres://wuwsymwj:McUtU3Hxw1AoJGldP759hyih1gux8NC1@snuffleupagus.db.elephantsql.com/wuwsymwj";

const sequelize = new Sequelize(INTERNAL_DB_URL);

async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

const app = express();

// Add the cors() middleware before your routes
app.use(cors());

connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(4002, () => console.log(`Server is running on port 4001`));

