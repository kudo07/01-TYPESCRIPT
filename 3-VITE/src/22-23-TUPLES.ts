// let ase = 'string';
// ase[0] = 'S';
// string are immutable
// TUPELS
// MIXED TYPES
const person = {
  name: 'kyle',
  age: 28,
};

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
// key:string
// value:string|number
type Tuple = [string, boolean];
const ai: Tuple = ['sds', true];
const bi: Tuple = [43, 'fdewrf'];
// errror
// return in a way
