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
let a = -9;
let b = 3;


let num1,operator,num2;


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
console.log(operate(2,'/',9));