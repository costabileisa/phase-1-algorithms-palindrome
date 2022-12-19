function isPalindrome(word) {
  // Write your algorithm here
  function reverse(string) {
    const stringArray = Array.from(string.toLowerCase())
    const reversedArray = [];
    for (const i in stringArray) {
      reversedArray.unshift(stringArray[i])
    }
    return reversedArray
  }

  const reversedWord = reverse(word).join("");
  if (word === reversedWord) return true;
  return false;
}

module.exports = isPalindrome;

/* 
  Add your pseudocode here
  get argument as string
  check if string is palindrome
  return true if it is
  return false if its not

  get string from argument
  reverse the string
  create an array
  for the length of the array -> recombine it from last to first
*/

/*
  Add written explanation of your solution here
*/