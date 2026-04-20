const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Lead = sequelize.define("Lead", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    validate: { isEmail: true }
  },
  budget: {
    type: DataTypes.FLOAT
  },
  status: {
    type: DataTypes.ENUM("new", "contacted", "qualified", "closed", "lost"),
    defaultValue: "new"
  }
}, {
  timestamps: true
});

module.exports = Lead;