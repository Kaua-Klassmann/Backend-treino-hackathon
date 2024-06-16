import { Sequelize } from "sequelize";

import Categoria from "../models/Categoria.js";
import Produto from "../models/Produto.js";
import Usuario from "../models/Usuario.js";
import Cargo from "../models/Cargo.js";

import databaseConfig from "../config/database.js";

const models = [Categoria, Produto, Usuario, Cargo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
