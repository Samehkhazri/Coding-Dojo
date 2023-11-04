// Write a function that is given an array and each time the value is "food" it should console log "yummy". 
// If "food" was not present in the array console log "I'm hungry" once.


function alwaysHungry(arr) {

    var foundFood = false;
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "food") {
        console.log("yummy");
        foundFood = true;
      }
    }
  
    if (!foundFood) {
      console.log("I'm hungry");
    }
  }
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"



// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    // your code here
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    var Arg=0;
    for (var i = 0; i < arr.length; i++) {
    sum=sum+arr[i];

    // calculate the average
    
}
Arg=sum/arr.length;
var count = 0;
for(var i=0; i<arr.length; i++) {
    if(arr[i] > Arg) {
        count++;
    }
    // count how many values are greated than the average
    
}
return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// Array Reverse
// Write a function that will reverse the values an array and return them.


function reverse(arr) {
    var reversedArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



// Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature. 
// Write a function that will return an array of Fibonacci numbers up to a given length n. 
// Fibonacci numbers are calculated by adding the last two values in the sequence together. 
// So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // Initialize the Fibonacci array with the first two values
    var fibArr = [0, 1];
    
    // Generate the Fibonacci sequence up to the given length
    for (var i = 2; i < n; i++) {
        var nextFib = fibArr[i - 1] + fibArr[i - 2];
        fibArr.push(nextFib);
    }
    
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


