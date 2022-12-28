import questionsArray from "./questions.js";

const submit = document.querySelector(".submit-button");

const container = document.querySelector(".question-container");

const form = document.querySelector(".question-form");

const generateQuestions = (questionsArray) => {
  questionsArray.forEach((question) => {
    // ITERATE THROUGH THE OPTIONS AND CREATE THEM
    const optionsHTML = question.options
      .map(
        (optionObj) =>
          `<input type="radio" id="${optionObj.content}" name="answer-${optionObj.label}"><label for="answer-${optionObj.label}"> ${optionObj.content} </label>`
      )
      .join("");

    return (container.innerHTML += `<div class=question-card>
      <h2 class="card__heading">Question</h2>
      <p class="question-text">${question.text}</p>
      ${optionsHTML}
    </div> `);
  });
};
generateQuestions(questionsArray.slice(0, 10).sort(() => Math.random() - 0.5));

form.addEventListener("submit", (event) => {
  const results = event.target;

  let totalScore = 0;

  // LOOP THROUGH THE DATA
  // - MAKE SURE IT IS THE SAME SIZE AS YOUR GENERATED QUESTIONS
  questionsArray.slice(0, 10).forEach((questionObj) => {
    // GET ACCESS TO THE VALUE STORED ON THE OBJECT
    const correctInput = questionObj.right;
    // USE IT IN THE SQUARE BRACKETS TO ACCESS THE RADIO BUTTON WITH THE SAME ID
    if (results[correctInput].checked) {
      totalScore++;
    }
  });

  if (totalScore >= 9) {
    alert(`Congratulations, your total score is ${totalScore}`);
  } else alert(`Try harder next time, your score is ${totalScore}`);
});
