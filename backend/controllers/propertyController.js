const { Property, User } = require("../models");
const { Op } = require("sequelize");

// CREATE PROPERTY
exports.createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL PROPERTIES (with agent info)
exports.getProperties = async (req, res) => {
  try {
    const { location, minPrice, maxPrice, type, status } = req.query;

    let filter = {};

    if (location) {
      filter.location = location;
    }

    if (type) {
      filter.type = type;
    }

    if (status) {
      filter.status = status;
    }

    if (minPrice && maxPrice) {
      filter.price = {
        [Op.between]: [minPrice, maxPrice]
      };
    } else if (minPrice) {
      filter.price = {
        [Op.gte]: minPrice
      };
    } else if (maxPrice) {
      filter.price = {
        [Op.lte]: maxPrice
      };
    }

    const properties = await Property.findAll({
      where: filter,
      include: [{ model: User, attributes: ["id", "name"] }]
    });

    res.json(properties);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE PROPERTY
exports.updateProperty = async (req, res) => {
  try {
    const { id } = req.params;

    await Property.update(req.body, { where: { id } });

    const updated = await Property.findByPk(id);
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE PROPERTY
exports.deleteProperty = async (req, res) => {
  try {
    const { id } = req.params;

    await Property.destroy({ where: { id } });

    res.json({ message: "Property deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};
