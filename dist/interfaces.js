"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We cant have a parameter without a type in a function
// It implicitly receives the "any" type, which is not good
// We either have to assign it the type "any" manually to signal that we want this
// or assign it a type
function printUserName(user) {
    return `The name of this user is ${user.name}`;
}
const yosmel = { name: "Yosmel", age: 33 };
console.log(printUserName(yosmel));
//# sourceMappingURL=interfaces.js.map