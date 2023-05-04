const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

const indexRouter = require("./routes/errands");
app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
