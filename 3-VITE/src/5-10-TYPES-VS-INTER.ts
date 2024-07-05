type Person = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  freinds: string[];
  address: {
    street: string;
  };
};
const personn: Person = {
  name: 'kyle',
  age: 28,
  freinds: ['d', 'e'],
  address: {
    street: 'Main sre',
  },
};

type nu = number;
const algo: nu = 3;
// INTERFACES
// interfaces can only be used as objects

interface People {
  name: string;
  age: number;
  isProgrammer?: boolean;
  freinds: string[];
  address: {
    street: string;
  };
}
const child: People = {
  name: 'kyle',
  age: 28,
  freinds: ['d', 'e'],
  address: {
    street: 'Main sre',
  },
};
// type is more flexible
// interface used as object
interface yux {
  age: number;
}

const tux: yux = {
  age: 4,
};
// interfaces always work on the object
https://chatgpt.com/c/2ba2313b-f5b1-44c0-9f14-35f846be6c65