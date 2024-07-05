const person123 = { name: 'g', age: 23, isProgrammer: true };
const poeple123: (typeof person123)[] = [];
// const poeple123: {
//   name: string;
//   age: number;
//   isProgrammer: boolean;
// }[];
poeple123.push(person123);
//
function sayHi(name: string) {
  console.log(name);
}
type funcType = typeof sayHi;
// same type as sayHi
