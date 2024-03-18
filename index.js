import express from "express";
//making the server
const server = express();
server.listen(5000, () => {
  console.log("server is working");
});
