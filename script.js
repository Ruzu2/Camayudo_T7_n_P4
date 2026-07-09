/*necessities*/
function input(inputnum) {
    const input = document.getElementById("expression");

    input.value += inputnum;
}

function AC() {
    document.getElementById("expression").value = "";
}

function back() {
    document.getElementById("expression").value = document.getElementById("expression").value.slice(0, -1);
}

function calculate() {
    const expression = document.getElementById("expression");
    const equals = eval(expression.value);

    expression.value = equals;
}

/*numbers and symbols*/
function one() {
    const inputnum = 1;
    input(inputnum);
}
function two() {
    const inputnum = 2;
    input(inputnum);
}
function three() {
    const inputnum = 3;
    input(inputnum);
}
function four() {
    const inputnum = 4;
    input(inputnum);
}
function five() {
    const inputnum = 5;
    input(inputnum);
}
function six() {
    const inputnum = 6;
    input(inputnum);
}
function seven() {
    const inputnum = 7;
    input(inputnum);
}
function eight() {
    const inputnum = 8;
    input(inputnum);
}
function nine() {
    const inputnum = 9;
    input(inputnum);
}
function zero() {
    const inputnum = 0;
    input(inputnum);
}
function dot() {
    const symbol = '.';
    input(symbol);
}
function openp() {
    const symbol = '(';
    input(symbol);
}
function closep() {
    const symbol = ')';
    input(symbol);
}

/*operators*/
function add() {
    const operator = '+';
    input(operator);
}
function substract() {
    const operator = '-';
    input(operator);
}function multiply() {
    const operator = '*';
    input(operator);
}function divide() {
    const operator = '/';
    input(operator);
}

/*dark mode*/
function theme() {
    document.body.classList.toggle("dark");
    document.querySelector("header").classList.toggle("dark");
    document.querySelector("footer").classList.toggle("dark");
    document.querySelector("form").classList.toggle("dark");
};