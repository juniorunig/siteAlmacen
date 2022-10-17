const Sequelize = require("sequelize");

const DB_NAME = "almacen2022_mysql_nodejs";

const DB_USER = "root";

const DB_PASS = "12345678";

export const database = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASS,

  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

async function generateDb() {
  try {
    await database.sync({ force: false });
    console.log("Base de datos y tablas creada");
  } catch (error) {
    console.log(error);
    console.log("error en conexion!!");
  }
}

generateDb();
