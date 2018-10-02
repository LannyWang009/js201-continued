// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse (theString) {
   var myArray = theString.split('');
   var display = '';
   for (i=0; i < theString.length; i++) {
        var lastLetter = myArray.pop();
        display = display + lastLetter
        }
    return display;
}
reverse("hello world");



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
//1:parce the sentence into an array of words; 2: if array(i)>=array(x, x goes from (0 - array.length), then return array(i), else i+1, until i=array.length
function findLongestWord (theSentence) {
    var myArray = theSentence.split(' ');
    var longestWord = 0;
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].length > longestWord) {
            longestWord = myArray[i].length;
            var actualWord = myArray[i];
        }
    }
    return actualWord;  
}

findLongestWord("The new tech-assisted approach that reuireds half the effort.");


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer (theSentence){
    var sentenceArray = theSentence.split(' ');
    var censorWords = ['heck','darn', 'dang', 'crappy'];

    for (i=0; i < censorWords.length; i++) {
        if (sentenceArray.includes(censorWords[i])) {
           var wordIndex= sentenceArray.indexOf(censorWords[i]);
            sentenceArray.splice(wordIndex, 1);
        }
    }
    theSentence = sentenceArray.join(' ')
    return theSentence
}

//console.log(nicer("mom get the heck in here and bring me a darn sandwich.")) passed the test


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}

  
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

//steps: look for theDelimiter in the string, slice it after the delimiter/
//pop the dlimiter/and plus the last slice part

function split (theString, theDelimiter) {
  var newString = [];
  var splitPosition =[];
  for (var i = theString.indexOf(theDelimiter); i != -1; i = theString.indexOf(theDelimiter, i+1)) {
      splitPosition.push(i); 
  }
  
  newString.push(theString.substring(0,splitPosition[0]));
  for (var j=0; j < splitPosition.length; j++) {
      newString.push(theString.substring(splitPosition[j]+theDelimiter.length, splitPosition[j+1]));
  }
  return newString;
}

split("APPLExxBANANAxxCHERRY", "xx");
split('a-b-c', '-') ;
split('xyz', 'r');