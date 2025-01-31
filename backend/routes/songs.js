const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const songs = [
    { id: 1, name: "AI-Recommended Song 1" },
    { id: 2, name: "AI-Recommended Song 2" },
  ];
  res.json(songs);
});

module.exports = router;
