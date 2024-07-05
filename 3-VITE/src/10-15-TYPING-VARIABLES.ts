function sumwithCallBack(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
  console.log(cb(a + b));
}
sumwithCallBack(1, 2, (sum) => {
  console.log(sum);
});
// 2
type PrintNameFunc = () => void;
function f(name: string) {
  return 2;
}
