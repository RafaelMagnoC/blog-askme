import express from "express";
import Pergunta from "../../models/Pergunta.js";
import Resposta from "../../models/Resposta.js";

const asks = express.Router();

asks.get("/createask", (req, res) => {
  res.render("asks/create");
});

asks.post("/createask", (req, res) => {
  const tituloPergunta = req.body.tituloPergunta;
  const descricaoPergunta = req.body.descricaoPergunta;
  Pergunta.create({
    tituloPergunta: tituloPergunta,
    descricaoPergunta: descricaoPergunta,
  }).then(() => {
    res.redirect("/asks");
  });
});

asks.get("/asks", (req, res) => {
  Pergunta.findAll({
    raw: true,
    order: [["updatedAt", "DESC"]],
  }).then(perguntas => {
    res.render("asks/index", {
      perguntas: perguntas,
    });
  });
});

asks.get("/ask/:id", (req, res) => {
  const perguntaId = req.params.id;
  Pergunta.findOne({
    where: { id: perguntaId },
  }).then(pergunta => {
    if (pergunta != undefined) {
      Resposta.findAll({
        where: {perguntaId: pergunta.id},
        raw: true,
        order: [["updatedAt", "DESC"]],
      }).then(resposta => {
        res.render("asks/ask", {
          updatedAt: pergunta.updatedAt,
          tituloPergunta: pergunta.tituloPergunta,
          descricaoPergunta: pergunta.descricaoPergunta,
          resposta: resposta,
        });
      });
    } else {
      res.redirect("/asks");
    }
  });
});

export default asks;
