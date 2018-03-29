var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema cionstructor, create a new CharacterSchema object
// This is similar to a Sequelize model
var racesSchema = new Schema({
    // `title` is of type String
    // races: String,
    // classes: String
    //   hit_die: Number,
    // proficiency_choices: [],
    // proficiencies:[],
    // saving_throws:[],
    // starting_equipment: Schema.Types.Mixed,
    // class_levels: Schema.Types.Mixed,
    // subclasses: [],
    // spellcasting: Schema.Types.Mixed,
_id: Schema.Types.Mixed,
index: Number,
name: String,
speed: Number,
ability_bonues: [],
age: String,
alignment: String,
size: String,
size_description: String,
start_proficiencies: [],
starting_proficiency_options: Schema.Types.Mixed,
languages: [],
language_options: Schema.Types.Mixed,
language_desc: String,
traits: [],
subraces:[],
url: String
});

// This creates our model from the above schema, using mongoose's model method
var races = mongoose.model("races", racesSchema);

// Export the Character model
module.exports = races;