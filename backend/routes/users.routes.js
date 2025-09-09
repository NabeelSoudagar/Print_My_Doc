const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

// Register user
router.post("/", userController.createUser);
router.get("/", userController.getUsers);
// Login user
router.post("/login", userController.loginUser);

module.exports = router;
