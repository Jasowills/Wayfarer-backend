import express from "express";
import routes from "./routes";

import cors from "cors";



const app = express();

// Add the cors() middleware before your routes
app.use(cors());



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(4005, () => console.log(`Server is running on port 4005`));

