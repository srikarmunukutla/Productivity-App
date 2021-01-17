const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
  }
});

const ToDo = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDo;
