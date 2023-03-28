import express from "express";
import routes from "./routes";
import { Sequelize } from "sequelize";
import cors from "cors";



const app = express();

// Add the cors() middleware before your routes
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(4002, () => console.log(`Server is running on port 4001`));

