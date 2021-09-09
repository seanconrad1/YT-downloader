const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

function sendURL(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

convertBtn.addEventListener('click', () => {
  console.log(`URL: ${URLinput.value}`);
  const error = document.getElementById('error');
  const button = document.getElementsByTagName('button')[0];

  const regexp = /^https:\/\/www.youtube.com\/watch\?v=\w+/gm;
  if (regexp.test(URLinput.value) === false) {
    console.log('regex failed');
    error.removeAttribute('hidden');
  } else {
    error.setAttribute('hidden', '');
    console.log('regex passed');
    button.innerHTML = 'Downloading...';
    sendURL(URLinput.value);
    button.innerHTML = 'Done!';
  }
});
