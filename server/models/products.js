module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'products',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING(200),
          allowNull: false,
          validate: {
            len: [10, 200]
          }
        },
        price: {
          type: DataTypes.DOUBLE,
          allowNull: false,
          },
        imageUrl: {
            type: DataTypes.STRING(255),
            validate: {
              isUrl: true
            }
          },
        },
      { underscored: true }
    );
  };