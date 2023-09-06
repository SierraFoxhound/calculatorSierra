const results = document.querySelector("#Result");
let displayContainer = document.querySelector(".displayContainer")
let display = document.querySelector(".display");
let buttonContainer = document.querySelector(".buttonContainer");
let sevenBtn = document.querySelector(".sevenBtn");
let eightBtn = document.querySelector(".eightBtn");
let nineBtn = document.querySelector(".nineBtn");
let divideBtn = document.querySelector(".divideBtn");
let fourBtn = document.querySelector(".fourBtn");
let fiveBtn = document.querySelector(".fiveBtn");
let sixBtn = document.querySelector(".sixBtn");
let multiplyBtn = document.querySelector(".multiplyBtn");
let oneBtn = document.querySelector(".oneBtn");
let twoBtn = document.querySelector(".twoBtn");
let threeBtn = document.querySelector(".threeBtn");
let subtractBtn = document.querySelector(".subtractBtn");
let clear = document.querySelector(".clear");
let zeroBtn = document.querySelector(".zeroBtn");
let equalBtn = document.querySelector(".equalBtn");
let addBtn = document.querySelector(".addBtn");

//operator functions

function add(num1, num2) {
   return num1 + num2;
};

function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let num1 = 0;
let op = add() || subtract() || multiply() || divide();
let num2 = 0;

function operate(num1, op, num2) {
    switch (op.trim()) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    } 
}

//console.log(operate(1, '-', 4));

//Display variable
let displayValue = "0";

function updateDisplaynumber(number) {
    if (displayValue === "0") {
        displayValue = number.toString();//converts 0 to a string
    } else {
        //the + allows us to spam 1 multiply of times while also converting to string
        displayValue += number.toString();
    }
    display.textContent = displayValue;//displays the number
}

//print button numbers
zeroBtn.addEventListener('click', () => {
    updateDisplaynumber(0);
});
oneBtn.addEventListener('click', () => {
    updateDisplaynumber(1);
});
twoBtn.addEventListener('click', () => {
    updateDisplaynumber(2);
});
threeBtn.addEventListener('click', () => {
    updateDisplaynumber(3);
});
fourBtn.addEventListener('click', () => {
    updateDisplaynumber(4);
});
fiveBtn.addEventListener('click', () => {
    updateDisplaynumber(5);
});
sixBtn.addEventListener('click', () => {
    updateDisplaynumber(6);
});
sevenBtn.addEventListener('click', () => {
    updateDisplaynumber(7);
});
eightBtn.addEventListener('click', () => {
    updateDisplaynumber(8);
});
nineBtn.addEventListener('click', () => {
    updateDisplaynumber(9);
});

//functions for operator buttons
let operator = null;
let firstOperand = null;

function handleOperatorClick(op) {
    if(firstOperand === null) {
        firstOperand = parseFloat(displayValue);//shows the initial num
        operator = op;
        displayValue = "0";
        console.log(firstOperand);
    } else {
        //calculate and display result
        firstOperand = operate(firstOperand, operator, parseFloat(displayValue));
        operator = op;
        display.textContent = firstOperand;//result
        displayValue = "0";
        console.log(firstOperand);
    }
}

addBtn.addEventListener('click', () => {
    handleOperatorClick('+');
});
subtractBtn.addEventListener('click', () => {
    handleOperatorClick('-');
});
multiplyBtn.addEventListener('click', () => {
    handleOperatorClick('*');
});
divideBtn.addEventListener('click', () => {
    handleOperatorClick('/');
});

//eventListener/function for the equal button

equalBtn.addEventListener('click', () => {
    if (operator !== null) {
        firstOperand = operate(firstOperand, operator, parseFloat(displayValue));
        display.textContent = firstOperand;
        displayValue = '0';
        //operator = null;
    }
});