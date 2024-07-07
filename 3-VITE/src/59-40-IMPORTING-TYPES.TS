import { me, User } from './58-40-IMPORTING-TYPES';
import { addDays } from 'date-fns';
// this is written in ts
// not all libraries in ts
import { times } from 'loadash';
// Cannot find module 'loadash' or its corresponding type declarations
function printUser(user: User) {
  console.log(user.name);
}

addDays(new Date(), 3);
printUser(me);
// npm i --save-dev @types/lodash
// not need i prod
// succed if it fails
//
