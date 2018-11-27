const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  player1: { type: String, required: true },
  p1Points: { type: String, required: true },
  player2: { type: String, required: true },
  p2Points: { type: String, required: true },
  year: { type: Number, required: true }
});

gameSchema.set("timestamps", true);

gameSchema.set("toObject", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model("Game", gameSchema);
