import Sequelize from "sequelize"
import connection from "../database/dbConnection.js"

const Pergunta = connection.define("pergunta", {
  id:{
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  titulo:{
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao:{
    type: Sequelize.STRING,
    allowNull: false
  }
})

Pergunta.sync({ force: false }).then(() => {
  console.log("tabela criada")
})

export default Pergunta
