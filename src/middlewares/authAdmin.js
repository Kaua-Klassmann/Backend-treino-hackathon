export default async function (req, res, next) {
  if (req.ucargo != 1) {
    return res.status(401).json({ error: "Rota somente para ADMIN" });
  }

  return next();
}
