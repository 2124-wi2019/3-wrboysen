/*
Bill Boysen
boysen_a03c.js
INFO_2124_WW
Thoendel
12/22/2019
*/

//declare and assign variable
let sentence = "When in the course of human events";

//declare and assign template literal
let checker = `
The preamble is:
    ${ sentence }
    
Does the preamble contain 'a'?
    ${ sentence.includes('a') }
`;

//print template
console.log(checker);