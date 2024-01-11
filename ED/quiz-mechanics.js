const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionButtons = document.querySelector("#answer-buttons btn");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    element.disabled = true;
    console.log("correct");
  } else {
    element.classList.add("wrong");
    element.disabled = true;
    console.log("correct");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
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
    question: "A <tag>",
    answers: [
      { text: "Is used to divide sections", correct: false },
      { text: "Is not needed in HTML", correct: false },
      { text: "Tells the browser how to format our content", correct: true },
      { text: "Is part of the title line in HTML", correct: false },
    ],
  },
  {
    question: "<h> is",
    answers: [
      { text: "Headline Tag", correct: false },
      { text: "Header Tag", correct: true },
      { text: "Half of a tag", correct: false },
      { text: "Closing header tag", correct: false },
    ],
  },
  {
    question: "</h> is",
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
      { text: "? and !", correct: false },
      { text: "< and />", correct: true },
      { text: "{ and }", correct: false },
    ],
  },
];
