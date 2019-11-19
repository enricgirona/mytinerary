const express = require("express");

const itineraryModel = require("../model/itineraryModel");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ msg: "Cities test route." });
});

/*get all itineraries*/
router.get("/all", (req, res) => {
  itineraryModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*get itineraries within a city name*/
router.get("/:name", (req, res) => {
  let cityRequested = req.params.name;
  itineraryModel
    .find({ city: cityRequested })
    .then(itinerary => {
      res.send(itinerary);
    })
    .catch(err => console.log(err));
});

module.exports = router;
