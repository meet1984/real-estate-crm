const User = require("./User");
const Lead = require("./lead");
const Property = require("./Property");
const Deal = require("./Deals");

// Relationships
User.hasMany(Lead, { foreignKey: "assignedTo" });
Lead.belongsTo(User, { foreignKey: "assignedTo" });

User.hasMany(Property, { foreignKey: "agentId" });
Property.belongsTo(User, { foreignKey: "agentId" });

// RELATIONS
Deal.belongsTo(User, { foreignKey: "agentId" });
User.hasMany(Deal, { foreignKey: "agentId" });

Deal.belongsTo(Property, { foreignKey: "propertyId" });
Property.hasMany(Deal, { foreignKey: "propertyId" });

Deal.belongsTo(Lead, { foreignKey: "leadId" });
Lead.hasMany(Deal, { foreignKey: "leadId" });

module.exports = { User, Lead, Property, Deal };
