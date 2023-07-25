const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatRoomSchema = new Schema({
  participants: [
    {
      user_id: { type: Number, required: true, unique: true },
      name: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  product: {
    product_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: {
      type: Number,
      default: null,
    },
    photo_url: { type: String, required: true },
  },
  unread_count: { type: Number, required: true },
  last_message: {
    content: { type: String, required: true },
    sender_id: { type: Number, required: true, unique: true },
    created_at: { type: Date, required: true },
  },
  created_at: { type: Date, required: true },
});

module.exports = mongoose.model("ChatRoom", chatRoomSchema);
