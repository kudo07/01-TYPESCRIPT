type Todo = {
  title: string;
  completed: boolean;
};

// in js as const works
const todo = {
  title: 'gerg',
  completed: false,
} as const;
// when u assing a value
// readonly properties
type TestTodo = typeof todo;
//
type FinalTodo = Readonly<Todo>;
// all the properties now read only
// when u use type to   efine a type
// Object.freeze();
// uses readonly type
