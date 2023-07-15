require('dotenv').config();

const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());




//create model
const Notes = require('./Models/Note')



//to store data d

app.get("/", (request, response) => {
  response.send("<h1>Notes app</h1>");
});

//fetch all resources is the note colection

app.get("/api/notes", (request, response) => {
  // Here, `notes` should be replaced with the actual data source (e.g., fetching notes from the database using the Note model)
  Notes.find({}, {}).then((notes) => {
    response.json(notes);
  });
});

//create post reaquest

app.post("/api/notes", (request, response) => {
  const notes = new Notes(request.body);
  notes
    .save()

    .then((result) => {
      response.status(201).json({ messge: "note crated sucessfully" });
    });
});





//fatching a single resource
app.get('/api/notes/:id',(request,response)=>{
  const id = request.params.id;
Notes.findById(id)

.then((note)=>{
  if(!note){
    return response.status(404).json({error:'note not found'})
  }
  response.json(nodee);


})
.catch((error)=>{
  response.status(500).json({error:'internal server error'})
})
});






//deleting a single resource
app.delete('/api/notes/:id',(request,response)=>{
  const id = request.params.id;
Notes.findByIdAndDelete(id)

.then((deleteNote)=>{
  if(!deleteNote){
    return response.status(404).json({error:'note not found'})
  }
  response.status(204).json({message:'note deleted sucees'})


})
.catch((error)=>{
  response.status(500).json({error:'internal server error'})
})
});

//put the data


app.put('/api/notes/:id',(request,response)=>{
  const id = request.params.id;
  const notePut = request.body;
Notes.findByIdAndUpdate(id,notePut)

.then((updatedNote)=>{
  if(!updatedNote){
    return response.status(404).json({error:'note not found'})
  }
  response.json(updatedNote);


})
.catch((error)=>{
  response.status(500).json({error:'internal server error'})
})
});







  

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
