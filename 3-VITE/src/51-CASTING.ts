// you know more than me
// as casting to make the similar type
type Todo = {
  title: stirng;
};
fetch('sfew')
  .then((res) => res.json())
  .then((data) => {
    return data as Todo;
  })
  .then((todo) => {});
// not checking type perfecti\lyf
// overrrides the typescript

const a: any = 2;
const b = a as string;
// string
