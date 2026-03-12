const express = require("express");
const router = express.Router();

const Enrollment = require("../models/Enrollment");
const Program = require("../models/Program");

router.post("/", async (req,res,next) => {

  try {

    const { userId, programId } = req.body;

    if(!userId){

      return res.status(400).json({
        success:false,
        message:"userId required",
        data:null
      });

    }

    const program = await Program.findOne({ programId });

    if(!program){

      return res.status(404).json({
        success:false,
        message:"Program not found",
        data:null
      });

    }

    const duplicate = await Enrollment.findOne({ userId, programId });

    if(duplicate){

      return res.status(400).json({
        success:false,
        message:"Already enrolled",
        data:null
      });

    }

    const enrollment = await Enrollment.create({
      userId,
      programId
    });

    res.status(201).json({
      success:true,
      message:"Enrollment successful",
      data:enrollment
    });

  } catch(err) {
    next(err);
  }

});

module.exports = router;