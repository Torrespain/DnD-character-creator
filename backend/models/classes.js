var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema cionstructor, create a new CharacterSchema object
// This is similar to a Sequelize model
var classesSchema = new Schema({
  // `title` is of type String
  // races: String,
  // classes: String
_id: Schema.Types.Mixed,
index: Number,
name: String,
hit_die: Number,
proficiency_choices: [],
proficiencies:[],
saving_throws:[],
starting_equipment: Schema.Types.Mixed,
class_levels: Schema.Types.Mixed,
subclasses: [],
spellcasting: Schema.Types.Mixed
});

// This creates our model from the above schema, using mongoose's model method
var dnd = mongoose.model("classes", classesSchema);

// Export the Character model
module.exports = dnd;