// type Perso = {
//   name: string;
//   skillLevel: 'Beginner' | 'intermediate';
// };

// type PeopleGroupedBySkillLevel = {
//   [index: string]: Perso[];
// };
// const a: PeopleGroupedBySkillLevel = {
//   fewrer: [{ name: 'fr', skillLevel: 'Beginner' }],
// };
// https://chatgpt.com/c/d90f499f-c577-4521-9160-33c9fd4d91ec

//
// type Perso = {
//   name: string;
//   skillLevel: 'Beginner' | 'intermediate';
// };

// type PeopleGroupedBySkillLevel = {
//   [index in Perso['skillLevel']]: Perso[];
// };
// const a: PeopleGroupedBySkillLevel = {
//   Beginner: [{ name: 'fr', skillLevel: 'Beginner' }],
// };

// 3
type Perso = {
  name: string;
  skillLevel: 'Beginner' | 'intermediate';
};

type PeopleGroupedBySkillLevel = {
  [index: Perso['name']]: Perso[];
  //   any of the keys default value or tyep default perso
};
const a: PeopleGroupedBySkillLevel = {
  regnjerk: [{ name: 'fr', skillLevel: 'Beginner' }],
};
