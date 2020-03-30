// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., "madam".
// ignore below line
var assert = require("assert");

function isPalindrome(word) {
	var isPalindrome = true;
	
	for (var i = 0; i < word.length / 2; i++) {
		isPalindrome = isPalindrome && word[i] === word[word.length - 1 - i];
	}
	
	return isPalindrome;
}

// Tests
assert(isPalindrome("kayak"));
assert(!isPalindrome("kolos"));
assert(isPalindrome("a"));
assert(isPalindrome("madam"));