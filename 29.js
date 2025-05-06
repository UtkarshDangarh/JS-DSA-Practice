//Create a constructor function Animal that accepts name and species.
//Add a method speak to Animal.prototype that returns a message like "The cat says meow".
//Then create two instances of Animal and test the speak method.

// Object constructor method
function animal(name, species, sound) {
  (this.name = name), (this.species = species), (this.sound = sound);
  //add speak method to an object directly
  // (this.speak = () => `the ${name} says ${sound}`);
}

// Adding speak method to the prototype, this adds method to the original constructor method.

animal.prototype.speak = function () {
  return `The ${this.species} says ${this.sound}`;
};

let myPet = new animal("Jimmy", "Dog", "Bhow");
const dog = new animal("Buddy", "Cat", "Meow");
console.log(myPet.speak());

console.log(dog.speak());
