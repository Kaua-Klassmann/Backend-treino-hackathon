export default function (req, res) {
  return res.status(404).json({ error: "Erro de rota inválida" });
}
