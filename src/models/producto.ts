import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../db'

class Producto extends Model {
  public id!: number
  public nombre!: string
  public precio!: number
  public cantidad!: number
}

Producto.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Producto',
  },
)

export { Producto }
