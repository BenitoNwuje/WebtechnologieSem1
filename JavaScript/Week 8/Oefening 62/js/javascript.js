let showText = function(id, text) {
    let element = document.getElementById(id);
    element.textContent = text;
}
let bewerking = prompt("Geef een bewerking");
let cijfer1 = parseInt(prompt("Geef getal 1 in"));
let cijfer2 = parseInt(prompt("Geef getal 2 in"));

let result;

switch (bewerking) {
    case "+":
        result = cijfer1 + cijfer2;       
        break;
    case "-":
        result = cijfer1 - cijfer2;   
        break;
    case "*":
        result = cijfer1 * cijfer2; 
        break;                
    case "/":
        result = cijfer1 / cijfer2;   
        break;                
    default:
        result = "Foutive Keuze";  
        break;
}

showText("head", result);


