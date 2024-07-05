function getSecond<TArray>(array: TArray[]): TArray {
  return array[1];
}
const a = [1, 2, 3];
const b = ['ad', 'fge', 'fwe'];
const retA = getSecond(a);
// ṇumber
const retB = getSecond(b);
//  string
// never pass  as getSecond<number>(a)
