
function increase(){

    var element = document.getElementById("counter");

    if (element){
        const plus = parseInt(element.textContent) +1;
        element.textContent = plus;

    }
}

function decrease(){

    var element = document.getElementById("counter");

    if (element){
        const plus = parseInt(element.textContent)-1;
        if (plus<0){
            plus = 0;
        }

        element.textContent = plus;
    }
}

function reset(){

    var counter = document.getElementById("counter");
    var seconds = document.getElementById("seconds");
    var rate = document.getElementById("rate");
    var start = document.getElementById("start");

    if (counter && seconds && rate){
        counter.textContent = 0;
        seconds.textContent = "0 sec";
        rate.textContent = "0 sec/n";
        start.textContent = "Start";

    }
}


var seconds = 0;

function startStop(){

    var element = document.getElementById("start");

    if (element){
        if (element.textContent == "Start"){
            element.textContent = "Stop";
        }
        else if (element.textContent == "Stop"){
            element.textContent = "Start";
        }
    }
}


