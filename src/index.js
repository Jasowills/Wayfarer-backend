
import express from "express";
import routes from "./routes";
import { Sequelize } from "sequelize";

const INTERNAL_DB_URL = process.env.INTERNAL_DB_URL || "postgres://wuwsymwj:PgCRcWYkcQanX2MBBF0DXmIvNkgaRHnk@snuffleupagus.db.elephantsql.com/wuwsymwj";

const sequelize = new Sequelize(INTERNAL_DB_URL);
async function connectToDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectToDB();

const app = express();

app.get("/", (req, res) => {
  return res.send({
    message: "Welcome to wayfarer api"
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(4000, () => console.log(`Server is running on port 4000`));