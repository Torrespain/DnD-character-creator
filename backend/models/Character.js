var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CharacterSchema object
// This is similar to a Sequelize model
var CharacterSchema = new Schema({
  // `title` is of type String
  races: String,

});

// This creates our model from the above schema, using mongoose's model method
var Character = mongoose.model("Character", CharacterSchema);

// Export the Character model
module.exports = Character;