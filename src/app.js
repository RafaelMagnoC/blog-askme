import express from "express";
import { engine } from "express-handlebars";
import routes from "./routes/routes.js";
import connection from "./database/dbConnection.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src/public"));

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(routes);

export default app;
