/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

function myFunctionTest1(expected, found) {
  if (expected == found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  };
}

console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));

/* 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));

/* 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */
 function isVowel(char){
  return char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "y"; 
 }

console.log("character a is true " + myFunctionTest(true, isVowel("a")));
console.log("character e is true " + myFunctionTest(true, isVowel("e")));
console.log("character b is false " + myFunctionTest(true, isVowel("b")));

/* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, 
sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/
//sum
function sum(x){
  let sum = 0;
  for(let i =0; i < x.length; i++){
     sum = sum + x[i];
  }
  return sum;
}

console.log("Expected sum of [1, 2, 3, 4] is 10 ]" + myFunctionTest(10, sum([1, 2, 3, 4])));

//multiply
function multiply(x) {
  let multiply = 1;
  for(let i = 0; i < x.length; i++){
    multiply = multiply * x[i];
  }
  return multiply;
}

console.log("Expected multiply of [1, 2, 3, 4] is 24 ]" + myFunctionTest(24, multiply([1, 2, 3, 4])));

/* 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".*/
function reverse(str){
  let result = '';
  for(let i = str.length-1; i >= 0; i--){
    result += str[i];
  }
  return result;
}

console.log("Expected reverse of (jag testar) is (ratset gaj) ]" + myFunctionTest("ratset gaj", reverse("jag testar")));

/* 6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.*/
function findLongestWord(words){
  let max = 0;
  for(let i = 0; i < words.length; i++){
    if(words[i].length > max){
      max = words[i].length;
    }
  }
  return max;
}

console.log("Expected LongestWord of [beautiful, Hi, how, are, you, You, are, so, smart] is 9 ]" + myFunctionTest(9, findLongestWord(["beautiful", "Hi", "how", "are", "you","smart"])));

/* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords(array, i){
  let result = [];
  for (let index = 0; index < array.length; index++) {
    if(array[index].length > i){
      result.push(array[index]);
    }
  }
  return result;
}

console.log("Expected filterLongWords of i=3, arrey is [beautiful, Hi, how, are, you,so, smart] is [beautiful,smart] ]" + myFunctionTest1("beautiful,smart", filterLongWords(["beautiful", "Hi", "how", "are", "you","smart"], 3)));

/* 8. Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:*/
/* a) multiply each element by 10; */
const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
document.writeln(b.toString() + "<br/>");

/* b) return array with all elements equal to 3; */
const c = a.filter(function(elem, i, array){
  return elem === 3;});
document.writeln(c.toString() + "<br/>");

/* c) return the product of all elements;*/
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

