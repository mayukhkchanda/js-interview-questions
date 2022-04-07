const count = document.getElementById("no-debounce-count");
const debounceCount = document.getElementById("debounce-count");

let counter = 0;
let debounceCounter = 0;
count.textContent = counter;
debounceCount.textContent = debounceCounter;

// create a timeoutId which will be used to check if any
// timmer is currently running or not
let timeoutId;

function debounce() {
  counter++;
  count.textContent = counter;

  // if there's a timeout id present then, that means there's already
  // a timmmer running and we need to cancel that timmer and start a
  // new one
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // get the timeout id from setTimeout. Note that because of closure
  // and lexical scoping, the reference to the timeoutId variable is
  // always the same and hence can be re-initialised again & again
  timeoutId = setTimeout(function () {
    debounceCounter++;
    debounceCount.textContent = debounceCounter;
  }, 300);
}

document.getElementById("debounce-input").addEventListener("input", debounce);
