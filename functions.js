
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



function color(){

    const rows = 10;
    const cols = 80;

    var x = Math.floor(Math.random()*rows).toString();
    var y = Math.floor(Math.random()*cols).toString();

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    var element = document.getElementById("("+x+","+y+")");
    if (element){
        element.style.backgroundColor = "#"+randomColor;
    }

}
setInterval(color, 1);


function test(){

    var element = document.getElementById("counter");
    if (element){
        const plus = parseInt(element.textContent) +1
        element.textContent = plus;

        var data = {"counter":plus}

    }
}