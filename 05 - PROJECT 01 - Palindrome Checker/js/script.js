const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

/**
 * Checks if a given input is a palindrome and updates the HTML content to display the result.
 * @param {string} input - The input to be checked for palindrome.
 */
const checkPalindrome = (input) => {
  // Throw an alert if input field is empty
  if (input === "") {
    alert("Please input a value");
    return;
  }

  // Clear result div
  resultDiv.textContent = "";

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join("");
  const resultMsg = `<strong>${input}</strong> ${
    isPalindrome ? "is" : "is not"
  } a palindrome.`;

  const pElement = document.createElement("p");
  pElement.className = "user-input";
  pElement.innerHTML = resultMsg;
  resultDiv.appendChild(pElement);

  // Display result
  resultDiv.classList.remove("hidden");
};

checkButton.addEventListener("click", () => {
  checkPalindrome(textInput.value);
  textInput.value = "";
});
