var stepNumber = 1;
var barWidth = 0;
const startQuiz = () =>{
  const logo = document.querySelector('#logo')
  gameSection = document.querySelector('.game-start')
  stepsSection = document.querySelector('#steps')
  gameSection.classList.add('hide-me')
  logo.classList.add('steps')
  setTimeout(()=>{
    stepsSection.classList.remove('hide-me')
  }, 1500)
}
const stepNext = async () => {
  console.log(stepNumber);
  const stepImage = document.querySelectorAll(`.step${stepNumber} input`);
  stepImage.forEach((el) => {
    if (el.checked) {
      const progressedBar = document.querySelector(".progressed-bar");
      const step = document.querySelector(`.step${stepNumber}`);
      step.classList.add("answered");
      barWidth += 20;
      progressedBar.style.width = barWidth + "%";
      setTimeout(() => {
        step.style.display = "none";
      }, 1250);
      stepNumber++;
      return false;
    }
  });
  if (stepNumber === 6) {
    const res = await fetch("results.json");
    const data = await res.json();
    var number = Math.floor(Math.random() * 10)
    stepContent = document.querySelector('.step-content')
    stepLoader = document.querySelector('.lds-roller')
    resultImg = document.querySelector("#result-img");
    resultTitle = document.querySelector("#result-title");
    resultSubtitle = document.querySelector("#result-subtitle");
    resultImg.src = `${data[number].img}`;
    resultTitle.innerText = `${data[number].title}`;
    resultSubtitle.innerText = `${data[number].description}`;
    setTimeout(()=>{
      stepContent.classList.remove('hide-me')
      stepLoader.classList.add('hide-me')
    },2500)
  }
};
