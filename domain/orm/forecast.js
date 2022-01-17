const Db = require("../../infra/db");
const env = require("../../config/environment");

class ForecastOrm {
  constructor() {
    this.collection;
    this.connection = new Db(env.database);
    this.init();
  }

  async init() {
    await this.connection.connect();
    console.log(this.connection.db);
    console.log("collections: " + this.connection.db.collections.toString());
    // this.collection = this.connection.db.collections;
    // collection("forecast");
  }
  getAll() {
    return this.collection.find();
  }

  getById(id) {}
  async store(forecast) {
    try {
      const forecastDocument = await new this.collection(forecast);
      forecastDocument.save();
      return forecastDocument;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

module.exports = new ForecastOrm();
// exports.GetAll = async () => {
//   try {
//     return await conn.db.connMongo.User.find({ IsDelete: false });
//   } catch (err) {
//     console.log(" err orm-user.GetAll = ", err);
//     return await { err: { code: 123, messsage: err } };
//   }
// };

// exports.GetById = async (Id) => {
//   try {
//     return await conn.db.connMongo.User.findOne({
//       userId: Id,
//       IsDelete: false,
//     });
//   } catch (err) {
//     console.log(" err orm-user.GetById = ", err);
//     return await { err: { code: 123, messsage: err } };
//   }
// };

// exports.Store = async (Name, LastName, Age) => {
//   try {
//     const datacenter = await new conn.db.connMongo.User({
//       userId: uuid(),
//       name: Name,
//       lastName: LastName,
//       age: Age,
//       IsDelete: false,
//     });
//     datacenter.save();
//     return true;
//   } catch (err) {
//     console.log(" err orm-user.Store = ", err);
//     return await { err: { code: 123, messsage: err } };
//   }
// };
