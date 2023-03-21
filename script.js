var stepNumber = 1;
var barWidth = 0;
const stepNext = () => {

  console.log(stepNumber);
  const stepImage = document.querySelectorAll(`.step${stepNumber} input`);
  stepImage.forEach((el) => {
    if (el.checked) {
      const progressedBar = document.querySelector(".progressed-bar");
      const step = document.querySelector(`.step${stepNumber}`);
      step.classList.add("answered");
      barWidth+= 20
      progressedBar.style.width = barWidth + '%'
      setTimeout(() => {
        step.style.display = "none";
      }, 1250);
      stepNumber++;
      return false;
    }
  });
};
