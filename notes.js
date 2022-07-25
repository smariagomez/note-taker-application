// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const uuid = require('./helpers/uuid');

// router.get("/", (req, res) => {
//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//       if (err) {
//         throw err;
//       } else {
//         const note = JSON.parse(data);
//         res.json(notes);
//       }
//     });
//   });
  
//   router.post("/", (req, res) => {
//     console.log(req.body);
//     const newNote = {
//       title: req.body.title,
//       text: req.body.text,
//     }=req.body;

//     // //if (tile && text) {
//     //   const updatedNote = {
//     //     title,
//     //     text,
//     //     id: uuidv4(),
//     //   }:
//     // }
//     fs.readFile("./db/db.json", "utf8", (err, data) => {
//       if (err) {
//         throw err;
//       } else {
//         const note = JSON.parse(data);
//         notes.push(newNote);
//         fs.writeFile(
//           "./db/db.json",
//           JSON.stringify(note, null, 4),
//           (err, data) => {
//             if (err) {
//               throw err;
//             }
//             res.json({ data: req.body, message: "success!" });
//           }
//         );
//       }
//     });
//   });
  
// module.exports = router;