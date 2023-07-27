const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = require("./message").schema;

const chatRoomSchema = new Schema(
  {
    participant_ids: { type: [Number], required: true },
    product: {
      id: { type: Number, required: true, unique: true },
      title: { type: String, required: true },
      price: { type: Number, default: null },
      photo_url: { type: String, required: true },
    },
    unread_count: { type: Number, default: 0 },
    last_message: { type: messageSchema, default: null },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

chatRoomSchema.index({ participant_ids: 1, "product.id": 1 });

module.exports = mongoose.model("ChatRoom", chatRoomSchema);
