// using "any" no type safety
function sayHello(string: any): any {
  return string;
}

console.log(sayHello("hello"));

// Using generics - preserves the type safety
function greetings<T>(string: T): T {
  return string;
}

console.log(greetings<string>("Hellois")); // We can explicity type it using the type argument
console.log(greetings("heisann")); // or let typescript infer the type for us
