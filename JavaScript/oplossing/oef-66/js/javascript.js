function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

let number = prompt("geef een getal in");
let result = 1;
for(let i = 1; i <= number; i++){
    result *= i;
}

showText(result, "mainHeading");