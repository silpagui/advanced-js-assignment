const timeoutBtn = document.querySelector(".timeout");
const intervalBtn = document.querySelector(".interval");
const container = document.querySelector(".container");

function setTimeoutSolution() {
  let counter = 0;
  return function loop() {
    if (counter >= 1000000) {
      console.log("Set Timeout Solution Finished!");
      return counter;
    }
    setTimeout(loop, 0);
    console.log("Set Timeout: ", ++counter);
  };
}

const loop = setTimeoutSolution();

timeoutBtn.addEventListener("click", () => {
  loop();
});

function myIntervalSolution() {
  let counter = 0;
  const id = setInterval(() => {
    if (counter >= 1000000) {
      console.log(" Set Interval Solution Finished!");
      clearInterval(id);
    } else {
      console.log("Set Interval: ", ++counter);
    }
  }, 0);
}

intervalBtn.addEventListener("click", () => {
  myIntervalSolution();
});
