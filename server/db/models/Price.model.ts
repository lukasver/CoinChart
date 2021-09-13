import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Price extends Model {
    static associate(models) {
      this.belongsTo(models.Token);
    }
  }

  Price.init(
    {
      date: {
        type: DataTypes.DATE,
        primaryKey: true,
        allowNull: false,
      },
      marketData: {
        type: DataTypes.JSONB,
      },
    },
    {
      sequelize,
      modelName: 'prices',
    }
  );

  return Price;
};
