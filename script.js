
let timer;
let secondsRemaining = 60;
let score = 0;
let currentQuestionIndex = 0;

document.getElementById("start-button").addEventListener("click", () => {
  document.getElementById("top").style.display = "none";
  document.getElementById("middle").style.display = "block";
  startTimer();

});






document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();


  const selectedAnswer = document.querySelector("input[name='datatype']:checked");

  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const correctAnswer = "alerts";


    if (userAnswer === correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect. The correct answer is alerts.");
      secondsRemaining -= 10
    }

    document.getElementById("quizForm").style.display = "none";

    document.getElementById("quizForm1").style.display = "block";


  } else {
    alert("Please select an answer.");
  }
});

document.getElementById("quizForm1").addEventListener("submit", function (e) {
  e.preventDefault();


  const selectedAnswer = document.querySelector("input[name='enclosed']:checked");

  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const correctAnswer = "parenthesis";


    if (userAnswer === correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect. The correct answer is parenthesis.");
      secondsRemaining -= 10
    }

    document.getElementById("quizForm1").style.display = "none";

    document.getElementById("quizForm2").style.display = "block";
  } else {
    alert("Please select an answer.");
  }
});

document.getElementById("quizForm2").addEventListener("submit", function (e) {
  e.preventDefault();


  const selectedAnswer = document.querySelector("input[name='store']:checked");

  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const correctAnswer = "All of the above";


    if (userAnswer === correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect. The correct answer is All of the above.");
      secondsRemaining -= 10
    }
    document.getElementById("quizForm2").style.display = "none";

    document.getElementById("quizForm3").style.display = "block";
  } else {
    alert("Please select an answer.");
  }
});

document.getElementById("quizForm3").addEventListener("submit", function (e) {
  e.preventDefault();


  const selectedAnswer = document.querySelector("input[name='assigned']:checked");

  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const correctAnswer = "quotes";


    if (userAnswer === correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect. The correct answer is quotes");
      secondsRemaining -= 10
    }

    document.getElementById("quizForm3").style.display = "none";

    document.getElementById("quizForm4").style.display = "block";
  } else {
    alert("Please select an answer.");
  }
});


document.getElementById("quizForm4").addEventListener("submit", function (e) {
  e.preventDefault();


  const selectedAnswer = document.querySelector("input[name='debugging']:checked");

  if (selectedAnswer) {
    const userAnswer = selectedAnswer.value;
    const correctAnswer = "console.log";


    if (userAnswer === correctAnswer) {
      alert("Correct!");
      score++;
    } else {
      alert("Incorrect. The correct answer is console.log");
      secondsRemaining -= 10
    }
    endQuiz()
  } else {
    alert("Please select an answer.");
  }
});



function startTimer() {
  timer = setInterval(function () {
    secondsRemaining--;
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Time Left: ${secondsRemaining} seconds`;

    if (secondsRemaining <= 0) {
      endQuiz();
      //showNextQuestion();
    }
  }, 1000);
}


function endQuiz() {
  clearInterval(timer);
  document.getElementById("bottom").style.display = "block";
  document.getElementById("middle").style.display = "none";
  document.getElementById("final-score").textContent = score
}

// function saveScore() {
//   const initials = prompt('Enter your initials:');
//   // Save the initials and score as needed, e.g., store in a database
//   console.log(`Initials: ${initials}, Score: ${score}`);
// }

document.getElementById("initials-submit").addEventListener("click", function (e) {
  e.preventDefault();
  saveScore();
});

function saveScore() {
  const initialsInput = document.getElementById("initials");
  const initials = initialsInput.value;

  if (initials.trim() === "") {
    alert("Please enter your initials.");
    return;
  }
  const storedScore = JSON.parse(localStorage.getItem('playerScore')) || [];

  var newScore = { initials, score }
  storedScore.push(newScore)

  // Save the initials and score using local storage
  localStorage.setItem('playerScore', JSON.stringify(storedScore));

  console.log(`Initials: ${initials}, Score: ${score} - Score saved successfully.`);

  retrieveScore();
}



function retrieveScore() {
  const storedScore = JSON.parse(localStorage.getItem('playerScore'));



  if (storedScore) {
    //const { initials, score } = JSON.parse(storedScore);
    console.log(`Retrieved Score - Initials: ${initials}, Score: ${score}`);
    summaryScore(storedScore); // Corrected the function name
  } else {
    console.log('No score found in local storage.');
  }
}

function summaryScore(storedScore) {
  document.getElementById("bottom").style.display = "none";
  document.getElementById("summary").style.display = "block";

  for (let i = 0; i < storedScore.length; i++) {

    // Create a new paragraph element to display the initials and score
    const p = document.createElement('p');
    p.textContent = `Initials: ${storedScore[i].initials}, Score: ${storedScore[i].score}`;

    // Append the new paragraph to the summary element
    document.getElementById("summary").appendChild(p);

  }


};