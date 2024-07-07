type Person = {
  name: string;
};
type Todo = {
  title: string;
};

function print(obj: Person | Todo) {
  if ('name' in obj) {
    // complecated
    // check person vs todo
    console.log(obj.name);
    return;
    // little completed
  }
  console.log(obj.title);
}

function print1(obj: unknown) {
  if (typeof obj === 'object' && 'name' in obj) {
    console.log(obj.name);
    return;
    // little completed
  }
  console.log(obj.title);
}

// making the function isPerson
function print2(obj: Person | Todo) {
  if (isPerson(obj)) {
    console.log(obj.name);
    return;
    // little completed
  }
  console.log(obj.title);
}
// typescript is not smart still dont know to obj is person or todo
function isPerson(obj: Person | Todo): obj is Person {
  return 'name' in obj;
}
// as todo is giving error
// specifically says is Perons
// casting like as
//
// false nothing happen
// ts doenst know that type narrowing
// narrows the type of something is call type predicate
// when u have a function
// return true or false
//narrows the person or not
// saying true or not
// find the return tyep
