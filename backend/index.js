const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
require("dotenv").config();


require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CRM Backend Running");
});

// DB connection test
sequelize.authenticate()
  .then(() => console.log("✅ MySQL Connected"))
  .catch(err => console.error("❌ DB Error:", err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// sync DB
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Tables Created"))
  .catch(err => console.error(err));




const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);



const { User, lead } = require("./models");

sequelize.sync({ alter: true })
  .then(() => console.log("✅ Tables Updated"))
  .catch(err => console.error(err));



const leadRoutes = require("./routes/leadRoutes");

app.use("/api/leads", leadRoutes);