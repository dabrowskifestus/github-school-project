interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = {
  firstName: "John",
  lastName: "Doe"
};

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

greet(person);
