const express = require('express');
const path = require('path');
const router = express.Router();
const fs =require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

//const notes = require ('./db/db.json')

//middleware for find static assets
app.use(express.static("public"));

//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const allRoutes = require("/controllers")
app.use(allRoutes);
//the file path for the index.html--?
app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, ()=> {
    console.log(`listening at http://localhost:${PORT}`);
})