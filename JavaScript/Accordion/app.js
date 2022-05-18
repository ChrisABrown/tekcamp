 const answers = document.querySelectorAll('p.answer.hidden');
 answersArr = Array.from(answers);

 const buttons = document.getElementsByTagName('button');
 
document.body.addEventListener('click', showAnswer);

function showAnswer(e){
  if(e.target.parentElement.classList.contains('btn')){
    console.log(buttons);
    e.target.parentElement.parentElement.nextElementSibling.classList.toggle('show');
  }

};
 
