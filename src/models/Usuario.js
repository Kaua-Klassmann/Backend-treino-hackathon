import { Model, DataTypes } from "sequelize";

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        nome: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Cargo, { foreignKey: "idCargo", as: "cargo" });
  }
}

export default Usuario;
