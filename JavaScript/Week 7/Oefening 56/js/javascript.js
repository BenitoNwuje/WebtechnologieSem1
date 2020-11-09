function passagier(name, nationality, age) {
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}

let showText = function(id, text) {
    let textVeld = document.getElementById(id);
    textVeld.textContent = text;
}

let person1 = new passagier("Nico","Spanish", 22);
let person2 = new passagier("Ana", "German", 34);
let person3 = new passagier("Jake", "Belgian", 25);


showText("u1", "Name is " + person1.name + ", nationality is " + person1.nationality + " and age is " + person1.age);
showText("u2", "Name is " + person2.name + ", nationality is " + person2.nationality + " and age is " + person2.age);
showText("u3", "Name is " + person3.name + ", nationality is " + person3.nationality + " and age is " + person3.age);


