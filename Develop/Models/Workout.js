const mongoose = require("mongoose");
//this reset the schema and model when I received
//OverwriteModelError
mongoose.models = {};
mongoose.modelSchemas = {};

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercises: [
    {
      type: {
        type: String,
        required: "Select the type"
      },
      name: {
        type: String,
        required: "Enter a name"
      },
      duration: {
        type: Number,
        required: "Enter exercise duration in minutes"
      },
      distance: {
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
