const express = require("express");
const router = express.Router();
const {
  registerController,
  registerValidation,
  loginController,
  loginValidation
} = require("../controllers/userControllers");

router.post("/register", registerValidation, registerController);
router.post("/login", loginValidation, loginController);

module.exports = router;
