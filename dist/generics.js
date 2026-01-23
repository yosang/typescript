"use strict";
// using "any" no type safety
function sayHello(string) {
    return string;
}
console.log(sayHello("hello"));
// Using generics - preserves the type safety
function greetings(string) {
    return string;
}
console.log(greetings("Hellois")); // We can explicity type it using the type argument
console.log(greetings("heisann")); // or let typescript infer the type for us
//# sourceMappingURL=generics.js.map