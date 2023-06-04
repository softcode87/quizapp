const quizData = [
    {
        question: 'how old are you',
    a:  '26',
    b: '67',
    c: '76',
    d: '44',
    correct:  'b'
},
{
    question: 'what is the most used languangue in 2020',
    a: 'Javascript',
    b: 'Java',
    c:'Python',
    d: 'C',
    correct: 'b'
},
{
    question: 'Who is the President of US',
    a: 'Ashaba',
    b: 'Emmanuel',
    c:'Joe Biden',
    d: 'Pricilla',
    correct: 'c'
},
{
    question: 'What is the best colour for ladies',
    a: 'pink',
    b: 'red',
    c: 'black',
    d: 'green',
    correct: 'a'
},
{
    question: 'What year was Javascricpt launched',
    a: '1996',
    b: '1997',
    c: '1995',
    d: '1956',
    correct: 'c'
}
]


const questionEl = document.getElementById('question');
const atext = document.getElementById('atext');
const btext = document.getElementById('btext');
const ctext = document.getElementById('ctext');
const dtext = document.getElementById('dtext');
const submitbtn = document.getElementById('submit');

let currentQuiz = 0;

loadquiz();


function loadquiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    atext.innerText = currentQuizData.a;
    btext.innerText = currentQuizData.b;
    ctext.innerText = currentQuizData.c;
    dtext.innerText = currentQuizData.d;

}

submitbtn.addEventListener("click" , () =>{
    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadquiz();
    } else{
        alert("You  finished, you are the GREAT")
    }


})