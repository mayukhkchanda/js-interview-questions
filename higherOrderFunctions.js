function timerFactory(callbackFunc) {
  // higher order function
  return function (...args) {
    const startTime = Date.now();
    callbackFunc(...args);
    const timeElapsed = (Date.now() - startTime) / 1000;
    console.log(`[INFO] function '${callbackFunc.name}' took ${timeElapsed}s`);
  };
}

const sayHi = () => window.alert("Hi there!! developer");
const sayHiTimmed = timerFactory(sayHi);

document
  .getElementById("higher-order-call")
  .addEventListener("click", sayHiTimmed);
