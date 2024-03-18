import express from "express";
//making the server
const app = express();

app.get("/", (req, res) => {
  // res.send("hi");
  res.sendStatus(404);
});
app.listen(5000, () => {
  console.log("server is working");
});
