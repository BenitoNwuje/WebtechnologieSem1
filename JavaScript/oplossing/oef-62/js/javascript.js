function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let bewerking = prompt("Geef een bewerking in");
let getal1 = parseInt(prompt("Geef getal 1 in"));
let getal2 = parseInt(prompt("Geef getal 2 in"));

let result;

switch(bewerking){
    case "+":
        result = getal1 + getal2;
        break;
    case "-":
        result = getal1 - getal2;
        break;
    case "*":
        result = getal1 * getal2;
        break;
    case "/":
        result = getal1 / getal2;
        break;
    default:
        result = "Foutieve keuze";
        break;
}

showText(result, "mainHeading");