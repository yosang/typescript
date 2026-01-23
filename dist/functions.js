"use strict";
// Rest parameters
function buildName(firstName, ...restOfName) {
    //   The rest operator "collects" arguments into an array
    console.log(restOfName); // [ 'mel', 'chiang' ]
    return firstName + restOfName.join("");
}
console.log(buildName("yos", "mel", "chiang"));
// Arrow fucntions
const add = (a, b) => a + b;
console.log(add(4, 4));
//# sourceMappingURL=functions.js.map