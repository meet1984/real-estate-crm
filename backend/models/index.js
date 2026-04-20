const User = require("./User");
const Lead = require("./lead");

// Relationship
User.hasMany(Lead, { foreignKey: "assignedTo" });
Lead.belongsTo(User, { foreignKey: "assignedTo" });

module.exports = { User, Lead };