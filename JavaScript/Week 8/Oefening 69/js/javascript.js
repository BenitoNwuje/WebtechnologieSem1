function showText(text, id){
    let element = document.getElementById(id);
    element.textContent = text;
}

for (let i = 1; i <= 100; i++) {
    let text = "", textPresent;
    if (i % 3 == 0) {
        text += "fizz";
    }
    if (i % 5 == 0) {
        text += "buzz";
    }
    if (text !== "") {
        textPresent = text;
    } else {
        textPresent = i;
    }
    console.log(textPresent); 
}

