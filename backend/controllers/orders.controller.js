const { supabase } = require("../config/supabase");
const db = require("../models");
const Order = db.Order;

// 📌 Create a new order (with file upload to Supabase)
exports.createOrder = async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = req.files.file;
    const fileName = `${Date.now()}_${file.name}`;

    // Upload file to Supabase storage
    const { data, error } = await supabase.storage
      .from("documents") // bucket name
      .upload(fileName, file.data, {
        contentType: file.mimetype,
      });

    if (error) {
      console.error("Supabase upload error:", error);
      return res.status(500).json({ error: "File upload failed" });
    }

    const fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/documents/${fileName}`;

    // Save order in DB
    const newOrder = await Order.create({
      fileUrl,
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
