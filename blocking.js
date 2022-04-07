function blocking() {
  console.log("Start");

  setTimeout(() => {
    console.log("I was supposed to be called after 1s.");
    console.log("setTimeout Callback func");
  }, 1000);

  console.log("End");

  //Blocking the Main Thread
  console.log("Started Blocking the Main Thread");
  let startDt = Date.now();
  let endDt = Date.now();

  // till the endDt is 10s from the start time
  // the loop keeps running on the main thread i.e. on the callstack
  while (endDt < startDt + 10000) {
    endDt = Date.now();
  }
  console.log("Successfully blocked the main thread for 10 seconds");
  console.log("Ended Blocking the Main Thread");
}

document.getElementById("blocking-start").addEventListener("click", blocking);
