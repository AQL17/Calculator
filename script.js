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
let a = 2;
let b = 2;

let num1,num2;

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
    else{
        return alert("error");
    }
}



let opvalue;
const display = document.getElementById('display');
const btns = document.querySelectorAll("div.operators .num");
btns.forEach((item)=>{
    item.addEventListener('click', ()=> {
        const value = item.textContent;
        display.textContent += value;
        disvalue = display.textContent;
    })
})
const operators = document.querySelectorAll('div.operators .op');
console.log(operators);
operators.forEach((op)=>{
    op.addEventListener('click',()=>{
        opvalue = op.textContent;
        return opvalue;
    })
})
