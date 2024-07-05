const aj: (string | boolean)[] = ['wef', 'frewf', false];
type iterationOnAjAndGetTypeEveryPossibleTypeInAj = (typeof aj)[number];
// number is the cause to iteration in aj

const objj = {
  name: 'j',
  age: 342,
};
type ObjectBykeybutnotnumber = (typeof objj)['name'];
// string
// to get the particular type from the object we use indexes
type firstAllthekeysfromthekeyofandthentypeof =
  (typeof objj)[keyof typeof objj];
// whatever the type of objj is get all the keys from them with the help of keyof
// taking name and age and passing it as the index
// give me all the possible values of name and age properties
// string | number
// inside the object anad arrayS
const MyArray = [
  { name: 'Alice', age: 25, isGood: false },
  { name: 'Bob', age: 30 },
];
// type ar = typeof MyArray;
// type ar = (
//   | {
//       name: string;
//       age: number;
//       isGood: boolean;
//     }
//   | {
//       name: string;
//       age: number;
//       isGood?: undefined;
//     }
// )[];
// see the [] in the end
// without indexing it gives all the types within the array to get the type within the element
// we use the indexing
type br = (typeof MyArray)[number];
// age and string
// within the elements
