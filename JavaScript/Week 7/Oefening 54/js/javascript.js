let Bus = new Object();

Bus.bestemming = "Vegas";
Bus.zetels = 52;
Bus.reserveerdeZetels = 43;
Bus.checkAvailability = function () {
    return this.zetels - this.reserveerdeZetels;
};

let showText = function (id, text) {
    let textVeld = document.getElementById(id); 
    textVeld.textContent =  text;
}

showText("head", Bus.bestemming);
showText("p","Er zijn nog " + Bus.checkAvailability()+" zetels over");
