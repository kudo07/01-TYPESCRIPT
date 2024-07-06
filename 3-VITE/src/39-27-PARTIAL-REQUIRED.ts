// own helper function
type Todo11 = {
  title?: string;
  completed: boolean;
  address?: {
    street?: string;
  };
};
type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T;
// pick type, any of the key from the type of the required section

type FormTodoaa = RequiredPick<Todo, 'title'>;
// make title required and rest the properties takes from the original one or normal
const todoeq: FormTodoaa = {
  completed: true,
};
// propert title is missing
// same but we used as generics means work as pick
