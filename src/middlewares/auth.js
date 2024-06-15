import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";

export default async function (req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token não encontrado" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await jwt.verify(token, authConfig.secret);
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
}
