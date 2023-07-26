const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = require("./message").schema;

const chatRoomSchema = new Schema(
  {
    participants: [
      {
        id: { type: Number, required: true, unique: true },
        name: { type: String, required: true },
        url: { type: String },
      },
    ],
    product: {
      id: { type: Number, required: true, unique: true },
      title: { type: String, required: true },
      price: { type: Number, default: null },
      photo_url: { type: String, required: true },
    },
    unread_count: { type: Number, default: 0 },
    last_message: messageSchema,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("ChatRoom", chatRoomSchema);
