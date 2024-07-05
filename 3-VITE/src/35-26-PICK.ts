// make id optional
type Todooo = {
  id?: string;
  name: string;
  //   add a new property
  status: string;
  completed: boolean;
};
// lots of duplicated stuff
type NewTodooo = {
  name: string;
  completed: boolean;
  status: string;
  //   now it works same type multiple places
};

function saveTodo(todo: NewTodooo): Todooo {
  return { ...todo, id: crypto.randomUUID() };
  //   property status is missing
  //   todo.id = crypto.randomUUID();
  //   return todo;
}

function renderTodo(todo: Todooo) {
  const div = document.createElement('div');
  div.id = todo.id;
  //   givess error optioanl supposed to be id here because we call here
  //   in the new Todo starting there is no id at starting
}
