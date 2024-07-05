// work with variety of types rather than a single one
// define function, classes, and interdaces that can work with any type
// generic function
function identity<T>(arg: T) {
  return arg;
}

let output = identity<string>('hello');
console.log(output); //hello
