import Sequelize from "sequelize";

const connection = new Sequelize(
  "db-blog-askme",
  "root",
  "admin", {
  host: "localhost",
  dialect: "mysql",
});

connection.authenticate()
  .then(() => {
    console.log("conectado ao banco de dados");
  })
  .catch((erro) => {
    console.log(erro);
  });

export default connection;
