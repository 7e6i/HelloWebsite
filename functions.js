
function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();


  var element = document.querySelector('#datetime');
  if (element){
    element.textContent = currentDateTime;
  }

}
updateDateTime();
setInterval(updateDateTime, 100);




function generateRandom() {
  const n = Math.floor(Math.random() * 1000)+1;

  var element = document.querySelector('#random');
  if (element){
    element.textContent = n;
  }
}
generateRandom();
setInterval(generateRandom, 1000);




function age(){
    const n = Math.random();

    var element = document.getElementById("age");
    if (element){
        element.textContent = n;
    }
}
age();
setInterval(age,1000);

