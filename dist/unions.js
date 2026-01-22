"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function combine(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(combine(2, 4));
console.log(combine("hello", 4));
console.log(combine(4, "hello"));
console.log(combine("hello", "world"));
//# sourceMappingURL=unions.js.map