import express from "express";
import path from "path";
//making the server
const app = express();
//static folder is served
app.use(express.static(path.join(path.resolve(), "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.send("hi");
  res.render("index", { name: "shubham" });
});
app.listen(5000, () => {
  console.log("server is working");
});
