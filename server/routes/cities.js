const express = require("express");

const cityModel = require("../model/cityModel");

const itineraryModel = require("../model/itineraryModel");

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

/*post new city*/
router.post("/post", (req, res) => {
  const newCity = new cityModel({
    name:
      req.body.name.charAt(0).toUpperCase() +
      req.body.name.slice(1).toLowerCase(),
    country:
      req.body.country.charAt(0).toUpperCase() +
      req.body.country.slice(1).toLowerCase()
  });

  /*save city*/
  newCity
    .save()
    .then(city => {
      res.send(city);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

module.exports = router;
