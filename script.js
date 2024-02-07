const display1 = document.querySelector(".dis1");
const display2 = document.querySelector(".dis2");
const btns = document.querySelectorAll("div.operators .num");
const ops = document.querySelectorAll("div.operators .op");
const equal = document.querySelector('.Equal');
const clear = document.querySelector(".Clear");
const dot = document.querySelector(".dot");
const del = document.querySelector(".Delete")
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
        if(b === 0){
            return display1.innerHTML = "Dumb";
        }
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
        if(display1.innerHTML.includes(".") || display2.innerHTML.includes(".")){
            dot.disabled = true;
        }else{
            dot.disabled = false;
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
    dot.disabled = false;
}
del.onclick = () =>{ 
    display1.innerHTML = display1.innerHTML.slice(0,-1);
    display2.innerHTML = display2.innerHTML.slice(0,-1);
}
