let grade = window.prompt('asupkeun nilai');

switch(grade){
    case 'A':
        console.log('Alus eAuy');
        break;
    case 'B':
        console.log('Mayan lah');
        break;
    case 'C':
        console.log('Cukup lah');
        break;
    case 'D':
        console.log('Nu penting lulus');
        break;
    case 'F':
        console.log('Teu lulus');
        break;
    default:
        console.log(grade, 'nu baleg ai input teh');
}