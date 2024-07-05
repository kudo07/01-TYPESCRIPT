type Op = {
  name: string;
  age: number;
  isProgrammer?: boolean;
};
const age = getValue('age', { name: 'j', age: 28 });
//
function getValue(key: keyof Op, p3: Op) {
  return p3[key];
}
https://chatgpt.com/c/3af72a4f-e5ae-4e35-a4ea-11cd81c6c883