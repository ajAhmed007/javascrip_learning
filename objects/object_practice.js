//creating a Car object

const Car = {
  make: "Honda",
  Model: "Accord",
  Year: 2013,
  color: "black",

  engine: {
    sylinders: 4,
    transmission: "automatic",
    is4WhealDrive: false,
  },

  needsService: false,

  scheduleService: function (service) {
    this.needsService = service;
    return this.needsService;
  },

  swapTransmission: function (newTransmission) {
    this.engine.transmission = newTransmission;
    return this.engine.transmission;
  },

  changeColor: function (newColor) {
    this.color = newColor;
    return this.color;
  },
};

//maing a function call to scheduleService
//and setting the needsService property to true
console.log("My car details are: ", Car);
console.log(Car.needsService);
Car.scheduleService(true);
console.log(Car.needsService);

//Car color before:
console.log("Car color before: ", Car.color);

//Car color after
console.log("Car color after: ", Car.changeColor("blue"));

console.log("Car current transmission: ", Car.engine.transmission);
//changing transmission type
console.log("New Car transmission: ", Car.swapTransmission("manual"));
