const userSchema = require("../models/User");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
require("dotenv").config();
const bcrypt = require("bcrypt");


const changeUserName = async (req, res) => {
  const { name, id } = req.body;
  if (name === "") {
    return res
      .status(400)
      .json({ errors: [{ msg: "You must need to provide a name" }] });
  } else {
    try {
      const user = await userSchema.findOneAndUpdate(
        { _id: id },
        { name: name },
        { new: true }
      );
      const token = jwt.sign({ user }, process.env.SECRET, {
        expiresIn: "7d",
      });
      return res.status(200).json({ token, msg: "Your name has been updated" });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
};

// password changing controller
const changePasswordValidation = [
  body("current")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Current password is required"),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("New Password Must be at least 6 characters"),
];
const changePassword = async (req, res) => {
  const { current, newPassword, userId } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const user = await userSchema.findOne({ _id: userId });
    if (user) {
      const matched = await bcrypt.compare(current, user.password);
      if (!matched) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Your current password is wrong" }] });
      } else {
        try {
          // Encrypting Password
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(newPassword, salt);
          const newUser = await userSchema.findOneAndUpdate(
            { _id: user },
            { password: hash },
            { new: true }
          );
          return res
            .status(200)
            .json({ msg: "Your password has been changed" });
        } catch (error) {
          return res.status(500).json({ errors });
        }
      }
    }
  }
};

module.exports = {
  changeUserName,
  changePassword,
  changePasswordValidation,
};
