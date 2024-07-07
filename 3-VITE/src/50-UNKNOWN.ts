function func(data: any) {
  console.log(data.name);
}
// this bring back to javascript
function funbc12(data: unknown) {
  if (
    data != null &&
    typeof data === 'object' &&
    'namae' in data &&
    typeof data.name === 'string'
  ) {
    console.log(data.namae.lengthf);
  }
}
