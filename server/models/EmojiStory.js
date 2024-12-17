const mongoose = require("mongoose");

const EmojiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emoji: { type: String, required: true },
  emojiSequence: { type: String, required: true },
  translation: { type: String, required: true },
  authorNickname: { type: String, required: true },
  likes: { type: Number, required: true },
});
