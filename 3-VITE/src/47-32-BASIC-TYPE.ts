type Tododoaa = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};
// work with todod is difficult as there are union optional and multiple types here

function extendTodoa(todo: Tododo) {
  if (todo.dueDate instanceof Date) {
    // do soimething
    return;
  }
  console.log(todo.dueDate.replace);
  //   only possible here could be string
}

const form = document.querySelector<HTMLFormElement>('.form')!;
// HTMLFormElement not null anymore
// overwrites typescript
form!.addEventListener('submit', () => {});
// without ? gives error
// never gonna be null
// ! is not gives null but it give any type and in any type in typescript
// make less sense and back converts it into js
