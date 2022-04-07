function greet(postfix) {
  //function declaration
  const input = document.getElementById("function-declaration-input");
  window.alert("Welcome! " + input.value + ". From " + postfix);
  input.value = "";
}

const greetVar = greet; // stroing functions in variables

document
  .getElementById("function-declaration-call")
  .addEventListener("click", () => greet("greet()"));

document
  .getElementById("function-variable-call")
  .addEventListener("click", () => greetVar("greetVar()"));
