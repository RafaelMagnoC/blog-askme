import Sequelize from "sequelize";

const connection = new Sequelize("db-blog-askme", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default connection;
