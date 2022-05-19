const container = document.querySelector('#form');
const inputs = container.querySelectorAll('form > input');
const errors = container.querySelectorAll('form > small');


inputsArr = Array.from(inputs);

container.addEventListener('submit', checkInputs);

function checkInputs(e) {
  for(let i = 0; i < inputsArr.length; i++){
  if(inputsArr[i].value === ' '){
   console.log(inputsArr[i]);


  }
}};
