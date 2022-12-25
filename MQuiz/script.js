const quizData = [
    {
        question: "What was changed in the second image ",
        a: "The Image is the same",
        b: "High Compression",
        c: "The Image is Blurred",
        d: "More Noise added to the image",
        correct: "d",
    },
    {
        question: "What was changed in the second image ",
        a: "The Image was Blurred",
        b: "The Image was blurred with more brightness",
        c: "The Image had its contrast increased",
        d: "The Image had noise added to it",
        correct: "b",
    },
    {
        question: "The Different Types of blur are:",
        a: "Gaussian Blur, Box Blur, Bilatral Blur",
        b: "Gaussian Blur, Salt & Pepper Blur",
        c: "Box Blur, Bilatral Blur, denoise Blur",
        d: "Gaussian Blur is the only correct answer",
        correct: "a",
    },
    {
        question: "The Different types of noise are:",
        a: "Thermal Noise & Guassian Noise",
        b: "Box Noise, Bilatral Noise, Guassian Noise",
        c: "Salt & Pepper Noise, Gaussian Noise",
        d: "No Answer is correct",
        correct: "c",
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
})