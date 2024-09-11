/* var a = 7;
var b = 94;

var a = b;
var b = a;

console.log(a)
console.log(b) */

//Errado!

let a = 7;
let b = 94;

let temp = a;

a = b;
b = temp;

console.log(a)
console.log(b)