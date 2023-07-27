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
const User = require("../models/user");
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

const getParticipants = async (participantIds) => {
  try {
    const users = await User.find({ id: { $in: participantIds } });

    return users.map((user) => user.toObject());
  } catch (error) {
    console.error("Error fetching users by ids:", error);
    throw error;
  }
};

const getLastMessage = async (roomId) => {
  try {
    const lastMessage = await Message.findOne({ room_id: roomId })
      .sort({ created_at: -1 })
      .exec();

    return lastMessage === null ? lastMessage : lastMessage.toObject();
  } catch (error) {
    console.error("Error fetching latest message:", error);
    throw error;
  }
};

// 사용자의 채팅 목록 조회
router.get("/", async (req, res) => {
  const userId = req.user.id;

  try {
    const chatRooms = await ChatRoom.find({
      participant_ids: { $in: userId },
    });

    const promises = chatRooms.map(async (room) => {
      const { participant_ids, _id, ...rest } = room.toObject();

      const [participants, lastMessage] = await Promise.all([
        getParticipants(participant_ids),
        getLastMessage(_id),
      ]);

      return {
        ...rest,
        participants,
        lastMessage,
      };
    });

    const data = await Promise.all(promises);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "채팅방 목록 조회 성공",
      data: snakeToCamel(data),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "채팅방 목록 조회에 실패했습니다.",
    });
  }
});

// 사용자가 등록한 특정 상품의 채팅 목록
router.get("/", async (req, res) => {
  const productId = req.query.productId;

  try {
    const chatRooms = await ChatRoom.find({
      "product.id": productId,
    });

    const promises = chatRooms.map(async (room) => {
      const { participant_ids, _id, ...rest } = room.toObject();

      const [participants, lastMessage] = await Promise.all([
        getParticipants(participant_ids),
        getLastMessage(_id),
      ]);

      return {
        ...rest,
        participants,
        lastMessage,
      };
    });

    const data = await Promise.all(promises);

    res.status(200).json({
      status: "success",
      code: 200,
      message: "특정 상품의 채팅방 목록 조회 성공",
      data: snakeToCamel(data),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "특정 상품의 채팅방 목록 조회에 실패했습니다.",
    });
  }
});

// 채팅방 데이터 조회
router.get("/:id", async (req, res) => {
  const roomId = req.params.id;

  try {
    const chatRoom = await ChatRoom.findById(roomId);
    const participants = await getParticipants(chatRoom.participant_ids);
    const msgs = await Message.find({ room_id: roomId });

    const data = {
      participants,
      product: chatRoom.product.toObject(),
      messages: msgs.map((msg) => msg.toObject()),
    };

    return res.status(200).json({
      status: "success",
      code: 200,
      message: "채팅방 정보 조회 성공",
      data: snakeToCamel(data),
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ code: 500, message: "채팅방 정보 조회에 실패했습니다." });
  }
});

// 채팅방 생성
router.post("/", async (req, res) => {
  try {
    const { participantIds, product } = req.body;
    const { id: myId } = req.user;

    const allParticipantIds = [...participantIds, myId];

    const existingChatRoom = await ChatRoom.findOne({
      participant_ids: {
        $all: allParticipantIds,
      },
      "product.id": product.id,
    });

    if (existingChatRoom) {
      return res.status(200).json({
        status: "success",
        code: 200,
        message: "이미 존재하는 채팅방입니다.",
        data: { id: existingChatRoom._id },
      });
    }

    const newChatRoom = new ChatRoom({
      participant_ids: allParticipantIds,
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
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "채팅방 생성을 실패했습니다.",
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
        message: "해당 채팅방이 존재하지 않습니다.",
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
    console.error(error);
    res.status(500).json({
      code: 500,
      message: "채팅방 삭제를 실패했습니다.",
    });
  }
});

module.exports = router;
