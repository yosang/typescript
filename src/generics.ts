// using "any" no type safety
function sayHello(string: any): any {
  return string;
}

console.log(sayHello("hello"));

// Using generics - preserves the type safety
function greet<T>(string: T): T {
  return string;
}

console.log(greet<string>("Hellois")); // We can explicity type it using the type argument
console.log(greet("heisann")); // or let typescript infer the type for us
