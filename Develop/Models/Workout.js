const mongoose = require("mongoose");
//this reset the schema and model when I received
//OverwriteModelError
mongoose.models = {};
mongoose.modelSchemas = {};

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  }, //needs a default value

  exercises: [
    {
      //need to define the type
      type: {
        type: String
      },
      name: {
        type: String,
        required: "Enter a name"
      },
      distance: {
        type: Number
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
