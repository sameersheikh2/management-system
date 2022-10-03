const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const dotenv = require("dotenv");

app.use(cors());
dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(port, () => {
  // listen to  req.
  console.log(`Example app listening on port ${port}`);
});
