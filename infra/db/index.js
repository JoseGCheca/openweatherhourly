"use strict";
const schemasFactory = require("./schemas");
const { MongoClient } = require("mongodb");
// Connection URL
// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);
// const dbName = "openweatherapi";
class Db {
  constructor(params) {
    console.log(params);
    this.url = params.url;
    this.client = new MongoClient(this.url);
    this.dbName = params.dbName;
    this.db;
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
    schemasFactory.create(this.db);
  }

  getDb() {
    return this.db;
  }
}

module.exports = Db;
