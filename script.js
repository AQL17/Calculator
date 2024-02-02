const display1 = document.querySelector(".dis1");
const btns = document.querySelectorAll("div.operators .num");
const ops = document.querySelectorAll("div.operators .op");
const equal = document.querySelector('.Equal');
const clear = document.querySelector(".Clear");
var dot = document.querySelector(".value");
let first = 0;
let second = 0;
let operand;

function add (a , b){
    return a + b;
}
function subtract (a , b){
    return a - b;
}
function multiply (a , b){
    return a * b;
}
function divide (a , b){
    return a / b;
}
function remainder(a,b){
    return a % b;
}


function operate(a,o,b){

    if(o === '+'){
        return add(a,b)
    }
    else if(o === '-'){
        return subtract(a,b)
    }
    else if(o === '*'){
        return multiply(a,b)
    } 
    else if(o === '/'){
        return divide(a,b)
    }
    else if(o === '%'){
        return remainder(a,b);
    }else {
        return alert("error");
    }
}


for(let val of btns){
    val.onclick = () => {
            if(val.innerText === '.'){
                val.disabled = true;
            }
        
        display1.innerText += val.innerText;
    }
}
for(let val of ops){
    val.onclick = () => {
        first = display1.innerText;
        display1.innerHTML = "";
        operand = val.innerText;
    }
}

equal.onclick = () => {
    second = display1.innerText;
    display1.innerHTML = "";
    display1.innerText = operate(+first, operand, +second);
}

clear.onclick = () =>{
    display1.innerHTML = " ";
    dot.disabled = false;
}