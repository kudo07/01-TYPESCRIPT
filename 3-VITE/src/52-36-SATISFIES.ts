type Todow = {
  title: string;
  dueDate: string | Date;
  isCompleted: boolean;
};
// const todo: Todow = {
//   title: 'sf',
//   dueDate: new Date(),
//   complete: true,
//   //   complete is not the property
// };
// gives error
//
const todo = {
  title: 'sf',
  dueDate: new Date(),
  isCompleted: true,
  //   complete is not the property
} satisfies Todow;
// satiisifes makes the least porperty get like iun dueData it can work data format sinngle also
// but the wrong property name makes not the least property name considerable so it gives error
// meet the minimum req not generally specific
todo.dueDate.setDate(4);
