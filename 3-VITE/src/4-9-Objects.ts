const person: { name: string; age: number; isProgrammer?: boolean } = {
  name: 'ky',
  age: 28,
  isProgrammer: true,
  //if we declare the property it must be in the object s
  // if we do it as optional
  //then it makes as ? optianl chaninig
};
// const person: {
//     name: string;
//     age: number;
// }

person.isProgrammer = true;
