import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Token extends Model {
    static associate(models) {
      // define associations here, e.g.
      this.hasMany(models.Price);
    }
  }
  Token.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      symbol: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'tokens',
    }
  );
  return Token;
};
