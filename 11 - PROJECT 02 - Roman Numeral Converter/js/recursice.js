const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const output = document.getElementById("output");

function checkInputValue() {
  if (!inputNumber.value) {
    output.textContent = "Please enter a valid number";
  } else if (inputNumber.value <= 0) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (inputNumber.value > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = toRoman(inputNumber.value);
  }
}

/* THIS FUNCTION USES RECURSIVE FUNCTION APPROACH. */
function toRoman(num) {
  // Create an array of objects, each containing a Roman numeral and its corresponding integer value
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  // Define a recursive function to convert the number to a Roman numeral
  function convertToRoman(num) {
    // Iterate over the array of Roman numeral objects
    for (let i = 0; i < romanMap.length; i++) {
      // If the number is greater than or equal to the current value
      if (num >= romanMap[i].value) {
        // Return the Roman numeral and call the function recursively with the reduced number
        return romanMap[i].numeral + convertToRoman(num - romanMap[i].value);
      }
    }
    return ""; // Base case: return an empty string when the number is reduced to 0
  }

  return convertToRoman(num); // Call the recursive function with the initial number
}

// Example usage:
console.log(toRoman(1987)); // Output: MCMLXXXVII

convertBtn.addEventListener("click", checkInputValue);
