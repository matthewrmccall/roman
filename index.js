// Time Limit 45 minutes
// Write a function numToRoman that takes in a number and returns a string of Roman numerals equal in value to the number.
// https://en.wikipedia.org/wiki/Roman_numerals
// inputs: num - a number between 1 and 3999
// outputs: a string containing the Roman numerals representing the input number

var numToRoman = function(num) {
// create an object with keys containing the roman numerals and values contianing the associated numbers
if(num === 0){
  return 0;
}
  var conversionProperties = {

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
    I: 1

  };
// empty string to hold the Roman numerals
var romanString = '';
// iterate over the keys in conversionProperties
for(var key in conversionProperties) {
  // if input number is greater than the property value number...
  while(num >= conversionProperties[key]) {
    // ...each iteration, add the key to the string
    romanString += key;
    // then, check to make sure the key was added
    console.log(romanString);
    // then, subtract the value at that key from the input number
    num -= conversionProperties[key];
    // then, check to make sure the number has been removed
    console.log(num);
    };
  }
return romanString;
}

numToRoman();
// ASSERTION FUNCTIONS
// test for numtoRoman
function assertEqual(actual, expected, testName) {
  if(actual === expected){
    console.log('passed');
  } else {
    console.log(`FAILED ${testName} Expected ${expected} but got ${actual}`);
  }
}

// TEST CASES
var actualResult = numToRoman(3149)
var expectedResult = 'MMMCXLIX'
assertEqual(actualResult, expectedResult, 'should convert numeric input to Roman numberals')
