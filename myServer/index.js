require("dotenv").config();

const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");

app.set("port", process.env.PORT || 4000);
app.use(cors());

const connectDB = require("./models");

connectDB();

const chatRoomsRouter = require("./routes/chatRooms");
app.use("/chat-rooms", chatRoomsRouter);

server.listen(app.get("port"), () => {
  console.log(`listening on port ${process.env.PORT}`);
});
