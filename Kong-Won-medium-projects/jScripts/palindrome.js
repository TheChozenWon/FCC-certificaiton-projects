const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

function checkIfPalindrome(str) {
  //if a value in inputValue is not A-Z, a-z, or 0-9, then it is replaced with a empty string. User can not see the letters being lowercased, it just makes it so case is in-sensitive.
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  //split to put each letter or num into a array with commas, reverse and then join to remove the array and commas.
  const reversedStr = cleanedStr.split("").reverse().join("");
  console.log(reversedStr);
  return cleanedStr === reversedStr;
}

function resultLine() {
  const inputValue = textInput.value;

  if (inputValue === "") {
    return alert("Please input a value");
  }

  if (checkIfPalindrome(inputValue)) {
    result.innerHTML = `<strong>${inputValue}</strong> is a palindrome.`;
  } else {
    result.innerHTML = `<strong>${inputValue}</strong> is not a palindrome.`;
  }

  textInput.value = "";
}

checkButton.addEventListener("click", resultLine);
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    resultLine();
  }
});
