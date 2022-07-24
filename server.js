const express = require('express');
const path = require('path');
const router = express.Router();
const fs =require('fs');
const notesData = require('./db/db.json');


const PORT = process.env.PORT || 3001;
const app = express();

// //const notes = require ('./db/db.json')

// //middleware for find static assets
app.use(express.static("public"));

// //middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//app.use('api', api);

const allRoutes = require("./notes")
app.use(allRoutes);

// //the file path for the index.html--?
app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", (req, res)=> {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get('/api/notes', (req, res) => 
res.json(notesData));

app.post('/api/notes', (req, res) => 
res.json(notesData));

app.listen(PORT, ()=> {
    console.log(`listening at http://localhost:${PORT}`);
})