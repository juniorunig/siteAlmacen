import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Cliente } from "./Cliente";

export class Venta extends Model {
  public fechaVenta!: Date;
  public SubTotal!: number;
  public impuesto!: number;
  public descuento!: number;
  public total!: number;
}

export interface VentaI {
  fechaVenta: Date;
  SubTotal: number;
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
    subtotal: {
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

Cliente.hasMany(Venta);
Venta.belongsTo(Cliente);

//Venta.belongsToMany(Producto, { through: ProductoVenta, foreignKey: 'venta_id' });
//Producto.belongsToMany(Venta, { through: ProductoVenta, foreignKey: 'producto_id' });
