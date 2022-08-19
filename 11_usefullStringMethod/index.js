let userName = 'Faisal';
let userName2 = ' Faisal';
let phoneNumber = '123-456-7890';

console.log(userName.length);

let firstLetter = userName.charAt(0);
console.log(firstLetter);
console.log(userName.indexOf('l'));
console.log(userName.lastIndexOf('a'));

console.log(userName2.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(phoneNumber.replaceAll('-','/'));