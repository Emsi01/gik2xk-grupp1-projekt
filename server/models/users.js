module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'users',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: DataTypes.STRING(200),
          allowNull: false,
          validate: {
            len: [4, 200],
            isEmail: true
          }
        },
        username: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            len: [3, 50]
          }
        },
        firstname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
              len: [2, 50]
            },
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
            len: [2, 50]
            },
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [3, 50]
            }
        }
        },
        { underscored: true }
    );
  };