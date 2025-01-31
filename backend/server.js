const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const songsRouter = require('./routes/songs');
app.use('/api/songs', songsRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
