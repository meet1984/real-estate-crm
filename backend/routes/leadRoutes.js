const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead
} = require("../controllers/leadController");

// Protected routes
router.post("/", auth, createLead);
router.get("/", auth, getLeads);
router.put("/:id", auth, updateLead);

// 👇 PUT YOUR CODE HERE
router.delete("/:id", auth, role("admin"), deleteLead);

module.exports = router;