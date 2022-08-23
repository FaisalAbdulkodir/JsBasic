let area;
let width = window.prompt('Enter width');
let height = window.prompt('Enter height');

area = getArea(width, height);
console.log('Hasil na :', area)

function getArea(width, height){
    // let result = width * height;
    // return result;
    return width * height;
}