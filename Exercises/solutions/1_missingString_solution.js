// Add missing part of the name of company to string and print it. 
// ignore below line
var assert = require("assert");

var nameOfCompany = "Smarta";

nameOfCompany = nameOfCompany.concat("ssistant");
console.log(nameOfCompany);

assert(nameOfCompany === "Smartassistant");