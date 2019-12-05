const express = require("express");

const userModel = require("../model/userModel");

const googleModel = require("../model/googleModel");

const router = express.Router();

const bcrypt = require("bcryptjs");

const config = require("config");

const jwt = require("jsonwebtoken");

const auth = require("../../middleware/auth");

//USER AUTHENTICATION

router.post("/", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  userModel.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign({ id: user.id }, config.get("secret"), { expiresIn: 3600 }, (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email
          }
        });
      });
    });
  });
});

router.get("/user", auth, (req, res) => {
  (userModel, googleModel)
    .findById(req.user.id)
    .select("-password, -googleid")
    .then(user => res.json(user));
});

module.exports = router;
