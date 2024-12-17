import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Emoji");

const EmojiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  emoji: { type: String, required: true },
  emojiSequence: { type: String, required: true },
  translation: { type: String, required: true },
  authorNickname: { type: String, required: true },
  likes: { type: Number, required: true },
});

const EmojiModel = mongoose.model("Emoji", EmojiSchema);

app.get("/", (req, res) => {
  res.json("backend working");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

// add emoji
app.post("/add", async (req, res) => {
  const { name, emoji, emojiSequence, translation, authorNickname } = req.body;
  const newEmoji = new EmojiModel({
    name,
    emoji,
    emojiSequence,
    translation,
    authorNickname,
    likes: 0,
  });
  await newEmoji.save();
  res.json("emoji added");
});

// get all emojis
app.get("/emojis", async (req, res) => {
  const emojis = await EmojiModel.find();
  res.json(emojis);
});

// get emoji by id
app.get("/emoji/:id", async (req, res) => {
  const emoji = await EmojiModel.findById(req.params.id);
  res.json(emoji);
});
