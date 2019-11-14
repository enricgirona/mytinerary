const express = require("express");

const itineraryModel = require("../model/itineraryModel");

const router = express.Router();

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
