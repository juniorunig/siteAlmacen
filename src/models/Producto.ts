import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Producto extends Model {
  public nombre!: string;
  public marca!: string;
  public precio!: number;
  public stockMin!: number;
  public cantidad!: number;  
}


export interface ProductoI {
 nombre: string;
 marca: string;
 precio: number;
 stockMin: number;
 cantidad: number;
}

Producto.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
      },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
     stockMin: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
     cantidad: {
        type: DataTypes.FLOAT,
        allowNull: false
      } ,
    /*  tipoProducto: {
        type: DataTypes.INTEGER,
        allowNull: false
     } ,*/
  },
  {
    tableName: "productos",
    sequelize: database,
    timestamps: true
  }
);
