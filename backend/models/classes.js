var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema cionstructor, create a new CharacterSchema object
// This is similar to a Sequelize model
var classesSchema = new Schema({
  // `title` is of type String
  // races: String,
  // classes: String
// id: String,
  index: Number,
  name: String,
  hit_die: Number,
  proficiency_choices: "",
  proficiencies:"",
  saving_throws:"",
  starting_equipment:"",
  class_levels:"",
  subclasses:"",
  spellcasting:""
});

// This creates our model from the above schema, using mongoose's model method
var Classes = mongoose.model("Classes", classesSchema);

// Export the Character model
module.exports = Classes;