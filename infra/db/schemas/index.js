const forecastSchema = require("./forecast");

module.exports.create = (mongodb) => ({
  Forecast: forecastSchema(mongodb),
});
