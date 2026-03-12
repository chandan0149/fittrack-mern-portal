const Joi = require("joi");

const programSchema = Joi.object({

  programId: Joi.string().required(),

  name: Joi.string().required(),

  category: Joi.string().required(),

  level: Joi.string().valid("Beginner","Intermediate","Advanced"),

  price: Joi.number().min(0).required()

});

module.exports = programSchema;