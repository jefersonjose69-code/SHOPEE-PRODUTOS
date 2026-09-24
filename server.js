const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json());

app.use(express.static(__dirname));

app.get("/api/status", (req, res) => {
  res.json({
    online: true,
    mensagem: "Servidor Shopee Produtos funcionando"
  });
});

app.get("/api/produtos", (req, res) => {

  const busca = req.query.busca || "";

  if (!busca) {
    return res.status(400).json({
      erro: "Digite um produto para pesquisar."
    });
  }

  return res.json({
    busca: busca,
    fonte: "Shopee",
    produtos: [],
    mensagem: "API da Shopee ainda não conectada."
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("=================================");
  console.log("SERVIDOR SHOPEE PRODUTOS ONLINE");
  console.log("PORTA:", PORT);
  console.log("=================================");
});
