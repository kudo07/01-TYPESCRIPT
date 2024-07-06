// own helper function
type Todo1 = {
  title: string;
  completed: boolean;
  address?: {
    street?: string;
  };
};
type PartialPickk<T, Key extends keyof T> = Partial<Pick<T, Key>> &
  Omit<T, Key>;
// pick type, any of the key from the type of the required section

type FormTodoaaq = PartialPickk<Todo, 'title'>;
// auto complete "title"
const todoeqq: FormTodoaaq = {
  completed: true,
};
// work fine as partial in genrics menas the rest properties form the original one are as it is but the title property
// are the one here who is optional
