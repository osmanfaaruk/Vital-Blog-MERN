const express = require("express");
const authRouter = express.Router();
const {
  registerController,
  registerValidation,
  loginController,
  loginValidation
} = require("../controllers/userControllers");

authRouter.post("/register", registerValidation, registerController);
authRouter.post("/login", loginValidation, loginController);

module.exports = authRouter;
