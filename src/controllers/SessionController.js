import Yup from "yup";
import jwt from "jsonwebtoken";

import authConfig from "../config/auth.js";

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      senha: Yup.string().min(6).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro de schema inválido" });
    }

    const { email, senha } = req.body;

    if (!(email === "admin@gmail.com" && senha === "123123")) {
      return res.status(400).json({ error: "Usuario não encontrado" });
    }

    return res.json({
      token: jwt.sign({}, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
