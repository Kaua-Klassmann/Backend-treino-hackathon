import { Sequelize } from "sequelize";
import Categoria from "../models/Categoria.js";
import Produto from "../models/Produto.js";
import databaseConfig from "../config/database.js";

const models = [Categoria, Produto];

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
