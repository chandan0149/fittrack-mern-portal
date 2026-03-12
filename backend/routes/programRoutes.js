const express = require("express");
const router = express.Router();

const Program = require("../models/Program");
const programSchema = require("../validators/programValidator");


router.post("/", async (req,res,next) => {

  try {

    const { error, value } = programSchema.validate(req.body);

    if(error) throw error;

    const program = await Program.create(value);

    res.status(201).json({
      success:true,
      message:"Program created",
      data:program
    });

  } catch(err) {
    next(err);
  }

});


router.get("/", async (req,res,next) => {

  try {

    const programs = await Program.find();

    res.status(200).json({
      success:true,
      message:"Programs fetched",
      data:programs
    });

  } catch(err) {
    next(err);
  }

});

module.exports = router;