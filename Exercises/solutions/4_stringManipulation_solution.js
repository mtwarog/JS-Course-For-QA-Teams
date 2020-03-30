// Write a JavaScript program to rotate the string 'ScriptJava' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
// Print "JavaScript" using that method.
// ignore below line
var assert = require("assert");

var name = "ScriptJava";

var switchPlaces = "Java".length;
// Take "Java" part and concatenate "Script" to it.
name = name.substr(name.length - switchPlaces).concat(name.substr(0, name.length - switchPlaces));

console.log(name);

// Tests
assert(name === "JavaScript");