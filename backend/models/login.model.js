const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const LoginHistory = sequelize.define(
  "LoginHistory",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    loginTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    ipAddress: {
      type: DataTypes.STRING(45), // IPv6 compatible
    },
  },
  {
    tableName: "login_history",
    timestamps: false,
  }
);

module.exports = LoginHistory;
