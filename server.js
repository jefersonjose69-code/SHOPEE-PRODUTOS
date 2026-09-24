const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Servir o site
app.use(express.static(path.join(__dirname)));

app.get("/api/status", (req, res) => {
  res.json({
    status: "online",
    mensagem: "Servidor Shopee Produtos funcionando"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});
