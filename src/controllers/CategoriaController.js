import Yup from "yup";
import Categoria from "../models/Categoria.js";

class CategoriaController {
  async index(req, res) {
    const categorias = await Categoria.findAll();

    if (!categorias) {
      return res.status(404).json({ error: "Nenhuma categoria disponivel" });
    }

    return res.json(categorias);
  }

  async show(req, res) {
    const categoria = await Categoria.findByPk(req.params.id);

    if (!categoria) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    return res.json(categoria);
  }

  async destroy(req, res) {
    const categoria = await Categoria.findByPk(req.params.id);

    if (!categoria) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    try {
      await categoria.destroy();
      return res.send();
    } catch (e) {
      return res
        .status(400)
        .json({ error: "Não é possivel deletar essa categoria" });
    }
  }

  async updateName(req, res) {
    const schema = Yup.object().shape({
      categoria: Yup.number().min(1).required(),
      nome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro de schema inválido" });
    }

    const categoria = await Categoria.findByPk(req.body.categoria);

    if (!categoria) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    const { nome } = req.body;

    await categoria.update({ nome: nome });

    return res.send();
  }

  /*

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro de schema inválido" });
    }

    function capitalize(s) {
      return s[0].toUpperCase() + s.slice(1);
    }

    const categoria = await Categoria.findOne({
      where: {
        nome: capitalize(req.body.nome),
      },
    });

    if (categoria) {
      return res.status(400).json({ error: "Categoria já existe" });
    }

    const body = {
      nome: req.body.nome,
    };

    await Categoria.create(body);

    return res.json("Categoria criada com sucesso");
  }

  */
}

export default new CategoriaController();
