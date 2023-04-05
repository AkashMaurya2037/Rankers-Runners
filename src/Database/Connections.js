const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/runningOlymics",{
  })
  .then(() => {
    console.log("This project has connected to mongodb.");
  })
  .catch((err) => {
    console.log("Failed to Connect with MongoDB !");
  });
