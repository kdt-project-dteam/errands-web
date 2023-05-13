const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const session = require("express-session");
const dotenv = require("dotenv");
const PORT = 8080;
const io = require("socket.io")(http);
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://13.124.40.176"],
    credentials: true,
  })
);

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRET_KEY,
    sameSite: "None",
    cookie: { maxAge: 60 * 6000 * 24 },
  })
);

// const SocketController = require("./controller/Cchat");

const indexRouter = require("./routes/errands");
// const chatRouter = require("./routes/chat");

app.use("/api", indexRouter);
// app.use("/chat", chatRouter);

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
