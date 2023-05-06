const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").Server(app);
const session = require("express-session");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
  })
);

const indexRouter = require("./routes/errands");
app.use("/api", indexRouter);

http.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
