const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders.controller");

// Create new order
router.post("/", ordersController.createOrder);

// Get all orders
router.get("/", ordersController.getOrders);

// Print order by ID
router.post("/print/:id", ordersController.printOrder);

// Delete order by ID
router.delete("/:id", ordersController.deleteOrder);

module.exports = router;
