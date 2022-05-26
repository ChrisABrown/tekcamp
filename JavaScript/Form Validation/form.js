const form = document.querySelector('#form form');
const inputs = form.querySelectorAll('input');
const errors = form.querySelectorAll('.error');
const origEmailError = form.querySelector('#email-error').textContent;

// Shout out to Abram for this idea for saving the OG error message!
function resetErrors(){
  origEmailError;
};


form.addEventListener('submit', (e) => {
  resetErrors();
  showError();
  validEmailError();
  e.preventDefault();
  
});
// Shout out to Alex and David for help working through this function, trim wasn't working at first until they showed my how to write it properly
function showError(){
  for(let i = 0; i < inputs.length; i++){ 
    let text = inputs[i].value.trim();
  if(text === '') {
    errors[i].style.visibility = 'visible';
    
  }else{
    errors[i].style.visibility = 'hidden';
  }}};

// BIG Shout out to Abram for this function, couldn't quite figure out how to switch back an forth but his insight unlocked the ideation here
function validEmailError() {
  const emailInput = document.querySelector('#email');
  const emailError = document.getElementById('email-error');
  const regEx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (emailError.style.visibility === "visible"){
    emailError.textContent = origEmailError;
    return
  };
  if(regEx.test(email.value) === false){
    emailError.innerHTML = 'Looks like this is not a valid email';
    emailError.style.visibility = "visible";
    console.log(emailInput.value);
  }};
  