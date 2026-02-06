const express = require("express");
const ProfileControllers = require("../controllers/profileControllers");
const profileRouter = express.Router();

profileRouter.post("/update-userName", ProfileControllers.changeUserName);
profileRouter.post("/update-password", ProfileControllers.changePasswordValidation, ProfileControllers.changePassword);




module.exports = profileRouter;