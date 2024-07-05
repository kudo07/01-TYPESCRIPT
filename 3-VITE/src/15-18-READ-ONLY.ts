type P = {
  readonly id: number;
  name: string;
  age: number;
};
const p1: P = { id: 1, name: 'L', age: 44 };
p1.id = 2;
// cannot assign as readonly property
type NumberArray = readonly number[];
const nums: NumberArray = [1, 2, 3];
nums[4] = 3;
// readonly cannot change
