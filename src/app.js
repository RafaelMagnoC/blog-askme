import express from "express";
import { engine } from "express-handlebars";
import home from "./routes/home/home.routes.js";
import asks from "./routes/asks/asks.routes.js";
import answer from "./routes/answer/answers.routes.js";
import connection from "./database/dbConnection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src/public"));

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(home);
app.use(asks);
app.use(answer);

export default app;
