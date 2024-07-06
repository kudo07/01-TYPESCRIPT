type Todo = {
  title?: string;
  completed: boolean;
  address?: {
    street?: string;
  };
};
// make everything optioinal or everything required
// even optional required make compulsory every property
// and onmly the top level keys
// means if address is optioanl required converts into compulsory but no the inner properties

// --------------
// type FormTodo = Required<Pick<Todo, 'title'>> & Omit<Todo, 'title'>;
// ------------------------
// minus the title or omit and combine all
// th below also work as same because required properties overrides the optional; one

// also work like this for required but not for partial
type FormTodo = Required<Pick<Todo, 'title'>> & Todo;
// retuired the title means if it optional the optional auto. removed but i want
// other properties also wha ti do is to combine all the rest properties as it is normall means optionl or
// not optional so i just intersect and combine all in one in the name of
// FormTodo
// it overwrites the property
// pick only the title property
// pick just tile and make it required and then omit the title from the todo
// now title is required
const todo: FormTodo = {
  completed: true,
};
// title is compulsory sogives an error
//
// -------------------------------------
type Todo111 = {
  title: string;
  // by default in partial case our title is required
  completed: boolean;
  address?: {
    street?: string;
  };
};
//
// ---------------
// type FormTodoa = Partial<Pick<Todo, 'title'>> & Omit<Todo, 'title'>;
// title is optioanl now and rest properties are same as in the original format whether it is optional or not

// ---------------
type FormTodoa = Partial<Pick<Todo, 'title'>> & Todo111;
// but for this title is required as required properties in the Todo111 of title
// makes in the final reuiqred whether it is optional now by use of partial
// required properties always overides non required properties

const todao: FormTodoa = {
  completed: true,
};
//
