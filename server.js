const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const uuid = require("./helpers/uuid");

// //middleware for find static assets
app.use(express.static("public"));

// //middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('api', api);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get('/api/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const note = JSON.parse(data);
            res.json(note);
        }
    });
});


app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const { title, text } = req.body;
            if (title && text) {
                const updatedNote = {
                    title,
                    text,
                    id: uuid(),
                }
                const note = JSON.parse(data);
                note.push(updatedNote);
                fs.writeFile(
                    "./db/db.json",
                    JSON.stringify(note, null, 4),
                    (err, data) => {
                        if (err) {
                            throw err;
                        }
                        res.json({ data: req.body, message: "success!" });
                    }
                )
            }
        }
    })
});
//delete item code is not functional yet
app.delete("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            throw err;
        } else {
            const note = JSON.parse(data)
            const identification = req.params.id;
            const currentNotes = note.filter(note => note.id !==identification)
                fs.writeFile(
                    "./db/db.json",
                    JSON.stringify(currentNotes, null, 4),
                    (err, data) => {
                        if (err) {
                            throw err;
                        }
                        res.json({ data: req.body, message: "success!" });
                    }
                )
            }
        })
    });

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
})