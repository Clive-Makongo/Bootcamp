class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}

class Car extends Vehicle {
  constructor(colour, passengers) {
    super(id, 4, "BEEP")
    this.colour = colour;
    this.passengers = passengers;
  }

  checkPassengers() {
    if (this.passengers > 4) {
      console.log("Too Many Passengers");
    }
  }

  useHorn() {
    console.log(this.sound);
  }
}

class Boat extends Vehicle {
  constructor(id, type,crew) {
    super(id, );

  }
}
module.exports = Vehicle;
