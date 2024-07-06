// type Async = Promise<string>;
type Async = Promise<Promise<string>>;
type Value = Awaited<Async>;
// single type of generics

async function doSomething() {
  return 3;
}
type Calyew = Awaited<ReturnType<typeof doSomething>>;
