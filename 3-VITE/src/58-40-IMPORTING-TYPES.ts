// for the liabrayr which is written in typescript there is no need
// to download for sepaeerate type if not found then we have to write ourselves
//
export type User = {
  id: string;
  name: string;
  age: number;
};
// this type is bound to be here
// we have ot exporet it
export const me: User = {
  id: '1',
  name: 'Kyle',
  age: 28,
};
