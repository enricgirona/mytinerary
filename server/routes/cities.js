const express = require("express");

const cityModel = require("../model/cityModel");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});

/*get all cities*/
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
      console.log(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;
