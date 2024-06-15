import { Router } from "express";
import CategoriaController from "../controllers/CategoriaController.js";
import ProdutoController from "../controllers/ProdutoController.js";

import authMiddleware from "../middlewares/auth.js";
import error from "../middlewares/errorRoutes.js";
import SessionController from "../controllers/SessionController.js";

const routes = new Router();

routes.get("/categorias", CategoriaController.index);
routes.get("/categoria/:id", CategoriaController.show);

routes.get("/produtos", ProdutoController.index);
routes.get("/produto/:id", ProdutoController.show);
routes.get("/searchProduto", ProdutoController.search);

routes.post("/session", SessionController.store);

routes.use(authMiddleware);

routes.put("/atualizarNomeCategoria", CategoriaController.updateName);
routes.delete("/categoria/:id", CategoriaController.destroy);

routes.put("/atualizarNomeProduto", ProdutoController.updateName);
routes.put("/atualizarCategoriaProduto", ProdutoController.updateCategory);
routes.delete("/produto/:id", ProdutoController.destroy);

routes.use(error);

export default routes;
