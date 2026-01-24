const addNums = (a: number, b: number) => a + b;
const nums: [number, number] = [4, 5];

console.log(addNums(5, 4)); // This will be just fine
console.log(addNums(nums[0], nums[1])); // This will also be just fine
console.log(addNums(...nums)); // the type must be a tuple for it to work
