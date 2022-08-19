// let age = 12;
let age = window.prompt('how old are you?');

if(age >= 18){
    console.log('you are an adult!');
}else if(age < 0){
    console.log('you are not born yet');
}else{
    console.log('you are a child');
}