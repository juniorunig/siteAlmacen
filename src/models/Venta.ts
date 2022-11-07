import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Venta extends Model {
  public fechaVenta!: Date;
  public subTotal!: number;
  public impuesto!: number;
  public descuento!: number;
  public total!: number;
}

export interface VentaI {
  fechaVenta: Date;
  subTotal: number;
  impuesto: number;
  descuento: number;
  total: number;
}

Venta.init(
  {
    fechaVenta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    subTotal: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    impuesto: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    descuento: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "venta",
    sequelize: database,
    timestamps: true,
  }
);
