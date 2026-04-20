const { Deal, User, Property, lead } = require("../models");

// CREATE DEAL
exports.createDeal = async (req, res) => {
  try {
    const deal = await Deal.create(req.body);
    res.status(201).json(deal);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL DEALS
exports.getDeals = async (req, res) => {
  try {
    const deals = await Deal.findAll({
      include: [
        { model: User, attributes: ["id", "name"] },
        { model: Property },
        { model: Lead }
      ]
    });

    res.json(deals);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE DEAL
exports.updateDeal = async (req, res) => {
  try {
    const { id } = req.params;

    await Deal.update(req.body, { where: { id } });

    const updated = await Deal.findByPk(id);
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE DEAL
exports.deleteDeal = async (req, res) => {
  try {
    const { id } = req.params;

    await Deal.destroy({ where: { id } });

    res.json({ message: "Deal deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};