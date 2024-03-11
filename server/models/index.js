'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.cart.belongsTo(db.users, {foreignKey: { allowNull: false } });
db.users.hasMany(db.cart, {
  allowNull: false,
  onDelete: 'CASCADE'
});

db.ratings.belongsTo(db.products, {foreignKey: { allowNull: false } });
db.products.hasMany(db.ratings, {
  allowNull: false,
  onDelete: 'CASCADE'
});

db.cart.belongsToMany(db.products, { through: db.cartRow });
db.products.belongsToMany(db.cart, { through: db.cartRow });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
