const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: String,
  text: String,
  image: String,
  tag: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Post", postSchema);
