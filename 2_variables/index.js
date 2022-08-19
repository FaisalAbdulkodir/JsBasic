// let age;
// age  = 22;

let age = 22;
let firstName = 'Faisal';
let student = true;


console.log('Hello!',firstName)
console.log('You are',age,'years old')
console.log('Enrolled:',student)

// cara masukan variable ke dalam tag yang dikasi id
document.getElementById('p1').innerHTML = 'Hello ' + firstName;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
document.getElementById('p3').innerHTML = 'Enrolled: ' + student;