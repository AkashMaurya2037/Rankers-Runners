const express = require("express")
const routers = new express.Router();

const Rankers = require("../Models/Schema");

// Create Datas with the help of post men
routers.post("/insertData", async (req, res) => {
    try {
      const addMensRecords = new Rankers(req.body);
      console.log(req.body);
       const insertData = await addMensRecords.save();
      res.status(201).send(insertData);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // Read all Data
  routers.get("/readAll", async (req, res) => {
    try {
       const ReadAll = await Rankers.find({});
      res.status(200).send(ReadAll);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // Read by id
  routers.get("/read/:id", async (req, res) => {
    try {
      const _id = req.params.id
       const readOne = await Rankers.findById({_id});
      res.status(200).send(readOne);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  // Update by id
  routers.patch("/update/:id", async (req, res) => {
    try {
      const _id = req.params.id
       const updateOne = await Rankers.findByIdAndUpdate({_id},req.body,
        {new:true});
      res.status(200).send(updateOne);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Update by id
  routers.delete("/deleteOne/:id", async (req, res) => {
    try {
      const _id = req.params.id
       const deleteOne = await Rankers.findByIdAndDelete({_id});
      res.status(200).send(deleteOne);
    } catch (err) {
      res.status(500).send(err);
    }
  });
  
  // Sorting datas with ranks
  routers.get("/TopRunners", async (req,res)=>{
    try{
      const TopRunners = await Rankers.find({}).sort({"ranking":1})
      res.send(TopRunners).status(200)
    }catch(err){
      res.status(400).send(err)
    }
  })

module.exports = routers