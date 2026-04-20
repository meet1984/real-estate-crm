const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createDeal,
  getDeals,
  updateDeal,
  deleteDeal
} = require("../controllers/dealController");

// Routes
router.post("/", auth, createDeal);
router.get("/", auth, getDeals);
router.put("/:id", auth, updateDeal);
router.delete("/:id", auth, role("admin"), deleteDeal);

module.exports = router;
