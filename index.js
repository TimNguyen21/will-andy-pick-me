var possibleAnswerArray = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
var questionInput = document.querySelector('.question-input');
var userQuestion = document.querySelector('.user-question');
var userAnswer = document.querySelector('.user-answer');
var submitButton = document.querySelector('.submit-button');
var clearButton = document.querySelector('.clear-button');
var eightBall = document.querySelector('.eight-ball-section');


submitButton.addEventListener('click', submitAnswer);
clearButton.addEventListener('click', clearForm);

function submitAnswer() {
  var randomNumber = Math.floor((Math.random()*possibleAnswerArray.length))
  userQuestion.innerText = questionInput.value;
  userAnswer.innerText = possibleAnswerArray[randomNumber];
  answerOutput();
}

function answerOutput() {
  eightBall.classList.add('hide');
  userQuestion.classList.remove('hide');
  userAnswer.classList.remove('hide');
  questionInput.value = "";
}

function clearForm(){
  eightBall.classList.remove('hide');
  userQuestion.classList.add('hide');
  userAnswer.classList.add('hide');
}
