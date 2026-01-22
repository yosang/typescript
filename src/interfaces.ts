interface User {
  name: string;
  age: number;
}

// We cant have a parameter without a type in a function
// It implicitly receives the "any" type, which is not good
// We either have to assign it the type "any" manually to signal that we want this
// or assign it a type
function printUserName(user: User) {
  return `The name of this user is ${user.name}`;
}

const yosmel: User = { name: "Yosmel", age: 33 };

console.log(printUserName(yosmel));
