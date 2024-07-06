type Tododoa = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};
function exptendsss(todo: Tododoa) {
  switch (todo.priority) {
    case 'High':
      console.log(todo.priority);
  }
  //   .. same for low ..
  //   until no more cases left
}
