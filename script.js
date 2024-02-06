const display1 = document.querySelector(".dis1");
const display2 = document.querySelector(".dis2");
const btns = document.querySelectorAll("div.operators .num");
const ops = document.querySelectorAll("div.operators .op");
const equal = document.querySelector('.Equal');
const clear = document.querySelector(".Clear");
let first = "";
let second = "";
let operator = "";

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function remainder(a, b) {
    return a % b;
}


function operate(a, o, b) {

    if (o === '+') {
        return add(a, b)
    }
    else if (o === '-') {
        return subtract(a, b)
    }
    else if (o === '*') {
        return multiply(a, b)
    }
    else if (o === '/') {
        return divide(a, b)
    }
    else if (o === '%') {
        return remainder(a, b);
    } else {
        return alert("error");
    }
}


for (let val of btns) {
    val.onclick = () => {
        if (operator === "") {
            display1.innerHTML += val.innerText;
            first = display1.innerHTML;
        }
        if (operator !== "") {
            display1.innerHTML = "";
            display2.innerHTML += val.innerText;
            second = display2.innerHTML;
        }
    }
}
for (let val of ops) {
    val.onclick = () => {        
        if (second !== "") {
            display2.innerHTML = "";
            console.log(first, operator, second);
            first = operate(+first, operator, +second);
            display1.innerHTML = first;
            
        }
        operator = val.innerText;

    }

}

equal.onclick = () => {
    first = operate(+first, operator, +second);
    display1.innerHTML = first;
    display2.innerHTML = "";
    second = "";
}

clear.onclick = () => {
    display1.innerHTML ="";
    display2.innerHTML = "";
    first = "";
    second = "";
    operator = "";
}
