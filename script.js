import questionsArray from "./questions.js";

const container = document.querySelector(".question-container");

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
      <p class="question__text">${question.text}</p>
      <input type="radio" id="${question.options.a}" name="answer">  
      <label for="answer-A"> ${question.options.a} </label>
      <input type="radio" id="${question.options.b}" name="answer${[]}">  
      <label for="answer-B"> ${question.options.b} </label>
      <input type="radio" id="${question.options.c}" name="answer${[]}">  
      <label for="answer-C"> ${question.options.c} </label>
      <input type="radio" id="${question.options.d}" name="answer${[]}">  
      <label for="answer-D"> ${question.options.d} </label>
    </div> `);
  });
};
generateQuestions(questionsArray);

for (const props in questionsArray.options) {
  console.log(`${props}: ${questionsArray.options[props]}`);
}

// LOOP THROUGH THE OPTIONS AND CREATE

// GOOGLE FOR IN (WHICH LOOPS OBJECTS)

// OBJECT KETS AND OBJECT VALUES - WHICH ONE TO GRAB WHICH TO RANDOMIZE

// ADD VALUE TO THE EVENT
