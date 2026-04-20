module.exports = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};


const role = require("../middleware/roleMiddleware");

router.delete("/:id", auth, role("admin"), deleteLead);