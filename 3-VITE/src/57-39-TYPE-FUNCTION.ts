const PRIORITY = ['HIGN', 'MEDIUM', 'LOW'] as const;
type Todoefre = {
  title: string;
  description: string;
};

type Priority = (typeof PRIORITY)[number];
function func(todo: Todoefre) {
  if (isPriority(todo.description)) {
    todo.description;
  } else {
    todo.description;
  }
}

function isPriority(description: string): description is Priority {
  return PRIORITY.includes(description as Priority);
}
