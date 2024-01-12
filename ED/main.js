const startPageSect = document.querySelector("#start-page");
const profileSect = document.querySelector("#profile");
const quizSelectionSect = document.querySelector("#quiz-selection");
const profileContainer = document.querySelector(".profile-container");
const playCont = document.querySelector(".play-btn-cont");
const quizHeader = document.querySelector(".quiz-info-header");
const quizPara = document.querySelector(".quiz-info-para");
const progressBar = document.querySelector(".progress-fill");
const loaderCont = document.querySelector(".loader");
const quizLogo = document.querySelector(".quiz-logo");

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

// loading animation
function loadingAnimation(url) {
  let value = 0;
  let myInterval = setInterval(() => {
    value += 20;
    if (value <= 100) {
      progressBar.style.width = value + "%";
    } else {
      clearInterval(myInterval);
      progressBar.style.width = 0 + "%";
      loaderCont.style.display = "none";
      window.location.href = `index.html#${url}`;
    }
  }, 500);
}

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
      loaderCont.style.display = "block";
      window.location.href = "#loader";
      loadingAnimation("quiz-selection");

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
      if (loweredTxt == "html") {
        quizHeader.textContent = "HTML";
        quizLogo.src = "pictures/html-logo.png";
        quizPara.innerHTML = "Welcome to the HTML Quiz, where your knowledge of Hypertext Markup Language will be put to the test! This quiz is designed to challenge and enhance your understanding of HTML, the cornerstone of web development, covering topics from basic tags to advanced structuring techniques. Good luck, and let the coding adventure begin!";
        quizOngoing(htmlquestions);
      } else if (loweredTxt == "css") {
        quizHeader.textContent = "CSS";
        quizPara.innerHTML = "Step into the world of web styling with the CSS Quiz! This interactive challenge is crafted to evaluate your proficiency in Cascading Style Sheets, the key to shaping the visual appeal of websites. From selectors to layouts, explore the depths of CSS knowledge in this quiz and elevate your skills in crafting aesthetically pleasing and responsive web designs. Best of luck!";
        quizOngoing(cssquestions);
        quizLogo.src = "pictures/css-logo.png";
      } else if (loweredTxt == "javascript") {
        quizHeader.textContent = "Javascript";
        quizPara.innerHTML = "Embark on a journey into the dynamic realm of web interactivity with the JavaScript Quiz! This quiz is your opportunity to showcase your understanding of JavaScript, the scripting language that breathes life into web pages. From manipulating the Document Object Model (DOM) to handling events and functions, test your coding prowess and unravel the power of JavaScript in this engaging quiz. Best of luck on your coding adventure!";
        quizOngoing(jsquestions);
        quizLogo.src = "pictures/js-logo.png";
      } else if (loweredTxt == "c++") {
        quizHeader.textContent = "C++";
        quizPara.innerHTML = "Welcome to the C++ Quiz, where you'll dive into the realm of powerful and versatile programming! This quiz is designed to challenge your understanding of C++, the language known for its efficiency and flexibility. From syntax intricacies to object-oriented programming concepts, brace yourself for a stimulating test of your C++ knowledge. Good luck, and let the coding challenges unfold!";
        quizOngoing(cppquestions);
        quizLogo.src = "pictures/cpp-logo.png";
      }

      window.location.href = "#quiz-start";
    });
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
    loaderCont.style.display = "block";
    window.location.href = "#loader";
    loadingAnimation("quiz-ongoing");
  });
}

backBtn.addEventListener("click", () => {
  window.location.href = "#quiz-selection";
});

playBtnEffect();
quizSection();
quizEffects();
