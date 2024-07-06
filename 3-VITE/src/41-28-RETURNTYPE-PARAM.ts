function checkLength(a: string, b: number) {
  return a.length < b;
}
type Func = () => void;
type ReturnOfLengthCheck = ReturnType<typeof checkLength>;
type FuncVoid = ReturnType<Func>;
// return from the function
//it expects a function

// figure out whta the pram pass in the function
type Params = Parameters<typeof checkLength>[0];
type FuncParams = Parameters<Func>;
// a string b number
