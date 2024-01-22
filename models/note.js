const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  item: String,
  descript: String,
  quantity: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "user",
  },

});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;