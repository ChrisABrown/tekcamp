const form = document.querySelector('#form form');
const inputs = document.querySelectorAll('input');
const errors = document.querySelectorAll('.error');
const origEmailError = document.querySelector('#email-error').textContent;




form.addEventListener('submit', (e) => {
  showError();
  validEmailError();
  e.preventDefault();

});

function showError(){
  for(let i = 0; i < inputs.length; i++){
    if (inputs[i].value === ''){
     errors[i].style.visibility = 'visible';
    }
    else{ errors[i].style.visibility = 'hidden';
    }}
  };



function validEmailError() {
  let email = document.getElementById('email');
  let emailError = document.getElementById('email-error');
  let regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regEx.test(email.value) === false){
      emailError.innerHTML = "Looks like this is not a valid email";
    }else {
      return;
    
      }
  }
// emailError.visibility = "visible";
// console.log(emailInput);
