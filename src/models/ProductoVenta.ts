import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class ProductoVenta extends Model {
  public cantidad!: string;
  public precio!: string;
  public total!: string;
}

export interface ProductoVentasI {
   cantidad: string;
  precio: string;
  total: string;
}

ProductoVenta.init(
  {
     cantidad: {
        type: DataTypes.STRING,
        allowNull: false
      },
     precio: {
        type: DataTypes.STRING,
        allowNull: false
      },
      total: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
  },
  {
    tableName: "ProductoVenta",
    sequelize: database,
    timestamps: true
  }
);

