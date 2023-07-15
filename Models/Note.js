
const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

mongoose.set('strictQuery', false);



mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB: ", error.message);
  });

  
//create schema
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
  timesStamp: {
    type: Date,
    default: Date.now,
  },
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject.id_id;
    delete returnedObject.__v;
  },
});
module.exports = mongoose.model('Note',noteSchema)