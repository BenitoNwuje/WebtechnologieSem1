function Bus(bestemming, nummerplaat, zetels, reserveerdeZetels) {
    this.bestemming = bestemming;
    this.nummerplaat = nummerplaat;
    this.zetels = zetels;
    this.reserveerdeZetels = reserveerdeZetels;
    this.checkAvailability = function () {
        return this.zetels - this.reserveerdeZetels;
    };
}
let londen = new Bus("London", "55434FDFE4", 44 , 24);
let jamaica = new Bus("Jamaica", "23-BDER-33", 53, 23);


let showText = function (id, text) {
    let textVeld = document.getElementById(id); 
    textVeld.textContent = text;
}

showText("p1", "Bestemming: " + londen.bestemming + " Vrije plaatsen: " + londen.checkAvailability() + " Nummerplaat: " + londen.nummerplaat);
showText("p2", "Bestemming: " + jamaica.bestemming + " Vrije plaatsen: " + jamaica.checkAvailability() + " Nummerplaat: " + jamaica.nummerplaat);


