import Yup from "yup";
import jwt from "jsonwebtoken";

import Usuario from "../models/Usuario.js";
import Cargo from "../models/Cargo.js";

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

    const usuario = await Usuario.findOne({
      where: {
        email: email,
      },
      attributes: ["id", "nome"],
      include: {
        model: Cargo,
        as: "cargo",
        attributes: ["id", "nome"],
      },
    });

    if (!usuario) {
      return res.status(400).json({ error: "Usuario não encontrado" });
    }

    if (!(senha === "123123")) {
      return res.status(400).json({ error: "Senha incorreta" });
    }

    const idCargo = usuario.cargo.id;

    return res.json({
      usuario,
      token: jwt.sign({ idCargo }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async verificar(req, res) {
    return res.json({ auth: true });
  }
}

export default new SessionController();
