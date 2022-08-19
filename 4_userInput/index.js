// How to accept user input

// EASYY WAY with a window prompt
// let username = window.prompt('what is your name?')
// console.log(username)

// NU HESE with HTML textbox
let username;
document.getElementById('btn').onclick = function(){
    username = document.getElementById('myText').value;
    console.log(username);
    document.getElementById('lbl').innerHTML = 'Hello ' + username;
}