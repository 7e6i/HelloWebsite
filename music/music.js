
let btn = document.getElementById('calculate');
let low = document.getElementById('low');
let high = document.getElementById('high');
let divs = document.getElementById('divisions');
let output = document.getElementById('output');

function hello(){

    let low_n = low.value;
    let high_n = high.value;
    let divs_n = divs.value;

    console.log(low_n);

    //console.log(low_n, high_n, divs_n);

    let inter = (high_n / low_n) ** (1/divs_n);
    output.innerHTML = ``

    for (let i = 0; i <= divs_n; i++) {
        output.innerHTML += "<div>" + i + " - " + (low_n * inter **i).toFixed(4) + "</div>"
    }

}

btn.addEventListener('click', hello)