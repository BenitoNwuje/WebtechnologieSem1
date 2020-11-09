let Bus ={
    nummerplaat: 2,
    bestemming: "vegas",
    zetels: 52,
    reserveerdeZetels: 43,
    busPlaats: function() {
       return this.zetels - this.reserveerdeZetels;
    }
};

let showText = function(id, text) {
  let textVeld = document.getElementById(id)
  textVeld.textContent = text;
}

showText("head",Bus.bestemming)
showText("p", `Er zijn nog ${Bus.busPlaats()} + " zetels vrij`);
