const express = require("express");
const DB = require("./config/db");
const cookie = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 8001;

DB(process.env.DB).then(() => console.log("Mongodb connected"));
app.use(express.json());

app.use(cors());
app.use(cookie());

app.get("/", (req, res) => {
  res.status(200).json("Home Page");
});

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({ message });
});

app.listen(port, () => console.log(`http://localhost:${port}`));
