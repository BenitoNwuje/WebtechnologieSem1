let ShowText =  function(id, text) {
    let textVeld = document.getElementById(id);
    textVeld.textContent = text;   
}

function Bus(licensePlate, destination, seats, reservedSeats) {
    this.licensePlate = licensePlate;
    this.destination = destination;
    this.seats = seats;
    this.reservedSeats = reservedSeats;
    this.Passengers = new Array();
    this.checkAvailability = function () {
        return this.seats - this.reservedSeats;
    }
    this.addPassengers = function(Passengers) {
        this.Passengers.push(Passengers)
        reservedSeats += 1;
    }
}
function Passenger(name, nationality, age){
    this.name = name;
    this.nationality = nationality;
    this.age = age;
}

let bus = new Bus ("1-ERS-3453", "New York", 45, 15);
bus.addPassengers(new Passenger("Lily", "Armenian", 34));
bus.addPassengers(new Passenger("Nono", "Dominican", 12));


ShowText("head", bus.destination);
ShowText("u1", "Passenger " + bus.Passengers[0].name);
ShowText("u2", "Passenger " + bus.Passengers[1].name);

