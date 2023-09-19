document.getElementById("quizForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the selected answer
    const selectedAnswer = document.querySelector("input[name='datatype']:checked");
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const correctAnswer = "alerts"; // Set the correct answer
  
      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is alerts.");
      }
    } else {
      alert("Please select an answer.");
    }
  });

  document.getElementById("quizForm1").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the selected answer
    const selectedAnswer = document.querySelector("input[name='enclosed']:checked");
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const correctAnswer = "parenthesis"; // Set the correct answer
  
      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is parenthesis.");
      }
    } else {
      alert("Please select an answer.");
    }
  });

  document.getElementById("quizForm2").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the selected answer
    const selectedAnswer = document.querySelector("input[name='store']:checked");
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const correctAnswer = "All of the above"; // Set the correct answer
  
      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is All of the above.");
      }
    } else {
      alert("Please select an answer.");
    }
  });

  document.getElementById("quizForm3").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the selected answer
    const selectedAnswer = document.querySelector("input[name='assigned']:checked");
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const correctAnswer = "quotes"; // Set the correct answer
  
      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is quotes");
      }
    } else {
      alert("Please select an answer.");
    }
  });


  document.getElementById("quizForm4").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the selected answer
    const selectedAnswer = document.querySelector("input[name='debugging']:checked");
  
    if (selectedAnswer) {
      const userAnswer = selectedAnswer.value;
      const correctAnswer = "console.log"; // Set the correct answer
  
      // Check if the user's answer is correct
      if (userAnswer === correctAnswer) {
        alert("Correct!");
      } else {
        alert("Incorrect. The correct answer is console.log");
      }
    } else {
      alert("Please select an answer.");
    }
  });