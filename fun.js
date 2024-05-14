
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




const size = 71;
var x1 = Math.ceil(size/2);
var y1 = Math.ceil(size/2);

function color2(){
    var go = Math.floor(Math.random()*4);
    //go = 3;

    const current = document.getElementById("("+x1+","+y1+")2");

    const colorString = current.style.backgroundColor;
    const colors = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);
    const c = colors[2];
    //console.log(colors);
    const cnew = Math.max(0, c-10);

    current.style.backgroundColor = "rgb("+cnew+","+cnew+","+cnew+")";


    if (x1=== Math.ceil(size/2) && y1=== Math.ceil(size/2)){current.style.backgroundColor= "#aaff00";}


    if (go === 0){x1 = (x1+1+size) % size;}
    else if (go === 1){x1 = (x1-1+size) % size;}
    else if (go === 2){y1 = (y1+1+size) % size;}
    else if (go === 3){y1 = (y1-1+size) % size;}
    //document.getElementById("("+x1+","+y1+")2").style.backgroundColor = "#00ebff";

}
setInterval(color2, 1);