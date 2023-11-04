const path = require('path');
const router = require('express').Router();

// HTML route to display the landing page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/index.html'));
});

// HTML route to display the notes page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/views/notes.html'));
});

module.exports = router;
