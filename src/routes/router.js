import express from "express";
import Pergunta from "../models/Pergunta.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("asks/create");
});

router.post("/saveAsk", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

export default router;
