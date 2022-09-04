import express from "express"
import home from "./home/home.routes.js"
import answer from "./answer/answers.routes.js"
import asks from "./asks/asks.routes.js"

const routes = express.Router()

routes.use(home)
routes.use(answer)
routes.use(asks)

export default routes