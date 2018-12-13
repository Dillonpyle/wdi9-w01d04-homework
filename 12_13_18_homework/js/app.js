console.log("working");

// Verbal questions

//1

// a parameter is the variable in a method and the argument is the data you pass into the method

//2
//return stops the code and returns a value and console.log will not influence the flow of your code.

//3
//return saves the value

// Palindrome again
function checkPalindrome(s, i) {
    return (i = i || 0) < 0 || i >= s.length >> 1 || s[i] == s[s.length - 1 - i] && checkPalindrome(s, ++i);
}

//console.log(checkPalindrome('racecar'));

//console.log(checkPalindrome('borscht'));

//digit sum
//const n = 42;
//let newArr = Array.from(n.toString()).map(Number);
//let sumOfArray = newArr[0] + newArr[1];
//console.log(sumOfArray);

// Pythagoras
let a = 8
let b = 6


function calculateSide(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

console.log(calculateSide(a, b));