"use strict";
const server = require("./server");

const port = process.env.PORT || "3000";

server.listen(port);
console.log("Listening on port " + port);

server.on("error", (err) => {
  console.error(err);
});
