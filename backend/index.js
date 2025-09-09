const express = require("express");
const sequelize = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/users.routes");
const ordersRoutes = require("./routes/orders.routes");

// Import models to ensure they are registered
const User = require("./models/user.model");
const LoginHistory = require("./models/login.model");
const Order = require("./models/orders.model");


const app = express();
app.use(cors());
app.use(express.json()); // parse JSON requests

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", ordersRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Connect DB
sequelize.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// Sync models with database
sequelize.sync({ alter: true })
  .then(() => console.log("✅ Models synced with database"))
  .catch(err => console.error("❌ Model sync error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

