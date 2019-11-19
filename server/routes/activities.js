const express = require("express");

const activityModel = require("../model/activityModel");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ msg: "Activities test route." });
});

/*get activities within an itinerary_id*/
router.get("/:itinerary_id", (req, res) => {
  let itinerary_id = req.params.itinerary_id;
  activityModel
    .find({ itinerary_id: itinerary_id })
    .then(activity => {
      res.send(activity);
    })
    .catch(err => console.log(err));
});

module.exports = router;
