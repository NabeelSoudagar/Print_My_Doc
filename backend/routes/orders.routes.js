const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const ordersController = require("../controllers/orders.controller");

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Upload order route with authentication and file upload
router.post("/upload", upload.single("file"), ordersController.uploadOrder);

// Print document route
router.post("/print/:orderId", ordersController.printDocument);

module.exports = router;
