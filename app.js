"use strict";

const app = require("express")();
const port = process.env.PORT || 8081;
// const dockerPort = 3000;

app.get("/", (req, res) => {
  res.send("Docker is working fine");
});

app.listen(port, () => {
  console.log(`Servidor Rodando na url: http://localhost:${port}`);
  //   console.log(`Container Rodando na url: http://localhost:${dockerPort}`);
});
