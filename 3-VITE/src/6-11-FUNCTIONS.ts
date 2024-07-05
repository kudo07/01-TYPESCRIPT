function sum(a: number, b: number): number {
  return a + b;
}
const co = sum(1, 2);
// 2
function printPerson(person: { name: string }) {
  console.log(person.name);
}

printPerson({ name: 'j', age: 3 });
// 3
type Person11 = { name: string };
function printPerson11(person: Person11) {
  console.log(person.name);
}
printPerson({ name: 'k' });
