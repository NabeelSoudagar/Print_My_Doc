const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
  },
  file_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  copies: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  color_type: {
    type: DataTypes.ENUM('bw', 'color'),
    allowNull: false,
    defaultValue: 'bw',
  },
  binding_type: {
    type: DataTypes.ENUM('none', 'staple', 'glue', 'spiral'),
    allowNull: false,
    defaultValue: 'none',
  },
  payment_method: {
    type: DataTypes.ENUM('cash_on_delivery'),
    allowNull: false,
    defaultValue: 'cash_on_delivery',
  },
  delivery_address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'orders',
  timestamps: false, // Since we have created_at manually
});

module.exports = Order;
