const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Order = sequelize.define("Order", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: true },
  file_url: { type: DataTypes.TEXT, allowNull: false },
  file_name: { type: DataTypes.STRING, allowNull: false },
  copies: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  color: { type: DataTypes.STRING, allowNull: false, defaultValue: "bw" },
  status: { type: DataTypes.STRING, defaultValue: "pending" },
}, {
  tableName: "orders",
  timestamps: false
});

module.exports = Order;
