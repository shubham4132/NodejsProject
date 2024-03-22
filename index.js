import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017", {
    dbName: "backend",
  })
  .then((c) => console.log("DatabaseCnnected"))
  .catch((e) => console.log("Database connection error:", e));

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
});
const Message = mongoose.model("Message", messageSchema);
//making the server
const app = express();
//const users = [];
//static folder is served
app.use(express.static(path.join(path.resolve(), "public")));
//using middleswires to access data from the form
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("hi");
  res.render("index");
});
app.get("/add", (req, res) => {
  // res.send("hi");
  Message.create({ name: "Shubh", email: "abc@gmail.com" }).then(() => {
    res.send("Nice");
  });
});
app.post("/contact", async (req, res) => {
  console.log(req.body);

  await Message.create({ name: req.body.name, email: req.body.email });
  res.render("succes");
});
app.get("/users", (req, res) => {
  res.json({
    users,
  });
});
app.listen(5000, () => {
  console.log("server is working");
});
