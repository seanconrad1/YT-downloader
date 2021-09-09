const convertBtn = document.querySelector('.convert-button');
const URLinput = document.querySelector('.URL-input');

function sendURL(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

convertBtn.addEventListener('click', () => {
  console.log(`URL: ${URLinput.value}`);
  sendURL(URLinput.value);
});
