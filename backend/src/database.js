const mongoose = require("mongoose");

const URI = "mongodb://mongo:27017/database";

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("DB connected");
});
