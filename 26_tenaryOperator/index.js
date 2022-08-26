// ternary operator - shortcut for if/else statement
// 3 condition : 
// 1. a condition with
// 2. expression if true
// 3. expression if False

// condition ? expressio ifTrue : expression ifFalse

let adult = checkAge(window.prompt('asupkeun umur sia'));
// console.log(adult);

function checkAge(age){
    // if(age >= 18){
    //     return true;
    // }else{
    //     return false;
    // }
    return age >= 18 ? console.log('Sia geus kolot') : console.log('sia ngora keneh');
}