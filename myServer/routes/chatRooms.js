require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const router = express.Router();

const jwt = require("jsonwebtoken");
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

const ChatRoom = require("../models/chatRoom");
const Message = require("../models/message");
const { snakeToCamel } = require("../utils/index");

router.use(express.json());

router.use((req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(403).json({ code: 403, message: "Token not provided" });
  }

  const payload = jwt.decode(token);
  req.user = payload.userProfile;
  next();
});

io.on("connection", (socket) => {
  console.log("A user connected!");

  socket.on("send_msg", async (data) => {
    try {
      const message = new Message({
        room_id: data.roomId,
        sender_id: req.user.id,
        content: data.content,
      });

      await message.save();

      await ChatRoom.findByIdAndUpdate(data.roomId, {
        $set: { last_message: message },
        $inc: { unread_count: 1 },
      });

      io.emit("receive_msg", data);
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected!");
  });
});

const getLastMessage = async (roomId) => {
  try {
    const lastMessage = await Message.findOne({ room_id: roomId })
      .sort({ created_at: -1 })
      .exec();

    return lastMessage;
  } catch (error) {
    console.error("Error fetching latest message:", error);
    return null;
  }
};

// 사용자의 채팅 목록 조회
router.get("/", async (req, res) => {
  const userId = req.user.id;

  try {
    const chatRooms = await ChatRoom.find({
      "participants.id": userId,
    });

    const data = chatRooms.map((room) => {
      const lastMessage = getLastMessage(room._id);

      return {
        ...snakeToCamel(room.toObject()),
        lastMessage,
      };
    });

    res.status(200).json({
      status: "success",
      code: 200,
      message: "채팅방 목록 조회 성공",
      data,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error fetching chat room and messages",
    });
  }
});

// 채팅방 데이터 조회
router.get("/:id", async (req, res) => {
  const roomId = req.params.id;

  try {
    const chatRoom = await ChatRoom.findById(roomId);
    const msgs = await Message.find({ room_id: roomId });

    const data = {
      participants: chatRoom.participants,
      product: chatRoom.product,
      messages: msgs,
    };

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "채팅방 정보 조회 성공",
      data,
    });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "Error fetching chat room and messages" });
  }
});

// 채팅방 생성
router.post("/", async (req, res) => {
  try {
    const { participants, product } = req.body;
    const { id: myId, loginId: myName, profileUrl: myProfileUrl } = req.user;

    const allParticipants = [
      ...participants,
      { id: myId, name: myName, url: myProfileUrl },
    ];

    const existingChatRoom = await ChatRoom.findOne({
      "participants.id": {
        $all: allParticipants.map(({ id }) => id),
      },
      "product.id": product.id,
    });

    if (existingChatRoom) {
      return res.status(200).json({
        status: "success",
        code: 200,
        message: "이미 존재하는 채팅방",
        data: { id: existingChatRoom._id },
      });
    }

    const newChatRoom = new ChatRoom({
      participants: allParticipants,
      product: {
        id: product.id,
        title: product.title,
        price: product.price,
        photo_url: product.photoUrl,
      },
      last_message: null,
    });

    const savedChatRoom = await newChatRoom.save();
    const chatRoomId = savedChatRoom._id;

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "채팅방 생성 성공",
      data: { id: chatRoomId },
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error creating chat room",
    });
  }
});

// 채팅방 삭제
router.delete("/:id", async (req, res) => {
  const roomId = req.params.id;

  try {
    const chatRoom = await ChatRoom.findById(roomId);

    if (!chatRoom) {
      return res.status(404).json({
        code: 404,
        message: "Chat room not found",
      });
    }

    await chatRoom.remove();

    if (chatRoom.last_message) {
      await Message.deleteMany({ room_id: roomId });
    }

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "채팅방 삭제 성공",
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error deleting chat room",
    });
  }
});

module.exports = router;
