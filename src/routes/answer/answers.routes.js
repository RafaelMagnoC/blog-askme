import express from "express";
import Resposta from "../../models/Resposta.js";

const answer = express.Router();

answer.post("/responder", (req, res) => {
  const descricaoResposta = req.body.descricaoResposta;
  const perguntaId = req.body.perguntaId;
  Resposta.create({
    descricaoResposta: descricaoResposta,
    perguntaId: perguntaId
  }).then(perguntaId => {
    res.redirect(`/ask/${perguntaId}`);
  });
});

export default answer;
