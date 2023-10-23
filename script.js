const questionanswer = [
  {
    question: "Which is the largest animal in the world?",
    a: "Shark",
    b: "Blue whale",
    c: "Elephant",
    d: "Giraffe",
    correctindex: "b"
  },
  {
    question: "Which is the smallest country in the world?",
    a: "Vatican City",
    b: "Bhutan",
    c: "Nepal",
    d: "Sri Lanka",
    correctindex: "a"
  },
  {
    question: "Which is the largest desert in the world?",
    a: "Kalahari",
    b: "Gobi",
    c: "Sahara",
    d: "Antarctica",
    correctindex: "d"
  },
  {
    question: "Which is the smallest continent in the world?",
    a: "Asia",
    b: "Australia",
    c: "Arctic",
    d: "Africa",
    correctindex: "b"
  }
];

function restartQuiz() {
  index = 0;
  questionanswer.forEach((question) => {
    question.selectedOption = null;
  });
  displayquestion();
  allowOption();
  document.body.style.backgroundColor = '#001e4d'; // Set the background color to your desired value
  document.querySelector('.question-quiz').style.color = '#001e4d'; 
}

function allowOption(){
  const quizoption = document.querySelectorAll('.option div');
  quizoption.forEach(option => {
    option.style.pointerEvents = 'auto';
    option.addEventListener('click', checkanswer);

  })
}

function finishbutton() {
  restartQuiz();
  const finalPage = document.querySelector('.final-page');
  finalPage.style.display = 'none';
  const container = document.querySelector('.container');
  container.style.display = 'block';
}

let index = 0;

function displayquestion() {

  const quizquestion = document.querySelector('.question-quiz');
  const quizoption = document.querySelectorAll('.option div');

  quizoption.forEach(option => {
    option.style.background = 'white';
  })

  const currentquestion = questionanswer[index];

  quizquestion.innerHTML = `Q${index + 1}: ${currentquestion.question}`;
  quizoption.forEach((option,index) => {
    option.innerHTML = currentquestion[String.fromCharCode(97 + index)];
  })
}


function calculateScore() {
  let score = 0;
  questionanswer.forEach((question) => {
    if (question.selectedOption === question.correctindex.charCodeAt(0) - 97) {
      score++;
    }
  });
  return score;
}

function checkanswer(selectindex) {
  const quizoption = document.querySelectorAll('.option div');
  const currentquestion = questionanswer[index];
   if (selectindex === currentquestion.correctindex) {
    quizoption[currentquestion.correctindex.charCodeAt(0) - 97].style.background = 'green';
   } 
   else{
    quizoption[selectindex.charCodeAt(0) - 97].style.background = 'red';
    quizoption[currentquestion.correctindex.charCodeAt(0) - 97].style.background = 'green';
   }
   quizoption.forEach(option => {
    option.style.pointerEvents = 'none';
   });

   const nextbutton = document.querySelector('.Next-button');
   nextbutton.style.display = 'block';

   currentquestion.selectedOption = selectindex;
}

function calculateScore() {
  let score = 0;
  questionanswer.forEach((question) => {
    if (question.selectedOption === question.correctindex) {
      score++;
    }
  });
    return score;
   }


   function nextquestion() {
     index++;
    if (index<questionanswer.length) {
      const quizoption = document.querySelectorAll('.option div');
      quizoption.forEach(option => {
        option.style.pointerEvents = 'auto';
        option.style.background = 'white';
       })
      
    const nextbutton = document.querySelector('.Next-button');
    nextbutton.style.display = 'none';
      displayquestion();
    }
    else{
      const finalPage = document.querySelector('.final-page');
      finalPage.style.display = 'block';
      document.body.style.background = 'white';
      document.querySelector('.container').style.display = 'none';
      const score = calculateScore();
      const scoreElement = document.querySelector('.score');
      scoreElement.innerHTML = `Your score: ${score} out of ${questionanswer.length}`;
   
      const nextbutton = document.querySelector('.Next-button');
      nextbutton.style.display = 'none';
     }
   }

   displayquestion();