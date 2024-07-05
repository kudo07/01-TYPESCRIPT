type Option = {
  debugMode?: boolean;
  indentLevel?: number;
};
function printNameAndAge(
  name: string,
  { debugMode = false, indentLevel }: Option = {}
) {
  console.log(name, debugMode, indentLevel);
}
printNameAndAge('sdf');
// rest operatore

function sum(...nums: number[]) {
  return nums;
  // code to add them
}
sum(1, 2, 4);
// it must be array type
sum(1, 2);
