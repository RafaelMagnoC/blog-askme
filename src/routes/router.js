import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("asks/create");
});

router.post("/saveAsk", (req, res) => {
  const titulo = req.body.titulo
  const descricao = req.body.descricao
  res.status(200).send(req.body);  
});

export default router;
