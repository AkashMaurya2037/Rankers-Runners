const express = require("express");
require("./Database/Connections");
const Rankers = require("./Models/Schema");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hi ! I am Akash Maurya and this website is runing.");
});

// Create Datas with the help of post men
app.post("/insertData", async (req, res) => {
  try {
    const addMensRecords = new Rankers(req.body);
    console.log(req.body);
    const insertData = await addMensRecords.save();
    res.status(201).send(insertData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read Datas
app.post("/readDatas", async (req, res) => {
  try {
    const readDatas = await addMensRecords.find({});
    res.status(200).send(readDatas);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.listen(port, () => {
  console.log(`Connection with ${port} is live now.`);
});
