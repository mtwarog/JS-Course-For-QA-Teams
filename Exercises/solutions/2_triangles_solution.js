// Write a JavaScript function to find the area of a triangle. 
// Use it to compute are of triangle with base and height of 2 and 3 and print it to console
// if parameters are invalid (e.g. negative) return undefined
// ignore below line
var assert = require("assert");

function triangleArea(base, height) {
	var area;
	
	if (base > 0 && height > 0) {
		area = 1/2 * base * height;
	} else {
		area = undefined;
	}
	
	return area;
}
// use above function here
console.log(triangleArea(2,3));

// Tests
assert(triangleArea(4,6) === 12);
assert(triangleArea(-4,10) === undefined);
assert(triangleArea(4,-10) === undefined);