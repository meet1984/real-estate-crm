const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {
  createProperty,
  getProperties,
  updateProperty,
  deleteProperty
} = require("../controllers/propertyController");

// Protected routes
router.post("/", auth, createProperty);
router.get("/", auth, getProperties);
router.put("/:id", auth, updateProperty);
router.delete("/:id", auth, role("admin"), deleteProperty);

module.exports = router;