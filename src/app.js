import express from "express";
import { engine } from "express-handlebars";
import router from "./routes/router.js";
import connection from "./database/dbConnection.js";

const app = express();

connection
  .authenticate()
  .then(() => {
    console.log("conectado ao banco de dados");
  })
  .catch((erro) => {
    console.log(erro);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("src/public"));

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", "src/views");

app.use(router);

export default app;
