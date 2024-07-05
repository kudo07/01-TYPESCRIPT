type Todoo = {
  id: string;
  name: string;
  //   add a new property
  status: string;
  completed: boolean;
};
// lots of duplicated stuff
type NewTodoo = {
  name: string;
  completed: boolean;
  status: string;
  //   now it works same type multiple places
};

function saveTodo(todo: NewTodoo): Todoo {
  return { ...todo, id: crypto.randomUUID() };
  //   property status is missing
  //   todo.id = crypto.randomUUID();
  //   return todo;
}

function renderTodo(todo: Todo) {
  const div = document.createElement('div');
  div.id = todo.id;
}
