//se hace referencias al elemento dentro del HTML
//para seleccionar una clase se usa .
//para selecionar una id selecionamos #
let subtitle = document.querySelector('#subtitle');
let parrafo = document.querySelector('#parrafo');

console.log(subtitle);

//con textcontet podemos acceder al valor del elemento HTML
//tambien podemos cambiar el valor asignado un nuevo valor 

console.log(subtitle.textContent)
subtitle.textContent= 'nuevo valor';

///classlist.add('mi-clase') lo utilizamos para agrega clases al elemento
subtitle.classList.add('red');
subtitle.classList.remove('red');

/* subtitle.textContent= 'subtitulo'; */
//se crea un arreglo con animales 
const animales=  ['perro', 'Gato', 'mapache','pez', 'leopardo', 'raton', 'zorro'];
const list= document.querySelector('#list');
//push(elemento) sirve para agregar un elemento al final de un arreglo
animales.push('elefante');
//foreach es un elemento para recorrer todos los e
//elemeto de un arreglo u objeto, tiene funcion anonima de callback
animales.forEach(function(animal, index){
    let item= document.createElement('li');
    item.textContent =`${index + 1 } ${animal}`;
    //<li>perro</li>
    list.appendChild(item);
} );
// foreach es un ciclo para recorrer todos los elementos 
//elemeto de un arreglo u objeto, tiene funcion anonima de callback
//usamos una funcion de flecha en este caso
 animales.forEach(function(animal, index){
    let item= document.createElement('li');
    item.textContent = `${index + 1 } ${animal}`;
    //<li>perro</li>
    list.appendChild(item);
} ); 
