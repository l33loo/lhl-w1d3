/*
Instead of having your function countLetters return just the count of each letter,
the requirement has changed to return all the indices (zero-based positions) in the
string where each character is found. So for each letter, we're no longer returning
just one number to represent its number of occurrences, but rather (potentially)
multiple numbers to represent all the places in the string that it shows up.
*/

function countLetters(str) {

  // Convert the string to lowercase.
  str = str.toLowerCase();

  // Create an object that will store the string characters and their indeces.
  var charIdxObj = {};

  // Loop through the string characters.
  for (var i = 0; i < str.length; i++) {

    // Create an array that stores the indeces of a given letter.
    var charIdxArr = [];

    /* If the object property doesn't exist yet, compare the character to
    itself and to each subsequent character. */
    if (!charIdxObj[str[i]]) {
      for (var j = i; j < str.length; j++) {

        /* If both characters match, add to the index array the index of the character
        to which the initial character is compared. */
        if (str[i] === str[j]) {
          charIdxArr.push(str.indexOf(str[j], j));
        }
      }

      // Create the property for the letter and assign it's value to be the index array.
      charIdxObj[str[i]] = charIdxArr;
    }
  }

  // Delete the object property that represents the space character.
  delete charIdxObj[" "];

  return charIdxObj;
}

console.log(countLetters("lighthouse in the house"));


