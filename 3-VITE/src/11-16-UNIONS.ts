let id: string | number = 7;
// or
id = 7;
id = 'few';
// 2 different types
type Todo = {
  name: string;
  status: 'completed' | 'incompleted' | 'resume';
};
const todo: Todo = { name: 'Laundry', status: 'completed' };
// exact 3 optioins
type Person1 = {
  address: string;
  age: number;
};
// 3
type TodoPerson = Todo | Person1;

const todo1: TodoPerson = {
  name: 'Laundry',
  status: 'completed',
  age: 12,
  address: 'eff',
};

// difference
// doesnt union in interace
// type is reffered
//takes the multiple things
type Bird = {
  fly(): void;
  layEggs(): void;
};
type Fish = {
  swim(): void;
  layEggs(): void;
};
declare function getSmallPet(): Fish | Bird;
// either the fish properties or bird properties means only one
// will the properties are there no the both one
let pet = getSmallPet();
pet.layEggs();
// pet.swim();
// error at runtime we dont know which swim() is talking about here because as the other will be failed to called
// swim() methodwhether a variable typed as Bird or Fisj
// pet.fly();
// either this or that
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
// union is trickey here
