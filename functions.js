
function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector('#datetime').textContent = currentDateTime;
}
setInterval(updateDateTime, 100);


function generateRandom() {
  const n = Math.floor(Math.random() * 1000)+1;

  document.querySelector('#random').textContent = n;
}
setInterval(generateRandom, 1000);
