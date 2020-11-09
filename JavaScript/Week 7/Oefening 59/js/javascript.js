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
let bus1 = new Bus("1-SDF-345", "Atlanta", 55, 12);
let bus12 = new Bus("2-ICD-33245", "Georgia", 32, 22);

let busArray = new Array(bus, bus1, );

bus.addPassengers(new Passenger("Lily", "Armenian", 34));
bus.addPassengers(new Passenger("Nono", "Dominican", 12));
bus1.addPassengers(new Passenger("Danika", "Jamican", 21));
bus1.addPassengers(new Passenger("Cheng", "Chinese", 56));
bus12.addPassengers(new Passenger("Fika", "Swedish", 23));

console.log(bus.destination);
console.log(bus.Passengers[0].name);
console.log(bus.Passengers[1].name);
console.log(bus1.destination);
console.log(bus1.Passengers[0].name);
console.log(bus1.Passengers[1].name);
console.log(bus12.destination);
console.log(bus12.Passengers[0].name);

