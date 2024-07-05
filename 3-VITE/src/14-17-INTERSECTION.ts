type Person1 = {
  name: string;
  age: number;
};
// type PersonWithId = Person1 & { id: string; name: number };
// gives error as same name property cannot be presient as number and string at the same time
type PersonWithId = Person1 & { id: string };
const persone1: PersonWithId = { name: 'K', age: 12 };
// gives error as it inlcude all the properties in it intersection
const personeeee: PersonWithId = { id: 'gefr', name: 'K', age: 12 };
// no error as it match all the properties include in the intersection
interface Child {
  name: string;
  age: number;
}
interface Todo {
  complete: boolean;
}
interface ChildWithId extends Child, Todo {
  id: string;
}
const personeeee11: ChildWithId = { id: 'gefr', name: 'K', age: 12 };
// missing the "complete"
const personeeee111: ChildWithId = {
  id: 'gefr',
  name: 'K',
  age: 12,
  complete: true,
};
// as all the properties must be there in the intersection
// all the properties of Child , Todo and id:string then it will be the only valid case
// n union atleas one be satisfied it will work it
