const nums = [1, 2, 34] as const;
nums.push(3);
// error
let a = 3 as const;
a = 4;
// error
// hard cooded value
//
// enums
// map one value to other
const SKILL_LEVELS = ['Beginner', 'Intermediate', 'Expert'] as const;
type Persoo = {
  //   skillLevel: 'Beginner' | 'Intermediate' | 'Expert';
  skillLevel: (typeof SKILL_LEVELS)[number];
  //   withour as const string after beg, inter,..
  //   changes that relies on that SKILL_LEVELS
  // loop throeugh every siongle number
  // hover set back to beg,...
  // got hrough every siongle index that were index property said
  //  so 0,1,2 value in my case that is my type
};
SKILL_LEVELS.forEach((skillLevel) => {
  console.log(skillLevel);
});

//
