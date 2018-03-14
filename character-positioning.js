/*
Instead of having your function countLetters return just the count of each letter,
the requirement has changed to return all the indices (zero-based positions) in the
string where each character is found. So for each letter, we're no longer returning
just one number to represent its number of occurrences, but rather (potentially)
multiple numbers to represent all the places in the string that it shows up.
*/

function countLetters(str) {

  /* Create an array that contains all the characters in string,
  in lowercase, including whitespace.*/
  str = str.toLowerCase();

  var charIdxObj = {};

  // Loop through the letter array and add each element as a key in the object.
  for (var i = 0; i < str.length; i++) {
    var charIdxArr = [];
    /* If the key already exists, update the value that represents the number
    of times the character appears in the letter array (or string).*/
    if (charIdxObj[str[i]] === undefined) {
      for (var j = i; j < str.length - i; j++) {
        if (str[j] === str[i]) {
          charIdxArr.push(str.indexOf(str[j], j));
        }
      }
      charIdxObj[str[i]] = charIdxArr;
    }
  }
  delete charIdxObj[" "];
  return charIdxObj;
}

console.log(countLetters("lighthouse in the house"));


