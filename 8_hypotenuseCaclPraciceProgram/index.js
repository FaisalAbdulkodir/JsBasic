let a;
let b;
let c;

// a = window.prompt('Enter side A');
// a = Number(a);

// b = window.prompt('Enter side B');
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log('side C:', c)

document.getElementById('submitButton').onclick = function(){
    a = document.getElementById('aTextBpox').value;
    a = Number(a);

    b = document.getElementById('bTextBpox').value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    
    document.getElementById('clabel').innerHTML = 'Side C: ' + c;
}