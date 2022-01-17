const ormForecast = require("../orm/forecast");

class ForecastService {
  async getAll(req, res) {
    let result = await ormForecast.getAll();
    console.log("result: " + result);
    res.send(200);
  }
}

module.exports = new ForecastService();
