let showText = function(id, text){
    let element = document.getElementById(id);
    element.textContent = text;
}

let num = parseInt(prompt("geef mij een nummer"));
let totaal = 1;
for (let i = 1; i <= num; i++) {
   totaal*= i;
}

showText("h1", "Faculteit van "+ num + " is " + totaal);