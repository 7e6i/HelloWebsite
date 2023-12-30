var data = {"counter": 50}


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