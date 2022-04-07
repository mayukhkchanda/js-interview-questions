function x(y) {
  console.log("X");
  y();
}
function y() {
  console.log("Y");
}

document.getElementById("callback-invoke").addEventListener("click", () => {
  console.log("Callback invoked");
  x(y);
});
