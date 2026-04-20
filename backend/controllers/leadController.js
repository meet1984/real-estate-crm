const { Lead, User } = require("../models");

// CREATE LEAD
exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL LEADS
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.findAll({
      include: [{ model: User, attributes: ["id", "name", "email"] }]
    });
    res.json(leads);
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE LEAD
exports.updateLead = async (req, res) => {
  try {
    const { id } = req.params;

    await Lead.update(req.body, { where: { id } });

    const updatedLead = await Lead.findByPk(id);
    res.json(updatedLead);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE LEAD
exports.deleteLead = async (req, res) => {
  try {
    const { id } = req.params;

    await Lead.destroy({ where: { id } });

    res.json({ message: "Lead deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};