function startClosure() {
  let counter = 0;

  const display = document.getElementById("count");
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");

  display.textContent = counter;

  function increment() {
    counter++;
    display.textContent = counter;
  }

  function decrement() {
    counter--;
    display.textContent = counter;
  }

  incrementBtn.addEventListener("click", increment);

  decrementBtn.addEventListener("click", decrement);
}

document
  .getElementById("closure-start")
  .addEventListener("click", startClosure);
