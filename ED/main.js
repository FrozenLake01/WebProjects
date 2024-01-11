const startPageSect = document.querySelector("#start-page");
const profileSect = document.querySelector("#profile");
const quizSelectionSect = document.querySelector("#quiz-selection");
const profileContainer = document.querySelector(".profile-container");
const playCont = document.querySelector(".play-btn-cont");
const quizHeader = document.querySelector(".quiz-info-header");
const quizPara = document.querySelector(".quiz-info-para");



// buttons
const startBtn = document.querySelector(".start-button");
const quizCont = document.querySelector(".quiz-container");
const quizzes = document.querySelectorAll(".quiz");
const userProfile = document.querySelector(".user");
const userMessage = document.querySelector(".user-message");
const submit = document.querySelector(".submit");
const alert = document.querySelector(".alert");
const playBtn = document.querySelector(".play-btn");
const backBtn = document.querySelector(".backBtn");


// js for 1st section
startBtn.addEventListener("click", () => {
  window.location.href = "#profile";
  profileContainer.classList.add("translate-animation");
});


// js for 2nd section
function quizSection() {
  submit.addEventListener("click", () => {
    const value = userProfile.value.trim();
    sessionStorage.setItem("username", value);

    if (value == 0) {
      alert.style.display = "block";
    } else {
      window.location.href = "sample.html";
      // location.reload();

      alert.style.display = "none";
    }
  });
  const str = sessionStorage.getItem("username");
  const username = str.charAt(0).toUpperCase() + str.slice(1);
  userMessage.innerHTML = "Welcome " + username;
}


// js for 3rd section
function quizEffects() {
  quizzes.forEach((quiz, index) => {
    setTimeout(() => {
      quiz.classList.add("quizzes-animation");
    }, index * 400);

    quiz.addEventListener(
      "mouseover",
      (event) => {
        event.target.style.transform = "translateY(-30px)";
      },
      false
    );
    quiz.addEventListener(
      "mouseout",
      (event) => {
        event.target.style.transform = "translateY(0px)";
      },
      false
    );

    quiz.addEventListener("click", () => {
      const quizTxt = quiz.textContent;
      const splitTxt = quizTxt.split(" ");
      const loweredTxt = splitTxt[0].toLowerCase();
      console.log(loweredTxt);
      if(loweredTxt == "html"){
        quizHeader.textContent = "HTML";
        quizOngoing(htmlquestions);
      }
      else if(loweredTxt == "css"){
        quizHeader.textContent = "CSS";
        quizOngoing(cssquestions);
        

      }
      else if(loweredTxt == "javascript"){
        quizHeader.textContent = "Javascript";
        

      }

      window.location.href = "#quiz-start";
    })
    
  });
}

const playword = document.querySelector(".play-btn + .play-text");

function playBtnEffect() {
  playBtn.addEventListener("mouseover", () => {
    playBtn.style.backgroundColor = "white";
    playBtn.style.color = "green";
    playword.style.transform = "translate(20px) translateY(10px)";
  });
  playBtn.addEventListener("mouseout", () => {
    playBtn.style.backgroundColor = "green";
    playBtn.style.color = "white";
    playword.style.transform = "translate(-50px) translateY(10px)";
  });

  playBtn.addEventListener("click", () => {
    window.location.href = "#quiz-ongoing";
  })
}

backBtn.addEventListener("click", () => {
  window.location.href = "#quiz-selection";
})



playBtnEffect();
quizSection();
quizEffects();
