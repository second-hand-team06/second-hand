const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const messageSchema = new Schema(
  {
    room_id: { type: ObjectId, required: true, unique: true },
    sender_id: { type: Number, required: true, unique: true },
    content: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = mongoose.model("Message", messageSchema);
