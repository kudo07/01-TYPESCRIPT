// type Person = {
//   name: String;
//   skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
// };
// const person12: Person = { name: 'J', skillLevel: 'Expert' };
// printSkillLevel(person12.skillLevel);

// function printSkillLevel(skillLevel: 'Beginner' | 'Intermediate' | 'Expert') {
//   console.log(skillLevel);
// }

//-------------------------------------------------------------------
// there are two ways to change one time and effect on the same on other
// 1
// type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';
// type Person = {
//   name: String;
//   skillLevel: SkillLevel;
// };
// const person12: Person = { name: 'J', skillLevel: 'Expert' };
// printSkillLevel(person12.skillLevel);

// function printSkillLevel(skillLevel: SkillLevel) {
//   console.log(skillLevel);
// }
//-------------------------------------------------------
// 2

type Person = {
  name: String;
  skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
};
const person12: Person = { name: 'J', skillLevel: 'Expert' };
printSkillLevel(person12.skillLevel);

function printSkillLevel(skillLevel: Person['skillLevel']) {
  console.log(skillLevel);
}
// on the hover of Person
// type Person = {
//   name: String;
//   skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
// };
