"use strict";

const apiServices = require("../controllers/index");

const routers = (app) => {
  app.use("/api/", apiServices);
};

module.exports = routers;
