
function increase(){

    var element = document.getElementById("counter");

    if (element){
        const plus = parseInt(element.textContent) +1
        element.textContent = plus;

    }
}

function decrease(){

    var element = document.getElementById("counter");

    if (element){
        const plus = parseInt(element.textContent) -1
        element.textContent = plus;

    }
}