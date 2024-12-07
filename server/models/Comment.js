const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);