import { Router } from "express";
import CategoriaController from "../controllers/CategoriaController.js";
import ProdutoController from "../controllers/ProdutoController.js";
import error from "../middlewares/errorRoutes.js";

const routes = new Router();

// CATEGORIAS
routes.get("/categorias", CategoriaController.index);
routes.get("/categoria/:id", CategoriaController.show);
routes.put("/atualizarNomeCategoria", CategoriaController.updateName);
routes.delete("/categoria/:id", CategoriaController.destroy);
//routes.post("/categoria", CategoriaController.store);

// PRODUTOS
routes.get("/produtos", ProdutoController.index);
routes.get("/produto/:id", ProdutoController.show);
routes.get("/searchProduto", ProdutoController.search);
routes.put("/atualizarNomeProduto", ProdutoController.updateName);
routes.put("/atualizarCategoriaProduto", ProdutoController.updateCategory);
routes.delete("/produto/:id", ProdutoController.destroy);

routes.use(error);

export default routes;
