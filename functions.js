
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

    const bday = Date.parse('01 Apr 2004 00:00:00 EST');
    const now = new Date();
    const age = Math.floor((now-bday)/86400000)

    var element = document.getElementById("age");
    if (element){
        element.textContent = "\\("+age + "\\) days";
    }
}
age();

