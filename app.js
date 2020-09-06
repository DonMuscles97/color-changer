// event listeners
document.querySelector('#button').addEventListener('click', btnClick);



// function call
function btnClick (e) {
  let random = Math.floor(Math.random() * 255);
  let random2 = Math.floor(Math.random() * 255);
  let random3 = Math.floor(Math.random() * 255);
  let body = document.getElementsByTagName('body')[0];
  body.style.background = `rgb(${random}, ${random2}, ${random3})`

}