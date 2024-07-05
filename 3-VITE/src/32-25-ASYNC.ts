// async function wait(duration: number): Promise<string> {
async function wait(duration: number) {
  //   return new Promise<string>((resolve) => {
  //     setTimeout(() => resolve('Hi'), duration);
  // });
  return await fetch('sfer');
}

wait(1000).then((value) => {
  console.log(value.json());
});
// always retuen type is promise
