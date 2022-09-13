/* 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, 
sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.*/

function sum(x){
  return x.reduce((acc, cur) => acc + cur);
}

describe("SUM", function(){
  it("sum([1,2,3,4]) should return 10.", function(){
    assert.equal(sum([1,2,3,4]), 10);
  })
});

//multiply
function multiply(x){
  return x.reduce((acc, cur) => acc * cur);
}

describe("MULTIPLY", function(){
  it("sum([1,2,3,4]) should return 24.", function(){
    assert.equal(multiply([1,2,3,4]), 24);
  })
});

/* 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".*/
function reverse(str){
  //let arr = str.split('');
  let arr = [...str];
  return arr.reduce((acc, cur) => cur + acc);
}
describe("REVERSE", function(){
  it("Expected reverse of (jag testar) is (ratset gaj)", function(){
    assert.equal(reverse("jag testar"), "ratset gaj");
  })
});

/* 7. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.*/
function filterLongWords(array, i){
  return array.filter((w) => w.length > i);
}

describe("FILTER LONG WORDS", function(){
  it("Expected filterLongWords of i=3, arrey is [beautiful, Hi, how, are, you,so, smart] is [beautiful,smart]", function(){
    assert.deepEqual(filterLongWords(["beautiful", "Hi", "how", "are", "you", "so", "smart"], 3), ["beautiful", "smart"]);
  })
});


