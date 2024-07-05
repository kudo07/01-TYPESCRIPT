const button = document.createElement('button');
button.addEventListener('click', handleClick); //e:any
function handleClick(e) {
  console.log(e.anyTarget); //undefined
}
