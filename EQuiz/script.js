const quizData = [
    {
        question: "How do you increase the Contrast of an Image ?",
        a: "By Multiplying the image by a positive value",
        b: "By Subtracting the image by itself",
        c: "By Using the function ((Pixel - max)/(max-min))*255",
        d: "By using the function ((Pixel - min)/(max-min))*255",
        correct: "d",
    },
    {
        question: "How do you increase the brightness of an image ?",
        a: "By subtracting the image from a constant",
        b: "By adding a value to the image",
        c: "By using the function ((Pixel - min)/(max-min))*255",
        d: "By using the cv2.Blur() function",
        correct: "b",
    },
    {
        question: "Whats the name of the filter that adds black and white pixels randomly to an image",
        a: "Salt & Pepper Noise ",
        b: "Guassian Noise",
        c: "Impulse Noise",
        d: "No Correct Answer",
        correct: "a",
    },
    {
        question: "To remove Noise you can:",
        a: "Blur the image",
        b: "Subtract the Image from itself",
        c: "Subtract the noise filter from the image",
        d: "none of the above",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const audio = new Audio("../images/Answer.mp3");
audio.play;

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
    audio.play();
})