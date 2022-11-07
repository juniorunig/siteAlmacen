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
      .route("/tipoProductos")
      .post(this.tipoProductoController.createTipoProducto);

    app
      .route("/tipoProductos/:id")
      .get(this.tipoProductoController.getOneTipoProducto);
    app
      .route("/tipoProductos/:id")
      .put(this.tipoProductoController.updateTipoProducto);
    app
      .route("/tipoProductos/:id")
      .delete(this.tipoProductoController.deleteTipoProducto);
  }
}
