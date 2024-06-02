const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function checkRegEx(input) {
  const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;

  return regex.test(input);
}

function checkUserInput(e) {
  e.preventDefault();

  const value = userInput.value;

  if (!value) {
    alert("Please provide a phone number");
    return;
  }

  if (checkRegEx(value)) {
    resultsDiv.textContent = "Valid US number: " + value;
  } else {
    resultsDiv.textContent = "Invalid US number: " + value;
  }
}

function clearResult() {
  resultsDiv.textContent = "";
}

checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", clearResult);
