const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fileUpload = require("express-fileupload"); // 👈 add this


const sequelize = require("./config/db");
const userRoutes = require("./routes/users.routes");
const orderRoutes = require("./routes/orders.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Connect DB and Start Server
sequelize
  .sync()
  .then(() => {
    console.log("✅ Database connected & synced with Render PostgreSQL");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ DB connection failed:", err));
