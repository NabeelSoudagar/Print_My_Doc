const { supabase } = require("../config/supabase");
const db = require("../models");
const Order = db.Order;

// 📌 Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { file_url, file_name, copies, color } = req.body;

    if (!file_url || !file_name) {
      return res.status(400).json({ error: "File URL and name are required" });
    }

    // Save order in DB
    const newOrder = await Order.create({
      file_url,
      file_name,
      copies: copies || 1,
      color: color || "bw",
      status: "pending",
    });

    res.status(201).json(newOrder);
  } catch (err) {
    console.error("❌ createOrder error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📌 Get all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    console.error("❌ getOrders error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📌 Print order (update status)
exports.printOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) return res.status(404).json({ error: "Order not found" });

    order.status = "printed";
    await order.save();

    res.json(order);
  } catch (err) {
    console.error("❌ printOrder error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// 📌 Delete order
exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) return res.status(404).json({ error: "Order not found" });

    await order.destroy();
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("❌ deleteOrder error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
