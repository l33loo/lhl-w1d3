/*
Instead of having your function countLetters return just the count of each letter,
the requirement has changed to return all the indices (zero-based positions) in the
string where each character is found. So for each letter, we're no longer returning
just one number to represent its number of occurrences, but rather (potentially)
multiple numbers to represent all the places in the string that it shows up.
*/

function getLetterIndeces(str) {

  // Convert the string to lowercase.
  str = str.toLowerCase();

  /* Create an object that will store the string characters as properties,
  and the characters' indeces as values. */
  var charIdxObj = {};

  // Loop through the string characters.
  for (var i = 0; i < str.length; i++) {

    /* If a property already exists for that character,
    push the character's index into the property */
    if (charIdxObj[str[i]]) {
      charIdxObj[str[i]].push(i);

    /* If the property doesn't already exist, create it
    and use the index as its value. */
    } else {
      charIdxObj[str[i]] = [i];
    }
  }
  delete charIdxObj[" "];
  return charIdxObj;
}

console.log(countLetters("lighthouse in the house"));


