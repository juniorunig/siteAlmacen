import { Request, Response, Application, Router } from "express";

import { tipoProductoController } from "../controllers/tipoProducto.controller";

export class TipoProductoRoutes {
  public tipoProductoController: tipoProductoController =
    new tipoProductoController();

  public routes(app: Application): void {
    app.route("/tipoProducto/test").get(this.tipoProductoController.test);
    app
      .route("/tipoProductos")
      .get(this.tipoProductoController.getAlltipoProducto);
    app
      .route("/tipoProducto")
      .post(this.tipoProductoController.createTipoProducto);

    app
      .route("/tipoProducto/:id")
      .get(this.tipoProductoController.getOneTipoProducto);
    app
      .route("/tipoProducto/:id")
      .post(this.tipoProductoController.updateTipoProducto);
    app
      .route("/tipoProducto/:id")
      .delete(this.tipoProductoController.deleteTipoProducto);
  }
}
