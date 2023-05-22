const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const PORT = 8080;
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://43.201.96.28"],
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

const user_info_router = require("./routes/user_info");
app.use("/user", user_info_router);

const wanter_board_router = require("./routes/wanter_board");
app.use("/wanter", wanter_board_router);

const wanter_comment_router = require("./routes/wanter_comment");
app.use("/wanter", wanter_comment_router);

const helper_board_router = require("./routes/helper_board");
app.use("/helper", helper_board_router);

const helper_comment_router = require("./routes/helper_comment");
app.use("/helper", helper_comment_router);

// app.use("/api", indexRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
