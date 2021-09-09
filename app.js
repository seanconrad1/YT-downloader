const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/', () => {
  path.resolve('public');
});

app.get('/download', (req, res) => {
  const { URL } = req.query;

  console.log(URL);

  res.header('Content-Disposition', 'attachment; filename="video.mp4"');

  try {
    ytdl(URL, { format: 'mp4', quality: 'highestaudio' }).pipe(fs.createWriteStream('./public/video.mp4'));
  } catch (err) {
    console.error(err);
  }
});

app.listen(4000, () => {
  console.log('http://localhost:4000');
});
