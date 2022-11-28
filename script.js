import questionsArray from "./questions.js";

const container = document.querySelector(".question-container");

const generateQuestions = (questionsArray) => {
  questionsArray.map((quest) => {
    return (container.innerHTML += `<div class=question-card>
      <h2 class="card__heading">Question</h2>
      <p class="question__text">${quest.text}</p>
      <input type="checkbox" id="${quest.a}" name="answer-A">  
      <label for="answer-A"> ${quest.a} </label>
      <input type="checkbox" id="${quest.b}" name="answer-B">  
      <label for="answer-B"> ${quest.b} </label>
      <input type="checkbox" id="${quest.c}" name="answer-C">  
      <label for="answer-C"> ${quest.c} </label>
      <input type="checkbox" id="${quest.d}" name="answer-D">  
      <label for="answer-D"> ${quest.d} </label>
    </div> `);
  });
};
generateQuestions(questionsArray);
