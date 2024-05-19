const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const output = document.getElementById("output");

// The validateInputValue function checks if the input is a valid number and within a specific range.
function validateInputValue(inputValue) {
  if (!inputValue || Number.isNaN(inputValue)) {
    return "Please enter a valid number";
  } else if (inputValue <= 0) {
    return "Please enter a number greater than or equal to 1";
  } else if (inputValue > 3999) {
    return "Please enter a number less than or equal to 3999";
  }
  return null;
}

// The checkInputValue function retrieves the input value, validates it, and updates the output accordingly.
function checkInputValue() {
  const inputValue = Number(inputNumber.value);
  const validationMessage = validateInputValue(inputValue);

  if (validationMessage) {
    updateAnError();
    output.textContent = validationMessage;
  } else {
    output.classList.remove("error", "hidden");
    output.textContent = convertToRoman(inputValue);
  }
}

// If the input is invalid, this function display an error message.
function updateAnError() {
  output.classList.remove("hidden");
  output.classList.add("error");
}

// The convertToRoman function converts the input number to a Roman numeral using a mapping object and a repeat method for efficiency.
function convertToRoman(num) {
  /* THIS FUNCTION USES MAPPING FUNCTION APPROACH. */
  // Create a mapping object where keys are Roman numerals and values are their corresponding integer values
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  /***************************************************/
  /***************************************************/
  // Initialize an empty string to store the result
  // let result = "";
  // // Iterate over each key in the mapping object
  // for (let key in roman) {
  //   // While the number is greater than or equal to the current Roman numeral value
  //   while (num >= roman[key]) {
  //     // Append the Roman numeral to the result string
  //     result += key;
  //     // Subtract the value from the number
  //     num -= roman[key];
  //   }
  // }
  // // Return the final Roman numeral string
  // return result;
  /***************************************************/
  /***************************************************/

  /* THIS APPROACH MAY BE MORE EFFICIENT IN TERMS OF STRING CONCATENATION DUE TO THE USE OF THE REPEAT METHOD, WHICH CAN REDUCE THE NUMBER OF OPERATIONS NEEDED TO BUILD THE FINAL STRING. */

  // Initialize an empty string to store the result
  let str = "";

  // Iterate over the keys of the roman object
  for (let i of Object.keys(roman)) {
    // Determine how many times the current Roman numeral fits into the number
    let quotient = Math.floor(num / roman[i]);

    // Subtract the value of the current Roman numeral times the quotient from the number
    num -= quotient * roman[i];

    // Append the Roman numeral symbol to the result string, repeated 'q' times
    str += i.repeat(quotient);
  }

  return str; // Return the final Roman numeral string
}

convertBtn.addEventListener("click", checkInputValue);
