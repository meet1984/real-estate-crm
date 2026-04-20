const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Property = sequelize.define("Property", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM("residential", "commercial"),
    allowNull: false
  },
  size: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.ENUM("available", "sold"),
    defaultValue: "available"
  }
}, {
  timestamps: true
});

module.exports = Property;