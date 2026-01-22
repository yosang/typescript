// Rest parameters
function buildName(firstName: string, ...restOfName: string[]) {
  //   The rest operator "collects" arguments into an array
  console.log(restOfName); // [ 'mel', 'chiang' ]

  return firstName + restOfName.join("");
}

console.log(buildName("yos", "mel", "chiang"));

// Arrow fucntions
const add: (a: number, b: number) => number = (a, b) => a + b;
console.log(add(4, 4));
