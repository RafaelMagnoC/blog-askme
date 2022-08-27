import app from "./app.js";
import "dotenv/config";

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("Algum erro ocorreu na execução do processo!");
  }
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
