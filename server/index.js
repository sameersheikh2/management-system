const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const Teachers = require("./models/teachersSchema");

app.use(cors());
app.use(bodyParser.json());
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
app.get("/a", (req, res) => {
  Teachers.find()
    .then((teacher) => {
      res.status(200).json(teacher);
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err });
    });
});

app.post("/create", async (req, res) => {
  const teachers = Teachers({
    id: req.body.id,
    teacherName: req.body.teacherName,
    email: req.body.email,
    contact: req.body.contact,
    department: req.body.department,
  });
  try {
    const data = await teachers.save();
    res.json(data);
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  // listen to  req.
  console.log(`Example app listening on port ${port}`);
});
