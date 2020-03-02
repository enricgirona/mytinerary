const express = require("express");

const googleModel = require("../model/googleModel");

const router = express.Router();

const auth = require("../../middleware/auth");

/*post favorite*/
router.post("/post", auth, (req, res) => {
  googleModel.findByIdAndUpdate({ _id: req.body._id }, { $push: { favorites: req.body.favorite } }).then(googleModel => {
    res.send(googleModel);
  });
});

module.exports = router;
