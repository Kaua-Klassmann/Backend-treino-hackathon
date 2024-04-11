import express from "express";
import cors from "cors";
import { jsonSyntaxError } from "./helpers/error.js";
import routes from "./routes/routes.js";
import "./database/index.js";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(jsonSyntaxError);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
