const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Deal = sequelize.define("Deal", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("pending", "closed", "cancelled"),
    defaultValue: "pending"
  },
  dealDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});

module.exports = Deal;