const quizData = [
    {
        question: "What Happened to the second Image",
        a: "The Image was blurred, and changed its color map",
        b: "The Image was inverted",
        c: "The Image was flipped",
        d: "No Change",
        correct: "a",
        img: "../images/HQ1.png"
    },
    {
        question: "What Happened to the second Image",
        a: "Added Salt & Pepper noise",
        b: "Blurred the Image",
        c: "Added Gaussian Noise, Increased Contrast",
        d: "No Change",
        correct: "c",
        img: "../images/HQ2.png"
    },
    {
        question: "What Happened to the second Image",
        a: "Image Blurred",
        b: "Image had its contrast increased",
        c: "Image had its color map changed",
        d: "No Change",
        correct: "b",
        img: "../images/HQ3.png"
    },
    {
        question: "To change the Brightness of an image, you have to:",
        a: "Add or Subtract values to each pixel equally",
        b: "Mutliply the image with a solid white image",
        c: "Use the cv2.cvtColor() function",
        d: "none of the above",
        correct: "a",
        img: null

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
const imgArea = document.getElementById('quizImage')


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
    // if(currentQuizData.img == null){
    //     imgArea.hidden = true
    // } else{
    //     imgArea.src = currentQuizData.img
    //     imgArea.hidden = false;
    // }
    imgArea.src=currentQuizData.img

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