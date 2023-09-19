
let timer = 60;
let score = 0;
let currentQuestionIndex = 0;

document.getElementById("start-button").addEventListener("click", () => {
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
      }
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
      }
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
      }
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
      }
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
      }
    } else {
      alert("Please select an answer.");
    }
  });

  let secondsRemaining = 60; 

  function startTimer() {
    timer = setInterval(function () {
      secondsRemaining--;
      const timerElement = document.getElementById("timer");
      timerElement.textContent = `Time Left: ${secondsRemaining} seconds`;
  
      if (secondsRemaining <= 0) {
        clearInterval(timer);
        alert("Time's up!");
        showNextQuestion();
      }
    }, 1000);
  }

 