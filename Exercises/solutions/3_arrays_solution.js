// Write a JavaScript function to get the first elements of an array. 
// Passing a parameter 'n' will return the first 'n' elements of the array. If there is less items in array than n, then return empty array.
// Use this function on array [1,2,5,12] to get respectively 2, 3 and 1 elements and print them to console.
// ignore below line
var assert = require("assert");

function getNfirstElements(array, n) {
	if (n > 0 && n < array.length) {
		return array.slice(0, n);
	} else {
		return [];
	}
}
// use above function here
console.log(getNfirstElements([1,2,5,12], 2));
console.log(getNfirstElements([1,2,5,12], 3));
console.log(getNfirstElements([1,2,5,12], 1));
// Tests
assert(JSON.stringify(getNfirstElements([1, 15, 21, -12], 2))==JSON.stringify([1, 15]));
assert(JSON.stringify(getNfirstElements([1, 15, 21, -12], 1))==JSON.stringify([1]));
assert(JSON.stringify(getNfirstElements([1, 15, 21, -12], 0))==JSON.stringify([]));
assert(JSON.stringify(getNfirstElements([1, 15, 21, -12], 55))==JSON.stringify([]));