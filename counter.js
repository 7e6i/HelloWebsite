
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

    var element = document.getElementById("counter");

    if (element){
        element.textContent = 0;

    }
}

var state = 0;

function timer(){

    var element = document.getElementById("start");

    state +=1;

    if (element){
        if (element.textContent == "Start"){
            element.textContent = "Stop";
        }
        else if (element.textContent == "Stop"){
            element.textContent = "Start";
        }
    }
}