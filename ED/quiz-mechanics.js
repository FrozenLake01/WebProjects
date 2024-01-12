const htmlquestions = [
  {
    question: "What does HTML stand for",
    answers: [
      { text: "Hypertext Making Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Hypertext Markup Language", correct: true },
      { text: "Hyper Transfer Making Language", correct: false },
    ],
  },
  {
    question: "A < tag >",
    answers: [
      { text: "Is used to divide sections", correct: false },
      { text: "Is not needed in HTML", correct: false },
      { text: "Tells the browser how to format our content", correct: true },
      { text: "Is part of the title line in HTML", correct: false },
    ],
  },
  {
    question: "< h > tag is",
    answers: [
      { text: "Headline Tag", correct: false },
      { text: "Header Tag", correct: true },
      { text: "Half of a tag", correct: false },
      { text: "Closing header tag", correct: false },
    ],
  },
  {
    question: "</ h > tag is",
    answers: [
      { text: "Headline Tag", correct: false },
      { text: "Header Tag", correct: false },
      { text: "Half of a tag", correct: false },
      { text: "Closing header tag", correct: true },
    ],
  },
  {
    question: 'An " Empty Tag" contains',
    answers: [
      { text: "Break Tag", correct: false },
      { text: "Both Starting Tag and Ending Tag", correct: false },
      { text: "Only Starting Tag", correct: true },
      { text: "Only Ending Tag", correct: false },
    ],
  },
  {
    question: "Fundamental HTML Block is known as ",
    answers: [
      { text: "HTML Body", correct: false },
      { text: "HTML Tag", correct: false },
      { text: "HTML Attribute", correct: true },
      { text: "HTML Element", correct: false },
    ],
  },
  {
    question: "All HTML Tags are enclosed in",
    answers: [
      { text: "# and #", correct: false },
      { text: "? and !", correct: false },
      { text: "< and />", correct: true },
      { text: "{ and }", correct: false },
    ],
  },
  {
    question: "This Language ____ was developed by ______",
    answers: [
      { text: "Hyper Text Mark up Language, Laudon", correct: false },
      { text: "Hyper Text Make up Language, Tim Berners Lee", correct: false },
      { text: "Hyper Text Mark Up Language, Tim Berners Lee", correct: true },
      { text: "Hyper Text Mark up Language, Lauv", correct: false },
    ],
  },
  {
    question: 'A "Container Tag" in HTML has',
    answers: [
      { text: "Only Ending Tag", correct: false },
      { text: "Only Starting Tag", correct: false },
      { text: "Both Starting and Ending Tag", correct: true },
      { text: "None", correct: false },
    ],
  },
  {
    question:
      "Which of the following tags will create a horizontal line across the page?",
    answers: [
      { text: '< hr >', correct: true },
      { text: "< line >", correct: false },
      { text: "< p >", correct: false },
      { text: "< grid >", correct: false },
    ],
  },
];

const cssquestions = [
  {
    question: "What does CSS stand for?",
    answers: [
      {text: "Creative Style Sheets", correct: false},
      {text: "Cascading Style Sheets", correct: true},
      {text: "Colorful Style Spread", correct: false},
      {text: "Computer Style Spread", correct: false}
    ]
  },
  {
    question: "Which is the selector for a link?",
    answers: [
      {text: "a { }", correct: true},
      {text: "link { }", correct: false},
      {text: "href { }", correct: false},
      {text: "a href { }", correct: false}
    ]
  },
  {
    question: "Which is the selector in this CSS?\np {color: red;}",
    answers: [
      {text: "p", correct: true},
      {text: "color", correct: false},
      {text: "red", correct: false},
      {text: "*", correct: false}

    ]
  },
  {
    question: "________ positioning keeps the element in the normal document flow, while ________ positioning takes it out of the normal flow.",
    answers: [
      {text: "relative, absolute", correct: true},
      {text: "absolute, relative", correct: false},
      {text: "fixed, static", correct: false},
      {text: "parallel, universal", correct: false}
    ]
  },
  {
    question: "Which is correct CSS syntax?",
    answers: [
      {text: "{ body; color=black;}", correct: false},
      {text: "body: color= black", correct: false},
      {text: "body {color:black;}", correct: true},
      {text: "(body color is black)", correct: false}
    ]
  },
  {
    question: "What symbols go around the properties for each CSS selector?",
    answers: [
      {text: "< >", correct: false},
      {text: "[ ]", correct: false},
      {text: "{ }", correct: true},
      {text: "( )", correct: false}
    ]
  },
  {
    question: "What is the difference between HTML and CSS?",
    answers: [
      {text: "CSS is one type of HTML", correct: false},
      {text: "HTML gives a webpage structure. CSS provides styling.", correct: true},
      {text: "CSS structures a webpage. HTML strictly provides styling.", correct: false},
      {text: "There is no difference.", correct: false}
    ]
  },
  {
    question: "How can you make a numbered list?",
    answers: [
      {text: "< list >", correct: false},
      {text: "< ol >", correct: true},
      {text: "< dl >", correct: false},
      {text: "< ul >", correct: false}
    ]
  },
  {
    question: "How can you make a bulleted list?",
    answers: [
      {text: "< ol >", correct: false},
      {text: "< ul >", correct: true},
      {text: "< list >", correct: false},
      {text: "< dl >", correct: false}
    ]
  },
  {
    question: "The style that you are applying to a selector, e.g. border.",
    answers: [
      {text: "Property", correct: true},
      {text: "Value", correct: false},
      {text: "Keyword", correct: false},
      {text: "Length Units", correct: false}
    ]
  }
]


//Js questions

const jsquestions = [
{
  question: "What is the correct JavaScript syntax to write 'Hello World'?",
  answers: [
    { text: 'System.out.println("Hello World")', correct: false },
    { text: 'println ("Hello World")', correct: false },
    { text: 'document.write("Hello World")', correct: true },
    { text: 'response.write("Hello World")', correct: false }
  ]
},
{
  question: "Inside which HTML element do we put the JavaScript?",
  answers: [
    { text: '< js >', correct: false },
    { text: '< scripting >', correct: false },
    { text: '< script >', correct: true },
    { text: '< javascript >', correct: false }
  ]
},
{
  question: "__ tag is an extension to HTML that can enclose any number of JavaScript statements.",
  answers: [
    { text: '< SCRIPT >', correct: true },
    { text: '< BODY >', correct: false },
    { text: '< HEAD >', correct: false },
    { text: '< TITLE >', correct: false }
  ]
},
{
  question: "JavaScript entities start with ___ and end with _____.",
  answers: [
    { text: 'Semicolon, colon', correct: false },
    { text: 'Semicolon, Ampersand', correct: false },
    { text: 'Ampersand, colon', correct: false },
    { text: 'Ampersand, semicolon', correct: true }
  ]
},
{
  question: "Which of the following best describes JavaScript?",
  answers: [
    { text: 'a low-level programming language.', correct: false },
    { text: 'a scripting language precompiled in the browser.', correct: false },
    { text: 'a compiled scripting language.', correct: false },
    { text: 'an object-oriented scripting language.', correct: true }
  ]
},
{
  question: "Choose the client-side JavaScript object?",
  answers: [
    { text: 'Database', correct: false },
    { text: 'Cursor', correct: false },
    { text: 'Client', correct: false },
    { text: 'FileUpLoad', correct: true }
  ]
},
{
  question: "JavaScript is interpreted by _____",
  answers: [
    { text: 'Client', correct: true },
    { text: 'Server', correct: false },
    { text: 'Object', correct: false },
    { text: 'None of the above', correct: false }
  ]
},
{
  question: "Using ___ statement is how you test for a specific condition.",
  answers: [
    { text: 'Select', correct: false },
    { text: 'If', correct: true },
    { text: 'Switch', correct: false },
    { text: 'For', correct: false }
  ]
},
{
  question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
  answers: [
    { text: "The User's machine running a Web browser", correct: true },
    { text: 'The Web server', correct: false },
    { text: "A central machine deep within Netscape's corporate offices", correct: false },
    { text: 'None of the above', correct: false }
  ]
},
{
  question: "____ JavaScript is also called client-side JavaScript.",
  answers: [
    { text: 'Microsoft', correct: false },
    { text: 'Navigator', correct: true },
    { text: 'LiveWire', correct: false },
    { text: 'Native', correct: false }
  ]
}
];

const cppquestions = [
{
  question: "Which of these types is not provided by C but is provided by C++?",
  answers: [
    { text: 'double', correct: false },
    { text: 'float', correct: false },
    { text: 'bool', correct: true },
    { text: 'int', correct: false }
  ]
},
{
  question: "Which concept do we use for the implementation of late binding?",
  answers: [
    { text: 'Static Functions', correct: false },
    { text: 'Constant Functions', correct: false },
    { text: 'Operator Functions', correct: false },
    { text: 'Virtual Functions', correct: true }
  ]
},
{
  question: "Which of these won’t return any value?",
  answers: [
    { text: 'void', correct: true },
    { text: 'null', correct: false },
    { text: 'free', correct: false },
    { text: 'empty', correct: false }
  ]
},
{
  question: "Which of these operators is used in order to capture every external variable by reference?",
  answers: [
    { text: '*', correct: false },
    { text: '&&', correct: false },
    { text: '&', correct: false },
    { text: '=', correct: true }
  ]
},
{
  question: "What would happen in case one uses a void in the passing of an argument?",
  answers: [
    { text: 'It would return any value', correct: false },
    { text: 'It may not or may depend on a declared return type of any function. The return type of the function is different from the passed arguments', correct: true },
    { text: 'It would return some value to the caller', correct: false },
    { text: 'It would not return any value to the caller', correct: false }
  ]
},
{
  question: "__________ is an ability of grouping certain lines of code that we need to include in our program?",
  answers: [
    { text: 'macros', correct: false },
    { text: 'modularization', correct: true },
    { text: 'program control', correct: false },
    { text: 'specific task', correct: false }
  ]
},
{
  question: "Which of the following is used for comments in C++?",
  answers: [
    { text: '/* comment */', correct: false },
    { text: '// comment */', correct: false },
    { text: '// comment', correct: false },
    { text: 'both // comment or /* comment */', correct: true }
  ]
},
{
  question: "What is used for dereferencing?",
  answers: [
    { text: 'pointer with asterix', correct: true },
    { text: 'pointer without asterix', correct: false },
    { text: 'value with asterix', correct: false },
    { text: 'value without asterix', correct: false }
  ]
},
{
  question: "What does polymorphism stand for?",
  answers: [
    { text: 'a class that has four forms', correct: false },
    { text: 'a class that has two forms', correct: false },
    { text: 'a class that has only a single form', correct: false },
    { text: 'a class that has many forms', correct: true }
  ]
},
{
  question: "What handler do we use if we want to handle all the types of exceptions?",
  answers: [
    { text: 'try-catch handler', correct: false },
    { text: 'catch-none han', correct: false },
    { text: 'catch-all handler', correct: true },
    { text: 'catch handler', correct: false }
  ]
}
];




const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionButtons = document.querySelector("#answer-buttons btn");

let currentQuestionIndex = 0;
let score = 0;

function quizOngoing(progLag){

  function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }
  
  function showQuestion(){
    resetState();
    let currentQuestion = progLag[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;
  
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtonsElement.appendChild(button);
      if(answer.correct){
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    })
  }
  
  function resetState(){
    nextButton.style.display = "none";
    while(answerButtonsElement.firstChild){
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
      selectedBtn.classList.add("correct");
      score++;
    }else {
      selectedBtn.classList.add("incorrect");
      }
      Array.from(answerButtonsElement.children).forEach(button => {
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
      });
      nextButton.style.display = "block";
    }

    function showScore(){
      resetState();
      questionElement.innerHTML = `You scored ${score} out of ${progLag.length}`;
      questionElement.style.fontSize = "40px";
      nextButton.innerHTML = "Back to Quiz Selection";
      nextButton.style.display = "block";
      nextButton.addEventListener("click", () => {
        window.location.href = "#quiz-selection";
        location.reload();
      
      })
    }

    function handleNextButton(){
      currentQuestionIndex++;
      if(currentQuestionIndex < progLag.length){
        showQuestion();
      } else {
        showScore();
      }
    }
  
    nextButton.addEventListener("click", () => {
      if(currentQuestionIndex < progLag.length){
        handleNextButton();
      }
      else {
        startQuiz();
      }
    })
  
  startQuiz();
}
 



// CSS questions
