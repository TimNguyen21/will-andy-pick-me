var possibleAnswerArray = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', "Don't count on it.", 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
var questionInput = document.querySelector('.question-input');
var userQuestion = document.querySelector('.user-question');
var userAnswer = document.querySelector('.user-answer');
var submitButton = document.querySelector('.submit-button');
var clearButton = document.querySelector('.clear-button');
var favoriteButton = document.querySelector('.save-favorite-button');
var eightBall = document.querySelector('.eight-ball-section');
var saveSection = document.querySelector('.save-result-section');
var saveResult = document.querySelector('.save-result');
var cardHTML = saveResult.innerHTML;


submitButton.disabled = true;
clearButton.disabled = true;
favoriteButton.disabled = true;

submitButton.addEventListener('click', submitAnswer);
clearButton.addEventListener('click', clearForm);
questionInput.addEventListener('keyup', enableSubmit);
favoriteButton.addEventListener('click', createSave);
saveSection.addEventListener('click', removeSaveCard);

function createSave() {
  var newArticle = document.createElement('article');
  newArticle.className = 'save-result';
  newArticle.innerHTML = cardHTML;
  newArticle.querySelector('.save-question').innerText = saveQuestion;
  newArticle.querySelector('.save-answer').innerText = saveAnswer;
  saveSection.insertBefore(newArticle, saveSection.childNodes[0]);
  favoriteButton.disabled = true;
}

function removeSaveCard() {
  if (event.target.classList.contains('delete-save-button')) {
    event.target.parentNode.parentNode.remove();
  }
}

function enableSubmit() {
  if (questionInput.value == '') {
    submitButton.disabled = true;
  } else {
    submitButton.disabled = false
  }
  pressEnterSumbit();
}

function pressEnterSumbit() {
  if (event.keyCode === 13) {
  event.preventDefault();
  submitButton.click();
  }
}
var saveQuestion = '';
var saveAnswer = '';
function submitAnswer() {
  var randomNumber = Math.floor((Math.random()*possibleAnswerArray.length))
  userQuestion.innerText = questionInput.value;
  saveQuestion = questionInput.value;
  userAnswer.innerText = possibleAnswerArray[randomNumber];
  saveAnswer = possibleAnswerArray[randomNumber];
  answerOutput();
  clearButton.disabled = false;
  submitButton.disabled = true;
  favoriteButton.disabled = false;
  questionInput.disabled = true;
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
  clearButton.disabled = true;
  submitButton.disabled = true;
  questionInput.disabled = false;
  favoriteButton.disabled = true;
}
