const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Read the notes from the db.json file
router.get('/api/notes', (req, res) => {
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json', 'utf-8'));
  res.json(notes);
});

// Save a new note to the db.json file
router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4(); // Assign a unique ID using uuid

  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json', 'utf-8'));
  notes.push(newNote);

  // Write the updated notes array back to db.json
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2), 'utf-8');

  res.json(newNote);
});

// Delete a note by ID
router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json', 'utf-8'));

  // Filter out the note with the specified ID
  const updatedNotes = notes.filter((note) => note.id !== noteId);

  // Write the updated notes array back to db.json
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(updatedNotes, null, 2), 'utf-8');

  res.json({ message: 'Note deleted' });
});

module.exports = router;
