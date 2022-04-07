const nothrottleCount = document.getElementById("no-throttle-count");
const throttleCount = document.getElementById("throttle-count");

let nothrottlecounter = 0;
let throttleCounter = 0;

let thottleTimeoutId;

nothrottleCount.textContent = counter;
throttleCount.textContent = throttleCounter;

function throttle() {
  nothrottlecounter++;
  nothrottleCount.textContent = nothrottlecounter;

  /**
   * If there's a timmer already running then just return and
   * don't touch the throttled function.
   */
  if (thottleTimeoutId) return;

  thottleTimeoutId = setTimeout(function () {
    /**
     * else when the timer stops, we set the timer to 'undefined'
     * so that, the next time the event is fired the throttled
     * function gets invoked.
     */
    thottleTimeoutId = undefined;
    throttleCounter++;
    throttleCount.textContent = throttleCounter;
  }, 250);
}

document
  .getElementById("mouse-hover-zone")
  .addEventListener("mousemove", throttle);
