import Sequelize from "sequelize";
import connection from "../database/dbConnection.js";

const Resposta = connection.define("respostas", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  descricaoResposta: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  perguntaId: {
    type: Sequelize.UUID,
    allowNull: false,
  }
});

Resposta.sync({ force: false }).then(() => {});

export default Resposta;
