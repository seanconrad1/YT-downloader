const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/', () => {
  path.resolve('public');
});

app.get('/download', (req, res) => {
  const { URL } = req.query;

  res.header('Content-Disposition', 'attachment; filename="video.mp4"');

  ytdl(URL, { format: 'mp4', quality: 'highestaudio' }).pipe(res);
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
});
