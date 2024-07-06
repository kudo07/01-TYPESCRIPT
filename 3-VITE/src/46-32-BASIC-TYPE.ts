type Tododolo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};
// work with todod is difficult as there are union optional and multiple types here

function extendTodod(todo: Tododo) {
  if (todo.dueDate instanceof Date) {
    // instance of the object type like Date
    console.log(todo.dueDate.getTime);
  } else {
    console.log(todo.dueDate.replace);
    // this version is now string check explicitly check type
  }
  console.log(todo.dueDate);
}
