type Tododoafr = {
  title: string;
  priority: 'High' | 'Normal' | 'Low' | 'Expert';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};
function exptendssergs(todo: Tododoafr) {
  switch (todo.priority) {
    case 'High':
      console.log(todo.priority);
      break;
    case 'Normal':
      console.log(todo.priority);
      break;
    case 'Low':
      console.log(todo.priority);
      break;
    default:
      //   console.log(todo.priority);
      const exhuatCheck: never = todo.priority;
      //   the new input expert isnt check so it gives error
      //   check every single possiblity

      return exhuatCheck;
  }

  //   .. same for low ..
  //   until no more cases left
}
