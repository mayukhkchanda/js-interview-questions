const resolverPromise = new Promise(function (resolve, reject) {
  /* Some time taking API/IO/DB operation */
  setTimeout(() => {
    resolve("SDE Mayukh");
  }, 1000);
});

document.getElementById("resolve-promise").addEventListener("click", () => {
  resolverPromise.then((username) => window.alert("Welcome!! " + username));
});

const rejectorPromise = new Promise(function (resolve, reject) {
  /* Some time taking API/IO/DB operation */
  setTimeout(() => {
    reject("Server Error!!");
  }, 1000);
});

document.getElementById("reject-promise").addEventListener("click", () => {
  rejectorPromise.catch((err) => window.alert("Unable to fetch data. " + err));
});
