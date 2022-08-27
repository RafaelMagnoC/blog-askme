import express from "express";
import { engine } from "express-handlebars";
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src/public"));

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(router);

export default app;
