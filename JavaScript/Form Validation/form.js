const form = document.querySelector('#form form');
const inputs = document.querySelectorAll('input');
const errors = document.querySelectorAll('.error');
const origEmailError = document.querySelector('#email-error');



form.addEventListener('submit', (e) => {
  showError();
  validEmailError();
  e.preventDefault();

});

function showError(){
  for(let i = 0; i < inputs.length; i++){ 
    let text = inputs[i].value.trim();
  if(text === '') {
    errors[i].style.visibility = 'visible';
    // e.stopPropagation();
  }else{
    errors[i].style.visibility = 'hidden';
  } }
}

function validEmailError() {
  const emailInput = document.querySelector('#email');
  console.log(emailInput);
  const emailError = document.getElementById('email-error');
  const regEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if(regEx.test(email.value) === false){
    emailError.innerHTML = 'Looks like this is not a valid email';
    emailError.style.visibility = "visible";
  }else {
  
    
    
  }}
  