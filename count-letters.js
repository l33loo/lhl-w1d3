
/* A function that returns an object containing all the unique
characters that exist in a given string, and the frequency of
these characters in said string.*/
function countLetters(str) {

  /* Create an array that contains all the characters in string,
  in lowercase and excluding whitespace.*/
  var letterArr = str.replace(/\s/g, "").toLowerCase().split("");

  var objLetterFrequ = {};

  // Loop through the letter array and add each element as a key in the object.
  for (var i = 0; i < letterArr.length; i++) {

    /* If the key already exists, increment the letter frequency counter.*/
    if (objLetterFrequ[letterArr[i]]) {

      objLetterFrequ[letterArr[i]]++;

    /* If the key doesn't already exist, create it and set its value to 1. */
    } else {
      objLetterFrequ[letterArr[i]] = 1;
    }
  }
  return objLetterFrequ;
}

console.log(countLetters("lighthouse in the house"));
