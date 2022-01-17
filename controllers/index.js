"use strict";

const express = require("express"),
  router = express.Router(),
  forecast = require("../domain/services/forecast");

console.log("[[ FORECAST ]]");

router.get("/forecast", forecast.getAll);
// router.get("/users/:id", users.GetById);
// router.post("/users/", users.Store);
// router.delete("/users/:id", users.DeleteById);
// router.patch("/users/:id", users.UpdateById);

module.exports = router;
