const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  severity_level: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time_required: {
    type: Number,
    required: true,
    min: 0,
  },
  qualification: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    default: 0,
    min: 0,
  },
  status: {
    type: String,
    enum: ["closed", "assigned", "open"],
    default: "open",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
