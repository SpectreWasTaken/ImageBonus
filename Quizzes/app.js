const quizData_easy = [
  {
    question:"Question1",
    a:"Answer1",
    b:"Answer2",
    c:"Answer3",
    correct:"PutLetterHere"

  },
  {
    question:"Question2",
    a:"Answer1",
    b:"Answer2",
    c:"Answer3",
    correct:"PutLetterHere"

  },
  {
    question:"Question3",
    a:"Answer1",
    b:"Answer2",
    c:"Answer3",
    correct:"PutLetterHere"

  },
  {
    question:"Question4",
    a:"Answer1",
    b:"Answer2",
    c:"Answer3",
    correct:"PutLetterHere"

  },
  {
    question:"Question5",
    a:"Answer1",
    b:"Answer2",
    c:"Answer3",
    correct:"PutLetterHere"

  }
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){
  deselectAnswers()  
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
}

function deselectAnswers(){
  answerEls.forEach(answerEls => answerEls.checked = false)
}
function getSelected(){
  let answerEls
  answerEls.forEach(answerEl =>{
    if(answerEl.checked){
      answer = answerEl.id
    }
  })
  return answer
}