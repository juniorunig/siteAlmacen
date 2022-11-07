import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Producto } from "./Producto";

export class tipoProducto extends Model {
  public nombre!: string;
}

export interface tipoProductoI {
  nombre: string;
}

tipoProducto.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "tipoProducto",
    sequelize: database,
    timestamps: true,
  }
);
