// make id optional
type Todoooo = {
  id: string;
  name: string;
  //   add a new property
  status: string;
  completed: boolean;
};
// lots of duplicated stuff
// pick certain and omit certain
// type NewTodoooo = Pick<Todoooo, 'name' | 'status' | 'completed'>;
type NewTodoooo = Omit<Todoooo, 'id'>;

function saveTodo(todo: NewTodoooo): Todoooo {
  return { ...todo, id: crypto.randomUUID() };
  //   property status is missing
  //   todo.id = crypto.randomUUID();
  //   return todo;
}

function renderTodo(todo: Todoooo) {
  const div = document.createElement('div');
  div.id = todo.id;
  //   error resolve
  //   after Omit
  //   givess error optioanl supposed to be id here because we call here
  //   in the new Todo starting there is no id at starting
}
