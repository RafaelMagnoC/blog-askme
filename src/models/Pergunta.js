import Sequelize from "sequelize";
import connection from "../database/dbConnection.js";

const Pergunta = connection.define("perguntas", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  tituloPergunta: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricaoPergunta: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {});

export default Pergunta;
