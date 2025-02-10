//Create an object person with nested address properties, then log the full address.

var person = {
  fullName: "Utkarsh Dangarh",
  age: 51,
  address: {
    locality: "Gokuldham Society, Goregaoon East",
    city: "Mumbai",
    state: "Maharastra",
  },
};

console.log(
  person.address.locality +
    " " +
    person.address.city +
    " " +
    person.address.state
);
