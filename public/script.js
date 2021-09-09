// const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

console.log(process.env);

function sendURL(URL) {
  window.location.href = `http://104.248.236.245:4000/download?URL=${URL}`;

  // window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

// eslint-disable-next-line no-unused-vars
function downloadVideo() {
  console.log(`URL: ${URLinput.value}`);
  const error = document.getElementById('error');
  const button = document.getElementsByTagName('button')[0];

  const regexp = /^https:\/\/www.youtube.com\/watch\?v=\w+/gm;
  const regexp2 = /^https:\/\/youtu.be\/\w+/gm;
  if (regexp2.test(URLinput.value) === true || regexp.test(URLinput.value) === true) {
    error.setAttribute('hidden', '');
    button.innerHTML = 'Downloading...';
    sendURL(URLinput.value);
    button.innerHTML = 'Done!';
  } else {
    error.removeAttribute('hidden');
  }
}
