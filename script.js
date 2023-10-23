


//1.
let answer;
let min;
let max;
let resultat1 = 0;

alert("Skriv in min och max tal, alla tal mellan max och min kommer att adderas.");
min = parseInt(prompt("Ange min talet"));
max = parseInt(prompt("Ange max talet"));

while (!min || !max) {
    alert("Du måste ange siffror");
    min = parseInt(prompt("Ange min talet"));
    max = parseInt(prompt("Ange max talet"));
}

function summera(min, max) {
    let i;

    for (i = min; i <= max; i++) { }
}

svar = prompt("Vill du addera kvadraterna av alla tal mellan min och max eller endast addera? ")

resultat1 = summeraAddera(min, max);

function summeraAddera(min, max) {

    let i;
    let kvadratI;

    for (i = min; i <= max; i++) {
        kvadratI = kvadrera(i);
        resultat1 = resultat1 + kvadratI;
    }
    return resultat1;
}
alert(resultat1);

//2.

const kvadratTal = parseInt(prompt("Ange ett tal som ska kvadreras"));
const kvadraten = kvadrera(kvadratTal);

function kvadrera(kvadratTal) {
    return kvadratTal * kvadratTal;
}


alert(kvadraten);

//4.

const ord = prompt("Skriv in ett ord");

palindrome = reverse(ord);

function reverse(str) {

    const splitStr = str.split("");
    const reverseStr = splitStr.reverse();
    const joinStr = reverseStr.join("");

    return joinStr;
}

if (ord == palindrome) {
    alert("Palindrom!!!");
} else {
    alert("Inte en palindrom :(");
}


//5.
//button.addEventListener("click", clickConsole);
let img;
let button;

function init() {
    img = document.getElementById("img");
    button = document.getElementById("btn");
    button.addEventListener("click", clickConsole);
}
window.onload = init;

function clickConsole() {
    button.innerHTML = "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nobis nihil perspiciatis at maiores quisquam laudantium? Nemo, blanditiis cupiditate laborum nisi dolor cum beatae repellendus!</p>"
    img.style.display = "block";
    button.style.color = "red";
    button.style.height = "50px";
    button.style.width = "100%";
}



/*
//3.

let resultat2 = 0;
let kvadratI;

resultat2 = kvadreraAddera(1, 5);

function kvadreraAddera(min, max) {
    let i;

    for (i = min; i <= max; i++) {
        //kvadratI = kvadrera(i);
        resultat2 = resultat2 + i * i;
    }
    return resultat2;
}
alert(resultat2);
*/