type Tododo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};
// work with todod is difficult as there are union optional and multiple types here

function extendTodo(todo: Tododo) {
  // dont work as strings dont have the getdate
  //   todo.dueDate.getDays();
  //   a stirng doesnt have these methods
  if (typeof todo.dueDate === 'string') {
    console.log(todo.dueDate.replace);
    // all the string methods are here
  } else {
    console.log(todo.dueDate.getTime);
    // auto. get the getTime
  }
  console.log(todo.dueDate);
}
