document.getElementById("inputs").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const resultInput = document.getElementById("result-value");
  const previousNumber = resultInput.innerText;
  const newNumber = previousNumber + number;
  if (number == "=" && previousNumber.includes("+")) {
    resultInput.innerText = eval(resultInput.innerText);
    return;
  } else if (number == "=" && previousNumber.includes("-")) {
    resultInput.innerText = eval(resultInput.innerText);
    return;
  } else if (number == "=" && previousNumber.includes("*")) {
    resultInput.innerText = eval(resultInput.innerText);
    return;
  } else if (number == "=" && previousNumber.includes("/")) {
    resultInput.innerText = eval(resultInput.innerText);
    return;
  } else if (number == "." && previousNumber.includes(".")) {
    return;
  } else if (number == "C") {
    resultInput.innerText = "";
  } else if (number == "=") {
    return;
  } else {
    resultInput.innerText = newNumber;
  }
});
