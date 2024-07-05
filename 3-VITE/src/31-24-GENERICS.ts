function aToO<T>(array: [string, T][]) {
  // as we know that the first key is string and then second one we dont know
  // thats why we name as T

  const obj: {
    [index: string]: T;
    // value can be any type but it clarifies
  } = {};
  array.forEach(([key, value]) => {
    obj[key] = value;
  });
  return obj;
}
// correct this to rum objj

// const arr = [
//   ['keyOne', 1],
//   ['keyTwo', 2],
//   ['keyThree', 3],
// ];
// array of array =[][]
const arr: [string, number | boolean][] = [
  ['keyOne', 1],
  ['keyTwo', 2],
  ['keyThree', 3],
];

const objj = aToO(arr);
// error
