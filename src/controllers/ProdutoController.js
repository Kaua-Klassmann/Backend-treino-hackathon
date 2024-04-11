import Yup from "yup";
import Produto from "../models/Produto.js";
import Categoria from "../models/Categoria.js";
import { Op } from "sequelize";

class ProdutoController {
  async index(req, res) {
    const produtos = await Produto.findAll();

    if (!produtos) {
      return res.status(404).json("Nenhum produto encontrado");
    }

    async function get(index) {
      const id = produtos[index].categoria;
      const { nome } = await Categoria.findByPk(id);

      produtos[index].categoria = {
        id,
        nome,
      };
    }

    for (let index = 0; index < produtos.length; index++) {
      await get(index);
    }

    return res.json(produtos);
  }

  async show(req, res) {
    const produto = await Produto.findByPk(req.params.id);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    return res.json(produto);
  }

  async search(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro de schema inválido" });
    }

    const produtos = await Produto.findAll({
      where: {
        nome: {
          // Sem Case Sensitivity
          [Op.iLike]: `%${req.body.nome}%`,
          // Com Case Sensitivity
          // [Op.like]: `%${req.body.nome}%`
        },
      },
      limit: 3,
    });

    if (!produtos) {
      return res.status(404).json({ error: "Nenhum produto encontrado" });
    }

    return res.json(produtos);
  }

  async updateCategory(req, res) {
    const schema = Yup.object().shape({
      produto: Yup.number().min(1).required(),
      categoria: Yup.number().min(1).required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro de schema inválido" });
    }

    const produto = await Produto.findByPk(req.body.produto);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    const { categoria } = req.body;

    if (!(await Categoria.findByPk(categoria))) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    await produto.update({ categoria: categoria });

    return res.send();
  }

  async updateName(req, res) {
    const schema = Yup.object().shape({
      produto: Yup.number().min(1).required(),
      nome: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro de schema inválido" });
    }

    const produto = await Produto.findByPk(req.body.produto);

    if (!produto) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    const { nome } = req.body;

    await produto.update({ nome: nome });

    return res.send();
  }

  async destroy(req, res) {
    const produto = await Produto.findByPk(req.params.id);

    if (!produto) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    await produto.destroy();

    return res.send();
  }
}

export default new ProdutoController();
