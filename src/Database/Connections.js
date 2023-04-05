const mongoose = require("mongoose");

mongoose
  .connect("mongodb//localhost:27017/runingOlymics")
  .then(() => {
    console.log("This project has connected to mongodb.");
  })
  .catch((err) => {
    console.log("Failed to Connect with MongoDB !");
  });
