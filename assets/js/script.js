/* var parrafos = document.getElementsByClassName('Parrafo');
console.log(parrafos);

document.getElementsByClassName('parrafo')[0].innerHTML='parrafo cambiado dinamicamente'; */
document.querySelectorAll('.parrafo')[1].texcontent = 'nuevo texto de parrafo';
document.querySelectorAll('#parrafo2').texcontent = 'nuevo texto de parrafo';

var parrafo1 = document.querySelectorAll('.parrafo')[0];
var parrafo2 = document.querySelector('#parrafo2');

/* document.getElementsByClassName('parrafo').innerHTML= 'soy el parrafo 2'; */

console.log(document.head);
console.log(document.body);
console.log(parrafo1)
console.log(parrafo2)