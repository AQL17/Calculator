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



const display = document.getElementById('display');
const btns = document.querySelectorAll("div.operators .num");
function displayed (){
btns.forEach((item)=>{
    item.addEventListener('click', ()=> {
        const value = item.textContent;
        display.textContent += value;
        equation.first = display.textContent;
    })
})
}
const clear = document.querySelector('.clear');
    clear.addEventListener('click', ()=>{
        display.innerText = "";
    })
console.log(displayed());
const operators = document.querySelectorAll('div.operators .op');
operators.forEach((op)=>{
    op.addEventListener('click',()=>{
    })
})
