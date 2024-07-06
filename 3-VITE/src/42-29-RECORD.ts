type Person = {
  name: string;
  age: number;
};

type PeopleGroupByName = {
  [index: string]: Person[];
};
// same in Record

type PeopleGroupedByName = Record<string, Person[]>;
//
type PeopleGrouped = Record<Person['name'], Person[]>;
