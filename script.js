import questionsArray from "./questions.js";

const submit = document.querySelector(".submit-button");

const container = document.querySelector(".question-container");

const form = document.querySelector(".question-form");

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// questionsArray.forEach((element) => {
//   const randomizedAnswers = getRandomInt(element.options);
//   return randomizedAnswers
// });

const generateQuestions = (questionsArray) => {
  questionsArray.forEach((question) => {
    return (container.innerHTML += `<div class=question-card>
      <h2 class="card__heading">Question</h2>
      <p class="question-text">${question.text}</p>
      <input type="radio" id="${question.options.a}" name="answer${question.id}">  
      <label for="answer-A"> ${question.options.a} </label>
      <input type="radio" id="${question.options.b}" name="answer${question.id}">  
      <label for="answer-B"> ${question.options.b} </label>
      <input type="radio" id="${question.options.c}" name="answer${question.id}">  
      <label for="answer-C"> ${question.options.c} </label>
      <input type="radio" id="${question.options.d}" name="answer${question.id}">  
      <label for="answer-D"> ${question.options.d} </label>
    </div> `);
  });
};
generateQuestions(questionsArray.slice(0, 10));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);

  let totalScore = 0;

  const results = event.target;
  console.log(results["Yes"].checked);

  if (results["Yes"].checked) {
    totalScore++;
  }
  if (results["Elessar"].checked) {
    totalScore++;
  }
  if (results["Goldberry"].checked) {
    totalScore++;
  }
  if (results["Mithrandir"].checked) {
    totalScore++;
  }
  if (results["King"].checked) {
    totalScore++;
  }
  if (results["Meriadoc Brandybuck"].checked) {
    totalScore++;
  }
  if (results["Fireworks"].checked) {
    totalScore++;
  }
  if (results["Gimli"].checked) {
    totalScore++;
  }
  if (results["Eowyn"].checked) {
    totalScore++;
  }
  if (results["Bill"].checked) {
    totalScore++;
  }

  console.log(totalScore);
  if (totalScore >= 9) {
    alert(`Congratulations, your total score is ${totalScore}`);
  } else alert(`Git gud, your score is ${totalScore}`);
});

// const results = event.target;
// console.log(results["maybe yes"].checked);
// event.target

// LOOP THROUGH THE OPTIONS AND CREATE

// GOOGLE FOR IN (WHICH LOOPS OBJECTS)

// OBJECT KEYS AND OBJECT VALUES - WHICH ONE TO GRAB WHICH TO RANDOMIZE

// ADD VALUE TO THE EVENT
