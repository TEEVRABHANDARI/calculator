
let operator =''
let previousValue=''
let currentValue=''

document.addEventListener("DOMContentLoaded",function(){
    let equal = document.getElementById("equalsto")
    let clear = document.getElementById("clear")
    let numbers = document.querySelectorAll(".numbers")
    let operators = document.querySelectorAll("#operators")
    let previousScreen = document.querySelector("#previous")
    let currentScreen = document.querySelector("#current")
    let decimal = document.querySelector(".decimal")

    numbers.forEach(number => number.addEventListener("click", function(e){
        handleNumbers(e.target.textContent)
        currentScreen.textContent=currentValue
    }));

    operators.forEach(op => op.addEventListener("click", function(e){
        handleOperators(e.target.textContent)
        previousScreen.textContent = previousValue +" "+operator;
        currentScreen.textContent = currentValue;
    }));


    clear.addEventListener("click", function(){
        previousValue = "";
        currentValue = "";
        operator = "";
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        if( previousValue !="" && currentValue !=""){
            calculation();
            previousScreen.textContent = "";
            currentScreen.textContent = previousValue;
        }
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })
})


function handleNumbers(num){
    if(currentValue.length <= 7){
        currentValue += num;
    }
}

function handleOperators(op){
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculation(){

    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue = previousValue + currentValue;
    }
    else if(operator === "-"){
        previousValue = previousValue - currentValue;
    }
    else if(operator === "x"){
        previousValue = previousValue*currentValue;
    }
    else{
        previousValue = previousValue/currentValue;
    }
}


function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue=currentValue+"."
    }
    if(currentValue === "."){
        currentValue=0+currentValue
    }
}