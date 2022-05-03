const express = require("express");

//Express Router
const router = express.Router();
//Joi Library
const joi = require("joi");

const places = [
  {
    id: 1,
    name: "Colorado",
    year: 2001,
    creator: "u1",
  },
  {
    id: 2,
    name: "Idaho",
    year: 1991,
    creator: "u2",
  },
  {
    id: 3,
    name: "Amsterdam",
    year: 2000,
    creator: "u3",
  },
];

router.get("/", (req, res, next) => {
  res.status(200).json({ places });
});

router.get("/:id", (req, res) => {
  const place = places.find((c) => (c.id = parseInt(req.params.id)));
  if (!place) {
    res.status(404).json("Bad request, try finding a place with another ID");
  } else {
    res.send(place);
  }
});

router.post("/", (req, res) => {
  const place = {
    id: places.length + 1,
    name: req.body.name,
    year: req.body.year,
    creator: req.body.creator,
  };
  const result = validatePlace(place);
  if (!result) {
    res.status(400).json(result.error[0].message);
  } else {
    res.json(place);
  }
  places.push(place);

  res.json(place);
});

router.put("/:id", (req, res) => {
  const place = places.find((p) => (p.id = parseInt(req.params.id)));

  place.name = req.body.name;
  place.year = req.body.year;
  place.creator = req.body.creator;
  const result = validatePlace(place);
  if (!result) {
    res.status(400).json(result.error[0].message);
  } else {
    res.json(place);
  }
});

router.delete("/:id", (req, res) => {
  const place = places.find((p) => p.id === parseInt(req.params.id));
  const index = places.indexOf(place);

  places.splice(index, 1);

  res.json(places);
});


module.exports = router;
