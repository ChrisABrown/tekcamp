const container = document.querySelector('#form');
const inputs = container.querySelectorAll('form > input');
const errors = container.querySelectorAll('form > small');
const submit = container.querySelector('#btn');


inputsArr = Array.from(inputs);

submit.addEventListener('submit', checkInputs);

function checkInputs(e) {
  for(let i = 0; i < inputsArr.length; i++){
  if(inputsArr[i].value === ' '){
    e.preventDefault();
    console.log(inputsArr);


  }
}};
