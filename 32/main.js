/*
Regular Expressions

Regular expressions are a sequence of characters that create a search pattern.

The search methods are: search(), replace(), test(), match().


regEx munden me u shkru si:
	- /regex/
	- "regex"
*/

console.log("hello!");

var teksti = "The best school is Digital School!";

var result = teksti.search("Digital School");
console.log(result);

var result2 = teksti.search(/Digital School/);
console.log(result2);

var result3 = teksti.replace(/best/, "coolest");
console.log(result3);

var regex = new RegExp("Digital School");
var result4 = regex.test(teksti);
console.log(result4);

var teksti2 = "My school is on3 of the best schools at the w0r1d cup. Let's goo schoool!";

var regex2 = /school/g;
/*  /g symbol is added in the end to return all the words that match with the regex, not just the first one */
var result5 = teksti2.match(regex2);
console.log(result5);

var regex3 = /o/g;
var result6 = teksti2.match(regex3);
console.log(result6);

var regex4 = /[abc]/g;
var result7 = teksti2.match(regex4);
console.log(result7);

var regex5 = /[0-9]/g;
var result8 = teksti2.match(regex5);
console.log(result8);

var regex6 = /(best|the)/g;
var result9 = teksti2.match(regex6);
console.log(result9);

var regex7 = /\d/g;
var result10 = teksti2.match(regex7);
console.log(result10);

var regex8 = /\s/g;
var result11 = teksti2.match(regex8);
console.log(result11);

var regex9 = /o+/g;
var result12 = teksti2.match(regex9);
console.log(result12);

var regex10 = /sc*/g;
var result13 = teksti2.match(regex10);
console.log(result13);

var regex11 = /o{2}/g;
var result14 = teksti2.match(regex11);
console.log(result14);

teksti3 = "hey, hi, hii, hiii!";

var regex12 = /hi*/g;
var result15 = teksti3.match(regex12);
console.log(result15);

var regex13 = /hi?/g;
var result16 = teksti3.match(regex13);
console.log(result16);

teksti4 = "runing, playing, and having\nrun! << testing";

var regex14 = /ing$/gm;
var result17 = teksti4.match(regex14);
console.log(result17);

var regex15 = /^ru/gm;
var result18 = teksti4.match(regex15);
console.log(result18);

//https://regexr.com/