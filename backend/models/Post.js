const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  poster: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxLength: [80, "Must be no more than 80 characters"],
  },
  content: {
    type: String,
    required: true,
    maxLength: [8000, "Must be no more than 8000 characters"],
  },
});

module.exports = mongoose.model("Post", PostSchema);
