module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'ratings',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            validate: {
              min: 1,
              max: 5
            }
        }
      },
      { underscored: true }
    );
  };