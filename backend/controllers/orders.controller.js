const Order = require("../models/orders.model");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

// Upload order controller
exports.uploadOrder = async (req, res) => {
  try {
    
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    
    let decoded;
    try {
      decoded = jwt.verify(token, "your_secret_key");
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const userId = decoded.id;

    // Save order details to DB
    const { copies, type, binding_type, delivery_address } = req.body;
    const fileName = req.file.filename;

    const order = await Order.create({
      user_id: userId,
      file_name: fileName,
      copies: copies,
      color_type: type,
      binding_type: binding_type || 'none',
      payment_method: 'cash_on_delivery',
      delivery_address: delivery_address,
    });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error("❌ Upload order error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Print document controller
exports.printDocument = async (req, res) => {
  try {
    const { orderId } = req.params;

    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing" });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, "your_secret_key");
    } catch (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const userId = decoded.id;

    // Find the order
    const order = await Order.findOne({ where: { id: orderId, user_id: userId } });
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Simulate printing (in real app, integrate with printer API)
    console.log(`Printing document: ${order.file_name} for order ${orderId}`);

    res.status(200).json({ message: "Document sent to printer" });
  } catch (error) {
    console.error("❌ Print document error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
