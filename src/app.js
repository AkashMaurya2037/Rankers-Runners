const express = require("express");
require("./Database/Connections");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", async (req, res) => {
  res.send("Hi ! I am Akash Maurya and this website is runing.");
});

app.listen(port, () => {
  console.log(`Connection with ${port} is live now.`);
});
