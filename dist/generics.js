"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// using "any" no type safety
function sayHello(string) {
    return string;
}
console.log(sayHello("hello"));
// Using generics - preserves the type safety
function greet(string) {
    return string;
}
console.log(greet("Hellois")); // We can explicity type it using the type argument
console.log(greet("heisann")); // or let typescript infer the type for us
//# sourceMappingURL=generics.js.map