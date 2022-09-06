//using selectors inside the element

const btns = document.querySelectorAll(".question-btn");
const questions = document.querySelectorAll(".question");

// traversing the dom
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    questions.forEach((qtn) => {
      qtn.addEventListener("click", (eve) => {
        if (eve.target.closest(".question")) qtn.classList.add("show-text");
      });
      qtn.classList.remove("show-text");
    });
  })
);

// Method 2
// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });

// Method 3
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
